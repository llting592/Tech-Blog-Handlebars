const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');
//Add a comment 

router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      userId: req.session.userId,
    });
    res.json(newComment);
  } catch (err) {
    
    res.redirect('login');
  }
});

module.exports = router;
