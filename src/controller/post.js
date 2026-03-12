import data from "../lib/data.js"

export const getPost = (req, res)=>{
    try{
        console.log("get post")
        res.send(data)
    }catch(err){
        res.send("err get post route", err)

    }
}

export const getPostById = (req, res)=>{
    try{
        const {id} = req.params
        console.log(id)
        let post = data.find((val)=> val.id == id)
        if(!post){
            post = "post does not exist"
        }
        console.log(post)
        res.send(post)
    }catch(err){
        console.log(err)
        res.send("err get post by id route", err)
    }
}

export const addPost = (req, res)=>{
    try{
        const {content, author, title} = req.body
        if(!content || !author || !title){
            res.send("Missing field content, author, title")
            return
        }
        const newPost = {
            id: data.length +1,
            content,
            author,
            title,
            likes: 0,
            comments: 0,
            createdAt: Date.now()
        }

        data.push(newPost)
        res.send(newPost)
    }catch(err){
        console.log(err)
        res.send("err add post route", err)

    }
}

export const updatePost = (req, res)=>{
    try{
        const {id} = req.params
        const {title, content} = req.body
        if(!title || !content || !id){
            res.send("Missing field, title, content")
            return
        }
        const index = data.findIndex((val)=> val.id == id)
        data[index].title = title || data[index].title
        data[index].content = content || data[index].content
        res.send(data)
    }catch(err){
        res.send("err update post route", err)

    }
}

export const deletePost = (req, res)=>{
    try{
        const {id} = req.params
        const index = data.findIndex((val) => val.id == id)
        if(index == -1){
            res.send("post does not exist")
            return;
        }

        data.splice(index, 1)

        res.send(data)
    }catch(err){
        res.send("err delete post route", err)
    }
}