import axios from "axios";

// const genAccessToken = () => {
//
// }

export default class AuthService {
    static async RegisterUser(user) {
        await axios.post("api/users/register", {
            login: user.login,
            password: user.password
        })
    }
    static async LoginUser(user) {
        await axios.post("api/users/login", {
            login: user.login,
            password: user.password
        })
    }
}
