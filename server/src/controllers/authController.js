const authService = require("../services/authService");

const register = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const user = await authService.registerUser(fullname, email, password);

    res.status(201).json({
      message: "User created",
      user,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await authService.loginUser(email, password);

    res.json({
      message: "Login successful",
      token: result.token,
      user: result.user,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  register,
  login,
};
