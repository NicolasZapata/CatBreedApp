# Cat Breeds App

A React Native mobile application that displays cat breed information including images, descriptions, origins, and temperaments. The app fetches real data from TheCatAPI.

## Features

- View a list of cat breeds with images
- Display breed information: name, origin, and temperament
- Pull-to-refresh functionality for updating breed data
- Smooth image loading with optimized caching
- Cross-platform support (iOS, Android, Web)

## Tech Stack

- **React Native** - Mobile framework for building native apps
- **Expo** - Toolchain and platform for React Native
- **React Navigation** - Navigation library for routing
- **TheCatAPI** - External API for cat breed data
- **Axios** - HTTP client for API requests
- **React Native Fast Image** - Optimized image caching

## Project Structure

```
CatBreedApp/
├── App.js                 # Main entry point
├── app.json              # Expo configuration
├── babel.config.js       # Babel configuration
├── package.json          # Dependencies and scripts
└── src/
    ├── Views.jsx         # Main screen displaying cat breeds list
    ├── Data.jsx          # Data fetching utilities (template)
    ├── Models.jsx        # Data models (template)
    ├── CatImage.jsx      # Image component (template)
    └── login.jsx         # Login screen component (template)
```

## Components

### Views.jsx
The main screen component that fetches and displays cat breeds. It uses the native `fetch` API to communicate with TheCatAPI and renders a scrollable list of breed cards showing:
- Breed image
- Name
- Country of origin
- Temperament

### Login.jsx
Authentication screen with username/password fields and navigation to the main views screen.

## API Integration

The app connects to [TheCatAPI](https://thecatapi.com/) to retrieve breed information:

- **Endpoint**: `https://api.thecatapi.com/v1/breeds`
- **Authentication**: Requires API key (`x-api-key` header)
- **Image URL Pattern**: `https://cdn2.thecatapi.com/images/{reference_image_id}.jpg`

## Installation

1. Clone the repository:
```bash
git clone https://github.com/NicolasZapata/CatBreedApp.git
cd CatBreedApp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npx expo start
```

4. Run on specific platform:
```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

## Configuration

### API Key
The app uses a demo API key for TheCatAPI. For production use, replace the API key in `src/Views.jsx`:

```javascript
headers: {
  "Content-Type": "application/json",
  "x-api-key": "your-api-key-here"
}
```

### Dependencies
Key dependencies include:
- `react` & `react-native` - Core framework
- `@react-navigation/native` & `@react-navigation/native-stack` - Navigation
- `axios` - HTTP client
- `expo` - Expo SDK
- `react-native-fast-image` - Optimized image loading

## Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start Expo development server |
| `npm run android` | Run on Android emulator/device |
| `npm run ios` | Run on iOS simulator/device |
| `npm run web` | Run in web browser |

## License

MIT License