---
title: Les p-uplet
description: Les tuple en Python
sidebar_position: 3
---

## Définition

:::info p-uplet
Un **p-uplet** (ou _tuple_ en anglais) est une collection ordonnée d'éléments, appelés _composantes_ ou _termes_. Chaque terme peut être de n'importe quel type.
:::

:::tip tuple
Le **p-uplet** est de type `tuple`.

Les termes du p-uplet **ne sont pas modifiables** par affectation.

Un `tuple`est **non-mutable**
:::

## Création d'un p-uplet

:::info
En langage Python, les termes d'un p-uplet sont séparés par des virgules. Les **parenthèses** ne sont pas obligatoires mais sont fortement conseillées pour la lisibilité du code.
:::

Exemples:

```python
t = (1, 8, 5)
print(type(t)) # <class 'tuple'>

# ou bien, mais fortement déconseillé. Mis ici en exemple car cela arrive dans certains codes...
t = 1, 8, 5
```

## Indexation des éléments du p-uplet

:::info
L'indexation fonctionne exactement comme avec les listes.
:::

```python
pointA = (3, -4)
pointA[0] # 3
pointA[1] # -4
```

## Modification d'un p-uplet

:::danger
Il n'est pas possible de modifier par affectation les termes d'un p-uplet après sa création.

Un p-uplet est dit **non-mutable**
:::

```python
t= (1, 2, 8)
t[0] = 12 # TypeError: 'tuple' object does not support item assignment
```

## Fonction renvoyant un p-uplet de valeurs

En programmation fonctionnelle, il est indispensable d'utiliser des fonctions pouvant renvoyer un ensemble de valeurs réutilisables, contenus dans un p-uplet ou une liste.

Par exemple, on souhaite calculer les coordonnées du milieu I d'un segment [AB]:

```python
def milieu(A, B):
    xI = (A[0]+B[0])/2
    yI = (A[1]+B[1])/2
    return (xI, yI)

A = (2, 1)
B = (3, 5)
I = milieu(A, B)
print(I) # (2.5, 3.0)
```
