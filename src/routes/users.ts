import { createUserController } from "../controllers/createUser";
import { getUserController } from "../controllers/getUser";
import { getUsersController } from "../controllers/getUsers";


const express  = require('express');

const router = express.Router();

console.log('users route');

router.get('/', getUsersController);
router.post('/', createUserController);

router.get('/:id', getUserController);

module.exports = router;