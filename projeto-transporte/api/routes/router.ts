import { Router } from "express";
import * as studentContoller from '../controllers/studentController'
import * as userController from '../controllers/userController'

export const router = Router()

router.get('/student',studentContoller.get)
router.get('/student/:id',studentContoller.getById)
router.post('/student',studentContoller.post)
router.put('/student',studentContoller.put)
router.delete('/student/:id',studentContoller.deleteStudent)

router.get('/user',userController.get)
router.get('/user/:id',userController.getById)
router.post('/user', userController.post)
router.post('/create-user', userController.create)