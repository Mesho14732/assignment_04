const express = require(`express`);
const router = express.Router();

router.use((req, res, next)=>{
    console.log(`request for books authors`);
    console.log(`authentication`, req.headers);
    console.log(`Content-Type`, req.headers);
});

const lastLayerMiddleware = (req, res, next)=>{
console.log(`lastLayerMiddleware`);
next();
};

router.get(`/`, lastLayerMiddleware, (req, res)=>{
    res.json({name: `John Doe`, pages: 90});
});

router.get(`/authors`, (req, res)=>{
        console.log(req.params);
        console.log(req.query);
        res.json({name: `John Doe`, pages: 90})
});

router.post(`/authors`, (req, res)=>{
    console.log(req.params);
    console.log(req.query);
    res.json({message: `authors added`, authors:req.body})
});

router.put(`/authors`, (req, res)=>{
    console.log(req.params);
    console.log(req.query);
    res.json({message: `authors updated`, authors:req.body})
});

router.delete(`/authors`, (req, res)=>{
    console.log(req.params);
    console.log(req.query);
    res.json({message: `authors deleted`, authors:req.body})
});

module.exports = router;


