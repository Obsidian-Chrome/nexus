# Dossier Visualizer (Coven)

Ce dossier contient les fichiers vidéo (.webm) utilisés par le Visualizer de Coven.

**Chemin :** `public/coven/visualizer/`

## ⚠️ Fichier obligatoire

**`default.webm`** - Vidéo affichée quand aucun événement n'est programmé
- Ce fichier DOIT exister pour que le Visualizer fonctionne
- Il est affiché comme fallback par défaut
- Recommandation : Ambiance Coven (rouge/noir), boucle fluide

## Comment ajouter un nouveau concert/événement

1. **Placez votre fichier .webm dans ce dossier**
   - Chemin complet : `public/coven/visualizer/votre_fichier.webm`
   - Exemple: `concert_hex_2025.webm`

2. **Modifiez le fichier `src/data/coven/visualizer.json`**
   ```json
   {
     "events": [
       {
         "concert": "Concert HeX",
         "date": "15/06/2025",
         "heureDebut": "20:00",
         "heureFin": "23:00",
         "fichier": "concert_hex_2025.webm",
         "hexadecimal": "#FF00FF"
       }
     ],
     "default": {
       "fichier": "default.webm",
       "hexadecimal": "#CC0000"
     }
   }
   ```

## Format du JSON

### Événements (dans `events`)
- **concert**: Nom du concert (purement informatif)
- **date**: Date au format DD/MM/YYYY
- **heureDebut**: Heure de début au format HH:MM
- **heureFin**: Heure de fin au format HH:MM
- **fichier**: Nom exact du fichier .webm (avec extension)
- **hexadecimal**: Code couleur hexadécimal pour le filtre (ex: #FF0000 pour rouge, #00FFFF pour cyan)
  - Utilisez `#000000` si vous ne voulez pas de filtre

### Section `default` (obligatoire)
- **fichier**: Vidéo affichée quand aucun événement n'est actif
- **hexadecimal**: Couleur du filtre par défaut (#CC0000 = rouge Coven)

## Notes

- Le système affiche automatiquement l'événement correspondant à la date et l'heure actuelles
- Si aucun événement n'est actif, la vidéo définie dans `default` est utilisée
- Le fichier .webm doit être optimisé pour le web (compression, résolution adaptée)
- Les filtres de couleur sont appliqués avec 30% d'opacité en mode multiply
