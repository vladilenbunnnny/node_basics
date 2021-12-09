const getAllJobs = async (req, res) => {
  res.send("get all jobs");
};

const getOneJob = async (req, res) => {
  res.send("Get One job");
};

const createJob = async (req, res) => {
  res.send("Create job");
};

const updateJob = async (req, res) => {
  res.send("Update job");
};

const deleteJob = async (req, res) => {
  res.send("Delete job");
};

module.exports = { getAllJobs, getOneJob, createJob, updateJob, deleteJob };
