const usuariosGet = (req, res) => {

    const params = req.query;

    res.json({
        nombre:'Diego',
        msg:'get API - Controlador',
        ok:true,
        params

    })
}


const usuariosPut = (req, res) => {

    const id = req.params.id;

    res.json({
        nombre:'Diego',
        msg:'put API - Controlador',
        ok:true,
        id

    })
}

const usuariosPost = (req, res) => {

    const {nombre, edad} = req.body;

    res.json({
        nombre:'Diego',
        msg:'post API - Controlador',
        ok:true,
        nombre,
        edad

    })
}

const usuariosDelete = (req, res) => {
    res.json({
        nombre:'Diego',
        msg:'delete API - -Controlador',
        ok:true

    })
}

module.exports = {    
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}