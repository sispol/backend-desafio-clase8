const { Router } = require('express')
const router = Router()

router.get('/api/productos',(req,res) => {
    if (db.allItems() >0) {
        res.status(200).json(db.getAll())
    } else {
        return res.status(404).json({error: "no se encontraron productos"});
    }
})

router.get('/api/productos/:id',(req,res) => {
    id = req.params.id
    if (db.getById(id) === undefined) {
        res.status(404).json({error: "producto no encontrado"})
    } else {
        res.status(200).json(db.getById(id))
    }
})

router.post('/api/productos',(req,res) => {
    id = db.lastId()+1
    const { title, price, thumbnail } = req.body
    db.producto.push({id,title,price,thumbnail})
    res.status(200).json(db.getById(id))
    res.sendStatus(201)
})

// PENSAR ESTO !!!
router.put('/api/productos',(req,res) => {
    const { id } = req.body
    allItemValue = db.allItems()-1
    db.producto.splice(1, allItemValue, {title: 1020});
    res.sendStatus(201)
})

router.delete('/api/productos/:id',(req,res) => {
    const { nombre, apellido, edad} = req.body
    mascotas.push({nombre,apellido,edad})
    res.sendStatus(201)
})

class Contenedor {

    constructor () {
        this.producto = producto
    }

    getAll() {
            return this.producto
    }
    
    getById(id) {
        return this.producto.find(x => x.id == id)    
    }

    deleteAll() {
            productos = []
            return this.producto
//            return res.status(404).json({message: "Hubo un error de escritura: ",e});
    }

    allItems() {
            return (Object.keys(this.producto).length)
    }

    lastId() {
        return this.producto[this.allItems()-1].id
    }

}

let id;
const producto = []

const db = new Contenedor();
db.producto = [{"id":1,"title":"prodNumber387","price":38700,"thumbnail":"http://thumbnail_387"},{"id":2,"title":"prodNumber444","price":44400,"thumbnail":"http://thumbnail_444"},{"id":3,"title":"prodNumber641","price":64100,"thumbnail":"http://thumbnail_641"}]

module.exports = router