const images = Array(7).fill('/img/Foto.jpeg')

function GalleryRow({ direction }) {
  const animClass = direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'

  return (
    <div className="overflow-hidden group">
      <div className={`flex py-4 gap-6 ${animClass}`} style={{ width: 'max-content' }}>
        {[...images, ...images].map((src, i) => (
          <div key={i} className="flex-shrink-0 w-64 h-64 rounded-xl overflow-hidden border border-cyberpunk-cyan/30 shadow-[0_0_15px_rgba(0,229,255,0.2)] hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] transition-all duration-500 hover:scale-110">
            <img alt="Gallery Image" className="w-full h-full object-cover" src={src} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Gallery() {
  return (
    <section className="py-24 relative bg-cyberpunk-bg overflow-hidden" id="gallery">
      <div className="container mx-auto px-6 max-w-screen-xl text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tighter">
          Dokumentasi <span className="text-cyberpunk-cyan">Acara</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Kilas balik keseruan dan inovasi di perhelatan Milad IT Fest sebelumnya.</p>
      </div>
      <div className="space-y-8">
        <GalleryRow direction="left" />
        <GalleryRow direction="right" />
      </div>
    </section>
  )
}
