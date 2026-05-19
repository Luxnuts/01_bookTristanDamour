# 01_bookTristanDamour
book


Non, et c'est un excellent réflexe de poser la question ! Ton code actuel est structuré selon une approche **Desktop-First** (l'ordinateur d'abord), et non **Mobile-First**.

Voici la preuve factuelle en analysant ton code, et ce que ça change concrètement pour l'utilisateur.

---

## Pourquoi ton code actuel est "Desktop-First" ?

En développement, le vrai *Mobile-First*, c'est quand on écrit le code de base pour les petits écrans (sans `media queries`), puis qu'on utilise `@media (min-width: ...)` pour ajouter des éléments ou agrandir la mise en page pour les ordinateurs.

Dans ton code, c'est l'inverse :

1. **La structure par défaut est pensée pour l'ordinateur :** Tu définis `columns: 3` par défaut pour ta grille. C'est seulement tout en bas, dans tes `@media (max-width)`, que tu réduis à 2 puis à 1 colonne pour le mobile.
2. **La logique d'interaction dépend de la souris :** Tout ton design repose sur l'effet `:hover` (le survol). C'est cet effet qui révèle le titre du projet et assombrit l'image. Comme le survol n'existe pas sur un écran tactile, cette mécanique a été pensée d'abord pour un ordinateur avec une souris.

---

## Les conséquences de ce choix sur l'UX Mobile

Le fait d'avoir adapté un design d'ordinateur vers le mobile (Desktop-First) crée trois gros points de friction pour tes utilisateurs sur smartphone :

### 1. Le problème du "Double Tap" ou de la surprise

Sur un iPhone ou un Android, quand l'utilisateur va toucher une de tes images :

* Soit le navigateur va simuler un survol (l'overlay apparaît), mais la modale ne s'ouvrira pas. Il faudra cliquer une **deuxième fois** pour l'ouvrir. C'est frustrant.
* Soit la modale s'ouvre **instantanément**. L'utilisateur n'a alors jamais le temps de lire le titre du projet (comme "Projet 01 - Illustration & Concept") qui était caché dans l'overlay.

### 2. Le syndrome du "Pouce Cassé"

Dans ta modale, la croix de fermeture `&times;` est placée tout en haut à droite. Sur les grands smartphones actuels, cette zone est statistiquement la plus difficile à atteindre avec le pouce lorsqu'on tient le téléphone à une main (on appelle ça la *Zone Rouge* en ergonomie mobile).

### 3. Le Carrousel manque de "Swipe"

Ton carrousel mobile fonctionne uniquement si l'utilisateur clique précisément sur les petites flèches gauches et droites. Sur mobile, le comportement naturel et attendu par 99% des gens est de **glisser le doigt (swiper)** pour changer d'image, comme sur Instagram. Devoir viser un bouton de 50px casse le rythme de navigation.

---

## Comment passer ton UX en vrai "Mobile-First" ?

Si tu veux que ton portfolio offre une expérience incroyable sur mobile en priorité, voici les trois corrections chirurgicales à faire :

* **Rendre les titres visibles sous l'image sur Mobile :** Masque l'overlay textuel sur les grands écrans pour garder ton effet au survol, mais sur mobile, affiche le titre du projet textuellement *en dessous* ou *au-dessus* de chaque image de la mosaïque.
* **Repenser les contrôles de la modale :** Place la croix de fermeture en bas au centre, ou rends les boutons plus grands et plus accessibles en bas de l'écran, là où le pouce se pose naturellement.
* **Activer le défilement tactile :** En CSS, tu peux ajouter `overflow-x: auto` et `scroll-snap-type: x mandatory` sur ton carrousel pour que l'utilisateur puisse glisser le doigt de manière fluide d'une image à l'autre sans même avoir besoin des flèches.scm-history-item:/Users/tristanoycal/Documents/01_site%20internet/01_bookTristanDamour?%7B%22repositoryId%22%3A%22scm0%22%2C%22historyItemId%22%3A%22286a39d18784a07d12d5795a901226b60c83bfb0%22%2C%22historyItemDisplayId%22%3A%22286a39d%22%7D