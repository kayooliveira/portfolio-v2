import HorizontalScroll from 'react-scroll-horizontal'

import { JobCard } from './JobCard'
import { SkillCard } from './SkillCard'
import {
  AmazonwebservicesOriginalWordmark,
  Css3Original,
  GraphqlPlain,
  Html5Original,
  JavascriptOriginal,
  LaravelOriginalWordmark,
  LinuxOriginal,
  MysqlOriginal,
  NodejsOriginal,
  PhpOriginal,
  ReactOriginalWordmark,
  TypescriptOriginal
} from 'devicons-react'

export function About() {
  const skills = [
    {
      icon: Html5Original,
      title: 'HTML'
    },
    {
      icon: Css3Original,
      title: 'CSS'
    },
    {
      icon: JavascriptOriginal,
      title: 'JavaScript'
    },
    {
      icon: TypescriptOriginal,
      title: 'TypeScript'
    },
    {
      icon: ReactOriginalWordmark,
      title: 'ReactJS'
    },
    {
      icon: NodejsOriginal,
      title: 'Node.js'
    },
    {
      icon: GraphqlPlain,
      title: 'GraphQL'
    },
    {
      icon: PhpOriginal,
      title: 'PHP'
    },
    {
      icon: LaravelOriginalWordmark,
      title: 'Laravel'
    },
    {
      icon: MysqlOriginal,
      title: 'MySQL'
    },
    {
      icon: AmazonwebservicesOriginalWordmark,
      title: 'AWS'
    },
    {
      icon: LinuxOriginal,
      title: 'Linux'
    }
  ]
  const jobs = [
    {
      image: 'https://github.com/lifevet.png',
      company: 'Life.Vet',
      description:
        'Manutenção do sistema interno da empresa e criação da nova aplicação para acesso dos clientes.',
      url: 'https://labs.life.vet.br'
    },

    {
      image: 'https://i.imgur.com/H6swOr4.png',
      company: 'Life.Vet - Client',
      description: 'Sistema para os clientes da Life.Vet.',
      url: 'https://cliente.life.vet.br'
    },
    {
      image: 'https://i.imgur.com/S9APeql.png',
      company: 'Escola Akanbi',
      description:
        'Plataforma de venda de assinatura e cursos da escola Akanbi.',
      url: 'https://escolaakanbi.com.br'
    },
    {
      image: 'https://i.imgur.com/ny3WFpr.png',
      company: 'Hitalo Rodrigues',
      description: 'Plataforma por assinatura para personal trainer.',
      url: 'https://hitalorodrigues.com.br'
    },
    {
      image: 'https://i.imgur.com/OlkuQmy.png',
      company: 'JR Gráfica',
      description: 'Sistema para gerenciamento de gráfica e loja virtual.',
      url: 'https://graficajr.com.br'
    },
    {
      image: 'https://github.com/rangelimoveis.png',
      company: 'Rangel Imóveis',
      description:
        'Criação do sistema de gerenciamento de imobiliária e criação do website da empresa.',
      url: 'https://rangelimoveisrj.com.br'
    },
    {
      image: 'https://i.imgur.com/tjzqiQ7.png',
      company: 'Plinko Game',
      description:
        'Uma versão do jogo Plinko, desenvolvido usando React + Zustand e Firebase.',
      url: 'https://plinko.kayooliveira.com'
    },
    {
      image: 'https://i.imgur.com/4RFbqQI.png',
      company: 'KO Finances',
      description:
        'Sistema de controle financeiro pessoal, desenvolvido usando React integrando com Firebase.',
      url: 'https://kofinances.kayooliveira.com'
    },
    {
      image: 'https://i.imgur.com/vFX7bAe.png',
      company: 'Todo',
      description:
        'Lista de tarefas para o dia a dia, desenvolvida usando React e Framer-Motion.',
      url: 'https://ignite.todo.kayooliveira.com'
    },
    {
      image: 'https://i.imgur.com/qtqsblI.png',
      company: 'FeedGet',
      description:
        'Componente para envio de feedbacks, desenvolvido usando React.',
      url: 'https://feedget.kayooliveira.com'
    },
    {
      image: 'https://i.imgur.com/KoBCjb4.png',
      company: 'Plataforma de Videoaulas',
      description:
        'Plataforma de hospedagem de videoulas, desenvolvido usando React integrando com Apollo Client e GraphCMS.',
      url: 'https://ignite.lab.kayooliveira.com'
    }
  ]
  const age = new Date().getFullYear() - 2002

  return (
    <main className="w-full flex-1 rounded-lg bg-backgroundLight py-4 px-8">
      <h2 className="bg-gradient-to-r from-brand-100 to-highlight-100 bg-clip-text text-center text-lg font-bold text-transparent lg:text-2xl">
        Sobre mim
      </h2>
      <div className="my-2 h-0.5 w-full rounded-full bg-gradient-to-r from-brand-100 to-highlight-100 lg:my-4 lg:h-1"></div>
      <p className="text-sm leading-relaxed">
        Olá, sou Kayo Oliveira, um Desenvolvedor Full Stack de Nova Friburgo,
        Rio de Janeiro. Com {age} anos, tenho vasta experiência em React, Node e
        PHP, e atualmente trabalho na Life.Vet.
        <br /> Desde 2015, minha paixão por tecnologia e programação me levou a
        explorar e dominar diversas ferramentas e tecnologias, incluindo
        ReactJS, TypeScript, Node, GraphQL, entre outras.
      </p>
      <h2 className="mt-6 bg-gradient-to-r from-brand-100 to-highlight-100 bg-clip-text text-center text-lg font-bold leading-relaxed text-transparent lg:text-2xl">
        Conhecimentos
      </h2>
      <div className="my-2 h-0.5 w-full rounded-full bg-gradient-to-r from-brand-100 to-highlight-100 lg:my-4 lg:h-1"></div>
      <HorizontalScroll
        pageLock
        reverseScroll
        style={{
          width: '100%',
          height: '100px'
        }}
        className="flex-1"
      >
        {skills.map(skill => (
          <SkillCard key={skill.title} Icon={skill.icon} title={skill.title} />
        ))}
      </HorizontalScroll>

      <h2 className="mt-6 bg-gradient-to-r from-brand-100 to-highlight-100 bg-clip-text text-center text-lg font-bold leading-relaxed text-transparent lg:text-2xl">
        Projetos Recentes
      </h2>
      <div className="my-2 h-0.5 w-full rounded-full bg-gradient-to-r from-brand-100 to-highlight-100 lg:my-4 lg:h-1"></div>
      <HorizontalScroll
        pageLock
        reverseScroll
        style={{
          width: '100%',
          height: '300px'
        }}
        className="flex-1"
      >
        {jobs.map(job => (
          <JobCard
            key={job.url}
            url={job.url}
            image={job.image}
            company={job.company}
            description={job.description}
          />
        ))}
      </HorizontalScroll>
    </main>
  )
}
