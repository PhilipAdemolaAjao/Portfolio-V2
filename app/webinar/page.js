'use client';
import { Calendar, Clock, Mic2, ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function WebinarLP() {
    const [sent, setSent] = useState(false);
    const submit = (e) => { e.preventDefault(); setSent(true); };

    return (
        <main className="min-h-screen bg-white dark:bg-neutral-950">
            <section className="bg-neutral-900 text-white">
                <div className="max-w-6xl mx-auto px-6 py-14">
                    <h1 className="text-4xl font-semibold leading-tight">
                        Live Webinar: <span className="text-red-400">How to Turn Campaigns into Pipeline</span>
                    </h1>
                    <p className="mt-3 text-white/90">
                        Learn a practical framework for audience research, messaging, and multi-channel measurement.
                    </p>
                    <div className="mt-5 flex gap-4 text-sm">
                        <div className="inline-flex items-center gap-2"><Calendar className="w-4 h-4" /> 24 Sep</div>
                        <div className="inline-flex items-center gap-2"><Clock className="w-4 h-4" /> 12:00–13:00 GMT</div>
                        <div className="inline-flex items-center gap-2"><Mic2 className="w-4 h-4" /> Philip Ajao</div>
                    </div>
                    <a href="#register" className="mt-6 inline-flex items-center gap-2 bg-red-500 text-white px-5 py-3 rounded-xl font-medium">
                        Save my seat <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <h2 className="text-2xl font-semibold">What you’ll learn</h2>
                    <ul className="mt-4 space-y-2 text-sm">
                        {[
                            'ICP → message → channel fit: picking your battles',
                            'Campaign test charters & setting guardrail metrics',
                            'GA4 + Looker Studio: building stakeholder-ready views',
                            'From webinar to demo: boosting conversion with follow-ups',
                        ].map((x, i) => (
                            <li key={i} className="flex gap-2"><CheckCircle className="w-4 h-4 mt-0.5 text-red-500" /> {x}</li>
                        ))}
                    </ul>

                    <div className="mt-8 rounded-2xl border p-5">
                        <div className="font-medium">Speakers</div>
                        <div className="grid sm:grid-cols-2 gap-4 mt-3">
                            {[
                                { name: 'Philip Ajao', title: 'Digital Marketing Specialist' },
                                { name: 'Guest Expert', title: 'Performance Marketer' },
                            ].map((s, i) => (
                                <div key={i} className="rounded-xl border p-4">
                                    <div className="font-medium">{s.name}</div>
                                    <div className="text-sm text-neutral-600 dark:text-neutral-300">{s.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div id="register" className="rounded-2xl border p-5 h-fit">
                    <div className="text-lg font-semibold">Register free</div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">We’ll send the join link and slides after the session.</p>

                    {!sent ? (
                        <form onSubmit={submit} className="mt-4 space-y-3">
                            <input className="w-full border rounded-xl px-3 py-2" placeholder="Full name" required />
                            <input type="email" className="w-full border rounded-xl px-3 py-2" placeholder="Work email" required />
                            <input className="w-full border rounded-xl px-3 py-2" placeholder="Company" />
                            <button className="w-full rounded-xl bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2">
                                Save my seat
                            </button>
                            <div className="text-xs text-neutral-500">By registering you agree to be contacted about related content.</div>
                        </form>
                    ) : (
                        <div className="mt-4 text-sm">
                            You’re in! Check your email for the calendar invite and join link.
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}