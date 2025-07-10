# 👥 Nuxt 3 Mini Users CRUD App

This is a small CRUD module built using **Nuxt 3**, **TypeScript**, **Pinia**, and **Tailwind CSS**.  
It demonstrates authentication, routing, middleware, state management, and reusable components.

---

## 🚀 Features

- 🔐 **Fake Login System** with hardcoded user (admin@example.com / password)
- 👥 **Users Management**
  - View users in a paginated & searchable table
  - Add, Edit, and Delete users
- 🧩 **Reusable Components**
  - `<UserForm />` for both Create & Edit
  - `<DataTable />` to render dynamic tables
- 🧠 **State Management**
  - Users and Auth state handled using Pinia
- 🔐 **Route Protection**
  - `/users` is protected using middleware
- 💅 **Tailwind CSS** for fast and clean UI

---

## 🛠️ Setup Instructions

```bash
# 1. Clone the repo
git clone https://github.com/kholoud93/nuxt3-users-crud.git
cd nuxt3-users-crud

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev


