const TestUser = require('../models/TestUserModel');
const bcrypt = require('bcryptjs');

module.exports = {
  createTestUser: async(req, res)=>{
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new TestUser({
      name: req.body.name,
      password: hashedPassword,
    });

    console.log(user)
    try {
      const savedUser = await user.save();
      return savedUser
      // res.send({ user: user._id });
    } catch (err) {
      console.log('my err', err)
      res.status(400).send(err);
    }
  }
}
