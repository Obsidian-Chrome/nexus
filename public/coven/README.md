# Dossier Coven

Ce dossier contient les ressources du Coven.

## Structure

```
public/coven/
├── coven_logo.png              # Logo du Coven (96px de hauteur)
├── visualizer.json             # Configuration du Visualizer (chargé dynamiquement)
└── visualizer/                 # Fichiers vidéo .webm
    ├── visualizer_coven.webm   # Vidéo par défaut (obligatoire)
    ├── visualizer_hex.webm
    └── ...autres vidéos...
```

## ⚠️ Important : visualizer.json

Le fichier `visualizer.json` est **chargé dynamiquement** par le site. Cela signifie que :

✅ **Vous pouvez le modifier directement sur GitHub** sans rebuild
✅ Les changements sont **immédiatement visibles** après un rafraîchissement du navigateur
✅ Compatible avec l'**intégration Google Sheets** pour mise à jour automatique

### Chemin GitHub pour le script Apps Script
```javascript
const GITHUB_FILE_PATH = 'public/coven/visualizer.json';
```

## Format du JSON

```json
{
  "events": [
    {
      "concert": "Concert HeX",
      "date": "15/06/2026",
      "heureDebut": "20:00",
      "heureFin": "23:30",
      "fichier": "visualizer_hex.webm",
      "hexadecimal": "#FF00FF"
    }
  ],
  "default": {
    "fichier": "visualizer_coven.webm",
    "hexadecimal": ""
  }
}
```

## Fichiers vidéo

Les fichiers `.webm` doivent être placés dans `public/coven/visualizer/`

- Format : WebM (VP8/VP9)
- Optimisé pour le web
- Boucle fluide recommandée
