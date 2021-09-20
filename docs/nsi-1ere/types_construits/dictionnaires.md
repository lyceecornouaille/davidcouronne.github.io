---
title: Les dictionnaires
description: Les dictionnaires en Python
sidebar_position: 4
---

## Définition

:::info Dictionnaire
Un **dictionnaire** est une collection non ordonnée d'éléments. Ces éléments sont constitués d'une **clé** associée à une **valeur**.
:::

:::info Clés
Les **clés** peuvent être de n'importe quel type **non-mutable**: entier, chaîne de caractère, p-uplet.
:::

## Création d'un dictionnaire

:::info Création d'un dictionnaire
Un nouveau **dictionnaire** est créé par affectation et nécessite l'utilisation d'**accolades**, ce qui la différencie des listes et des p-iplet.

Une **valeur** est associée à une **clé** selon la syntaxe `clé: valeur`
:::

Exemple:

```python
annuaire = {10: 'Paul', 20: 'Tom', 30: 'Nadia'}
```

Dans cet exemple, les **clés** sont des entiers: 10, 20, 30.

La **valeur** associée à la **clé** 20 est: 'Tom'

## Accès aux éléments d'un dictionnaire

:::info
Les éléments du dictionnaire ne sont pas indexés.

On accède à une valeur grace à la **clé** qui lui est associée.
:::

:::danger
Les **clés** d'un dictionnaire doivent être toutes **différentes**.
:::

Exemple:

```python
# On image un panier de fruits contenant 2 pommes, 2 oranges, 3 fraises et 1 banane

panier = {'pomme': 2, 'orange': 2, 'fraise': 3, 'banane': 1}
panier['pomme'] # 2
panier['fraise'] # 3
```

## Modification du dictionnaire

:::info
Un **dictionnaire** est un objet **mutable**.
:::

Exemple:

```python
panier = {'pomme': 2, 'orange': 2, 'fraise': 3, 'banane': 1}
panier['banane'] = 5
print(panier) # {'pomme': 2, 'orange': 2, 'fraise': 3, 'banane': 5}
```

:::info Ajout d'une clé
On peut ajouter une clé dans un dictionnaire
:::

Exemple:

```python
panier = {'pomme': 2, 'orange': 2, 'fraise': 3, 'banane': 1}
panier['kiwi'] = 5
print(panier) # {'pomme': 2, 'orange': 2, 'fraise': 3, 'banane': 1, 'kiwi': 5}
```

## Méthodes spécifiques

```python
panier = {'pomme': 2, 'orange': 2, 'fraise': 3, 'banane': 1}

# méthode items()
panier.items()
# dict_items([('pomme', 2), ('orange', 2), ('fraise', 3), ('banane', 1)])
# La méthode items() renvoie la collection de tous les objets du dictionnaire

# méthode keys()
panier.keys()
# dict_keys(['pomme', 'orange', 'fraise', 'banane'])
# La méthode keys() renvoie la collection itérable de tous les clés du dictionnaire

# méthode values()
panier.values()
# dict_values([2, 2, 3, 1])
# La méthode values() renvoie la collection itérable de toutes les valeurs du dictionnaire
```

## Exemples d'utilisation

Test d'appartenance d'une clé:

```python
panier = {'pomme': 2, 'orange': 2, 'fraise': 3, 'banane': 1}

'pomme' in panier # True
'kiwi' in panier # False
```

Affichage formaté:

```python
# Affichage des clés et des valeurs

for cle in panier.keys():
    print(f"J'ai {panier[cle]} {cle}(s) dans mon panier.")
```

Affichage:

```
J'ai 2 pomme(s) dans mon panier.
J'ai 2 orange(s) dans mon panier.
J'ai 3 fraise(s) dans mon panier.
J'ai 1 banane(s) dans mon panier.
```
