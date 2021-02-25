const express = require('express');
const users = require('./users-model');
const {
  findUserMiddleware,
  checkUserMiddleware,
} = require('../middlewares/user');

const router = express.Router();

router.get('/users', (req, res, next) => {
  const options = {
    sortBy: req.query.sortBy,
    limit: req.query.limit,
  };

  users
    .find(options)
    .then((users) => {
      res.status(200).json(users);
    })
    .catch(next);
});

router.get('/users/:id', findUserMiddleware(), (req, res, next) => {
  res.status(200).json(req.user);
});

router.post('/users', checkUserMiddleware(), (req, res, next) => {
  users
    .add(req.body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch(next);
});

router.put(
  '/users/:id',
  checkUserMiddleware(),
  findUserMiddleware(),
  (req, res, next) => {
    users
      .update(req.params.id, req.body)
      .then((user) => {
        if (user) {
          res.status(200).json(user);
        } else {
          res.status(404).json({
            message: 'The user could not be found',
          });
        }
      })
      .catch(next);
  }
);

router.delete('/users/:id', findUserMiddleware(), (req, res, next) => {
  users
    .remove(req.params.id)
    .then((count) => {
      if (count > 0) {
        res.status(200).json({
          message: 'The user has been nuked',
        });
      } else {
        res.status(404).json({
          message: 'The user could not be found',
        });
      }
    })
    .catch(next);
});

router.get('/users/:id/posts', findUserMiddleware(), (req, res, next) => {
  users
    .findUserPosts(req.params.id)
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch(next); // shortcut
});

router.get('/users/:id/posts/:postId', findUserMiddleware(), (req, res, next) => {
  users
    .findUserPostById(req.params.id, req.params.postId)
    .then((post) => {
      if (post) {
        res.json(post);
      } else {
        res.status(404).json({
          message: 'Post was not found',
        });
      }
    })
    .catch(next);
});

router.post('/users/:id/posts', findUserMiddleware(), (req, res, next) => {
  if (!req.body.text) {
    return res.status(400).json({
      message: 'Need a value for text',
    });
  }

  users
    .addUserPost(req.params.id, req.body)
    .then((post) => {
      res.status(201).json(post);
    })
    .catch(next);
});

module.exports = router;
