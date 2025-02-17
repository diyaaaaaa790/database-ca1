const mongoose= require ('mongoose');
const resturantSchema=new mongoose.Schema({
    name:{type:String, required:true},
    city:{type:String, required:true},
    itemsArr:[{type:String, required:true, ref:"resturant"}],
});

module.exports=mongoose.model('resturant', resturantSchema);