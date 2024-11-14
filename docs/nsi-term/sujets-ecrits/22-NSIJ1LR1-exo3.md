# 22-NSIJ1LR1-exo3

1.a) La requête SELECT titre FROM qcm WHERE date>'2022-01-10' retourne les titres des QCM créés après le 10 janvier 2022.
D'après la table qcm, cela nous donne :

POO (créé le 2022-04-08)
Arbre Parcours (créé le 2022-02-15)

1.b) Pour obtenir les notes de l'élève d'identifiant 4 (Marty Mael), la requête SQL est :
sqlCopySELECT note FROM lien_eleve_qcm WHERE ideleve = 4;
Cette requête retournera :

15 (pour le QCM Arbre Parcours)
20 (pour le QCM Piles-Files)

2.a) La clé primaire composée (ideleve, idqcm) dans la table lien_eleve_qcm empêche qu'un même couple d'identifiants puisse exister en double dans la table. Par définition d'une clé primaire, chaque combinaison doit être unique. Donc un élève (ideleve) ne peut pas avoir plusieurs enregistrements pour un même QCM (idqcm).
2.b) Pour ajouter la note de Marty Mael au QCM POO, il faut ajouter une ligne dans la table lien_eleve_qcm avec :

ideleve = 4 (identifiant de Marty Mael)
idqcm = 2 (identifiant du QCM POO)
note = 18

2.c) Pour ajouter le nouvel élève Lefèvre Kevin, la requête SQL est :
sqlCopyINSERT INTO eleves (nom, prenom)
VALUES ('Lefèvre', 'Kevin');
2.d) Pour supprimer toutes les références à l'élève Dubois Thomas dans la table lien_eleve_qcm :
sqlCopyDELETE FROM lien_eleve_qcm WHERE ideleve = 2;
3.a) La requête complétée pour afficher les noms et prénoms des élèves ayant fait le QCM d'idqcm = 4 :
sqlCopySELECT nom, prenom FROM eleves
JOIN lien_eleve_qcm ON eleves.ideleve = lien_eleve_qcm.ideleve
WHERE idqcm = 4;
3.b) Le résultat de cette requête sera :

Dubois Thomas
Marty Mael
Bikila Abebe


Pour afficher le nom, prénom et note des élèves ayant fait le QCM "Arbre Binaire" :

sqlCopySELECT eleves.nom, eleves.prenom, lien_eleve_qcm.note
FROM eleves
JOIN lien_eleve_qcm ON eleves.ideleve = lien_eleve_qcm.ideleve
JOIN qcm ON lien_eleve_qcm.idqcm = qcm.idqcm
WHERE qcm.titre = 'Arbre Binaire';
Cette requête retournera :

Dubois Thomas, 18
Dupont Cassandra, 18

Cette requête utilise deux jointures :

Entre eleves et lien_eleve_qcm pour lier les élèves à leurs notes
Entre lien_eleve_qcm et qcm pour filtrer spécifiquement le QCM "Arbre Binaire"
