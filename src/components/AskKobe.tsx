"use client";
import { useState, useEffect } from "react";
import { Search, Bot, ArrowUp, X } from "lucide-react";
import { motion } from "framer-motion"

type ResultData = {
    result?: { format: "text" | "table"; answer?: string; columns?: string[]; rows?: string[][] };
    entry?: { type: "text" | "table"; answer: string; table?: { columns: string[]; rows: string[][] } };
    matched?: boolean;
    answer?: string;
    sources?: { title: string; url: string }[];
    remaining?: number;
    error?: string;
};

const demoScript = [
    {
        question: "What are Kobe's favourite programming languages?",
        result: {
            type: "table" as const,
            table: {
                columns: ["Rank", "Language", "Fluency", "Experience"],
                rows: [
                    ["1", "Python", "High", "4 years"],
                    ["2", "Swift", "Moderate", "2 years"],
                    ["3", "TypeScript", "High", "2 years"],
                    ["4", "Java", "Moderate", "3 years"],
                    ["5", "Golang", "decent", "1 years"],
                    ["6", "SQL", "High", "3 years"],
                ],
            },
        },
    },
    {
        question: "What's Kobe's ideal vacation?",
        result: {
            type: "text" as const,
            text: "Bali, Ibiza and Monaco all in one cycle,nothing else just me and my suitcase",
        },
    },
];

const TYPE_SPEED_MS = 60;
const PAUSE_BEFORE_CLICK_MS = 500;
const CLICK_DURATION_MS = 600;
const SHOWING_DDURATION_MS = 35000;

export default function AskKobe() {
    const [mode, setMode] = useState<"about" | "agent">("about");
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<ResultData | null>(null);
    const [error, setError] = useState("");

    const [demoPhase, setDemoPhase] = useState<"typing" | "clicking" | "showing">("typing");
    const [demoText, setDemoText] = useState("");
    const [demoIndex, setDemoIndex] = useState(0);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        if (hasInteracted) return;

        const current = demoScript[demoIndex];

        if (demoPhase === "typing") {
            if (demoText.length < current.question.length) {
                const timeout = setTimeout(() => {
                    setDemoText(current.question.slice(0, demoText.length + 1));
                }, TYPE_SPEED_MS);
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => setDemoPhase("clicking"), PAUSE_BEFORE_CLICK_MS);
                return () => clearTimeout(timeout);
            }
        }

        if (demoPhase === "clicking") {
            const timeout = setTimeout(() => setDemoPhase("showing"), CLICK_DURATION_MS);
            return () => clearTimeout(timeout);
        }

        if (demoPhase === "showing") {
            const timeout = setTimeout(() => {
                setDemoPhase("typing");
                setDemoText("");
                setDemoIndex((demoIndex + 1) % demoScript.length);
            }, SHOWING_DDURATION_MS);
            return () => clearTimeout(timeout);
        }
    }, [demoPhase, demoText, demoIndex, hasInteracted]);

    async function handleSubmit() {
        setHasInteracted(true);
        if (!query.trim() || loading) return;

        setLoading(true);
        setError("");
        setResult(null);

        try {
            const endpoint = mode === "about" ? "/api/ask" : "/api/agent";
            const res = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ question: query }),
            });
            const data = await res.json();

            if (!res.ok) {
                setError(data.error || " Something went wrong.");
            } else {
                setResult(data);
            }
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    function normalize(data: ResultData | null) {
        if (!data) return null;

        if (data.entry) {

            return {
                type: data.entry.type,
                text: data.entry.answer,
                table: data.entry.table,
            };
        }
        if (data.matched === false) {

            return { type: "text" as const, text: data.answer };
        }
        if (data.result) {

            return {
                type: data.result.format,
                text: data.result.answer,
                table: data.result.columns && data.result.rows
                    ? { columns: data.result.columns, rows: data.result.rows }
                    : undefined,
            };
        }
        return null;
    }


    return (
        <section id="ask-kobe" className="scroll-mt-10 px-1 py-8 md:p-8 max-w-3xl mx-auto w-full">
            <div className="text-center mb-3">
                <h2 className="text-3xl md:text-6xl font-serif">
                    .{"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}Ask Along{"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}.
                </h2>
                <div className="w-16 h-px bg-white/30 mx-auto my-1" />
            </div>

            <div className="bg-white/30 backdrop-blur-md border border-white/10 rounded-2xl p-1 md:p-4 relative z-10">

                <textarea

                    value={hasInteracted ? query : demoText}
                    onChange={(e) => {
                        setHasInteracted(true);
                        setQuery(e.target.value)
                    }
                    }
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                    placeholder={mode === "about" ? "Ask Anything about Kobe..." : "Ask Anything..."}
                    className="w-full bg-transparent outline-none text-lg placeholder:text-black-500 px-1 py-1"
                />


                <div className="flex items-center justify-between ">
                    <div className="flex bg-white/5 rounded-full p-1 border border-white/10">
                        <button
                            onClick={() => {
                                setMode("about");
                                setQuery("");
                                setResult(null);
                                setError("");
                            }}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors ${mode === "about" ? "bg-white text-black" : "text-gray-400"
                                }`}
                        >
                            <Search size={14} />
                            About me
                        </button>
                        <button
                            onClick={() => {
                                setMode("agent");
                                setQuery("");
                                setResult(null);
                                setError("");
                                setHasInteracted(true);
                                setDemoText("");
                            }}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors ${mode === "agent" ? "bg-white text-black" : "text-gray-400"
                                }`}
                        >
                            <Bot size={14} />
                            Agent
                        </button>
                    </div>
                    <div className="flex items-center gap-2">
                        {(hasInteracted ? query : demoText) && (
                            <button
                                onClick={() => {
                                    setQuery("");
                                    setDemoText("");
                                    setResult(null);
                                    setError("");
                                    setDemoPhase("typing");
                                    setHasInteracted(true);
                                }}
                                className="text-gray-400 hover:text-white px-2 transition-colors"
                            >
                                <X size={18} />
                            </button>
                        )}
                        <button
                            onClick={handleSubmit}
                            disabled={loading || !query.trim()}
                            className="bg-blue-500 text-black rounded-2xl w-9 h-9 flex items-center justify-center disabled:opacity-40 transition-opacity"
                        >
                            {loading ? "..." : <ArrowUp size={18} />}
                        </button>
                    </div>

                </div>

            </div>
            {!hasInteracted && demoPhase === "showing" && (() => {
                const demoResult = demoScript[demoIndex].result;

                return (
                    <div className="overflow-x-auto bg-black/90 backdrop-blur-sm border border-white/1 rounded-2xl p-5 -mt-4 relative z-0 max-h-[320px]">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                            </span>
                            <span className="text-sm text-green-400 font-medium">Complete</span>
                        </div>
                        {demoResult.type === "table" && demoResult.table ? (
                            <table className="w-full text-left">
                                <thead>
                                    <tr>
                                        {demoResult.table.columns.map((col) => (
                                            <th key={col} className="text-xs tracking-widest text-gray-400 uppercase pb-2 pr-8 font-normal">
                                                {col}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {demoResult.table.rows.map((row, i) => (
                                        <motion.tr
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: i * 0.08 }}
                                            className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                            {row.map((cell, j) => (
                                                <td key={j} className="whitespace-nowrap py-2 pr-4 text-gray-200">
                                                    {cell}
                                                </td>
                                            ))}
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p className="text-gray-200 leading-relaxed">{demoResult.text}</p>
                        )}
                    </div>
                );
            })()}
            {(() => {
                const normalized = normalize(result);
                if (!normalized) return null;
                return (
                    <div className="overflow-x-auto bg-black/90 backdrop-blur-sm border border-white/1 rounded-2xl p-5 -mt-4 relative z-0 max-h-[320px]">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                            </span>
                            <span className="text-sm text-green-400 font-medium">Complete</span>
                        </div>
                        {normalized.type === "table" && normalized.table ? (
                            <table className="w-full text-left">
                                <thead>
                                    <tr>
                                        {normalized.table.columns.map((col) => (
                                            <th key={col} className="text-xs tracking-widest text-gray-400 uppercase pb-2 pr-8 font-normal">
                                                {col}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {normalized.table.rows.map((row, i) => (
                                        <motion.tr
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: i * 0.08 }}
                                            className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                            {row.map((cell, j) => (
                                                <td key={j} className="whitespace-nowrap py-2 pr-4 text-gray-200">
                                                    {cell}
                                                </td>
                                            ))}
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p className="text-gray-200 leading-relaxed">{normalized.text}</p>
                        )}

                        {result?.sources && (
                            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
                                {result.sources.map((s) => (
                                    <a
                                        key={s.url}
                                        href={s.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full hover:bg-white/20 transition-colors"
                                    >
                                        {s.title}
                                    </a>
                                ))}
                            </div>
                        )
                        }
                        {typeof result?.remaining === "number" && (
                            <p className="text-xs text-gray-500 mt-4">{result.remaining} searches remaining today</p>
                        )}
                    </div>
                );
            })()}

            {error && <p className="text-red-400 mt-4">{error}</p>}
        </section >
    );
}