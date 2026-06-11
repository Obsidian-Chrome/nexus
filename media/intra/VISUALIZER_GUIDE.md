# Guide d'utilisation du Visualizer

Le Visualizer est une sous-section du site Coven qui permet d'afficher des vidéos webm avec des filtres de couleur selon un planning défini.

## 🎯 Accès

Le Visualizer est accessible via :
- URL Coven : `https://www.nexusxiv.fr/#coven` puis cliquer sur "Visualizer"
- URL directe : `https://www.nexusxiv.fr/#coven/visualizer`

**Note :** Cette section n'est pas accessible depuis le menu principal de Nexus, elle fait partie de l'écosystème Coven.

## 🎨 Thème visuel

La section Coven utilise un **thème noir et rouge**, distinct du thème cyan utilisé dans le reste de Nexus :
- Loader : Rouge
- Effets hover : Rouge
- Titre : Dégradé rouge
- Icônes : Rouge

## 📁 Structure des fichiers

```
Nexus/
├── src/
│   ├── data/
│   │   └── coven/
│   │       └── visualizer.json      # Configuration des événements
│   └── components/
│       ├── Coven.jsx                # Page principale Coven (thème rouge)
│       └── Visualizer.jsx           # Composant Visualizer (thème rouge)
└── public/
    └── coven/
        └── visualizer/
            ├── README.md            # Documentation du dossier
            ├── .gitkeep             # Pour tracker le dossier
            └── [vos fichiers .webm] # Vidéos à afficher
```

## ⚙️ Configuration

### 1. Ajouter une vidéo

Placez votre fichier `.webm` dans `public/coven/visualizer/`

**Exemple :** `public/coven/visualizer/concert_hex.webm`

### 2. Configurer l'événement

Modifiez `src/data/coven/visualizer.json` :

```json
{
  "events": [
    {
      "concert": "Concert HeX",
      "date": "15/06/2025",
      "heureDebut": "20:00",
      "heureFin": "23:00",
      "fichier": "concert_hex.webm",
      "hexadecimal": "#FF00FF"
    },
    {
      "concert": "Ambiance Cyber",
      "date": "16/06/2025",
      "heureDebut": "18:00",
      "heureFin": "22:00",
      "fichier": "ambiance_cyber.webm",
      "hexadecimal": "#00FFFF"
    }
  ],
  "default": {
    "fichier": "default.webm",
    "hexadecimal": "#CC0000"
  }
}
```

## 📋 Propriétés JSON

| Propriété     | Type   | Description                                           | Exemple          |
|---------------|--------|-------------------------------------------------------|------------------|
| `concert`     | String | Nom de l'événement (affiché en haut à droite)       | "Concert HeX"    |
| `date`        | String | Date au format DD/MM/YYYY                            | "15/06/2025"     |
| `heureDebut`  | String | Heure de début au format HH:MM                       | "20:00"          |
| `heureFin`    | String | Heure de fin au format HH:MM                         | "23:00"          |
| `fichier`     | String | Nom du fichier .webm (avec extension)                | "concert.webm"   |
| `hexadecimal` | String | Code couleur du filtre (ou "#000000" pour aucun)    | "#FF00FF"        |

### 🔄 Section `default` (obligatoire)

Le JSON contient une section `default` qui définit ce qui est affiché quand **aucun événement n'est actif** :

```json
"default": {
  "fichier": "default.webm",
  "hexadecimal": "#CC0000"
}
```

**Propriétés :**
- `fichier` : Nom du fichier vidéo par défaut (doit exister dans `public/coven/visualizer/`)
- `hexadecimal` : Couleur du filtre par défaut (`#CC0000` = rouge Coven)

**Important :** Le fichier `default.webm` DOIT exister pour que le Visualizer fonctionne correctement.

## 🎨 Filtres de couleur

Les filtres sont appliqués avec :
- **Mode :** `mix-blend-multiply`
- **Opacité :** 30%

### Couleurs suggérées

- `#FF0000` - Rouge (chaleur, énergie)
- `#00FF00` - Vert (nature, néon)
- `#0000FF` - Bleu (froid, calme)
- `#FF00FF` - Magenta (cyber, futuriste)
- `#00FFFF` - Cyan (néon, tech)
- `#FFFF00` - Jaune (lumineux)
- `#000000` - Aucun filtre (noir)

## 🕐 Fonctionnement automatique

Le système fonctionne automatiquement :

1. **Vérification toutes les minutes** de la date et de l'heure actuelles
2. **Recherche de l'événement actif** correspondant
3. **Affichage de la vidéo** avec le filtre configuré
4. **Fallback** : Si aucun événement n'est actif, le premier de la liste est utilisé

## 🎥 Recommandations vidéo

### Format
- **Codec :** VP9 (WebM)
- **Extension :** `.webm`
- **Audio :** Optionnel (la vidéo est muted)

### Optimisation
- **Résolution :** 1920x1080 (Full HD) recommandé
- **Bitrate :** 2-5 Mbps pour un bon compromis qualité/poids
- **Durée :** Boucle fluide recommandée (début = fin)

### Conversion avec FFmpeg

```bash
ffmpeg -i input.mp4 -c:v libvpx-vp9 -b:v 3M -c:a libopus output.webm
```

## 🎮 Contrôles

- **Bouton Retour** : Visible au survol (haut gauche)
- **Info événement** : Visible au survol (haut droite)
- **Auto-hide** : Les contrôles disparaissent après 3 secondes d'inactivité

## 🚀 Déploiement

Après modification du JSON ou ajout de vidéos :

```bash
npm run deploy
```

## 📝 Exemples d'utilisation

### Événement ponctuel (concert)

```json
{
  "concert": "Concert Cyberpunk Live",
  "date": "25/12/2025",
  "heureDebut": "21:00",
  "heureFin": "23:30",
  "fichier": "concert_noel.webm",
  "hexadecimal": "#FF0066"
}
```

### Ambiance quotidienne

```json
{
  "concert": "Ambiance nocturne",
  "date": "01/01/2025",
  "heureDebut": "00:00",
  "heureFin": "23:59",
  "fichier": "night_city_loop.webm",
  "hexadecimal": "#00FFFF"
}
```

### Plusieurs événements le même jour

```json
[
  {
    "concert": "Morning Vibes",
    "date": "20/06/2025",
    "heureDebut": "08:00",
    "heureDebut": "12:00",
    "fichier": "morning.webm",
    "hexadecimal": "#FFFF00"
  },
  {
    "concert": "Night Show",
    "date": "20/06/2025",
    "heureDebut": "20:00",
    "heureFin": "23:59",
    "fichier": "night.webm",
    "hexadecimal": "#9900FF"
  }
]
```

## 🔧 Dépannage

### La vidéo ne se charge pas
- Vérifiez que le nom du fichier dans le JSON correspond exactement au fichier dans `public/visualizer/`
- Vérifiez que le fichier est bien au format `.webm`
- Vérifiez la console du navigateur pour les erreurs

### Le filtre ne s'applique pas
- Vérifiez que le code hexadécimal est bien formaté : `#XXXXXX`
- Utilisez `#000000` pour désactiver le filtre

### L'événement ne s'affiche pas
- Vérifiez le format de la date : `DD/MM/YYYY`
- Vérifiez le format des heures : `HH:MM`
- Vérifiez que l'heure actuelle est bien dans la plage définie

## 💡 Astuces

- **Boucle parfaite** : Créez des vidéos qui bouclent sans saccades (dernier frame = premier frame)
- **Poids optimisé** : Utilisez une compression adaptée pour un chargement rapide
- **Plusieurs versions** : Créez différentes versions d'une même vidéo avec différents filtres
- **Planification** : Préparez vos événements à l'avance en les ajoutant tous dans le JSON

---

**Créé le :** 03/06/2026  
**Version :** 1.0.0
