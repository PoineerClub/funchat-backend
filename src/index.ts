import { Request, Response } from "express"
import express from 'express'
import { PORT } from "./config"

const app = express()


app.get('/', (req :Request, res:Response)=> {
  res.status(200).send({
      'messagae':'hello world'
  })
})

app.listen(PORT, () => {
   console.log(`server is up and running on port : ${PORT}`);
})