module.exports = (req, res) => {
  res.status(200).send({ MY_KEY: process.env.MY_KEY });
};
