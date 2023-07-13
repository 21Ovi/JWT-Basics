const login = async (req, res) => {
  res.send("Fake Login/ Register/signup");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, Mohammad Ovi`,
    secret: `Here is yur authorizeed data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
