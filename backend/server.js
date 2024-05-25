import express from 'express' ;
import dotenv from 'dotenv' ;
import authRoutes from './routes/auth.routes.js' ;
const app = express() ;
// dotenv.config() ;
const PORT = process.env.PORT || 3000 ;
app.listen(PORT , ()=>{
    console.log('Server Running on port ')
})

app.use("/api/auth" , authRoutes) ;

app.get('/' , (req , res)=>{
    res.send('hello world!!!!!!!!!!') ;
});