import { MyDatabaseFunc } from './db/my-database-function';

const myDatabaseFunc = MyDatabaseFunc;
myDatabaseFunc.add({ name: 'Khaled', age: 39 });
myDatabaseFunc.add({ name: 'Camila', age: 34 });
myDatabaseFunc.add({ name: 'Lilian', age: 30 });

export { myDatabaseFunc };
