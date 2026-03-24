import { Link } from '@nextui-org/react'

export default function AboutMe() {
  return (
    <div className="flex flex-col gap-3 mt-[40px] border border-border1 rounded p-9 hover:border-white transition-all ease-linear cursor-pointer">
      <h1 className="text-3xl font-bold">Sobre</h1>
      <p className="text-subtext">
        Desenvolvedor web com foco em transformar lógicas complexas em produtos digitais. Atualmente, na Sapiens Agro, sou responsável pela arquitetura, desenvolvimento e sustentação, entregando soluções escaláveis que atendem a operações críticas e decisões estratégicas baseadas em dados.
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
