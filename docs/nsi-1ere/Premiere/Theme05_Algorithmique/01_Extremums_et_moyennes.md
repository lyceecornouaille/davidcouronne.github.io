# Recherche d'extremum dans une liste

## Activité débranchée
Vous disposez des cartes numérotées 3, 2, 4, 6, 9, 1, 5 disposées dans n'importe quel ordre.

Vous disposez aussi d'une carte "support" nommée `m`.  

![](data/deck.png)


1. Exprimer oralement l'algorithme permettant de trouver quelle est la carte portant la valeur maximale.
2. Ecrire cet algorithme en langage naturel.

## Création d'une fonction `maximum(liste)`

*Attention : nous allons recréer une fonction qui, bien sûr, existe déjà en Python, sous le nom `max()`.*

Ecrire l'algorithme en Python.  
Il est expressément demandé de construire une fonction nommée `maximum()`, qui prenne en argument une liste, et qui renvoie le plus grand nombre de cette liste.

**Exemple d'utilisation :**
```python
>>> maximum([3,1,6,2])
>>> 6
```

```python
def maximum(liste):
    m = liste[0]
    for k in liste :
        if k > m :
            m = k
    return m   
```

### Complexité de l'algorithme

L'algorithme de recherche de maximum est de **complexité linéaire**.

## Calcul de la moyenne des termes d'une liste
Créer une fonction `moyenne()` qui prenne en argument une liste et qui renvoie la moyenne des nombres de cette liste.

```python
def moyenne(liste):
    if liste == []:
        return 'erreur'
    somme = 0
    for k in liste:
        somme += k
    return somme / len(liste)
```
