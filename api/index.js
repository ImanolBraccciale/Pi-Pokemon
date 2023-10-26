
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
require("dotenv").config()
// Syncing all the models at once.
//sincroniza mi base de datos con la informacion que yo tengo en mi base de datos, es decir, todos mis modelos
conn.sync({ force: false }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log('%s listening at 3001',process.env.PORT); // eslint-disable-line no-console
  });
});

//el force true borra todos las tablas y los vuelve a crear con lo que determine en las tablas,modulos. Es decir, cada vez que haga cambios se aplicara hasta que realice cambios
