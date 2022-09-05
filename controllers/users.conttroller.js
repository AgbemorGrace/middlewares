const getusers = (req, res) =>{
    res.status(200).send("All users");
};

const getuser = (req, res) =>{
    res.status(200).send("Get single user");
};
const createuser = (req, res) =>{
    res.status(201).send("Create user");
};

const updateuser = (req, res) =>{
    res.status(200).send("Update user");
};

const deleteuser = (req, res) =>{
    res.status(200).send("Delete user");
};
module.exports = {
    getusers,
    getuser,
    createuser,
    updateuser,
    deleteuser,
}