const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

const API_URL = 'https://api.github.com';


//Prueba en puerto 5000
app.get('/prueba', async (req, res) => {
  console.log("Ruta de prueba ");
  return res.status(200).send(`<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>`
  );
});


app.get('/prueba', async (req, res) => {
  try {
    
    console.log("Metodo /prueba desde NodeJS");
  } catch (error) {
    console.error(error);
    res.status(500).send('Error obteniendo los posts');
  }
});


app.get('/users', async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    res.send(response.data);
    console.log("Metodo /users desde NodeJS");
  } catch (error) {
    console.error(error);
    res.status(500).send('Error obteniendo los posts');
  }
});

app.get('/user/:id', async (req, res) => {

  var userId = req.params.id;
  try {
    const response = await axios.get(`${API_URL}/user/${userId}`);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error obteniendo al Usuario');
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Su Servidor iniciado en el puerto ${PORT}`);
});
