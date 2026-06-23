# Documentation - artistes.json

## Structure d'un artiste

```json
{
  "id": 1,                           // Numéro unique (requis) - Incrémenter pour chaque nouvel artiste
  "name": "Nom de l'artiste",        // Nom de l'artiste (requis)
  "logo": "media/artistes/logo.png", // Chemin local OU URL (optionnel) - Peut être null
  "styleMusical": "Genre musical",   // Style musical (requis) - Texte libre
  "url": "https://...",              // URL du site web (optionnel) - Peut être null
  "youtube": "https://youtube.com/@...", // URL YouTube (optionnel) - Peut être null
  "discord": "https://discord.gg/..." // URL Discord (optionnel) - Peut être null
}
```

## Champs requis
- `id` - Numéro unique
- `name` - Nom de l'artiste
- `styleMusical` - Style musical

## Champs optionnels (peuvent être null)
- `logo` - Chemin vers l'image du logo (local ou URL externe)
- `url` - Site web de l'artiste
- `youtube` - Chaîne YouTube
- `discord` - Serveur Discord

## Format du logo

Le logo peut être:
- **Chemin local**: `"media/artistes/FaTM.png"` (recommandé pour vos propres images)
- **URL externe**: `"https://example.com/logo.png"`
- **Formats supportés**: PNG (avec transparence), JPG, JPEG, WebP, SVG
- **null** si pas de logo

**Exemple avec chemin local:**
```json
"logo": "media/artistes/FaTM.png"
```

**Exemple avec URL externe:**
```json
"logo": "https://example.com/artiste-logo.png"
```

## Exemples de styles musicaux
- `"Techno / Cyberpunk"`
- `"Synthwave"`
- `"Electro"`
- `"House"`
- `"Drum & Bass"`
- `"Ambient"`
- `"Industrial"`
- Ou tout autre style en texte libre

## Exemples complets

### Artiste avec tous les champs
```json
{
  "id": 1,
  "name": "DJ Cyber",
  "logo": "media/logos/dj-cyber.png",
  "styleMusical": "Techno / Cyberpunk",
  "url": "https://djcyber.com",
  "youtube": "https://youtube.com/@djcyber",
  "discord": "https://discord.gg/djcyber"
}
```

### Artiste minimal (sans logo, URL, YouTube)
```json
{
  "id": 2,
  "name": "Neon Dreams",
  "logo": null,
  "styleMusical": "Synthwave",
  "url": null,
  "youtube": null,
  "discord": "https://discord.gg/neondreams"
}
```

### Artiste avec uniquement YouTube
```json
{
  "id": 3,
  "name": "CyberBeats",
  "logo": null,
  "styleMusical": "Industrial / Electro",
  "url": null,
  "youtube": "https://youtube.com/@cyberbeats",
  "discord": null
}
```
