# Retro Vault - Chapter 4: Nginx Reverse Proxy & Gzip Compression

This section covers the configuration for setting up Nginx as a local Reverse Proxy and enabling Gzip compression for the **Retro Vault** web application.

---

## 🎯 Objectives
* Configure **Nginx** as a reverse proxy on Port `80` to forward traffic to the local application running on Port `3000`.
* Enable **Gzip Compression** to reduce static asset sizes (`.css`, `.js`, etc.) and speed up resource loading.

---

## ⚙️ Nginx Configuration (`nginx.conf`)

```nginx
worker_processes  1;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;

    # 1. Enable Gzip Compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    gzip_min_length 256;

    # 2. Main Server Block (Reverse Proxy to Port 3000)
    server {
        listen       80;
        server_name  localhost;

        location / {
            proxy_pass [http://127.0.0.1:3000](http://127.0.0.1:3000);
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
}
---

## 🚀 Verification & Testing

1. **Proxy Verification**:
   * Open `http://localhost` in the browser. It successfully routes requests to `http://127.0.0.1:3000`.

2. **Gzip Verification**:
   * Open Chrome DevTools (`F12`) ➔ **Network** tab.
   * Inspect static files like `script.js` or `style.css`.
   * Check **Response Headers** for:
     * `Content-Encoding: gzip`
     * `Server: nginx/1.26.2`