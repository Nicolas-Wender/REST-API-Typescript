import { Router } from "express";
import { getUsersController } from "../controllers/get-user";

const router = Router()

router.get('/users', (req, res) => {
  getUsersController.handle(req, res)
})

export { router }