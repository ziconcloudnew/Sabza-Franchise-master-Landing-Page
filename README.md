# 🏢 Sabza Franchise  
Business development & lead generation platform designed to expand SABZA’s global presence in carbon credit markets.  

---

# 🎯 Overview  
**Sabza Franchise** is a business development and lead generation platform designed to expand SABZA’s global presence in carbon credit markets.  

It allows potential franchisees and partners to:  
- 🤝 Connect with SABZA  
- 📅 Book consultations  
- 🌍 Explore partnership opportunities  

The system captures leads through a **consultation form**, organizes them in a **MongoDB database**, and supports franchise expansion strategies across **target regions**.  

---

# 👥 User Preferences  
- Users want to **book a consultation** easily through a floating form.  
- Users expect **quick responses** and confirmation after submitting interest.  
- Users want clarity about SABZA’s **franchise benefits and how it works**.  
- Users expect a **professional and smooth UI/UX** for engagement.  

---

# 🏗️ System Architecture  

## 🧩 Architecture Overview  
The platform follows a **frontend–backend–database** model:  
- **Frontend**: React components providing UI/UX for consultation, global impact, and franchise details.  
- **Backend**: Flask API that handles consultation form submissions and saves them into MongoDB.  
- **Database**: MongoDB to store all consultation leads securely.  

---

## 🎨 Frontend Architecture  
- Built with **React and TailwindCSS** for styling.  
- Floating **Consultation Form** enables franchise booking requests.  
- Informational sections include:  
  - 🌍 **Global Impact Section** → highlights target regions and ideal partners.  
  - 🔗 **How It Works Section** → explains franchise process and benefits.  
- **Axios** is used for API calls.  
- State management with **React hooks**.  

---

## ⚙️ Backend Architecture  
- **Flask API** exposing endpoints for consultation and contact forms.  
- **Blueprints** organize routes (e.g., `contact_bp`).  
- **Flask-CORS** enabled for frontend integration.  
- MongoDB initialized with `init_db(app)`.  

---

## 🔄 Data Flow  
1. User opens the franchise page.  
2. Frontend displays **Consultation Form** and informational sections.  
3. User submits form → Axios sends POST request to Flask backend (`/api/contact/token_swapping`).  
4. Flask backend validates request and inserts data into MongoDB.  
5. Lead stored with metadata (lead type, org, source).  
6. Confirmation shown to user.  

---

# 🗄️ Data Storage Solutions  
- **MongoDB**: Stores leads (name, email, phone, date, time, message, source).  

---

# 🧱 Database Schema Design  
**Leads Collection**:  
- `name`  
- `email`  
- `phone`  
- `date`  
- `time`  
- `message`  
- `lead` (e.g., "Sabza Franchise")  
- `org` (e.g., "SABZA")  
- `source` (form source, e.g., "Consultation Form")  

---

# 🛠️ Development & Build Process  
- **Frontend**: React + Vite build process.  
- **Backend**: Flask app with modular blueprints.  
- **Database**: MongoDB initialized via `init_db(app)`.  
- Dev environment runs frontend on **port 5174–5177** and backend on **port 5050**.  

---

# 📦 External Dependencies  

## 🎨 Frontend  
- **React** (UI framework)  
- **Axios** (API requests)  
- **TailwindCSS** (styling)  
- **Lucide-react** (icons)  

## ⚙️ Backend  
- **Flask** (Python web framework)  
- **Flask-CORS** (cross-origin resource sharing)  
- **Flask-PyMongo** (MongoDB integration)  
- **dotenv** (environment variable management)  

## 🗄️ Database & Storage  
- **MongoDB Atlas** (lead storage).  

## 🛠️ Development Tools  
- **Vite** (frontend build tool)  
- **Node.js** (frontend runtime)  
- **Python** (backend runtime)  

---

## 🎨 Styling & Themes  
- **TailwindCSS** for styling consistency.  
- **Cards and Modals** for presenting information and forms.  
- **Clean minimal UI** optimized for lead capture.  

## How to run the project
- Open bash terminal to root of project
- Direct to folder containing backend
- py app.py OR python app.py to run backend
- Open new terminal
- Direct to folder containing main project
- npm run dev to run frontend
