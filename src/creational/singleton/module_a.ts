import { MyDatabaseClassic } from './db/my-database-classic';

const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.add({ name: 'Khaled', age: 39 });
myDatabaseClassic.add({ name: 'Camila', age: 34 });
myDatabaseClassic.add({ name: 'Lilian', age: 30 });

export { myDatabaseClassic };
