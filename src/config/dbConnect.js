import Mongoose from "mongoose"
const name = "admin"
const password = "admin123"
const uri = `mongodb+srv://${name}:${password}@cluster0.ftek1el.mongodb.net/livraria_api?retryWrites=true&w=majority&appName=Cluster0`;

// Realizando a conexão pro banco
class getConnection {
    async connect () {
        Mongoose.connect(uri);
        const connection = Mongoose.connection        
        connection.once('open', () => console.log('DB funcionando'))
        return connection;
    }

    async close() {
        Mongoose.connection.close();
    }
};

export default getConnection;