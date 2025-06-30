import express from "express"
import LivroController from "../controllers/livroController.js"

const routes = express.Router();
routes.get('/livros', LivroController.listarLivros); // Rota para listar todos os livros
routes.get("/livros/busca", LivroController.listarLivrosPorEditora); // Rota para buscar livros (pode ser usada para filtrar ou pesquisar)
routes.get('/livros/:id', LivroController.listarLivrosPorID); // Rota para listar livro por ID
routes.post('/livros', LivroController.cadastrarLivro); // Rota para cadastrar um novo livro
routes.put('/livros/:id', LivroController.atualizarLivro); // Rota para atualizar um livro por ID
routes.delete('/livros/:id', LivroController.excluirLivro); // Rota para excluir um livro por ID

export default routes