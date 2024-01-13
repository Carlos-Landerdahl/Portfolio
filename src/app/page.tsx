import AboutMe from '@/components/home/about'
import Award from '@/components/home/awards'
import Presentation from '@/components/home/presentation'
import Stack from '@/components/home/stack'

export default function Home() {
  return (
    <div className="text-[--title] max-w-7xl flex-col gap-4 px-4 pt-10 pb-5 m-auto">
      <Presentation />
      <AboutMe />
      <Stack />
      <Award />
    </div>
  )
}
