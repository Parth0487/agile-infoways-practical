var userHelper = require("../helpers/user.helper");
var authHelper = require("../utils/auth.middleware");

class Users {
  async createApplication(req, res) {
    try {
      await userHelper.createApplication(req.body);
      res.status(200).json({
        message: "Application has been submitted successfully.",
      });
    } catch (error) {
      console.log("\nERROR: ", error);
      res.status(error.code || 500).json({
        message: error.message || "Unknown error",
      });
    }
  }

  async getApplications(req, res) {
    try {
      let applications = await userHelper.getApplications(req.body);
      res.status(200).json({
        message: "Application has been submitted successfully.",
        data: applications
      });
    } catch (error) {
      console.log("\nERROR: ", error);
      res.status(error.code || 500).json({
        message: error.message || "Unknown error",
      });
    }
  }

  async login(req, res) {
    try {
      let user = await userHelper.findByEmail(req.body.email);

      if (user && user._id) {

        if (user.password === req.body.password) {
          let token = await authHelper.createToken(user);
          res.status(200).json({ token });
        } else {
          throw { code: 401, message: "Incorrect email or password!" };
        }
      } else {
        throw { code: 401, message: "Incorrect email or password!" };
      }
    } catch (error) {
      console.log("ERROR: ", error);
      res.status(error.code || 500).json({
        // code: error.code || 500,
        message: error.message || "Unknown error",
      });
    }
  }
}

module.exports = new Users();
