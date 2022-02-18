import  mongoose  from "mongoose";
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const carmodelSchema  = new mongoose.Schema({
  userId: String,
  name: String,
  model: String,
  year:String ,
  type:String,
  engine:String,
  litres:String,
  url: String
  
});
const Carmodel  = mongoose.model("Car", carmodelSchema);

export default Carmodel;