# Mon portfolio — mode d'emploi

> **Pas besoin de tout lire.**
> Cherche ce que tu veux faire dans le sommaire, clique, et suis la recette.
> Une recette = une seule tâche.

---

## Sommaire

- [Le dossier en un coup d'œil](#le-dossier-en-un-coup-dœil)
- [Avant de modifier : sauvegarder](#avant-de-modifier--sauvegarder)
- [Voir le résultat](#voir-le-résultat)
- **Recettes**
  - [A. Changer l'image d'une case](#a-changer-limage-dune-case)
  - [B. Changer le titre ou le texte d'un projet](#b-changer-le-titre-ou-le-texte-dun-projet)
  - [C. Remplir une case rouge](#c-remplir-une-case-rouge)
  - [D. Ajouter des images de détail dans un projet](#d-ajouter-des-images-de-détail-dans-un-projet)
  - [E. Écrire le texte « À propos »](#e-écrire-le-texte--à-propos-)
  - [F. Mettre ton CV](#f-mettre-ton-cv)
  - [G. Changer la couleur bleue](#g-changer-la-couleur-bleue)
- [Les règles pour les images](#les-règles-pour-les-images)
- [J'ai cassé quelque chose](#jai-cassé-quelque-chose)
- [Ma liste de choses à faire](#ma-liste-de-choses-à-faire)

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
| L'e-mail, le téléphone, le CV | `contact-block` |
| La couleur bleue | `--bleu-principal` |
| Le gros titre de l'accueil | `hero-title` |

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
┌─────────┬──────┬──────────────┬──────┬──────────────┐
│         │  p4  │  p2 Nespresso│  p5  │              │
│  p1     ├──────┴──────────────┴──────┤  p8 Carnaval │
│  Boîte  │                            │              │
├─────────┤   p7  (grand rectangle)    ├──────────────┤
│         │                            │              │
│  p3     ├─────────────┬──────┬───────┤  p11 Héros   │
│ Smoothie│     p9      │  p10 │ p6 (○)│              │
└─────────┴─────────────┴──────┴───────┴──────────────┘
```

Les cases **p4, p5, p6, p7, p9, p10** sont encore **rouges** (vides).

> ⚠️ Ne change pas les mots qui commencent par `box-` (par exemple `box-cafe`).
> Ce sont eux qui placent la case au bon endroit dans la grille.

---

## Recettes

### A. Changer l'image d'une case

1. Mets ta nouvelle image dans le dossier `img/` (voir [les règles pour les images](#les-règles-pour-les-images)).
2. `Ctrl + F` → tape le nom du projet, par exemple `data-project="p2"`.
3. Sur cette ligne, remplace seulement le nom de l'image :

```html
style="background-image: url('img/img_02.jpg');"
                                  ^^^^^^^^^^
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
    mainImage: "img/img_02.jpg",
    desc: "Création et packaging graphique autour de la marque de café Nespresso.",
    imagesBelow: []
},
```

3. Change le texte **entre les guillemets** `" "`. Ne touche pas au reste.

> ⚠️ **Piège n°1 :** n'écris jamais de guillemets droits `"` **dans** ton texte.
> Ça ferme le texte trop tôt et tout casse.
> Pour citer quelque chose, utilise `« »` ou `' '`.

Le petit texte qui apparaît **au survol** de la case est ailleurs :
`Ctrl + F` → `data-project="p2"` → change le `<h3>` (titre) et le `<p>` (sous-titre).

---

### C. Remplir une case rouge

Une case rouge se remplit en **deux étapes** : la case, puis la fiche.

**Étape 1 — la case**

1. `Ctrl + F` → tape le nom de la case, par exemple `data-project="p4"`.
2. Tu trouves ça :

```html
<div class="mosaic-item red-placeholder box-rouge-haut1" data-project="p4">
    <div class="mosaic-overlay"><h3>Test Rouge</h3><p>Placeholder</p></div>
</div>
```

3. Remplace **tout le bloc** par ce modèle, puis change les mots en MAJUSCULES :

```html
<div class="mosaic-item box-rouge-haut1" data-project="p4" style="background-image: url('img/NOM-IMAGE.jpg');">
    <div class="mosaic-overlay"><h3>TITRE</h3><p>SOUS-TITRE</p></div>
</div>
```

Ce qui a changé : `red-placeholder` est **supprimé**, et on a **ajouté** le `style="background-image…"`.
Garde bien le mot `box-…` d'origine (ici `box-rouge-haut1`).

**Étape 2 — la fiche**

1. `Ctrl + F` → tape `projectData`.
2. Juste **avant** la ligne `"p11": {`, colle ce modèle et change les MAJUSCULES :

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

## Ma liste de choses à faire

Coche au fur et à mesure. Une case par séance, c'est déjà très bien. 💪

**Contenu**
- [ ] Écrire le texte « À propos » (recette E)
- [ ] Ajouter `cv.pdf` (recette F)
- [ ] Ajouter les images manquantes : `carnaval.jpg`, `heros.jpg`, `LOGO-TRISTAN-04-2.png`
- [ ] Ajouter les images de détail manquantes : `img_01_zoom.jpg`, `img_01_croquis.jpg`, `img_02_a.jpg`, `img_02_b.jpg` (ou les enlever des fiches)
- [ ] Remplir les cases rouges p4, p5, p6, p7, p9, p10 (recette C)

**Images déjà dans `img/` mais pas encore utilisées**
- [ ] `comis_1.jpg`
- [ ] `oasic_2.jpg`
- [ ] `Fiat_613_odile_tristan.jpg`
- [ ] `img_04.jpg`, `img_05.jpg`, `img_06.jpg`
- [ ] `CHEVAL.gif`
- [ ] `Nepreso mayar_.jpg`, `Nepreso maya_2.jpg` (à renommer sans espaces)
- [ ] `Forme de decoupe_tristan.jpg` (à renommer sans espaces)
- [ ] `boite 3.tif` (à exporter en `.jpg`)

**Finitions**
- [ ] Choisir une seule langue : « Scroll to learn more » et « Art Works » sont en anglais
- [ ] Réfléchir : est-ce que je veux vraiment mon numéro de téléphone sur un site public ?

---

## Petit lexique

| Mot | Ça veut dire |
|---|---|
| **HTML** | Le contenu de la page : textes, images, cases |
| **CSS** | Le style : couleurs, tailles, positions (dans `<style>`, en haut du fichier) |
| **JS** (JavaScript) | Ce qui bouge : le menu, les fiches projet qui s'ouvrent (dans `<script>`, en bas du fichier) |
| **Balise** | Un mot entre `< >`, comme `<p>` ou `<h3>`. Elle s'ouvre `<p>` et se ferme `</p>` |
| **Commit** | Une sauvegarde dans l'historique, pour pouvoir revenir en arrière |
