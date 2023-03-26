import { Schema , model} from 'mongoose'

const UserModel = new Schema({
    user: String,
    password: String,
})

export default model('User', UserModel, 'users')