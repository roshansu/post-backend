import e from 'express'
import { getPost, getPostById, deletePost, addPost, updatePost } from '../controller/post.js'
import { middleware } from '../middleware/middleware.js'

const postRouter = e.Router()

postRouter.get('/', middleware, getPost) // get all post
postRouter.get('/:id', middleware, getPostById) //get post by id
postRouter.post('/', middleware, addPost) //add post
postRouter.put('/:id', middleware, updatePost) //update post
postRouter.delete('/:id', middleware, deletePost) //delete post

export default postRouter