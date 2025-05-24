import { Link } from '@nextui-org/react'

export default function AboutMe() {
  return (
    <div className="flex flex-col gap-3 mt-[40px] border border-border1 rounded p-9 hover:border-white transition-all ease-linear cursor-pointer">
      <h1 className="text-3xl font-bold">Sobre</h1>
      <p className="text-subtext">
        Desenvolvedor front-end e back-end, focado em criar sistemas eficientes,
        responsivos e escaláveis. Trabalho com tecnologias como Next.js,
        React.js, Java com Spring Boot, Bubble e Supabase, sempre buscando
        entregar soluções que resolvam problemas reais de negócios.
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
