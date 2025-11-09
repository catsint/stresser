<div align="center">
  <img width=115 src="https://github.com/user-attachments/assets/4ad8438e-d63f-4d8b-b44b-7001be28b81f" />
  <h1>Atomic Stresser</h1>
</div>

> ⚠️ **Project in active development** — some features may still be in progress.

**AtomicStresser** is a powerful and modern stress testing platform built with:

* ✅ Next.js + Tailwind CSS (frontend)
* 📌 API to manage users, plans, methods and attack dispatch (**active development**)
* ✅ Dual-layer architecture (L4 and L7 methods)
* ✅ Admin panel for user and server control
* ✅ Beautiful, dark UI with animations using Framer Motion

---

## Features

* Layer 4 & Layer 7 attack methods (legal use only)
* Cloudflare, OVH and other anti-DDoS bypass techniques (with NetStorm script)
* Real-time dashboard and charts
* Admin panel to manage users, slots, plans and expiration
* Toast system for notifications
* Responsive UI for mobile and desktop
* Sidebar with icon-only design and hover label

---

## Dashboard
![image](https://github.com/user-attachments/assets/ff9cae17-2489-4fef-8823-315ff4b1fcd8)

---

## Getting Started

```bash
# Clone the project
git clone https://github.com/CirqueiraDev/AtomicStresser
cd AtomicStresser

# Install dependencies
npm install

# Configure environment variables
# Copy .env.example to .env.local and update the API URL if needed
cp .env.example .env.local

# Run in development
npm run dev
```

### Environment Variables

Create a `.env.local` file in the root directory with the following:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

**Important:** Make sure your backend API server is running on the configured URL before using the application. The default is `http://localhost:8000`.

---

## 🚀 Deployment to Netlify

### Prerequisites
- Your backend API server must be deployed and accessible via HTTPS
- You need the production URL of your backend API

### Steps to Deploy

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Connect your repository to Netlify:**
   - Go to [Netlify Dashboard](https://app.netlify.com)
   - Click "Add new site" > "Import an existing project"
   - Connect your Git repository

3. **Configure Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - These are already configured in `netlify.toml`

4. **Set Environment Variables:**
   - In Netlify Dashboard, go to: **Site settings** > **Environment variables**
   - Click **Add variable**
   - Add the following variable:
     - **Key:** `NEXT_PUBLIC_API_URL`
     - **Value:** Your production API URL (e.g., `https://api.yourdomain.com`)
   - Click **Save**

5. **Deploy:**
   - Netlify will automatically build and deploy your site
   - After deployment, your site will use the configured API URL

### Important Notes:
- ⚠️ The `NEXT_PUBLIC_API_URL` variable must start with `NEXT_PUBLIC_` to be accessible in the browser
- ⚠️ Your backend API must support CORS requests from your Netlify domain
- ⚠️ Make sure your backend API uses HTTPS in production
- ⚠️ After adding/changing environment variables, you need to trigger a new deployment

### Troubleshooting Build Errors:

**If you see "Module not found" errors:**
1. Make sure all files are committed to git (especially `src/components/` and `src/lib/` directories)
2. Verify that path aliases are working - the project uses `@/` for imports
3. Check that `next.config.js` has webpack alias configuration (already included)
4. Ensure `tsconfig.json` has `baseUrl` and `paths` configured (already included)

**If you see "Cannot connect to server" errors:**
1. `NEXT_PUBLIC_API_URL` is set correctly in Netlify
2. Your backend API is running and accessible
3. CORS is properly configured on your backend
4. The API URL uses HTTPS (not HTTP) in production

**If build fails with Node version issues:**
- The project is configured for Node 18-22 (see `.nvmrc` and `package.json`)
- Netlify should automatically use the correct version, but you can pin it in Netlify settings if needed

---

## 🧪 Legal Disclaimer

> This platform is designed strictly for **authorized stress testing** purposes and **educational research**. You must own the target or have explicit permission to test it. The author is **not responsible for misuse**.

---

## Project Structure

```
src/
├── app/
│   ├── admin/
│   │   ├── page.tsx                  ← Admin page (users, plans, methods)
│
│   ├── dashboard/
│   │   └── page.tsx                  ← Main dashboard (stats, quick access, etc.)
│
│   ├── login/
│   │   └── page.tsx                  ← Login screen
│
│   ├── panel/
│   │   └── page.tsx                  ← Attack panel with L4/L7 + logs
│
│   ├── profile/
│   │   └── page.tsx                  ← User profile
│
│   ├── register/
│   │   └── page.tsx                  ← Registration screen
│
│   ├── layout.tsx                   ← Main layout of the app (likely with sidebar/header)
│   ├── globals.css                  ← Global styles
│   └── ClientBody.tsx               ← Likely a wrapper with context
│
├── components/
│   ├── admin/
│   │   ├── PlanManagement.tsx
│   │   ├── StressMethods.tsx
│   │   └── UserManagement.tsx
│
│   ├── home/
│   │   ├── FaqSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── MethodsSection.tsx
│   │   └── PriceSection.tsx
│
│   ├── panel/
│   │   ├── Layer4Form.tsx           ← Layer 4 attack form
│   │   ├── Layer7Form.tsx           ← Layer 7 attack form
│   │   └── AttackLogs.tsx           ← Attack logs table
│
│   ├── header.tsx                   ← Fixed or dynamic header
│   ├── sidebar.tsx                  ← Sidebar menu (likely used in layout.tsx)
│   ├── RouteGuard.tsx               ← Protected route wrapper
│   ├── ToastPopup.tsx               ← Custom notification/toast component
│   └── TopLoadingBar.tsx            ← Top loading progress bar (like YouTube)
│
├── contexts/
│   ├── AuthContext.tsx              ← Authentication context
│   └── SidebarContext.tsx           ← Sidebar visibility control context
│
├── lib/
│   ├── api.ts                       ← Axios instance or API config
│   └── util.ts                      ← Utility/helper functions

```

---

###
- For more information, contact me: [Telegram](https://t.me/cirqueiraz)
- **Discord: Cirqueira**
- <a href="https://www.instagram.com/cirqueirax/">Instagram</a>


## License

MIT License © 2025 — [AtomicStresser Team](#)
