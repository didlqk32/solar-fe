import { Button } from "@/components/ui/button"
import { Heart, Star, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Solar 프로젝트
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Next.js 15, TypeScript, Tailwind CSS, shadcn/ui로 구축된 현대적인 웹 애플리케이션
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <Zap className="h-4 w-4" />
              시작하기
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Star className="h-4 w-4" />
              GitHub
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center space-y-4 p-6 rounded-lg border bg-card">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">빠른 개발</h3>
              <p className="text-muted-foreground">
                Next.js 15와 Turbopack으로 빠른 개발 환경을 제공합니다.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-lg border bg-card">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">현대적인 UI</h3>
              <p className="text-muted-foreground">
                shadcn/ui와 Tailwind CSS로 아름다운 UI를 쉽게 구축할 수 있습니다.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-lg border bg-card">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">타입 안전성</h3>
              <p className="text-muted-foreground">
                TypeScript와 Zod로 완전한 타입 안전성을 보장합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
