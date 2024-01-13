import { ArrowUpRight, ChevronRightSquare } from 'lucide-react'
import Link from 'next/link'
import SendButton from './sendEmail'

export default function Header() {
  return (
    <nav className="px-2 border-b border-[--border-2] sm:px-3 fixed z-[100] bg-[--bg-black] w-full">
      <div className="h-[60px] max-w-7xl gap-2 m-auto flex px-1 items-center bg-transparent text-[--text-hover]">
        <section className="flex justify-center w-full items-center sm:justify-normal">
          <Link href="/" className="hover:animate-spin ease-in-out">
            <ChevronRightSquare size={25} />
          </Link>
        </section>
        <section className="flex justify-between w-full gap-3 items-center sm:justify-end">
          <ul className="flex gap-6 text-sm font-bold">
            <li className="text-[--header-link] hover:text-[--text-hover] transition ease-in-out ">
              <Link href="/">Sobre</Link>
            </li>
            <li className="text-[--header-link] hover:text-[--text-hover] transition ease-in-out">
              <Link href="/projetos" className="flex gap-1">
                Projetos <ArrowUpRight size={10} />
              </Link>
            </li>
            <li className="text-[--header-link] hover:text-[--text-hover] transition ease-in-out">
              <Link href="/carreira" className="flex gap-1">
                Carreira <ArrowUpRight size={10} />
              </Link>
            </li>
          </ul>
          <SendButton />
        </section>
      </div>
    </nav>
  )
}
