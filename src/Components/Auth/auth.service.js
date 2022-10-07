import axios from "axios";

const API_URL = "https://dreamlearn-capstone.herokuapp.com/";

const signup = async (username, email, password, role) => {
    await axios.post(`${API_URL}api/auth/signup`, {
        username,
        email,
        password,
        role
    }).then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
    })
};

const signin = async (username, password) => {
    await axios
        .post(`${API_URL}api/auth/signin`, {
            username,
            password,
        }).then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
}

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
    signup,
    signin,
    logout,
    getCurrentUser
};

export default AuthService;
