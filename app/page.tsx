import Link from "next/link";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
    return (
        <main className="min-h-screen bg-white px-6 md:px-12 lg:px-24 py-12 max-w-[700px]">
            <ThemeToggle />
            {/* Navigation */}
            <nav className="mb-12">
                <div className="flex gap-6 text-lg text-[#888888]">
                    <Link href="/" className="hover:text-cyan-500 transition-colors">
                        home
                    </Link>
                    <Link href="/content" className="hover:text-cyan-500 transition-colors">
                        content
                    </Link>
                    <a
                        href="https://x.com/nihalvsnihal"
                        target="_blank"
                        rel="noopener"
                        className="hover:text-cyan-500 transition-colors"
                    >
                        x
                    </a>
                </div>
            </nav>

            {/* Hero */}
            <div className="mb-6">
                <h1 className="text-[40px] md:text-[48px] font-bold text-[#111111] leading-tight tracking-[-2.1px]">
                    hi i&apos;m nihal.
                </h1>
            </div>

            {/* Bio */}
            <div className="text-[30px] leading-[1.6em] text-[#555555] tracking-[-0.4px] space-y-5">
                <p className="font-extrabold">i build products and ship fast. failing in public, optimizing for utility, vibes, and retention.</p>

                <p className="font-extrabold">
                    right now i&apos;m all-in on{" "}
                    <a
                        href="https://systemhealthai.com"
                        target="_blank"
                        rel="noopener"
                        className="text-cyan-600 hover:underline"
                    >
                        SYSTEM
                    </a>
                    — a health companion that changes your life
                </p>

                <p className="font-extrabold">stuff i&apos;ve built / shipped:</p>

                <ul className="list-disc pl-6 space-y-3">
                    <li>
                        <a
                            href="https://foodgrind.com"
                            target="_blank"
                            rel="noopener"
                            className="text-cyan-600 hover:underline"
                        >
                            FoodGrind
                        </a>{" "}
                        — consumer app that hit #9 trending in Food &amp; Drink (iOS) and 1k daily users at peak.
                    </li>
                    <li>
                        <a
                            href="https://prismclips.com"
                            target="_blank"
                            rel="noopener"
                            className="text-cyan-600 hover:underline"
                        >
                            Prism Clips
                        </a>{" "}
                        — ai editor that finds the viral moments in long-form video and auto-generates clips/titles.
                    </li>
                    <li>
                        <a
                            href="https://beternal.com"
                            target="_blank"
                            rel="noopener"
                            className="text-cyan-600 hover:underline"
                        >
                            Beternal
                        </a>{" "}
                        — model-driven sports odds tooling; experiments in signals, features, and event data.
                    </li>
                    <li>
                        <a
                            href="https://discourseapp.com"
                            target="_blank"
                            rel="noopener"
                            className="text-cyan-600 hover:underline"
                        >
                            Discourse
                        </a>{" "}
                        — real-time debate stages (ivS + flutter), built for crisp, two-sided conversations.
                    </li>
                    <li>
                        <a
                            href="https://systemhealthai.com"
                            target="_blank"
                            rel="noopener"
                            className="text-cyan-600 hover:underline"
                        >
                            SYSTEM
                        </a>{" "}
                        — current focus. daily missions, weekly scans, clean radar metrics. consumer first, science-grounded.
                    </li>
                </ul>

                <p className="font-extrabold">some wins, lots of Ls, constant iteration. i like building simple things that feel inevitable once you use them.</p>

                <p className="text-[#777777] font-extrabold">
                    i also tinker with ml systems (rag + memory, mission engines, video understanding). wrote papers, shipped infra, and i&apos;m still happiest
                    when the loop is: idea → prototype → users → refactor → ship again.
                </p>
            </div>

            {/* Footer */}
            <div className="mt-10 text-[18px] leading-[1.6em] text-[#777777]">
                <p>
                    p.s. if you want to build something together or have a crisp ask (&lt;300 chars), email{" "}
                    <a href="mailto:nihal@berkeley.edu" className="text-cyan-600 hover:underline">
                        nihal@berkeley.edu
                    </a>
                    . i usually reply.
                </p>
            </div>
        </main>
    );
}
