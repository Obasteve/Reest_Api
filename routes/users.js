// routes/users.js
import express from 'express'
import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/user.js';



const router = express.Router()


router.get('/', getUsers);           // GET /users
router.get('/:id', getUser);         // GET /users/:id
router.post('/', createUser);        // POST /users
router.patch('/:id', updateUser);    // PATCH /users/:id
router.delete('/:id', deleteUser);   // DELETE /users/:id

export default router;