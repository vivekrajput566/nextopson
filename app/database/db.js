const {db_username,password}=process.env;


export const connectionString = 'mongodb://'+db_username+':'+password+'@localhost:27017/nextopson';