const express= require('express');
var router = express.Router();
var uuid=require('uuid/v4');

var thingsCollection=[];

var thingsStruct={
    id:0, 
    receta:'', 
    precio:0, 
    tipo:'', 
    observacion:'', 
    estado:''
}

thingsCollection.push(
    Object.assign(
        {},
        thingsStruct,
        {
            id:uuid(),
            receta:'Pollo Frito',
            precio:100,
            tipo:'Rapida',
            observacion:'Demasiado en la freidera',
            estado:'Normal'
        })
);

router.get('/:id',(req, res, next)=>{
    if(!this.report.params.id) return next();
    var id = req.params.id;
    var thing = thing.thingsCollection.filter((e, i)=>{
        return (e.id === id);
    });
    
    if (thing.length > 0){
        res.status(200).json(persona[0]);
    }
    else{
        res.status(404).json({});
    }
});

router.get('/',(req, res, next)=>{
    res.status(200).json({thingsCollection})
});

//Metodos Get

router.post('/',(req, res, next)=>{
    var newElement = Object.assign({}, thingsStruct, req.body, {id:uuid()});
    thingsCollection.push(newElement);
    res.status(200).json(newElement);
});

//Metodo Post

router.put('/:id', (req, res, next)=>{
    var id = req.params.id;
    var modifiedThing = {};
    var originalThing = {};
    thingsCollection = thingsCollection.map((e, i)=>{
        if(e.id===id){
            originalThing = Object.assign({}, e);
            return modifiedThing = Object.assign({}, e, req.body);
        }
        return e;
    });
    res.status(200).json({o: originalThing, m: modifiedThing});
});

//Metodo Put

router.delete('/:id', (req, res, next)=>{
    var id = req.params.id;
    var deletedThing = {};
    thingsCollection = thingsCollection.filter((e, i)=>{
        if(e.id===id){
            deletedThing = Object.assign({}, e);
            return false;
        }
        return true;
    });
    res.status(200).json({d: deletedThing, c: thingsCollection });
});

//MetodoDelete

module.exports=router;