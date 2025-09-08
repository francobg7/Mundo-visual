# - E-commerce Platform

**** is a modern e-commerce platform focused on wholesale product sales. It includes a client-facing storefront and a powerful admin dashboard.

## 🧾 Overview

Built with:

- **Next.js 15**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **Zustand**, **Zod**, **React Hook Form**

## 📂 Structure

e-commerce/
├── client/ # Storefront app
├── admin/ # Admin panel
└── README.md

shell
Copiar
Editar

## 🚀 Setup

### Requirements
- Node.js 18+
- pnpm (recommended)

### Client

```bash
cd e-commerce/client
pnpm install
pnpm dev
Admin
bash
Copiar
Editar
cd e-commerce/admin
pnpm install
pnpm dev
⚙️ Env Variables
Create .env.local in each folder:

Client

env
Copiar
Editar
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_key
Admin

env
Copiar
Editar
DATABASE_URL=your_db_url
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_key
📦 Deploy
Use Vercel or Docker for deployment.

🔗 Clone this repo

bash
Copiar
Editar
git clone https://github.com/your-username/mundo-visual.git