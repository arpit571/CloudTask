# ☁️ CloudTask

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white"/>
  <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black"/>
</p>

<p align="center">
A Dockerized full-stack Task Management application built using the MERN stack to demonstrate containerization, cloud deployment, and production-ready application architecture.
</p>

---

## 🚀 Live Demo

### Frontend

https://cloudtask-4tir.onrender.com/

### Backend API

https://cloudtask-backend-c5ny.onrender.com/

---

## 📖 Overview

CloudTask is a lightweight full-stack task management application built to learn modern deployment workflows with Docker and cloud platforms.

The project demonstrates:

- Docker containerization
- Multi-stage Docker builds
- Nginx production server
- MongoDB Atlas integration
- Environment variable management
- Cloud deployment using Render

---

## ✨ Features

- Create Tasks
- View Tasks
- Update Task Status
- Delete Tasks
- REST API
- MongoDB Atlas
- Dockerized Frontend
- Dockerized Backend
- Multi-stage Docker Build
- Production Deployment

---

## 🛠 Tech Stack

### Frontend

- React
- Vite
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### DevOps

- Docker
- Docker Compose
- Nginx
- Render

---

## 🏗 Architecture

```text
                Internet
                    │
      ┌─────────────┴─────────────┐
      │                           │
      ▼                           ▼
 React + Nginx             Express API
   (Docker)                 (Docker)
      │                           │
      └─────────────┬─────────────┘
                    │
                    ▼
              MongoDB Atlas
```

---

## 📂 Project Structure

```text
CloudTask
│
├── client/
├── server/
├── images/
├── docker-compose.yml
└── README.md
```

---

## 📸 Application

<p align="center">
  <img src="images/cloudtask-home.png" width="900">
</p>

---

## ⚙️ Environment Variables

### Server

```env
PORT=5000
MONGO_URI=your_connection_string
```

### Client

```env
VITE_API_URL=http://localhost:5000/api/tasks
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/tasks | Get all tasks |
| POST | /api/tasks | Create task |
| PUT | /api/tasks/:id | Toggle task status |
| DELETE | /api/tasks/:id | Delete task |

---

## 🚀 Local Setup

Clone the repository

```bash
git clone https://github.com/arpit571/CloudTask.git
```

Move into the project

```bash
cd CloudTask
```

Start using Docker

```bash
docker compose up --build
```

---

## 🌐 Deployment

| Service | Platform |
|----------|----------|
| Frontend | Render |
| Backend | Render |
| Database | MongoDB Atlas |

---

## 📚 What I Learned

- Docker fundamentals
- Multi-stage Docker builds
- Containerizing MERN applications
- Nginx production deployment
- MongoDB Atlas
- Environment variables
- Cloud deployment with Render
- Debugging deployment issues

---

## 🔮 Future Improvements

- Authentication
- Task Categories
- Task Priority
- Due Dates
- Search & Filter
- CI/CD Pipeline
- Kubernetes Deployment

---

## 👨‍💻 Author

**Arpit Upadhyay**

GitHub: https://github.com/arpit571

---

⭐ If you found this project useful, consider giving it a star.
