import MongoMemoryServer from 'mongodb-memory-server';
 
const mongod = new MongoMemoryServer();
 
const uri = await mongod.getConnectionString();
const port = await mongod.getPort();
const dbPath = await mongod.getDbPath();
const dbName = await mongod.getDbName();
 
// some code
 
// you may stop mongod manually
mongod.stop();
// or it will be stopped automatically when you exit from script