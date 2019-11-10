import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

class MongoManager {

    #config;
    
    constructor(config){
        this.#config = config;
    }
    getConnectionURL(){
        return this.#config.MONGODB_URI;
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

export default new MongoManager(config);
