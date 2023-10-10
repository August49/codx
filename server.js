import http from 'http'


const server =  http.createServer((req,res) =>{
   
  res.write("Hello world");
  res.end()

}).listen(3000)


console.log("server started")
