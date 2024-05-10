import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig ={
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
}


export const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('662015aecbb8755b8631');

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
