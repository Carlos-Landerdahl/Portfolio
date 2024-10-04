import { Chip, Link } from '@nextui-org/react'

const backend = 'success'
const frontend = 'warning'
const dba = 'danger'
const other = 'default'
const scrum = 'secondary'

export const experienciasProfissionais = [
  {
    cargo: 'Desenvolvedor Web',
    empresa: 'Sapiens Agro',
    ativo: true,
    periodo: 'Set de 2024 - Presente',
    tabs: [
      {
        id: '1',
        label: 'Cargo',
        content: (
          <p>
            Responsável pela manutenção de sistemas web já existentes, garantindo sua eficiência e atualizações contínuas. Também atuo no desenvolvimento e integração de novos produtos, utilizando tecnologias como Bubble e Supabase, com foco na cotação de commodities e predição de tendências do mercado agrícola.
          </p>
        ),
      },
      {
        id: '2',
        label: 'Empresa',
        content:
          'A Sapiens Agro Enterprise oferece consultoria especializada para empresas em inteligência artificial, machine learning, Power BI e automações de dados, totalmente ajustada às necessidades específicas de cada cliente. Com um time de experts e metodologia ágil, garantimos entregas de alta qualidade e eficiência. Nossos projetos abrangem desde previsões de preços de commodities, incluindo as não listadas em bolsa, até logística no agro. Oferecemos visualizações avançadas em aplicações web/mobile e destaque para nossa análise de linguagem natural, processando milhares de notícias de forma automatizada através de inteligência artificial.',
      },
      {
        id: '3',
        label: 'Habilidades',
        content: (
          <div className="flex flex-wrap gap-2">
            <Chip
              radius="sm"
              variant="flat"
              color={dba}
              className="border-[--border-1] text-bold cursor-pointer"
            >
              PostgreSQL
            </Chip>
            <Chip
              radius="sm"
              variant="flat"
              color={frontend}
              className="border-[--border-1] text-bold cursor-pointer"
            >
              Bubble
            </Chip>
            <Chip
              radius="sm"
              variant="flat"
              color={frontend}
              className="border-[--border-1] text-bold cursor-pointer"
            >
              Supabase
            </Chip>
            <Chip
              radius="sm"
              variant="flat"
              color={scrum}
              className="text-[--subtext] border-[--border-1] text-bold cursor-pointer"
            >
              Make
            </Chip>
            <Chip
              radius="sm"
              variant="flat"
              color={backend}
              className="text-[--subtext] border-[--border-1] text-bold cursor-pointer"
            >
              Javascript
            </Chip>
            <Chip
              radius="sm"
              variant="flat"
              color={other}
              className="text-[--subtext] border-[--border-1] text-bold cursor-pointer"
            >
              Python
            </Chip>
            <Chip
              radius="sm"
              variant="flat"
              color={other}
              className="text-[--subtext] border-[--border-1] text-bold cursor-pointer"
            >
              Integrações API
            </Chip>
          </div>
        ),
      },
    ],
  },
  {
    cargo: 'Desenvolvedor Web',
    empresa: 'LoopFull',
    ativo: true,
    periodo: 'Mar de 2023 - Presente',
    tabs: [
      {
        id: '1',
        label: 'Cargo',
        content: (
          <p>
            Responsável por prestar serviços tanto para a empresa quanto para seus parceiros. Minhas atividades incluem a refatoração de código e desenvolvimento web, utilizando tecnologias como Next.js e WordPress. Além disso, realizo integrações entre o front-end e o back-end, desenvolvimento de páginas de conversão, criação de APIs para captura de dados e construção de sites institucionais. Também foco na otimização de desempenho de sites, visando melhorar a experiência do usuário e a eficiência das plataformas digitais.
          </p>
        ),
      },
      {
        id: '2',
        label: 'Empresa',
        content:
          'Com 18 anos de experiência, esta agência de marketing adota uma abordagem holística para fortalecer marcas e impactar comunidades. Oferece soluções ponta a ponta, valoriza a diversidade e está comprometida com a inovação e o aprendizado contínuo. O objetivo é não apenas gerar resultados, mas também contribuir para um mundo melhor.',
      },
      {
        id: '3',
        label: 'Habilidades',
        content: (
          <div className="flex flex-wrap gap-2">
            <Chip
              radius="sm"
              variant="flat"
              color={dba}
              className="border-[--border-1] text-bold cursor-pointer"
            >
              Mysql
            </Chip>
            <Chip
              radius="sm"
              variant="flat"
              color={frontend}
              className="border-[--border-1] text-bold cursor-pointer"
            >
              NextJs
            </Chip>
            <Chip
              radius="sm"
              variant="flat"
              color={frontend}
              className="border-[--border-1] text-bold cursor-pointer"
            >
              ReactJs
            </Chip>
            <Chip
              radius="sm"
              variant="flat"
              color={scrum}
              className="text-[--subtext] border-[--border-1] text-bold cursor-pointer"
            >
              Wordpress
            </Chip>
            <Chip
              radius="sm"
              variant="flat"
              color={backend}
              className="text-[--subtext] border-[--border-1] text-bold cursor-pointer"
            >
              NodeJs
            </Chip>
            <Chip
              radius="sm"
              variant="flat"
              color={other}
              className="text-[--subtext] border-[--border-1] text-bold cursor-pointer"
            >
              Meta Ads
            </Chip>
            <Chip
              radius="sm"
              variant="flat"
              color={other}
              className="text-[--subtext] border-[--border-1] text-bold cursor-pointer"
            >
              Google Ads
            </Chip>
            <Chip
              radius="sm"
              variant="flat"
              color={scrum}
              className="text-[--subtext] border-[--border-1] text-bold cursor-pointer"
            >
              Trello
            </Chip>
          </div>
        ),
      },
    ],
  },
  {
    cargo: 'Landerdahl Tech',
    empresa: 'Pessoa júridica',
    ativo: true,
    periodo: 'Jan de 2022 - Presente',
    tabs: [
      {
        id: '1',
        label: 'Cargo',
        content: (
          <p>
            Fundada em 2022, a <b>Landerdahl Tech</b> é especializada em oferecer soluções de desenvolvimento web de alta qualidade. Atuamos com tecnologias de ponta, como Next.js, React.js, Java com Spring Boot, Bubble e Supabase, garantindo eficiência e inovação em cada projeto.

            Além do desenvolvimento, prestamos serviços completos de suporte ao cliente, utilizando a plataforma Intercom para garantir uma comunicação eficaz e personalizada com nossos clientes, utilizando IA e fluxogramas totalmente integrados com a sua plataforma.
          </p>
        ),
      },
      {
        id: '3',
        label: 'Habilidades',
        content: (
          <div className="flex flex-wrap gap-2">
            <Chip
              radius="sm"
              variant="flat"
              color={dba}
              className="border-[--border-1] text-bold cursor-pointer"
            >
              Supabase
            </Chip>
            <Chip
              radius="sm"
              variant="flat"
              color={dba}
              className="border-[--border-1] text-bold cursor-pointer"
            >
              PostgreSQL
            </Chip>
            <Chip
              radius="sm"
              variant="flat"
              color={dba}
              className="border-[--border-1] text-bold cursor-pointer"
            >
              Bubble
            </Chip>
            <Chip
              radius="sm"
              variant="flat"
              color={frontend}
              className="border-[--border-1] text-bold cursor-pointer"
            >
              NextJs
            </Chip>
            <Chip
              radius="sm"
              variant="flat"
              color={scrum}
              className="text-[--subtext] border-[--border-1] text-bold cursor-pointer"
            >
              Wordpress
            </Chip>
            <Chip
              radius="sm"
              variant="flat"
              color={frontend}
              className="border-[--border-1] text-bold cursor-pointer"
            >
              ReactJs
            </Chip>
            <Chip
              radius="sm"
              variant="flat"
              color={backend}
              className="text-[--subtext] border-[--border-1] text-bold cursor-pointer"
            >
              NodeJs
            </Chip>
            <Chip
              radius="sm"
              variant="flat"
              color={backend}
              className="text-[--subtext] border-[--border-1] text-bold cursor-pointer"
            >
              Java
            </Chip>
            <Chip
              radius="sm"
              variant="flat"
              color={backend}
              className="text-[--subtext] border-[--border-1] text-bold cursor-pointer"
            >
              Spring Boot
            </Chip>
          </div>
        ),
      },
    ],
  },
  {
    cargo: 'Desenvolvedor Frontend',
    empresa: 'Solaland',
    ativo: false,
    periodo: 'Jan de 2022 - Dez de 2023',
    tabs: [
      {
        id: '1',
        label: 'Cargo',
        content:
          'Responsável pela coleta de requisitos junto aos clientes, garantindo o alinhamento adequado das expectativas. Atuo no desenvolvimento de páginas web utilizando as tecnologias React.js e Next.js, bem como na correção e resolução de bugs reportados pelos clientes. Além disso, participo da criação e aprimoramento de scripts relacionados a distribuição de tokens, como airdrops e staking. Sou também responsável pela organização e distribuição das "hot tasks", pequenas demandas com prazos curtos, que são alocadas conforme a necessidade e solicitações dos clientes, em coordenação com os demais desenvolvedores da equipe.',
      },
      {
        id: '2',
        label: 'Empresa',
        content: (
          <p>
            <Link
              isExternal
              href="https://www.linkedin.com/company/solalandhq/"
              showAnchorIcon
            >
              Soland HQ
            </Link>{' '}
            é umas das primeiras empresas brasileiras a prestar serviços para
            coleções NFTs dentro do ecosistema da Solana,atuando na
            implementação de Bots que fazem a verificação dos membros no
            discord, notificações de vendas das coleções dentro do discord e
            twitter, rarity Bot, airdrops, staking de NFTs e vários outros
            serviços personalizados.
          </p>
        ),
      },
      {
        id: '3',
        label: 'Habilidades',
        content: (
          <div className="flex flex-wrap gap-2">
            <Chip
              radius="sm"
              variant="flat"
              color={dba}
              className="border-[--border-1] text-bold cursor-pointer"
            >
              MongoDB
            </Chip>
            <Chip
              radius="sm"
              variant="flat"
              color={frontend}
              className="border-[--border-1] text-bold cursor-pointer"
            >
              NextJs
            </Chip>
            <Chip
              radius="sm"
              variant="flat"
              color={frontend}
              className="border-[--border-1] text-bold cursor-pointer"
            >
              ReactJs
            </Chip>
            <Chip
              radius="sm"
              variant="flat"
              color={frontend}
              className="border-[--border-1] text-bold cursor-pointer"
            >
              Stitches
            </Chip>
            <Chip
              radius="sm"
              variant="flat"
              color={frontend}
              className="border-[--border-1] text-bold cursor-pointer"
            >
              Styled Components
            </Chip>
            <Chip
              radius="sm"
              variant="flat"
              color={backend}
              className="text-[--subtext] border-[--border-1] text-bold cursor-pointer"
            >
              NodeJs
            </Chip>
            <Chip
              radius="sm"
              variant="flat"
              color={scrum}
              className="text-[--subtext] border-[--border-1] text-bold cursor-pointer"
            >
              YouTrack
            </Chip>
            <Chip
              radius="sm"
              variant="flat"
              color={scrum}
              className="text-[--subtext] border-[--border-1] text-bold cursor-pointer"
            >
              Notion
            </Chip>
          </div>
        ),
      },
    ],
  },
]
