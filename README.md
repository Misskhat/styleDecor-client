# StyleDecor — Smart Home & Ceremony Decoration Booking System

## Purpose

StyleDecor is a modern appointment management system for a local decoration company that offers both in-studio consultations and on-site decoration services for homes and ceremonies. Users can explore decoration packages, check decorator availability, select a date and time, choose a service mode, make payments, and track their service status.

## Live URL

Coming Soon

## Admin Credentials

- Email: (update before submission)
- Password: (update before submission)

## Key Features

- User Authentication — Firebase Email/Password and Google Login with JWT security
- Role-Based Access — Three roles: User, Admin, Decorator with protected routes
- Service Browsing — Search and filter by category and budget range
- Online Booking System — Book services with date, location, service selection
- Stripe Payment — Secure payment with transaction history
- User Dashboard — Manage bookings and payment history
- Admin Dashboard — Manage services, decorators, bookings, analytics
- Decorator Dashboard — View assigned projects, update status step by step
- Service Coverage Map — React Leaflet interactive map
- Animated Hero — Framer Motion animations
- Fully Responsive — Tailwind CSS and DaisyUI

## NPM Packages Used

### Frontend

| Package                 | Purpose             |
| ----------------------- | ------------------- |
| react                   | Core UI library     |
| react-router            | Client-side routing |
| firebase                | Authentication      |
| axios                   | API requests        |
| framer-motion           | Hero animations     |
| react-leaflet           | Coverage map        |
| @stripe/react-stripe-js | Payment UI          |
| react-hook-form         | Form handling       |
| react-toastify          | Notifications       |
| react-icons             | Icons               |
| tailwindcss             | Styling             |
| daisyui                 | UI components       |

### Backend

| Package       | Purpose               |
| ------------- | --------------------- |
| express       | Web server            |
| mongoose      | MongoDB ORM           |
| jsonwebtoken  | JWT auth              |
| cookie-parser | Cookie handling       |
| cors          | CORS config           |
| dotenv        | Environment variables |
| stripe        | Payment processing    |
