---
layout: post.njk 
title: Computadores são burros
description: "Ou, como diz aquele velho meme: '[loads shotgun] computer's haunted'"
date: 2022-12-22
tags: ['post']
---

De início eu gostaria de ressaltar que sou traumatizada de diversas formas pela faculdade e provavelmente nunca vou me recuperar dessa experiência e odeio qualquer tipo de avaliação redutiva.

Uma discussão recorrente em TI é "prova no papel VS prova no computador", e essa discussão envolve temas que não vou abordar aqui, como metodologias de ensino e a função da educação.

Primeiro, qual o motivo de fazer uma prova de programação? O que você está tentando validar, provar, testar? Por que não usar um online judge pra aplicar a prova? Certamente, se a pessoa sabe programar, e tem o conhecimento necessário para responder as perguntas da prova, ela deveria acertar todas as questões.

Só lendo essa última afirmação já dá pra perceber o absurdo dela. Então por que continuamos aplicando provas de programação no papel?

Leslie Lamport escreveu alguns artigos muito interessantes sobre a forma como construímos software e programamos sistemas distribuídos, e como a educação dos programadores influencia nisso. Especificamente, concorrência é uma ciência extremamente difícil de estudar (e portanto, controlar). Inclusive, parafraseando uma professora da faculdade, o mundo é paralelo, algo que começa a fazer sentido quando você percebe que a palavra "mundo" na frase não se refere aos múltiplos "sistemas computacionais" existentes nesse momento, mas de fato o mundo, o universo. 

## E computadores são burros, infelizmente. 

O que não ajuda a domar concorrência. Na minha opinião, nem sei se ela deveria ser domada, mas os bilionários precisam ganhar dinheiro.

Então quando você está escrevendo o seu programa (note o uso da palavra "escrever"), você deveria ser o mais explícito possível e garantir que quando o seu programa for executado (note o uso da palavra "executado"), ele está de acordo com as regras estabelecidas para dizer ou não se ele está correto.

Por isso inclusive (e jamais coincidentemente), QAE (vulgo QA Engineer) não é a pessoa que escreve testes, e SRE (vulgo SR Engineer) não é a pessoa que conserta servidores: construir software vai muito além de código, Sommerville capítulo 10, vai lá e lê o início. Na minha opinião se você está codando alguém está fazendo algo de errado, e se você começar a cavar demais esse buraco você vira comunista.

## Mas eu to divagando.

Nós costumamos acoplar a escrita de um programa com a execução (a computação) de um programa, e dizemos que código que não é executado é inútil, e aí nasce o Uncle Bob e as pessoas começam a ler Uncle Bob e param de escrever comentários porque Uncle Bob fala que é sujeira. Clean Code é o "prova no papel" de TI levado ao extremo. Porque assim como código limpo, a prova no papel requer que você saiba exatamente o que o código está fazendo.

Na prática, é impossível saber o que o código está fazendo, porque depende do modelo computacional que você quer implementar (leia-se de como você quer construir o seu computador), da arquitetura do seu computador, e de um milhão de coisas físicas, materiais, concretas.

No início do Cormem, acho que no capítulo 2 ou 3, quando ele fala de análise de algoritmos, fica evidente que o modelo de memória computacional prejudica o estudo dos algoritmos. Escrever código pra rodar em uma GPU, algo comum pra quem é de IA/Data Science, é muito diferente de escrever código pra rodar em uma CPU, algo comum pra quem é de WebDev. Windows é muito diferente de Linux, e tá tudo bem sabe.

Assim, é importante saber escrever programas sem computador, porque nunca se sabe que tipo de computador você vai encontrar. Isso ficou críticamente evidente quando a Apple lançou o processador M1, e vários programas (alô Docker Desktop) não executavam no M1.

Não estou falando nem de escrever no papel, ou no computador (já se peguntou como cegos programam?). É importante conseguir elaborar um algoritmo sem precisar do computador, porque esse é o primeiro passo pra escrever um algoritmo capaz de ser computado (executado) em um computador. A palavra "computado" não tá aqui por acidente, o Problema da Parada é um problema real, e pode custar muito caro se o seu algoritmo não respeitá-lo. Se você não consegue escrever um algoritmo correto sem o computador, você não consegue escrever um programa correto com o computador. Você pode até copiar do StackOverflow, trocar uma linha ou outra, mas você não escreveu (e novamente tá tudo bem).

Se você não tem interesse em escrever um algortimo, realmente não faz sentido codar no papel. Até mesmo nas provas que, tal qual entrevistas técnicas, são "caixas de areia" no vácuo, não faz muito sentido codar no papel. Se você só quer ver se seu código executa e termina do jeito que você quer, vai direto pro computador, pesquisa no Google as palavras do alfabeto da sua linguagem e seja feliz. Sinceramente, seja feliz, trabalhar já é um saco, trabalhar com computadores é um saco elevado a dois.

A abstração de programar sem um computador te obriga a ter uma metodologia analítica sobre o seu algoritmo, que é muito diferente do que encontramos na realidade, visto que não tem um computador disponível. A concretude de programar com um computador te obriga a ter uma metodologia prática sobre o seu algoritmo: ele pode até estar correto, mas pode mesmo assim não ter o resultado esperado. Prova disso é a (in)compatibilidade de partes de HTML/CSS/JS entre os diferentes browsers, ou escrever um programa em NodeJS sem ter NodeJS instalado no seu computador (ou no seu servidor).

E quais os benefícios (ao meu ver) de aprender a programar sem um computador? A disponibilidade de ferramentas analíticas e raciocinar de forma abstrata sobre o seu algoritmo. Corretude. Complexidade. Comportamento. Invariantes.

Com um computador: praticidade, iteração, agilidade, produtivismo. Realidade.

Conforto é discutível. Embora alguns digam o contrário, matemática também é, mas talvez menos. Uma vez me falaram que banco relacional é bom porque usa ACID. 