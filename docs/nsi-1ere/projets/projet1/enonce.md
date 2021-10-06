---
title: Enoncé projet 1
description: Enoncé projet 1 premières
sidebar_position: 1
---

## Consignes

Pour ce premier projet en groupes, vous aurez à réaliser un script qui permet gérer des listes de courses.

Votre projet final doit impérativement comporter:

- les doctrings des différentes fonctions
- des commentaires pour expliquer votre code

Avant de commencer le projet proprement dit, vous allez devoir effectuer quelques expérimentations sur les entrées/sorties et sur les manipulations de fichiers.

Ces expérimentations ne sont pas à intégrer dans le fichier final.

- Gestion des entrées/sorties: [Input et print](entree-sortie)
- Gestion des fichiers: [Gestion des fichiers](gestion-fichiers)

## Sujet du projet

Le projet doit pouvoir gérer une liste de course.

Vous devez avoir un menu d'accueil comme ci-dessous:

```
Que souhaitez-vous faire ?
(C)réer une nouvelle liste de course ?
(O)uvrir une liste de courses existente pour y ajouter des éléments ?
(S)upprimer des éléments de la liste de course ?
(A)fficher la liste de course ?
(Q)uitter le programme ?
Choix:
```

Quand vous choisissez de créer la liste de course, ou d'ouvrir une liste de course existante le programme doit afficher:

```
(A)jouter un élément ou (R)evenir au menu principal ?
```

puis:

```
Element à ajouter :
```

et retour au menu précédent.

Pour l'affichage et la suppression, voici un exemple de déroulé:

```
Que souhaitez-vous faire ?
(C)réer une nouvelle liste de course ?
(O)uvrir une liste de courses existente pour y ajouter des éléments ?
(S)upprimer des éléments de la liste de course ?
(A)fficher la liste de course ?
(Q)uitter le programme ?
Choix: C
(A)jouter un élément ou (R)evenir au menu principal ? A
pomme
(A)jouter un élément ou (R)evenir au menu principal ? A
banane
(A)jouter un élément ou (R)evenir au menu principal ? R
Que souhaitez-vous faire ?
(C)réer une nouvelle liste de course ?
(O)uvrir une liste de courses existente pour y ajouter des éléments ?
(S)upprimer des éléments de la liste de course ?
(A)fficher la liste de course ?
(Q)uitter le programme ?
Choix: O
(A)jouter un élément ou (R)evenir au menu principal ? A
eau
(A)jouter un élément ou (R)evenir au menu principal ? R
Que souhaitez-vous faire ?
(C)réer une nouvelle liste de course ?
(O)uvrir une liste de courses existente pour y ajouter des éléments ?
(S)upprimer des éléments de la liste de course ?
(A)fficher la liste de course ?
(Q)uitter le programme ?
Choix: A
pomme
banane
eau
Que souhaitez-vous faire ?
(C)réer une nouvelle liste de course ?
(O)uvrir une liste de courses existente pour y ajouter des éléments ?
(S)upprimer des éléments de la liste de course ?
(A)fficher la liste de course ?
(Q)uitter le programme ?
Choix: S
Elément à supprimer: choux
Vous n'avez pas de choux dans la liste.
Elément à supprimer: banane
Vous avez supprimé banane.
Que souhaitez-vous faire ?
(C)réer une nouvelle liste de course ?
(O)uvrir une liste de courses existente pour y ajouter des éléments ?
(S)upprimer des éléments de la liste de course ?
(A)fficher la liste de course ?
(Q)uitter le programme ?
Choix: A
pomme
eau

```
