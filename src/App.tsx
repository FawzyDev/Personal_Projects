import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import SplitText from '@/components/SplitText'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const cards = ['GSAP', 'Lenis', 'React Bits']

export default function App() {
  const container = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>('.card').forEach((card) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%' },
        })
      })
    },
    { scope: container },
  )

  return (
    <main ref={container} className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="flex h-screen flex-col items-center justify-center gap-6 px-4">
        <SplitText
          text="Hello, motion."
          tag="h1"
          className="text-6xl font-bold tracking-tight md:text-8xl"
          splitType="chars"
          delay={40}
          trigger="load"
        />
        <p className="text-neutral-400">Scroll down ↓</p>
      </section>

      <section className="mx-auto flex max-w-3xl flex-col gap-24 px-4 pb-48">
        {cards.map((name) => (
          <div
            key={name}
            className="card rounded-2xl border border-neutral-800 bg-neutral-900 p-12 text-4xl font-semibold"
          >
            {name}
          </div>
        ))}
      </section>
    </main>
  )
}
