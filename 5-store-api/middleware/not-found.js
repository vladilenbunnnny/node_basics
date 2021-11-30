const notFound = (req, res) => {
  return res.status(404).send("route doesn't exist");
};

module.exports = notFound;
