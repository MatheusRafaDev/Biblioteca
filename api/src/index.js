import db from "./db.js";
import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

app.get("/alunos", async (req, resp) =>{
    try {
        let a = await db.tb_aluno.findAll({ order: [['id_aluno', 'desc']] });
        resp.send(a);
    } catch (e) {
        resp.send("Erro")
        resp.send(e.toString());
    }
});

app.post("/alunos", async (req, resp) =>{

    try{
           let x = req.body
            
           let r = await db.tb_aluno.create ({
               nm_aluno: x.nm_aluno,
               nr_telefone: x.nr_telefone,
               nm_endereco:	x.nm_endereco,	
               tp_sexo:	x.tp_sexo,
               dt_nascimento: x.dt_nascimento,	
               nr_sala: x.nr_sala,	
               ds_email: x.ds_email,	
               ds_senha: x.ds_senha
           })
   
           resp.send(r)
   
       } catch(e){
           resp.send(e.toString());
       }
});

app.delete("/alunos/:id", async (req, resp) => {
    try { 
        let id = req.params.id
        let q = await db.tb_aluno.destroy({ where:{ id_aluno: id }})

        resp.sendStatus("aluno removido"); 
    }
    catch(e) {
         resp.send("Erro")
         console.log(e.toString());
    }
});

app.put("/alunos/:id", async (req,resp) => {
    try { 
        let id = req.params.id;
        let x = req.body;
         
        let aluno = await db.tb_aluno.update ({
               nm_aluno: x.nm_aluno,
               nr_telefone: x.nr_telefone,
               nm_endereco:	x.nm_endereco,	
               tp_sexo:	x.tp_sexo,
               dt_nascimento: x.dt_nascimento,	
               nr_sala: x.nr_sala,	
               ds_email: x.ds_email,	
               ds_senha: x.ds_senha
        }, {where: { id_aluno: id } })
    
        //resp.sendStatus(aluno);

    } catch (error) {
        resp.send(error.toString("Erro"))
    }
});



app.listen(process.env.PORT, (x) =>
  console.log(`Server up at port ${process.env.PORT}`)
);