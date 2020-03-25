const express = require('express');
const cors = require('cors');

//Importa o routes.js que criei
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/* Rota / Recurso

*/

/* 
* Métodos HTTP
*
* GET : Buscar uma informação no Back-end
* POST: Criar uma informação no Back-end
* PUT: Alterar uma informação no back-end
* Delete: Deletar uma informação no back-end
*/



app.listen(3333);

