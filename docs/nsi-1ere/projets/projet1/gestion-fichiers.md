---
title: Gestion de fichiers
description: Gestion de fichiers
sidebar_position: 3
---

## Gestion des fichiers

Il est possible de lire ou d'écrire des données dans un fichier extérieur.

La première des choses à faire est d'ouvrir notre fichier texte. Pour ce faire nous utiliserons la méthode `open`.

Une fois le fichier ouvert, il est possible d'écrire dedans (à l'aide de `write`) ou de lire son contenu (à l'aide de `read`).

Étudiez et testez le programme suivant :

```python
nom = input('Entrez un mot')
with open('fichier.txt','a') as f :
	f.write(nom)
```

Le répertoire courant devrait maintenant contenir aussi un fichier « fichier.txt ». Ouvrez ce fichier et vérifiez qu'il contient bien le mot entré par l'utilisateur.

:::info méthode open
La méthode `open` prend 2 paramètres : le nom du fichier et le mode d'ouverture du fichier :

Il existe 3 modes d'ouverture :

- 'r ' : ouverture en lecture
- 'w' : ouverture en écriture. Le contenu du fichier est écrasé. Si le fichier n'existe pas, il est créé.
- 'a' : ouverture en écriture en mode ajout. On écrit à la fin du fichier sans écraser l'ancien contenu du fichier. Si le fichier n'existe pas, il est créé.

Une fois le fichier ouvert, il est possible d'écrire dedans (à l'aide de `write`) ou de lire son contenu (à l'aide de `read`).
:::

:::info with
Nous utilisons ici une structure particulière que nous n'avons encore jamais rencontrée : le "with". Ce "with" indique que nous allons utiliser un "context manager". Pour le moment, vous avez juste besoin de savoir que son utilisation permet de manipuler des fichiers externes "proprement".
:::

Étudiez et testez le programme suivant :

```python
with open('fichier.txt','r') as f :
	ligne = f.read()
```

Que va contenir la variable ligne après l'exécution de ce programme ? Vérifiez votre réponse.

## Lecture/écriture

Testez le programme suivant:

```python
liste_mots = ['bateau', 'oiseau', 'grenouille']
with open('fichier.txt','w') as f :
	for mot in liste_mots:
        f.write(mot)
```

Ouvrez le fichier `fichier.txt`. Le contenu ne devrait pas être très joli... les mots sont tous collés !

:::info Forcer le passage à la ligne
Il est tout à fait possible de « forcer » le saut de ligne en utilisant la suite de caractères suivante: `\n` (l'enchaînement des caractères `\` et `n` entraîne un "retour chariot").

Testez avec:

```python
print('hello \n world')
```

:::

Nous pouvons donc modifier notre script:

```python
liste_mots = ['bateau', 'oiseau', 'grenouille']
with open('fichier.txt','w') as f :
	for mot in liste_mots:
        f.write(f"{mot}\n") #formatage du texte pour ajouter \n
```

Voici un programme permettant de lire le fichier texte et de ranger les différents mots dans une liste, testez ce programme :

```python
mots = []
with open('fichier.txt','r') as f :
    for ligne in f:
        ligne = ligne.replace("\n","")
        mots.append(ligne)
```

:::info replace
`ligne.replace("\n","")` permet d'enlever la suite de caractères `\n`, car même si `\n` n'est pas visible dans le fichier texte, elle est tout de même présente.
:::
