# NEXUS - Terminal de Transit Digital

Site web style cyberpunk/terminal servant de hub pour naviguer vers différents liens et sites.

## 🚀 Démarrage rapide

### Installation
```bash
npm install
```

### Lancement du serveur de développement
```bash
npm run dev
```

### Build de production
```bash
npm run build
```

## 📁 Structure du projet

```
nexus/
├── src/
│   ├── App.jsx          # Composant principal avec grille de liens
│   ├── main.jsx         # Point d'entrée React
│   └── index.css        # Styles Tailwind + animations cyberpunk
├── media/               # Dossier pour médias (images, vidéos, etc.)
│   └── intra/          # Fichiers personnels (gitignored)
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## 🎨 Design

- **Fond**: Noir anthracite (#1a1a1a)
- **Logo**: Blanc monochrome
- **Accents**: Vert cyber (#00ff41) et bleu cyber (#00d4ff)
- **Typographie**: Monospace (Courier New)
- **Effets**: Glow, shadows, animations de typing

## 🔗 Personnalisation des liens

Modifiez le tableau `links` dans `src/App.jsx` pour ajouter/modifier vos liens:

```javascript
const links = [
  {
    id: 1,
    title: 'VOTRE_TITRE',
    description: 'Description du lien',
    icon: IconName, // Import depuis lucide-react
    url: 'https://votre-url.com',
    color: 'cyber-green' // ou 'cyber-blue'
  },
  // ...
]
```

## 📝 Note importante

Le dossier `media/intra/` est exclu du git (.gitignore) pour vos fichiers personnels.
Créez-le manuellement si nécessaire:

```bash
mkdir media\intra
```

## 🛠️ Technologies

- **Vite** - Build tool
- **React** - Framework UI
- **Tailwind CSS** - Styling
- **Lucide React** - Icônes
