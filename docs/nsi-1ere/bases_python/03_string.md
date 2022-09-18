---
title: Chaînes de caractères en Python
description: Cours sur les chaînes de caractères en Python
sidebar_position: 3
---

## Ecriture des chaînes de caractères

:::tip Les `single quote` et `double quote`

- **single quote**: c'est le caractère `'`(apostrophe en français)

- **double quote**: c'est le caractère `"`(guillemet en français)

Python comprend les deux écritures suivantes:

```python
mot = "Bonjour"
mot = 'Bonjour'
```

:::

Pour les chaînes de caractères simples, on peut utiliser `'`ou `"`.

Le problème se pose quand on utilise des apostrophes dans une phrase.

Par exemple:

```python
>>> phrase = 'il s'est réveillé à 8h'
phrase = 'il s'est réveillé à 8h'
    ^
    SyntaxError: invalid syntax
```

Par contre en utilisant des double quote, le problème ne se pose plus:

```python
>>> phrase = "il s'est réveillé à 8h"
```

:::tip Conventions

Nous utiliseront de préférence les double quote `"` pour écrire les chaînes de caracères.

:::

## Concaténation et réplication de chaînes

La signification d'un opérateur peut changer en fonction des types de données des valeurs à côté de lui. Par exemple, `+`est l'opérateur d'addition lorsqu'il opère sur deux nombres entiers ou des valeurs à virgule flottante. Cependant, lorsqu'il est utilisé sur deux valeurs de chaîne, il joint les chaînes en tant qu'opérateur de concaténation de chaînes.

:::tip Concaténation de chaînes de caractères

Lorsque l'opérateur `+` est utilisé sur deux valeurs de chaîne, il joint les chaînes en tant qu'**opérateur de concaténation** de chaînes.

Exemples:

```python
>>> "Alice" + "Bob"
'AliceBob'
>>> "1"+ "2"
'12'
```

:::

L'expression est évaluée jusqu'à une seule nouvelle valeur de chaîne qui combine le texte des deux chaînes. Cependant, si vous essayez d'utiliser l' opérateur `+`sur une chaîne et une valeur entière, Python ne saura pas comment gérer cela et affichera un message d'erreur.

```python
>>> "Alice" + 42
Traceback (most recent call last):
  File "<pyshell#26>", line 1, in <module>
    'Alice' + 42
TypeError: Can't convert 'int' object to str implicitly
```

Le message d'erreur `Can't convert 'int' object to str implicitly`signifie que Python pensait que vous essayiez de concaténer un entier à la chaîne 'Alice'. Votre code devra convertir explicitement l'entier en chaîne, car Python ne peut pas le faire automatiquement.

:::tip Réplication de chaînes

L' **opérateur** `*` est utilisé pour la multiplication lorsqu'il opère sur deux valeurs entières ou à virgule flottante. Mais lorsque l' opérateur `*`est utilisé sur une valeur de chaîne et une valeur entière, il devient l' **opérateur de réplication de chaîne** .

Exemple:

```python
>>> "Alice" * 5
'AliceAliceAliceAliceAlice'
```

:::

L'expression est évaluée jusqu'à une valeur de chaîne unique qui répète l'original un nombre de fois égal à la valeur entière. La réplication de chaînes est une astuce utile, mais elle n'est pas utilisée aussi souvent que la concaténation de chaînes.

L' opérateur `*`peut être utilisé avec seulement deux valeurs numériques (pour la multiplication) ou une valeur de chaîne et une valeur entière (pour la réplication de chaîne). Sinon, Python affichera simplement un message d'erreur.

```python
>>> "Alice" * "Bob"
Traceback (most recent call last):
  File "<pyshell#32>", line 1, in <module>
    'Alice' * 'Bob'
TypeError: can't multiply sequence by non-int of type 'str'
>>> "Alice" * 5.0
Traceback (most recent call last):
  File "<pyshell#33>", line 1, in <module>
    'Alice' * 5.0
TypeError: can't multiply sequence by non-int of type 'float'
```

Il est logique que Python ne comprenne pas ces expressions : vous ne pouvez pas multiplier deux mots et il est difficile de répliquer une chaîne arbitraire un nombre fractionnaire de fois.

## Caractère spéciaux

:::tip Le retour à la ligne `\n`

Pour effectuer un retour à la ligne, il faut utiliser le caractère `\n`.

```python
>>> print("Bonjour\ntout\nle monde !")
Bonjour
tout
le monde !
```

:::

:::tip La tabulation `\t`

Pour effectuer une tabulation il faut utiliser le caractère `t`.

```python
>>> print("Bonjour\t tout\tle monde !")
Bonjour	 tout	le monde !
```

:::

## Le formatage

Le formatage des chaînes de caractères permet d'utiliser des variables ou des expressions.

Exemples:

```python
>>> age = 27
>>> print(f"Cette personne est agée de {age} ans.")
Cette personne est agée de 27 ans.
```

```python
>>> x = 3
>>> y = 4
>>> print(f"Si x={x} et y={y}, alors x+y={x+y}")
Si x=3 et y=4, alors x+y=7
```

## Accès à un caractère

Prenons l'exemple suivant:

```python
>>> mot = "Python"
```

Les caractères sont comptés à partir de l'indice 0.

Dans l'exemple, le premier caractère est `P`, c'est donc celui d'indice 0.

```python
>>> mot[0]
'P'
```

```python
>>> mot[2]  # Caractère d'indice 2, donc le 3ième
't'
>>> mot[3]  # Caractère d'indice 3, donc le 4ième
'h'
>>> mot[7]  # Caractère d'indice 7, qui n'existe pas
Traceback (most recent call last):
File "<stdin>", line 1, in <module>
IndexError: string index out of range
```
