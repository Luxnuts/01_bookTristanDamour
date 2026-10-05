# Mon portfolio — mode d'emploi

> **Pas besoin de tout lire.**
> Cherche ce que tu veux faire dans le sommaire, clique, et suis la recette.
> Une recette = une seule tâche.

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
  - [Récupérer les corrections de la branche « corrections »](#récupérer-les-corrections-de-la-branche--corrections-)
  - [Mettre le site en ligne (GitHub Pages)](#mettre-le-site-en-ligne-github-pages)
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
| Le texte « À propos » | `Lorem` |
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

1. `Ctrl + F` → tape `Lorem`.
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
| `main` | La version **officielle**, celle qui sera en ligne |
| `test` | Ta version de travail actuelle |
| `corrections` | Des corrections proposées, **en attente de ton avis** |
| `master` | Une ancienne branche, tu peux l'ignorer |

> ⚠️ Avant de changer de branche, **valide** ton travail en cours.
> Sinon VS Code refuse, ou tes modifications te suivent sur l'autre branche.

---

### Récupérer les corrections de la branche « corrections »

Sur la branche `corrections`, il y a des améliorations qui t'attendent :

- titres des projets visibles sur téléphone
- plus d'image cassée dans les fiches projet
- logo corrigé sur mobile
- menu dans l'ordre de la page
- menu en barre blanche fixe dès qu'on quitte l'accueil
- tous les textes du site en français (« Art Works » devient « Projets »)
- CSS réécrit en **mobile first** (voir [Téléphone, tablette, ordinateur](#téléphone-tablette-ordinateur))
- bouton d'accueil « Voir mes projets » au lieu de « Scroll to learn more »
- numéro de téléphone retiré de la section Contact (il ne doit pas être public)

**1. Regarder**
En bas à gauche de VS Code, clique sur le nom de la branche → choisis `corrections` → ouvre le site et regarde.
Puis reviens sur `test` pour comparer.

**2. Si ça te plaît : fusionner**
1. Va sur la branche `test`.
2. Dans le terminal de VS Code (`Ctrl + ù`), tape :
   ```
   git merge corrections
   ```
3. C'est fait : `test` contient maintenant tes travaux **et** les corrections.

**3. Si une correction ne te plaît pas**
Chaque correction a son numéro. Pour en annuler une seule après la fusion :
```
git log --oneline
```
Repère le numéro de la correction (une suite de 7 lettres et chiffres, par exemple `574503e` pour le bouton « Voir mes projets »), puis :
```
git revert 574503e
```
Les autres corrections restent en place.

**4. Quand tout est bon sur `test` : mettre à jour `main`**
```
git switch main
git merge test
git push
```

---

### Mettre le site en ligne (GitHub Pages)

GitHub peut héberger ton site **gratuitement**. À faire **une seule fois** :

1. Va sur ton dépôt, sur **github.com**.
2. **Settings** (Paramètres) → dans le menu de gauche, **Pages**.
3. Dans **Branch**, choisis `main` et le dossier `/ (root)` → **Save**.
4. Attends 1 ou 2 minutes, puis recharge la page : l'adresse de ton site s'affiche en haut.

Ensuite, **chaque fois que tu envoies sur `main`**, le site en ligne se met à jour tout seul (compte quelques minutes).

> 💡 Si le site en ligne ne change pas : `Ctrl + F5` pour vider le cache du navigateur.

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
- [ ] Écrire le texte « À propos » (recette E)
- [ ] Ajouter `cv.pdf` (recette F)
- [ ] Ajouter le logo du bas de page : `img/LOGO-TRISTAN-04-2.png` (il manque)
- [x] Remplir toutes les cases de la mosaïque
- [ ] Relire et **réécrire avec mes mots** la description de chaque projet (recette B), surtout : Oral-B, les coverings, Animations, Oasis × Nike, Solid Rénovation
- [ ] Dire ce que j'ai fait dans chaque projet : la demande, mes choix, les logiciels

**Images**
- [ ] Alléger les images trop lourdes pour le web (plus de 1 Mo) : `oasis-nike-maillots.jpg`, `heros-dc.jpg`, `oasis-nike.jpg`, `nespresso-maya.jpg`, `carnaval.jpg`
- [ ] `boite 3.tif` : l'exporter en `.jpg` s'il doit aller dans le projet Étui AirPods, sinon le supprimer
- [ ] Projet Smoothie : il n'y a pas d'image, à ajouter si je veux le montrer

**Finitions**
- [ ] Regarder les corrections de la branche `corrections` et les fusionner ([voir ici](#récupérer-les-corrections-de-la-branche--corrections-))
- [ ] Supprimer les fichiers inutiles : `style.css`, `script.js`, `log5TY!.svg`
- [ ] Créer le fichier `.gitignore` ([voir ici](#ce-quil-ne-faut-pas-mettre-sur-github))

**Mise en ligne**
- [ ] Mettre à jour `main` avec la bonne version
- [ ] Activer GitHub Pages ([voir ici](#mettre-le-site-en-ligne-github-pages))
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
