import { useRef } from 'react'

const faqs = [
  {
    question: 'Siapa saja yang boleh mengikuti acara ini?',
    answer: 'Acara ini terbuka untuk seluruh mahasiswa, pelajar, dan masyarakat umum yang memiliki ketertarikan di bidang teknologi informasi. Beberapa lomba mungkin memiliki kriteria peserta khusus.',
  },
  {
    question: 'Bagaimana cara mendaftar lomba?',
    answer: 'Pendaftaran dilakukan dengan mengklik tombol "Daftar Sekarang" pada kartu acara yang kamu inginkan, kemudian mengisi formulir pendaftaran yang tersedia secara lengkap.',
  },
  {
    question: 'Apakah acara ini berbayar?',
    answer: 'Sebagian besar rangkaian acara Milad IT Fest bersifat gratis, namun beberapa kompetisi khusus mungkin memerlukan biaya pendaftaran untuk administrasi dan hadiah.',
  },
]

function FAQItem({ faq }) {
  const contentRef = useRef(null)
  const iconRef = useRef(null)

  function toggle() {
    contentRef.current.classList.toggle('hidden')
    iconRef.current.classList.toggle('rotate-180')
  }

  return (
    <div className="glass-card border border-cyberpunk-border rounded-lg overflow-hidden">
      <button className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-white/5 transition-colors" onClick={toggle}>
        <span className="font-semibold">{faq.question}</span>
        <svg ref={iconRef} className="w-5 h-5 text-gray-400 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      </button>
      <div ref={contentRef} className="px-6 pb-4 text-gray-400 text-sm hidden">
        {faq.answer}
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="py-24 relative bg-cyberpunk-bg" id="faq">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pertanyaan <span className="text-cyberpunk-cyan">Umum</span>
          </h2>
          <p className="text-gray-400">Informasi yang sering ditanyakan seputar Milad IT Fest.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  )
}
