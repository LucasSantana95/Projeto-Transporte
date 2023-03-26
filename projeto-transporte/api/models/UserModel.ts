import { Schema , model} from 'mongoose'

const UserModel = new Schema({
    name: String,
    password: String,
})

export default model('User', UserModel, 'users')