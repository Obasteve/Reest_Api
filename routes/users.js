
import express from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from '../controllers/user.js';

const router = express.Router();

// GET /users - Get all users
router.get('/', getAllUsers);

// GET /users/:id - Get single user by ID
router.get('/:id', getUserById);

// POST /users - Create new user
router.post('/', createUser);

// PUT /users/:id - Update user by ID
router.put('/:id', updateUser);

// DELETE /users/:id - Delete user by ID
router.delete('/:id', deleteUser);

export default router;
