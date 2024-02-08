const bcrypt = require('bcryptjs');



const hashPassword = async (password) => {
    console.log(await bcrypt.hash(password, 10))
    return await bcrypt.hash(password, 10);
};
hashPassword('123456')
