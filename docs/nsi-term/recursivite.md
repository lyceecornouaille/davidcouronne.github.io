---
title: Récursivité
description: fonctions récursives
sidebar_position: 1
---

:::info Capacités attendues
- Écrire un programme récursif.
- Analyser le fonctionnement d'un programme récursif.
:::


## Principe récursif

Pour résoudre un problème, on se ramène à la résolution d'un problème similaire mais moins complexe, jusqu'à l'obtention d'un problème élémentaire.

Les différents problèmes intermédiaires sont stockés dans une pile que l'on dépilera

## Démontrons que 2+2=4

Dans l'ensemble des entiers naturels 0, 1, 2, 3, ... on peut définir le successeur d'un nombre de la façon suivante:

2' = 3 (qui se lit 2 "prime" = 3). Le successeur de 2 est 3.

De la même façon, 5' = 6 , etc...

La définition de l'addition est alors:

:::info Définition de l'addition dans l'ensemble des entiers naturels
Soit $n$ un entier naturel:

- $n+0=n$
- pour tout $m$ entier naturel, $n+m'=(n+m)'$
:::

Du coup pour monter que $2+2=4$:

$2+2 = 2+1' = (2+1)' = (2+0')' = ((2+0)')' = ((2)')'=3'=4$

....