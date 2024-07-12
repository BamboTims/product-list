# Product List

This project is a responsive web page that displays a list of products. It uses React with TypeScript, Tailwind CSS for styling, and Axios for fetching data from an external API. The application includes functionality for filtering and sorting products to enhance the user experience.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

## Demo

A live demo of the project can be found [here](#).

## Features

- Fetches product data from a provided JSON endpoint.
- Displays products in a responsive grid layout.
- Allows filtering of products based on categories.
- Enables sorting of products by price or rating.
- Uses Tailwind CSS for a fully responsive design.

## Installation

To get started with this project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/product-list.git
   cd product-list
   ```
2. **Install dependencies**:

   ```bash
   npm install
   ```
3. **Configure Tailwind CSS**:
   Ensure that your `tailwind.config.js` is set up correctly:

   ```javascript
   // tailwind.config.js
   module.exports = {
     purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {},
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }
   ```

   Import Tailwind CSS in `index.css`:

   ```css
   /* src/index.css */
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
4. **Start the development server**:

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:5173`.

## Usage

Once the application is running, you can:

- View the list of products in a responsive grid layout.
- Use the filter dropdown to filter products by category.
- Use the sort dropdown to sort products by price or rating.
