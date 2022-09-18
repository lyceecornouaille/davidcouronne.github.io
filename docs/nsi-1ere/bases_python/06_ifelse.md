---
title: Les structures conditionnelles
description: Cours de spécialité NSI sur les bases de Python
sidebar_position: 6
---

# Les structures conditionnelles

## Blocs de code

Les lignes de code Python peuvent être regroupées en blocs . Vous pouvez savoir quand un bloc commence et se termine à partir de l'indentation des lignes de code. Il existe trois règles pour les blocs.

- Les blocs commencent lorsque l'indentation augmente.
- Les blocs peuvent contenir d'autres blocs.
- Les blocs se terminent lorsque l'indentation diminue jusqu'à zéro ou jusqu'à l'indentation d'un bloc contenant.

Les blocs sont plus faciles à comprendre en regardant du code indenté, alors trouvons les blocs dans une partie d'un petit programme :

```python
if name == 'Alice':
    print('Hello Alice')
if password == 'swordfish':
    print('Accès autorisé.')
else:
    print('Mauvais mot de passe.')

```

## L'instruction `if`

:::tip L'instruction `if`

En langage courant, une déclaration `if` peut être lue comme: "Si cette condition est vraie, exécute le code du bloc suivant".

:::

:::note Exemple

```python
age = 29
if age >= 18:
    print("Vous pouvez voter !")
:::


TODO
