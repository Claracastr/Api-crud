import express from "express";
import getConnection from "./config/dbConnect.js";
import routes from "./routes/index.js";

const dataBase = new getConnection()
dataBase.connect(); // Conecta no banco

const app = express();
routes(app); // Define as rotas


/*app.get('/livros', async (req, res) => {
    try {
        const listalivros = await livro.find({});  // Busca todos os livros
        res.status(200).json(listalivros);
    } catch (error) {
        console.error("Erro ao buscar livros:", error);
        res.status(500).send("Erro ao buscar livros");
    }
});*/

/*app.get('/livros/:id', async (req, res) => {
    const index = buscalivro(req.params.id);
    res.status(200).json(livros[index]);

})

app.post('/livros', (req, res) => {
    livros.push(req.body)
    res.status(201).send(`Livro adicionado com sucesso!`);  
})

app.put('/livros/:id', (req, res) => {
    const index = buscalivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});


app.delete('/livros/:id', (req, res) => {
    const index = buscalivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send(`Livro removido com sucesso!`);
});
export default app;*/

//mongodb+srv://admin:admin123@cluster0.ftek1el.mongodb.net/

//mongodb+srv://admin:<db_password>@cluster0.ftek1el.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

export default app;