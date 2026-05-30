# Documentation - reseaux.json

## Structure d'un réseau

```json
{
  "id": 1,                      // Numéro unique (requis) - Incrémenter pour chaque nouveau réseau
  "name": "Neolens",            // Nom du réseau (requis)
  "equivalent": "Instagram",    // Équivalent IRL (optionnel) - Affiché en sous-titre discret
  "logo": "/media/neolens_logo.png",  // Chemin vers le logo (requis) - Peut être local ou URL externe
  "description": "Plateforme de partage de photos et contenus visuels",  // Description (requis)
  "type": "social"              // Type de réseau (optionnel) - "social", "premium", etc.
}
```

## Champs détaillés

### id (requis)
- Type: `number`
- Numéro unique pour chaque réseau
- Doit être incrémenté pour chaque nouvel ajout

### name (requis)
- Type: `string`
- Nom du réseau social ou de la plateforme

### equivalent (optionnel)
- Type: `string`
- Équivalent dans le monde réel (ex: "Instagram", "OnlyFans")
- Affiché en sous-titre discret entre parenthèses sous le nom du réseau

### logo (requis)
- Type: `string`
- Chemin vers le logo du réseau
- **Chemin local**: `/media/neolens_logo.png` (fichier dans le dossier `public/media/`)
- **URL externe**: `https://example.com/logo.png`

### description (requis)
- Type: `string`
- Description de la plateforme et de son équivalent dans le monde réel

### type (optionnel)
- Type: `string`
- Catégorie du réseau: `"social"`, `"premium"`, `"gaming"`, etc.

## Exemples

### Réseau social (type local)
```json
{
  "id": 1,
  "name": "Neolens",
  "equivalent": "Instagram",
  "logo": "/media/neolens_logo.png",
  "description": "Plateforme de partage de photos et contenus visuels",
  "type": "social"
}
```

### Réseau premium
```json
{
  "id": 2,
  "name": "Holofans",
  "equivalent": "OnlyFans",
  "logo": "/media/holofans_logo.png",
  "description": "Plateforme de contenu premium par abonnement",
  "type": "premium"
}
```
