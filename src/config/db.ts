import mongoose from 'mongoose';

export default (configs?: any): void => {

  const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME } = process.env;

  const defaultConfigs = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ...configs
  };

  const result = (data:any)=>{
    data && !data.ok? console.log(`Error(${data.code}):${data.codeName}`):console.log('Connected to MONGODB');
  }

  mongoose.connect(`mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, defaultConfigs, result);
};
