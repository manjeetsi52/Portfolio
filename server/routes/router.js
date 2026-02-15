import { Router } from "express";
import { handleContact } from "../controllers/contact.js";
import { globalLimiter } from "../middleware/rateLimiter.js";
export const route = Router()

route.get('/',(req,res)=>{
    res.status(200).send('ok')
})

route.post('/manjeet/contact',globalLimiter,handleContact)