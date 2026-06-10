# KAI Portfolio - Server

### 1) Environment
Create `Server/.env` (or copy `.env.example`) and set:
```
DATABASE_URL="mongodb://127.0.0.1:27017/kai_portfolio"
PORT=3000

# SMTP / nodemailer settings for email sending (Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-gmail-app-password
EMAIL_FROM_NAME=Portfolio Website
EMAIL_FROM="Portfolio Website <your-gmail@gmail.com>"
EMAIL_TO=your-gmail@gmail.com
```

For Atlas, replace `DATABASE_URL` with your `mongodb+srv://...` URI and URL-encode special characters in password (example: `#` => `%23`).
For Gmail you must enable 2-Step Verification and use a 16-character App Password as `SMTP_PASS` (regular Gmail password will fail).

### 2) Run locally
```
cd Server
npm install
npm run dev
```
Server runs at `http://localhost:3000`.

### 3) API (used by the client)
- `GET    /api/portfolio` – list projects
- `GET    /api/portfolio/:id` – single project
- `POST   /api/portfolio` – create project
- `PUT    /api/portfolio/:id` – update project
- `DELETE /api/portfolio/:id` – delete project

### 4) Postman quick start
- Import a collection with the above routes (base URL `http://localhost:3000`).
- Add an `x-api-key` header to the collection if you set `API_KEY`.
- Body for create/update (JSON):
```json
{
  "title": "Portfolio Website",
  "description": "React + Tailwind site",
  "imageUrl": "https://.../screenshot.png",
  "liveUrl": "https://my-site.com",
  "githubUrl": "https://github.com/me/repo",
  "technologies": ["React", "Tailwind"],
  "tags": ["frontend"]
}
```

### 5) Deploy to Render
1. Push this repo to GitHub.
2. In [Render](https://render.com), create a **Web Service** from the repo (or use the root `render.yaml` Blueprint).
3. Set **Root Directory** to `Server`.
4. **Build command:** `npm install`
5. **Start command:** `npm start`
6. Add environment variables from `Server/.env.example` (especially `DATABASE_URL` and `CLIENT_URL`).
7. In MongoDB Atlas, allow access from anywhere (`0.0.0.0/0`) or Render’s IP range.
8. Health check: `GET /health`

### 6) Deploy frontend to Vercel
1. Import the repo in [Vercel](https://vercel.com).
2. Set **Root Directory** to `client`.
3. **Build command:** `npm run build`
4. **Output directory:** `dist`
5. Add env var: `VITE_API_URL` = your Render API URL (e.g. `https://kai-portfolio-api.onrender.com`).

### 7) Postman (production)
- Base URL: your Render service URL.
- Add header `x-api-key: <API_KEY>` if `API_KEY` is set on the server.
- `GET /api/contact/messages` requires the API key when configured.