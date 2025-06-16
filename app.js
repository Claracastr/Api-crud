import express from "express";
const app = express();
app.use(express.json()); 
const livros = [
    { id: 1, titulo: 'O Senhor dos Anéis' },
    { id: 2, titulo: 'Harry Potter e a Pedra Filosofal' },
    { id: 3, titulo: 'O Hobbit' }
];
app.get('/', (req, res) => {
    res.status(200).send('CURSO DE NODE JS');
}
);
app.get('/livros', (req, res) => {
    res.status(200).json(livros);
});

app.post('/livros', (req, res) => {
    livros.push(req.body)
    res.status(201).send(`Livro adicionado com sucesso!`);  
})
export default app;