# Bannières pour l'Annuaire

Ce dossier contient les bannières des établissements de l'annuaire.

## Format

- **Formats acceptés** : `.jpg`, `.png`, `.gif`, `.webp`
- **Dimensions recommandées** : 440x130px (ratio ~3.4:1)
- **Taille maximale** : 500 KB
- **Optimisation** : Compresser les images pour un chargement rapide

## Utilisation

### 1. Ajouter une bannière

Placez votre fichier image dans ce dossier :
```
public/annuaire/votre-etablissement-banner.jpg
```

### 2. Mettre à jour le JSON

Dans `src/data/annuaire.json`, ajoutez le champ `banner` :

```json
{
  "id": 1,
  "name": "Deadwire",
  "banner": "/annuaire/deadwire-banner.jpg",
  ...
}
```

### 3. Sans bannière

Si vous n'ajoutez pas de bannière, une ligne décorative cyan sera affichée automatiquement.

## Design

### Desktop - Avec bannière
```
┌─────────────────────────────────────────┐
│  ┌──────────────┐  Nom établissement   │
│  │  BANNIÈRE    │  Serveur • Location   │
│  │  440x130     │  Adresse, horaires... │
│  └──────────────┘  [🌐] [Discord]       │
│  [Bar] [Tag]                            │
└─────────────────────────────────────────┘
```

### Desktop - Sans bannière
```
┌─────────────────────────────────────────┐
│  ┌──────────────┐  Nom établissement   │
│  │   ━━━━━━     │  Serveur • Location   │
│  │  (fallback)  │  Adresse, horaires... │
│  └──────────────┘  [Discord]            │
│  [Nightclub]                            │
└─────────────────────────────────────────┘
```

### Mobile (Empilé)
```
┌──────────────────┐
│ ┌──────────────┐ │
│ │  BANNIÈRE    │ │
│ └──────────────┘ │
│ [Bar]            │
│                  │
│ Nom établissement│
│ Infos...         │
└──────────────────┘
```

## Exemples de bonnes pratiques

✅ **Bon** :
- Image nette et de qualité
- Texte lisible si présent
- Ambiance cohérente avec l'établissement
- Ratio 3:1 respecté

❌ **À éviter** :
- Image floue ou pixelisée
- Trop de texte (illisible sur mobile)
- Couleurs flashy qui clashent avec le design sombre
- Fichiers non optimisés (>2MB)

## Outils de compression recommandés

- [TinyPNG](https://tinypng.com/) - Compression PNG/JPG
- [Squoosh](https://squoosh.app/) - Compression et conversion
- [GIMP](https://www.gimp.org/) - Redimensionnement et export optimisé
