# 📝 Mise à jour du script Google Sheets

## ⚠️ Important : Nouveau chemin pour visualizer.json

Le fichier `visualizer.json` a été déplacé pour permettre les mises à jour automatiques.

### Ancien chemin ❌
```javascript
const GITHUB_FILE_PATH = 'src/data/coven/visualizer.json';
```

### Nouveau chemin ✅
```javascript
const GITHUB_FILE_PATH = 'public/coven/visualizer.json';
```

## 🔄 Comment mettre à jour

1. **Ouvrir Google Sheets**
2. **Extensions** > **Apps Script**
3. **Modifier la ligne 3** :
   ```javascript
   const GITHUB_FILE_PATH = 'public/coven/visualizer.json';
   ```
4. **Sauvegarder** (`Ctrl+S`)

## 🤖 Déploiement automatique activé

Une GitHub Action a été configurée qui :

✅ **Se déclenche automatiquement** quand `visualizer.json` est modifié sur GitHub  
✅ **Rebuild et redéploie** le site automatiquement  
✅ **Met à jour** la branche `gh-pages`

### Workflow

```
Google Sheets → Push vers GitHub
    ↓
GitHub détecte le changement
    ↓
GitHub Action se lance automatiquement
    ↓
Build + Deploy vers gh-pages
    ↓
Site mis à jour sous 2-3 minutes
```

## 🎯 Résultat

1. **Modifie le schedule** dans Google Sheets
2. **Publie sur GitHub** (menu Coven Visualizer)
3. **Attends 2-3 minutes** (GitHub Action en cours)
4. **Rafraîchis la page** (`Ctrl+F5`)
5. **Les changements sont visibles !** 🎉

## 📊 Vérifier le déploiement

Sur GitHub :
1. Va dans l'onglet **Actions**
2. Tu verras "Deploy on Visualizer Update" en cours ou terminé
3. Coche verte = Déployé avec succès ✅

## 🔧 Cache navigateur

Le site utilise un **cache-buster** qui force le rechargement du JSON à chaque visite :
```javascript
fetch(`/coven/visualizer.json?t=${timestamp}`)
```

→ Les utilisateurs voient toujours la dernière version !
