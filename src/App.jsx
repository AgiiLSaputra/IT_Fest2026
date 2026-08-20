import Header from './components/Header'
import Hero from './components/Hero'
import Tentang from './components/Tentang'
import Gallery from './components/Gallery'
import Roadmap from './components/Roadmap'
import Pendaftaran from './components/Pendaftaran'
import Sponsor from './components/Sponsor'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <Header />
      <main className="flex-grow relative bg-cyberpunk-bg">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-cyberpunk-cyan/15 blur-[180px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-500/10 blur-[150px] rounded-full -translate-x-1/4 -translate-y-1/4 pointer-events-none z-0"></div>
        <Hero />
        <Tentang />
        <Gallery />
        <Roadmap />
        <Pendaftaran />
        <Sponsor />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
