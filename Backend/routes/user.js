const express = require('express'); 
const router = express.Router();
const actorModel = require('../models/user');


router.get('/', async(req, res) => {
    const list = await actorModel.all();
    res.json(list);
});

router.get('/:id', async(req, res)=>{
    const id = req.params.id || 0;
    const actor = await actorModel.single(id);
    if(actor === null){
        return res.status(204).end();
    }
     res.json(actor);
});

const schema = require('../schemas/actor.json');

router.post('/',require('../middlewares/validate')(schema), async (req, res) => {
    const actor = req.body;
    const ids = await actorModel.add(actor);
    actor.actor_id = ids[0];
    res.status(201).json(actor);
});

router.delete('/:id', async(req, res) => {
    const id = req.params.id || 0;
    const num_actor_del = await actorModel.del(id);   
    res.json(num_actor_del);
});

// put: fields thiếu -> null, patch: chỉ thay đổi fields ddc ycau
router.patch('/', async(req, res) =>{
    const actor = req.body;
    const num_actor_up = await actorModel.up(actor);
    res.json(num_actor_up);
});

module.exports = router;