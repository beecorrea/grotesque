---
layout: post.njk 
title: Sobre Site Reliability
date: 2022-12-27
tags: ['post']
---

## O site caiu? (a.k.a Ops)
Em Engenharia de Software, "ilities" são atributos e propriedades não-funcionais que um software pode ter. Elas descrevem o comportamento que um sistema deve ter perante o que ele deve fazer -- pense em um overlay sobre requisitos funcionais. Talvez _ility_ a mais conhecida delas seja a _quality_, o mesmo "quality" de "Quality Assurance" ou "QA", mas também temos outras como _security_, _observability_ e a infame _reliability_.

ilities são como capítulos no livro de **Operações de Software**, um nome um tanto vago para um trabalho um tanto vago. Ops é um dos lados da dicotomia **DevOps**, que por sua vez é um nome que diz muita coisa: existem Devs e existem Ops. Esse é talvez o conto de fadas mais antigo de TI, provavelmente algum diretor precisou se safar de alguma treta política e resolveu adotar o bordão "todos contribuímos para a entrega de valor ao cliente", o que é uma puta de uma mentira porque algumas pessoas são altamente dispensáveis do ponto de vista do negócio (capitalismo), mas enfim.

## O site caiu, socorro. (a.k.a DevOps)
Se um negócio fosse um carro de Fórmula 1, DevOps seria um pitstop móvel incluindo a equipe, acoplado ao carro para que ele não pare nunca de andar (gerar dinh- digo, valor). Claramente essa é uma ideia horrível, mas colou. O grande problema é que os desenvolvedores e os operadores não se dão bem, o que faz sentido já que um sempre faz o carro quebrar e o outro sempre conserta o carro quebrado.

DevOps tenta resolver isso forçando água e óleo a se misturarem, com uma pitada de _gaslighting_  pra eles entenderem que conseguem se misturar (spoiler: não conseguem). A ideia é basicamente pegar todo o trabalho de operações, espremer numa Bag of Holding (pois essa ideia só pode ter vindo direto do Pits of Inferno), dar pros desenvolvedores e falar "toma, vai ser feliz". Pra implementar essa ideia usa-se a antiga estratégia **duct tape**: enrola com uma fita adesiva (shellscript) dezenas de ferramentas não padronizadas e que muitas vezes não conversam entre si e torce pra dar bom.

Geralmente dá errado no mesmo ponto: colaboração. As pessoas que usam as ferramentas não sabem pra que precisam das ferramentas nem pra que elas servem nem como usá-las. Os gerentes dessas pessoas começam a se estressar pois as ferramentas além de gastarem dinheiro estão atrapalhando a geração de dinheiro, e assim retornamos à era onde desenvolvedores desenvolvem e operadores operam. A não ser que todo mundo esteja alinhado com a importância de Desenvolvimento e de Operações, isso acontece.

## O site caiu? (a.k.a SRE)
Mas mesmo quando tá todo mundo alinhado e você conseguiu implementar DevOps by-the-book, os problemas não param, por um motivo simples: os desenvolvedores não precisem se preocupar com operações, e quando você abstrai demais algo o conhecimento se perde. Mesmo com todas as ferramentas do mundo, todas elas só funcionam porque seu time de Operações tem um service desk, helpdesk ou qualquer outro nome chique desses. Porque, sendo franca, tudo isso acontece porque algumas pessoas sabem desenvolver e outras sabem operar, e poucas sabem ambos.

Agora existe uma preocupação com escalabilidade: como gerenciar de incidentes, como garantir controle de acesso, como tornar um sistema observável. Não dá pra abrir um ticket toda vez que um problema acontece no seu processo (na verdadé dá mas isso é assunto pra outro dia). Já que não dá pra ficar contratando Ops sempre que tiver muito ticket (cof cof), a solução é automatizar esses problemas.

**Site Reliability Engineering** é uma solução um pouco melhor que DevOps porque aqui as pessoas tentam construir as ferramentas ao invés de usar 5 rolos de fita adesiva, partindo do princípio extremamente realista de que o site vai cair, os desenvolvedores não vão saber consertar, operações não vai ter tempo de consertar, então as únicas soluções são resolver o problema automaticamente ou não ter o problema _at all_.

Ao invés de começar com ferramentas, SRE começa com alinhamento através de níveis de serviço. Incrívelmente pragmático, a definição desses níveis se resume em inverter os requisitos não-funcionais e tratá-los como requisitos funcionais: "eu prometo que meu sistema por padrão vai ter X% dessa _ility_ e você promete não fazer ele cair menos de X%, fechou?". Como isso vai ser implementado não importa, o que importa é as partes confiarem uma nas outras e cumprirem o acordo.

Fazendo tudo direitinho, qualquer problema que seu site tiver vai ser resolvido sem estresse (a confirmar) e rapidamente (também a confirmar), porque por padrão e design ele foi construído para ser ajustado sem estresse e rapidamente.

## Vai dar bom, confia.

Infelizmente, operar o seu software é só uma parte da obra, ele também precisa ser desenvolvido, e como Ops sabe muito bem, mudanças são o princípio do caos. Não adianta ter todas as _ilities_ do mundo, se o seu processo de desenvolvimento não é maduro produção vai quebrar. Mesmo que o Kubernetes suba outro pod no lugar do que morreu, esse novo pod também vai morrer. Não há APM ou Monitor que impeça um desenvolvedor imaturo de fazer uma mudança quebrada. 

Construir software é difícil, precisa de cuidado, responsabilidade, maturidade. Não à toa temos modelos de maturidade de software. Existe um limite para Ops, seja esse Ops SRE, QA, Security ou DevOps, não é o trabalho desses cargos desenvolver o produto nem limpar merda dos outros. Ou você faz XGH ou você senta a bunda e constrói um software de qualidade, os dois não dá. Não existe almoço grátis (ainda), e seus clientes com certeza não querem pagar por um produto que piora a vida deles.

Rust é uma excelente linguagem de sistemas, porque algum gênio transformou uma equipe de Ops em um compilador, e às vezes tudo que você precisa é de um Miyagi enchendo o saco garantindo que var dar bom. Mas muitas vezes, Ops não é o seu problema, ainda mais considerando a enorme quantidade de ferramentas que facilitam Ops.

"Mistakes were made" mas até que ponto errar é aceitável?