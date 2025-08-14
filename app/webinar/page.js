"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Warehouse, Headphones, ShieldCheck, Truck, Star, Check, ChevronRight, Building2, Phone, Mail, Calendar, ArrowRight } from "lucide-react";

// Paste this ENTIRE file into: app/ilford/page.js  (Next.js App Router)
// Self-contained: Tailwind-only UI. Install deps: npm i framer-motion lucide-react
// Brand: Ilford Multi Concept Service Limited (red & white). Replace placeholder images with your assets in /public.

const categories = [
    { name: "Photocopiers", img: "https://images.unsplash.com/photo-1586486589197-51e3a6a0d0aa?q=80&w=1600&auto=format&fit=crop", items: 24 },
    { name: "Printers", img: "https://images.unsplash.com/photo-1586486762798-c09a8b66a8b0?q=80&w=1600&auto=format&fit=crop", items: 31 },
    { name: "3D Printers", img: "https://images.unsplash.com/photo-1531379410502-63bfe8cdaf9e?q=80&w=1600&auto=format&fit=crop", items: 12 },
    { name: "Toner & Ink", img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1600&auto=format&fit=crop", items: 96 },
    { name: "Paper & Supplies", img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop", items: 58 },
    { name: "Service & Repairs", img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop", items: 0 },
];

const features = [
    { icon: Warehouse, title: "Enterprise-grade stock", desc: "Top brands and vetted hardware for offices, schools, and homes." },
    { icon: Truck, title: "Nationwide delivery (NG)", desc: "Fast dispatch across Nigeria with real-time tracking." },
    { icon: Headphones, title: "Live support & on-site", desc: "Chat, phone, and on-site engineers for installs & repairs." },
    { icon: ShieldCheck, title: "Secure payments", desc: "PCI-compliant checkout with receipts and order tracking." },
];

const bestsellers = [
    { name: "OfficeJet Pro X500", price: 1499.0, img: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1600&auto=format&fit=crop", tag: "Bestseller" },
    { name: "Mono Laser Copier M420dn", price: 2199.0, img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop", tag: "Workhorse" },
    { name: "FDM 3D Printer Pro S", price: 899.0, img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop", tag: "New" },
    { name: "Universal Black Toner (XL)", price: 59.0, img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1600&auto=format&fit=crop", tag: "Value" },
];

export default function Page() {
    return (
        <div className="min-h-screen bg-white text-zinc-900">
            {/* Top notice */}
            <div className="w-full border-b bg-red-700 text-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
                    <div className="flex items-center gap-2">
                        <ShoppingCart className="h-4 w-4" />
                        <span className="font-medium">Welcome to Ilford Multi Concept Service Limited — your office tech partner</span>
                    </div>
                    <a href="#webinar" className="rounded-full bg-white px-3 py-1 font-semibold text-red-700 hover:bg-red-50">Free webinar</a>
                </div>
            </div>

            {/* Navbar */}
            <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-xl bg-red-700" />
                        <span className="text-lg font-bold tracking-tight">Ilford Multi Concept</span>
                    </div>
                    <nav className="hidden gap-8 md:flex text-sm">
                        <a href="#categories" className="hover:text-red-700">Categories</a>
                        <a href="#bestsellers" className="hover:text-red-700">Bestsellers</a>
                        <a href="#services" className="hover:text-red-700">Services</a>
                        <a href="#webinar" className="hover:text-red-700">Webinar</a>
                    </nav>
                    <div className="flex items-center gap-2">
                        <a href="#" className="hidden rounded-xl px-3 py-2 text-sm font-medium hover:bg-zinc-100 md:inline-flex">Log in</a>
                        <a href="#bestsellers" className="rounded-xl bg-red-700 px-4 py-2 text-sm font-semibold text-white hover:bg-red-800">Shop now</a>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:grid-cols-2">
                    <div>
                        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-800">
                            <Building2 className="h-4 w-4" /> B2B & B2C Office Tech in Nigeria
                        </span>
                        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                            Power your office with <span className="bg-gradient-to-r from-red-700 to-red-900 bg-clip-text text-transparent">reliable equipment</span>
                        </h1>
                        <p className="mt-4 text-lg text-zinc-600">
                            Printers, photocopiers, 3D printers, paper, toner, and expert support — everything you need to work smarter.
                        </p>
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                            <a href="#bestsellers" className="group inline-flex items-center justify-center rounded-xl bg-red-700 px-5 py-3 text-white hover:bg-red-800">
                                Browse bestsellers
                                <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                            </a>
                            <a href="#webinar" className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold hover:bg-zinc-50">
                                Join our free webinar
                            </a>
                        </div>
                        <div className="mt-6 flex items-center gap-4 text-sm text-zinc-600">
                            <div className="flex items-center gap-1"><Star className="h-4 w-4 text-yellow-500" /> Trusted by universities & SMEs</div>
                            <div className="flex items-center gap-1"><Truck className="h-4 w-4 text-red-700" /> Nationwide delivery</div>
                            <div className="flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-red-700" /> Warranty & service</div>
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
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"
                                alt="Modern office with printer and copier"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 hidden w-60 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5 md:block">
                            <p className="text-sm font-semibold">Smart procurement</p>
                            <p className="text-xs text-zinc-600">Bundle hardware + supplies + support and save up to 20%.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section id="services" className="mx-auto max-w-7xl px-4 py-12">
                <div className="mb-8 max-w-2xl">
                    <h2 className="text-3xl font-extrabold tracking-tight">Why buy from Ilford</h2>
                    <p className="mt-2 text-zinc-600">From first quote to after‑sales support, we keep offices running.</p>
                </div>
                <div className="grid gap-6 md:grid-cols-4">
                    {features.map((f) => (
                        <div key={f.title} className="rounded-2xl border bg-white p-6 shadow-sm">
                            <div className="mb-3 flex items-center gap-3">
                                <div className="rounded-xl bg-red-100 p-2"><f.icon className="h-5 w-5 text-red-800" /></div>
                                <div className="text-base font-semibold">{f.title}</div>
                            </div>
                            <div className="text-sm text-zinc-600">{f.desc}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Categories */}
            <section id="categories" className="bg-zinc-50">
                <div className="mx-auto max-w-7xl px-4 py-16">
                    <div className="mb-8 flex items-end justify-between">
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight">Shop by category</h2>
                            <p className="text-zinc-600">Everything from big hardware to daily supplies.</p>
                        </div>
                        <a href="#bestsellers" className="rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-white">View all</a>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
                        {categories.map((c) => (
                            <a key={c.name} href="#bestsellers" className="group overflow-hidden rounded-2xl border bg-white shadow-sm">
                                <div className="aspect-square">
                                    <img src={c.img} alt={c.name} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                                </div>
                                <div className="flex items-center justify-between p-3 text-sm">
                                    <span className="font-semibold">{c.name}</span>
                                    <span className="text-zinc-500">{c.items}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bestsellers */}
            <section id="bestsellers" className="mx-auto max-w-7xl px-4 py-16">
                <div className="mb-8 text-center">
                    <h2 className="text-2xl font-bold tracking-tight">Bestsellers</h2>
                    <p className="text-zinc-600">Popular picks with great reviews and fast delivery.</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {bestsellers.map((p) => (
                        <div key={p.name} className="overflow-hidden rounded-3xl border bg-white shadow-sm">
                            <div className="aspect-video">
                                <img src={p.img} alt={p.name} className="h-full w-full object-cover" />
                            </div>
                            <div className="p-5">
                                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium">{p.tag}</span>
                                <h3 className="mt-2 text-lg font-semibold">{p.name}</h3>
                                <div className="mt-1 text-2xl font-extrabold">₦{formatNaira(p.price)}</div>
                                <button className="mt-4 inline-flex items-center justify-center rounded-xl bg-red-700 px-4 py-2 text-sm font-semibold text-white hover:bg-red-800">
                                    Add to cart <ChevronRight className="ml-1 h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Webinar CTA */}
            <WebinarSection />

            {/* Testimonials / Stats */}
            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-4 py-16">
                    <div className="grid items-center gap-8 md:grid-cols-2">
                        <div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
                            <img
                                src="https://images.unsplash.com/photo-1529336953121-4b1d09f8cdf4?q=80&w=1600&auto=format&fit=crop"
                                alt="Happy team around office equipment"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div>
                            <div className="mb-2 flex items-center gap-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-red-600 text-red-600" />
                                ))}
                            </div>
                            <blockquote className="text-lg text-zinc-800">
                                “Ilford made procurement painless — from quoting to installation. Our downtime dropped and print costs fell.”
                            </blockquote>
                            <div className="mt-3 text-sm text-zinc-500">— University Procurement Lead, Lagos</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t bg-white">
                <div className="mx-auto max-w-7xl px-4 py-10">
                    <div className="grid gap-8 md:grid-cols-4">
                        <div>
                            <div className="mb-2 flex items-center gap-2">
                                <div className="h-8 w-8 rounded-xl bg-red-700" />
                                <span className="text-lg font-bold">Ilford Multi Concept</span>
                            </div>
                            <p className="text-sm text-zinc-600">Office tech. Real support.</p>
                        </div>
                        <div>
                            <h4 className="mb-3 font-semibold">Shop</h4>
                            <ul className="space-y-2 text-sm text-zinc-600">
                                <li>Printers</li>
                                <li>Photocopiers</li>
                                <li>3D Printers</li>
                                <li>Toner & Supplies</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-3 font-semibold">Services</h4>
                            <ul className="space-y-2 text-sm text-zinc-600">
                                <li>Installation</li>
                                <li>Maintenance</li>
                                <li>On-site support</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-3 font-semibold">Contact</h4>
                            <ul className="space-y-2 text-sm text-zinc-600">
                                <li>WhatsApp & Phone</li>
                                <li>Email</li>
                                <li>Ilford Building</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 border-t pt-6 text-xs text-zinc-500">© {new Date().getFullYear()} Ilford Multi Concept Service Limited — Portfolio demo by Philip.</div>
                </div>
            </footer>
        </div>
    );
}

function WebinarSection() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");

    return (
        <section id="webinar" className="bg-red-700">
            <div className="mx-auto max-w-6xl px-4 py-14 text-white">
                <div className="grid items-center gap-8 md:grid-cols-2">
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight">Free Webinar: Smarter Office Procurement in 2025</h3>
                        <p className="mt-2 text-red-100">
                            Learn how to choose the right printers, copiers, and 3D printers for performance and cost. Live Q&A with Ilford engineers.
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-red-100/95">
                            {[
                                "Optimising TCO (total cost of ownership)",
                                "When to lease vs buy",
                                "Setup, maintenance & consumables planning",
                                "Live demo and case studies",
                            ].map((b) => (
                                <li key={b} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4" />{b}</li>
                            ))}
                        </ul>
                        <div className="mt-4 inline-flex items-center gap-2 text-sm text-red-100">
                            <Calendar className="h-4 w-4" /> Date: TBA • Time: 11:00–12:00 WAT • Online
                        </div>
                    </div>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert(`Thanks ${name}! We\'ll send access details to ${email}.`);
                        }}
                        className="rounded-2xl bg-white p-6 text-zinc-800 shadow-2xl ring-1 ring-black/5"
                    >
                        <h4 className="text-lg font-semibold">Reserve your seat</h4>
                        <p className="mt-1 text-sm text-zinc-600">Limited spots — enter your details to receive the join link.</p>
                        <div className="mt-4 grid gap-3">
                            <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-red-300" />
                            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-red-300" />
                            <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company (optional)" className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-red-300" />
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone (optional)" className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-red-300" />
                        </div>
                        <button type="submit" className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-red-700 px-5 py-3 font-semibold text-white hover:bg-red-800">
                            Register now <ArrowRight className="h-4 w-4" />
                        </button>
                        <p className="mt-2 text-xs text-zinc-500">No spam. We’ll only use your details for this webinar and relevant Ilford updates.</p>
                    </form>
                </div>
            </div>
        </section>
    );
}

function formatNaira(n) {
    try {
        return new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(n).replace("NGN", "").trim();
    } catch {
        return n.toLocaleString();
    }
}