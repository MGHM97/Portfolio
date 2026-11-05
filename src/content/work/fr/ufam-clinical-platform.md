---
title: Construire de zéro une plateforme de recherche clinique
summary: La plateforme web où médecins, infirmiers, internes et étudiants en médecine enregistrent et suivent plus de 200 patients d’un projet de recherche sur les maladies neurodégénératives, et la source de données de l’équipe IA du projet.
company: UFAM
role: Lead Front-end
period: juillet 2025 — aujourd’hui
stack: [React 19, TypeScript, Vite, React Hook Form, MUI X Charts, JWT]
outcomes:
  - Créée de zéro ; je dirige le front-end et en ai écrit environ 90 %
  - Plus de 200 patients suivis par l’équipe clinique
  - 16 formulaires de cas avec des scores de risque en temps réel
  - 841 champs de recherche exportables en XLSX/CSV
order: 2
draft: false
---

## Contexte

À l’Université fédérale d’Amazonas (UFAM), un projet de recherche suit dans le temps des patients atteints de maladies neurodégénératives. Des médecins, des infirmiers, des internes et des étudiants en médecine y participent, et une équipe IA distincte construit des modèles prédictifs.

J’ai lancé la plateforme web sur laquelle travaille l’équipe clinique dès le premier commit et j’en dirige le front-end, dont j’ai écrit environ 90 % du code ; des collègues ont contribué à des ajustements de formulaires et au pipeline de CI. C’est un rôle académique à temps partiel, en parallèle de mon master en génie électrique orienté IA.

L’interface elle-même ne contient pas d’IA. L’équipe IA lit directement dans la base de données de la plateforme ce que saisit l’équipe clinique : c’est donc dans le front-end que se joue la qualité des données.

En plus des formulaires, la plateforme couvre l’enregistrement des patients, la planification des visites, les rapports de suivi et d’extraction de données, ainsi qu’un espace d’administration pour les utilisateurs, les profils et les appareils utilisés dans l’étude. L’interface est disponible en portugais et en anglais.

## Le problème

L’équipe clinique avait besoin d’un seul endroit pour enregistrer les patients, mener les évaluations et suivre chaque patient dans le temps. Cela impliquait :

- 16 formulaires de cas, dont beaucoup ont des champs qui dépendent des réponses précédentes
- des scores de risque affichés pendant que l’évaluation est encore en cours de saisie
- une vue de l’évolution de chaque patient, y compris les données des appareils utilisés dans l’étude
- des exports que les chercheurs peuvent ouvrir dans leurs propres outils
- un accès limité selon le profil, puisque les dossiers concernent de vrais patients

Un formulaire confus, ou qui laisse passer des réponses incohérentes, ne gêne pas seulement la personne qui le remplit. Il finit dans le jeu de données sur lequel les modèles sont entraînés.

## Ce que j’ai fait

### Des formulaires qui guident la saisie

J’ai développé le flux de saisie avec React Hook Form : 16 formulaires de cas avec des champs conditionnels et des scores de risque calculés en temps réel, pour que le résultat apparaisse pendant la saisie.

Seize formulaires ne restent maintenables que s’ils fonctionnent tous de la même façon. Chacun est séparé en deux : la page gère la mise en page et l’interaction, et un module pur convertit les données de l’API en valeurs de formulaire et inversement, applique les valeurs par défaut et calcule les scores. Ces modules sont couverts par des tests unitaires Jest, si bien qu’une règle clinique peut être vérifiée sans afficher le moindre écran.

### « Non renseigné » est aussi une donnée

Dans un dossier clinique, « non » et « non évalué » ne veulent pas dire la même chose, et les confondre corrompt le jeu de données. Les champs qui seraient normalement de simples cases à cocher conservent un troisième état, « pas de réponse », pour qu’un champ laissé intact arrive en base comme absent et non comme un faux négatif. Les dates et les décimaux passent par des champs localisés, si bien qu’une valeur saisie avec une virgule est enregistrée comme une valeur saisie avec un point.

### Suivre les patients dans le temps

J’ai développé avec MUI X Charts des tableaux de bord qui montrent l’évolution de chaque patient, y compris les données des appareils utilisés dans l’étude.

### Une boucle de retours que l’équipe clinique utilise vraiment

Les utilisateurs de la plateforme sont des médecins et des infirmiers en pleine étude, pas une équipe produit. Faire un retour devait être aussi simple que signaler un problème à un collègue.

La plateforme a donc son propre écran de demandes d’ajustement, à un clic dans le menu latéral. Un soignant décrit l’ajustement dont il a besoin, joint une capture d’écran ou un PDF si c’est visuel, et voit une date de livraison estimée. Toutes les demandes figurent dans ce tableau : l’équipe clinique et les développeurs partagent ainsi une seule liste de ce qui est en attente et de la date de livraison. Même une vraie urgence, qui nous parvient d’abord par message, y est enregistrée.

L’écran est encore récent, et l’équipe clinique l’a déjà utilisé pour environ huit demandes.

### Exporter les données en toute sécurité

Les chercheurs avaient besoin de tout dans des tableurs : j’ai donc livré un export de 841 champs issus des 16 formulaires en XLSX et CSV, ainsi que des rapports médicaux en PDF. L’accès est protégé par une authentification JWT et des permissions par profil, et les formulaires sensibles peuvent être restreints un par un depuis un registre central qui alimente aussi l’écran de gestion des utilisateurs.

## Résultat

- Une plateforme créée de zéro que l’équipe clinique utilise pour suivre plus de 200 patients
- Un retour sur le risque au moment de la saisie
- Un canal direct pour que l’équipe clinique demande des ajustements, avec une date de livraison visible
- Un jeu de données propre et exportable sur lequel s’appuie l’équipe IA

## Ce que j’ai appris

La santé n’a jamais été un domaine dans lequel je m’attendais à travailler. Au final, les mêmes compétences s’appliquent : comprendre qui utilise l’écran, faire en sorte que la bonne action soit la plus simple, et garder des données propres. Le développement web peut apporter quelque chose de nouveau et d’utile à presque n’importe quel domaine, et c’est en grande partie pour cela que j’aime autant ce projet.
