import express from 'express';
import { procurarTodosMedicos, procurarMedicosPorSeuNome, procurarMedicosPorSuaEspecialidade  } from './serviço/retornamedico_servico.js';
const app = express();

app.get('/medicos', async (req, res) => {
    let medicos;
    const nome = req.query.nome;
    const especialidade = req.query.especialidade;
    
    if (typeof nome === 'undefined' && typeof especialidade === 'undefined') {
        medicos = await  procurarTodosMedicos()}
    else if(typeof especialidade === 'undefined'){
        console.log(nome)
        medicos = await procurarMedicosPorSeuNome(nome)
    }
    else if(typeof nome === 'undefined'){
        medicos = await procurarMedicosPorSuaEspecialidade(especialidade)

    }
    if (medicos.length > 0) {
        res.json(medicos);
        
    }else {
        res.status(404).json({ mensagem: "Não há nenhum médico disponível no momento. )" });
    }
   

})

app.listen(9000, () => {

    const data = new Date();
    console.log("Servidor node iniciado em: " + data);
    

})      


