const register = async (req, res) => {
  res.send("Register user");
};

const login = async (req, res) => {
  res.send("Register login");
};

module.exports = { register, login };
