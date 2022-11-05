const express = require('express');
const app = express();
const PORT = process.env.PORT || 3200
app.use(express.json());

const sign = {
    add: "addition",
    substract: "substraction",
    multiply: "multiplication"
}



app.route("/")
.get((req,res) => {
    res.json({
      "slackUsername": "samzy",
      "backend": true,
      "age": 20,
      "bio": "My name is Samuel Fapohunda. I am 20 years old and a student of the University of Lagos"
    })
})
.post((req, res) => {
   res.json({
    slackUsername: "samzy",
    operation_type:  
    
    req.body.operation_type === 'addition'
    ? sign.add: "null" &&

    req.body.operation_type === 'substraction'
    ? sign.substract : "null" &&

    req.body.operation_type === 'multiplication'
    ? sign.multiply : "null",

    result:
    req.body.operation_type === 'addition' ? req.body.x + req.body.y : '' 
    ||  req.body.operation_type === 'substraction' ? req.body.x - req.body.y : '' 
    ||  req.body.operation_type === 'multiplication' ? req.body.x * req.body.y : '' 
   })
})



app.get("*", (req,res) => {
    res.json({
       msg: 'Page not found'
    })
})

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});