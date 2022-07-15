---
title: Créer des rapports PDF en utilisant R, R Markdown, LaTeX et knitr sur mac os
description: Ce tutoriel vous apprend à installer LaTeX, R et R Markdown sur macOS. Il vous guide également dans la création de votre premier fichier R Markdown et montre comment le compiler dans un fichier PDF à l'aide de knitr
tags: [mac, latex, markdown]
authors:
  name: David Couronné
  title: Professeur de Mathématiques et NSI
  url: https://github.com/davidcouronne
image: https://res.cloudinary.com/dpw19qolx/image/upload/t_cover-image/v1561523332/Matterhorn_sunset_2016__28Unsplash_29.jpg
---

## Introduction

Si vous utilisez R pour explorer statistiquement des ensembles de données et que vous devez rédiger des rapports détaillant vos résultats, vous pouvez bénéficier de l'utilisation de R Markdown. Un fichier R Markdown est essentiellement un fichier Markdown standard avec des morceaux de code R intégrés.

<!--truncate-->

Ce didacticiel vous apprend à installer tout ce dont vous avez besoin sur un Mac, ainsi qu'à créer des fichiers R Markdown et à les compiler en fichiers PDF.

Il ne vous apprend pas la syntaxe de R Markdown. Cependant, si vous êtes familier avec R et Markdown, cela ne devrait pas être un problème une fois que vous aurez vu un exemple de fichier R Markdown (que vous ferez dans le cadre de son tutoriel).

Si vous n'êtes pas familier avec R, je ne sais pas trop pourquoi vous lisez, mais bien sûr, vous êtes les bienvenus  !

Lors de la rédaction de ce didacticiel, j'ai utilisé une nouvelle installation 100% propre de macOS - aucun logiciel n'a été installé à l'avance et aucune modification n'a été apportée aux paramètres de l'ordinateur (à l'exception du changement de couleur du bureau). En d'autres termes, tout ce dont vous avez besoin est expliqué dans ce tutoriel.

J'ai exécuté ce didacticiel en tant qu'utilisateur par défaut créé lors de l'installation de macOS. Cet utilisateur est un administrateur. Si vous exécutez en tant qu'utilisateur standard, vous pouvez avoir différents degrés de réussite.

Ce guide suppose que vous n'avez ni R, RStudio ni MacTeX installé avant de commencer le didacticiel. Si vous avez déjà de l'expérience avec R mais que vous n'utilisez pas LaTeX, il est probable que vous ayez déjà R et RStudio installés mais que vous n'ayez pas MacTeX. Si tel est votre cas, ne vous inquiétez pas. Vous pouvez simplement ignorer les parties expliquant comment installer R et RStudio. J'ai testé que cela fonctionne exactement de la même manière en installant d'abord R et RStudio, puis en installant enfin MacTeX sur une installation propre de macOS.

## Télécharger et installer MacTex

Vous devriez commencer par installer MacTeX (prononcez mac-tech). MacTeX est une distribution dite LaTeX (prononcez lah-tech ou lay-tech). Il est nécessaire que knitr crée des rapports d'aspect professionnel (ou du moins académique). Si vous n'avez jamais entendu parler de LaTeX auparavant (ou si vous l'avez essayé mais que vous n'avez pas réussi à le faire fonctionner pour vous), ne vous inquiétez pas. Vous pouvez écrire votre rapport en utilisant RMarkdown, et knitr convertira automatiquement votre rapport en un fichier LaTeX qu'il utilisera pour créer un fichier PDF pour vous. Vous n'aurez jamais à regarder le fichier LaTeX lui-même.

Lien direct pour le téléchargement: https://www.tug.org/mactex/mactex-download.html

:::warning

Vous devez installer MacTex avec une option d'installation personnalisée.

:::

Lorsque vous accédez à la section "Type d'installation" dans la boîte de dialogue d'installation du package, cliquez sur "Personnaliser", puis assurez-vous que la case "Ghostscript Dynamic Library" est cochée. Par défaut, cette case n'est pas cochée, et je ne sais pas pourquoi..

![Selection personnaliser](https://res.cloudinary.com/dpw19qolx/image/upload/v1657869662/mactex_install1.png)

![Ghostscript Dynamic Library](https://res.cloudinary.com/dpw19qolx/image/upload/v1657869636/mactex_install2.png)

## Télécharger et installer R

Avant d'installer RStudio vous devez installer R.

- Aller sur le site https://cran.rstudio.com
- Cliquer sur le lien **Download R for (Mac) OS X**.
- Choisir le bon package, selon que vous avez un processeur Intel ou AMD (M1 par exemple). Pour ce tutoriel j'ai utilisé le "R 4.2.1 binary for macOS 10.13 (High Sierra) and higher, Intel 64-bit build, signed and notarized package."
- Après le téléchargement, procéder à l'installation. L'installation par défaut convient parfaitement.

## Télécharger et installer RStudio

- Aller sur le site: https://www.rstudio.com/products/rstudio/download/
- La partie supérieure de cette page contient un tableau de comparaison des caractéristiques du produit. Faites simplement défiler vers le bas de la page. À partir de là, vous pouvez télécharger divers programmes d'installation pour RStudio. Vous devez en choisir un pour macOS. Au moment d'écrire ces lignes, il s'appelle **RStudio Desktop 2022.07.0+548**, mais le numéro de version aura probablement changé lorsque vous lirez ceci.
- Le programme d'installation de RStudio est fourni dans un fichier .dmg, une image disque. Pour installer RStudio, double-cliquez sur le fichier .dmg pour le "monter". Cela devrait ouvrir une fenêtre affichant le contenu de l'image disque. Dans cette fenêtre, faites simplement glisser l'icône bleue de RStudio vers l'icône de raccourci Applications à côté. Cela copiera RStudio dans votre dossier Applications. Vous devez maintenant "démonter" l'image disque.

Vous êtes maintenant prêt à ouvrir RStudio ! Vous pouvez le trouver dans votre dossier Applications ou en utilisant Launchpad.

:::note
R et RStudio sont des programmes différents. Assurez-vous d'ouvrir RStudio et non R.
:::

Lors de la première exécution de RStudio, vous pouvez voir une fenêtre contextuelle vous invitant à installer les outils de développement en ligne de commande. Si cela se produit, vous pouvez simplement cliquer sur le bouton Installer.

Ensuite vous n'aurez plus qu'à attendre... longtemps !

:::caution

R peut vous donner des avertissements comme des lignes rouges. Ceci est facilement résolu en forçant R à utiliser le codage UTF-8. Vous pouvez le faire depuis le Terminal en exécutant cette commande :

```bash
defaults write org.R-project.R force.LANG en_US.UTF-8
```

Relancez RStudio et les avertissements devraient disparaître. Voir aussi ce thread: https://stackoverflow.com/questions/9689104/installing-r-on-mac-warning-messages-setting-lc-ctype-failed-using-c.

:::

## Préparer votre premier document R Markdown

Vous êtes maintenant presque prêt à créer votre premier document R Markdown. Avant de pouvoir réellement travailler avec R Markdown, vous devrez installer quelques packages, dont l'un est **knitr** lui-même. Heureusement, RStudio détectera automatiquement les packages nécessaires si vous créez simplement un nouveau fichier R Markdown. Tout ce dont vous avez besoin est de suivre les étapes ci-dessous.

- Cliquer sur **File**, puis **New File**, puis **R Markdown**
- RStudio détectera maintenant que certains packages manquent et vous demandera si vous souhaitez les installer maintenant. Cliquez sur **Yes**. RStudio va maintenant installer les packages requis.

## Installer les packages supplémentaires

Quelques packages ne sont pas installés automatiquement, par exemple:

- magick
- pdftools
