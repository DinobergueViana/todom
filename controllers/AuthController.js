const { Usuario } = require('../models');
const bcrypt = require('bcrypt');


module.exports = {
    index: async (req, res) => {
        // captura email e senha do usuario
        let {email, senha} = req.body;
        let usuario = null;

        // buscar o usuario no BD que tem esse email vindo do req.body
        usuario = await Usuario.findOne({where: {email}});
        console.log(usuario)

        // retornar erro 401 caso o usuario não exista
        if(!usuario){
            return res.status(401).json({error: 'Usuario não encontrado'});
        }

        // validar senha cadastrada com a senha enviada pelo body
        // retornar erro 401 caso as senha não baterem
        if(!bcrypt.compareSync(senha, usuario.dataValues.senha)){
            return res.status(401).json({error: 'Usuario ou senha inválido'})
        } 

        //...

        res.send('Login validado');
    }
}