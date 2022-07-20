---
title: Introduction à l'algorithmique
description: Introduction à l'algorithmique en  première NSI
sidebar_position: 1
---

## Introduction à l'algorithmique

En général, on écrit un programme informatique pour résoudre un problème.

Par exemple:

- comment déterminer le plus court chemin pour aller d'une ville à une autre
- rechercher l'adresse d'une personne dans un annuaire
- etc..

Pour ces problèmes, il existe souvent plusieurs solutions.

La science algorithmique permet des tester et de classer ces solutions.

## Notion d'algorithme

:::tip Définition

Un **algorithme** est une suite finie d'opérations élémentaires obéissant à un enchainement déterminé et produisant un résultat souhaité.

Les opérations élémentaires dont il est question sont des opérations réalisables par un processeur, par exemple l'ajout, la suppression, la comparaison, etc...

En général, un algorithme travaille sur les données d'entrée et donne des données de sortie.

:::

## Propriétés et caractéristiques d'un algortihme

### Propriétés d'un algorithme

Un bon algorithme doit posséder deux propriétés essentielles:

- Il doit se **terminer**: il ne doit pas "tourner en rond" ou continuer indéfiniment et il doit fournir le résultat en un nombre **fini** d'opérations.
- Il doit être **correct**: il doit produire le résultat attendu dans toutes les situations.

### Caractéristiques d'un algorithme

Un algorithme possède deux caractéristiques:

- Son **coût en temps**: le nombre d'opérations nécessaires à son exécution, ou la durée de son exécution.
- Son **coût en espace**: la quantité d'espace mémoire nécessaire à son exécution.

## Notion de complexité

:::info

Dans le programme de spécialité NSI, on s'intéresse uniquement au **coût en temps** d'un algorithme.

:::

:::note Donald Knuth

Le calcul de la **complexité algorithmique** (ou coût algorithmique) est introduit en **1962** par **Donald Knuth**, informaticien et mathématicien américain.

C'est un indicateur de performance pertinent pour les algorithmes car il est indépendant de la machine utilisée (microprocesseur, mémoire, ...)

:::

### Notation grand O

Lors de l'étude d'un algorithme, on peut s'intéresser au cas simple, et au cas le plus défavorable, appelé le **pire des cas**.

Dans le pire des cas, le coût ou complexité de l'algorithme sera alors le plus élevé possible pour un même algorithme.

Le temps de calcul sera alors maximal.

La notation $O$ consiste à majorer, par une fonction de référence, le nombre d'opérations nécessaires à son déroulement, pour $n$ suffisamment grand.

### Quelques types de complexités

- Complexité constante: $O(1)$. Le coût ne dépend pas de la taille des données.

- Complexité linéaire: $O(n)$. Le coût est proportionnel à la taille des données.

- Complexité quadratique: $O(n^2)$. Le coût est proportionnel à $n^2$.

- Complexité logarithmique: $O(log(n))$.

- Complexité exponentielle: $O(e^n)$.
