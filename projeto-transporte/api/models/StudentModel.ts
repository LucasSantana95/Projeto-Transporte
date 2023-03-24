import { Schema , model} from 'mongoose'

const StudentModel = new Schema({
    name: String,
    school: String,
    shift: String,
    address: String,
    value : Number
})

export default model('Student', StudentModel)