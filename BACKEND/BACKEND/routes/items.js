const router = require("express").Router();
let Item = require("../models/Item");

http://Localhost:8070/item/add

router.route("/add").post((req,res)=>{

    
    const customername = req.body.customername;
    const productname = req.body.productname;
    const address = req.body.address;
    const delivertime = req.body.delivertime;
    const price = Number(req.body.price);

    const newItem = new Item({
        customername,
        productname,
        address,
        delivertime,
        price
    })

    newItem.save().then(()=>{
        res.json("details Added")
    }).catch((err)=>{
         console.log(err);
    })
})

http://localhost:8070/item

router.route("/").get((req,res)=>{
    Item.find().then((items)=>{
        res.json(items)
    }).catch((err)=>{
        console.log(err)
    })
})

http://localhost:8070/item/update

router.route("/update/:itemid").put(async(req,res)=>{
    let userId = req.params.itemid;
    const {customername,productname,address,delivertime,price} = req.body;

    const updateItem = {
        customername,
        productname,
        address,
        delivertime,
        price
    }
    const update = await Item.findByIdAndUpdate(userId,updateItem).then(()=> {
        res.status(200).send({status:"details updated"}) 
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error with updating data", error:err.message});
    })

    

})

http://localhost:8070/item/delete

router.route("/delete/:itemid").delete(async(req,res) => {
    let userId = req.params.itemid;

    await Item.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status : "detalis deleted"})
    }).catch((err) => {
        console.log(err.message)
        res.status(500).send({status : "Error with delete user", error:err.message});
    })
})

router.route("/get/:itemid").get(async (req,res) => {
    let userId = req.params.itemid;
    const user  = await Item.findById(userId).then((item) => {
        res.status(200).send({status : "Item fetched", item})
    }).catch((err) => {
        console.log(err.message)
        res.status(500).send({status : "Error with get user", error:err.message});
    })
})
module.exports = router;