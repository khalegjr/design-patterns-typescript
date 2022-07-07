import { MyDatabaseModule } from './db/my-database-module';
import { myDatabaseModule as myDatabaseModuleFromModuleA } from './module_a';

const myDatabaseModule = MyDatabaseModule;
myDatabaseModule.add({ name: 'João', age: 39 });
myDatabaseModule.add({ name: 'Gabi', age: 34 });
myDatabaseModule.add({ name: 'Fernanda', age: 37 });
myDatabaseModule.show();

console.log(myDatabaseModule === myDatabaseModuleFromModuleA);
