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
            Atuo no desenvolvimento e sustentação de sistemas web na Sapiens
            Agro, com responsabilidade sobre a criação do front-end, estrutura
            de dados e segurança, sempre em colaboração direta com o time de
            engenharia de dados.
            <br />
            <br />
            <b>Sapiens Fretes:</b> Uma solução que utiliza modelos matemáticos
            para prever/compor preços de frete e demandas logísticas com até 24
            meses. Voltada à eficiência operacional e planejamento estratégico,
            a aplicação automatiza cotações e entrega insights que ajudam
            empresas a reduzir custos e tomar decisões assertivas.
            <br />
            <br />
            <b>Agrosap:</b> Responsável por todo o desenvolvimento e sustentação
            da plataforma AgroSap, desde a arquitetura do banco de dados até a
            interface final. Hoje com mais de 100 usuários ativos, a ferramenta
            centraliza informações estratégicas baseadas em modelos
            matematáticos da Sapiens. A plataforma está em constante evolução,
            com lançamentos regulares de melhorias baseadas em feedback real dos
            usuários.
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
            <Chip
              radius="sm"
              variant="flat"
              color={other}
              className="text-[--subtext] border-[--border-1] text-bold cursor-pointer"
            >
              Integração com Asaas
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
            Desde 2022, a <b>Landerdahl Tech</b> se consolidou em soluções de
            desenvolvimento web sob medida. Entendemos que cada negócio possui
            desafios únicos e, por isso, nossa abordagem vai muito além do
            código: atuamos como parceiros estratégicos da sua marca. Utilizando
            as tecnologias mais modernas do mercado, garantimos projetos que
            combinam estética, usabilidade e performance. Seja na criação de
            plataformas complexas ou sites institucionais, nosso compromisso é
            entregar eficiência e inovação.
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
    cargo: 'Desenvolvedor Web',
    empresa: 'LoopFull',
    ativo: true,
    periodo: 'Mar de 2023 - Fev de 2025',
    tabs: [
      {
        id: '1',
        label: 'Cargo',
        content: (
          <p>
            Desenvolvimento web com Next.js, WordPress e Bubble. Responsável por
            criar páginas de conversão, desenvolver APIs, construir sites
            institucionais, e-commerces e plataformas SaaS.
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
    cargo: 'Desenvolvedor Frontend',
    empresa: 'Solaland',
    ativo: false,
    periodo: 'Jan de 2022 - Dez de 2023',
    tabs: [
      {
        id: '1',
        label: 'Cargo',
        content:
          'Responsável pela coleta dos requisitos do produto e pelo desenvolvimento web com React.js e Next.js, bem como na manutenção e sustentação dos sistemas já existentes. Também responsável pela organização e distribuição das tasks, que são alocadas conforme a necessidade e solicitações dos clientes, em coordenação com os demais membros da equipe.',
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
