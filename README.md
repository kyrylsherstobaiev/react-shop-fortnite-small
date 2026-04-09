# React Shop - Fortnite Item Store

A React-based e-commerce application that displays the Fortnite item shop, allowing users to browse items and manage a shopping cart.

[**LIVE DEMO**](https://kyrylsherstobaiev.github.io/react-shop-fortnite-small)

---

## ✨ Features

- 🛍️ Browse daily Fortnite shop items with images and descriptions
- 🛒 Add items to shopping cart
- ➕➖ Adjust item quantities (increment/decrement)
- 🗑️ Remove items from cart
- 💰 Real-time total price calculation
- 🔔 Toast notifications when items are added
- ⏳ Loading state with preloader
- 📱 Responsive design with Materialize CSS
- 🌐 Fetches real-time data from Fortnite API

---

## 🛠 Technologies

- **React 18.2.0** - UI library
- **JavaScript (JSX)** - Programming language
- **Materialize CSS** - UI framework
- **Fortnite API** - External data source
- **Fetch API** - HTTP client
- **React Hooks** - State management (useState, useEffect)
- **gh-pages** - Deployment

---

## 📁 Project Structure

```
react_shop_fortnite/
├── public/                          # Static public assets
│   ├── favicon.ico                  # Browser favicon
│   ├── index.html                   # HTML entry point
│   ├── logo192.png                  # App icon (192x192)
│   ├── logo512.png                  # App icon (512x512)
│   ├── manifest.json                # PWA manifest
│   └── robots.txt                   # SEO robots file
│
├── src/                             # Source code
│   ├── components/                  # React components
│   │   ├── Alert.jsx                # Toast notification component
│   │   ├── BasketItem.jsx           # Individual cart item component
│   │   ├── BasketList.jsx           # Shopping cart list/modal
│   │   ├── Cart.jsx                 # Cart icon with quantity badge
│   │   ├── Footer.jsx               # Page footer
│   │   ├── GoodsItem.jsx            # Individual product card
│   │   ├── GoodsList.jsx            # Product grid display
│   │   ├── Header.jsx               # Navigation header
│   │   ├── Preloader.jsx            # Loading spinner
│   │   └── Shop.jsx                 # Main shop container (state management)
│   │
│   ├── App.css                      # App-specific styles
│   ├── App.js                       # Root component
│   ├── config.js                    # API configuration
│   ├── index.css                    # Global styles
│   └── index.js                     # Application entry point
│
├── .env.local                       # Environment variables (API key)
├── .gitignore                       # Git ignore rules
├── package.json                     # Dependencies and scripts
├── package-lock.json                # Dependency lock file
└── README.md                        # Project documentation
```

---

## 🔌 API Integration

The application uses the **Fortnite API** to fetch real-time shop data:

- **Endpoint:** `https://fortniteapi.io/v2/shop?lang=en`
- **Authentication:** API key via request headers
- **Configuration:** Managed in `src/config.js`

```javascript
const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = "https://fortniteapi.io/v2/shop?lang=en";
```

