const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");


const handleServerError = (err, res) => {
  console.error(err);
  res.status(500).json({ error: 'Server error' });
};

// Get all posts with username
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);

    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    handleServerError(err, res);
  }
});

// Get a post by ID 
router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (!postData) {
      res.status(404).json({ error: 'Post not found' });
      return;
    }

    const post = postData.get({ plain: true });
    console.log(post);

    res.render("post", {
      post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    handleServerError(err, res);
  }
});

// Login page route
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/homepage");
    return;
  }

  // Render the login page
  res.render("login");
});

router.get("/newpost", withAuth, (req, res) => {
  res.render("newpost", { logged_in: req.session.logged_in });
});

// Dashboard route 
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);

    
    res.render("dashboard", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    handleServerError(err, res);
  }
});

// Comment page route
router.get("/comment", withAuth, (req, res) => {
  // Render the comment page if the user is logged in
  res.render("comment");
});

module.exports = router;
