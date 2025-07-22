
import { v4 as uuidv4 } from 'uuid';

// In-memory data store
let users = [
  {
    id: uuidv4(),
    firstName: "John",
    lastName: "Doe",
    description: "Software Developer"
  },
  {
    id: uuidv4(),
    firstName: "Jane",
    lastName: "Smith",
    description: "UI/UX Designer"
  }
];

// Validation helper function
const validateUser = (userData) => {
  const errors = [];
  
  if (!userData.firstName || userData.firstName.trim().length === 0) {
    errors.push('firstName is required');
  }
  
  if (!userData.lastName || userData.lastName.trim().length === 0) {
    errors.push('lastName is required');
  }
  
  if (!userData.description || userData.description.trim().length === 0) {
    errors.push('description is required');
  }
  
  return errors;
};

// GET all users
export const getAllUsers = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error while fetching users',
      error: error.message
    });
  }
};

// GET single user by ID
export const getUserById = (req, res) => {
  try {
    const { id } = req.params;
    const user = users.find(user => user.id === id);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: `User with ID ${id} not found`
      });
    }
    
    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error while fetching user',
      error: error.message
    });
  }
};

// POST - Create new user
export const createUser = (req, res) => {
  try {
    const { firstName, lastName, description } = req.body;
    
    // Validate input
    const validationErrors = validateUser({ firstName, lastName, description });
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validationErrors
      });
    }
    
    // Create new user
    const newUser = {
      id: uuidv4(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      description: description.trim()
    };
    
    users.push(newUser);
    
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: newUser
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error while creating user',
      error: error.message
    });
  }
};

// PUT - Update user by ID
export const updateUser = (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, description } = req.body;
    
    // Find user
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      return res.status(404).json({
        success: false,
        message: `User with ID ${id} not found`
      });
    }
    
    // Validate input
    const validationErrors = validateUser({ firstName, lastName, description });
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validationErrors
      });
    }
    
    // Update user
    users[userIndex] = {
      ...users[userIndex],
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      description: description.trim()
    };
    
    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      data: users[userIndex]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error while updating user',
      error: error.message
    });
  }
};

// DELETE - Delete user by ID
export const deleteUser = (req, res) => {
  try {
    const { id } = req.params;
    
    // Find user
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      return res.status(404).json({
        success: false,
        message: `User with ID ${id} not found`
      });
    }
    
    // Remove user
    const deletedUser = users.splice(userIndex, 1)[0];
    
    res.status(200).json({
      success: true,
      message: 'User deleted successfully',
      data: deletedUser
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error while deleting user',
      error: error.message
    });
  }
};
