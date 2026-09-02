# LittleNest (Sweet Baby) — Fullstack Baby & Kids E-Commerce Store

Modern e-commerce platform for baby and kids essentials, clothing, nursery, toys, and maternity products.

---

## 🏗️ Project Architecture

```
LittleNest/
├── frontend/                   # React 18 + TypeScript + Vite 6 + Tailwind CSS v4
│   ├── src/
│   │   ├── admin/              # Complete Admin Console (/admin/*)
│   │   │   ├── AdminDashboard.tsx
│   │   │   ├── AdminProducts.tsx
│   │   │   ├── AdminCategories.tsx
│   │   │   ├── AdminOrders.tsx
│   │   │   ├── AdminBanners.tsx
│   │   │   ├── AdminCustomers.tsx
│   │   │   └── AdminLogin.tsx
│   │   ├── api/                # API Client communicating with Go Fiber REST API
│   │   ├── components/         # Storefront reusable UI & Modals
│   │   ├── pages/              # Customer-facing storefront pages
│   │   ├── store/              # Zustand global state
│   │   └── types.ts            # TypeScript data definitions
│   ├── package.json
│   └── vite.config.js
│
├── backend/                    # High-Performance Golang + Fiber Engine
│   ├── cmd/api/main.go         # Application Server Entrypoint
│   ├── config/config.go        # Environment parser & server settings
│   ├── internal/
│   │   ├── database/           # GORM DB connection, Auto-migrations & Rich Seeder
│   │   ├── models/             # GORM entities (User, Product, Category, Order, Banner, Review)
│   │   ├── handlers/           # HTTP controllers (Auth, Products, Orders, Admin, Upload)
│   │   ├── middleware/         # JWT Auth Guard, AdminOnly, CORS, Logger, Recover
│   │   └── utils/              # Password bcrypt, JWT token generator, JSON envelopes
│   ├── uploads/                # Product & promotional media storage
│   ├── go.mod & go.sum
│   └── .env
│
├── DESIGN.md                   # Visual design token specifications & brand rationale
└── README.md
```

---

## 🚀 Quick Start Guide

### 1. Start the Golang Fiber Backend

```bash
cd backend
go run cmd/api/main.go
```
- Server URL: `http://localhost:8080`
- API Health check: `http://localhost:8080/api/v1/health`

### 2. Start the Frontend Dev Server

```bash
cd frontend
npm install
npm run dev
```
- Storefront URL: `http://localhost:5173/`
- Admin Portal URL: `http://localhost:5173/admin/login`

---

## 👑 Master Admin Credentials

- **Email**: `admin@littlenest.com`
- **Password**: `Admin@12345`
*(Click the "1-Click Demo Fill" button on the admin login screen for fast testing)*

---

## 📡 REST API Reference

| Endpoint | Method | Access | Description |
| :--- | :--- | :--- | :--- |
| `/api/v1/health` | `GET` | Public | Backend health probe |
| `/api/v1/auth/register` | `POST` | Public | Customer account registration |
| `/api/v1/auth/login` | `POST` | Public | Login & JWT issuance |
| `/api/v1/auth/me` | `GET` | Authenticated | Current user profile |
| `/api/v1/categories` | `GET` | Public | List categories with subcategories |
| `/api/v1/products` | `GET` | Public | Filtered & paginated product catalog |
| `/api/v1/products/:id` | `GET` | Public | Product details & parent reviews |
| `/api/v1/banners` | `GET` | Public | Homepage promotional hero sliders |
| `/api/v1/orders` | `POST` | Public / Auth | Place a customer order |
| `/api/v1/orders/my-orders` | `GET` | Authenticated | Customer order history |
| `/api/v1/admin/dashboard/stats`| `GET` | Admin Only | KPI metrics, revenue, inventory alerts |
| `/api/v1/admin/products` | `GET/POST` | Admin Only | Inventory overview & create product |
| `/api/v1/admin/products/:id` | `PUT/DELETE`| Admin Only | Edit & delete product |
| `/api/v1/admin/categories` | `GET/POST` | Admin Only | Categories taxonomy management |
| `/api/v1/admin/categories/:id`| `PUT/DELETE`| Admin Only | Edit & delete category |
| `/api/v1/admin/orders` | `GET` | Admin Only | Filter all store orders |
| `/api/v1/admin/orders/:id/status`| `PATCH` | Admin Only | Update order lifecycle status |
| `/api/v1/admin/upload` | `POST` | Admin Only | Multi-format image file uploader |
| `/api/v1/admin/banners` | `GET/POST` | Admin Only | Manage promotional sliders |
| `/api/v1/admin/customers` | `GET` | Admin Only | View registered customers list |
