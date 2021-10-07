---
title: Enoncé DM2
description: Enoncé DM2 Terminale NSI
sidebar_position: 1
---

## Consignes

Vous avez deux fichiers à rendre, dans un dossier compressé:

- `min_jeu.py`
- `calculatrice_polonaise.py`

:::danger Qualité du code
Vous aurez des tests avec des `assert`à écrire dans chacun des deux exercices.

La qualité des **tests** écrits sera prise en compte dans l'évaluation, ainsi que la qualité des **docstring** et des **commentaires**.

Aucune erreur de syntaxe ne sera tolérée. (note 0 à l'exercice si erreur à l'exécution du code)
:::

## Mini-jeu

On demande pour cet exercice d'implémenter plusieurs classes qui pourront interragir entre elles.

1. Créer classe `Personnage` ayant pour attributs `_nom` et `_points_de_vie`, ce dernier étant un entier naturel.
2. Créer l'accesseur `get_nom` qui renvoie le nom du personnage, puis l'accesseur pour les points de vie.
3. Ecrire une méthode `est_vivant(self)` qui renvoie `True` quand le personnange est vivant, et `False` sinon.
4. Ecrire une méthode `est_blesse(self, pv)` qui retire `pv` points de vie au personnage.

:::tip Ecrire des tests
Vous commencerez à écrire des tests la fin de votre fichier avec des `assert`. Par exemple:

```python
aragorn = Personnage("Aragorn", 120)
assert(aragorn.get_nom() == 'Aragorn')
```

Vous devez tester au moins tous les accesseurs.
:::

5. Créer une classe `Arme` ayant pour attributs `_nom`, `_degats_min` et `_degats_max`, ces derniers étant des entiers naturels (dans le bon ordre évidemment).

Les méthodes à implémenter sont:

- Un accesseur pour chacun des attributs.
- `degat_aleat(self)` qui renvoie un nombre aléatoire de dégâts entre les deux bornes définissant cette arme.

:::tip Tests
Vous devez écrire des tests les accesseurs.

Pour `degat_aleat(self)`, on testera que le nombre renvoyé est bien dans l'intervalle des dégâts de l'arme.
:::

6. Créer classe `Arbitre` ayant pour attributs deux personnages armés `_perso1` et `_perso2`.

Les méthodes à implémenter sont:

- `personnage1(self)` et `personnage2(self)` qui renvoient les deux personnages respectivement.
- `un_round(self)` qui effectue un round de combat entre les deux personnages.

Dans un round, un seul personnage tape sur l'autre et on **échange les rôles au round suivant**, en utilisant son arme et en infligeant un nombre aléatoire de dégâts à son adversaire.

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

:::info
Il faudra peut-être aussi modifier les classes `Personnage` et `Arme`, pour y ajouter éventuellement des attributs et des méthodes...

On pensera à ajouter les test supplémentaires.

On ne testera pas la classe `Arbitre`: les tests des sorties console sont tout à fait possibles, mais hors programme !
:::

- `combat(self)` qui simulera un combat complet, c'est-à-dire une alternance de rounds jusqu'à ce que l'un des personnage perde la vie.

On affichera le détail des combats dans la console (à l'aide de `print`).

Le personnage qui commence sera choisi au hasard.

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

## Calculatrice polonaise inverse à pile

L'écriture polonaise inverse des expressions arithmétiques place l'opérateur après ses opérandes.

Cette notation ne nécessite aucune parenthèse ni aucune règle de priorité.

Ainsi l'expression polonaise inverse décrite par la chaîne de caractères
'1 2 3 _ + 4 _' désigne l'expression traditionnellement notée (1 + 2 x 3) x 4.

La valeur d'une telle expression peut être calculée facilement en utilisant une pile pour stocker les résultats intermédiaires.

Pour cela, on observe un à un les éléments
de l'expression et on effectue les actions suivantes:

- si on voit un nombre, on le place sur la pile;
- si on voit un opérateur binaire, on récupère les deux nombres au sommet de la pile, on leur applique l'opérateur, et on replace le résultat sur la pile.

Exemple pour `1 2 3 * + 4 *`

- On voit 1 on empile
- On voit 2 on empile
- On voit 3 on empile
- On voit `*`, on dépile les deux nombres au sommet, c'est à dire 3 puis 2, puis on applique `*` ce qui donne 6, que l'on empile. La pile contient donc 1 et 6 (du fond vers le haut).
- On voit `+`, on dépile les deux nombres au sommet, c'est à dire 6 puis 1, puis on applique `+`, ce qui donne 7, que l'on empile. La pile contient donc 7.
- On voit 4 on empile
- On voit `*`, on dépile les deux nombres au sommet, c'est à dire 4 puis 7, puis on applique `*` ce qui donne 28, que l'on empile. La pile contient donc 28.
- L'expression ne contient plus rien, le résultat est donc le seul élément de la pile, c'est-à-dire 28.

Testez par vous même pour l'expression `2 5 * 6 + 2 *` qui doit vous donner 32.

Si l'expression est bien écrite, il y a bien toujours au moins deux nombres dans la pile
lorsque l'on voit un opérateur, et à la fin du processus il reste exactement
un nombre sur la pile, qui est le résultat.

:::info A faire
- Ecrire une fonction `eval_polonaise_inverse(expression)` prenant en paramètre une chaîne de caractères représentant une expression en notation polonaise inverse composée **d'additions** et de **multiplications** de nombres entiers et renvoyant la valeur de cette expression.

On supposera que les éléments de l'expression sont séparés par des espaces. (penser à `split` !)

- Ecrire des tests avec des `assert` à la fin du fichier.

:::

:::danger Attention
Cette fonction ne doit pas renvoyer de résultat si l'expression est mal écrite.
:::

Exemples:

```python
eval_polonaise_inverse("1 1 +") # 2
eval_polonaise_inverse("2 5 *") # 10
eval_polonaise_inverse("1 2 3 * +") # 7 (3*2+1)
eval_polonaise_inverse("1 2 3 * + 4 *") # 28
eval_polonaise_inverse("1 2 3") # None
eval_polonaise_inverse("1 2 + *") # None
```

On utilisera la classe `Pile` suivante, accompagnée de la classe `Cellule`:

```python
class Cellule:

	def __init__(self, v, s):
		self.valeur = v
		self.suivante = s

class Pile:

	def __init__(self):
		self. contenu = None
	def est_vide(self):
		return self.contenu is None
	def empiler(self, v):
		self. contenu = Cellule(v, self. contenu)
	def depiler(self):
		if self.est_vide():
			raise IndexError("dépiler sur une pile vide")
		v = self.contenu.valeur
		self.contenu = self.contenu.suivante
		return v

```

:::danger Attention
Les classes `Cellule` et `Pile` sont livrées volontairement sans **docstring**.

Vous devez **impérativement** écrire les **docstring** pour le rendu final.
:::
