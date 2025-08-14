"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Shield,
    HeartPulse,
    Moon,
    Ruler,
    Wrench,
    Star,
    ArrowRight,
    Check,
    Gauge,
    ChevronRight,
} from "lucide-react";

// Paste this ENTIRE file into: app/sleepwell-mas/page.js  (Next.js App Router)
// Self-contained: Tailwind-only UI. Install deps: npm i framer-motion lucide-react
// Notes: This is a portfolio landing page for "Sleepwell MAS" produced by S4S Dental Laboratory.
// Imagery uses royalty-free Unsplash placeholders – replace with your own assets when ready.

const features = [
    {
        icon: Shield,
        title: "Clinically backed",
        desc: "Mandibular advancement therapy recommended in UK sleep guidelines for mild-to-moderate OSA and primary snoring.",
    },
    {
        icon: HeartPulse,
        title: "Real-world outcomes",
        desc: "Helps reduce snoring intensity and apnoeic events, supporting better sleep for patients and partners.",
    },
    {
        icon: Ruler,
        title: "Custom precision",
        desc: "Individually fabricated from dental impressions or scans for a snug, comfortable fit.",
    },
    {
        icon: Wrench,
        title: "Titratable advancement",
        desc: "Fine, incremental protrusion adjustments to balance airway patency and comfort.",
    },
    {
        icon: Gauge,
        title: "Slim, low‑profile",
        desc: "Lightweight design engineered for easy wearability and high night‑to‑night adherence.",
    },
    {
        icon: Moon,
        title: "Quiet & travel‑friendly",
        desc: "No hoses, power, or noise. Slip it into the travel case and sleep well anywhere.",
    },
];

const stepsPatient = [
    {
        title: "Assessment",
        body:
            "Book with a participating dentist or sleep clinic. Screening confirms suitability for mandibular advancement therapy.",
    },
    {
        title: "Impressions or scan",
        body:
            "Your clinician takes accurate dental impressions or an intraoral scan for a custom build.",
    },
    {
        title: "Fitting",
        body:
            "Your Sleepwell MAS is fitted, comfort-checked and adjusted. You'll get a simple wear & care guide.",
    },
    {
        title: "Titration",
        body:
            "Over 1–2 weeks, the device is advanced gradually to optimise airway opening while maintaining comfort.",
    },
];

const faqs = [
    {
        q: "What is a mandibular advancement splint (MAS)?",
        a: "A custom oral appliance that gently holds the lower jaw forward during sleep to help keep the airway open, reducing snoring and obstructive events.",
    },
    {
        q: "Is it an alternative to CPAP?",
        a: "For many with primary snoring or mild-to-moderate OSA, a MAS can be an effective alternative or adjunct to CPAP, particularly when CPAP is not tolerated.",
    },
    {
        q: "Is it comfortable?",
        a: "Because Sleepwell MAS is individually fabricated, most patients adapt within a few nights. The titratable design allows fine tuning for comfort.",
    },
    {
        q: "How long does it last?",
        a: "With proper care and hygiene, appliances commonly last 2–3 years. Your clinician will advise based on wear patterns.",
    },
];

export default function Page() {
    const [email, setEmail] = useState("");

    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white text-slate-900">
            {/* Top banner */}
            <div className="w-full border-b bg-indigo-700 text-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
                    <span className="font-medium">Sleepwell MAS — by S4S Dental Laboratory</span>
                    <a
                        href="#enquire"
                        className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-indigo-700 hover:bg-indigo-50"
                    >
                        Enquire today
                    </a>
                </div>
            </div>

            {/* Navbar */}
            <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-xl bg-indigo-700" />
                        <span className="text-lg font-bold tracking-tight">S4S • Sleepwell MAS</span>
                    </div>
                    <nav className="hidden gap-8 md:flex text-sm">
                        <a href="#why" className="hover:text-indigo-700">Why Sleepwell</a>
                        <a href="#how" className="hover:text-indigo-700">How it works</a>
                        <a href="#compare" className="hover:text-indigo-700">Compare</a>
                        <a href="#faq" className="hover:text-indigo-700">FAQ</a>
                    </nav>
                    <div className="flex items-center gap-2">
                        <a href="#clinicians" className="hidden rounded-xl px-3 py-2 text-sm font-medium hover:bg-slate-100 md:inline-flex">For Clinicians</a>
                        <a href="#enquire" className="rounded-xl bg-indigo-700 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-800">Find a provider</a>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2">
                    <div>
                        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-800">
                            <HeartPulse className="h-4 w-4" /> Clinically focused snoring & OSA solution
                        </span>
                        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                            Breathe easier. <span className="bg-gradient-to-r from-indigo-700 to-indigo-900 bg-clip-text text-transparent">Sleep well</span>.
                        </h1>
                        <p className="mt-4 text-lg text-slate-600">
                            Sleepwell MAS is a custom, titratable mandibular advancement splint from S4S that helps reduce snoring and
                            obstructive events — designed for comfort, adherence, and results.
                        </p>
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                            <a href="#enquire" className="group inline-flex items-center justify-center rounded-xl bg-indigo-700 px-5 py-3 text-white hover:bg-indigo-800">
                                Find a provider
                                <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                            </a>
                            <a href="#clinicians" className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold hover:bg-slate-50">
                                For clinicians
                            </a>
                        </div>
                        <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
                            <div className="flex items-center gap-1"><Star className="h-4 w-4" /> High patient satisfaction</div>
                            <div className="flex items-center gap-1"><Moon className="h-4 w-4" /> Quiet, device-only therapy</div>
                            <div className="flex items-center gap-1"><Shield className="h-4 w-4" /> UK lab fabrication</div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5">
                            <img
                                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1600&auto=format&fit=crop"
                                alt="Calm bedroom night scene"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 hidden w-60 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5 md:block">
                            <p className="text-sm font-semibold">Titratable design</p>
                            <p className="text-xs text-slate-600">Incremental advancement for optimum airway patency.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why / Features */}
            <section id="why" className="mx-auto max-w-7xl px-4 py-12">
                <div className="mb-8 max-w-2xl">
                    <h2 className="text-3xl font-extrabold tracking-tight">Why choose Sleepwell MAS</h2>
                    <p className="mt-2 text-slate-600">Engineered for clinical effectiveness and patient comfort, manufactured by S4S Dental Laboratory.</p>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    {features.map((f) => (
                        <div key={f.title} className="rounded-2xl border bg-white p-6 shadow-sm">
                            <div className="mb-3 flex items-center gap-3">
                                <div className="rounded-xl bg-indigo-100 p-2"><f.icon className="h-5 w-5 text-indigo-800" /></div>
                                <div className="text-base font-semibold">{f.title}</div>
                            </div>
                            <div className="text-sm text-slate-600">{f.desc}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Compare section */}
            <section id="compare" className="bg-slate-50">
                <div className="mx-auto max-w-7xl px-4 py-16">
                    <div className="mb-8 text-center">
                        <h2 className="text-2xl font-bold tracking-tight">Comfort-first therapy vs CPAP</h2>
                        <p className="text-slate-600">When appropriate, mandibular advancement can be a quiet, travel-ready alternative.</p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="rounded-3xl border bg-white p-6 shadow-sm">
                            <h3 className="mb-3 text-lg font-semibold">Sleepwell MAS</h3>
                            <ul className="space-y-2 text-sm">
                                {[
                                    "No power, hoses, or noise",
                                    "Custom, slim profile for comfort",
                                    "Easy travel with protective case",
                                    "Incremental titration for results",
                                ].map((b) => (
                                    <li key={b} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-indigo-700" />{b}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-3xl border bg-white p-6 shadow-sm">
                            <h3 className="mb-3 text-lg font-semibold">CPAP</h3>
                            <ul className="space-y-2 text-sm">
                                {[
                                    "Requires electricity and mask",
                                    "Bulkier setup and nightly maintenance",
                                    "Noise sensitivity may affect partners",
                                    "Travel can be less convenient",
                                ].map((b) => (
                                    <li key={b} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-slate-400" />{b}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Patient pathway */}
            <section id="how" className="mx-auto max-w-7xl px-4 py-16">
                <div className="mb-8 text-center">
                    <h2 className="text-2xl font-bold tracking-tight">From consultation to better sleep</h2>
                    <p className="text-slate-600">A guided pathway with your clinician.</p>
                </div>
                <div className="grid gap-6 md:grid-cols-4">
                    {stepsPatient.map((s, idx) => (
                        <div key={s.title} className="rounded-2xl border bg-white p-6 text-center shadow-sm">
                            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-700 text-white">{idx + 1}</div>
                            <div className="font-semibold">{s.title}</div>
                            <div className="mt-1 text-sm text-slate-600">{s.body}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonial strip */}
            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-4 py-16">
                    <div className="grid items-center gap-8 md:grid-cols-2">
                        <div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
                            <img
                                src="https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=1600&auto=format&fit=crop"
                                alt="Happy couple well-rested in the morning"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div>
                            <div className="mb-2 flex items-center gap-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-indigo-600 text-indigo-600" />
                                ))}
                            </div>
                            <blockquote className="text-lg italic text-slate-800">
                                “I noticed the difference the first week. Quieter nights, easier mornings. My partner sleeps through now.”
                            </blockquote>
                            <div className="mt-3 text-sm text-slate-500">— Verified patient, UK</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clinician CTA */}
            <section id="clinicians" className="bg-indigo-700">
                <div className="mx-auto max-w-6xl px-4 py-14 text-white">
                    <div className="grid items-center gap-8 md:grid-cols-2">
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight">Bring Sleepwell MAS to your practice</h3>
                            <p className="mt-2 text-indigo-100">
                                Partner with S4S for a reliable, UK-manufactured MAS pathway. We'll support onboarding, impression/scanning
                                guidance, titration, and patient resources.
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-indigo-100/90">
                                {[
                                    "Digital or traditional impressions",
                                    "Technical support from experienced lab technicians",
                                    "Educational resources and patient leaflets",
                                    "Fast, consistent turnaround",
                                ].map((b) => (
                                    <li key={b} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4" />{b}</li>
                                ))}
                            </ul>
                        </div>
                        <div id="enquire">
                            <LeadForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mx-auto max-w-3xl px-4 py-16">
                <h2 className="mb-6 text-center text-2xl font-bold tracking-tight">Frequently asked questions</h2>
                <div className="space-y-3">
                    {faqs.map((f) => (
                        <details key={f.q} className="rounded-xl border bg-white p-4 open:shadow-sm">
                            <summary className="cursor-pointer select-none text-sm font-semibold">{f.q}</summary>
                            <p className="mt-2 text-sm text-slate-600">{f.a}</p>
                        </details>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t bg-white">
                <div className="mx-auto max-w-7xl px-4 py-10">
                    <div className="grid gap-8 md:grid-cols-4">
                        <div>
                            <div className="mb-2 flex items-center gap-2">
                                <div className="h-8 w-8 rounded-xl bg-indigo-700" />
                                <span className="text-lg font-bold">S4S Dental Laboratory</span>
                            </div>
                            <p className="text-sm text-slate-600">Makers of the Sleepwell MAS.</p>
                        </div>
                        <div>
                            <h4 className="mb-3 font-semibold">Explore</h4>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li><a href="#why" className="hover:text-indigo-700">Why Sleepwell</a></li>
                                <li><a href="#how" className="hover:text-indigo-700">How it works</a></li>
                                <li><a href="#compare" className="hover:text-indigo-700">Compare</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-3 font-semibold">For clinicians</h4>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li>Onboarding</li>
                                <li>Support</li>
                                <li>Resources</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-3 font-semibold">Legal</h4>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li>Privacy</li>
                                <li>Terms</li>
                                <li>Cookies</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 border-t pt-6 text-xs text-slate-500">© {new Date().getFullYear()} S4S Dental Laboratory — Portfolio demo by Philip.</div>
                </div>
            </footer>
        </div>
    );
}

function LeadForm() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [clinic, setClinic] = useState("");

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                alert(`Thanks ${name}! We'll contact you at ${email} about Sleepwell MAS.`);
            }}
            className="rounded-2xl bg-white p-6 text-slate-800 shadow-2xl ring-1 ring-black/5"
        >
            <h4 className="text-lg font-semibold">Request an information pack</h4>
            <p className="mt-1 text-sm text-slate-600">Tell us a few details and the S4S team will reach out.</p>
            <div className="mt-4 grid gap-3">
                <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-300"
                />
                <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-300"
                />
                <input
                    value={clinic}
                    onChange={(e) => setClinic(e.target.value)}
                    placeholder="Clinic name (optional)"
                    className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-300"
                />
            </div>
            <button
                type="submit"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-700 px-5 py-3 font-semibold text-white hover:bg-indigo-800"
            >
                Send request <ArrowRight className="h-4 w-4" />
            </button>
            <p className="mt-2 text-xs text-slate-500">No spam. We’ll only use your details to respond to your enquiry.</p>
        </form>
    );
}