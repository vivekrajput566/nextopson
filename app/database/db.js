const {db_username,password}=process.env;

console.log(db_username+" "+password);
export const connectionString = 'mongodb://'+db_username+':'+password+'@localhost:27017/nextopson';