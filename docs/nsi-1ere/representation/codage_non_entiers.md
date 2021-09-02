---
title: Le codage en binaire des nombres non entiers
description: Le codage en binaire des nombres non entiers
sidebar_position: 3
---

import Link from '@docusaurus/Link'

Le principe est l'extension du système déjà rencontré pour les nombres entiers. La partie décimale (à droite de la virgule) correspondra aux puissances négatives de 2.

| ... |   8   |   4   |   2   |   1   |   0.5    |   0.25   |  0.125   | ... |
| :-: | :---: | :---: | :---: | :---: | :------: | :------: | :------: | :-: |
| ... | $2^3$ | $2^2$ | $2^1$ | $2^0$ | $2^{-1}$ | $2^{-2}$ | $2^{-3}$ | ... |
| ... |   0   |   1   |   1   |  0,   |    1     |    0     |    1     | ... |

**Exemple :** $110,101_2=1 \times 2^2 + 1 \times2^1 +0 \times 2^0 + 1 \times 2^{-1} +0 \times 2^{-2}+1 \times 2^{-2} =4+2+0,5+0,125=6,625$

## Tentatives de conversion

Tout commence bien, avec un résultat mathématique rassurant : **tous** les nombres réels peuvent s'écrire comme une somme de puissances de 2 (puissances positives et négatives).

#### Théorème :

Pour tout réel $x \in \mathbb{R}^+$, il existe $p \in \mathbb{N}$ et $(a_p,a_{p-1},...,a_0,a_{-1},a_{-2},...)$ tels que $x = \sum_{i=0}^pa_i2^i+\sum_{i=1}^{+\infty}a_{-i}2^{-i}$

Écrire un nombre en binaire revient à calculer les coefficients $a_k$ (ils sont égaux à 0 ou 1). Il y en a un nombre fini pour la partie entière, mais un nombre potentiellement infini pour la partie décimale.

### Méthode de conversion

Considérons le nombre $3,6875$. Il se décompose en une partie entière (3) et une partie décimale ($0,6875$).

- **partie entière :** $3=11_2$
- **partie entière :** la conversion de $0,6875$ se fait en plusieurs étapes.  
  $0,6875 \times 2 = \textbf{1},375$  
  $0,375 \times 2   = \textbf{0},75$  
  $0,75 \times 2 = \textbf{1},5$  
  $0,5 \times 2 = \textbf{1}$

On prend ensuite le chiffre des unités de tous les nombres obtenus : 1011

Donc $3,6875=11,1011_2$

### Exercice 1

Donner l'écriture binaire de 20,875.

_correction :_

- partie entière : $20 = 10100_2$
- partie décimale :
  - $0,875 \times 2 = \textbf{1},75$
  - $0,75 \times 2 = \textbf{1},5 $
  - $0,5 \times 2  = \textbf{1}$

Donc $20,875=10100,111_2$

### Exercice 2

Donner l'écriture binaire de 0,2.

_correction :_

- partie entière : $0 = 0_2$
- partie décimale :
  - $0,2 \times 2 = \textbf{0},4$
  - $0,4 \times 2 = \textbf{0},8 $
  - $0,8 \times 2  = \textbf{1},6$
  - $0,6 \times 2  = \textbf{1},2$
  - $0,2 \times 2 = \textbf{0},4$
  - _et cela continue..._

Le nombre 0,2 n'admet pas d'écriture binaire **finie**.

### Conclusion

Certains nombres n'admettent pas une écriture binaire finie. Or la mémoire d'un ordinateur, quelqu'il soit, est toujours finie. Certains nombres ne peuvent donc pas être représentés correctement en machine : c'est une impossibilité théorique. Cela amène à des comportements étranges :

```python
0.1+0.2
# 0.30000000000000004
```

## Conséquences : la difficile manipulation des flottants

En python, les nombres non entiers sont du type **float**.

```python
type(0.1)
# float
```

Ces flottants (traduction française) sont à manipuler avec une extrême précaution. Il faut garder en tête que les calculs sont potentiellement faux, du moins imprécis, lorsque des flottants interviennent.

:::info

En 1991, durant la Guerre du Golfe, un missile anti-missile américain a raté sa cible de 500 mètres car son ordinateur interne émettait un signal toutes les 0.1 secondes. Au bout de 100 heures de fonctionnement, l'approximation du nombre flottant 0.1 a conduit à un décalage de 0,34 secondes, ce qui lui a fait rater sa cible. ([source](http://www-users.math.umn.edu/~arnold//disasters/patriot.html))

:::
