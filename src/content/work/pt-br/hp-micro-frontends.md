---
title: Micro-frontends em milhões de dispositivos, dentro de um host nativo
summary: Como eu construo e entrego micro-frontends React para o HP App, em que a interface web roda dentro de clientes nativos no Windows, macOS, iOS e Android.
company: HP Inc.
role: Engenheiro de Software Sênior
period: maio de 2025 — atual
stack: [React, TypeScript, SystemJS, Import maps, Feature flags, Jest, Playwright, GitHub Actions]
outcomes:
  - Mais de 12 micro-frontends em produção, em milhões de dispositivos ativos
  - ~30% mais rapidez na resolução de bugs entre times
  - ~90% de cobertura de testes garantida no CI
  - Migrações do React 16 para o 18 sem regressões em produção
order: 1
draft: false
---

## Contexto

O [HP App](https://www.hp.com/us-en/hp-app/overview.html) é onde as pessoas adicionam e gerenciam seus produtos HP: notebooks, desktops, monitores, mouses, teclados e a maioria dos outros dispositivos que a HP fabrica. Dá para registrar um dispositivo como dono ou simplesmente adicioná-lo, e depois gerenciar tudo em um só lugar. Ele roda no Windows, macOS, iOS e Android.

Boa parte da interface é feita de micro-frontends React que um cliente nativo carrega em tempo de execução. Uma única tela pode envolver código web, uma bridge entre JavaScript e código nativo e código de plataforma mantido por times separados de Android, iOS e Windows.

Entrei pela Wipro como Engenheiro de Software Sênior e já coloquei mais de doze desses micro-frontends em produção.

## O problema

Duas coisas tornavam o trabalho difícil.

**Os releases precisavam continuar independentes.** Micro-frontends só valem a pena se cada um puder ser publicado no seu próprio ritmo. Dentro de um host nativo, isso exige disciplina: é o host que decide o que carregar, e toda mudança passa por DEV, ITG e PROD.

**Os bugs atravessavam times.** Quando algo quebrava, a causa podia estar na interface, na bridge ou no código nativo, e cada camada pertencia a um time diferente. Sem visibilidade compartilhada do que de fato passava pela bridge, rastrear uma falha significava muita troca de mensagens entre times.

## O que eu fiz

### Entregas sobre SystemJS e import maps

A plataforma carrega os micro-frontends em tempo de execução com SystemJS e import maps, e os pipelines de deploy já existiam quando entrei. Meu trabalho é entregar micro-frontends por eles: cada um é construído, versionado e promovido de forma independente. Como o host resolve os módulos pelo import map, avançar ou voltar uma versão significa mudar para qual versão o mapa aponta, sem precisar reconstruir o host.

### Observabilidade que respeita a privacidade

Rastrear uma falha entre times era lento até eu adicionar logs na bridge. Agora qualquer time pode abrir o console e ver o que importa sobre cada chamada à API e ao código nativo: se os dados chegaram, se a chamada terminou ou onde ela falhou. Dados sensíveis ficam de fora por design. Junto com playbooks de troubleshooting, isso permitiu que cada time descobrisse rapidamente se o problema era seu, e a resolução de bugs entre times ficou cerca de 30% mais rápida.

### Depurando através da bridge

Algumas regressões só apareciam em uma plataforma. Eu as rastreei desde a interface em JavaScript, passando pelas bridge APIs, até as bibliotecas nativas em C#/.NET, o que exigiu ler código nativo para entender o comportamento de gerenciamento de dispositivos, e não só o lado web.

### Um caminho de atualização mais seguro

Executei as migrações do React 16 para o 18 e padronizei as ferramentas de teste com Jest, React Testing Library e Playwright, mantendo cerca de 90% de cobertura no GitHub Actions. As migrações chegaram à produção sem regressões.

## Resultado

- Mais de 12 micro-frontends em produção em quatro plataformas
- ~30% mais rapidez na resolução de bugs entre times
- Uma base de ~90% de cobertura de testes que todo trabalho novo precisa manter

## O que aprendi

Micro-frontends e feature flags eram novidade para mim quando entrei. Trabalhar com eles mudou a forma como penso entregas: partes pequenas e independentes, cada uma publicada no seu tempo e ativada quando estiver pronta, em vez de um grande release que todo mundo precisa coordenar. Hoje é o meu jeito preferido de trabalhar.
