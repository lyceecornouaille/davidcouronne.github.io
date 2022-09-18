---
title: Les fonctions
description: Cours de spécialité NSI sur les bases de Python
sidebar_position: 5
---

# Les fonctions

## Quelques fonctions intégrées

### La fonction `print`

:::tip La fonction `print`

La fonction `print` est une fonction native de Python qui permet de réaliser des affichages.

```python
>>> print("Bonjour !")
Bonjour !
>>> print(2+7)
9
```

:::

**Syntaxe avancée:**

- afficher plusieurs valeurs à suivre avec une virgule:

```python
>>> print("Vous avez", 21, "ans.")
Vous avez 21 ans.
```

- changer le **séparateur**:

```python
>>> print(1, 2, 3 , sep="+")
1+2+3
```

- changer la **fin** de l'affichage:

```python
>>> print("Bonjour", end="!")
Bonjour!
```

### La fonction `input`

:::tip La fonction `input`

La fonction `input` permet de récupérer une entrée utilisateur saisie au clavier.

```python
>>> nom  = input("Quel est votre nom ? ")
Quel est votre nom ? Hulk
>>> print(nom)
Hulk
```

:::

:::warning Attention

La fonction `input` récupère uniquement des chaînes de caractères (`str`) !

:::

```python
    >>> age = input("Quel est votre âge ? ")
    Quel est votre âge ? 12
    >>> print(age)
    12
    >>> type(age)
    <class 'str'>
    >>> age + 1
    Traceback (most recent call last):
    File "<input>", line 1, in <module>
    TypeError: can only concatenate str (not "int") to str
```

### La fonction `len`

:::tip La fonction `len`

La fonction `len`permet d'obtenir la longueur d'une valeur **énumérable**. Par exemple une chaîne de caractères:

```python
    >>> mot = "poisson"
    >>> len(mot)
    7
    >>> len("Bonjour tout le monde !")
    23
    >>> len(27)
    Traceback (most recent call last):
    File "<input>", line 1, in <module>
    TypeError: object of type 'int' has no len()
```

:::

## Ecrire une fonction

Python fournit plusieurs fonctions intégrées comme `print`, `input` et `len` , mais vous pouvez également écrire vos propres fonctions. Une fonction est comme un mini-programme dans un programme.

:::tip Fonctions

Une **fonction** est un ensemble d'instruction qui peut recevoir un ou plusieurs arguments (valeurs ou variables), et qui peut renvoyer une ou plusieurs valeurs de retour, ou aucune.

:::

:::note Exemple

```python
def hello()
    print("Hello !")
```

- La première ligne est une instruction `def`, qui définit une fonction nommée `hello()`.

- Le code dans le bloc qui suit l'instruction `def` est le corps de la fonction.

- Le corps de la fonction doit être **indenté**. Soit par une tabulation, soit par des espaces (par convention 4 espaces).

- Ce code est exécuté lorsque la fonction est appelée, et non lorsque la fonction est définie pour la première fois.

:::

:::note Exemple de fonction avec un paramètre

```python
def double(x):
    return 2*x
```

```python
>>> double(15)
30
>>> double('Hulk')
'HulkHulk'
```

:::

:::tip Nommage des fonctions

Par convention, on utilisera le `snake_case` pour nommer les fonctions.

Exemple: `calcul_de_la_moyenne()`

:::

## Bonnes pratiques pour les fonctions

Reprenons l'exemple:

```python
    def double(x):
        return 2*x
```

Nous devons documenter la fonction pour expliquer à quoi elle sert.

:::tip La docstring

Les docstrings sont des chaines de documentation qui doivent être placées juste en dessous des définitions de fonction ou de classe, ou bien tout en haut d'un module.

:::

:::note Exemple

```python
def double(x):
    """Fonction qui renvoie le double du nombre x"""
    return 2*x
```

:::

:::info Le typage des variables

C'est une bonne pratique d'indiquer le type de variable directement dans la fonction.

Pour en savoir plus, vous pouvez lire l'article: [https://infocornouaille.github.io/nsi-cornouaille/ressources/types/](https://infocornouaille.github.io/nsi-cornouaille/ressources/types/)

:::

## Portée locale et globale des variables

Les paramètres et les variables assignés dans une fonction appelée sont censés exister dans la **portée locale** de cette fonction .

Les variables affectées en dehors de toutes les fonctions sont censées exister dans la **portée globale** .

Une variable qui existe dans une portée locale est appelée une variable locale , tandis qu'une variable qui existe dans la portée globale est appelée une variable globale .

Une variable doit être l'une ou l'autre ; elle ne peut pas être à la fois locale et globale.

Considérez une portée comme un conteneur de variables. Lorsqu'une portée est détruite, toutes les valeurs stockées dans les variables de la portée sont oubliées. Il n'y a qu'une seule portée globale, et elle est créée au démarrage de votre programme. Lorsque votre programme se termine, la portée globale est détruite et toutes ses variables sont oubliées. Sinon, la prochaine fois que vous exécuterez votre programme, les variables se souviendront de leurs valeurs de la dernière fois que vous l'avez exécuté.

Une portée locale est créée chaque fois qu'une fonction est appelée. Toutes les variables affectées dans cette fonction existent dans la portée locale. Lorsque la fonction revient, la portée locale est détruite et ces variables sont oubliées. La prochaine fois que vous appellerez cette fonction, les variables locales ne se souviendront pas des valeurs qui y sont stockées depuis le dernier appel de la fonction.

Les champs d'application sont importants pour plusieurs raisons :

- Le code dans la portée globale ne peut pas utiliser de variables locales.
- Cependant, une portée locale peut accéder à des variables globales.
- Le code dans la portée locale d'une fonction ne peut pas utiliser de variables dans une autre portée locale.
- Vous pouvez utiliser le même nom pour différentes variables si elles se trouvent dans des portées différentes. Autrement dit, il peut y avoir une variable locale nommée `spam` et une variable globale également nommée `spam`.

La raison pour laquelle Python a des portées différentes au lieu de simplement faire de tout une variable globale est que lorsque les variables sont modifiées par le code dans un appel particulier à une fonction, la fonction interagit avec le reste du programme uniquement via ses paramètres et la valeur de retour. Cela réduit les lignes de code de la liste qui peuvent être à l'origine d'un bogue. Si votre programme ne contenait que des variables globales et avait un bogue parce qu'une variable était définie sur une mauvaise valeur, il serait alors difficile de retrouver où cette mauvaise valeur a été définie. Il aurait pu être défini depuis n'importe où dans le programme - et votre programme pourrait comporter des centaines ou des milliers de lignes ! Mais si le bogue est dû à une variable locale avec une mauvaise valeur, vous savez que seul le code de cette fonction peut l'avoir défini de manière incorrecte.

:::warning Les variables globales, c'est le mal !

Bien que l'utilisation de variables globales dans de petits programmes soit acceptable, c'est une mauvaise habitude de s'appuyer sur des variables globales à mesure que vos programmes deviennent de plus en plus volumineux.

:::

### Les variables locales ne peuvent pas être utilisées dans la portée globale

Considérez ce programme, qui provoquera une erreur lorsque vous l'exécuterez :

```python
def spam():
    eggs = 31337
spam()
print(eggs)
```

Si vous exécutez ce programme, la sortie ressemblera à ceci :

```python
Traceback (most recent call last):
  File "<input>", line 4, in <module>
NameError: name 'eggs' is not defined
```

L'erreur se produit car la variable `eggs`n'existe que dans la portée locale créée lors de l'appel `spam()`. Une fois que l'exécution du programme revient de `spam`, cette portée locale est détruite et il n'y a plus de variable nommée `eggs`. Ainsi, lorsque votre programme essaie de s'exécuter `print(eggs)`, Python vous renvoie une erreur indiquant que `eggs` n'est pas défini.

Cela a du sens si vous y réfléchissez; lorsque l'exécution du programme est dans la portée globale, aucune portée locale n'existe, il ne peut donc pas y avoir de variables locales. C'est pourquoi seules les variables globales peuvent être utilisées dans la portée globale.

### Les étendues locales ne peuvent pas utiliser de variables dans d'autres étendues locales

Une nouvelle portée locale est créée chaque fois qu'une fonction est appelée, y compris lorsqu'une fonction est appelée à partir d'une autre fonction. Considérez ce programme :

```python
def spam():
    eggs = 99
    bacon()
    print(eggs)

def bacon():
    ham = 101
    eggs = 0

spam()
```

Lorsqu'on exécute ce srcipt, cela donne:

```python
99
```

Lorsque le programme démarre:

1. la fonction `spam()` est appelée et une portée locale est créée. La variable locale `eggs` vaut 99.
2. Ensuite, la fonction `bacon()` est appelée, et une seconde portée locale est créée. Plusieurs étendues locales peuvent exister en même temps. Dans cette nouvelle portée locale, la variable locale `ham` est définie sur 101, et une variable locale `eggs`— qui est différente de celle de la portée locale de`spam()` — est également créée et définie sur 0.

3. Lors du retour de `bacon()`, la portée locale de cet appel est détruite. L'exécution du programme se poursuit dans la fonction `spam()` pour afficher la valeur de `eggs`, et puisque la portée locale pour l'appel à `spam()` existe toujours ici, la variable `eggs` est définie sur 99. C'est ce que le programme affiche.

Le résultat est que les variables locales d'une fonction sont complètement séparées des variables locales d'une autre fonction.

### Les variables globales peuvent être lues à partir d'une portée locale

Considérez le programme suivant :

```python
def spam():
    print(eggs)

eggs = 42
spam()
print(eggs)
```

Puisqu'il n'y a pas de paramètre nommé `eggs`, ou de code qui attribue à `eggs` une valeur dans la fonction `spam()`, lorsque `eggs` est utilisé dans `spam()`, Python le considère comme une référence à la variable globale `eggs`. C'est pourquoi 42 est affiché lors de l'exécution du programme précédent.
