import express from 'express'
import UserAuthRouter from './src/router/userAuthRouter.js'
import postRouter from './src/router/postRouter.js'

const app = express()
app.use(express.json())

const PORT = 5000

app.use('/user', UserAuthRouter)
app.use('/posts', postRouter)


app.listen(PORT, ()=>{
    console.log("App is listening at ", PORT)
})
