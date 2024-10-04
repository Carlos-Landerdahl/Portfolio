import { Link } from '@nextui-org/react'

export default function AboutMe() {
  return (
    <div className="flex flex-col gap-3 mt-[40px] border border-border1 rounded p-9 hover:border-white transition-all ease-linear cursor-pointer">
      <h1 className="text-3xl font-bold">Sobre</h1>
      <p className="text-subtext">
        Sou desenvolvedor especializado em React/Next.js para criação de
        interfaces de usuário e me aprofundando em Java/Spring para soluções
        back-end. Com experiências em projetos pessoais no desenvolvimento de
        APIs RESTful e conhecimento de uma ampla gama de tecnologias como
        Docker, MySQL, MongoDB, PostgreSQL e CI/CD, ofereço soluções web
        robustas e funcionais.
      </p>
      <Link
        className="pt-3 font-bold underline underline-offset-4"
        href="/carreira"
        showAnchorIcon
      >
        Trajetória profissional
      </Link>
    </div>
  )
}
