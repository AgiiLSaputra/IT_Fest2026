export default function Header() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300">
      <div className="container mx-auto px-8 h-16 flex items-center justify-between bg-cyberpunk-bg/80 backdrop-blur-md rounded-full border border-white/10 shadow-[0_0_40px_rgba(0,229,255,0.05)]">
        <a className="flex items-center group" href="#beranda">
          <img alt="Milad IT Fest 2026 Logo" className="h-10 w-auto object-contain" src="/img/LogoITFESTUIR.png" />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium hover:text-cyberpunk-accent transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-cyberpunk-accent hover:after:w-full after:transition-all" href="#beranda">Beranda</a>
          <a className="text-sm font-medium hover:text-cyberpunk-accent transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-cyberpunk-accent hover:after:w-full after:transition-all" href="#acara">Acara</a>
          <a className="text-sm font-medium hover:text-cyberpunk-accent transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-cyberpunk-accent hover:after:w-full after:transition-all" href="#proyeksi">Proyeksi</a>
          <a className="text-sm font-medium hover:text-cyberpunk-accent transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-cyberpunk-accent hover:after:w-full after:transition-all" href="#kemitraan">Kemitraan</a>
          <a className="text-sm font-medium hover:text-cyberpunk-accent transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-cyberpunk-accent hover:after:w-full after:transition-all" href="#sponsor">Sponsor</a>
        </nav>
        <div className="hidden md:block">
          <a className="bg-white text-black hover:bg-gray-200 px-5 py-1.5 rounded-full font-bold text-xs transition-all shadow-md hover:shadow-white/20 active:scale-95" href="#daftar">
            Daftar Sekarang
          </a>
        </div>
        <button aria-label="Toggle Menu" className="md:hidden text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </button>
      </div>
    </header>
  )
}
