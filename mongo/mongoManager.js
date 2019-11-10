import mongoose from 'mongoose';

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

export default new MongoManager("mongodb+srv://<username>:<password>@cluster0-vi9uq.mongodb.net/test?retryWrites=true&w=majority");