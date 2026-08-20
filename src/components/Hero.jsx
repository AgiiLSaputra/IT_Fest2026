import { useRef, useEffect, useState } from 'react'

function ParticlesCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let particlesArray = []
    let w, h

    function init() {
      w = canvas.width = canvas.parentElement.offsetWidth
      h = canvas.height = canvas.parentElement.offsetHeight
      particlesArray = []
      const numParticles = Math.floor((w * h) / 10000)
      for (let i = 0; i < numParticles; i++) {
        const size = Math.random() * 2 + 0.5
        const x = Math.random() * w
        const y = Math.random() * h
        const speedX = (Math.random() - 0.5) * 0.5
        const speedY = (Math.random() - 0.5) * 0.5
        const isCyan = Math.random() > 0.5
        particlesArray.push({ x, y, speedX, speedY, size, isCyan })
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < particlesArray.length; i++) {
        const p = particlesArray[i]
        p.x += p.speedX
        p.y += p.speedY
        if (p.x < 0 || p.x > w) p.speedX *= -1
        if (p.y < 0 || p.y > h) p.speedY *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.isCyan ? 'rgba(0, 229, 255, 0.8)' : 'rgba(255, 255, 255, 0.6)'
        ctx.shadowBlur = 10
        ctx.shadowColor = p.isCyan ? '#00e5ff' : '#ffffff'
        ctx.fill()
        ctx.shadowBlur = 0

        for (let j = i; j < particlesArray.length; j++) {
          const p2 = particlesArray[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0, 229, 255, ${0.2 - distance / 600})`
            ctx.lineWidth = 0.5
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }
      requestAnimationFrame(draw)
    }

    window.addEventListener('resize', init)
    init()
    draw()
    return () => window.removeEventListener('resize', init)
  }, [])

  return <canvas ref={canvasRef} id="hero-particles" />
}

function Typewriter() {
  const textRef = useRef(null)

  useEffect(() => {
    const phrases = [
      "Code is poetry.",
      "We write the future, one line at a time.",
      "In data we trust.",
      "Stay curious, keep coding."
    ]
    const el = textRef.current
    if (!el) return

    let phraseIndex = 0
    let charIndex = 0
    let isDeleting = false
    let timeoutId

    function type() {
      const currentPhrase = phrases[phraseIndex]
      if (isDeleting) {
        el.textContent = currentPhrase.substring(0, charIndex - 1)
        charIndex--
      } else {
        el.textContent = currentPhrase.substring(0, charIndex + 1)
        charIndex++
      }

      let delay = isDeleting ? 50 : 100
      if (!isDeleting && charIndex === currentPhrase.length) {
        delay = 2000
        isDeleting = true
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        phraseIndex = (phraseIndex + 1) % phrases.length
        delay = 500
      }
      timeoutId = setTimeout(type, delay)
    }

    const id = setTimeout(type, 1000)
    return () => { clearTimeout(id); clearTimeout(timeoutId) }
  }, [])

  return (
    <span ref={textRef} id="typewriter-text">Stay curious, </span>
  )
}

function MascotWalk() {
  const containerRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const img = imgRef.current
    if (!container || !img) return

    let currentX = 0
    let walkDirection = 1
    const walkSpeed = 1.2

    function updateWalk() {
      const maxWalk = 200
      currentX += walkSpeed * walkDirection
      if (currentX >= maxWalk) {
        currentX = maxWalk
        walkDirection = -1
        img.style.transform = 'scaleX(-1)'
      } else if (currentX <= -maxWalk) {
        currentX = -maxWalk
        walkDirection = 1
        img.style.transform = 'scaleX(1)'
      }
      container.style.transform = `translateX(${currentX}px)`
      requestAnimationFrame(updateWalk)
    }

    requestAnimationFrame(updateWalk)
  }, [])

  return (
    <div ref={containerRef} className="relative z-20 mb-2">
      <div className="relative w-96 h-96 md:w-[480px] md:h-[480px] animate-float">
        <img
          ref={imgRef}
          alt="Milad IT Fest Mascot"
          className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,107,0,0.5)] transition-transform duration-500"
          src="/img/MASKOT-NOBG.png"
          style={{ transform: 'scaleX(-1)' }}
        />
      </div>
    </div>
  )
}

function Countdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    function calc() {
      const targetDate = new Date('2026-12-02T08:00:00').getTime()
      const now = Date.now()
      const diff = Math.max(0, targetDate - now)
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      }
    }
    setTime(calc())
    const timer = setInterval(() => setTime(calc()), 1000)
    return () => clearInterval(timer)
  }, [])

  const items = [
    { value: time.days, label: 'HARI' },
    { value: time.hours, label: 'JAM' },
    { value: time.minutes, label: 'MENIT' },
    { value: time.seconds, label: 'DETIK' },
  ]

  return (
    <div className="glass-card p-8 w-full max-w-xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-3 justify-center mb-6">
        <span className="w-2 h-2 rounded-full bg-cyberpunk-accent animate-pulse shadow-[0_0_10px_#ff6b00]"></span>
        <span className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase">Registrasi Dibuka Dalam</span>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {items.map((item, i) => (
          <div key={i} className="bg-cyberpunk-bg/50 rounded-xl p-4 border border-white/5">
            <div className="text-4xl font-bold text-white">{String(item.value).padStart(2, '0')}</div>
            <div className="text-[10px] text-gray-500 mt-1 font-bold tracking-widest">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden" id="beranda">
      <div className="absolute inset-0 z-0 top-0">
        <video autoPlay className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover opacity-60" loop muted playsInline>
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260809_012548_ef22562c-c0ae-4816-ad9d-f8922af4e6a7.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-cyberpunk-bg/10 via-cyberpunk-bg/60 to-cyberpunk-bg/90"></div>
      </div>

      <div className="container mx-auto relative z-10 flex flex-col items-center pt-24">
        <MascotWalk />

        <div className="space-y-2 mb-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none text-white uppercase" id="main-heading">
            MILAD IT FEST <span className="text-cyberpunk-accent">2026</span>
          </h1>
          <p className="text-xl md:text-2xl text-cyberpunk-cyan font-medium tracking-widest uppercase mt-4 min-h-[3rem] md:min-h-[4rem] flex items-center justify-center">
            <Typewriter />
            <span className="inline-block w-[3px] h-[1em] bg-cyberpunk-cyan ml-1 cursor-blink"></span>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 glass-card px-6 py-2 rounded-full border border-white/10 text-sm text-gray-300">
            <span className="material-symbols-outlined text-cyberpunk-accent text-lg">calendar_today</span>
            2–3 Desember 2026
          </div>
          <div className="flex items-center gap-2 glass-card px-6 py-2 rounded-full border border-white/10 text-sm text-gray-300">
            <span className="material-symbols-outlined text-cyberpunk-accent text-lg">location_on</span>
            GOR Volley UIR, Indoor
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <a className="bg-white text-black hover:bg-gray-200 px-10 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95" href="#daftar">
            Daftar Sekarang
          </a>
          <a className="glass-card hover:bg-white/10 px-10 py-4 rounded-full font-bold text-lg transition-all border border-white/20 hover:scale-105 active:scale-95" href="#acara">
            Explore Event
          </a>
        </div>

        <Countdown />
      </div>

      <ParticlesCanvas />

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-xs font-bold tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </div>
    </section>
  )
}
