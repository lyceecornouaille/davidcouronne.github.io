---
title: Input et print
description: Input et print
sidebar_position: 2
---

## L'instruction input

:::info input
l'instruction `input` va permettre aux utilisateurs de saisir des données au clavier.
:::

Testez ce programme:

```python
age = input("Quel est votre âge ? ")
```

Quel est le contenu de la variable age après avoir exécuté le programme ci-dessus ?

Quel est le type de la valeur référencée par la variable age ?

:::info
Comme vous avez pu le constater, la valeur saisie par l'utilisateur sera toujours de type `str`.
:::

Testez ce programme:

```python
a = input("Entrez un nombre")
a = a + 1
```

Comme vous l'avez remarqué, nous avons une erreur puisque la valeur référencée par la variable `a` est de type `str`.

La ligne `a=a+1` essaie "d'addtionner" un entier avec une chaine de caractères. Python n'est pas capable de gérer le problème, nous avons donc une erreur.

Pour éviter ce genre de problème, il peut être nécessaire de "transformer" notre chaîne de caractères en entier :

```python
a = input("Entrez un nombre")
a = int(a)
a = a + 1
```

## Gestion des erreurs de saisies.

Imaginons que nous voulons poser une question où la réponse doit être oui ou non.

```python
choix = input("Répondez par oui ou par non :")
```

Si l'utilisateur rentre par exemple `toto`, il n'y a aucune erreur, mais ce n'est pas la réponse attendue.

Nous devons donc tester la réponse, et éventuellement reposer la question. Il y a plusieurs façons d'implémenter cette fonctionnalité, en voici une:

```python
saisie_incorrecte = True # On suppose au début que l'utilisateur fera une "mauvaise" saisie
choix = "" # le choix ne contient rien au début
while saisie_incorrecte: # Tant que la saisie est incorrecte, on pose la question
    choix = input("Répondez par oui ou par non :") # on pose la question
    if choix == "oui" or choix == "non": # si le choix est correct
        saisie_incorrecte = False # La saisie devient correcte
    else:
        print("mauvaise réponse !") # sinon on affiche un message
```

Ce code fonctionne. Mais que ce passe-t-il si on veut autoriser juste les lettres "o" ou "n", ou si l'utilisateur mets des majuscules, par exemple "O", "Oui" ?

Le script précédent ne permet pas d'accepter ces réponses.

Pour gérer les problèmes de majuscules ou minuscules, on peut passer le texte tout en majuscules par exemple.

Testez le code suivant:

```python
mot = "chateau"
print(mot.upper())
```

On peut alors modifier le script de la façon suivante:

```python
saisie_incorrecte = True # On suppose au début que l'utilisateur fera une "mauvaise" saisie
choix = "" # le choix ne contient rien au début
while saisie_incorrecte: # Tant que la saisie est incorrecte, on pose la question
    choix = input("Répondez par (O)ui ou par (N)on :") # on pose la question
    choix = choix.upper() # On met toutes les lettres en majuscules
    if choix in ["O", "N", "OUI", "NON"]: # si le choix est correct
        saisie_incorrecte = False # La saisie devient correcte
    else:
        print("mauvaise réponse !") # sinon on affiche un message
```

Bien sûr, il faudra mettre tout ça dans une fonction !

Un exemple sans les docstring (à mettre impérativement dans le projet !):

```python
def menu():
    saisie_incorrecte = True # On suppose au début que l'utilisateur fera une "mauvaise" saisie
    choix = "" # le choix ne contient rien au début
    while saisie_incorrecte: # Tant que la saisie est incorrecte, on pose la question
        choix = input("Répondez par (O)ui ou par (N)on :") # on pose la question
        choix = choix.upper() # On met toutes les lettres en majuscules
        if choix in ["O", "N", "OUI", "NON"]: # si le choix est correct
            saisie_incorrecte = False # La saisie devient correcte
        else:
            print("mauvaise réponse !") # sinon on affiche un message
    return choix
```

## Formatage du texte

Avec l'instruction `print` il est possible d'obtenir un formatage de texte de manière relativement simple:

```python
nom = input("Quel est votre nom ? ")
print(f"Bonjour {nom} !")
```

:::info formatage
Pour formater un texte, vous devez mettre un `f`avant les guillements, puis mettre les expressions à évaluer entre accolades.
:::

```python
nom = input("Quel est votre nom ? ")
age = input("Quel est votre âge ? ")
print(f"Bonjour {nom} ! Vous avez {age} ans.")
```
