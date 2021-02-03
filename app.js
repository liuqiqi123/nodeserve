const express =require('express')
const fs=require("fs")
const  app =express()

// // 设置跨域访问
app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.get("/home/multidata",(req,res)=>{
  fs.readFile("./public/data/home/multidata/multidata.json","utf-8",(err, data) => {
    if (err) {

     return  res.send("err")
    }

    return  res.send(data)
  })
})

app.get("/home/news",(req,res)=>{
  let id =req.query.id

  fs.readFile("./public/data/home/data/new/"+id+".json","utf-8",(err,data)=>{
    if (err) {
      return  res.send("err")
    }
    return  res.send(data)
  })
})

app.get("/home/pop",(req,res)=>{
  let id =req.query.id

  fs.readFile("./public/data/home/data/pop/"+id+".json","utf-8",(err,data)=>{
    if (err) {
      return  res.send("err")
    }
    return  res.send(data)
  })
})

app.get("/home/sell",(req,res)=>{
  let id =req.query.id

  fs.readFile("./public/data/home/data/sell/"+id+".json","utf-8",(err,data)=>{
    if (err) {
      return  res.send("err")
    }
    return  res.send(data)
  })
})

app.get("/detail",(req,res)=>{
  let goodsId =req.query.goodsId
  fs.readFile("./public/data/detail/"+goodsId+".json","utf-8",(err,data)=>{
    if (err) {
      return  res.send("err")
    }
    return  res.send(data)
  })
})


app.get("/detail/recommend",(req,res)=>{
  fs.readFile("./public/data/detail/recommend.json","utf-8",(err,data)=>{
    if (err) {
      return   res.send("err")
    }
    return  res.send(data)
  })
})


app.get("/category/title",(req,res)=>{
  fs.readFile("./public/data/category/category.json","utf-8",(err,data)=>{
    if (err) {
      return  res.send("err")
    }
    return  res.send(data)
  })
})

app.get("/category/item",(req,res)=>{
  let maitKey =req.query.maitKey
  fs.readFile("./public/data/category/subcategory/"+maitKey+'.json',"utf-8",(err,data)=>{
    if (err) {
      return   res.send("err")
    }
    return  res.send(data)
  })
})

app.listen(3000,function (){
  console.log("可以通过http://127.0.0.1:3000 或http://192.168.43.119:3000");
})