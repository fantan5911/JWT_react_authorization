import User from '../models/User.js';
import bcrypt from 'bcrypt';

class UserController {
    async Register(req, res) {
        try {
            const {login, password} = req.body;

            const candidate = User.findOne({login});

            if (candidate) {
                return res.status(400).json({message: "Пользователь уже существует"});
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const user = new User({login, password: hashPassword});
            await user.save();
            res.status(200).json({message: "Пользователь успешно зарегистрирован"});
        }
        catch (e) {
            console.log(e);
        }
    }
}

export default new UserController();