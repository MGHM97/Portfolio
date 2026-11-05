---
title: Des micro-frontends sur des millions d’appareils, dans un hôte natif
summary: Comment je conçois et livre des micro-frontends React pour la HP App, dont l’interface web s’exécute dans des clients natifs sous Windows, macOS, iOS et Android.
company: HP Inc.
role: Ingénieur logiciel senior
period: mai 2025 — aujourd’hui
stack: [React, TypeScript, SystemJS, Import maps, Feature flags, Jest, Playwright, GitHub Actions]
outcomes:
  - Plus de 12 micro-frontends en production, sur des millions d’appareils actifs
  - Environ 30 % de rapidité en plus pour résoudre les bugs entre équipes
  - Environ 90 % de couverture de tests garantie dans la CI
  - Migrations de React 16 à 18 sans régression en production
order: 1
draft: false
---

## Contexte

La [HP App](https://www.hp.com/us-en/hp-app/overview.html) est l’endroit où l’on ajoute et gère ses produits HP : ordinateurs portables et de bureau, écrans, souris, claviers et la plupart des autres appareils que fabrique HP. On peut enregistrer un appareil en tant que propriétaire ou simplement l’ajouter, puis tout gérer au même endroit. Elle fonctionne sous Windows, macOS, iOS et Android.

Une grande partie de son interface est faite de micro-frontends React qu’un client natif charge à l’exécution. Un seul écran peut donc faire intervenir du code web, un pont entre JavaScript et le code natif, et du code de plateforme maintenu par des équipes Android, iOS et Windows distinctes.

Je suis arrivé via Wipro en tant qu’ingénieur logiciel senior et j’ai mis en production plus de douze de ces micro-frontends.

## Le problème

Deux choses rendaient le travail difficile.

**Les releases devaient rester indépendantes.** Les micro-frontends ne valent la peine que si chacun peut être livré à son propre rythme. Dans un hôte natif, cela demande de la rigueur : c’est l’hôte qui décide quoi charger, et chaque changement passe par DEV, ITG et PROD.

**Les bugs traversaient les équipes.** Quand quelque chose cassait, la cause pouvait se trouver dans l’interface, dans le pont ou dans le code natif, et chaque couche appartenait à une équipe différente. Sans visibilité partagée sur ce qui passait réellement par le pont, remonter à l’origine d’un incident demandait beaucoup d’allers-retours entre équipes.

## Ce que j’ai fait

### Livrer sur SystemJS et les import maps

La plateforme charge les micro-frontends à l’exécution avec SystemJS et les import maps, et les pipelines de déploiement existaient déjà à mon arrivée. Mon travail consiste à livrer des micro-frontends à travers eux : chacun est construit, versionné et promu séparément. Comme l’hôte résout les modules via l’import map, avancer ou revenir à une version précédente revient à changer la version vers laquelle pointe la map, sans reconstruire l’hôte.

### Une observabilité respectueuse de la vie privée

Remonter un incident entre équipes était lent jusqu’à ce que j’ajoute des logs au niveau du pont. Désormais, n’importe quelle équipe peut ouvrir la console et voir l’essentiel de chaque appel API et natif : si les données sont arrivées, si l’appel s’est terminé ou à quel endroit il a échoué. Les données sensibles sont exclues par conception. Avec des guides de diagnostic, chaque équipe a pu savoir rapidement si le problème la concernait, et la résolution des bugs entre équipes est devenue environ 30 % plus rapide.

### Déboguer à travers le pont

Certaines régressions n’apparaissaient que sur une seule plateforme. Je les ai suivies depuis l’interface JavaScript, en passant par les bridge APIs, jusqu’aux bibliothèques natives en C#/.NET, ce qui m’a amené à lire du code natif pour comprendre la gestion des appareils, et pas seulement la partie web.

### Des mises à jour plus sûres

J’ai réalisé les migrations de React 16 à 18 et standardisé les outils de test autour de Jest, React Testing Library et Playwright, en maintenant une couverture d’environ 90 % dans GitHub Actions. Les migrations sont arrivées en production sans régression.

## Résultat

- Plus de 12 micro-frontends en production sur quatre plateformes
- Environ 30 % de rapidité en plus pour résoudre les bugs entre équipes
- Un socle d’environ 90 % de couverture de tests que tout nouveau travail doit respecter

## Ce que j’ai appris

Les micro-frontends et les feature flags étaient nouveaux pour moi à mon arrivée. Travailler avec eux a changé ma façon de voir les livraisons : de petites pièces indépendantes, chacune livrée à son rythme et activée quand elle est prête, plutôt qu’une grosse release que tout le monde doit coordonner. C’est aujourd’hui ma façon préférée de travailler.
