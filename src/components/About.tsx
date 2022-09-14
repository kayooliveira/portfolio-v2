import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'

import {
  GraphQL,
  HTML,
  Javascript,
  Laravel,
  Linux,
  MYSQL,
  Node,
  Typescript,
  AWS,
  CSS,
  Php,
  ReactJS
} from './Icons'
import { JobCard } from './JobCard'
import { SkillCard } from './SkillCard'

export function About() {
  const skills = [
    {
      icon: HTML,
      title: 'HTML'
    },
    {
      icon: CSS,
      title: 'CSS'
    },
    {
      icon: Javascript,
      title: 'JavaScript'
    },
    {
      icon: Typescript,
      title: 'TypeScript'
    },
    {
      icon: ReactJS,
      title: 'ReactJS'
    },
    {
      icon: Node,
      title: 'Node.js'
    },
    {
      icon: GraphQL,
      title: 'GraphQL'
    },
    {
      icon: Php,
      title: 'PHP'
    },
    {
      icon: Laravel,
      title: 'Laravel'
    },
    {
      icon: MYSQL,
      title: 'MySQL'
    },
    {
      icon: AWS,
      title: 'AWS'
    },
    {
      icon: Linux,
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
      image: 'https://github.com/rangelimoveis.png',
      company: 'Rangel Imóveis',
      description:
        'Criação do sistema de gerenciamento de imobiliária e criação do website da empresa.',
      url: 'https://rangelimoveisrj.com.br'
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
      image: 'https://i.imgur.com/jTifFk1.png',
      company: 'Github Explorer',
      description:
        'Explorador de repositórios do Github, desenvolvido usando React.',
      url: 'https://github-explorer.kayooliveira.com'
    },
    {
      image: 'https://i.imgur.com/qtqsblI.png',
      company: 'FeedGet',
      description:
        'Componente para envio de feedbacks, desenvolvido usando React.',
      url: 'https://feedget.kayooliveira.com'
    },
    {
      image: 'https://i.imgur.com/xPu5ut8.png',
      company: 'Feed de Notícias',
      description:
        'Página de feed de notícias similar a uma rede social, desenvolvido usando React.',
      url: 'https://ignite.feed.kayooliveira.com'
    },
    {
      image: 'https://i.imgur.com/KoBCjb4.png',
      company: 'Ignite Lab',
      description:
        'Plataforma de hospedagem de videoulas, desenvolvido usando React integrando com Apollo Client e GraphCMS.',
      url: 'https://ignite.lab.kayooliveira.com'
    }
  ]
  return (
    <main className="w-full flex-1 rounded-lg bg-backgroundLight py-4 px-8">
      <h2 className="bg-gradient-to-r from-brand-100 to-highlight-100 bg-clip-text text-center text-lg font-bold text-transparent lg:text-2xl">
        Sobre mim
      </h2>
      <div className="my-2 h-0.5 w-full rounded-full bg-gradient-to-r from-brand-100 to-highlight-100 lg:my-4 lg:h-1"></div>
      <p className="text-sm leading-relaxed">
        Olá, me chamo <strong>Kayo Oliveira</strong>, tenho 20 anos e moro em{' '}
        <strong>Cachoeiras de Macacu - Rio de Janeiro</strong>. Sou{' '}
        <strong>Desenvolvedor Full Stack</strong> e trabalho atualmente com{' '}
        <strong>React e Node/PHP</strong>. Desde novo sempre fui apaixonado por
        tecnologia, comecei a estudar programação em 2015 porque um amigo meu
        era/ainda é programador e eu era apaixonado em ver aquelas telas pretas
        com um monte de nomes misturados que no fim formavam um site ou um
        programinha sensacional, desde então sempre procurei estudar mais e mais
        o ramo da programação, estudei por um ano e em meados de 2017 arrumei um
        emprego em uma loja na minha cidade, no qual me tomava bastante tempo,
        com isso abandonei a programação, retornei em 2020 e mais focado que
        nunca, nesse meio tempo me dediquei a aprender ReactJS, Typescript,
        Node, GraphQL e muitas outras ferramentas, atualmente presto serviços
        pra uma empresa chamada <strong>Life.Vet</strong> em
        <strong> Nova Friburgo - RJ</strong>, lá eu desempenho funções como
        manter o sistema interno da empresa, implementar novas funcionalidades,
        cuidar da infraestrutura (AWS) e desenvolver novas aplicações e
        microsserviços baseado nas necessidades da empresa.
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
        Trabalhos
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
