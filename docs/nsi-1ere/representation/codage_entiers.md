---
title: Le codage des nombres entiers
description: Le codage des nombres entiers
sidebar_position: 2
---

:::info
dans toute la suite, sauf mention contraire, les nombres seront codés sur 1 octet (8 bits).
:::

## 1. Les nombres entiers en binaire non signé

L'expression "non signé" signifie que la contrainte du signe n'existe pas : tous les nombres sont considérés comme étant positifs.

Nous avons déjà vu comment ces nombres se codaient en binaire.

Sur un octet, le nombre minimal qu'on puisse coder est `00000000`. C'est l'entier naturel 0.  
Le nombre maximal qu'on puisse coder est `11111111`. C'est l'entier naturel 255.

**Exercice :**

1. Quel est le plus grand entier non signé codable sur 16 bits ?
2. ... sur 32 bits ?
3. ... $n$ bits ?

<details>
  <summary>Correction</summary>

1. $N=1+2+2^2+2^3+\dots+2^{15}= 65535$
2. $N=1+2+2^2+2^3+\dots+2^{31}= 4294967295$
3. Pour tout $n \in \mathbb{N}$, $1+2+2^2+2^3+\dots+2^{n}=2^{n+1}-1$ (formule de la somme des termes d'une suite géométrique de raison 2).

</details>

**Exercice sur l'addition binaire :**

1. Effectuer la somme des deux nombres binaires `00001101` et `00001011`.
2. Vérifier que le résultat est cohérent en base 10.

<details>
  <summary>Correction</summary>

1. ![](data/add1.png)
2. Cette addition correspond à $13+11=24$

</details>

:::tip A retenir

- Sur $n$ bits, on peut stocker $2^n$ entiers positifs.

- Le plus grand entier positif que l'on peut représenter est $2^{n}-1$.

- Pour évaluer le nombres de bits minimum nécessaires pour l'écriture binaire d'un entier positifn il faut trouver la plus petite puissance de 2 qui soit strictement supérieure à l'entier à écrire.

:::

## 2. Les nombres entiers en binaire signé

Comment différencier les nombres positifs des nombres négatifs ?  
L'idée naturelle est de réserver 1 bit pour le signe.

Par exemple, on peut décréter que le premier bit (appelé **bit de poids fort**) sera le bit de signe :

- 0 pour un nombre positif
- 1 pour un nombre négatif

Dans ce cas, `00000011` serait le nombre $+3$ et `10000011` serait le nombre $-3$.

:::warning Problème

- le zéro serait représenté à la fois par `00000000` et `10000000`, ce qui n'est pas très économe.
- plus grave : l'addition $(+3)+(-3)$ serait égale à $-6$ !
  ![](data/add2.png)

:::

**Recherche de l'opposé d'un nombre :**  
Que faut-il ajouter au nombre $(+3)$ pour obtenir 0 ?
![](data/add3.png)

_Indice :_ en inversant chaque bit (on dit qu'on prend le _complément à 2_ du bit), on obtient en additionnant l'octet maximal `11111111` :
![](data/add4.png)
Que se passe-t-il alors si on rajoute encore `1` à ce nombre maximal ?
La retenue (en anglais _carry_) sera perdue car elle débordera de l'octet : seuls 8 bits sont prévus pour écrire le nombre, le 9ème bit est donc perdu.

Pour trouver l'opposé de `00000011`, il suffit donc de rajouter `1` au nombre construit par complément à 2 :
![](data/add5.png)

Le nombre $-3$ s'écrit donc `11111101`.

_remarque :_ ce nombre `11111101` représente 253 en codage non signé. Il est donc nécessaire, lorsqu'on représente un nombre, de savoir si les nombres manipulés seront des entiers naturels (_non signés_) ou bien relatifs (_signés_).

### Méthode du complément à 2

:::tip A retenir

- Les nombres positifs sont représentés comme vu au premier chapitre mais le bit le plus fort vaut forcément zéro.

- Les nombres négatifs sont obtenus en deux étapes:
  - On inverse les bits de l'écriture binaire de sa valeur absolue. (Complément à 1)
  - On ajoute 1 au nombre obtenu. C'est le complément à 2.

:::

**Exemple**

Représenton le nombre $-38$ sur 8 bits.

Le nombre $38_{10}$ en binaire est $100110$ et donc sur 8 bits: $0010010$

Son complément à 1 est $11011001$

On ajoute 1, ce qui nous donne: $11011010$

On a donc: $-38_{10} = 11011010_2$

**Exercice :**

Donner l'écriture binaire sur un octet du nombre $-13$.

<details>
  <summary>Correction</summary>

Commençons par écrire le nombre 13 en binaire. Il s'écrit  `00001101`.

- en prenant le complément à 1 de chaque bit, on obtient `11110010`.
- en ajoutant 1 à ce dernier nombre, on obtient `11110011`.

Le nombre $-13$ s'écrit donc `11110011`.

</details>

### Travail inverse : passage du binaire signé au nombre relatif

Ce sont les même méthodes.

Si le bit fort (le plus à gauche) est un 1, notre nombre est négatif et il faut faire le complément à 2, sinon il est positif et on convertit comme pour tout entier naturel.

:::tip Exemple à connaitre
Essayons avec 1111 1101

Méthode 1: 1111 1101 devient 0000 0010 puis on ajoute 1 donc 0000 0011, ce qui donne 3, et donc $-3$.

Méthode 2: 1111 1101 = 253 et $2^8-253=3$ , puisqu'il y a un 1 en bit fort, cela fait $-3$

:::

**Exercices :**

1. En binaire signé, à quel nombre correspond $11110001$ ?
2. En binaire signé, quel est le plus grand nombre que l'on puisse écrire sur un octet ?
3. Quel est le plus petit nombre ?

<details>
  <summary>Correction</summary>

1. $11110001$ devient $00001110$ puis on ajoute 1 $00001111$ qui donne 15 et donc $-15$
2. Le plus grand nombre est `01111111`, soit $+127$.
3. Le nombre minimal est $-128$.

</details>
