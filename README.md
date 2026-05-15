# StyleDecor — Smart Home & Ceremony Decoration Booking System

## Overview

StyleDecor is a modern full-stack decoration service booking platform designed for home, office, and ceremony decoration companies.

Users can explore decoration services, book appointments, make secure online payments, and track project progress through a personalized dashboard.

The platform includes three role-based dashboards:

- User Dashboard
- Admin Dashboard
- Decorator Dashboard

StyleDecor focuses on modern UI/UX, secure authentication, responsive design, and smooth booking management.

---

# Live Website

```bash
https://style-decor-client-seven.vercel.app
```

---

# Backend API

```bash
https://style-decor-server-chi.vercel.app
```

---

# GitHub Repository

## Frontend

```bash
https://github.com/Misskhat/styleDecor-client
```

## Backend

```bash
https://github.com/Misskhat/styleDecor-server
```

---

# Demo Credentials

## Admin Account

| Email           | Password |
| --------------- | -------- |
| admin@admin.com | admin123 |

---

## Decorator Account

| Email                   | Password     |
| ----------------------- | ------------ |
| decorator@decorator.com | decorator123 |

---

## User Account

| Email         | Password |
| ------------- | -------- |
| user@user.com | user123  |

---

# Key Features

## Authentication System

- Firebase Email & Password Login
- Google Authentication
- JWT Protected API
- Private Routes
- Role-Based Access Control

---

## User Features

- Browse decoration services
- Search services by name
- Filter services by category
- Book decoration services
- Make online payments
- View booking history
- View payment history
- Responsive dashboard experience

---

## Admin Features

- Manage all services
- Add new services
- Delete services
- Manage all users
- Make decorators
- View all bookings
- Assign decorators
- View all payment records

---

## Decorator Features

- View assigned projects
- Update project status
- Manage ongoing decoration work

---

## Payment System

- Stripe Payment Integration
- Secure card payment
- Payment history tracking
- Transaction ID generation

---

## UI & User Experience

- Fully Responsive Design
- Tailwind CSS Styling
- DaisyUI Components
- Modern Dashboard Layout
- Framer Motion Animations
- Interactive Service Cards
- Minimal & Clean Design

---

# Technology Stack

# Frontend

- React.js
- React Router
- Firebase Authentication
- Axios
- Tailwind CSS
- DaisyUI
- Framer Motion
- React Hook Form
- Stripe React SDK
- React Toastify
- React Icons

---

# Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Stripe API
- Cookie Parser
- CORS
- Dotenv

---

# NPM Packages Used

## Frontend Packages

| Package                 | Purpose             |
| ----------------------- | ------------------- |
| react                   | Frontend library    |
| react-router            | Client-side routing |
| firebase                | Authentication      |
| axios                   | API requests        |
| react-hook-form         | Form validation     |
| react-toastify          | Toast notifications |
| react-icons             | Icon library        |
| framer-motion           | Animations          |
| tailwindcss             | Utility-first CSS   |
| daisyui                 | UI components       |
| @stripe/react-stripe-js | Stripe payment UI   |
| @stripe/stripe-js       | Stripe SDK          |
| react-leaflet           | Interactive maps    |

---

## Backend Packages

| Package       | Purpose               |
| ------------- | --------------------- |
| express       | Backend framework     |
| mongoose      | MongoDB ODM           |
| jsonwebtoken  | JWT authentication    |
| cookie-parser | Cookie handling       |
| cors          | Cross-origin requests |
| dotenv        | Environment variables |
| stripe        | Payment processing    |
| nodemon       | Development server    |

---

# Environment Variables

## Frontend `.env`

```env
VITE_API_URL=your_backend_api_url

VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

---

# Installation & Setup

## Clone Frontend Repository

```bash
git clone https://github.com/Misskhat/styleDecor-client.git
```

---

## Go To Project Directory

```bash
cd styleDecor-client
```

---

## Install Dependencies

```bash
npm install
```

---

## Run Development Server

```bash
npm run dev
```

---

# Project Structure

```bash
src/
│
├── assets/
├── components/
├── firebase/
├── hooks/
├── layouts/
├── pages/
│   ├── Home/
│   ├── Services/
│   ├── ServiceDetails/
│   ├── Dashboard/
│   ├── Login/
│   ├── Registration/
│   └── Payment/
│
├── providers/
├── routes/
├── utility/
├── App.jsx
└── main.jsx
```

---

# Dashboard Routes

## User Dashboard

| Route                  | Access |
| ---------------------- | ------ |
| /dashboard/profile     | User   |
| /dashboard/my-bookings | User   |
| /dashboard/my-payments | User   |

---

## Admin Dashboard

| Route                      | Access |
| -------------------------- | ------ |
| /dashboard/manage-services | Admin  |
| /dashboard/manage-users    | Admin  |
| /dashboard/manage-bookings | Admin  |

---

## Decorator Dashboard

| Route                        | Access    |
| ---------------------------- | --------- |
| /dashboard/assigned-projects | Decorator |
| /dashboard/update-status     | Decorator |

---

# Payment Workflow

1. User books a service
2. User proceeds to payment
3. Stripe payment intent created
4. Card payment completed
5. Payment history stored in database
6. Booking payment status updated

---

# Future Improvements

- Service review & rating system
- Real-time notifications
- Email confirmation
- Booking invoice PDF
- Cloudinary image upload
- Advanced analytics dashboard
- Dark/Light theme switcher

---

# Deployment

## Frontend Hosting

- Vercel

## Backend Hosting

- Vercel

## Database

- MongoDB Atlas

---

# Developer

## Created By

Md. Misskhat Hossen

---

# License

This project is created for educational and portfolio purposes.
