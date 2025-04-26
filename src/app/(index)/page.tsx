import { Header } from './components/header'
import { Introduction } from './components/introduction'
import { Projects } from './components/projects'

export default function Page() {
  return (
    <div className="animate-fancy-fade-in container mx-auto my-32 max-w-screen-md space-y-8">
      <section className="space-y-4">
        <Header />
        <Introduction />
      </section>
      <Projects />
    </div>
  )
}

