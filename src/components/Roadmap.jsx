export default function Roadmap() {
  return (
    <section className="py-24 relative bg-cyberpunk-bg opacity-80" id="roadmap">
      <div className="absolute bottom-0 -right-1/4 w-[600px] h-full bg-cyberpunk-cyan/10 blur-[180px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-0 right-0 w-[600px] h-full bg-cyberpunk-accent/5 blur-[150px] rounded-full translate-x-1/2 pointer-events-none z-0"></div>
      <div className="container mx-auto px-6 max-w-screen-xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Roadmap <span className="text-cyberpunk-cyan">Acara</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Perjalanan menuju puncak perayaan Milad IT Fest 2026.</p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 pointer-events-none flex justify-center hidden md:flex z-0">
            <svg fill="none" height="100%" preserveAspectRatio="none" viewBox="0 0 200 1000" width="200" xmlns="http://www.w3.org/2000/svg">
              <path className="animate-flow-path" d="M100 0 C150 125, 50 250, 100 333 C150 416, 50 583, 100 666 C150 750, 50 875, 100 1000" stroke="#a0a0a0" strokeOpacity="0.3" strokeWidth="3"></path>
            </svg>
          </div>
          <div className="space-y-20 relative z-10">
            {/* Item 1 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between w-full group">
              <div className="md:w-5/12 hidden md:block"></div>
              <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-cyberpunk-bg border-2 border-cyberpunk-cyan rounded-full transform -translate-x-1/2 flex items-center justify-center timeline-node z-10">
                <div className="w-2 h-2 bg-cyberpunk-cyan rounded-full"></div>
              </div>
              <div className="md:w-5/12 w-full pl-12 md:pl-0">
                <div className="p-6 transition-all duration-300 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-xl shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] hover:bg-white/10 hover:border-white/20">
                  <div className="inline-block px-3 py-1 mb-4 rounded border border-cyberpunk-cyan/30 text-xs font-bold text-cyberpunk-cyan tracking-wider">MINGGU 1-2</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Finalisasi Konsep & Perencanaan</h3>
                  <p className="text-sm text-gray-400">Pembentukan panitia, penyusunan anggaran, dan penetapan tema visual.</p>
                </div>
              </div>
            </div>
            {/* Item 2 */}
            <div className="relative flex flex-col md:flex-row-reverse items-center justify-between w-full group">
              <div className="md:w-5/12 hidden md:block"></div>
              <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-cyberpunk-bg border-2 border-cyberpunk-accent rounded-full transform -translate-x-1/2 flex items-center justify-center shadow-[0_0_15px_rgba(255,107,0,0.6)] z-10">
                <div className="w-2 h-2 bg-cyberpunk-accent rounded-full"></div>
              </div>
              <div className="md:w-5/12 w-full pl-12 md:pl-0 text-left md:text-right">
                <div className="p-6 transition-all duration-300 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-xl shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] hover:bg-white/10 hover:border-white/20">
                  <div className="inline-block px-3 py-1 mb-4 rounded border border-cyberpunk-accent/30 text-xs font-bold text-cyberpunk-accent tracking-wider">MINGGU 3-4</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Development & Promosi Awal</h3>
                  <p className="text-sm text-gray-400">Pembuatan aset desain, peluncuran website teaser, dan pencarian sponsor.</p>
                </div>
              </div>
            </div>
            {/* Item 3 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between w-full group">
              <div className="md:w-5/12 hidden md:block"></div>
              <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-cyberpunk-bg border-2 border-gray-400 rounded-full transform -translate-x-1/2 flex items-center justify-center z-10 group-hover:border-white transition-colors">
                <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-white transition-colors"></div>
              </div>
              <div className="md:w-5/12 w-full pl-12 md:pl-0">
                <div className="p-6 transition-all duration-300 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-xl shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] hover:bg-white/10 hover:border-white/20">
                  <div className="inline-block px-3 py-1 mb-4 rounded border border-gray-500/50 text-xs font-bold text-gray-300 tracking-wider">MINGGU 6</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Soft Launch & Registrasi</h3>
                  <p className="text-sm text-gray-400">Pembukaan pendaftaran lomba, publikasi jadwal acara, dan kampanye media sosial.</p>
                </div>
              </div>
            </div>
            {/* Item 4 */}
            <div className="relative flex flex-col md:flex-row-reverse items-center justify-between w-full group">
              <div className="md:w-5/12 hidden md:block"></div>
              <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-cyberpunk-accent rounded-full transform -translate-x-1/2 flex items-center justify-center shadow-[0_0_25px_rgba(255,107,0,0.8)] z-10">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="md:w-5/12 w-full pl-12 md:pl-0 text-left md:text-right">
                <div className="p-6 transition-all duration-300 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-xl shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] hover:bg-white/10 hover:border-white/20">
                  <div className="inline-block px-3 py-1 mb-4 rounded border border-cyberpunk-accent text-xs font-bold text-white bg-cyberpunk-accent tracking-wider">HARI-H | 2-3 DES 2026</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Puncak Acara</h3>
                  <p className="text-sm text-gray-300 font-medium">Pelaksanaan seluruh rangkaian lomba, seminar, dan acara puncak di GOR Volley UIR.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
