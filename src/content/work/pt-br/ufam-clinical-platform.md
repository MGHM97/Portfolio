---
title: Construindo do zero uma plataforma de pesquisa clínica
summary: A plataforma web em que médicos, enfermeiros, residentes e estudantes de medicina registram e acompanham mais de 200 pacientes de um projeto de pesquisa sobre doenças neurodegenerativas, e a fonte de dados do time de IA do projeto.
company: UFAM
role: Líder de Front-end
period: julho de 2025 — atual
stack: [React 19, TypeScript, Vite, React Hook Form, MUI X Charts, JWT]
outcomes:
  - Criada do zero; lidero o front-end e escrevi cerca de 90% dele
  - Mais de 200 pacientes acompanhados pela equipe clínica
  - 16 fichas clínicas com escores de risco em tempo real
  - 841 campos de pesquisa exportáveis para XLSX/CSV
order: 2
draft: false
---

## Contexto

Na Universidade Federal do Amazonas (UFAM), um projeto de pesquisa acompanha ao longo do tempo pacientes com doenças neurodegenerativas. Participam médicos, enfermeiros, residentes e estudantes de medicina, e um time de IA separado constrói modelos preditivos.

Comecei a plataforma web em que a equipe clínica trabalha desde o primeiro commit e lidero o seu front-end, tendo escrito cerca de 90% do código; colegas contribuíram com ajustes nos formulários e com o pipeline de CI. É um papel acadêmico em meio período, junto com o meu mestrado em engenharia elétrica com ênfase em IA.

Não há IA na interface. O time de IA lê o que a equipe clínica registra direto do banco de dados da plataforma, o que faz do front-end o lugar onde se decide a qualidade dos dados.

Além dos formulários, a plataforma cobre cadastro de pacientes, agendamento de visitas, relatórios de acompanhamento e de extração de dados, e uma área administrativa para usuários, perfis e os dispositivos usados no estudo. A interface está disponível em português e inglês.

## O problema

A equipe clínica precisava de um único lugar para cadastrar pacientes, aplicar avaliações e acompanhar cada paciente ao longo do tempo. Isso significava:

- 16 fichas clínicas, muitas com campos que dependem de respostas anteriores
- escores de risco exibidos enquanto a avaliação ainda está sendo preenchida
- uma visão da evolução de cada paciente, incluindo dados dos dispositivos usados no estudo
- exportações que os pesquisadores conseguem abrir nas próprias ferramentas
- acesso limitado por perfil, já que os registros são de pacientes reais

Um formulário confuso, ou que deixa passar respostas inconsistentes, não só incomoda quem preenche. Ele vai parar no dataset usado para treinar os modelos.

## O que eu fiz

### Formulários que guiam quem preenche

Construí o fluxo de captura de dados com React Hook Form: 16 fichas clínicas com campos condicionais e escores de risco calculados em tempo real, para que o resultado apareça enquanto o profissional digita.

Dezesseis formulários só continuam fáceis de manter se todos funcionarem do mesmo jeito. Cada um é dividido em duas partes: a página cuida do layout e da interação, e um módulo puro converte os dados da API em valores do formulário e vice-versa, aplica valores padrão e calcula os escores. Esses módulos têm testes unitários com Jest, então uma regra clínica pode ser verificada sem renderizar nenhuma tela.

### "Não respondido" também é dado

Num prontuário, "não" e "não avaliado" significam coisas diferentes, e confundir os dois corrompe o dataset. Campos que normalmente seriam checkboxes simples guardam um terceiro estado, "sem resposta", para que um campo não tocado chegue ao banco como ausente, e não como um falso negativo. Datas e números decimais passam por inputs localizados, então um valor digitado com vírgula é salvo igual a um digitado com ponto.

### Acompanhando os pacientes ao longo do tempo

Construí dashboards com MUI X Charts que mostram a evolução de cada paciente, incluindo dados dos dispositivos usados no estudo.

### Um canal de feedback que a equipe clínica de fato usa

Quem usa a plataforma são médicos e enfermeiros no meio de um estudo, não um time de produto. Dar feedback precisava ser tão fácil quanto avisar um colega sobre um problema.

Por isso, a plataforma tem a sua própria tela de pedidos de ajuste, a um clique no menu lateral. O profissional descreve o ajuste de que precisa, anexa uma imagem ou um PDF quando é algo visual e vê uma previsão de entrega. Todos os pedidos ficam nessa tabela, então a equipe clínica e os desenvolvedores compartilham uma única lista do que está pendente e de quando vai ser entregue. Até uma emergência de verdade, que chega antes por mensagem, acaba registrada ali.

A tela ainda é nova, e a equipe clínica já a usou para cerca de oito pedidos.

### Exportando dados com segurança

Os pesquisadores precisavam de tudo em planilhas, então entreguei uma exportação de 841 campos das 16 fichas para XLSX e CSV, além de laudos médicos em PDF. O acesso é protegido por autenticação JWT e permissões por perfil, e formulários sensíveis podem ser restringidos individualmente a partir de um registro central, que também alimenta a tela de gerenciamento de usuários.

## Resultado

- Uma plataforma criada do zero que a equipe clínica usa para acompanhar mais de 200 pacientes
- Retorno sobre o risco no momento do preenchimento
- Um canal direto para a equipe clínica pedir ajustes, com previsão de entrega visível
- Um dataset limpo e exportável, a base do trabalho do time de IA

## O que aprendi

Saúde nunca foi uma área em que eu imaginava trabalhar. No fim, as mesmas habilidades se aplicam: entender quem usa a tela, fazer do caminho certo o caminho mais fácil e manter os dados limpos. O desenvolvimento web pode trazer algo novo e útil para quase qualquer área, e isso é uma grande parte do motivo de eu gostar tanto deste projeto.
