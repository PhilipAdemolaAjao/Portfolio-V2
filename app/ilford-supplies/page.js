'use client';
import { CheckCircle, Truck, ShieldCheck, ArrowRight } from 'lucide-react';

export default function IlfordSuppliesLP() {
    return (
        <main className="min-h-screen bg-white dark:bg-neutral-950">
            {/* Hero / Offer */}
            <section className="bg-red-600 text-white">
                <div className="max-w-6xl mx-auto px-6 py-14">
                    <h1 className="text-4xl font-semibold leading-tight">
                        Office Supplies, Delivered — <span className="underline decoration-white/60">10% off first order</span>
                    </h1>
                    <p className="mt-3 text-white/90">
                        Printers, toners, paper, and 3D printers for campuses & businesses. Reliable stock. Fast support.
                    </p>
                    <div className="mt-6 flex gap-3">
                        <a href="#products" className="inline-flex items-center gap-2 bg-white text-red-700 px-5 py-3 rounded-xl font-medium">
                            Shop bestsellers <ArrowRight className="w-4 h-4" />
                        </a>
                        <a href="#contact" className="inline-flex items-center gap-2 border border-white/70 px-5 py-3 rounded-xl font-medium">
                            Get a quote
                        </a>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section id="products" className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { icon: <Truck className="w-5 h-5" />, title: 'Fast delivery', text: 'Same/next-day delivery in major cities.' },
                        { icon: <ShieldCheck className="w-5 h-5" />, title: 'Verified stock', text: 'Genuine toners & consumables.' },
                        { icon: <CheckCircle className="w-5 h-5" />, title: 'Account support', text: 'Procurement help & after-sales.' },
                    ].map((b, i) => (
                        <div key={i} className="rounded-2xl border p-6">
                            <div className="flex items-center gap-2 font-semibold">{b.icon}{b.title}</div>
                            <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-2">{b.text}</p>
                        </div>
                    ))}
                </div>

                {/* Simple product tiles (use your own images later) */}
                <h2 className="text-2xl font-semibold mt-12">Popular items</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    {[
                        { name: 'A4 Paper – 80gsm', img: '/assets/paper.jpg', bullets: ['Carton (5 reams)', 'Whiteness 161 CIE'] },
                        { name: 'Laser Printer', img: '/assets/printer.jpg', bullets: ['Wireless', 'Duplex printing'] },
                        { name: '3D Printer', img: '/assets/3dprinter.jpg', bullets: ['220×220×250mm', 'PLA/ABS'] },
                    ].map((p, i) => (
                        <div key={i} className="rounded-2xl border p-4">
                            <div className="aspect-video rounded-xl border bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
                                <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="mt-3 font-medium">{p.name}</div>
                            <ul className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                                {p.bullets.map((b, j) => <li key={j} className="flex gap-2"><CheckCircle className="w-4 h-4 mt-0.5 text-red-600" />{b}</li>)}
                            </ul>
                            <a href="#contact" className="mt-4 inline-flex items-center gap-2 rounded-xl border px-4 py-2">Request price <ArrowRight className="w-4 h-4" /></a>
                        </div>
                    ))}
                </div>
            </section>

            {/* Comparison */}
            <section className="max-w-6xl mx-auto px-6 pb-12">
                <h3 className="text-xl font-semibold">Why choose us over a marketplace?</h3>
                <div className="mt-4 overflow-x-auto rounded-2xl border">
                    <table className="min-w-[700px] w-full text-sm">
                        <thead className="bg-neutral-50 dark:bg-neutral-900">
                            <tr>
                                <th className="text-left p-3">Feature</th>
                                <th className="text-left p-3">Ilford Supplies</th>
                                <th className="text-left p-3">Generic Marketplace</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ['Account manager', 'Yes', 'No'],
                                ['Verified stock', 'Yes', 'Mixed'],
                                ['Education discounts', 'Yes', 'Rare'],
                                ['In-country support', 'Yes', 'Limited'],
                            ].map((r, i) => (
                                <tr key={i} className="border-t">
                                    {r.map((c, j) => <td key={j} className="p-3">{c}</td>)}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="max-w-6xl mx-auto px-6 pb-16">
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 rounded-2xl border p-6">
                        <div className="text-lg font-semibold">Request a quote</div>
                        <form className="mt-4 grid sm:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
                            <input className="border rounded-xl px-3 py-2" placeholder="Full name" required />
                            <input type="email" className="border rounded-xl px-3 py-2" placeholder="Work email" required />
                            <input className="border rounded-xl px-3 py-2 sm:col-span-2" placeholder="Company / Department" />
                            <textarea className="border rounded-xl px-3 py-2 sm:col-span-2" rows={4} placeholder="Tell us what you need (e.g., 20 toner cartridges, 10 printers)"></textarea>
                            <button className="rounded-xl bg-red-600 hover:bg-red-700 text-white px-4 py-2 sm:col-span-2">Send request</button>
                        </form>
                    </div>
                    <div className="rounded-2xl border p-6">
                        <div className="font-medium">Need help fast?</div>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">Live chat and email support available.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}