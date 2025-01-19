Project Name: E-Commerce UI
Overview
This is a simple e-commerce UI project built using React and TailwindCSS. The app has four main screens: Home, Casual, Product Description, and Cart. Each screen provides unique functionality to simulate a basic e-commerce browsing experience.
Screens and Navigation
1. Home Screen
Description: The main landing page showcasing various categories and featured products.
Navigation:
Clicking on the Casual category image navigates to the Casual Screen.
Navbar dropdown options provide additional navigation links.
2. Casual Screen
Description: Displays a curated list of casual products based on the selection from the Home Screen.
Navigation: Users can browse the styles and explore individual products.
3. Product Description Screen
Description: Shows detailed information about a selected product, including images, price, and description.
Navigation: Accessed via the navbar dropdown under Man -> Shirt.
4. Cart Screen
Description: Displays the list of items the user has added to the cart.
Navigation: Accessed through the Cart option in the navbar.
Footer Links
The footer is dynamically generated with the following sections:

Company: Includes links such as About Us, Our Team, Careers, and Blog.
Help: Contains links like Support, Contact Us, Live Chat, and Documentation.
FAQ: Provides quick answers under General Questions, Technical Support, Billing, and Account Issues.
Resources: Links to Guides, API Docs, Community, and Integrations.
Features
Dynamic Footer: Built using reusable components with section-specific links.
Responsive Design: Fully responsive layout using TailwindCSS grid utilities.
Interactive Navigation: Each screen navigates smoothly to the next, offering a seamless user experience.








Sanity Integration and API Visualization
This project demonstrates the integration of a Sanity CMS environment with an external API to manage and visualize products dynamically. The goal was to fetch product data from an API, import it into Sanity, and display it on the user interface using GROQ queries.

Features Implemented
1. Sanity Environment Setup
Created a Sanity CMS project with the following schema:
products schema includes fields for:
name, description, price, category, discountPercent, isNew, and image.
Categories include predefined options such as "hoodie," "t-shirt," and more.
2. Data Import from API
API Endpoint:
URL: https://template1-neon-nu.vercel.app/api/products
Fetches a list of products with detailed information like name, description, price, category, discount percentage, and image URL.
Implemented a Node.js script (importData.js) to:
Fetch product data from the API.
Upload product images to Sanity.
Create and store product documents in the Sanity database.
3. Visualization in UI
GROQ queries were used to fetch products from the Sanity database:
*[_type == "products"]{
  _id,
  name,
  price,
  description,
  "imageUrl": image.asset->url,
  category,
  discountPercent,
  isNew
}
Displayed the data in a responsive grid on the frontend using Next.js.
API Documentation
Product API - GET /api/products
Fetches a list of products available in the store.

Base URL:
https://template1-neon-nu.vercel.app/api/products
Response Example:
[
  {
    "imageUrl": "https://cdn.sanity.io/images/7xt4qcah/production/4e2ed6a9eaa6e1413843e53f3113ccfd2104c301-278x296.png",
    "category": "hoodie",
    "discountPercent": 20,
    "isNew": true,
    "_id": "0dc7c847-8599-45d0-b02c-34429f7a639e",
    "name": "Casual Green Bomber Jacket",
    "description": "This stylish green bomber jacket offers a sleek and modern twist on a classic design...",
    "price": 300
  }
]
Response Fields:
_id: Unique identifier for the product.
name: Name of the product.
description: Detailed description of the product.
price: Price of the product.
category: Product category (e.g., "hoodie").
imageUrl: URL of the product image.
discountPercent (optional): Discount percentage.
isNew (optional): Boolean indicating if the product is new.
Steps to Import API Data into Sanity
Create the importData.js Script

Use the provided script to fetch data, upload images, and create product documents in Sanity.
Update Sanity Credentials

Replace placeholders in importData.js with your Sanity project details:
projectId: Your project ID.
dataset: The dataset name (e.g., "production").
token: Your authentication token.
Run the Script

Execute the script to import data:
node importData.js



