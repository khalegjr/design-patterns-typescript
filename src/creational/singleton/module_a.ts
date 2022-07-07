import { MyDatabaseModule } from './db/my-database-module';

const myDatabaseModule = MyDatabaseModule;
myDatabaseModule.add({ name: 'Khaled', age: 39 });
myDatabaseModule.add({ name: 'Camila', age: 34 });
myDatabaseModule.add({ name: 'Lilian', age: 30 });

export { myDatabaseModule };
