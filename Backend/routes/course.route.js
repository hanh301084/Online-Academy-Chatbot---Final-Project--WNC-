const express = require('express');
// const course = require('../models/course.model');
const courseModel = require('../models/course.model');

const router = express.Router();

router.get('/', async function(req, res) {
    const list = await courseModel.all();
    res.json(list);
})
router.get("/:id", async function(req, res) {
    const id = req.params.id || 0;
    const course = await courseModel.single(id);
    if (course === null) {
        return res.status(204).end();
    }
    res.json(course);
})

//const Ajv=require('ajv').default;

// router.post("/", async function(req, res){
//     const actor=req.body;

//     // const schema={
//     //     require: [
//     //         "first_name","last_name"
//     //     ],
//     //     additionalProperties: false,
//     //     properties:{
//     //         first_name:{
//     //             type:"string"
//     //         },
//     //         last_name:{
//     //             type:"string"
//     //         }
//     //     }
//     // }

//     // const ajv=new Ajv();
//     // const validate=ajv.compile(schema);
//     // const valid=validate(actor);
//     // if(!valid){
//     //     return res.status(400).json(validate.errors);
//     // }
//     const ids=await actorModel.Create(actor);
//     actor.actor_id=ids[0];
//     res.status(201).json(actor);
// })
// // test
// router.put("/:id", async function(req, res){
//     const actor=req.body;
//     const id=req.params.id||0;
//     await actorModel.Update(id, actor);
//     res.status(200).json(actor);

// })

// router.delete('/:id',async function(req, res){
//     const id=req.params.id||0;
//     const actor= await actorModel.Delete(id);
//     res.status(200).send(actor);

// })
module.exports = router;