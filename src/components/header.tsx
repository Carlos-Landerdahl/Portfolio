import { ArrowUpRight, ChevronRightSquare } from 'lucide-react'
import Link from 'next/link'
import SendButton from './sendEmail'

export default function Header() {
  return (
    <nav className="px-2 border-b border-border2 sm:px-3 fixed z-[100] bg-bgBlack w-full">
      <div className="h-[60px] max-w-7xl justify-center gap-2 m-auto flex px-1 items-center bg-transparent text-textHover">
        <section className="flex pr-2  items-center sm:justify-normal sm:w-full">
          <Link href="/" className="hover:animate-spin ease-in-out">
            <ChevronRightSquare size={25} />
          </Link>
        </section>
        <section className="flex justify-center gap-3 items-center sm:justify-end">
          <ul className="flex gap-6 text-sm font-bold">
            <li className="text-headerLink hover:text-textHover transition ease-in-out ">
              <Link href="/">Sobre</Link>
            </li>
            <li className="text-headerLink hover:text-textHover transition ease-in-out">
              <Link href="/projetos" className="flex gap-1">
                Projetos <ArrowUpRight size={10} />
              </Link>
            </li>
            <li className="text-headerLink hover:text-textHover transition ease-in-out">
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
