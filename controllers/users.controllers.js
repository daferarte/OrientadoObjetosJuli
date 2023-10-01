/**
 * @author Daniel Arteaga
 * 
 *  Controladores de usuarios
 */


const addUser = async(req, res) =>{
    const {username, password, mail} = req.body;

    res.json({
        msg:"Estado ok",
        username,
        password,
        mail
    })
}

const editUser = async(req, res) =>{
    const {id} = req.body;

    res.json({
        id
    })
}

const deleteUser = async(req, res) =>{
    const {id} = req.body;

    

    res.json({
        id
    })
}

const showUsers = async(req, res) =>{

    res.send('Hello World!')
}

module.exports = {
    addUser,
    editUser,
    showUsers,
    deleteUser
}