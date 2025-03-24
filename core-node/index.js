const http = require ('http');
const url =require ('url');
const StringDecoder =require('string_decoder').StringDecoder;
const getStudents=require ('./student');
const getStaffs=require ('./staff');
const port=4000;
const routes={
    student :getStudents,
    staff :getStaffs,
};

const notFound =(input,callback) => {
    callback(404);
};


 const server =http.createServer((req,res) => {
     //parse the request url
    const parsedUrl =url.parse(req.url,true);
   //get the path name excluding query string and hostname
    const path = parsedUrl.pathname;
    const parsedPath=path.replace (/^\/+/,'');
    //get the http method
    const method = req.method.toUpperCase();
    //get query string/params as object
    const query =parsedUrl.query;
    //get headers as object
    const headers =req.headers;
    const decoder= new StringDecoder ('utf-8');
    let body ='';

    //listen on data receive event
    req.on('data',(data) =>{
        body +=decoder.write (data);

    });
       //listen on data end event
        req.on('end', () => {
            body+= decoder.end();


            const routeHandler = typeof routes[parsedPath]!=='undefined'? routes[parsedPath]: notFound;

            const requestObject = {
                'pathname': parsedPath,
                method,
                query,
                headers,
                body
            };
            const callbackFunction = (statusCode,responseObject) =>{
          statusCode = typeof statusCode === 'number'? statusCode : 200;
        responseObject =  typeof responseObject === 'object'? responseObject : {message:'',data: null };
        
        res.setHeader('Access-Control-Allow-Origin','*');
        //set content type to response
        res.setHeader('Content-Type','application/json');
        //set status code to response
        res.writeHead(statusCode);
        //return response
        res.end(JSON.stringify(responseObject));

           };

           routeHandler(requestObject,callbackFunction);

        });
    });
    
    //listen for request
server.listen(port,() => {
    console.log(`your app is running on port ${port}`);
});