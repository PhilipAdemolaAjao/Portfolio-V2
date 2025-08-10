'use client';
import { CheckCircle, ChevronRight, ShieldCheck, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function SleepwellMASLP() {
    const [sent, setSent] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        setSent(true); // demo: pretend we submitted
    };

    return (
        <main className="min-h-screen bg-white dark:bg-neutral-950">
            <section className="bg-neutral-900 text-white">
                <div className="max-w-5xl mx-auto px-6 py-14">
                    <h1 className="text-4xl font-semibold leading-tight">
                        Grow your practice with <span className="text-cyan-300">Sleepwell MAS</span>
                    </h1>
                    <p className="mt-4 text-white/90">
                        Clinically proven mandibular advancement for snoring & mild OSA. Educate patients, drive referrals, and unlock new revenue.
                    </p>
                    <a href="#form" className="mt-6 inline-flex items-center gap-2 bg-cyan-400 text-neutral-900 px-5 py-3 rounded-xl font-medium">
                        Get the Practice Starter Kit <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </section>

            <section className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <h2 className="text-2xl font-semibold">Why dentists choose Sleepwell MAS</h2>
                    <ul className="mt-4 space-y-2 text-sm">
                        {[
                            'Evidence-based therapy for snoring & mild OSA',
                            'Chairside education toolkit & consent templates',
                            'Marketing support: webinar series + patient leaflets',
                            'Training pathway for your clinical team',
                        ].map((x, i) => (
                            <li key={i} className="flex gap-2"><CheckCircle className="w-4 h-4 mt-0.5 text-cyan-500" /> {x}</li>
                        ))}
                    </ul>

                    <div className="mt-8 rounded-2xl border p-5">
                        <div className="font-medium flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-cyan-500" /> Results you can stand behind</div>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li className="flex gap-2"><ChevronRight className="w-4 h-4 mt-0.5" /> 45% of adults snore — huge unmet need in primary care</li>
                            <li className="flex gap-2"><ChevronRight className="w-4 h-4 mt-0.5" /> Practices report strong patient satisfaction and referrals</li>
                            <li className="flex gap-2"><ChevronRight className="w-4 h-4 mt-0.5" /> Target ROI 4x–6x over 9 months (pilot → scale)</li>
                        </ul>

                        <div className="mt-4">
                            <a href="/case-studies/SleepwellMAS_Campaign_PhilipAjao.pptx" className="inline-flex items-center gap-2 border px-4 py-2 rounded-xl">
                                View campaign slides
                                <ChevronRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>

                <div id="form" className="rounded-2xl border p-5 h-fit">
                    <div className="text-lg font-semibold">Get the Practice Starter Kit</div>
                    <p className="text-sm text-neutral-600 mt-1">Toolkit PDF + webinar invites + onboarding checklist.</p>
                    {!sent ? (
                        <form onSubmit={submit} className="mt-4 space-y-3">
                            <input className="w-full border rounded-xl px-3 py-2" placeholder="Full name" required />
                            <input type="email" className="w-full border rounded-xl px-3 py-2" placeholder="Work email" required />
                            <input className="w-full border rounded-xl px-3 py-2" placeholder="Practice name" />
                            <button className="w-full rounded-xl bg-cyan-500 hover:bg-cyan-600 text-neutral-900 font-medium px-4 py-2">
                                Send me the kit
                            </button>
                        </form>
                    ) : (
                        <div className="mt-4 text-sm">
                            Thanks! We’ll email the kit and webinar details shortly.
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}