import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

class MongoManager {

    #config;
    
    constructor(config){
        this.#config = config;
    }
    getConnectionURL(){
        return this.#config;
    }

    isConnected(){
        mongoose.connection.on('connected',_=> true);
    }
    
    connect () {
        return mongoose.connect(this.getConnectionURL(),
        { useNewUrlParser: true, useUnifiedTopology: true });
      }
    
    disconnect(){
        mongoose.disconnect();
    }

}

//export default new MongoManager("mongodb://localhost:27017/filmVote");
export default new MongoManager('mongodb+srv://filmVote:DB_myMongoOn@filmvote-hykau.mongodb.net/test?retryWrites=true&w=majority');
