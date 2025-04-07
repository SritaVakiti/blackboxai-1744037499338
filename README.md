
Built by https://www.blackbox.ai

---

```markdown
# EpiEats - Allergy Friendly Recipes

EpiEats is a web application designed to provide users with allergy-friendly recipes. Users can create accounts, specify their allergies, and receive tailored recipe suggestions for breakfast, lunch, dinner, and desserts.

## Project Overview

EpiEats allows users to:
- Register and log in
- Specify their food allergies
- View recipes suitable for their allergy profile
- Explore different meal categories (Breakfast, Lunch, Dinner, Desserts)

## Installation

To run the EpiEats web application locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/epieats.git
   ```

2. **Change directory to the project folder**:
   ```bash
   cd epieats
   ```

3. **Open `index.html` in your web browser** to view the application.

> Note: The application does not require any server and can run directly in the browser.

## Usage

1. Open the `index.html` file in your web browser to view the home page.
2. Click on the "Sign Up" button to create a new account, where you can enter your name, email, and specify your allergies.
3. Once registered, log into your account using the "Log In" button.
4. Navigate through the site to explore recipes tailored to your allergy profile.

## Features

- **User Registration**: Create accounts with personalized allergy profiles.
- **Tailored Recipe Suggestions**: View recipes by meal type while filtering out allergens.
- **Interactive UI**: Responsive design using Tailwind CSS for a modern look and feel.
- **Detailed Recipe Information**: Each recipe includes ingredients, substitutions, and preparation instructions.

## Dependencies

EpiEats uses the following libraries:
- [Tailwind CSS](https://tailwindcss.com/): CSS framework for styling the frontend.
- [Font Awesome](https://fontawesome.com/): Icon library for a visually appealing interface.

External CSS and JS resources are linked directly in the HTML files from CDN.

## Project Structure

```
epieats/
│
├── index.html          # Main entry point of the application
├── register.html       # User registration view
├── login.html          # User login view
├── breakfast.html      # Breakfast recipes view
├── lunch.html          # Lunch recipes view
├── dinner.html         # Dinner recipes view
├── desserts.html       # Dessert recipes view
├── recipes.js          # JavaScript containing the recipes and logic
├── style.css           # Custom CSS styles
```

## Contributing

If you'd like to contribute to EpiEats, feel free to submit a pull request or open an issue. Your feedback and enhancements are always welcome!

## License

This project is open-source and available under the [MIT License](LICENSE).
```