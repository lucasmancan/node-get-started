global.API_KEY = 'L!t(kg"6&<mAl@[u,9I{n?fFg-cBB:/X$@Dy9Mg|AQ&AV:(itx?XCAe>A#v/;|_';

module.exports = {
    development: {
      username: 'Soft360',
      password: 'App360soft',
      database: 'api-db',
      host: 'grupopll.database.windows.net',
      dialect: 'mssql',
      dialectOptions: {
            encrypt: true
          }
    },
    production: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOSTNAME,
      dialect: 'mssql',
      dialectOptions: {
            encrypt: true
          },
      use_env_variable: true
    }
  };