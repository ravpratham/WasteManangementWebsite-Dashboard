# Hosting Your React Website on GoDaddy

This guide will help you deploy your React website (from the `Landing Page GDF 2` folder) to your GoDaddy domain using GoDaddy's own hosting.

---

## 1. Build Your React App

Open a terminal and run:

```sh
cd "Landing Page GDF 2"
npm install
npm run build
```

This creates a `dist/` folder with your production-ready site.

---

## 2. Log in to GoDaddy and Access Your Hosting

1. Go to [GoDaddy.com](https://www.godaddy.com/) and log in.
2. In your account dashboard, go to **My Products**.
3. Under **Web Hosting**, click **Manage** next to your hosting plan.

---

## 3. Upload Your Build Files

You need to upload the contents of your `dist/` folder to your GoDaddy hosting’s `public_html` directory.

### A. Using GoDaddy File Manager (Web UI)
1. In your hosting dashboard, open **cPanel**.
2. Click **File Manager**.
3. Navigate to the `public_html` folder.
4. Delete any default files (like `index.php`) if you want your React app to be the main site.
5. On your computer, open the `dist/` folder. Select all files and folders inside `dist/` (not the folder itself, just its contents).
6. In File Manager, click **Upload** and upload all selected files/folders.
7. Ensure `index.html` is directly inside `public_html`.

### B. Using FTP (FileZilla, etc.)
1. Download and install [FileZilla](https://filezilla-project.org/).
2. Get your FTP credentials from GoDaddy (in cPanel > FTP Accounts).
3. Connect to your site using FileZilla.
4. Navigate to `public_html` on the server.
5. On your computer, open the `dist/` folder and select all its contents.
6. Drag and drop them into `public_html`.

---

## 4. Check Your Site

- Go to your domain (e.g., `www.yourdomain.com`).
- Your React app should load!

---

## 5. (Optional) Set Up Routing for Single Page Apps

If you use React Router, add a `.htaccess` file to handle client-side routing.  
Create a file named `.htaccess` in `public_html` with this content:

```
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

This ensures all routes serve your `index.html`.

---

## 6. Troubleshooting

- If you see a GoDaddy default page, delete their `index.php` or other default files.
- If you get 404s on refresh, make sure you added the `.htaccess` file above.

---

## Summary Table

| Step                | What to Do                        |
|---------------------|------------------------------------|
| Build React app     | `npm run build` in project folder  |
| Upload files        | Upload `dist/` contents to `public_html` |
| Connect domain      | Already connected if using GoDaddy hosting |
| Routing (SPA)       | Add `.htaccess` for React Router   |

---

If you need help with any specific step (like FTP, cPanel, or `.htaccess`), let me know! 