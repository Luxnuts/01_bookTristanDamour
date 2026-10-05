# Mon portfolio — mode d'emploi

> **Pas besoin de tout lire.**
> Cherche ce que tu veux faire dans le sommaire, clique, et suis la recette.
> Une recette = une seule tâche.

🌐 **Mon site en ligne :** https://luxnuts.github.io/01_bookTristanDamour/
📦 **Mon dépôt GitHub :** https://github.com/Luxnuts/01_bookTristanDamour
✏️ **Je travaille sur la branche :** `main`

---

## Sommaire

- [Le dossier en un coup d'œil](#le-dossier-en-un-coup-dœil)
- [Trouver un endroit dans le code](#trouver-un-endroit-dans-le-code)
- [Téléphone, tablette, ordinateur](#téléphone-tablette-ordinateur)
- [Avant de modifier : sauvegarder](#avant-de-modifier--sauvegarder)
- [Voir le résultat](#voir-le-résultat)
- [La carte de la mosaïque](#la-carte-de-la-mosaïque)
- **Recettes**
  - [A. Changer l'image d'une case](#a-changer-limage-dune-case)
  - [B. Changer le titre ou le texte d'un projet](#b-changer-le-titre-ou-le-texte-dun-projet)
  - [C. Remplacer un projet par un nouveau](#c-remplacer-un-projet-par-un-nouveau)
  - [D. Ajouter des images de détail dans un projet](#d-ajouter-des-images-de-détail-dans-un-projet)
  - [E. Écrire le texte « À propos »](#e-écrire-le-texte--à-propos-)
  - [F. Mettre ton CV](#f-mettre-ton-cv)
  - [G. Changer la couleur bleue](#g-changer-la-couleur-bleue)
- [Les règles pour les images](#les-règles-pour-les-images)
- [J'ai cassé quelque chose](#jai-cassé-quelque-chose)
- **GitHub**
  - [Comment ça marche (en 1 minute)](#comment-ça-marche-en-1-minute)
  - [Ma routine à chaque séance](#ma-routine-à-chaque-séance)
  - [Les branches](#les-branches)
  - [Passer sur la branche main (une seule fois)](#passer-sur-la-branche-main-une-seule-fois)
  - [Annuler une correction](#annuler-une-correction)
  - [Mon site en ligne (GitHub Pages)](#mon-site-en-ligne-github-pages)
  - [Ce qu'il ne faut pas mettre sur GitHub](#ce-quil-ne-faut-pas-mettre-sur-github)
  - [Problèmes fréquents avec GitHub](#problèmes-fréquents-avec-github)
- [Ma liste de choses à faire](#ma-liste-de-choses-à-faire)
- [Petit lexique](#petit-lexique)

---

## Le dossier en un coup d'œil

| Fichier / dossier | C'est quoi ? | Je touche ? |
|---|---|---|
| `index.html` | **Tout le site** (le texte, le style et le code) | ✅ Oui |
| `img/` | Toutes les images | ✅ Oui |
| `cv.pdf` | Ton CV (à ajouter) | ✅ Oui |
| `style.css`, `script.js` | Anciens fichiers, **plus utilisés** | ❌ Non |
| `.DS_Store`, `.git`, `.vscode` | Fichiers techniques | ❌ Jamais |

👉 **Retiens juste ça : tout se passe dans `index.html` et dans `img/`.**

---

## Trouver un endroit dans le code

Ne cherche pas avec les numéros de ligne : ils changent dès que tu ajoutes quelque chose.

**Utilise la recherche :** `Ctrl + F` (ou `Cmd + F` sur Mac), puis tape un **mot-clé** :

| Je veux modifier… | Je tape ce mot-clé |
|---|---|
| Les cases de la mosaïque | `mosaic-item` |
| Les fiches des projets (titre, texte, images) | `projectData` |
| Le texte « À propos » | `Élève motivé` |
| L'e-mail et le CV | `contact-block` |
| La couleur bleue | `--bleu-principal` |
| Le gros titre de l'accueil | `hero-title` |
| Le style **tablette** | `min-width: 601px` |
| La grille 7 colonnes (**ordinateur**) | `min-width: 901px` |
| Le menu et les fiches projet (**ordinateur**) | `min-width: 1025px` |

---

## Téléphone, tablette, ordinateur

Le style est écrit **« mobile first »** : on écrit d'abord la version **téléphone**, puis on ajoute ce qui change pour les écrans plus grands.

- **Le haut du `<style>`** = la version **téléphone**.
- **Tout en bas du `<style>`**, trois blocs ajoutent des changements :

| Bloc | S'applique à partir de… | Exemple |
|---|---|---|
| `@media (min-width: 601px)` | tablette | grille sur 3 colonnes |
| `@media (min-width: 901px)` | grande tablette, petit ordi | grille sur 7 colonnes |
| `@media (min-width: 1025px)` | ordinateur | menu en haut, plus de burger ☰ |

👉 Je veux changer un truc **partout** : je modifie en haut.
👉 Je veux changer un truc **seulement sur ordinateur** : je modifie dans le bon bloc en bas.

Pour tester la version téléphone sur l'ordinateur : dans le navigateur, `F12`, puis l'icône 📱 (ou `Ctrl + Maj + M`).

---

## Avant de modifier : sauvegarder

À faire **avant** chaque séance de travail. Ça prend 20 secondes et ça permet de revenir en arrière si ça casse.

1. Dans VS Code, clique sur l'icône **Contrôle de code source** (à gauche, l'icône avec trois ronds reliés).
2. Écris un petit message en haut, par exemple : `avant de changer les images`.
3. Clique sur **Valider** (ou **Commit**).

C'est fait. ✅

---

## Voir le résultat

**Le plus simple :** installe l'extension **Live Server** dans VS Code (une seule fois).
Ensuite : clic droit sur `index.html` → **Open with Live Server**.
La page se met à jour toute seule à chaque fois que tu enregistres (`Ctrl + S`).

**Sans extension :** double-clic sur `index.html` dans le dossier.
Après une modification : enregistre, puis appuie sur `Ctrl + F5` dans le navigateur.

> 💡 Bonne habitude : **une modification → j'enregistre → je regarde**.
> Si ça casse, tu sais tout de suite ce qui l'a cassé.

---

## La carte de la mosaïque

Chaque case a un **nom de projet** (`p1`, `p2`…). Voici où elles sont :

```
┌─────────┬────────┬──────────────┬────────┬──────────────┐
│         │  p4    │  p2          │  p5    │              │
│  p1     │ Roméo  │  Nespresso   │ Odile  │  p8 Carnaval │
│ Étui    ├────────┴──────────────┴────────┤              │
│ AirPods │                                ├──────────────┤
├─────────┤   p7  Oasis × Nike             │              │
│         │       (grand rectangle)        │  p11 Héros   │
│  p3     ├─────────────────┬────────┬─────┤              │
│ Oral-B  │  p9 Solid       │  p10   │ p6 ○│              │
│         │  Rénovation     │ Cindy  │Anim.│              │
└─────────┴─────────────────┴────────┴─────┴──────────────┘
```

Toutes les cases sont remplies. Pour mettre un nouveau projet à la place d'un ancien : [recette C](#c-remplacer-un-projet-par-un-nouveau).

> ⚠️ Ne change pas les mots qui commencent par `box-` (par exemple `box-cafe`).
> Ce sont eux qui placent la case au bon endroit dans la grille.

---

## Recettes

### A. Changer l'image d'une case

1. Mets ta nouvelle image dans le dossier `img/` (voir [les règles pour les images](#les-règles-pour-les-images)).
2. `Ctrl + F` → tape le nom du projet, par exemple `data-project="p2"`.
3. Sur cette ligne, remplace seulement le nom de l'image :

```html
style="background-image: url('img/nespresso-maya.jpg');"
                                  ^^^^^^^^^^^^^^^^^^
                                  ici
```

4. Fais la même chose dans la fiche du projet (recette B, ligne `mainImage`).
5. Enregistre et regarde.

---

### B. Changer le titre ou le texte d'un projet

1. `Ctrl + F` → tape `projectData`.
2. Trouve la fiche du projet, elle ressemble à ça :

```js
"p2": {
    title: "Nespresso Concept",
    mainImage: "img/nespresso-maya.jpg",
    desc: "Création et packaging graphique autour de la marque de café Nespresso.",
    imagesBelow: ["img/nespresso-bandeau.jpg"]
},
```

3. Change le texte **entre les guillemets** `" "`. Ne touche pas au reste.

> ⚠️ **Piège n°1 :** n'écris jamais de guillemets droits `"` **dans** ton texte.
> Ça ferme le texte trop tôt et tout casse.
> Pour citer quelque chose, utilise `« »` ou `' '`.

Le petit texte qui apparaît **au survol** de la case est ailleurs :
`Ctrl + F` → `data-project="p2"` → change le `<h3>` (titre) et le `<p>` (sous-titre).

---

### C. Remplacer un projet par un nouveau

Un projet se change en **deux étapes** : la case, puis la fiche.
Exemple : mettre un nouveau projet à la place de **p4** (Roméo).

**Étape 1 — la case**

1. `Ctrl + F` → tape `data-project="p4"`.
2. Tu trouves ça :

```html
<div class="mosaic-item box-rouge-haut1" data-project="p4" style="background-image: url('img/covering-kangoo-romeo.jpg');">
    <div class="mosaic-overlay"><h3>Roméo</h3><p>Covering</p></div>
</div>
```

3. Change seulement **3 choses** : le nom de l'image, le titre `<h3>` et le sous-titre `<p>`.
   Garde bien le mot `box-…` (ici `box-rouge-haut1`) : c'est lui qui place la case.

**Étape 2 — la fiche**

1. `Ctrl + F` → tape `"p4": {`.
2. Change le titre, l'image et la description :

```js
"p4": {
    title: "TITRE",
    mainImage: "img/NOM-IMAGE.jpg",
    desc: "DESCRIPTION DU PROJET",
    imagesBelow: []
},
```

> ⚠️ **Piège n°2 :** chaque fiche finit par `},` (accolade + **virgule**).
> Si la virgule manque, plus aucun projet ne s'ouvre.

3. Enregistre, regarde, clique sur la case pour vérifier que la fiche s'ouvre.

> 💡 **Choisir la bonne case selon l'image :**
> image **verticale** → p1 ou p3 · image **horizontale** → p2, p7 ou p9 · image **carrée** → p8 ou p11 · petite image → p4, p5, p10 ou le rond p6.

---

### D. Ajouter des images de détail dans un projet

Dans la fiche du projet (recette B), la ligne `imagesBelow` contient la liste des images affichées sous le texte.

- Pas d'image : `imagesBelow: []`
- Une image : `imagesBelow: ["img/detail.jpg"]`
- Plusieurs images : `imagesBelow: ["img/detail-1.jpg", "img/detail-2.jpg"]`

Chaque image entre guillemets, séparées par une **virgule**.

---

### E. Écrire le texte « À propos »

1. `Ctrl + F` → tape `Élève motivé` (le début du texte).
2. Remplace le texte entre `<p>` et `</p>` par ta présentation.
3. Pour faire un nouveau paragraphe, ajoute un autre `<p>…</p>` en dessous.

Idées de contenu : qui tu es, ta formation, ce que tu aimes faire en graphisme, les logiciels que tu utilises.

---

### F. Mettre ton CV

1. Exporte ton CV en PDF.
2. Renomme-le exactement **`cv.pdf`** (tout en minuscules).
3. Mets-le **à côté de `index.html`** (pas dans `img/`).

C'est tout, le bouton « Télécharger » marche tout seul.

---

### G. Changer la couleur bleue

1. `Ctrl + F` → tape `--bleu-principal`.
2. Change le code couleur (par exemple `#6aa6d9`). Tu peux copier le code depuis Photoshop ou Illustrator.

La couleur change **partout** sur le site d'un seul coup.

---

## Les règles pour les images

| ✅ À faire | ❌ À éviter |
|---|---|
| `nespresso-boite.jpg` | `Nepreso maya_2.jpg` (espaces, majuscules) |
| minuscules, tirets `-` | accents : `é`, `è`, `à` |
| `.jpg` pour les photos | `.tif` (le navigateur ne l'affiche pas) |
| `.png` ou `.svg` pour les logos | images très lourdes |

**Taille :** exporte **pour le web** (Photoshop : *Fichier → Exporter → Exporter sous*).
Vise une image légère : si le fichier fait plus de **1 Mo**, réduis-la.

> ⚠️ **Piège n°3 :** le nom dans le code doit être **exactement** le même que le nom du fichier.
> `Carnaval.jpg` et `carnaval.jpg`, ce n'est **pas** pareil pour un site en ligne.

---

## J'ai cassé quelque chose

Pas de panique, c'est normal, ça arrive à tout le monde.

**1. Annuler :** `Ctrl + Z` plusieurs fois dans VS Code, puis enregistre.

**2. Vérifier les 3 pièges les plus courants :**

- [ ] Un guillemet `"` oublié ou en trop ?
- [ ] Une virgule oubliée après `}` dans `projectData` ?
- [ ] Le nom de l'image est-il exactement le même que le fichier (majuscules, `.jpg`/`.png`) ?

**3. Revenir à la dernière sauvegarde :**
Contrôle de code source → clic droit sur `index.html` → **Ignorer les modifications** (*Discard Changes*).
⚠️ Ça efface tout ce que tu as fait depuis ta dernière sauvegarde.

---

## GitHub

### Comment ça marche (en 1 minute)

Il y a **deux endroits** où vit ton site :

```
   TON ORDINATEUR                         GITHUB (sur internet)
  ┌──────────────────┐                   ┌──────────────────┐
  │                  │  ── Envoyer ──▶   │                  │
  │  ton dossier     │     (push)        │  ton dépôt       │
  │  + l'historique  │                   │  (copie en ligne)│
  │                  │  ◀── Récupérer ── │                  │
  └──────────────────┘     (pull)        └──────────────────┘
```

Trois actions à connaître, c'est tout :

| Action | En anglais | Ce que ça fait | Où ? |
|---|---|---|---|
| **Valider** | *commit* | Prend une « photo » de ton travail, **sur ton ordi** | Ordi seulement |
| **Envoyer** | *push* | Envoie tes photos **sur GitHub** | Ordi → GitHub |
| **Récupérer** | *pull* | Ramène sur ton ordi ce qui a changé sur GitHub | GitHub → Ordi |

> 💡 **Valider ne suffit pas !** Tant que tu n'as pas **envoyé**, ton travail n'est **que sur ton ordi**.
> Si ton ordi tombe en panne, il est perdu.

Dans VS Code, le bouton **Synchroniser les modifications** (*Sync Changes*) fait **Récupérer + Envoyer** d'un seul clic.

---

### Ma routine à chaque séance

Toujours dans le même ordre. Tu peux garder cette liste ouverte à côté.

**En arrivant**
- [ ] Ouvre le dossier dans VS Code
- [ ] **Contrôle de code source** (l'icône avec trois ronds reliés) → **Synchroniser** (ou `…` → **Tirer** / *Pull*)

**Pendant**
- [ ] Une modification → j'enregistre (`Ctrl + S`) → je regarde le résultat
- [ ] Quand un petit morceau marche : **Valider** avec un message clair

**En partant**
- [ ] **Valider** ce qui reste
- [ ] **Synchroniser** pour tout envoyer sur GitHub
- [ ] Vérifier sur github.com que ton dernier message apparaît

**Écrire un bon message de commit** : dis **ce que tu as fait**, en quelques mots.

| ✅ Bon message | ❌ Message inutile |
|---|---|
| `ajoute le projet carnaval` | `modif` |
| `écrit le texte à propos` | `test` |
| `remplace l'image nespresso` | `aaaa` |

Dans 3 mois, tu seras content de retrouver facilement le bon moment dans l'historique.

---

### Les branches

Une **branche**, c'est une **copie de travail** du site. On peut tester des choses dessus sans abîmer la version principale.

Tu vois sur quelle branche tu es **en bas à gauche** de VS Code. Clique dessus pour changer de branche.

| Branche | À quoi elle sert |
|---|---|
| `main` | ✅ **La version officielle, celle qui est en ligne.** C'est **ici** que tu travailles. |
| `corrections` | Les corrections faites avec Claude. Elles sont **déjà dans `main`**, tu peux l'ignorer. |
| `ancienne-version` | L'ancienne `main` (mai 2026), gardée en archive. Tu peux l'ignorer. |
| `test`, `master` | Anciennes branches, tu peux les ignorer. |

> ⚠️ Avant de changer de branche, **valide** ton travail en cours.
> Sinon VS Code refuse, ou tes modifications te suivent sur l'autre branche.

---

### Passer sur la branche main (une seule fois)

Tout le travail (tes projets + les corrections) est maintenant sur **`main`**.
Sur ton Mac, dans le **Terminal**, dans le dossier du site, tape **une seule fois** :

```
git fetch
git switch main
git pull
```

Vérifie en bas à gauche de VS Code : il doit être écrit **`main`**.
Ensuite, tu restes toujours sur `main` et tu suis [ta routine](#ma-routine-à-chaque-séance).

**Ce qui a changé sur `main` (octobre 2026)**

- tous les projets placés dans la mosaïque, images renommées proprement
- texte « À propos » écrit, logo du menu repris en bas de page
- titres des projets visibles sur téléphone, plus d'image cassée dans les fiches
- menu en barre blanche fixe dès qu'on quitte l'accueil, dans l'ordre de la page
- CSS réécrit en **mobile first** (voir [Téléphone, tablette, ordinateur](#téléphone-tablette-ordinateur))
- tous les textes en français, bouton d'accueil « Voir mes projets »
- numéro de téléphone retiré de la section Contact (il ne doit pas être public)

---

### Annuler une correction

Si un changement ne te plaît pas, tu peux l'annuler **tout seul**, sans toucher aux autres.

1. Dans le Terminal, affiche l'historique :
   ```
   git log --oneline
   ```
2. Repère la ligne du changement. Le numéro, c'est la suite de 7 lettres et chiffres au début (par exemple `574503e` pour le bouton « Voir mes projets »).
3. Tape :
   ```
   git revert 574503e
   git push
   ```

Git crée un nouvel enregistrement qui défait ce changement. Rien n'est effacé de l'historique.

---

### Mon site en ligne (GitHub Pages)

Ton site est publié avec **GitHub Pages**, à partir de la branche **`main`** :

👉 **https://luxnuts.github.io/01_bookTristanDamour/**

**Chaque fois que tu envoies sur `main`** (Synchroniser ou `git push`), le site en ligne se met à jour **tout seul**. Compte 1 à 2 minutes.

Pour voir où en est la mise en ligne : sur ton dépôt GitHub, onglet **Actions**. Un rond orange = en cours, une coche verte ✅ = en ligne, une croix rouge ❌ = problème.

> 💡 Si le site en ligne ne change pas : attends 2 minutes, puis `Ctrl + F5` (ou `Cmd + Maj + R` sur Mac) pour vider le cache du navigateur.

> ⚠️ Tout ce qui est sur `main` est **public** : vérifie bien avant d'envoyer (voir juste en dessous).

---

### Ce qu'il ne faut pas mettre sur GitHub

Un dépôt public, **tout le monde peut le lire**. Et ce qui a été envoyé **reste dans l'historique**, même si tu le supprimes après.

- ❌ Ton **numéro de téléphone**, ton **adresse**
- ❌ Des **mots de passe**
- ❌ Des fichiers énormes (vidéos, fichiers `.psd` ou `.ai` de travail) : garde-les ailleurs
- ❌ `.DS_Store` (fichier caché créé par les Mac, inutile)

Pour que Git **ignore** `.DS_Store` pour toujours : crée un fichier nommé `.gitignore` à côté de `index.html`, avec dedans :
```
.DS_Store
```

---

### Problèmes fréquents avec GitHub

**« Envoyer » est refusé (*rejected*, *push failed*)**
→ Quelqu'un (ou toi depuis un autre ordi) a envoyé des choses avant toi.
Fais d'abord **Récupérer** (*Pull*), puis **Envoyer** à nouveau.

**VS Code parle de « conflit » (*merge conflict*)**
→ Le même endroit d'un fichier a été modifié de deux façons différentes.
VS Code te montre les deux versions en couleur, avec des boutons au-dessus :
- **Accepter la modification actuelle** = garder **ta** version
- **Accepter la modification entrante** = garder **l'autre** version
- **Accepter les deux** = garder les deux

Choisis, enregistre, puis **Valider**. Si tu as un doute : demande de l'aide **avant** de valider.

**VS Code demande de se connecter à GitHub**
→ C'est normal la première fois. Clique sur **Autoriser** et connecte-toi avec ton compte GitHub dans le navigateur.

**J'ai validé quelque chose par erreur (mais pas encore envoyé)**
→ Contrôle de code source → `…` → **Validation** → **Annuler la dernière validation** (*Undo Last Commit*).
Tes modifications reviennent, rien n'est perdu.

---

## Ma liste de choses à faire

Coche au fur et à mesure. Une case par séance, c'est déjà très bien. 💪

**Contenu**
- [x] Écrire le texte « À propos » (recette E)
- [ ] Ajouter `cv.pdf` (recette F)
- [x] Logo du bas de page : le même que celui du menu (`img/logo.svg`)
- [x] Remplir toutes les cases de la mosaïque
- [ ] Relire et **réécrire avec mes mots** la description de chaque projet (recette B), surtout : Oral-B, les coverings, Animations, Oasis × Nike, Solid Rénovation
- [ ] Dire ce que j'ai fait dans chaque projet : la demande, mes choix, les logiciels

**Images**
- [ ] Alléger les images trop lourdes pour le web (plus de 1 Mo) : `oasis-nike-maillots.jpg`, `heros-dc.jpg`, `oasis-nike.jpg`, `nespresso-maya.jpg`, `carnaval.jpg`
- [ ] `boite 3.tif` : l'exporter en `.jpg` s'il doit aller dans le projet Étui AirPods, sinon le supprimer
- [ ] Projet Smoothie : il n'y a pas d'image, à ajouter si je veux le montrer

**Finitions**
- [x] Corrections fusionnées dans `main`
- [ ] Mettre la même formation sur l'accueil (« RPIP ») et dans « À propos » (« Communication Visuelle Plurimédia »)
- [ ] Supprimer les fichiers inutiles : `style.css`, `script.js` (et `img/logo-tristan.svg`, le logo « Trist.D », si je ne m'en sers pas)
- [ ] Créer le fichier `.gitignore` ([voir ici](#ce-quil-ne-faut-pas-mettre-sur-github))

**Mise en ligne**
- [x] Mettre à jour `main` avec la bonne version
- [x] GitHub Pages activé ([voir ici](#mon-site-en-ligne-github-pages))
- [ ] Sur mon Mac : [passer sur la branche main](#passer-sur-la-branche-main-une-seule-fois)
- [ ] Ouvrir le site en ligne sur mon téléphone pour vérifier

---

## Petit lexique

| Mot | Ça veut dire |
|---|---|
| **HTML** | Le contenu de la page : textes, images, cases |
| **CSS** | Le style : couleurs, tailles, positions (dans `<style>`, en haut du fichier) |
| **JS** (JavaScript) | Ce qui bouge : le menu, les fiches projet qui s'ouvrent (dans `<script>`, en bas du fichier) |
| **Balise** | Un mot entre `< >`, comme `<p>` ou `<h3>`. Elle s'ouvre `<p>` et se ferme `</p>` |
| **Git** | Le logiciel qui garde l'historique de ton site, sur ton ordi |
| **GitHub** | Le site internet qui garde une copie en ligne de ton dépôt |
| **Dépôt** (*repository*, *repo*) | Ton projet + tout son historique |
| **Commit** (Valider) | Une sauvegarde dans l'historique, pour pouvoir revenir en arrière |
| **Push** (Envoyer) | Envoyer tes commits sur GitHub |
| **Pull** (Récupérer, Tirer) | Ramener sur ton ordi ce qui a changé sur GitHub |
| **Branche** | Une copie de travail du site, pour tester sans abîmer la version principale |
| **Merge** (Fusionner) | Réunir le travail d'une branche dans une autre |
| **GitHub Pages** | Le service gratuit de GitHub qui met ton site en ligne |
