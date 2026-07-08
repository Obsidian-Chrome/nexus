# 📊 Intégration Google Sheets pour le Visualizer

Ce guide explique comment mettre à jour le fichier `visualizer.json` depuis Google Sheets pour des personnes non techniques.

## 🎯 Objectif

Permettre à n'importe qui de modifier les événements du Visualizer sans toucher au code, avec mise à jour automatique sur GitHub.

## 📋 Solution : Google Sheets + Apps Script

### **Avantages**
- ✅ Interface familière (comme Excel)
- ✅ Modification collaborative en temps réel
- ✅ Historique des modifications
- ✅ Validation automatique des données
- ✅ Push automatique vers GitHub
- ✅ Aucune connaissance technique requise

---

## 🚀 Mise en place (une seule fois)

### **Étape 1 : Créer le Google Sheet**

1. Créer un nouveau Google Sheets
2. Nommer la feuille : `Visualizer Events`
3. Créer les colonnes suivantes :

| Concert | Date | Heure Début | Heure Fin | Fichier | Hexadecimal |
|---------|------|-------------|-----------|---------|-------------|
| Concert HeX | 15/06/2025 | 20:00 | 23:00 | concert_hex.webm | #FF00FF |

### **Étape 2 : Ajouter le script Apps Script**

1. Dans Google Sheets : **Extensions** > **Apps Script**
2. Supprimer le code par défaut
3. Coller le script ci-dessous
4. Sauvegarder avec `Ctrl+S`

```javascript
// Configuration GitHub
const GITHUB_TOKEN = 'ghp_VOTRE_TOKEN_ICI'; // À remplacer
const GITHUB_REPO = 'Obsidian-Chrome/nexus';
const GITHUB_FILE_PATH = 'src/data/coven/visualizer.json';
const GITHUB_BRANCH = 'main';

/**
 * Crée un menu personnalisé dans Google Sheets
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('🔴 Coven Visualizer')
    .addItem('📤 Publier sur GitHub', 'pushToGitHub')
    .addItem('✅ Valider les données', 'validateData')
    .addToUi();
}

/**
 * Valide les données avant publication
 */
function validateData() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const errors = [];
  
  // Vérifier les colonnes requises
  const requiredColumns = ['Concert', 'Date', 'Heure Début', 'Heure Fin', 'Fichier', 'Hexadecimal'];
  requiredColumns.forEach(col => {
    if (!headers.includes(col)) {
      errors.push(`Colonne manquante : ${col}`);
    }
  });
  
  if (errors.length > 0) {
    SpreadsheetApp.getUi().alert('❌ Erreur de validation', errors.join('\n'), SpreadsheetApp.getUi().ButtonSet.OK);
    return false;
  }
  
  // Vérifier les données (ligne par ligne)
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    if (!row[0]) continue; // Ligne vide
    
    // Vérifier la date (format DD/MM/YYYY ou objet Date)
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!dateRegex.test(String(row[1])) && !(row[1] instanceof Date)) {
      errors.push(`Ligne ${i + 1}: Format de date invalide (utilisez DD/MM/YYYY ou format date Google Sheets)`);
    }
    
    // Vérifier les heures (format HH:MM ou HH:MM:SS)
    const timeRegex = /^\d{2}:\d{2}(:\d{2})?$/;
    if (!timeRegex.test(String(row[2])) && !(row[2] instanceof Date)) {
      errors.push(`Ligne ${i + 1}: Format heure début invalide (utilisez HH:MM ou HH:MM:SS)`);
    }
    if (!timeRegex.test(String(row[3])) && !(row[3] instanceof Date)) {
      errors.push(`Ligne ${i + 1}: Format heure fin invalide (utilisez HH:MM ou HH:MM:SS)`);
    }
    
    // Vérifier le fichier (.webm)
    if (!row[4].endsWith('.webm')) {
      errors.push(`Ligne ${i + 1}: Le fichier doit se terminer par .webm`);
    }
    
    // Vérifier l'hexadécimal (format #XXXXXX ou vide)
    const hexRegex = /^#[0-9A-Fa-f]{6}$/;
    if (row[5] && row[5] !== "" && !hexRegex.test(row[5])) {
      errors.push(`Ligne ${i + 1}: Format hexadécimal invalide (utilisez #RRGGBB ou laissez vide)`);
    }
  }
  
  if (errors.length > 0) {
    SpreadsheetApp.getUi().alert('❌ Erreurs de validation', errors.join('\n'), SpreadsheetApp.getUi().ButtonSet.OK);
    return false;
  }
  
  SpreadsheetApp.getUi().alert('✅ Validation réussie', 'Toutes les données sont valides !', SpreadsheetApp.getUi().ButtonSet.OK);
  return true;
}

/**
 * Convertit un objet Date en format DD/MM/YYYY
 */
function formatDate(date) {
  if (typeof date === 'string') {
    // Si c'est déjà une string, la retourner
    return date;
  } else if (date instanceof Date) {
    // Si c'est un objet Date (format Google Sheets)
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  return date;
}

/**
 * Convertit le format d'heure HH:MM:SS en HH:MM
 */
function formatTime(time) {
  if (typeof time === 'string') {
    // Si c'est déjà une string, extraire HH:MM
    return time.substring(0, 5);
  } else if (time instanceof Date) {
    // Si c'est un objet Date (format Google Sheets)
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }
  return time;
}

/**
 * Convertit les données du sheet en JSON
 */
function sheetToJSON() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const events = [];
  
  // Convertir chaque ligne en objet
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    if (!row[0]) continue; // Ignorer les lignes vides
    
    const obj = {
      concert: row[0],
      date: formatDate(row[1]),
      heureDebut: formatTime(row[2]),
      heureFin: formatTime(row[3]),
      fichier: row[4],
      hexadecimal: row[5] || ""
    };
    
    events.push(obj);
  }
  
  // Structure finale avec events et default
  const jsonData = {
    events: events,
    default: {
      fichier: "visualizer_coven.webm",
      hexadecimal: ""
    }
  };
  
  return JSON.stringify(jsonData, null, 2);
}

/**
 * Pousse les modifications vers GitHub
 */
function pushToGitHub() {
  const ui = SpreadsheetApp.getUi();
  
  // Valider d'abord
  if (!validateData()) {
    return;
  }
  
  // Demander confirmation
  const response = ui.alert(
    '📤 Publier sur GitHub',
    'Êtes-vous sûr de vouloir publier ces modifications sur GitHub ?\nCela mettra à jour le site web.',
    ui.ButtonSet.YES_NO
  );
  
  if (response !== ui.Button.YES) {
    return;
  }
  
  try {
    // Convertir en JSON
    const jsonContent = sheetToJSON();
    
    // Récupérer le SHA actuel du fichier
    const getUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents/${GITHUB_FILE_PATH}?ref=${GITHUB_BRANCH}`;
    const getResponse = UrlFetchApp.fetch(getUrl, {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      },
      muteHttpExceptions: true
    });
    
    let sha = '';
    if (getResponse.getResponseCode() === 200) {
      const fileData = JSON.parse(getResponse.getContentText());
      sha = fileData.sha;
    }
    
    // Créer/Mettre à jour le fichier
    const updateUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents/${GITHUB_FILE_PATH}`;
    const payload = {
      message: `Update visualizer events from Google Sheets - ${new Date().toISOString()}`,
      content: Utilities.base64Encode(jsonContent),
      branch: GITHUB_BRANCH
    };
    
    if (sha) {
      payload.sha = sha;
    }
    
    const updateResponse = UrlFetchApp.fetch(updateUrl, {
      method: 'put',
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    });
    
    if (updateResponse.getResponseCode() === 200 || updateResponse.getResponseCode() === 201) {
      ui.alert('✅ Publication réussie', 'Les modifications ont été envoyées sur GitHub !\n\nLe site se mettra à jour automatiquement dans quelques minutes.', ui.ButtonSet.OK);
    } else {
      throw new Error(`Erreur GitHub: ${updateResponse.getContentText()}`);
    }
    
  } catch (error) {
    ui.alert('❌ Erreur', `Une erreur est survenue :\n${error.toString()}`, ui.ButtonSet.OK);
  }
}
```

### **Étape 3 : Configurer le token GitHub**

1. Aller sur GitHub : **Settings** > **Developer settings** > **Personal access tokens** > **Tokens (classic)**
2. Cliquer sur **Generate new token (classic)**
3. Nom : `Google Sheets Visualizer`
4. Cocher : `repo` (accès complet au dépôt)
5. Générer et **copier le token**
6. Dans Apps Script, remplacer `ghp_VOTRE_TOKEN_ICI` par votre token
7. **IMPORTANT** : Ne jamais partager ce token !

### **Étape 4 : Autoriser le script**

1. Cliquer sur **Publier sur GitHub** dans le menu
2. Accepter les autorisations demandées
3. Le script est maintenant prêt !

---

## 👥 Utilisation quotidienne (pour tous)

### **Modifier les événements**

1. Ouvrir le Google Sheet
2. Modifier/Ajouter des lignes :

```
Concert                    | Date       | Heure Début | Heure Fin | Fichier              | Hexadecimal
Concert Cyberpunk Live    | 25/12/2025 | 21:00:00    | 23:30:00  | concert_noel.webm    | #FF0066
Soirée Chill Vibes        | 26/12/2025 | 18:00:00    | 22:00:00  | chill_vibes.webm     | #00FFFF
Ambiance sans filtre      | 27/12/2025 | 14:00:00    | 18:00:00  | ambiance.webm        | 
```

**Notes :**
- Google Sheets **formate automatiquement** les dates et les heures selon sa locale
- Les dates peuvent apparaître différemment (ex: `15/06/2026` ou format date)
- Les heures peuvent afficher `:00` à la fin (ex: `20:00:00`)
- Le script convertit **automatiquement** tout en format standard (`DD/MM/YYYY` et `HH:MM`)

### **Publier les modifications**

1. Menu **🔴 Coven Visualizer** > **📤 Publier sur GitHub**
2. Vérifier que les données sont correctes
3. Confirmer
4. Attendre le message de succès
5. Le site se met à jour automatiquement dans 2-3 minutes

### **Valider sans publier**

Menu **🔴 Coven Visualizer** > **✅ Valider les données**

---

## 📝 Format des données

| Colonne | Format | Exemple | Description |
|---------|--------|---------|-------------|
| **Concert** | Texte libre | `Concert HeX` | Nom de l'événement |
| **Date** | `DD/MM/YYYY` | `15/06/2025` | Date de l'événement |
| **Heure Début** | `HH:MM` ou `HH:MM:SS` | `20:00` ou `20:00:00` | Heure de début (24h) |
| **Heure Fin** | `HH:MM` ou `HH:MM:SS` | `23:00` ou `23:00:00` | Heure de fin (24h) |
| **Fichier** | `nom.webm` | `concert_hex.webm` | Nom du fichier vidéo |
| **Hexadecimal** | `#RRGGBB` ou vide | `#FF00FF` ou `` | Couleur du filtre (vide = pas de filtre) |

**Note :** Google Sheets formate souvent les heures en `HH:MM:SS` automatiquement. Le script Apps Script convertit automatiquement ce format en `HH:MM` pour le JSON.

### **Codes couleur suggérés**

| Couleur | Code | Effet |
|---------|------|-------|
| Rouge | `#FF0000` | Chaleur, énergie |
| Magenta | `#FF00FF` | Cyber, futuriste |
| Cyan | `#00FFFF` | Néon, tech |
| Orange | `#FF6600` | Fête, dynamique |
| Violet | `#9900FF` | Mystère, élégance |
| Vert | `#00FF00` | Nature, néon |
| Pas de filtre | *(vide)* ou `#000000` | Vidéo naturelle |

---

## 🔧 Dépannage

### **"Autorisation refusée"**
→ Vérifier que le token GitHub a les bonnes permissions (`repo`)

### **"Erreur de validation"**
→ Vérifier les formats :
- Date : `DD/MM/YYYY` (ex: `15/06/2025`)
- Heure : `HH:MM` ou `HH:MM:SS` (ex: `20:00` ou `20:00:00`)
- Fichier : doit finir par `.webm`
- Hexa : `#` suivi de 6 caractères (ex: `#FF00FF`) ou laisser vide pour pas de filtre

### **"Le fichier n'existe pas"**
→ S'assurer que le fichier `.webm` est bien dans `public/coven/visualizer/`

### **Les modifications n'apparaissent pas**
→ Attendre 2-3 minutes pour le déploiement automatique GitHub Pages

---

## 🔐 Sécurité

### **Token GitHub**
- ✅ Ne JAMAIS partager le token
- ✅ Ne JAMAIS le mettre dans un document public
- ✅ Révoquer immédiatement si compromis
- ✅ Créer un token spécifique pour cette tâche

### **Permissions Google Sheets**
- Limiter l'accès au sheet aux personnes de confiance
- Utiliser "Éditeur" pour ceux qui peuvent modifier
- Utiliser "Lecteur" pour ceux qui peuvent seulement voir

---

## 📊 Workflow complet

```
┌─────────────────────────────────────────────┐
│  1. Modifier le Google Sheet               │
│     (Ajouter/Modifier des événements)      │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  2. Cliquer "Publier sur GitHub"           │
│     (Menu personnalisé)                     │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  3. Script Apps Script                      │
│     • Valide les données                    │
│     • Convertit en JSON                     │
│     • Push vers GitHub API                  │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  4. GitHub Actions                          │
│     • Détecte le commit                     │
│     • Build le site                         │
│     • Déploie sur GitHub Pages             │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  5. Site mis à jour ! ✅                    │
│     https://www.nexusxiv.fr/#coven/visualizer│
└─────────────────────────────────────────────┘
```

---

## 💡 Astuces

### **Tester avant de publier**
1. Utiliser "Valider les données" pour vérifier
2. Ne publier que quand tout est vert

### **Planifier à l'avance**
- Ajouter plusieurs événements à la fois
- Le système choisira automatiquement le bon selon la date/heure

### **Sauvegarde automatique**
- Google Sheets sauvegarde automatiquement
- Historique des versions disponible : **Fichier** > **Historique des versions**

### **Collaborer en temps réel**
- Plusieurs personnes peuvent éditer en même temps
- Les modifications sont visibles instantanément

---

**Créé le :** 03/06/2026  
**Version :** 1.0.0
