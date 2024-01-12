import Header from '../components/Header'
import HeroSection from '@/components/landing/hero/HeroSection'
export default function Home() {
  return (
    <>
    <Header />
    <div className = "flex-col h-screen pt-36">
    <HeroSection />
    </div>
    </>
  )
}
