---
title: Algorithmes de parcours
description: Algorithmes de parcours en  première NSI
sidebar_position: 2
---

## Algorithmes de parcours

On s'intéresse à un tableau noté `tab`et contenant $n$ éléments notés `tab[i]`pour $0 \leq i < n$.

On suppose que les éléments du tableau sont des nombres.

## Comptage d'une occurence

:::tip Parcours total

Le **parcours total** est par exemple mis en oeuvre lors d'un **comptage d'occurences**.

La boucle **"pour"** est alors à privilégier.

:::

On cherche combien de fois un élément noté `b` apparait dans le tableau `tab`.

Le programme suivant, écrit en Python, répond à cette question.

```python
def compte_occurences(tab, b):
    """In: une liste tab et un nombre b.
    Out: le nombre d'occurences de b"""
    if tab == []: # on teste si le tableau est vide
        return 0
    compteur = 0 # On initialise le compteur à 0
    for elem in tab: # boucle de parcours total
        if elem == b: # si l'élément courant est égal à l'élément cherché
            compteur = compteur + 1 # on incrémente le compteur
    return compteur
```

### Complexité du parcours total

Le tableau est parcouru dans sa totalité dans tous les cas.

Le nombre d'étapes est donc proportionnel à la taille du tableau.

On a une **complexité linéraire**: $O(n)$.

## Recherche d'une occurence

:::tip Parcours partiel

Le **parcours partiel** est par exemple mis en oeuvre lors d'une **recherche d'occurence**.

La boucle **"tant que"** est alors à privilégier.

:::

On cherche si le tableau `tab`contient un élément noté `b`.

Le programme suivant, écrit en Python, répond à cette question.

Il renvoie `True`si `b`est dans le tableau et `False`sinon.

```python
def recherche_occurence(tab, b):
    """In: tab une liste de nombres et b un nombre.
    Out: True si b appartient à la liste et False sinon"""
    if tab == []: # on teste si le tableau est vide
        return False
    i = 0 # On initialise le parcours à l'indice 0
    trouve = False # On initialise le booléen trouve à False
    while i < len(tab) and not trouve: # boucle de parcours
        if tab[i] == b: # si l'élément d'indice i est l'élément recherché
            trouve = True # trouve devient vrai
        else: # sinon on continue le parcours
            i = i + 1
    return trouve
```

### Complexité du parcours partiel

La **complexité d'un parcours partiel** dépend de la structure de données parcourue.

Le concept de **pire des cas** et de **meilleur des cas** prend tout son sens avec ce type de parcours.

- Dans le **meilleur des cas**, l'élément cherché sera trouvé dès le début de la recherche. L'algorithme s'arrète au bout d'une étape.

- Dans le **pire des cas**, l'élément cherché est absent de la structure de données et le parcours sera total.

On a donc une **complexité linéraire**: $O(n)$.

## Recherche d'un maximum ou d'un minimum

:::tip Parcours total

Le parcours total est nécessaire pour trouver la **valeur maximale** (ou minimale) d'une structure de données.

La boucle **"pour"** est donc à privilégier.

:::

Le programme suivant est une implémentation possible.

```python
def maximum(tab):
    """In: tab une liste de nombres
    Out: le maximum de la liste"""
    if tab == []:
        return 'erreur' # si le tableau est vide on renvoie 'erreur'
    maxi = tab[0] # on initialise le maxi comme le 1er élément
    for i in range(1, len(tab)): # boucle de parcours total
        if tab[i] > maxi:
            maxi = tab[i]
    return maxi
```

## Calcul de la moyenne

Pour **calculer la moyenne**, la relation suivante est indispensable:

$$\text{moyenne} = \dfrac{\text{somme des éléments}}{\text{nombre d'éléments}}$$

Le parcours total est donc nécessaire et une variable temporaire sera utilisée pour stocker la somme de tous les éléments rencontrés au fil du parcours.

La boucle **"pour"** est donc à privilégier.

:::info

L'algorithme de calcul d'une moyenne est _ressemble_ à l'algorithme de comptage d'occurences.

:::

```python
def moyenne(tab):
    """In: tab une liste de nombres
    Out: la moyenne
    """
    if tab == []:
        return 'erreur'
    somme = 0
    for elem in tab:
        somme = somme + elem
    return somme / len(tab)
```
