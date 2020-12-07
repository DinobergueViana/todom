const { Usuario } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();


module.exports = {
    index: async (req, res) => {
        // captura email e senha do usuario
        let {email, senha} = req.body;
        let usuario = null;

        // buscar o usuario no BD que tem esse email vindo do req.body
        usuario = await Usuario.findOne({where: {email}});

        // retornar erro 401 caso o usuario não exista
        if(!usuario){
            return res.status(401).json({error: 'Usuario não encontrado'});
        }

        // validar senha cadastrada com a senha enviada pelo body
        // retornar erro 401 caso as senha não baterem
        if(!bcrypt.compareSync(senha, usuario.dataValues.senha)){
            return res.status(401).json({error: 'Usuario ou senha inválido'})
        } 

        // criar token
        let token = jwt.sign({usuario}, process.env.SEGREDO);

        // enviar token para o cliente
        return res.send({usuario, token})
    }
}