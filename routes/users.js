import express from "express";
var usersRouter = express.Router();

//import functions from models:
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById ,
    deleteUserById,
    
} from "../models/users.js"


// //We have to write our CRUD routes 


usersRouter.get("/", async function (req, res) {
    // if (req.query.user !== undefined) {
    //   const result = await getUserById(req.query.id);
    //   return res.json({ success: true, payload: result });
    // }
    const result = await getAllUsers();
    res.json({ success: true, payload: result });
  });



  //get by id
  usersRouter.get("/:id", async function (req, res){
  const result = await getUserById(req.params.id)
  return res.json({ success: true, payload: result });
  })
  
  //post
  usersRouter.post("/", async function (req, res){
      const result = await createQuestion(req.body)
      res.json({ success: true, payload: result });
  } )
  
  //update
  usersRouter.patch("/:id", async function (req, res){
      const result = await updateUserById(req.params.id, req.body)
      res.json({ success: true, payload: result });
  })

  //delete

  usersRouter.delete("/:id", async function (req,res) {
    const result = await deleteUserById (req.params.id);
    res.json({ success: true, payload: result });
  })
  

  export default usersRouter