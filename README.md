# 🔍 Detective Portfolio — Case File #2026

> A detective-themed interactive MERN portfolio for **Aatiqah Harmin**

Visitors become detectives investigating a fictional case file to uncover your identity, skills, projects, education, and achievements.

---

## 🚀 Quick Start

### Prerequisites
- Node.js v18+
- MongoDB (local or MongoDB Atlas)
- npm

### Installation

```bash
# Clone / unzip the project
cd detective-portfolio

# Install all dependencies (root + client + server)
npm run install-all
```

### Configuration

```bash
# Copy the example env file
cp server/.env.example server/.env

# Edit server/.env with your values:
# MONGODB_URI=mongodb://localhost:27017/detective-portfolio
# JWT_SECRET=your_secret_key
# ADMIN_USERNAME=admin
# ADMIN_PASSWORD=detective2026
```

### Run in Development

```bash
# From the root directory — runs both client and server
npm run dev

# Or separately:
npm run server   # Express API on :5000
npm run client   # React dev server on :3000
```

### Production Build

```bash
npm run build     # Builds React client
cd server && npm start    # Serves everything on :5000
```

---

## 🗂️ Project Structure

```
detective-portfolio/
├── client/                  # React frontend
│   └── src/
│       ├── pages/
│       │   ├── Landing.js           # Animated detective office
│       │   ├── EvidenceBoard.js     # Cork board navigation
│       │   ├── Profile.js           # Suspect profile
│       │   ├── Education.js         # Academic records
│       │   ├── Skills.js            # Skill threat analysis
│       │   ├── Projects.js          # Case files (projects)
│       │   ├── Experience.js        # Investigation timeline
│       │   ├── Achievements.js      # Vault unlock system
│       │   ├── Contact.js           # Terminal contact form
│       │   ├── AdminLogin.js        # Admin access
│       │   └── AdminDashboard.js    # CRUD management
│       ├── components/
│       │   ├── Navbar.js
│       │   └── ProtectedRoute.js
│       └── context/
│           └── AuthContext.js
│
└── server/                  # Express backend
    ├── server.js
    ├── models/
    │   ├── Project.js
    │   ├── Contact.js
    │   └── Visitor.js
    ├── routes/
    │   ├── auth.js          # JWT admin login
    │   ├── projects.js      # CRUD for projects
    │   ├── contact.js       # Contact form messages
    │   └── visitors.js      # Visitor tracking + leaderboard
    └── middleware/
        └── auth.js          # JWT verification
```

---

## 🔐 Admin Panel

Visit `/admin` in the browser.

Default credentials (change in `.env`):
- Username: `admin`
- Password: `detective2026`

From the admin dashboard you can:
- Add / delete projects dynamically
- View contact messages (extend routes as needed)

---

## 🌐 API Routes

| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| POST | /api/auth/login | — | Admin login |
| GET | /api/projects | — | Get all projects |
| POST | /api/projects | ✓ Admin | Add project |
| PUT | /api/projects/:id | ✓ Admin | Update project |
| DELETE | /api/projects/:id | ✓ Admin | Delete project |
| POST | /api/contact | — | Submit contact form |
| GET | /api/contact | ✓ Admin | View all messages |
| POST | /api/visitors/track | — | Track visitor progress |
| GET | /api/visitors/leaderboard | — | Top 10 detectives |

---

## 🎨 Theme

| Variable | Value |
|----------|-------|
| Background | `#0a0808` — deep noir |
| Accent | `#d4890a` — amber lamp |
| Danger | `#c0392b` — red string |
| Paper | `#d4b483` — worn yellow |
| Font (headings) | Special Elite (typewriter) |
| Font (body) | Courier Prime (monospace) |

---

## 📈 Phase 2 Enhancements (TODO)

- [ ] Add Skill model + admin CRUD for skills
- [ ] Add Experience model + admin CRUD
- [ ] Hidden clue easter eggs (secret code SHOW_SECRET)
- [ ] Visitor leaderboard page
- [ ] AI detective assistant chatbot
- [ ] Image upload for project screenshots
- [ ] Dark/light theme toggle

---

## 🧰 Tech Stack

**Frontend:** React 18, React Router v6, Framer Motion, Axios
**Backend:** Node.js, Express.js
**Database:** MongoDB, Mongoose
**Auth:** JWT, bcryptjs
**Fonts:** Special Elite, Courier Prime, Oswald (Google Fonts)

---

Built for Aatiqah Harmin — Case File #2026 🔍
