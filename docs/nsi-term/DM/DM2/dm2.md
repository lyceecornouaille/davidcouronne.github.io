---
title: Enoncé DM2
description: Enoncé DM2 Terminale NSI
sidebar_position: 1
---

## Mini-jeu

On demande pour cet exercice d'implémenter plusieurs classes qui pourront interragir entre elles.

1. Créer classe `Personnage` ayant pour attributs `_nom` et `_points_de_vie`, ce dernier étant un entier naturel.
2. Créer l'accesseur `get_nom` qui renvoie le nom du personnage, puis l'accesseur pour les points de vie.
3. Ecrire une méthode `est_vivant(self)` qui renvoie `True` quand le personnange est vivant, et `False` sinon.
4. Ecrire une méthode `est_blesse(self, pv)` qui retire `pv` points de vie au personnage.
5. Créer une classe `Arme` ayant pour attributs `_nom`, `_dégâts_min` et `_dégâts_max`, ces derniers étant des entiers naturels (dans le bon ordre évidemment).

Les méthodes à implémenter sont:

- Un accesseur pour le nom.
- `degat_aleat(self)` qui renvoie un nombre aléatoire de dégâts entre les deux bornes définissant cette arme.

6. Créer classe `Arbitre` ayant pour attributs deux personnages armés `_perso1` et `_perso2`.

Les méthodes à implémenter sont:

- `personnage1(self)` et `personnage2(self)` qui renvoient les deux personnages respectivement.
- `un_round(self)` qui effectue un round de combat entre les deux personnages.

Dans un round, un seul personnage tape sur l'autre et on échange les rôles au round suivant, en utilisant son arme et en infligeant un nombre aléatoire de dégâts à son adversaire.

Exemple:

```python
>>> epee = Arme("son épée Narsil", 6, 18)
>>> hache = Arme("sa hache de guerre", 1, 21)
>>> aragorn = Personnage("Aragorn", 120, epee)
>>> orc = Personnage("Ograukh", 140, hache)
>>> mdj = Arbitre(aragorn, orc)
>>> mdj.un_round()
Aragorn inflige 13 points de dégâts à Ograukh avec son épée Narsil.
>>> mdj.un_round()
Ograukh inflige 5 points de dégâts à Aragorn avec sa hache de guerre.
```

- `combat(self)` qui simulera un combat complet, c'est-à-dire une alternance de rounds jusqu'à ce que l'un des personnage perde la vie.

On affichera le détail des combats dans la console (à l'aide de `print`).

Le personnage n° 1 frappera toujours en premier.

Voici un exemple d'une séquence de jeu:

```python
>>> epee = Arme("son épée Narsil", 6, 18)
>>> hache = Arme("sa hache de guerre", 1, 21)
>>> aragorn = Personnage("Aragorn", 120, epee)
>>> orc = Personnage("Ograukh", 140, hache)
>>> mdj = Arbitre(aragorn, orc)
>>> mdj.combat()
Un combat s'engage entre Aragorn et Ograukh.
Aragorn prend l'initiative et frappe en premier.
Aragorn inflige 13 points de dégâts à Ograukh avec son épée Narsil.
Ograukh inflige 5 points de dégâts à Aragorn avec sa hache de guerre.
...
...
Aragorn inflige 7 points de dégâts à Ograukh avec son épée Narsil.
Aragorn gagne le combat: il lui reste 5 points de vie alors que Ograukh est mort.
```
