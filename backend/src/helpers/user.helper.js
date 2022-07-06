let Applications = require('../models/application.model')

class Userhelper {

    async createApplication(body) {
        return await Applications.create({ ...body })
    }

    async findByEmail(email) {
        return await Applications.findOne({ email })
    }

    async getApplications() {
        return await Applications.find({ })
    }
    
}

module.exports = new Userhelper();