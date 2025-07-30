# 📝 Blogging Platform

A minimalistic and clean blogging platform built using **Node.js**, **Express.js**, and **EJS templating**.  
It allows users to compose, publish, and view blog posts — all stored in memory (no database required).

> ⚡ Simple. Elegant. No database. Just pure Node and Express.

---


## 📌 Features

- 📝 Create new blog posts with title and content
- 🗃️ View all posts on the home page
- 🔍 Click any post to read its full content
- 📄 Static "About" and "Contact" pages
- 🧠 In-memory data storage (no database used)
- 🌐 Clean UI using EJS and custom CSS

---

## 🗂️ Project Structure
```
Blogging Platform/
├── views/
│ ├── partials/
│ │ ├── header.ejs
│ │ └── footer.ejs
│ ├── home.ejs
│ ├── post.ejs
│ ├── about.ejs
│ ├── contact.ejs
│ └── compose.ejs
├── public/
│ └── css/
│ └── styles.css
├── app.js
├── package.json
└── README.md
```
---


## 🧑‍💻 Tech Stack

- **Node.js** – Backend runtime
- **Express.js** – Server framework
- **EJS** – Templating engine
- **HTML5 / CSS3** – Frontend styling
- **Body-Parser** – Middleware for parsing form data



---

## 📦 Installation & Run Locally

```bash
git clone https://github.com/KhushiY215/blogging-platform.git
cd blogging-platform
npm install
node app.js
```

Visit http://localhost:3000 to view the app.

## 🛠️ Future Improvements

- Add persistent database (MongoDB or SQLite)
- Add user authentication
- Rich-text editor support for posts
- Edit/Delete post functionality
- Deploy live with HTTPS

## 🤝 Contributing
Contributions are welcome!
Please fork the repo and open a pull request with your feature or fix.

## 🙋‍♀️ Author
Made by Khushi
