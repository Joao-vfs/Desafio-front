# E-commerce We Movies

## Description

This is a simplified e-commerce website built with React, TypeScript, and styled-components. The project includes three main modules/screens: Home, Cart, and Order Confirmation.

## Screens

1. **Home:**
   - Fetches a list of movies from the API and displays them.
   - Allows users to add movies to the shopping cart.

2. **Cart:**
   - Displays the items added to the cart.
   - Calculates and shows the total value of items in the cart.
   - Allows users to remove items from the cart.
   - If the cart is empty, a screen is displayed with an option to go back to the Home screen.

3. **Order Confirmation:**
   - Displays a confirmation message after the user confirms the order.
   - Provides an option to go back to the Home screen.

## Prototype

- [Figma Prototype](link-to-figma-prototype)

## API

For this project, we simulate an API by using a JSON file. You can download the list of objects from [here](link-to-api-json-file).

To run the API server, you can use [json-server](https://github.com/typicode/json-server). Add the following command to your `package.json`:

```json
"scripts": {
  "start-api": "json-server --watch api.json --port 3001"
}
