import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Greatostuck:123456bbb@cluster0.kdcafgn.mongodb.net/food-del').then(()=>console.log ("DB Connected"));
    


}