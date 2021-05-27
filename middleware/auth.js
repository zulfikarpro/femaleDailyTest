module.exports = auth = (req, res) => {
  const bearerHeader = req.headers.authorization;
  if (!bearerHeader) {

  } else {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
  }
};
