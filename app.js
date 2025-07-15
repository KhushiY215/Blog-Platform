import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

let posts = [];

app.get("/", (req, res) => {
  res.render("home", { posts });
});

app.get("/compose", (req, res) => {
  res.render("compose");
});

app.post("/compose", (req, res) => {
  const post = {
    title: req.body.title,
    content: req.body.content,
  };
  posts.push(post);
  res.redirect("/");
});

app.get("/posts/:postTitle", (req, res) => {
  const requestedTitle = req.params.postTitle.toLowerCase();
  const post = posts.find(p => p.title.toLowerCase() === requestedTitle);

  if (post) {
    res.render("post", { post });
  } else {
    res.status(404).send("Post not found");
  }
});

// Delete (basic simulation)
app.post("/delete", (req, res) => {
  const titleToDelete = req.body.title.toLowerCase();
  posts = posts.filter(p => p.title.toLowerCase() !== titleToDelete);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
