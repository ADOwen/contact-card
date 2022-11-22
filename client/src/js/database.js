import { openDB } from 'idb';
import 'regenerator-runtime/runtime'

export const initDb = async () => {
  const db = await openDB('contact_db', 1, {
    upgrade(db){
      if (db.objectStoreNames.contains('contacts')){
        console.log('contact stores already exists');
        return;
      }
      // Create a new object store for the data and give it a key name of 'id' which will increment automatically
      db.createObjectStore('contacts', { keyPath: 'id', autoIncrement: true });
      console.log('contacts store created');
    }
  }) 
  console.log(db)

}