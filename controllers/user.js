// controllers/user.js

import { v4 as uuidv4 } from 'uuid';

let users=[]   // in memory store

export const createUser = (req, res) =>{
    try {
    const { name, description }= req.body;
    if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required.' });
    }
    

    users.push({...name, description, id:uuidv4()})
  res.status(201).send(`user with the name ${name.firstname} added to the database`)

} catch (error){
    console.error(error)
    res.status(500).json({error: 'Internal serval error'})
};
}

 export const getUsers= (req, res) => {
    try {
    res.send(users)
    } catch(error){
        console.error(error)
        res.status(500).json({error: 'Internal server error'})
    }
}

export const getUser = (req, res) => {
    try {
    const { id } = (req.params)

    const founduser= users.find((user)=> user.id == id)
    if(!founduser){
      return res.status(404).json({error}, `user with ID ${id} not found`)
    }

    }catch(error){
        console.error(error);
        res.status(500).json({error: 'internal server error'})
    }
}

export const deleteUser = (req, res) =>{
    const {id} = req.params;
    users = users.filter((user) => user.id !==id ) 
    res.send(`User with the ${id} deleted from the database`)
}
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const user = users.find(user => user.id === id);

  if (!user) return res.status(404).send({ error: 'User not found' });

  if (name) user.name = name;
  if (description) user.description = description;


}