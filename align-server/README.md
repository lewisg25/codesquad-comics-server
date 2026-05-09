# personal-project-sample-server
A template for CodesSquad's Personal Project Sample


# 🚀 [Your-Project-Name]-server

## 📋 About This Repository
The back end (or server-side) of an application is the "brain" that lives behind the scenes, handling data processing, security, and communication with databases. We use a naming convention like `your-project-name-server` to clearly distinguish this codebase from your frontend (client) repository. This project follows the **MVC (Model-View-Controller)** architecture, which is an industry-standard way to organize code so that it remains readable and scalable as you add features like Authentication and Databases.

---

## 🎯 Personal Project: Step 4 Assignment
**Submission:** Submit your GitHub link for this repository. This is the final repo you will create for your personal project!

### **Requirements:**
- **Organization:** Use a clean file directory structure (MVC) that is easy to read.
- **Node/Express:** Demonstrate the ability to initialize a server from scratch with simple routing.
- **Routes & Controllers:** Successfully establish modular routes and logic controllers.
- **Future Goals:** This repo will eventually house your **MongoDB Atlas** connection (Unit 5) and your **Deployment** configuration (Unit 6).

---

## 📝 In-Class Assignments

### 1. The Handshake (Frontend + Backend)
Connect your existing Personal Project React app to your new server's **Health Endpoint**.
- Use `fetch` to call `http://localhost:3000/api/health`.
- Display the status message on your site to prove your "Full Stack" connection is live!

### 2. The Custom API Connection
Choose an outside API relevant to your project (e.g., PokeAPI, MovieDB, or NASA).
- Create a route in this server that fetches data from that API.
- Your frontend will call *this* server, which acts as the middleman to get the data.

---

## 🛠️ Setup & Installation
1. **Initialize:** `npm init -y`
2. **Install:** `npm install express morgan dotenv helmet`
3. **Dev Tool:** `npm install --save-dev nodemon`
4. **Environment:** Create a `.env` file and add `PORT=3000`.
5. **Run:** `npm run dev`

---

## 💡 Back End Tips
- **Unit 5 (Data):** You will soon implement **CRUD** (Create, Read, Update, Delete) using MongoDB.
- **Unit 8 (Auth):** We will add Signup and Login features using Google Auth and encrypted passwords.
- **Deployment:** When we launch, you will refactor your `fetch` calls from `localhost` to your live URL.