import { Chip, Link } from '@nextui-org/react'

const backend = 'success'
const frontend = 'warning'
const dba = 'danger'
const other = 'default'
const scrum = 'secondary'

export const experienciasProfissionais = [
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
            Atuo na{' '}
            <Link isExternal href="https://loopfull.com.br/" showAnchorIcon>
              Loop Full
            </Link>
            , onde presto serviços para a empresa e seus parceiros. Minhas
            responsabilidades englobam refatoração de código e desenvolvimento
            web, utilizando tecnologias como Next.js e WordPress. Destaco a
            criação de um painel personalizado criado para uma empresa parceira
            que permite a conversão de dados da API para Excel, com múltiplos
            filtros, facilitando a extração e análise de informações. Além
            disso, tenho um papel central na digitalização da empresa,
            desenvolvendo soluções para automatizar processos e aumentar a
            eficiência operacional.
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
    cargo: 'Desenvolvedor Autônomo',
    empresa: 'Pessoa júridica',
    ativo: true,
    periodo: 'Jan de 2022 - Presente',
    tabs: [
      {
        id: '1',
        label: 'Cargo',
        content: (
          <p>
            Durante minha trajetória profissional, tive a oportunidade de
            desempenhar papéis variados, adaptando-me às demandas específicas de
            cada projeto. Além disso, participei ativamente na comunidade{' '}
            <Link
              isExternal
              href="https://exame.com/future-of-money/o-que-e-web-3-0-tudo-o-que-voce-precisa-saber-sobre-a-nova-era-da-internet/"
              showAnchorIcon
            >
              WEB 3
            </Link>
            , fornecendo desenvolvimento e suporte, resolvendo desafios no
            ecossistema{' '}
            <Link isExternal href="https://solana.com/pt" showAnchorIcon>
              Solana
            </Link>
            . Utilizei tecnologias como React e Next.js para otimizar a presença
            online e melhorar a experiência do usuário. Outro aspecto da minha
            jornada incluiu consultoria técnica em desenvolvimento e manutenção
            de sistemas, onde pude oferecer suporte especializado e implementar
            inovações tecnológicas para impulsionar o progresso dos projetos.
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
              Mysql
            </Chip>
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
          'Responsável pela coleta de requisitos com os clientes e alinhamento de expectativas, desenvolvimentos das páginas web usando react.js e next.js, correções e resolução de bugs relatados pelos clientes, criação e melhorias dos scripts de destribuição, como airdrops e staking. Responsável também pela organização das hot tasks, demandas pequenas e rápidas que eu alinhava com cada desenvolvedor de acordo com a necessidade e pedido do cliente.',
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
