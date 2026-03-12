
export const userLogin = async(req, res)=>{
    try{
        const userData = {
            userId: "user@gmail.com",
            password: "User@123"
        }

        const {userId, password} = req.body;
        console.log(userId, password)

        if(!userId || !password){
            res.send("Missing fields user id or password")
            return
        }

        if(userId != userData.userId || password != userData.password){
            res.send("Invalid email or password")
            return
        }
        else if(userId === userData.userId && password === userData.password){
            res.send("Login successfull hash = hujgyr9944#jkh&*dk")
            return
        }
        res.send("user not found")
    }catch(err){
        console.log(err)
        res.send(err)
    }
 }