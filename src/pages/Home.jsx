import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import profilePhoto from '../assets/profilePhoto.jpg'
import profilePhoto2 from '../assets/profilePhoto-2.jpeg'
import profilePhoto3 from '../assets/profilePhoto-3.jpeg'

const photos = [profilePhoto, profilePhoto2, profilePhoto3]

function Home() {
  const [index, setIndex] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const timerRef = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    function onChange(e) {
      setReduceMotion(e.matches)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  function handleFlip() {
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setIndex((current) => {
        let next
        do {
          next = Math.floor(Math.random() * photos.length)
        } while (next === current)
        return next
      })
    }, 2000)
  }

  useEffect(() => () => clearTimeout(timerRef.current), [])

  return (
    <section className="grid items-center gap-12 px-6 py-10 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:py-16">
      <div>
        <p className="mb-3 font-sans text-brand-100">Muhammad Ahmad Ali · Software Engineer</p>
        <h1 className="font-heading text-4xl leading-tight text-brand-50 sm:text-5xl">
          I build apps for real problems, not resumes.
        </h1>
        <p className="mt-6 max-w-xl text-brand-100 leading-relaxed text-base sm:text-lg">
          I create polished applications with React, Flutter, and Firebase that solve real customer problems.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/products"
            className="rounded-full bg-brand-400 px-7 py-3 font-heading text-sm font-bold text-brand-50 shadow-lg shadow-brand-900/30 transition duration-200 hover:-translate-y-0.5 hover:bg-brand-300"
          >
            View my work
          </Link>
          <a
            href="mailto:ahmadswe007@gmail.com"
            className="rounded-full border border-brand-400/50 px-7 py-3 font-heading text-sm font-bold text-brand-100 transition duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-50"
          >
            Get your app made
          </a>
        </div>
      </div>

      <div className="relative flex items-center justify-center py-6">
        <div className="absolute h-56 w-56 rounded-full bg-gradient-to-tr from-brand-400 to-brand-900 opacity-30 blur-3xl sm:h-80 sm:w-80" />
        <div className="relative h-64 w-64 [perspective:1200px] sm:h-80 sm:w-80">
          <div
            onAnimationIteration={reduceMotion ? undefined : handleFlip}
            className={`absolute inset-x-0 top-0 h-1/2 origin-bottom overflow-hidden rounded-t-2xl shadow-lg shadow-brand-900/50 ${
              reduceMotion ? '' : 'motion-safe:animate-[flip-top_8s_ease-in-out_infinite]'
            }`}
          >
            <img src={photos[index]} alt="" decoding="async" className="h-[200%] w-full object-cover" />
          </div>
          <div className={`absolute inset-x-0 bottom-0 h-1/2 origin-top overflow-hidden rounded-b-2xl shadow-lg shadow-brand-900/50 ${
            reduceMotion ? '' : 'motion-safe:animate-[flip-bottom_8s_ease-in-out_infinite]'
          }`}>
            <img src={photos[index]} alt="" decoding="async" className="h-[200%] w-full -translate-y-1/2 object-cover" />
          </div>
          <div className="absolute inset-x-0 top-1/2 z-10 h-1.5 -translate-y-1/2 rounded-full bg-brand-400" />
        </div>
      </div>
    </section>
  )
}

export default Home
