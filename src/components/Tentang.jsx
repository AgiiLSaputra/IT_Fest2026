export default function Tentang() {
  return (
    <section className="py-24 relative bg-cyberpunk-bg" id="tentang">
      <div className="absolute top-0 -left-1/4 w-[800px] h-full bg-cyberpunk-cyan/10 blur-[200px] rounded-full pointer-events-none z-0"></div>
      <div className="container mx-auto px-6 max-w-screen-xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyberpunk-cyan/50 bg-cyberpunk-cyan/10 text-cyberpunk-cyan text-sm font-semibold tracking-wide uppercase shadow-[0_0_15px_rgba(0,229,255,0.3)]">
              <span className="w-1.5 h-1.5 rounded-full bg-cyberpunk-cyan"></span>
              Tentang Acara
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Perayaan Anniversary <br />
              <span className="text-cyberpunk-accent">
                Teknik Informatika UIR
              </span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed drop-shadow-[0_0_1px_rgba(255,255,255,0.3)]">
              Milad IT Fest adalah perayaan tahunan yang menandai hari jadi
              Program Studi Teknik Informatika Universitas Islam Riau. Acara ini
              merupakan wujud syukur dan momentum refleksi atas perjalanan
              panjang serta pencapaian yang telah diraih.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed drop-shadow-[0_0_1px_rgba(255,255,255,0.3)]">
              Mengusung tema{" "}
              <strong className="text-white">"Smart Generation"</strong>, tahun
              ini kami mengajak seluruh elemen mahasiswa dan civitas akademika
              untuk melampaui batas inovasi, menggabungkan semangat kebersamaan
              dengan eksplorasi teknologi masa depan.
            </p>
          </div>
          <div className="lg:w-1/2 flex flex-col gap-6">
            <div className="relative overflow-hidden p-8 flex gap-6 items-start backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[32px] shadow-lg shadow-cyberpunk-cyan/10 hover:border-cyberpunk-cyan/50 hover:bg-white/10 transition-all group cursor-default">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-cyberpunk-cyan/10 flex items-center justify-center relative z-10 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.6)] transition-all">
                <span className="material-symbols-outlined text-cyberpunk-cyan text-3xl">
                  school
                </span>
              </div>
              <div className="space-y-2 relative z-10">
                <h3 className="text-2xl font-bold text-white">
                  Mahasiswa Informatika UIR
                </h3>
                <p className="text-sm text-gray-400">
                  Wadah kolaborasi dan inovasi seluruh mahasiswa Teknik
                  Informatika dalam mengembangkan potensi di bidang teknologi.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden p-8 flex gap-6 items-start backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[32px] shadow-lg shadow-cyberpunk-accent/10 hover:border-cyberpunk-accent/50 hover:bg-white/10 transition-all group cursor-default">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-cyberpunk-accent/10 flex items-center justify-center relative z-10 group-hover:shadow-[0_0_20px_rgba(255,107,0,0.6)] transition-all">
                <span className="material-symbols-outlined text-cyberpunk-accent text-3xl">
                  emoji_events
                </span>
              </div>
              <div className="space-y-2 relative z-10">
                <h3 className="text-2xl font-bold text-white">
                  Kompetisi & Pengembangan
                </h3>
                <p className="text-sm text-gray-400">
                  Berbagai lomba dan seminar nasional untuk mengasah kemampuan,
                  dari hackathon hingga e-sport tournament.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
