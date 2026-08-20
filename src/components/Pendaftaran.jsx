export default function Pendaftaran() {
  function toggleFlip(id) {
    document.getElementById(id).classList.toggle('is-flipped')
  }

  const flipContainer = { perspective: '1200px', height: '600px', position: 'relative' }
  const flipInner = { position: 'relative', width: '100%', height: '100%', transition: 'transform 0.8s', transformStyle: 'preserve-3d' }
  const flipFront = {
    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
    backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
    borderRadius: '32px', padding: '2rem', display: 'flex', flexDirection: 'column',
    background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.08) 100%)',
    backdropFilter: 'blur(40px) saturate(180%)',
    WebkitBackdropFilter: 'blur(40px) saturate(180%)',
    border: '1px solid rgba(255,255,255,0.18)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(255,255,255,0.05)',
  }
  const flipBack = {
    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
    backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
    borderRadius: '32px', padding: '2rem', display: 'flex', flexDirection: 'column',
    background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.08) 100%)',
    backdropFilter: 'blur(40px) saturate(180%)',
    WebkitBackdropFilter: 'blur(40px) saturate(180%)',
    border: '1px solid rgba(255,255,255,0.18)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(255,255,255,0.05)',
    transform: 'rotateY(180deg)',
  }

  return (
    <section className="py-24 relative" style={{ backgroundColor: '#050b18' }} id="pendaftaran">
      <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 uppercase">PENDAFTARAN ACARA</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Pilih cabang kegiatan SwitchFest 2026 yang ingin kamu ikuti. Pelajari informasi selengkapnya atau langsung lakukan pendaftaran!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Card 1: Hackathon */}
          <div className="relative group">
            <div className="absolute inset-0 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'rgba(0,229,255,0.2)' }}></div>
            <div style={flipContainer}>
              <div style={flipInner} id="hackathon-flip-inner">
                <div style={flipFront}>
                  <div className="flex justify-between items-start mb-8">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest" style={{ border: '1px solid #00e5ff', color: '#00e5ff' }}>IT COMPETITION</span>
                    <span className="material-symbols-outlined opacity-50" style={{ color: '#00e5ff' }}>code</span>
                  </div>
                  <div className="flex gap-2 mb-4">
                    <span className="px-2 py-1 rounded text-[10px] font-bold text-gray-400" style={{ background: 'rgba(255,255,255,0.05)' }}>SMA/SMK</span>
                    <span className="px-2 py-1 rounded text-[10px] font-bold text-gray-400" style={{ background: 'rgba(255,255,255,0.05)' }}>MAHASISWA</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Hackathon</h3>
                  <p className="text-sm text-gray-400 mb-8 leading-relaxed">Tantang kemampuan teknismu dalam membangun solusi inovatif dalam waktu terbatas dan buktikan karyamu!</p>
                  <div className="mt-auto space-y-3">
                    <a className="flex items-center justify-center gap-2 w-full py-3 text-black font-bold rounded-lg hover:brightness-110 transition-all" style={{ background: '#00e5ff', boxShadow: '0 0 20px rgba(0,229,255,0.4)' }} href="#">DAFTAR SEKARANG</a>
                    <button className="flex items-center justify-center gap-2 w-full py-3 border border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all text-sm" onClick={() => toggleFlip('hackathon-flip-inner')}>LIHAT DETAIL ACARA</button>
                  </div>
                </div>
                <div style={flipBack}>
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest" style={{ border: '1px solid #00e5ff', color: '#00e5ff' }}>EVENT DETAILS</span>
                    <span className="material-symbols-outlined opacity-50" style={{ color: '#00e5ff' }}>info</span>
                  </div>
                  <div className="space-y-6 flex-grow">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#00e5ff' }}>Rules</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">Tim terdiri dari 2-3 orang. Peserta wajib membawa laptop sendiri. Karya harus orisinal dan belum pernah dilombakan.</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#00e5ff' }}>Timeline</h4>
                      <ul className="text-[11px] text-gray-300 space-y-1">
                        <li>• 08:00 - Registrasi Ulang</li>
                        <li>• 09:00 - Opening &amp; Briefing</li>
                        <li>• 10:00 - Coding Session Start</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#00e5ff' }}>Venue</h4>
                      <p className="text-xs text-gray-400">Lab Terpadu Teknik Informatika UIR, Lantai 2.</p>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <button className="flex items-center justify-center gap-2 w-full py-3 border border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all text-sm" onClick={() => toggleFlip('hackathon-flip-inner')}>
                      <span className="material-symbols-outlined text-sm">arrow_back</span> KEMBALI
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: E-Sport Tournament */}
          <div className="relative group">
            <div className="absolute inset-0 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'rgba(255,107,0,0.2)' }}></div>
            <div style={flipContainer}>
              <div style={flipInner} id="esport-flip-inner">
                <div style={flipFront}>
                  <div className="flex justify-between items-start mb-8">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest" style={{ border: '1px solid #ff6b00', color: '#ff6b00' }}>E-SPORT ARENA</span>
                    <span className="material-symbols-outlined opacity-50" style={{ color: '#ff6b00' }}>sports_esports</span>
                  </div>
                  <div className="flex gap-2 mb-4">
                    <span className="px-2 py-1 rounded text-[10px] font-bold text-gray-400" style={{ background: 'rgba(255,255,255,0.05)' }}>PELAJAR</span>
                    <span className="px-2 py-1 rounded text-[10px] font-bold text-gray-400" style={{ background: 'rgba(255,255,255,0.05)' }}>MAHASISWA</span>
                    <span className="px-2 py-1 rounded text-[10px] font-bold text-gray-400" style={{ background: 'rgba(255,255,255,0.05)' }}>UMUM</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">E-Sport Tournament</h3>
                  <p className="text-sm text-gray-400 mb-8 leading-relaxed">Bentuk tim terkuatmu, susun strategi terbaik, dan kuasai arena kompetitif Mobile Legends di SwitchFest E-Sport!</p>
                  <div className="mt-auto space-y-3">
                    <a className="flex items-center justify-center gap-2 w-full py-3 text-white font-bold rounded-lg hover:brightness-110 transition-all" style={{ background: '#ff6b00', boxShadow: '0 0 20px rgba(255,107,0,0.4)' }} href="#">DAFTAR SEKARANG</a>
                    <button className="flex items-center justify-center gap-2 w-full py-3 border border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all text-sm" onClick={() => toggleFlip('esport-flip-inner')}>LIHAT DETAIL ACARA</button>
                  </div>
                </div>
                <div style={flipBack}>
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest" style={{ border: '1px solid #ff6b00', color: '#ff6b00' }}>EVENT DETAILS</span>
                    <span className="material-symbols-outlined opacity-50" style={{ color: '#ff6b00' }}>info</span>
                  </div>
                  <div className="space-y-6 flex-grow">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ff6b00' }}>Rules</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">Format 5v5 Mobile Legends. Bracket single elimination. Tim wajib mendaftarkan roster 5+1 pemain.</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ff6b00' }}>Timeline</h4>
                      <ul className="text-[11px] text-gray-300 space-y-1">
                        <li>• 09:00 - Check-in &amp; Technical Meeting</li>
                        <li>• 10:00 - Babak Penyisihan</li>
                        <li>• 14:00 - Grand Final</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ff6b00' }}>Venue</h4>
                      <p className="text-xs text-gray-400">Area E-Sport GOR Volley UIR.</p>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <button className="flex items-center justify-center gap-2 w-full py-3 border border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all text-sm" onClick={() => toggleFlip('esport-flip-inner')}>
                      <span className="material-symbols-outlined text-sm">arrow_back</span> KEMBALI
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Badminton Tournament */}
          <div className="relative group">
            <div className="absolute inset-0 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'rgba(59,130,246,0.2)' }}></div>
            <div style={flipContainer}>
              <div style={flipInner} id="badminton-flip-inner">
                <div style={flipFront}>
                  <div className="flex justify-between items-start mb-8">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest" style={{ border: '1px solid #3b82f6', color: '#3b82f6' }}>BADMINTON CUP</span>
                    <span className="material-symbols-outlined opacity-50" style={{ color: '#3b82f6' }}>sports_tennis</span>
                  </div>
                  <div className="flex gap-2 mb-4">
                    <span className="px-2 py-1 rounded text-[10px] font-bold text-gray-400" style={{ background: 'rgba(255,255,255,0.05)' }}>SMA/SMK</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Badminton Tournament</h3>
                  <p className="text-sm text-gray-400 mb-8 leading-relaxed">Tunjukkan sportivitas, kelincahan, dan kerja sama tim terbaikmu dalam turnamen badminton memperebutkan Piala Milad IT Fest!</p>
                  <div className="mt-auto space-y-3">
                    <a className="flex items-center justify-center gap-2 w-full py-3 text-white font-bold rounded-lg hover:brightness-110 transition-all" style={{ background: '#3b82f6', boxShadow: '0 0 20px rgba(59,130,246,0.4)' }} href="#">DAFTAR SEKARANG</a>
                    <button className="flex items-center justify-center gap-2 w-full py-3 border border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all text-sm" onClick={() => toggleFlip('badminton-flip-inner')}>LIHAT DETAIL ACARA</button>
                  </div>
                </div>
                <div style={flipBack}>
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest" style={{ border: '1px solid #3b82f6', color: '#3b82f6' }}>EVENT DETAILS</span>
                    <span className="material-symbols-outlined opacity-50" style={{ color: '#3b82f6' }}>info</span>
                  </div>
                  <div className="space-y-6 flex-grow">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#3b82f6' }}>Rules</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">Format ganda putra. Sistem gugur (knockout). Peserta wajib dari sekolah yang sama.</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#3b82f6' }}>Timeline</h4>
                      <ul className="text-[11px] text-gray-300 space-y-1">
                        <li>• 08:00 - Registrasi</li>
                        <li>• 09:00 - Undian &amp; Drawing</li>
                        <li>• 10:00 - Babak Awal</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#3b82f6' }}>Venue</h4>
                      <p className="text-xs text-gray-400">GOR Volley UIR, Lapangan Utama.</p>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <button className="flex items-center justify-center gap-2 w-full py-3 border border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all text-sm" onClick={() => toggleFlip('badminton-flip-inner')}>
                      <span className="material-symbols-outlined text-sm">arrow_back</span> KEMBALI
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: IT Expo */}
          <div className="relative group">
            <div className="absolute inset-0 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'rgba(0,229,255,0.2)' }}></div>
            <div style={flipContainer}>
              <div style={flipInner} id="expo-flip-inner">
                <div style={flipFront}>
                  <div className="flex justify-between items-start mb-8">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest" style={{ border: '1px solid #00e5ff', color: '#00e5ff' }}>EXHIBITION</span>
                    <span className="material-symbols-outlined opacity-50" style={{ color: '#00e5ff' }}>rocket_launch</span>
                  </div>
                  <div className="flex gap-2 mb-4">
                    <span className="px-2 py-1 rounded text-[10px] font-bold text-gray-400" style={{ background: 'rgba(255,255,255,0.05)' }}>MAHASISWA</span>
                    <span className="px-2 py-1 rounded text-[10px] font-bold text-gray-400" style={{ background: 'rgba(255,255,255,0.05)' }}>UMUM</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">IT Expo</h3>
                  <p className="text-sm text-gray-400 mb-8 leading-relaxed">Pameran karya inovasi mahasiswa dan startup teknologi. Lihat langsung proyek masa depan yang dibangun oleh talenta muda.</p>
                  <div className="mt-auto space-y-3">
                    <a className="flex items-center justify-center gap-2 w-full py-3 text-black font-bold rounded-lg hover:brightness-110 transition-all" style={{ background: '#00e5ff', boxShadow: '0 0 20px rgba(0,229,255,0.4)' }} href="#">DAFTAR SEKARANG</a>
                    <button className="flex items-center justify-center gap-2 w-full py-3 border border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all text-sm" onClick={() => toggleFlip('expo-flip-inner')}>LIHAT DETAIL ACARA</button>
                  </div>
                </div>
                <div style={flipBack}>
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest" style={{ border: '1px solid #00e5ff', color: '#00e5ff' }}>EVENT DETAILS</span>
                    <span className="material-symbols-outlined opacity-50" style={{ color: '#00e5ff' }}>info</span>
                  </div>
                  <div className="space-y-6 flex-grow">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#00e5ff' }}>Requirements</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">Terbuka untuk proyek IoT, Web, Mobile, atau AI. Booth disediakan oleh panitia.</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#00e5ff' }}>Schedule</h4>
                      <ul className="text-[11px] text-gray-300 space-y-1">
                        <li>• 09:00 - Booth Setup</li>
                        <li>• 10:00 - Exhibition Open</li>
                        <li>• 16:00 - Best Project Award</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#00e5ff' }}>Venue</h4>
                      <p className="text-xs text-gray-400">Lobby Utama GOR Volley UIR.</p>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <button className="flex items-center justify-center gap-2 w-full py-3 border border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all text-sm" onClick={() => toggleFlip('expo-flip-inner')}>
                      <span className="material-symbols-outlined text-sm">arrow_back</span> KEMBALI
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Nasional Seminar */}
          <div className="relative group">
            <div className="absolute inset-0 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'rgba(255,107,0,0.2)' }}></div>
            <div style={flipContainer}>
              <div style={flipInner} id="seminar-flip-inner">
                <div style={flipFront}>
                  <div className="flex justify-between items-start mb-8">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest" style={{ border: '1px solid #ff6b00', color: '#ff6b00' }}>KNOWLEDGE HUB</span>
                    <span className="material-symbols-outlined opacity-50" style={{ color: '#ff6b00' }}>school</span>
                  </div>
                  <div className="flex gap-2 mb-4">
                    <span className="px-2 py-1 rounded text-[10px] font-bold text-gray-400" style={{ background: 'rgba(255,255,255,0.05)' }}>MAHASISWA</span>
                    <span className="px-2 py-1 rounded text-[10px] font-bold text-gray-400" style={{ background: 'rgba(255,255,255,0.05)' }}>UMUM</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Nasional Seminar</h3>
                  <p className="text-sm text-gray-400 mb-8 leading-relaxed">Seminar nasional menghadirkan pakar teknologi dan industri untuk membahas masa depan transformasi digital di Indonesia.</p>
                  <div className="mt-auto space-y-3">
                    <a className="flex items-center justify-center gap-2 w-full py-3 text-white font-bold rounded-lg hover:brightness-110 transition-all" style={{ background: '#ff6b00', boxShadow: '0 0 20px rgba(255,107,0,0.4)' }} href="#">DAFTAR SEKARANG</a>
                    <button className="flex items-center justify-center gap-2 w-full py-3 border border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all text-sm" onClick={() => toggleFlip('seminar-flip-inner')}>LIHAT DETAIL ACARA</button>
                  </div>
                </div>
                <div style={flipBack}>
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest" style={{ border: '1px solid #ff6b00', color: '#ff6b00' }}>EVENT DETAILS</span>
                    <span className="material-symbols-outlined opacity-50" style={{ color: '#ff6b00' }}>info</span>
                  </div>
                  <div className="space-y-6 flex-grow">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ff6b00' }}>Speakers</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">Pakar dari industri teknologi terkemuka dan akademisi senior.</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ff6b00' }}>Agenda</h4>
                      <ul className="text-[11px] text-gray-300 space-y-1">
                        <li>• 08:30 - Registrasi</li>
                        <li>• 09:30 - Keynote Session</li>
                        <li>• 11:30 - Q&amp;A &amp; Networking</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#ff6b00' }}>Venue</h4>
                      <p className="text-xs text-gray-400">Auditorium GOR Volley UIR.</p>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <button className="flex items-center justify-center gap-2 w-full py-3 border border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all text-sm" onClick={() => toggleFlip('seminar-flip-inner')}>
                      <span className="material-symbols-outlined text-sm">arrow_back</span> KEMBALI
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 6: Typing Test */}
          <div className="relative group">
            <div className="absolute inset-0 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'rgba(59,130,246,0.2)' }}></div>
            <div style={flipContainer}>
              <div style={flipInner} id="typing-flip-inner">
                <div style={flipFront}>
                  <div className="flex justify-between items-start mb-8">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest" style={{ border: '1px solid #3b82f6', color: '#3b82f6' }}>SKILL CHALLENGE</span>
                    <span className="material-symbols-outlined opacity-50" style={{ color: '#3b82f6' }}>keyboard</span>
                  </div>
                  <div className="flex gap-2 mb-4">
                    <span className="px-2 py-1 rounded text-[10px] font-bold text-gray-400" style={{ background: 'rgba(255,255,255,0.05)' }}>PELAJAR</span>
                    <span className="px-2 py-1 rounded text-[10px] font-bold text-gray-400" style={{ background: 'rgba(255,255,255,0.05)' }}>MAHASISWA</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Typing Test</h3>
                  <p className="text-sm text-gray-400 mb-8 leading-relaxed">Uji kecepatan dan akurasi mengetik tingkat nasional. Tunjukkan keahlian teknismu dalam kompetisi mengetik cepat.</p>
                  <div className="mt-auto space-y-3">
                    <a className="flex items-center justify-center gap-2 w-full py-3 text-white font-bold rounded-lg hover:brightness-110 transition-all" style={{ background: '#3b82f6', boxShadow: '0 0 20px rgba(59,130,246,0.4)' }} href="#">DAFTAR SEKARANG</a>
                    <button className="flex items-center justify-center gap-2 w-full py-3 border border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all text-sm" onClick={() => toggleFlip('typing-flip-inner')}>LIHAT DETAIL ACARA</button>
                  </div>
                </div>
                <div style={flipBack}>
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest" style={{ border: '1px solid #3b82f6', color: '#3b82f6' }}>EVENT DETAILS</span>
                    <span className="material-symbols-outlined opacity-50" style={{ color: '#3b82f6' }}>info</span>
                  </div>
                  <div className="space-y-6 flex-grow">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#3b82f6' }}>Rules</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">Menggunakan platform resmi panitia. Durasi 5 menit. Penilaian berdasarkan WPM dan Akurasi.</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#3b82f6' }}>Timeline</h4>
                      <ul className="text-[11px] text-gray-300 space-y-1">
                        <li>• 13:00 - Sesi 1</li>
                        <li>• 14:00 - Sesi 2</li>
                        <li>• 15:30 - Pengumuman</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#3b82f6' }}>Venue</h4>
                      <p className="text-xs text-gray-400">Lab Komputer Teknik Informatika UIR.</p>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <button className="flex items-center justify-center gap-2 w-full py-3 border border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all text-sm" onClick={() => toggleFlip('typing-flip-inner')}>
                      <span className="material-symbols-outlined text-sm">arrow_back</span> KEMBALI
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
