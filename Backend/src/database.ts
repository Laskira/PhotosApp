import {connect} from 'mongoose';

export async function databaseConnection() {
    const database = await connect('mongodb://localhost/photoApp', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    console.log('Database is connected');
}