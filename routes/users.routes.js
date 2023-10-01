/**
 * @author Daniel Arteaga
 * 
 * Rutas de usuarios
 */

const {Router} = require('express');
const {addUser, editUser, deleteUser, showUsers}=require('../controllers/users.controllers')

const routerUsers = Router();

routerUsers.get('/',showUsers);
routerUsers.post('/',addUser);
routerUsers.put('/',editUser);
routerUsers.delete('/',deleteUser);


module.exports=routerUsers