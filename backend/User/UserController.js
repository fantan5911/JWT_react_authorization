import User from '../models/User.js';
import bcrypt from 'bcrypt';

class UserController {
    async Register(req, res) {
        try {
            const {login, password} = req.body;

            const candidate = await User.findOne({login});

            if (candidate) {
                return res.status(400).json({message: "Пользователь уже существует"});
            }
            const hashPassword = await bcrypt.hashSync(password, 7);
            const user = new User({login, password: hashPassword});
            await user.save();
            res.status(200).json({message: "Пользователь успешно зарегистрирован"});
        }
        catch (e) {
            console.log(e);
        }
    }
    async Login(req, res) {
        try {
            const {login, password} = req.body;

            const user = await User.findOne({login});
            if (!user) {
                return res.status(400).json
            }

            const validPassword = await bcrypt.compareSync(password, user.password);
            if (!validPassword) {
                return res.status(400).json({message: "Неправильный логин или пароль"});
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}

export default new UserController();