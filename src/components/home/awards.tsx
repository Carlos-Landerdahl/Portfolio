import { ArrowUpRight, AwardIcon, Bookmark } from 'lucide-react'
import Link from 'next/link'

export default function Award() {
  return (
    <div className="mt-10">
      <div className="flex gap-2 flex-wrap md:flex-nowrap">
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          <Link
            href="/projetos"
            className="hover:underline hover:underline-offset-4 transition-all"
          >
            <h2 className="text-2xl font-bold flex items-top gap-1 md:mb-5">
              Projetos de destaque
              <ArrowUpRight size={18} className="text-[--header-link]" />
            </h2>
          </Link>
          <a
            href="https://github.com/Carlos-Landerdahl/Carhub"
            target="_blank"
            className="bg-[--bg-card] p-3 px-4 rounded flex gap-1 flex-col hover:bg-[--hover-card] transition-all ease-linear hover:border-transparent"
          >
            <h1 className="text-2xl font-bold flex items-center gap-1">
              Carhub <Bookmark size={24} />
            </h1>
            <p className="text-sm text-[--subtext]">
              Aplicação web desenvolvida com Next.js, projetada para oferecer
              uma experiência de aluguel de carros eficiente e amigável. Este
              projeto é complementado pela API RentalCarsAPI, que gerencia as
              operações relacionadas ao aluguel de carros, incluindo reservas,
              categorias de carros, informações de veículos e muito mais.
            </p>
          </a>
          <a
            href="https://github.com/Carlos-Landerdahl/HealthSchedule"
            target="_blank"
            className="bg-[--bg-card] p-3 px-4 rounded flex gap-1 flex-col hover:bg-[--hover-card] transition-all ease-linear hover:border-transparent"
          >
            <h1 className="text-2xl font-bold flex items-center gap-1">
              HealthSchedule <Bookmark size={24} />
            </h1>
            <p className="text-sm text-[--subtext]">
              Sistema de reserva de consultas para clínica odontológica,
              construído em Java com Spring Boot, Maven, JPA e autenticação
              segura usando JWT. Utiliza DTO para transferência eficiente de
              dados, proporcionando uma gestão eficaz de consultas com ênfase na
              segurança e usabilidade.
            </p>
          </a>
          <a
            href="https://github.com/Carlos-Landerdahl/DevStore"
            target="_blank"
            className="bg-[--bg-card] p-3 px-4 rounded flex gap-1 flex-col hover:bg-[--hover-card] transition-all ease-linear hover:border-transparent"
          >
            <h1 className="text-2xl font-bold flex items-center gap-1">
              Devstore <Bookmark size={24} />
            </h1>
            <p className="text-sm text-[--subtext]">
              Apresentando um Projeto Fictício de E-commerce que explora as mais
              recentes funcionalidades do Next.js 14, utilizando Tailwind e
              TypeScript. Abrange diversos aspectos, desde a manipulação de
              rotas até a implementação de Server-Side Components.
            </p>
          </a>
          <a
            href="https://github.com/Carlos-Landerdahl/BDCondominio"
            target="_blank"
            className="bg-[--bg-card] p-3 px-4 rounded flex gap-1 flex-col hover:bg-[--hover-card] transition-all ease-linear hover:border-transparent"
          >
            <h1 className="text-2xl font-bold flex items-center gap-1">
              BDCondominio <Bookmark size={24} />
            </h1>
            <p className="text-sm text-[--subtext]">
              O projeto consiste em um aplicativo para gerenciar condomínios,
              promovendo a interação entre condôminos e a administração. A
              plataforma online possibilita funções como emissão de boletos e
              reserva de espaços com o objetivo principal de solucionar questões
              de comunicação nos condomínios.
            </p>
          </a>
        </div>
        <div className="flex flex-col mt-5 gap-5 w-full md:w-1/2 md:mt-0">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-1 md:mb-5">
              Últimas conquistas
              <AwardIcon size={25} className="text-[--header-link]" />
            </h2>
          </div>
          <div className="flex gap-2 flex-col py-2 px-2">
            <a
              href="https://www.linkedin.com/in/carloslanderdahl/overlay/honors/450551716/multiple-media-viewer/?profileId=ACoAACRLHqkB292wN4De3kOl5hlyizcQBEQLJzE&treasuryMediaId=1635548497880"
              className="hover:underline hover:underline-offset-4 transition-all"
              target="_blank"
            >
              <h2 className="text-2xl font-bold flex items-top gap-1">
                2° Hackathon Ubyfol
                <ArrowUpRight size={18} className="text-[--header-link]" />
              </h2>
            </a>
            <p className="text-sm text-[--subtext]">
              Segundo lugar na temática “Acesso ao mercado”. Desenvolvemos um
              software responsável por coletar dados de ERPs dos distribuidores
              parceiros Ubyfol, com o intuito de melhorar a gestão,
              rastreabilidade e inteligência de mercado e consumo dos produtos
              Uby.
            </p>
            <div className="border border-[--border-2] my-5" />
          </div>
          <div className="flex gap-2 flex-col p-3 px-4">
            <a
              href="https://www.linkedin.com/in/carloslanderdahl/overlay/1635555117864/single-media-viewer/?profileId=ACoAACRLHqkB292wN4De3kOl5hlyizcQBEQLJzE"
              className="hover:underline hover:underline-offset-4 transition-all"
              target="_blank"
            >
              <h2 className="text-2xl font-bold flex items-top gap-1">
                Digital House
                <ArrowUpRight size={18} className="text-[--header-link]" />
              </h2>
            </a>
            <p className="text-sm text-[--subtext]">
              Finalização do Certified Tech Developer, um curso completo de
              Programação com aulas ao vivo com a duração de 1.568 horas,
              pensado e desenhado pelo Mercado Livre e Globant em conjunto com a
              Digital House e Rocketseat.
            </p>
            <div className="border border-[--border-2] my-5" />
          </div>
          <div className="flex gap-2 flex-col p-3 px-4">
            <a
              href="https://cursos.alura.com.br/certificate/e2b9a601-ba00-4135-8e21-68faa47145cb"
              className="hover:underline hover:underline-offset-4 transition-all"
              target="_blank"
            >
              <h2 className="text-2xl font-bold flex items-top gap-1">
                React.js
                <ArrowUpRight size={18} className="text-[--header-link]" />
              </h2>
            </a>
            <p className="text-sm text-[--subtext]">
              Finalização da formação ReactJs da Alura, aprofundando em libs,
              routers, props e interações com o usuário.
            </p>
            <div className="border border-[--border-2] my-5" />
          </div>
        </div>
      </div>
    </div>
  )
}
