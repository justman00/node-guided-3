const db = require('../data/config');

function find(query = {}) {
  const { page = 1, limit = 100, sortBy = 'id', sortDir = 'asc' } = query;
  const offset = limit * (page - 1);

  return db('users')
    .orderBy(sortBy, sortDir)
    .limit(limit)
    .offset(offset)
    .select();
}

function findById(id) {
  return db('users').where({ id }).first();
}

async function add(hub) {
  const [id] = await db('users').insert(hub);
  return findById(id);
}

function remove(id) {
  return db('users').where({ id }).del();
}

async function update(id, changes) {
  await db('users').where({ id }).update(changes);

  return findById(id);
}

function findUserPosts(userId) {
  return db('posts as p')
    .join('users as u', 'p.user_id', 'u.id')
    .where({ user_id: userId })
    .select(['p.id', 'p.text', 'u.name as user']);
}

function findUserPostById(userId, id) {
  return db('posts').where({ id, user_id: userId }).first();
}

async function addUserPost(userId, post) {
  const data = { user_id: userId, ...post };
  const [id] = await db('posts').insert(data);

  return findUserPostById(userId, id);
}

module.exports = {
  find,
  findById,
  add,
  remove,
  update,
  findUserPosts,
  findUserPostById,
  addUserPost,
};
