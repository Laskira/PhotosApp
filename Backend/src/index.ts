import app from './app';
import {databaseConnection} from './database'

async function main() {
    databaseConnection();
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
};

main();
