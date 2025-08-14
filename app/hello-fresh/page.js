"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Clock, Leaf, Smartphone, Star, Truck, Flame, Shield, Sparkles, ChevronRight, Play } from "lucide-react";

// Paste this ENTIRE file into: app/hello-fresh/page.js  (Next.js App Router)
// It is self-contained: Tailwind-only UI, no shadcn/ui required.
// Make sure Tailwind is set up and run: npm install framer-motion lucide-react

const features = [
    { icon: Leaf, title: "Fresh, seasonal produce", desc: "Locally sourced ingredients picked at peak freshness." },
    { icon: Clock, title: "Ready in 20–30 mins", desc: "Chef-designed recipes with step-by-step cards." },
    { icon: Truck, title: "Flexible weekly delivery", desc: "Skip, pause, or cancel anytime — you're in control." },
    { icon: Smartphone, title: "Smart cooking app", desc: "Plan meals, track deliveries, and get cooking tips." },
];

const plans = [
    { name: "Solo", price: 5.99, tag: "Best for 1", bullets: ["3 meals / week", "400–700 kcal", "Veg & non-veg"] },
    { name: "Couple", price: 4.99, tag: "Popular", bullets: ["4 meals / week", "Balanced & quick", "Swap anytime"] },
    { name: "Family", price: 4.49, tag: "Value", bullets: ["5 meals / week", "Kid-approved", "Bigger portions"] },
];

const recipes = [
    {
        title: "Fiery Harissa Chicken with Lemon Couscous",
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1600&auto=format&fit=crop",
        tags: ["High-Protein", "30 mins"],
    },
    {
        title: "Veggie Gnocchi in Tomato-Basil Cream",
        img: "https://images.unsplash.com/photo-1512058564366-c9e3e0463967?q=80&w=1600&auto=format&fit=crop",
        tags: ["Vegetarian", "25 mins"],
    },
    {
        title: "Sesame Beef Rice Bowls",
        img: "https://images.unsplash.com/photo-1598866594230-a7c12756260c?q=80&w=1600&auto=format&fit=crop",
        tags: ["Customer Fav", "20 mins"],
    },
];

export default function Page() {
    const [email, setEmail] = useState("");

    return (
        <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white text-zinc-900">
            {/* Top announcement bar */}
            <div className="w-full border-b bg-emerald-600 text-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
                    <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4" />
                        <span className="font-medium">Holiday Intro Offer: <strong>50% off your first box</strong> + free dessert</span>
                    </div>
                    <button className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">Claim deal</button>
                </div>
            </div>

            {/* Navbar */}
            <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-xl bg-emerald-600" />
                        <span className="text-lg font-bold tracking-tight">FreshBox</span>
                    </div>
                    <nav className="hidden gap-8 md:flex text-sm">
                        <a href="#recipes" className="hover:text-emerald-700">Recipes</a>
                        <a href="#how" className="hover:text-emerald-700">How it works</a>
                        <a href="#plans" className="hover:text-emerald-700">Plans</a>
                        <a href="#faq" className="hover:text-emerald-700">FAQ</a>
                    </nav>
                    <div className="flex items-center gap-2">
                        <button className="hidden rounded-xl px-3 py-2 text-sm font-medium hover:bg-zinc-100 md:inline-flex">Log in</button>
                        <a href="#plans" className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">Get started</a>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 md:grid-cols-2 md:gap-12">
                    <div>
                        <span className="mb-4 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">New Winter Menu</span>
                        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                            Cook brilliant dinners in <span className="bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">20–30 minutes</span>
                        </h1>
                        <p className="mt-4 text-lg text-zinc-600">
                            Fresh, pre‑portioned ingredients delivered to your door. Choose from 70+ recipes each week and pause anytime.
                        </p>

                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                            <a href="#plans" className="group inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-white hover:bg-emerald-700">
                                Start now
                                <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                            </a>
                            <a href="#how" className="inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold hover:bg-zinc-50">
                                <Play className="h-4 w-4" /> See how it works
                            </a>
                        </div>

                        <div className="mt-6 flex items-center gap-4 text-sm text-zinc-600">
                            <div className="flex items-center gap-1"><Shield className="h-4 w-4" />14‑day freshness guarantee</div>
                            <div className="flex items-center gap-1"><Flame className="h-4 w-4" />700k+ meals cooked</div>
                            <div className="flex items-center gap-1"><Star className="h-4 w-4" />4.8/5 avg. rating</div>
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
                                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600&auto=format&fit=crop"
                                alt="Fresh ingredients and a finished meal"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 hidden w-52 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5 md:block">
                            <p className="text-sm font-semibold">This week’s top pick</p>
                            <p className="text-xs text-zinc-600">Smoky Chipotle Shrimp Tacos</p>
                            <div className="mt-2 flex items-center gap-2 text-xs text-emerald-700">
                                <Check className="h-3.5 w-3.5" /> 20 mins
                                <Check className="h-3.5 w-3.5" /> 590 kcal
                                <Check className="h-3.5 w-3.5" /> Gluten‑free
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* USP / features */}
            <section id="how" className="mx-auto max-w-7xl px-4 py-12">
                <div className="grid gap-6 md:grid-cols-4">
                    {features.map((f) => (
                        <div key={f.title} className="rounded-2xl border bg-white p-5 shadow-sm">
                            <div className="mb-2 flex items-center gap-3">
                                <div className="rounded-xl bg-emerald-100 p-2"><f.icon className="h-5 w-5 text-emerald-700" /></div>
                                <div className="text-base font-semibold">{f.title}</div>
                            </div>
                            <div className="text-sm text-zinc-600">{f.desc}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Recipe gallery */}
            <section id="recipes" className="bg-emerald-50/50">
                <div className="mx-auto max-w-7xl px-4 py-16">
                    <div className="mb-8 flex items-end justify-between">
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight">Explore this week’s recipes</h2>
                            <p className="text-zinc-600">Hand‑picked dishes for every taste and diet.</p>
                        </div>
                        <a href="#" className="rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-zinc-50">See all recipes</a>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {recipes.map((r) => (
                            <div key={r.title} className="overflow-hidden rounded-3xl border bg-white shadow-sm">
                                <div className="aspect-video">
                                    <img src={r.img} alt={r.title} className="h-full w-full object-cover" />
                                </div>
                                <div className="p-5">
                                    <div className="mb-2 flex flex-wrap gap-2">
                                        {r.tags.map((t) => (
                                            <span key={t} className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium">{t}</span>
                                        ))}
                                    </div>
                                    <h3 className="text-lg font-semibold">{r.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing / plans */}
            <section id="plans" className="mx-auto max-w-7xl px-4 py-16">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight">Simple plans, big value</h2>
                    <p className="mt-2 text-zinc-600">Intro offer applied at checkout. Cancel anytime.</p>
                </div>
                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {plans.map((p, i) => (
                        <div key={p.name} className={`rounded-3xl border bg-white p-6 shadow-sm ${i === 1 ? "border-emerald-600 shadow-lg" : ""}`}>
                            <div className="flex items-center justify-between">
                                <div className="text-xl font-semibold">{p.name}</div>
                                <span className="rounded-full bg-emerald-600 px-2.5 py-1 text-xs font-semibold text-white">{p.tag}</span>
                            </div>
                            <div className="mt-2 text-4xl font-extrabold">£{p.price}<span className="text-base font-medium text-zinc-500">/serving</span></div>
                            <ul className="mt-4 space-y-2 text-sm">
                                {p.bullets.map((b) => (
                                    <li key={b} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-emerald-600" />{b}</li>
                                ))}
                            </ul>
                            <a href="#" className="mt-6 block rounded-xl bg-emerald-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-emerald-700">Choose {p.name}</a>
                        </div>
                    ))}
                </div>
            </section>

            {/* Social proof */}
            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-4 py-16">
                    <div className="grid items-center gap-8 md:grid-cols-2">
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight">Loved by home cooks</h2>
                            <p className="mt-2 text-zinc-600">Our community has cooked over 700,000 FreshBox dinners and rated us 4.8/5 on average.</p>
                            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                                <div className="rounded-2xl bg-emerald-50 p-4">
                                    <div className="text-3xl font-extrabold">4.8</div>
                                    <div className="text-xs text-zinc-600">Average rating</div>
                                </div>
                                <div className="rounded-2xl bg-emerald-50 p-4">
                                    <div className="text-3xl font-extrabold">70+</div>
                                    <div className="text-xs text-zinc-600">Weekly recipes</div>
                                </div>
                                <div className="rounded-2xl bg-emerald-50 p-4">
                                    <div className="text-3xl font-extrabold"><span className="align-top text-base">£</span>4.49</div>
                                    <div className="text-xs text-zinc-600">Per serving from</div>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="rounded-2xl border bg-white p-5 text-sm text-zinc-700 shadow-sm">
                                    <div className="mb-2 flex items-center gap-1">
                                        {Array.from({ length: 5 }).map((_, idx) => (<Star key={idx} className="h-4 w-4 fill-emerald-500 text-emerald-500" />))}
                                    </div>
                                    “FreshBox has made weeknights so much easier. The recipes are fool‑proof and taste restaurant‑quality.”
                                    <div className="mt-3 text-xs text-zinc-500">— Verified UK customer</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Email capture */}
            <section className="bg-emerald-600">
                <div className="mx-auto max-w-4xl px-4 py-12 text-white">
                    <h3 className="text-center text-2xl font-bold tracking-tight">Get the week’s menu — and your 50% off code</h3>
                    <form
                        onSubmit={(e) => { e.preventDefault(); alert(`Thanks! We'll send menus to ${email}`); }}
                        className="mt-6 flex flex-col gap-3 sm:flex-row"
                    >
                        <input
                            type="email"
                            required
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-xl bg-white px-4 py-3 text-zinc-900 outline-none focus:ring-2 focus:ring-emerald-300"
                        />
                        <button type="submit" className="rounded-xl bg-white px-5 py-3 font-semibold text-emerald-700 hover:bg-emerald-50">Send me the menu</button>
                    </form>
                    <p className="mt-2 text-center text-xs text-emerald-100">No spam. Unsubscribe anytime.</p>
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mx-auto max-w-3xl px-4 py-16">
                <h2 className="mb-6 text-center text-2xl font-bold tracking-tight">Frequently asked questions</h2>
                <div className="space-y-3">
                    <details className="rounded-xl border bg-white p-4 open:shadow-sm">
                        <summary className="cursor-pointer select-none text-sm font-semibold">Can I pause or cancel my plan?</summary>
                        <p className="mt-2 text-sm text-zinc-600">Yes — you can skip weeks, pause, or cancel anytime from your account settings.</p>
                    </details>
                    <details className="rounded-xl border bg-white p-4 open:shadow-sm">
                        <summary className="cursor-pointer select-none text-sm font-semibold">Do you cater to dietary preferences?</summary>
                        <p className="mt-2 text-sm text-zinc-600">We offer veggie, high‑protein, low‑calorie, dairy‑free, and family‑friendly options each week.</p>
                    </details>
                    <details className="rounded-xl border bg-white p-4 open:shadow-sm">
                        <summary className="cursor-pointer select-none text-sm font-semibold">Where do you deliver?</summary>
                        <p className="mt-2 text-sm text-zinc-600">We deliver across the UK. Delivery windows are shown at checkout based on your postcode.</p>
                    </details>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t bg-white">
                <div className="mx-auto max-w-7xl px-4 py-10">
                    <div className="grid gap-8 md:grid-cols-4">
                        <div>
                            <div className="mb-2 flex items-center gap-2">
                                <div className="h-8 w-8 rounded-xl bg-emerald-600" />
                                <span className="text-lg font-bold">FreshBox</span>
                            </div>
                            <p className="text-sm text-zinc-600">Fresh ingredients. Smarter dinners.</p>
                        </div>
                        <div>
                            <h4 className="mb-3 font-semibold">Explore</h4>
                            <ul className="space-y-2 text-sm text-zinc-600">
                                <li><a href="#recipes" className="hover:text-emerald-700">Recipes</a></li>
                                <li><a href="#plans" className="hover:text-emerald-700">Plans</a></li>
                                <li><a href="#how" className="hover:text-emerald-700">How it works</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-3 font-semibold">Company</h4>
                            <ul className="space-y-2 text-sm text-zinc-600">
                                <li>About</li>
                                <li>Careers</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-3 font-semibold">Legal</h4>
                            <ul className="space-y-2 text-sm text-zinc-600">
                                <li>Privacy</li>
                                <li>Terms</li>
                                <li>Cookies</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 border-t pt-6 text-xs text-zinc-500">© {new Date().getFullYear()} FreshBox — Portfolio demo by Philip.</div>
                </div>
            </footer>
        </div>
    );
}