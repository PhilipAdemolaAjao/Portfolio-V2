'use client';
import { CheckCircle, Clock, Star, ArrowRight } from 'lucide-react';

export default function HelloFreshLP() {
    return (
        <main className="min-h-screen bg-white dark:bg-neutral-950">
            <section className="bg-green-600 text-white">
                <div className="max-w-5xl mx-auto px-6 py-14">
                    <h1 className="text-4xl font-semibold leading-tight">
                        Holiday Sale: <span className="underline decoration-white/50">50% off your first box</span>
                    </h1>
                    <p className="mt-4 text-white/90">
                        Fresh recipes, pre-portioned ingredients, delivered to your door. Limited time.
                    </p>
                    <div className="mt-6 flex gap-3">
                        <a href="#offer" className="inline-flex items-center gap-2 bg-white text-green-700 px-5 py-3 rounded-xl font-medium">
                            Claim your offer <ArrowRight className="w-4 h-4" />
                        </a>
                        <a href="#recipes" className="inline-flex items-center gap-2 border border-white/70 px-5 py-3 rounded-xl font-medium">
                            View recipes
                        </a>
                    </div>
                </div>
            </section>

            <section id="offer" className="max-w-5xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <img src="/assets/hellofresh1.png" alt="HelloFresh dish" className="rounded-2xl border" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold">Here’s the deal</h2>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 mt-0.5 text-green-600" /> 50% off your first box</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 mt-0.5 text-green-600" /> Flexible plans – pause/cancel anytime</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 mt-0.5 text-green-600" /> Fresh, seasonal ingredients</li>
                        </ul>
                        <div className="mt-5 flex items-center gap-2 text-sm text-neutral-600">
                            <Clock className="w-4 h-4" /> Ends Jan 31 · T&Cs apply
                        </div>
                        <a href="#" className="mt-6 inline-flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-xl font-medium">
                            Get started <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </section>

            <section id="recipes" className="max-w-5xl mx-auto px-6 pb-14">
                <h3 className="text-xl font-semibold">Customer favourites</h3>
                <div className="grid md:grid-cols-3 gap-6 mt-4">
                    {['Quick Stir-Fry', 'Herby Chicken', 'Veggie Tacos'].map((x, i) => (
                        <div key={i} className="rounded-2xl border p-4">
                            <img src="/assets/hellofresh2.jpeg" alt={x} className="rounded-xl border" />
                            <div className="mt-3 font-medium">{x}</div>
                            <div className="flex items-center gap-1 text-amber-500 mt-1">
                                {[...Array(5)].map((_, s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}