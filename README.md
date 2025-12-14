# 🖼️ Bildauflösung & Speicherbedarf - GINF Lernkurs

Interaktiver Lernkurs für Bildauflösung, Skalierung und Speicherbedarf-Berechnungen.

**BPI Mödling - Grundlagen der Informatik (GINF)**

## 📚 Kursinhalte

### Formelsammlung
- Einheiten: ppi, px/cm, kB, KiB, MB, MiB
- Skalierung ohne Resampling
- Umrechnung ppi ↔ px/cm
- Speicherbedarf-Berechnungen

### Interaktive Simulationen
- Skalierung ohne Resampling (Pixelanzahl konstant)
- Speicherbedarf-Visualisierung

### Übungsaufgaben (22 Aufgaben, 44 Punkte)
- **Teil A:** Skalieren ohne Resampling (14 Teilaufgaben)
- **Teil B:** Umrechnung ppi ↔ px/cm (2 Aufgaben)
- **Teil C:** Speicherbedarf (16 Teilaufgaben)

### Features
- 🧮 Fixierter Taschenrechner mit dokumentierten Rechenschritten
- ✅ Automatische Auswertung mit Toleranzbereich
- 📊 Zusammenfassung mit Fehlerübersicht
- 📄 PDF-Export der Ergebnisse
- 📧 E-Mail-Versand an Lehrer

## 🚀 Deployment auf Railway

### Option 1: Über GitHub
1. Repository auf GitHub erstellen
2. Alle Dateien hochladen
3. Auf [railway.app](https://railway.app) einloggen
4. "New Project" → "Deploy from GitHub"
5. Repository auswählen
6. Railway deployt automatisch

### Option 2: Railway CLI
```bash
# Railway CLI installieren
npm install -g @railway/cli

# Einloggen
railway login

# Neues Projekt erstellen
railway init

# Deployen
railway up
```

## 🛠️ Lokale Entwicklung

```bash
# Dependencies installieren
npm install

# Server starten
npm start

# Öffnen unter http://localhost:3000
```

## 📁 Projektstruktur

```
├── public/
│   └── index.html      # Hauptanwendung (Lernkurs)
├── server.js           # Express-Server
├── package.json        # Node.js Konfiguration
├── railway.json        # Railway Deployment-Konfiguration
├── .env.example        # Umgebungsvariablen (Beispiel)
└── README.md           # Diese Datei
```

## ⚙️ Umgebungsvariablen

| Variable | Beschreibung | Standard |
|----------|--------------|----------|
| `PORT` | Server-Port | `3000` |

## 📧 E-Mail-Konfiguration

Die E-Mail-Adresse für den Ergebnisversand kann in `public/index.html` in der Funktion `sendEmail()` angepasst werden:

```javascript
const emailAddress = 'modic@akademie.bpi.ac.at';
```

## 📝 Lizenz

MIT License - BPI Mödling

## 👨‍🏫 Kontakt

BPI Mödling - Grundlagen der Informatik (GINF)
