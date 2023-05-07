import express from "express"
import { AskQuestion, deleteQuestion, fetchAllQuestions ,voteQuestion} from "../controllers/question.js";
import auth from "../middlewares/auth.js";

const router=express.Router();

router.post("/Ask",auth,AskQuestion)
router.get("/get",fetchAllQuestions)
router.delete('/delete/:id',auth,deleteQuestion) 
router.patch('/vote/:id',auth,voteQuestion)


export default router;