import { Header, HeroSection, ProductSection, NewsSection, Footer } from "@/components"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProductSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  )
}
