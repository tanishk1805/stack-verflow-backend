import mongoose from 'mongoose'

const QuestionSchema=mongoose.Schema({
    questionTitle:{type:String,required:"You have to give body title"},
    questionBody:{type:String,required:"You have to give body of question"},
    questionTags:{type:[String],required:"You have to give body tags"},
    userPosted:{type:String,required:"Question must have an author"},
    userId:{type:String},
    askedOn:{type:Date,default:Date.now},
    noOfAnswers:{type:Number,default:0},
    upVote:{type:[String],default:[]},
    downVote:{type:[String],default:[]},
    answer:[{
        answerBody:String,
        userAnswered:String,
        answerdOn:{type:Date,default:Date.now},
        userId:String,
    }]
})

export default mongoose.model("Question",QuestionSchema);