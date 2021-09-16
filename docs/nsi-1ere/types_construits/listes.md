---
title: Les listes
description: Les listes en Python
sidebar_position: 2
---

## Définition

:::tip Définition
**Tableau**: Un tableau est une collection ordonnée d'éléments de n'importe quel type, organisés séquentiellement les uns à la suite des autres.
:::

:::info
En Python, un **tableau** est appelé **liste**. Il est de type `list`

Le tableau est modifiable par affectation, on dit qu'il est **mutable**

:::

## Bases sur les listes

:::info Création d'une liste
Dans une liste, tous les termes doivent être séparés par des virgules et entourés de **crochets**
:::

Exemple:

```python
L = [1, 5, 8]
```

:::info
Une **liste** peut aussi contenir des éléments de types différents
:::

```python
lst = [4, "bonjour", False, [7, 9]]
```

:::info liste vide
La liste vide est notée `[]`
:::

```python
lst = [] # liste vide
```

## Accès aux éléments d'une liste

:::info
On accède à un élément d'une liste en mettant entre crochets l'indice de l'élémént (qui commence à **zéro**).
:::

Exemple:

```python
famille = ["Bart", "Lisa", "Maggie"]
famille[0] # 'Bart'
```

:::danger
Un indice qui dépasse la valeur  `longueur de la liste -1` provoquera une erreur `list index out of range`.
:::

Exemple:

```python
famille = ["Bart", "Lisa", "Maggie"]
famille[3] # Erreur de type list index out of range
```

:::info Indices négatifs
Il est par contre possible d'utiliser des indices **négatifs**.

$-1$ correspond alors au dernier élément de la liste.
:::

```python
famille = ["Bart", "Lisa", "Maggie"]
famille[-1] # 'Maggie'
famille[-2] # 'Lisa'
```

## Modification d'une liste par affectation

:::info
Les termes d'une listes peuvent être modifiés par affectation au cours d'un programme.

Cela est possible car les listes sont des objets **mutables**.
:::

```python
animaux = ['renards', 'crocodiles', 'zèbres']
animaux[1] = 'toucans'
print(animaux) # ['renards', 'toucans', 'zèbres']
```

## Longueur d'une liste

:::info
La longueur d'une liste sera donnée par la fonction `len()`
:::

Exemple:

```python
lst = [3, 'bonjour', True, [1, 2, 5]]
len(lst) # 4
```

## Test d'appartenance avec `in`

:::info
On peut tester si un élément appartient à une liste avec `in`
:::

```python
lst = ['n', 's', 'i']
print('n' in lst) # True
print('b' in lst) # False
```

## Opération sur les listes

:::info La méthode append()
Les listes Python ont la particularité de pouvoir être allongées d'un élément en fin de liste, grâce à la méthode `append()`
:::

```python
felins = ['chats', 'tigres', 'léopards']
felins.append('lions')
print(felins) # ['chats', 'tigres', 'léopards', 'lions']
```

:::info La concaténation
Avec l'opérateur `+`, on peut **concaténer** deux listes, c'est-à-dire créer une nouvelle liste formée avec deux listes.
:::

```python
lst1 = [3, 5, 7]
lst2 = [12, 15, 9]
lst3 = lst1 + lst2
print(lst3) # [3, 5, 7, 12, 15, 9]
```

:::info
On peut aussi utiliser la multiplication par un entier `int`.
:::

```python
lst1 = [0]*5
print(lst1) # [0, 0, 0, 0, 0]
lst2 = ['t', 'u']*3
print(lst2) # ['t', 'u', 't', 'u', 't', 'u']
```

## Le _slicing_

:::info Le _slicing_
Le découpage de liste (appelé _slicing_) permet d'extraire un séquence d'une liste.

Soit `lst` une liste

La syntaxe `lst[i:j]` permet d'extraire de la liste tous les éléments consécutifs compris entre l'élément de rang `i` **inclus** et l'élément de rang `j` **exclus**.
:::

Exemple:

```python
jours = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']

## Les deux premiers jours de la semaine
jours[0:2] # ['lundi', 'mardi']
#On peut omettre le 0
jours[:2] # ['lundi', 'mardi']

## Du mardi au vendredi
jours[1:5] # ['mardi', 'mercredi', 'jeudi', 'vendredi']

# Du jeudi jusqu'à la fin
jours[3:] # ['jeudi', 'vendredi', 'samedi', 'dimanche']

# Tout sauf le dimanche
jours[:-1] # ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
```

## Liste en compréhension

:::tip
Il est possible et élégant de construire une liste en compréhension avec le langage Python. C'est très pratique pour créer, transdormer ou filtrer une liste.
:::

Exemples:

```python
nombres = [k for k in range(10)]
# nombres = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

Il est bien sûr possible d'agir sur le paramètre :

```python
carres_parfaits = [k**2 for k in range(10)]
# carres_parfaits = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

:::info Filtrage
Ajouter une **condition de filtrage** permet de ne sélectionner que certains éléments de la liste.
:::

```python
c = [n for n in carres_parfaits if n % 3 == 0]
# c = [0, 9, 36, 81]
```

## Matrices: les listes de listes

:::info Création d'une liste de listes
Un tableau à double entrée, appelé **matrice**, peut être représenté par une liste de listes.
:::

Exemple:

| 7   | 9   |
| --- | --- |
| 5   | 2   |

```python
L = [[7, 9], [5, 2]]
```

On peut aussi écrire sur plusieurs lignes pour plus de confort visuel:

```python
L = [[7, 9],
     [5, 2]]
```

Prenons comme exemple un jeu de morpion:

| X   |     | O   |
| --- | --- | --- |
| X   |     |     |
|     |     |     |

On peut représenter ce tableau par une liste de listes:

```python
morpion = [['X', ' ', 'O'], ['X', ' ', ' '], [' ', ' ', ' ']]
```

Bien sûr on peut mettre sur plusieurs lignes:

```python
morpion = [['X', ' ', 'O'],
           ['X', ' ', ' '],
           [' ', ' ', ' ']]
```

:::info
Par convention, les **lignes** sont notées avec l'indice $i$ et les **colonnes** sont notées avec $j$.
:::

```python
morpion[i][j] # ligne i, colonne j, en partant de zéro
morpion[0][0] # ligne 1, colonne 1
morpion[0][0] # 'X'
morpion[2][1] # ' '
morpion[0][2] # 'O'
```

On suppose que le joueur 'O' veuille empêcher le joueur 'X' de gagner:

```python
morpion[2][0] = 'O'
# morpion = [['X', ' ', 'O'],
#           ['X', ' ', ' '],
#           ['O', ' ', ' ']]
```

:::tip Matrices en compréhension
On peut générer des matrices en compréhension
:::

Exemple:

```python
matrice = [[i+j for j in range(3)] for i in range(3)]
# matrice = [[0, 1, 2], [1, 2, 3], [2, 3, 4]]
```
