import "reflect-metadata";
import {createConnection} from "typeorm";
import app from './server'

createConnection().then(async connection => {
    await app.listen(3000, () => console.log('Server running on port 3000'))
}).catch(console.error);
