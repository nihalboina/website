import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";

type Item = {
    href: string;
    title: string;      // <= 7 words, includes duration
    about: string;      // exactly 10 words
    highlight?: boolean; // red if true, black otherwise
};

const items: Item[] = [
    // red
    {
        href: "https://www.youtube.com/watch?v=Om93hASQEjA",
        title: "Nirvana National Anthem Reading 1992 (2m)",
        about: "Cobain deconstructs anthem with feedback chaos at Reading festival 1992",
        highlight: true,
    },
    // red
    {
        href: "https://www.youtube.com/watch?v=AX4MKIDvXLM",
        title: "The Fountainhead Roark Courtroom Speech (6m)",
        about: "Monologue on integrity and creation, rejecting applause and collective compromise",
        highlight: true,
    },
    // red
    {
        href: "https://www.youtube.com/watch?v=4h5eZGj8vcU",
        title: "Whiplash Final Performance Caravan (9m)",
        about: "Drum duel crescendos, control wrestled back, teacher and student collide",
        highlight: true,
    },
    // red
    {
        href: "https://www.youtube.com/watch?v=WPDAbEVCSTU",
        title: "Jeen Yuhs First Look Clip (1m)",
        about: "Kanye and Mos Def trade verses, early hunger, documentary teaser",
        highlight: true,
    },
    // black
    {
        href: "https://www.youtube.com/watch?v=Z8vQKA-psOI",
        title: "Playboi Carti Venting Clip (3m)",
        about: "Carti speaking candidly on life, energy high, moment feels unfiltered",
    },
    // red
    {
        href: "https://www.reddit.com/r/Kanye/comments/azf6q0/kanye_performing_runaway_at_the_2010_vma_awards/",
        title: "Kanye Runaway Live 2010 VMAs (6m)",
        about: "Red suit stage tableau, sparse keys, ballerinas, public vulnerability crystallized",
        highlight: true,
    },
    // black
    {
        href: "https://www.youtube.com/watch?v=uDYwBg67k6g",
        title: "Kanye Ghost Town SNL Live (4m)",
        about: "Raw live mix with Cudi, 070 Shake soaring, catharsis lands",
    },
    // black
    {
        href: "https://www.youtube.com/watch?v=3qHkcs3kG44",
        title: "Naval Ravikant JRE 1309 (2h11m)",
        about: "Leverage, judgment, specific knowledge, compounding happiness; timeless mental models discussed",
    },
];

export default function ContentPage() {
    return (
        <main className="min-h-screen bg-white px-6 md:px-12 lg:px-24 py-12 max-w-[600px]">
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

            {/* Hero Section - Desktop/Tablet only */}
            <div className="hidden md:block mb-8">
                <h1 className="text-[40px] font-bold text-[#111111] leading-tight tracking-[-2.1px]">
                    content list.
                </h1>
            </div>

            {/* Intro Section */}
            <div className="text-[20px] leading-[1.5em] text-[#888888] tracking-[-0.7px] space-y-4 mb-8">
                <p>inspired from farza, here is my list of content that I like.</p>
                <p>i look up to the greats, and i've studied them religiously.</p>
                <p>
                    The pieces of content in <span className="text-red-400">red</span> are ones that deeply affected me, and pieces I return to.
                </p>
            </div>

            {/* Content List */}
            <ul className="list-disc marker:text-[#888888] ml-6 text-[20px] leading-[1.5em] tracking-[-0.7px] space-y-6">
                {items.map((it) => (
                    <li key={it.href} className="text-[#111111] group relative">
                        <a
                            href={it.href}
                            target="_blank"
                            rel="noopener"
                            className={(it.highlight ? "text-red-400" : "text-[#111111]") + " hover:underline"}
                            title={it.about}
                        >
                            {it.title}
                        </a>

                        {/* Tooltip on hover */}
                        <div className="hidden group-hover:block absolute left-0 top-full mt-2 bg-gray-900 text-white text-sm px-3 py-2 rounded shadow-lg z-10 max-w-md">
                            {it.about}
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
}