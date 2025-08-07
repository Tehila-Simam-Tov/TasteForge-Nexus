import fs from 'fs'

const recipMiddleware={
    printToFile:(req,res,next)=>{
      //let url="D:\\project\\file.txt"
      let url="E:\\project\\file.txt"
      let data="name user: "+req.body.name+", password: "+req.body._id+", date: "+new Date()+"\n"
     fs.appendFileSync(url,data.toString(),"utf8")
     next()  
    }
}
export default recipMiddleware