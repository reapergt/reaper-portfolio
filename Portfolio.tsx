 "use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Code2, ExternalLink, Gamepad2, Globe, Menu, Play, Server, Sparkles, Terminal, X } from "lucide-react";
import { useState } from "react";

const skills = ["HTML", "Java", "C", "C++", "Python", "JavaScript"];

const projects = [
  { n: "01", title: "Minecraft Server Development", desc: "Custom server setups, gameplay systems, configurations and development across 9 Minecraft server projects.", tags: ["Minecraft", "Java", "Paper"], icon: Server },
  { n: "02", title: "Website Builds", desc: "Modern, responsive websites built with a focus on clean UI, performance and interactive details.", tags: ["HTML", "JavaScript", "UI"], icon: Globe },
  { n: "03", title: "YouTube Management", desc: "Video-focused work covering editing, channel support and content management workflows.", tags: ["Video", "Editing", "YouTube"], icon: Play }
];

const fade = { hidden: { opacity: 0, y: 25 }, show: { opacity: 1, y: 0, transition: { duration: .6 } } };

export default function Portfolio() {
  const [open, setOpen] = useState(false);

  return (
    <main className="noise min-h-screen overflow-hidden">
      <nav className="fixed left-0 right-0 top-0 z-40 border-b line bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="text-lg font-black tracking-[.25em]">REAPER</a>
          <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <button aria-label="Menu" onClick={() => setOpen(!open)} className="md:hidden">{open ? <X/> : <Menu/>}</button>
        </div>
        {open && <div className="border-t line px-5 py-4 md:hidden">
          {["about","skills","projects","contact"].map(x => <a key={x} onClick={() => setOpen(false)} href={"#"+x} className="block py-3 text-white/70">{x[0].toUpperCase()+x.slice(1)}</a>)}
        </div>}
      </nav>

      <section className="grid-bg relative flex min-h-screen items-center px-5 pt-20">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[.035] blur-3xl"/>
        <div className="mx-auto w-full max-w-6xl">
          <motion.div initial="hidden" animate="show" variants={fade} className="max-w-4xl">
            <div className="mono mb-6 flex items-center gap-2 text-xs uppercase tracking-[.3em] text-white/45"><span className="h-1.5 w-1.5 rounded-full bg-white"/> Available for projects</div>
            <h1 className="text-[clamp(4rem,13vw,9.5rem)] font-black leading-[.8] tracking-[-.07em]">REAPER<span className="text-white/20">.</span></h1>
            <p className="mt-9 max-w-2xl text-xl leading-relaxed text-white/55 md:text-2xl">Minecraft Server Developer · Video Editor · Website Builder</p>
            <p className="mt-5 max-w-xl leading-7 text-white/40">I build custom Minecraft experiences, modern websites and digital content with a focus on clean execution and memorable details.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition hover:gap-3">View projects <ArrowDown size={16}/></a>
              <a href="#contact" className="glass flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:bg-white/10">Contact me <ArrowUpRight size={16}/></a>
            </div>
          </motion.div>
          <div className="absolute bottom-8 left-5 mono text-[10px] tracking-[.25em] text-white/25 md:left-[calc(50%-576px)]">SCROLL TO EXPLORE</div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-5 py-28">
        <motion.div whileInView="show" viewport={{ once: true, amount: .2 }} initial="hidden" variants={fade} className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div><p className="mono text-xs tracking-[.25em] text-white/35">01 / ABOUT</p></div>
          <div>
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">Turning ideas into <span className="text-white/35">working projects.</span></h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/50">I&apos;m Reaper — a developer and creator working across Minecraft servers, websites and video content. From server systems to front-end interfaces, I like building things from the ground up and making them feel polished.</p>
            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
              {[["9+","Minecraft servers"],["4+","Website builds"],["6","Core skills"],["∞","Ideas"]].map(([a,b]) => <div key={b} className="glass rounded-2xl p-5"><div className="text-3xl font-black">{a}</div><div className="mt-1 text-xs text-white/35">{b}</div></div>)}
            </div>
          </div>
        </motion.div>
      </section>

      <section id="skills" className="border-y line">
        <div className="mx-auto max-w-6xl px-5 py-28">
          <p className="mono text-xs tracking-[.25em] text-white/35">02 / SKILLS</p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s, i) => <motion.div key={s} whileInView={{opacity:1,y:0}} initial={{opacity:0,y:20}} viewport={{once:true}} transition={{delay:i*.06}} className="glass group rounded-2xl p-6 transition hover:-translate-y-1 hover:bg-white/[.07]">
              <div className="mb-8 flex items-center justify-between"><Code2 className="text-white/50" size={20}/><span className="mono text-[10px] text-white/25">0{i+1}</span></div>
              <div className="text-2xl font-bold">{s}</div>
            </motion.div>)}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-5 py-28">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div><p className="mono text-xs tracking-[.25em] text-white/35">03 / SELECTED WORK</p><h2 className="mt-4 text-4xl font-bold md:text-6xl">Projects<span className="text-white/25">.</span></h2></div>
          <p className="max-w-sm text-sm leading-6 text-white/35">A selection of the work categories I&apos;ve been building across development and content.</p>
        </div>
        <div className="mt-12 space-y-4">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return <motion.article key={p.n} initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{delay:i*.08}} className="group glass rounded-3xl p-6 md:p-8">
              <div className="grid gap-7 md:grid-cols-[90px_1fr_auto] md:items-center">
                <div className="mono text-sm text-white/25">{p.n}</div>
                <div>
                  <div className="mb-3 flex items-center gap-3"><Icon size={20} className="text-white/45"/><h3 className="text-2xl font-bold">{p.title}</h3></div>
                  <p className="max-w-2xl leading-7 text-white/40">{p.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{p.tags.map(t=><span key={t} className="rounded-full border line px-3 py-1 text-xs text-white/45">{t}</span>)}</div>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border line transition group-hover:bg-white group-hover:text-black"><ArrowUpRight size={19}/></div>
              </div>
            </motion.article>
          })}
        </div>
      </section>

      <section className="border-y line bg-white/[.015]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-24 md:grid-cols-2 md:items-center">
          <div><Terminal size={34} className="mb-6 text-white/50"/><h2 className="text-4xl font-bold">Build. Break. Improve.</h2><p className="mt-5 max-w-lg leading-7 text-white/40">Whether it&apos;s a Minecraft system, a website or content workflow, the goal is simple: make it work, then make it better.</p></div>
          <div className="mono glass rounded-2xl p-6 text-sm leading-8 text-white/45"><div><span className="text-white/25">$</span> whoami</div><div className="text-white">reaper</div><div><span className="text-white/25">$</span> focus --current</div><div className="text-white">building cool stuff</div><div><span className="text-white/25">$</span> status</div><div className="text-white">ONLINE_</div></div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-32 text-center">
        <Sparkles className="mx-auto mb-6 text-white/40" size={26}/>
        <p className="mono text-xs tracking-[.25em] text-white/35">04 / CONTACT</p>
        <h2 className="mx-auto mt-5 max-w-3xl text-5xl font-black tracking-tight md:text-7xl">Have a project in mind?</h2>
        <p className="mx-auto mt-6 max-w-xl leading-7 text-white/40">Reach out through Discord or check out my YouTube channel.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a href="https://discord.com/users/reapergtp_ogplayer" target="_blank" rel="noreferrer" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-black">Discord</a>
          <a href="https://youtube.com/@reaperbg6394" target="_blank" rel="noreferrer" className="glass rounded-full px-6 py-3 text-sm font-semibold">YouTube <ExternalLink className="ml-2 inline" size={14}/></a>
        </div>
      </section>

      <footer className="border-t line">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-5 py-7 text-xs text-white/25 md:flex-row">
          <span>© {new Date().getFullYear()} REAPER</span><span className="mono">MINECRAFT · CODE · CREATIVE</span>
        </div>
      </footer>
    </main>
  );
}