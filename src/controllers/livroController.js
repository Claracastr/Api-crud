import { autor } from "../models/Autor.js";
import livro from "../models/livro.js"; // Importa o modelo de livro

class LivroController {    
    
    static async listarLivros (req, res) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
    };

    static async cadastrarLivro(req, res) {
         const novoLivro = req.body; 
        try{
            const autorEncontrado=await autor.findById(novoLivro.autor); // Verifica se o autor existe
            const livroCompleto={...novoLivro, autor:{...autorEncontrado._doc}}; // Cria um novo livro com o ID do autor
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({ message: "criado com sucesso", livro: livroCriado });
        }catch (error) {
            res.status(500).json({message:`${ error.message} Erro ao cadastrar livro`});
        }
    }
    
    static async listarLivrosPorID(req, res) {
        try {
            const id = req.params.id;
            const livroencontrado = await livro.findById(id);  // Busca livro por ID
            res.status(200).json(livroencontrado);

        } catch (error) {
            res.status(500).json({message:`${ error.message} Erro ao buscar livros`});
        }

    }

    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id,req.body) // Busca livro por ID
            res.status(200).json({message: "Livro atualizado com sucesso"});

        } catch (error) {
            res.status(500).json({message:`${ error.message} Erro ao atualizar livros`});
        }

    }
    static async excluirLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id,req.body) // Busca livro por ID
            res.status(200).json({message: "Livro deletado com sucesso"});

        } catch (error) {
            res.status(500).json({message:`${ error.message} Erro ao excluir livros`});
        }

    }
    
    static async listarLivrosPorEditora(req, res) 
    {
        const editora = req.query.editora; // Obtém a editora do parâmetro de consulta
        try {
            const livrosPorEditora = await livro.find({ editora: editora }); // Busca livros pela editora
            res.status(200).json(livrosPorEditora);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Erro ao buscar livros por editora` });
        }
    }
}



export default LivroController