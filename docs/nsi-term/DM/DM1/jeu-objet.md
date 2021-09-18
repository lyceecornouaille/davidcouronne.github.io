---
title: Jeu POO
description: Jeu POO
sidebar_position: 4
---

:::info Objectif
Vous faites partie d'une société qui crée des jeux vidéo. Dans le projet d'un nouveau jeu, vous devez gérer les personnages. Afin d'éviter tout conflit dans le code produit par les autres collaborateurs, vous écrivez votre code en utilisant le paradigme de programmation objet.
:::

## Démarrage

Créer un fichier `jeuObjet.py`et y coller le code suivant:

```python
class Personnage:
    """
    Un personnage du jeu vidéo
    """
    def __init__(self,genre,experience=0):  # Définition du constructeur
        self.genre=genre                    # premier attribut : le genre (féminin, masculin, autre)
        self.experience=experience          # deuxième attribut : l'expérience (évaluée par un nombre entier)

```

- comme a priori, tout nouveau personnage doit commencer avec une expérience nulle, on définit la valeur par défaut de cet attribut.
- l'appel au constructeur peut se faire avec un seul argument : le genre.

Création simplifiée d'un personnage avec une expérience banale :

```python
Duc = Personnage('masculin')
```

On peut encore créer un personnage avec une autre experience en rajoutant un second argument :

```python
Elsa = Personnage('feminin',42)
```

## Créer des outils

Les personnages du jeu vidéo géreront des outils au cours de leur aventure. Ces outils possèdent différents attributs :

- un niveau d'expérience minimal du personnage pour qu'il puisse le manipuler (codé sous forme d'un nombre entier),

- une masse (le personnage ne peut pas porter trop de charge) (codé sous forme d'un flottant),

- le nombre de mains nécessairement libres pour pouvoir l'utiliser (de 1 à 4 : une coopération avec d'autres personnages peut être nécessaire).

Définissez une nouvelle classe nommée Outil.

Créez le constructeur de cette classe permettant de définir les trois attributs cités pour un outil. Par défaut, le constructeur initialise à 1 le nombre de mains nécessaires pour l'utilisation d'un objet.

Créez deux outils au choix dont un nécessite plus d'une main.

Pour chacun de vos outils, vérifiez la valeur de l'attribut correspondant au nombre de main.

## Les accesseurs

Pour l'interface graphique, le niveau d'expérience doit être accessible mais le joueur ne doit pas pouvoir modifier la valeur directement. Pour pouvoir accéder à la valeur de l'attribut, on créé dans la classe une méthode appelée `accesseur`.

:::info
Par convention, un accesseur commence par le verbe anglais get (to get = obtenir = récupérer).
:::

- vous devez rendre privé l'attribut `experience`de la classe `Personnage`
- écrivez une méthode `get_experience`qui permet de récupérer le niveau d'expérience (mais pas de modifier ce niveau)

Exemple:

```python
Frida = Personnage("feminin", 37)
Frida.get_experience() # 37
```

De la même façon, vous devez rendre privés tous les **attributs** de la classe `Outil`, puis de créer les accesseurs correspondant (par exemple `get_masse`).

## Les mutateurs

Lors du jeu, le niveau d'expérience du personnage doit évoluer : cette expérience doit être accessible en interne mais pas en externe.

Pour pouvoir modifier la valeur de l'attribut d'un objet, on créé dans la classe une méthode appelée **mutateur**.

:::info
Par convention, un mutateur commence par le verbe anglais set (to set = modifier).
:::

- Dans la classe `Personnage`, écrivez le **mutateur** `set_experience` qui permet de modifier l'expérience.

```python
Grumpf = Personnage("masculin", 28)
Grumpf.set_experience(51)
Grumpf.get_experience() # 51
```

- Dans la classe `Outil`, rajoutez un mutateur permettant de diminuer de 1 le nombre de mains nécessaire à la manipulation d'un objet, si ce nombre n'est pas 1.

```python
# Une faux s'utilise à deux mains et pèse environ 900 g (0,9 kg)
# Ici on la définit avec une expérience minimale de 50
Faux = Outil(2, 50, 0.9)
Faux.set_mains()
Faux.get_mains() # 1
Faux.set_mains()
Faux.get_mains() # Toujours 1 !
```

## Gain d'expérience

Il serait intéressant :

- d'insérer une méthode rencontre qui fait progresser l'expérience du personnage en fonction des rencontres qu'il vit,

- faire en sorte que l'utilisateur ne puisse pas modifier l'expérience de son personnage par simple appel de la méthode set_experience()

On peut supposer que chaque rencontre augmente l'expérience d'un nombre aléatoire compris entre 10 et 20.

En Python, cela nécessitera l'utilisation de la bibliothèque `random`. Ainsi, le début du programme devra désormais commencer par l'habituel :

```python
from random import *
```

Rappel: pour obtenir un nombre entier au hasard entre deux entier, on utilise la fonction `randint`.

- rendre privé l'**accesseur** `set_experience` de la classe `Personnage`
- créer une méthode `rencontre` qui conduit au tirage aléatoire du gain d'expérience.

```python
Hilda = Personnage("feminin")
Hilda.rencontre()
Hilda.get_experience() # 12 par exemple (au hasard entre +10 et +20)
Hilda.rencontre()
Hilda.get_experience() # 27 par exemple (au hasard entre +10 et +20)
```

## Méthode **str**

Si on fait `print(Hilda)` on obtient un affichage pas très lisible...

On va donc utiliser une méthode particulière: la méthode `__str__`

Par exemple:

```python
def __str__(self):
    return f"Personnage de genre {self.genre}"
```

- Si on crée un personnage `Alex = Personnage("masculin", 14)`, on souhaite que `print(Alex)`affiche `Personnage de genre masculin et de niveau d'expérience 14`. Dans la classe `Personnage`, créer la méthode `__str__` permettant l'affichage voulu.

## Personnage avec outil

On souhaite que chaque personnage puisse avoir un objet en main, unique pour simplifier pour l'instant.

Pour cela, on considère que le personnage possède un nouvel attribut, nommé `objet`, qui correspond à l'outil en main.

On veut désormais que tout personnage nouvellement créé commence avec un seul outil : un simple bâton de marche, de masse 0.5 kg et que l'on peut tenir à une seule main.

- Modifiez comme le script de la méthode `__init__` pour ajouter:
```python
self.objet = Outil(1, 0, 0.5)    # Une main, expérience requise 0, poids 0,5 kg 
```

- On désire maintenant obtenir un accesseur pour ce nouvel attribut objet. On veut qu'il nous renvoie la masse et le nombre de mains nécessaires à son utilisation.

```python
Frondon = Personnage("masculin")
Frondon.get_objet() # 1, 0.5
```

- Vous devez créer une nouvelle méthode, nommée `decouverte` dans la classe `Personnage` qui modélise la découverte d'une nouvel objet par le joueur, objet dont le niveau requis, la masse et la nombre de mains sont donnés comme paramètres de cette méthode.

Cette méthode conduira au remplacement de l'outil en main (celui de l'attribut objet) par le nouveau dans le seul cas où le personage possède un niveau d'exprérience suffisant pour cela.

De plus, deux affichages différents sont attendus dans la console :

"Nouvel objet" s'il y a eu changement d'outil,

"Dommage, il faut encore progresser en niveau" sinon.

```python
Frida = Personnage("feminin")
Frida.decouverte(2, 12, 0.6)
# Affichage "Dommage, il faut encore progresser en niveau"
Frida.rencontre() # L'expérience de Frida va dépasser 10
Frida.decouverte(2, 12, 0.6)
# Affichage "Nouvel objet"
Frida.get_objet # 2, 0.6
```

## Interactivité

On souhaite maintenant avoir un peu d'interactions.

Au lancement du programme, vous devez pouvoir choisir le genre du personnage.

Par exemple:

```python
# gestion de l'affichage de la saisie du genre par l'utilisateur
genre = input("""
            Saisir la lette correspondant au genre désiré pour votre personnage :
                M : si vous voulez une héros de genre masculin,
                F : si vous voulez une héroïne de genre féminin,
                A : si vous désirez un personnage sans genre déterminé
            """)

genre = genre.upper()  # pour s'assurer que la lettre saisie est en majuscule

# Création du nouveau personnage, appelé ici par défaut hero
if genre=='F':
    hero = Personnage('feminin')
```

- complétez pour prendre en compte les autres genres, et les fautes de saisie.

Par exemple:

```bash
Saisir la lette correspondant au genre désiré pour votre personnage :
                M : si vous voulez une héros de genre masculin,
                F : si vous voulez une héroïne de genre féminin,
                A : si vous désirez un personnage sans genre déterminé
Z
Vous devez choisir uniquement M, F, ou A.
F
Vous avez créé votre personnage !
Votre personnage a comme niveau d'expérience 0.
Vous commencez avec un bâton de marche de masse 0.5 que vous pouvez tenir à 1 main.
```

## Sytème de jeu


On souhaite maintenant avoir un système de jeu rudimentaire.

- A chaque tour, on peut choisir entre partir à la rencontre de quelqu'un, ou fouiller les environs pour trouver un outil.
- Quand on part à la rencontre de quelqu'un, on a une chance sur deux de rencontrer effectivement quelqu'un.
- Quand on fouille à la recherche d'un outil, on trouve toujours un outil, de masse aléatoire entre 100g et 2kg, d'expérience nécessaire aléatoire entre 0 et 100, et de "mains" aléatoire entre 1 et 4.

Un exemple:

```
Voulez-vous (R)echercher quelqu'un ou (F)ouiller les environs ?
R
Vous n'avez trouvé personne...
Voulez-vous (R)echercher quelqu'un ou (F)ouiller les environs ?
R
Vous avez rencontré quelqu'un ! Votre expérience est maintenant de 12.
Voulez-vous (R)echercher quelqu'un ou (F)ouiller les environs ?
F
"Dommage, il faut encore progresser en niveau"
Voulez-vous (R)echercher quelqu'un ou (F)ouiller les environs ?
F
"Dommage, il faut encore progresser en niveau"
Voulez-vous (R)echercher quelqu'un ou (F)ouiller les environs ?
F
"Nouvel objet"
```




