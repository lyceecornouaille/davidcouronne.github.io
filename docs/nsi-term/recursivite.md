---
title: Récursivité
description: fonctions récursives
sidebar_position: 1
---

## Programme officiel

:::tip Capacités attendues

- Écrire un programme récursif.
- Analyser le fonctionnement d'un programme récursif.

:::

## Principe récursif

Pour résoudre un problème, on se ramène à la résolution d'un problème similaire mais moins complexe, jusqu'à l'obtention d'un problème élémentaire.

Les différents problèmes intermédiaires sont stockés dans une pile que l'on dépilera

:::info Un peu d'histoire
Les premiers langages de programmation qui ont autorisé l'emploi de la récursivité sont LISP, développé à partir de 1958, et Algol 60 (à partir de 1960). Depuis, tous les langages de programmation généraux réalisent une implémentation de la récursivité.
:::

:::tip Définition
On qualifie de récursive toute fonction qui s'appelle elle-même.
:::

:::info Condition d'arrêt
Dans toute fonction récursive, il est nécessaire d'avoir une condition d'arrêt ; on parle aussi de condition de terminaison.
:::

:::info Exemple

```python
def puissance_rec(x: float, n: int) -> float:
    if n==0:
        return 1
    else:
        return x*puissance_rec(x,n-1)
```

- La condition d'arrêt est : $n=0$ .

- Cette condition correspond aussi au cas "simple" où $x^0=1$ : on connaît le résultat à faire renvoyer par la fonction : 1.

:::

:::tip Terminaison
Pour s'assurer de la terminaison d'un algorithme récursif, il suffit d'identifier une suite strictement décroissante d'entiers positifs ou nuls.

Identifier une suite strictement décroissante d'entiers positifs ou nuls permet de prouver qu'un algorithme récursif se termine en un nombre d'appels fini. Si cette suite commence à $n$, il y aura au maximum $n$ appels récursifs.
:::

Exemple:

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

## Liens

http://monlyceenumerique.fr/nsi_terminale/lp/lp2_recursivite.php
