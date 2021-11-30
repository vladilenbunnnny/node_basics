class CustomAPIError extends Error {
  constructor(message, statusCodeArg) {
    super(message);
    this.statusCode = statusCodeArg;
  }
}

const createCustomError = (msg, statusCode) => {
  return new CustomAPIError(msg, statusCode);
};

module.exports = { CustomAPIError, createCustomError };
