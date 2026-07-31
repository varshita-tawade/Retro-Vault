# 🐳 Chapter 5: Dockerization & Nginx Proxy Manager Setup

## 📌 Overview
In Chapter 5, the **Retro Vault** application is fully containerized using **Docker** and orchestrated alongside **Nginx Proxy Manager (NPM)** via Docker Compose. 

This architecture replaces manual server configuration with a dynamic, multi-container deployment. NPM provides an intuitive Web UI to manage Reverse Proxy routes, Access Control Lists (Basic Auth), and SSL/TLS certificates efficiently.

---

## 🛠️ Key Features & Architecture
* **Multi-Container Deployment:** Managed seamlessly via Docker Compose for isolated and reproducible environments.
* **Nginx Proxy Manager (NPM):** Graphical UI for dynamic routing and proxy administration.
* **Proxy Host Routing:** Maps incoming external HTTP requests on Port `80` to the internal application service on Port `3000`.
* **Access Control Lists (Basic Auth):** Enforces user authentication (Username/Password) at the proxy level before traffic hits the application.
* **Exploit Mitigation & Security:** Built-in protection to block common web exploits and support for SSL/TLS certificates.

---
Step-by-Step Execution
**Before starting Docker containers, ensure no background standalone Nginx process is occupying Port 80 or 443:
.\nginx -s stop

**Access Nginx Proxy Manager (NPM) Dashboard
Open your web browser and navigate to http://localhost:81.
Log in using the default NPM credentials:
Email: admin@example.com
Password: changeme
Update your admin profile details and password when prompted.

**Create Access Control List (Basic Auth)
In the NPM dashboard, click on Access Lists in the top navigation bar.
Click Add Access List.
Under the Details tab:
Name: Retro Vault Protection
Switch to the Authorization tab:
Add a new Username and Password .
Click Save.

**Configure Proxy Host