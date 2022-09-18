---
title: Stockage dans des variables en Python
description: Cours de spécialité NSI sur les bases de Python
sidebar_position: 2
---

Une **variable** est comme une boîte dans la mémoire de l'ordinateur où vous pouvez stocker une seule valeur. Si vous souhaitez utiliser le résultat d'une expression évaluée ultérieurement dans votre programme, vous pouvez l'enregistrer dans une variable.

## Déclarations d'affectation

Vous stockerez des valeurs dans des variables avec une **instruction d'affectation** .

:::tip Instruction d'affectation

Une **instruction d'affectation** se compose d'un nom de variable, d'un signe égal (appelé **opérateur d'affectation**) et de la valeur à stocker.

Exemple:

```python
>>> spam = 40
```

« La variable `spam` contient maintenant la valeur entière 40 ».

:::

Une variable est **initialisée** (ou créée) la première fois qu'une valeur y est stockée.

Après cela, vous pouvez l'utiliser dans des expressions avec d'autres variables et valeurs.

Lorsqu'une variable se voit attribuer une nouvelle valeur, l'ancienne valeur est oubliée. C'est ce qu'on appelle **écraser** la variable.

:::note Exemples

```python
    >>> spam = 40
    >>> spam
    40
    >>> eggs = 2
    >>> spam + eggs
    42
    >>> spam + eggs + spam
    82
    >>> spam = spam + 2
    >>> spam
    42
```

```python
    >>> spam = 'Hello'
    >>> spam
    'Hello'
    >>> spam = 'Goodbye'
    >>> spam
    'Goodbye'
```

:::

## Noms des variables

:::tip Noms de variables autorisés

Vous pouvez nommer n'importe quelle variable tant qu'elle respecte les trois règles suivantes :

- Il ne peut s'agir que d'un seul "mot".
- Il ne peut utiliser que des lettres, des chiffres et le caractère de soulignement (_underscore_: `_`).
- Il ne peut pas commencer par un chiffre.

En particulier, les lettres accentuées (`é`, `à`, ..) ne sont pas autorisées

:::

:::note Exemples

Noms de variables valides:

```python
    prix
    prixAchat
    prix_achat
    _prix
    PRIX
    prix2
```

Noms de variables invalides:

```python
prix-achat (les traits d'union ne sont pas autorisés)
prix achat (les espaces ne sont pas autorisés)
2prix (ne peut pas commencer par un chiffre)
total_$somme (les caractères spéciaux comme $ ne sont pas autorisés)
réduction (les caractères spéciaux comme é ne sont pas autorisés)
```

:::

:::tip Conventions de nommage

Un bon nom de variable décrit les données qu'il contient.

Vous devez utiliser des noms de variables explicites, et parfois cela peut conduire à utiliser plusieurs "mots".

Par exemple si nous voulons stocker la valeur d'un _prix après réduction_ dans une variable:

- **camelCase**: `prixApresReduction`
- **snake_case**: `prix_apres_reduction`
- **PascalCase**: `PrixApresReduction`

La documentation de Python recommande d'utiliser le **snake_case**.

:::

## L'incrémentation d'une variable.

_«Incrémenter»_ une variable signifie l'augmenter.

Imaginons une variable appelée `compteur`. Au démarrage de notre programme, elle est initialisée à la valeur 0.

```python
>>> compteur = 0
```

Considérons qu'à un moment du programme, cette variable doit être modifiée, par exemple en lui ajoutant 1.

En Python, cela s'écrira :

```python
>>> compteur = compteur + 1
```

1. On évalue la partie droite de l'égalité, donc l'expression `compteur + 1`.
2. On va donc chercher le contenu de la variable `compteur`. Si celle-ci n'existe pas, un message d'erreur est renvoyé.
3. On additionne 1 au contenu de la variable `compteur`.
4. On écrase le contenu actuel de la variable `compteur` avec la valeur obtenue au 3.

À la fin de ces opérations, la variable `compteur` a bien augmenté de 1.

Cette procédure d'**incrémentation** est très très classique, il faut la maîtriser parfaitement !

:::info Syntaxe classique et syntaxe Pythonesque

L'incrémentation d'une variable `compteur` s'écrira donc en Python :

```python
>>> compteur = compteur + 1
```

Mais il existe aussi une syntaxe particulière, un peu plus courte :

```python
>>> compteur += 1
```

C'est bien de connaître cette syntaxe, mais son utilisation n'est en rien obligatoire et peut avoir un effet néfaste, celui d'oublier réellement ce qu'il se passe derrière.

:::

:::note Exemples divers

```python
    >>> nombre = 2
    >>> nombre += 3
    >>> nombre
    5
```

```python
    >>> nombre = 2
    >>> nombre *= 5
    >>> nombre
    10
```

```python
    >>> nombre = 10
    >>> nombre -= 3
    >>> nombre
    7
```

:::

## L'échange de variables

Après l'incrémentation, une autre technique de base reviendra fréquemment dans nos codes : **l'échange de variables**.

Imaginons les variables suivantes :

```python
>>> a = 3
>>> b = 5
```

Le but est d'échanger les valeurs de `a` et de `b`.

▸ **Méthode naïve**

```python
>>> a = b
>>> b = a
```

Que valent `a` et `b` maintenant ?

Malheureusement :

```python
>>> a
5
>>> b
5
>
```

La variable `a` a été écrasée dès qu'on lui a donné la valeur de la variable `b`.

Comment la préserver ?

Nous allons utiliser une variable **temporaire** (on parle aussi de variable **tampon**) pour conserver la mémoire de la valeur de `a` (par exemple) avant que celle-ci ne se fasse écraser :

```python
>>> a = 3
>>> b = 5
>>> temp = a
>>> a = b
>>> b = temp
```

Vous pouvez vérifier maintenant que les valeurs de `a` et de `b` ont bien été échangées.

:::info Syntaxe classique et syntaxe Pythonesque

L'échange de deux variables `a` et de `b` s'écrit donc :

```python
>>> temp = a
>>> a = b
>>> b = temp `
```

Mais il existe aussi une syntaxe particulière à Python, bien plus courte :

```python
>>> a, b = b, a
```

Cette syntaxe nous dispense de créer nous-même une troisième variable. Mais pas de miracle : en interne, Python crée lui-même cette variable temporaire. La simultanéité n'existe pas en informatique.

:::
