# Angular Calorify Frontend

Angular Calorify is a frontend web application built with Angular and TypeScript, designed to help users track their calories,
macronutrients, and workouts. The app uses NgRx for state management and custom styles for the user interface. It interacts with a backend
service to provide functionalities such as user authentication, calorie and macronutrient tracking, meal tracking, and workout tracking.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Features](#features)
- [APIs](#apis)
- [License](#license)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Kotrla/Angular-Calorify-Frontend.git
   cd Angular-Calorify-Frontend/calorify
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Edit the `environment.ts` file on line 7, in the `calorify/environments` directory with the following changes:

   ```plaintext
   api: '<your-api-url>',
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Usage

After starting the development server, you can access the application at `http://localhost:4200`.

## Project Structure

```plaintext
src
├── app
│   ├── core                       # Core functionalities such as guards, interceptors, services, and state management
│   │   ├── guards                 # Route guards to protect certain routes
│   │   ├── interceptors           # HTTP interceptors for handling requests and responses
│   │   ├── services               # Core services used across the application
│   │   ├── state                  # State management files
│   │   └── ts                     # TypeScript utility files
│   ├── features                   # Application features split by domain
│   │   ├── dashboard              # Dashboard feature
│   │   │   ├── components         # Dashboard-specific components
│   │   │   ├── modules            # Dashboard-specific modules
│   │   │   ├── ts                 # Dashboard-specific TypeScript files
│   │   │   └── utils              # Dashboard-specific utility files
│   │   │       ├── dashboard.component.html      # Dashboard component template
│   │   │       ├── dashboard.component.scss      # Dashboard component styles
│   │   │       ├── dashboard.component.spec.ts   # Dashboard component tests
│   │   │       └── dashboard.component.ts        # Dashboard component logic
│   │   ├── home                   # Home feature
│   │   │   ├── components         # Home-specific components
│   │   │   ├── modules            # Home-specific modules
│   │   │   ├── ngrx               # Home-specific NgRx state management files
│   │   │   ├── services           # Home-specific services
│   │   │   ├── ts                 # Home-specific TypeScript files
│   │   │   └── utils              # Home-specific utility files
│   │   │       ├── home.component.html      # Home component template
│   │   │       ├── home.component.scss      # Home component styles
│   │   │       ├── home.component.spec.ts   # Home component tests
│   │   │       └── home.component.ts        # Home component logic
│   │   ├── landing                # Landing feature
│   │   │   ├── components         # Landing-specific components
│   │   │   ├── modules            # Landing-specific modules
│   │   │   ├── services           # Landing-specific services
│   │   │   ├── ts                 # Landing-specific TypeScript files
│   │   │   └── utils              # Landing-specific utility files
│   │   │       ├── landing.component.html       # Landing component template
│   │   │       ├── landing.component.scss       # Landing component styles
│   │   │       ├── landing.component.spec.ts    # Landing component tests
│   │   │       └── landing.component.ts         # Landing component logic
│   │   ├── meals                  # Meals feature
│   │   │   ├── components         # Meals-specific components
│   │   │   ├── modules            # Meals-specific modules
│   │   │   ├── ngrx               # Meals-specific NgRx state management files
│   │   │   ├── services           # Meals-specific services
│   │   │   ├── ts                 # Meals-specific TypeScript files
│   │   │   └── utils              # Meals-specific utility files
│   │   │       ├── meals.component.html       # Meals component template
│   │   │       ├── meals.component.scss       # Meals component styles
│   │   │       ├── meals.component.spec.ts    # Meals component tests
│   │   │       └── meals.component.ts         # Meals component logic
│   │   ├── profile                # Profile feature
│   │   │   ├── modules            # Profile-specific modules
│   │   │   ├── ngrx               # Profile-specific NgRx state management files
│   │   │   ├── services           # Profile-specific services
│   │   │   ├── ts                 # Profile-specific TypeScript files
│   │   │   └── utils              # Profile-specific utility files
│   │   │       ├── profile.component.html       # Profile component template
│   │   │       ├── profile.component.scss       # Profile component styles
│   │   │       ├── profile.component.spec.ts    # Profile component tests
│   │   │       └── profile.component.ts         # Profile component logic
│   │   ├── workouts               # Workouts feature
│   │   │   ├── components         # Workouts-specific components
│   │   │   ├── modules            # Workouts-specific modules
│   │   │   ├── ngrx               # Workouts-specific NgRx state management files
│   │   │   ├── services           # Workouts-specific services
│   │   │   ├── ts                 # Workouts-specific TypeScript files
│   │   │   └── utils              # Workouts-specific utility files
│   │   │       ├── workouts.component.html       # Workouts component template
│   │   │       ├── workouts.component.scss       # Workouts component styles
│   │   │       ├── workouts.component.spec.ts    # Workouts component tests
│   │   │       └── workouts.component.ts         # Workouts component logic
│   ├── modules                    # Application-wide modules
│   │   ├── app-routing.module.ts  # Main routing module
│   │   └── app.module.ts          # Main application module
│   ├── shared                     # Shared components and utilities
│   │   └── ui                     # Shared UI components
│   │       ├── button             # Button component
│   │       ├── card               # Card component
│   │       ├── chart              # Chart component
│   │       ├── input              # Input component
│   │       ├── list-item          # List item component
│   │       └── select             # Select component
│   ├── styles                     # Global styles
│   │   └── partials               # SCSS partials
│   │       ├── _card.scss         # Card component styles
│   │       ├── _fonts.scss        # Font styles
│   │       ├── _mixins.scss       # SCSS mixins
│   │       ├── _separator.scss    # Separator styles
│   │       ├── _variables.scss    # SCSS variables
│   │   ├── feature-page.scss      # Feature page styles
│   │   ├── host-w-full.scss       # Host with full width styles
│   │   ├── spacing.scss           # Spacing utilities
│   │   ├── svg.scss               # SVG styles
│   ├── app.component.html         # Main app component template
│   ├── app.component.scss         # Main app component styles
│   ├── app.component.spec.ts      # Main app component tests
│   └── app.component.ts           # Main app component logic
├── assets                         # Static assets such as images and fonts
├── environments                   # Environment-specific configuration files
```

## Features

- **User Login/Registration**: Secure user authentication and account management.
- **Modifying Personal Information**: Update personal details such as age, weight, fitness goals, name, and email.
- **Automatic Calorie and Macronutrient Calculation**: Calculate daily calorie and macronutrient needs based on user-provided information.
- **Custom Calorie and Macronutrient Goals**: Manually set calorie and macronutrient targets.
- **Custom Food Database**: Add foods to the database by specifying their protein, carbohydrate, and fat content.
- **Daily Meal Tracker**: Track daily meals and their nutritional content.
- **Workout Tracker**: Record and monitor workouts and exercises.

## APIs

- **users**: Handles user information and authentication.
- **targets**: Manages user macronutrient and calorie targets.
- **meals**: Handles user meals and meal history.
- **foods**: Manages the user's food list.
- **workout**: Manages user exercises, workouts, and workout history.

## License

This project is licensed under the GPL 3.0 License.
