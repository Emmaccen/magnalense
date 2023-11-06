# MagnaLenses - Next.js Ecommerce Eyewear Store

MagnaLenses is an e-commerce platform for purchasing customizable, affordable photochromic eyewear. This project implements the frontend web application using Next.js 13.

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.

## Functionality

The core functionality includes:

- Product browsing and filtering
- Customizable frames and lenses
- Shopping cart management
- Checkout and payments
- Order tracking
- Writing product reviews
- Admin content and inventory management
  -Analytics dashboard

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 13
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Recoil](https://recoiljs.org/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Payments**: Stripe || Paystack
- **Hosting**: [Vercel](https://vercel.com/)

## Data Models

The key data models include:

- **User** - shoppers and admins
- **Product** - glasses and lenses
- **Order** - carts, purchases
- **Review** - user reviews on products

## Customization

Shoppers can customize frames (color, shape) and lenses (type, treatments, prescriptions).

Admins can add/update products and manage content.

## Analytics

The app provides sales, traffic, and inventory analytics using Chart.js (Or other libs), React Hooks, and REST APIs.

## Styling

Tailwind CSS provides utility classes for rapid styling. The design is mobile-first and responsive.

## Testing

Please ensure existing and new tests pass before submitting a PR. Coverage should not drop below the current percentage.

- Unit tests using Jest
- Integration tests with Cypress
- Snapshot tests for React components
- Automated browser testing on CI

## Deployment

The app is deployed on Vercel and integrates with their Git workflow.

## Documentation

- Typescript generated documentation
- This README covers project overview
- Inline code comments explain logic

Here is a draft contribution guide section:

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repo

2. Create a new branch from `main` for your feature/fix

3. Make your changes, including tests

4. Build to confirm no errors

5. Commit your changes with a descriptive commit message

6. Push your branch and create a PR against `dev`

7. Link any relevant issues in the PR description

8. Update docs if needed

9. Wait for reviews and iterate as needed

### Coding Standards

Follow the existing coding style for consistency.

## Joining the Project

We welcome new contributors of all experience levels. Check out the open issues, especially "good first issue" ones. [Reach out](https://www.linkedin.com/in/emmanuel-lucius-emmaccen/) if you need any help getting started!

This project is bootstrapped under [Magnamentes](https://www.linkedin.com/company/magnamentes/)
