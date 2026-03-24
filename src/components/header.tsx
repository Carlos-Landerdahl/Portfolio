'use client'

import { ArrowUpRight, ChevronRightSquare } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SendButton from './sendEmail'

export default function Header() {
  const pathname = usePathname()

  const getLinkClass = (path: string) => {
    return pathname === path
      ? 'text-textHover transition ease-in-out'
      : 'text-headerLink hover:text-textHover transition ease-in-out'
  }

  return (
    <nav className="fixed z-[100] w-full border-b border-border2 bg-bgBlack px-2 sm:px-3">
      <div className="m-auto flex h-[60px] max-w-7xl items-center justify-center gap-2 bg-transparent px-1 text-textHover">
        <section className="flex items-center pr-2 sm:w-full sm:justify-normal">
          <Link href="/" className="ease-in-out hover:animate-spin">
            <ChevronRightSquare size={25} />
          </Link>
        </section>
        <section className="flex items-center justify-center gap-3 sm:justify-end">
          <ul className="flex gap-6 text-sm font-bold">
            <li className={getLinkClass('/')}>
              <Link href="/">Sobre</Link>
            </li>
            <li className={getLinkClass('/projetos')}>
              <Link href="/projetos" className="flex gap-1 items-center">
                Projetos <ArrowUpRight size={10} />
              </Link>
            </li>
            <li className={getLinkClass('/carreira')}>
              <Link href="/carreira" className="flex gap-1 items-center">
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
