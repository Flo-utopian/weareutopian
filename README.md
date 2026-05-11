# weareutopian.com — Portfolio de Florian Dumont

Stack : Next.js 14 · Sanity CMS · next-intl (FR/EN) · CSS Modules · Vercel

---

## Installation en 6 étapes

### 1. Cloner ou créer le dépôt GitHub

Va sur github.com → "New repository" → nomme-le `weareutopian` → copie tous ces fichiers dedans.

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configurer Sanity

1. Va sur https://sanity.io/manage
2. Clique "Create new project"
3. Nom du projet : `weareutopian`
4. Dataset : `production`
5. Copie ton **Project ID** (ex : `abc12def`)

### 4. Créer le fichier `.env.local`

Copie `.env.local.example` → renomme-le `.env.local` → remplace les valeurs :

```
NEXT_PUBLIC_SANITY_PROJECT_ID=abc12def
NEXT_PUBLIC_SANITY_DATASET=production
```

### 5. Lancer en local

```bash
npm run dev
```

Ton site tourne sur http://localhost:3000
Ton studio Sanity tourne sur http://localhost:3000/studio

### 6. Saisir tes projets dans Sanity

Va sur http://localhost:3000/studio → "Projet" → "+" → ajoute tes 8 projets :

| Titre | Ordre | Couleur | Format |
|-------|-------|---------|--------|
| OXFAM | 1 | Violet | Campagne 360° |
| WWF | 2 | Sombre | Motion Design |
| FEBA | 3 | Rose | Vidéo documentaire |
| EPAH | 4 | Sombre | Campagne 360° |
| Change.org | 5 | Orange | Campagne 360° |
| Colisée de Roubaix | 6 | Sombre | Vidéo documentaire |
| René le bocal à Ramener | 7 | Jaune | Motion Design |
| Eula | 8 | Sombre | Campagne 360° |

---

## Déployer sur Vercel

1. Push ton dépôt sur GitHub
2. Va sur https://vercel.com → "Add New Project" → importe `weareutopian`
3. Dans "Environment Variables", ajoute :
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = ton project ID
   - `NEXT_PUBLIC_SANITY_DATASET` = production
4. Clique "Deploy"

### Connecter weareutopian.com

Dans Vercel → Settings → Domains → ajoute `weareutopian.com` → suis les instructions DNS (pointer vers Vercel depuis ton interface Viaduc).

---

## Structure des fichiers

```
app/
  [locale]/       Pages du site (home, work, contact)
  studio/         Sanity Studio embarqué
components/       Tous les composants React
sanity/           Client, queries, schemas
messages/         Traductions FR et EN
lib/              Navigation locale
```

## Personnalisation

- **Couleurs** : dans `app/globals.css` (variables CSS)
- **Textes** : dans `messages/fr.json` et `messages/en.json`
- **Projets** : dans Sanity Studio
- **Email, LinkedIn, téléphone** : dans `app/[locale]/contact/page.tsx` et `components/ContactStrip.tsx`
- **Liens réseaux sociaux** : dans `components/Footer.tsx`
