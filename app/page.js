'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail, Phone, MapPin, ArrowRight, Linkedin, Github, Globe, Download,
  ExternalLink, CheckCircle, ChevronRight, Moon, Sun
} from 'lucide-react';

const DATA = {
  name: 'Philip',
  role: 'Digital Marketing Specialist',
  headline:
    'Performance-focused marketer blending strategy, creative and analytics to drive measurable growth.',
  location: 'UK-based',
  email: 'ajaophilip06@gmail.com',
  phone: '+44 7876 269 608',
  links: {
    linkedin: 'https://www.linkedin.com/in/philip-ademola-ajao',
    github: 'https://github.com/IlfordMulticoncept',
    website: 'https://',
    resume: '/resume.pdf',
  },
  highlights: [
    { label: 'Paid & Organic Growth' },
    { label: 'GA4 & Marketing Analytics' },
    { label: 'SEO & Content Strategy' },
    { label: 'Creative Direction' },
    { label: 'Automation & CRM Journeys' },
    { label: 'A/B Testing & CRO' },
  ],
  skills: [
    'SEO (on-page/technical)',
    'Google Ads / Meta Ads',
    'GA4, Looker Studio',
    'Email (Klaviyo/Mailchimp)',
    'HubSpot / CRM',
    'Social Media Strategy',
    'Copywriting & Content',
    'Figma basics',
    'WordPress / HTML',
    'UX Research',
    'Campaign Planning',
  ],
  experience: [
    {
      company: 'Ilford Multiconcept Service Ltd',
      role: 'Digital Marketing Project Lead',
      period: 'Nov 2022 – Mar 2024',
      bullets: [
        'Led UX design of WordPress e-commerce platform; +30% engagement.',
        'Balanced user & business needs via journey mapping, testing, accessibility.',
        'Refined checkout with data insights to boost conversions.',
      ],
    },
    {
      company: 'Paul Lavelle Foundation',
      role: 'Digital Marketing Strategist',
      period: 'Jan 2023 – Aug 2023',
      bullets: [
        'Designed awareness campaign; +12% email engagement.',
        'Optimised journeys for accessibility & ease.',
        'Prototypes and mockups secured stakeholder buy-in.',
      ],
    },
  ],
  education: [
    { school: 'MSc, Digital Marketing', org: 'Liverpool John Moores University' },
    { school: 'BSc, Business Administration', org: 'Babcock University' },
  ],
  projects: [
    {
      title: 'HelloFresh Instagram Creative Showcase',
      tags: ['Social Media', 'Design'],
      blurb:
        'Self-initiated Instagram posts to practice visual storytelling and promo copy.',
      media: ['/assets/hellofresh1.png', '/assets/hellofresh2.jpeg'],
      links: [],
    },
    {
      title: 'Sleepwell MAS B2B Campaign',
      tags: ['B2B', 'Campaign'],
      blurb:
        'Positioned Sleepwell MAS as a go-to dental solution for snoring & mild OSA. Webinars, LinkedIn ads, lead magnets, in-practice training.',
      media: [],
      links: [
        {
          label: 'Download Campaign (PPTX)',
          href: '/case-studies/SleepwellMAS_Campaign_PhilipAjao.pptx',
          external: true,
        },
      ],
    },
    {
      title: 'Ilford App / Website (In Progress)',
      tags: ['Web App', 'PWA'],
      blurb:
        'Installable PWA with cart & checkout, Firebase orders, live chat, and camera-based issue reporting.',
      media: [],
      links: [],
      results: ['+38% repeat sessions after PWA prompt', 'Reduced checkout drop-off'],
    },
    {
      title: 'WordPress Landing Pages (redesign planned)',
      tags: ['Web Design', 'Lead Gen'],
      blurb:
        'Designed multiple landing pages in WordPress for campaigns; rebuilding new versions.',
      media: [],
      links: [],
    },
  ],
};

const Section = ({ id, title, children }) => (
  <section id={id} className="py-16 sm:py-20 scroll-mt-24">
    <div className="max-w-6xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.4 }}
        className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8"
      >
        {title}
      </motion.h2>
      {children}
    </div>
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-red-200/60 dark:border-red-900/40 bg-red-50/60 dark:bg-red-950/30 px-3 py-1 text-xs font-medium">
    {children}
  </span>
);

function Header() {
  const [dark, setDark] = React.useState(false);
  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-950/60 border-b border-neutral-200/60 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold">
          <span className="inline-block w-2.5 h-5 bg-red-600 rounded" />
          <span>Philip</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#projects" className="hover:text-red-600">Projects</a>
          <a href="#experience" className="hover:text-red-600">Experience</a>
          <a href="#skills" className="hover:text-red-600">Skills</a>
          <a href="#contact" className="hover:text-red-600">Contact</a>
          <a href={DATA.links.resume} className="inline-flex items-center gap-2 hover:text-red-600">
            <Download className="w-4 h-4" /> CV
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDark(d => !d)}
            className="rounded-xl border px-2 py-2"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <a
            href="#contact"
            className="rounded-xl bg-red-600 hover:bg-red-700 text-white px-4 py-2 inline-flex items-center"
          >
            Hire me <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="pt-14 sm:pt-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl sm:text-5xl font-semibold leading-tight tracking-tight">
            Hi, I’m <span className="text-red-600">{DATA.name}</span> — {DATA.role}
          </h1>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 text-base sm:text-lg">
            {DATA.headline}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {DATA.highlights.map((h, i) => <Pill key={i}>{h.label}</Pill>)}
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <a href={`mailto:${DATA.email}`} className="inline-flex items-center gap-2 hover:text-red-600"><Mail className="w-4 h-4" />{DATA.email}</a>
            <span className="inline-flex items-center gap-2 text-neutral-500"><Phone className="w-4 h-4" />{DATA.phone}</span>
            <span className="inline-flex items-center gap-2 text-neutral-500"><MapPin className="w-4 h-4" />{DATA.location}</span>
          </div>
          <div className="mt-6 flex gap-3">
            <a href={DATA.links.linkedin} target="_blank" rel="noreferrer" className="rounded-xl border px-3 py-2 inline-flex items-center gap-2"><Linkedin className="w-4 h-4" /> LinkedIn</a>
            <a href={DATA.links.github} target="_blank" rel="noreferrer" className="rounded-xl border px-3 py-2 inline-flex items-center gap-2"><Github className="w-4 h-4" /> GitHub</a>
            <a href={DATA.links.website} target="_blank" rel="noreferrer" className="rounded-xl border px-3 py-2 inline-flex items-center gap-2"><Globe className="w-4 h-4" /> Website</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DemoPages() {
  return (
    <Section id="demo-pages" title="Demo Landing Pages">
      <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
        <li><a className="block rounded-xl border px-4 py-3 hover:text-red-600" href="/hello-fresh">HelloFresh Promo</a></li>
        <li><a className="block rounded-xl border px-4 py-3 hover:text-red-600" href="/sleepwell-mas">Sleepwell MAS (B2B)</a></li>
        <li><a className="block rounded-xl border px-4 py-3 hover:text-red-600" href="/ilford-supplies">Ilford Supplies (E-com)</a></li>
        <li><a className="block rounded-xl border px-4 py-3 hover:text-red-600" href="/webinar">Webinar Signup</a></li>
      </ul>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" title="Featured projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DATA.projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
          >
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 hover:shadow-md transition-shadow bg-white/70 dark:bg-neutral-950/50">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold leading-tight">{p.title}</h3>
                <ArrowRight className="w-4 h-4 text-neutral-400" />
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {p.tags?.map((t, j) => <Pill key={j}>{t}</Pill>)}
              </div>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">{p.blurb}</p>
              {p.media && p.media.length > 0 && (
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {p.media.map((src, k) => (
                    <img
                      key={k}
                      src={src}
                      alt="project asset"
                      className="rounded-xl border border-neutral-200 dark:border-neutral-800 object-cover w-full h-32"
                    />
                  ))}
                </div>
              )}
              {p.results && (
                <ul className="mt-4 space-y-2 text-sm">
                  {p.results.map((r, k) => (
                    <li key={k} className="flex items-start gap-2"><ChevronRight className="w-4 h-4 mt-0.5" />{r}</li>
                  ))}
                </ul>
              )}
              <div className="mt-5 flex flex-wrap gap-3">
                {p.links?.map((l, k) => (
                  <a
                    key={k}
                    href={l.href}
                    {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="rounded-xl border px-3 py-2 inline-flex items-center gap-2"
                  >
                    {l.external ? <ExternalLink className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-4">
        {DATA.experience.map((e, i) => (
          <div key={i} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <div className="text-base font-semibold">{e.role}</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-300">{e.company}</div>
              </div>
              <div className="text-sm text-neutral-500">{e.period}</div>
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {e.bullets.map((b, k) => (
                <li key={k} className="flex items-start gap-2"><ChevronRight className="w-4 h-4 mt-0.5" />{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" title="Skills & tools">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        {DATA.skills.map((s, i) => (
          <div key={i} className="flex items-center gap-2 text-sm border border-neutral-200 dark:border-neutral-800 rounded-xl px-3 py-2">
            <CheckCircle className="w-4 h-4" />
            {s}
          </div>
        ))}
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" title="Education">
      <div className="grid md:grid-cols-2 gap-4">
        {DATA.education.map((ed, i) => (
          <div key={i} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6">
            <div className="text-base font-semibold">{ed.school}</div>
            <div className="text-sm text-neutral-600 dark:text-neutral-300">{ed.org}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" title="Let’s work together">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6">
          <form className="grid sm:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="sm:col-span-2">
              <label className="text-sm font-medium">Your name</label>
              <input className="mt-1 w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-2" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input className="mt-1 w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-2" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm font-medium">Company</label>
              <input className="mt-1 w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-2" placeholder="Acme Co" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-medium">Project details</label>
              <textarea rows={4} className="mt-1 w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-2" placeholder="What are your goals?" />
            </div>
            <div className="sm:col-span-2 flex items-center justify-between">
              <div className="text-xs text-neutral-500">I’ll get back within 24 hours.</div>
              <button className="rounded-xl bg-red-600 hover:bg-red-700 text-white px-4 py-2">Send</button>
            </div>
          </form>
        </div>
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 space-y-4">
          <div className="text-sm">Prefer email or a quick call?</div>
          <a href={`mailto:${DATA.email}`} className="flex items-center gap-2 text-sm hover:text-red-600"><Mail className="w-4 h-4" />{DATA.email}</a>
          <div className="flex items-center gap-2 text-sm text-neutral-500"><Phone className="w-4 h-4" />{DATA.phone}</div>
          <div className="flex items-center gap-2 text-sm text-neutral-500"><MapPin className="w-4 h-4" />{DATA.location}</div>
          <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800">
            <div className="text-xs text-neutral-500">Looking for full-time roles with visa sponsorship.</div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <DemoPages />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="py-10 border-t border-neutral-200 dark:border-neutral-800 mt-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-5 bg-red-600 rounded" />
            Philip — Digital Marketing
          </div>
          <div className="flex items-center gap-4">
            <a href={DATA.links.linkedin} className="hover:text-red-600">LinkedIn</a>
            <a href={DATA.links.github} className="hover:text-red-600">GitHub</a>
            <a href={DATA.links.website} className="hover:text-red-600">More</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
