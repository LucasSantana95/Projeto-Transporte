import { Router } from "express";
import * as studentContoller from '../controllers/studentController'

export const router = Router()

router.get('/student',studentContoller.get)
router.get('/student/:id',studentContoller.getById)
router.post('/student',studentContoller.post)
router.put('/student',studentContoller.put)
router.delete('/student/:id',studentContoller.deleteStudent)
