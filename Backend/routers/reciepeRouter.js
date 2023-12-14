import express from "express";
import { addReciepies, getAllReciepies, updateReciepes,deleteReciepe,getReciepeById } from "../controllers/reciepeController.js";

const router = express.Router()

router.get('/',getAllReciepies)
router.post('/',addReciepies)
router.put('/:id',updateReciepes)
router.delete('/:id', deleteReciepe)
router.get('/:id',getReciepeById)
export default router