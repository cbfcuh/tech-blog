const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all comments for a post
router.get('/', withAuth, async (req, res) => {
    try {
        if (!req.session.post_id) {
            return res.status(400).json({ message: 'Post ID is missing' });
        }

        const allComments = await Comment.findAll({
            where: { post_id: req.session.post_id }, 
        });

        if (allComments.length === 0) {
            return res.status(404).json({ message: 'No comments found for this post' });
        }

        res.status(200).json(allComments);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Post a new comment
router.post('/', withAuth, async (req, res) => {
    try {
        const { body, post_id } = req.body;

        
        if (!body || !post_id) {
            return res.status(400).json({ message: 'Comment body and post ID are required' });
        }

        const newComment = await Comment.create({
            body: req.body.body,
            user_id: req.session.user_id,
            post_id: req.body.post_id,
        });

        res.status(201).json(newComment); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
