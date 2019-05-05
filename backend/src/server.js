const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");

//Inicia a aplicação
const app = express();

//Um modulo para saber quem esta acessando a aplicação
//Consumindo recursos da aplicação
//Ou seja, se não existir esse cors a aplicação web(frontend) pode não acessar a base 
//da aplicação(backend).
app.use(cors());

const server = require("http").Server(app);
const io = require("socket.io")(server);

//Configurando minha aplicação para suporte em tempo real
//Sempre que envio alguma requisição, ela vai ser mostrada para o usuário que uma nova informação foi criada
io.on("connection", socket => {
    socket.on('connectRoom', box => {
        socket.join(box);
    })
});

//Inicia o DB com mongoose
mongoose.connect("mongodb+srv://despescacerta:despescacerta@cluster0-akekk.mongodb.net/despescacerta?retryWrites=true", 
  {
    useNewUrlParser: true,
  }
);

//Todo controller que for chamada vai ter informação das requisições
app.use((req, res, next) =>{
  req.io = io;  
  //Para processar mais de uma aplicação
  return next();
});

//Estou esperando objetos do tipo JSON em minha aplicação
app.use(express.json());
app.use(require("./routes"));

app.listen(process.env.PORT || 3000);
