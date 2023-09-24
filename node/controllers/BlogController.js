import BlogModel from "../models/BlogModels.js";

//Crud

//Consultar todos los registros

export const getAllBlogs = async (req, res)=>{
    try{
        const blogs = await BlogModel.findAll()
        res.json(blogs)
    }catch (error){
        res.json ({message: error.message})
    }

}

//Consultar

export const getBlog = async (req, res) =>{
    try{
        const blogs = await BlogModel.findAll({
            where:{id:req.params.id}
        })
        res.json(blogs [0])
    }catch (error){
        res.json ({message: error.message})
    }
}
// Crear

    export const createBlog = async (req, res)=> {
        try {
            await BlogModel.create(req.body)
            res.json({
                "message":"¡Resgistro creado correctamente!"
            })
        }catch(error){
            res.json ({message: error.message})
        }
    }

//Actualizar
    
    export const updateBlog = async (req, res) =>{
        try {
            await BlogModel.update(req.body,{
                where:{ id: req.params.id}
            })
            res.json({
                "message":"¡Resgistro Actualizado correctamente!"
            })
        }catch(error){
            res.json ({message: error.message})
        }
    }

//Eliminar

    export const deleteBlog = async (req, res) => {
        try{
            await BlogModel.destroy({
                where: {id: req.params.id}
            })
            res.json({
                "message":"¡Resgistro Eliminado correctamente!"
            })
        }catch(error){
            res.json ({message: error.message})
        }
    }
