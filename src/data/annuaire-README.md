# Documentation - annuaire.json

## Structure d'un établissement

```json
{
  "id": 1,                    // Numéro unique (requis) - Incrémenter pour chaque nouvel établissement
  "name": "Nom",              // Nom de l'établissement (requis)
  "datacenter": "Chaos",      // Datacenter (requis) - Options: "Chaos" ou "Light"
  "server": "Ragnarok",       // Serveur (requis) - Voir liste ci-dessous
  "location": "La Coupe",     // Lieu (requis) - Voir liste ci-dessous
  "secteur": "2",             // Numéro de secteur (requis)
  "numero": "6",              // Numéro de parcelle (requis)
  "appartement": false,       // Est un appartement ? (requis) - true ou false
  "annexe": false,            // Est une annexe ? (requis) - true ou false
  "types": ["Bar"],           // Types d'établissement (optionnel) - Voir liste ci-dessous, peut être null ou []
  "horaires": null,           // Horaires (optionnel) - Voir formats ci-dessous, peut être null
  "url": "https://...",       // URL du site web (optionnel) - Peut être null
  "discord": "https://..."    // URL Discord (optionnel) - Peut être null
}
```

## Options disponibles

### Datacenters
- `"Chaos"`
- `"Light"`

### Serveurs

**Chaos:**
- `"Cerberus"`
- `"Louisoix"`
- `"Moogle"`
- `"Omega"`
- `"Phantom"`
- `"Ragnarok"`
- `"Sagittarius"`
- `"Spriggan"`

**Light:**
- `"Alpha"`
- `"Lich"`
- `"Odin"`
- `"Phoenix"`
- `"Raiden"`
- `"Shiva"`
- `"Twintania"`
- `"Zodiark"`

### Lieux (Locations)
- `"La Coupe"`
- `"Lavandière"`
- `"Brumée"`
- `"Empyrée"`
- `"Shirogane"`

### Types
- `"Bar"`
- `"Lieu public"`
- `"Nightclub"`
- `"Boutique"`
- `"Studio Photo"`

## Formats d'horaires

### Option 1: Texte simple
```json
"horaires": "21h - 3h"
```

### Option 2: Texte libre
```json
"horaires": "Sur rendez-vous"
```

### Option 3: Horaires détaillés par jour
```json
"horaires": [
  {"jour": "Lun.", "heures": "21h00 - 23h00"},
  {"jour": "Mer.", "heures": "20h00 - 21h30"},
  {"jour": "Ven.", "heures": "21h00 - 03h00"}
]
```

### Option 4: Pas d'horaires
```json
"horaires": null
```

## Exemples complets

### Établissement avec tout renseigné
```json
{
  "id": 1,
  "name": "Deadwire",
  "datacenter": "Chaos",
  "server": "Ragnarok",
  "location": "La Coupe",
  "secteur": "2",
  "numero": "6",
  "appartement": false,
  "annexe": false,
  "types": ["Bar", "Nightclub"],
  "horaires": [
    {"jour": "Lun.", "heures": "21h00 - 00h00"},
    {"jour": "Ven.", "heures": "22h00 - 02h00"}
  ],
  "url": "https://www.deadwire.fr/",
  "discord": "https://discord.gg/QC6CEGcpgq"
}
```

### Établissement minimal (sans URL, Discord, horaires)
```json
{
  "id": 2,
  "name": "Mégabuilding H10-25",
  "datacenter": "Chaos",
  "server": "Ragnarok",
  "location": "La Coupe",
  "secteur": "10",
  "numero": "25",
  "appartement": false,
  "annexe": false,
  "types": ["Lieu public"],
  "horaires": null,
  "url": null,
  "discord": null
}
```

### Appartement annexe
```json
{
  "id": 3,
  "name": "Lawless",
  "datacenter": "Chaos",
  "server": "Ragnarok",
  "location": "La Coupe",
  "secteur": "17",
  "numero": "4",
  "appartement": true,
  "annexe": true,
  "types": ["Lieu public", "Boutique"],
  "horaires": "Sur rendez-vous",
  "url": null,
  "discord": "https://discord.gg/f32rrfRfcA"
}
```
