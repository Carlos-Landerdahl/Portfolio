'use client'

import Carousel from '@/components/projects/carousel'
import { Button, Chip } from '@nextui-org/react'
import { ArrowUpRight, SlidersHorizontal } from 'lucide-react'
import { useState } from 'react'

interface Projeto {
  nome: string
  categoria: 'Frontend' | 'Backend' | 'DBA' | 'Fullstack'
  descricao: string
  deployLink: string
  githubLink: string
}

export default function Projetos() {
  const [categoriaFiltrada, setCategoriaFiltrada] = useState<string>('')

  function getColorByCategoria(categoria: string) {
    switch (categoria) {
      case 'Frontend':
        return 'warning'
      case 'Backend':
        return 'success'
      case 'DBA':
        return 'danger'
      case 'Fullstack':
        return 'secondary'
      default:
        return 'default'
    }
  }

  const certificados = [
    '/react.svg',
    '/spring.svg',
    '/types.svg',
    '/java.svg',
    '/react-query.svg',
  ]

  const projetos: Projeto[] = [
    {
      nome: 'HealthSchedule',
      categoria: 'Backend',
      descricao:
        'Sistema de reserva de consultas para clínica odontológica, construído em Java com Spring Boot, Maven, JPA e autenticação segura usando JWT. Utiliza DTO para transferência eficiente de dados, proporcionando uma gestão eficaz de consultas com ênfase na segurança e usabilidade.',
      deployLink: 'https://github.com/Carlos-Landerdahl/HealthSchedule',
      githubLink: 'https://github.com/Carlos-Landerdahl/HealthSchedule',
    },
    {
      nome: 'DSCommerce',
      categoria: 'Backend',
      descricao:
        'Desenvolvimento de sistema de e-commerce para cadastro, visualização e compra de produtos. Usuários (clientes e administradores) podem gerenciar pedidos, e administradores têm acesso a áreas administrativas para controle de usuários e produtos.',
      deployLink: 'https://github.com/Carlos-Landerdahl/DSCommerce',
      githubLink: 'https://github.com/Carlos-Landerdahl/DSCommerce',
    },
    {
      nome: 'Carhub',
      categoria: 'Frontend',
      descricao:
        'O projeto CARHUB é uma aplicação web desenvolvida com Next.js, projetada para oferecer uma experiência de aluguel de carros eficiente e amigável. Este projeto é complementado pela API RentalCarsAPI.',
      deployLink: 'https://carhub-dh.vercel.app/',
      githubLink: 'https://github.com/Carlos-Landerdahl/Carhub',
    },
    {
      nome: 'Devstore',
      categoria: 'Frontend',
      descricao:
        'Apresentando um Projeto Fictício de E-commerce que explora as mais recentes funcionalidades do Next.js 14, utilizando Tailwind e TypeScript. Abrange diversos aspectos, desde a manipulação de rotas até a implementação de Server-Side Components.',
      deployLink: 'https://github.com/Carlos-Landerdahl/DevStore',
      githubLink: 'https://github.com/Carlos-Landerdahl/DevStore',
    },
    {
      nome: 'BDCondominio',
      categoria: 'DBA',
      descricao:
        'O projeto consiste em um aplicativo para gerenciar condomínios, promovendo a interação entre condôminos e a administração. A plataforma online possibilita funções como emissão de boletos e reserva de espaços.',
      deployLink: 'https://github.com/Carlos-Landerdahl/BDCondominio',
      githubLink: 'https://bd-condominio.vercel.app/',
    },
    {
      nome: 'HealthScaleIMC',
      categoria: 'Frontend',
      descricao:
        'Este projeto utiliza React, TypeScript e Modules.css para desenvolver uma calculadora de Índice de Massa Corporal (IMC). A aplicação permite aos usuários inserir dados, realiza o cálculo do IMC e exibe os resultados de forma interativa.',
      deployLink: 'https://calcule-seu-imc-react.vercel.app/',
      githubLink: 'https://github.com/Carlos-Landerdahl/HealthScaleIMC',
    },
    {
      nome: 'OdontoSchedule',
      categoria: 'Frontend',
      descricao:
        'Este projeto em React.js cria um sistema de consultas com autenticação via token. Utiliza Bootstrap para estilização e implementa rotas privadas, garantindo o acesso adequado com base no login do usuário.',
      deployLink: 'https://consultorio-odonto.vercel.app/',
      githubLink: 'https://github.com/Carlos-Landerdahl/OdontoSchedule',
    },
    {
      nome: 'TransactionBank',
      categoria: 'Backend',
      descricao:
        'A Transaction Bank API, uma aplicação Spring Boot, foca em operações bancárias. Configurada para testes, otimiza o acesso ao banco de dados e está em constante desenvolvimento. A documentação detalhada do Swagger facilita a compreensão e integração com outros sistemas.',
      deployLink: 'https://github.com/Carlos-Landerdahl/TransactionBank',
      githubLink: 'https://github.com/Carlos-Landerdahl/TransactionBank',
    },
    {
      nome: 'Carhub API',
      categoria: 'Backend',
      descricao:
        'API intuitiva e robusta usando Spring Boot para gerenciamento de aluguéis de carros. Esta API foi projetada para simplificar o processo de aluguel de carros, gerenciamento de categorias, cidades e empresas de aluguel.',
      deployLink: 'https://github.com/bchavs12/RentalCarsAPI',
      githubLink: 'https://github.com/bchavs12/RentalCarsAPI',
    },
    {
      nome: 'ToDoApp',
      categoria: 'Frontend',
      descricao:
        'Este é um sistema abrangente de criação de tarefas desenvolvido inteiramente em JavaScript puro. Para gerenciar novos usuários e persistir os dados das tarefas, o sistema consome uma API. Isso implica que as funcionalidades incluem a criação e gerenciamento de tarefas.',
      deployLink: 'https://github.com/Carlos-Landerdahl/ToDoApp',
      githubLink: 'https://github.com/Carlos-Landerdahl/ToDoApp',
    },
    {
      nome: 'IgniteFeed',
      categoria: 'Frontend',
      descricao:
        'O sistema em questão é construído utilizando React e TypeScript. Ele simula uma plataforma de rede social, proporcionando aos usuários a funcionalidade de criar posts. Além disso, os usuários podem interagir por meio de comentários, adicionando uma dinâmica social à aplicação.',
      deployLink: 'https://ignite-feed-home.vercel.app/',
      githubLink: 'https://github.com/Carlos-Landerdahl/IgniteFeed',
    },
    {
      nome: 'ClientCrud',
      categoria: 'Backend',
      descricao:
        'Desafio do curso Java Spring Essential: criar um projeto Spring Boot com CRUD de clientes em web services REST. Inclui operações básicas como busca paginada, busca por ID, inserção, atualização e exclusão de recursos.',
      deployLink: 'https://github.com/Carlos-Landerdahl/ClientCrud',
      githubLink: 'https://github.com/Carlos-Landerdahl/ClientCrud',
    },
  ]

  const compararPorCategoria = (a: Projeto, b: Projeto): number => {
    const categorias: string[] = ['Frontend', 'Backend', 'DBA', 'Fullstack']

    const indiceCategoriaA: number = categorias.indexOf(a.categoria)
    const indiceCategoriaB: number = categorias.indexOf(b.categoria)

    return indiceCategoriaA - indiceCategoriaB
  }

  const projetosOrdenados: Projeto[] = projetos.sort(compararPorCategoria)

  const filtrarProjetos = (categoria: string): void => {
    setCategoriaFiltrada(categoria)
  }

  const projetosFiltrados: Projeto[] = categoriaFiltrada
    ? projetosOrdenados.reduce<Projeto[]>((acc, projeto) => {
        if (projeto.categoria === categoriaFiltrada) {
          acc.unshift(projeto)
        } else {
          acc.push(projeto)
        }
        return acc
      }, [])
    : projetosOrdenados

  return (
    <section className="max-w-7xl m-auto">
      <Carousel certificados={certificados} />
      <div className="flex gap-2 w-full items-center justify-center flex-col my-4 pt-6">
        <div>
          <p className="text-[--subtext] text-sm font-bold flex items-center gap-2">
            Filtro de busca
            <SlidersHorizontal size={15} />
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            className="px-1 py-1 bg-transparent text-green-600 border border-green-900"
            onClick={() => filtrarProjetos('Backend')}
          >
            Backend
          </Button>
          <Button
            className="px-1 py-1 bg-transparent text-yellow-500 border border-yellow-900"
            onClick={() => filtrarProjetos('Frontend')}
          >
            Frontend
          </Button>
          <Button
            className="px-1 py-1 bg-transparent text-pink-600 border border-pink-900"
            onClick={() => filtrarProjetos('DBA')}
          >
            DBA
          </Button>
          <Button
            className="px-1 py-1 bg-transparent text-purple-600 border border-purple-900"
            onClick={() => filtrarProjetos('Fullstack')}
          >
            Fullstack
          </Button>
        </div>
      </div>
      <div className="flex text-[--title] justify-center gap-4 py-4 px-4 flex-wrap">
        {projetosFiltrados.map((projeto, index) => (
          <div key={index} className="flex items-start cursor-pointer">
            <div className="flex flex-col w-[300px] h-[330px] justify-between border border-[--border-1] p-5 rounded gap-2 hover:scale-[102%] hover:border-white transition-all ease-linear">
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">{projeto.nome}</h1>
                <Chip
                  color={getColorByCategoria(projeto.categoria)}
                  variant="dot"
                  className="text-[--subtext] border-[--border-1]"
                >
                  {projeto.categoria}
                </Chip>
                <p className="text-sm text-[--subtext]">{projeto.descricao}</p>
              </div>
              <div className="flex gap-2">
                <a
                  target="_blank"
                  href={projeto.deployLink}
                  className="flex items-top hover:underline"
                >
                  Deploy{' '}
                  <ArrowUpRight size={14} className="text-[--subtitle]" />
                </a>
                <a
                  target="_blank"
                  href={projeto.githubLink}
                  className="flex items-top hover:underline"
                >
                  Github{' '}
                  <ArrowUpRight size={14} className="text-[--subtitle]" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
