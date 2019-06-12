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

module.exports=router;