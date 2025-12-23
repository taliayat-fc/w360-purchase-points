# W360 Purchase Points

A mobile-first React application for purchasing World360 loyalty points.

## 🎨 Features

- Clean, modern UI matching W360 brand guidelines
- Mobile-first responsive design (optimized for 390px width)
- Interactive slider for selecting points (1,000 - 250,000)
- Multi-step purchase flow with payment options
- Success confirmation screen
- Animated piggy bank illustration

## 🚀 Tech Stack

- React 18
- Vite
- CSS-in-JS (inline styles)

## 📦 Installation

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## 🌐 Deploy to Vercel

This project is ready for Vercel deployment:

1. Go to https://vercel.com
2. Import this repository
3. Deploy automatically

## 📁 Project Structure

```
w360-purchase-points/
├── public/
│   └── piggy.mp4          # Piggy bank animation
├── src/
│   ├── App.jsx            # Main application with all 3 screens
│   └── main.jsx           # React entry point
├── index.html
├── package.json
└── vite.config.js
```

## 🎯 Usage

The app includes 3 screens:
1. **Points Selection** - Choose how many points to purchase
2. **Payment** - Enter payment details
3. **Success** - Confirmation screen

## 📝 Adding the Piggy Animation

Add your `piggy.mp4` file to the `public/` folder and it will automatically play on the success screen.

## 🎨 Design System

### Colors
- Primary Blue: `#001ede`
- Sand/Beige: `#f4f1ea`
- Text: `#181818`, `#0c000f`

### Typography
- Headings: World360
- Body: Inter
- Weights: 300 (light), 500 (medium), 600 (semibold)