import { MyDatabaseFunc } from './db/my-database-function';
import { myDatabaseFunc as myDatabaseFuncFromModuleA } from './module_a';

const myDatabaseFunc = MyDatabaseFunc;
myDatabaseFunc.add({ name: 'João', age: 39 });
myDatabaseFunc.add({ name: 'Gabi', age: 34 });
myDatabaseFunc.add({ name: 'Fernanda', age: 37 });
myDatabaseFunc.show();

console.log(myDatabaseFunc === myDatabaseFuncFromModuleA);
