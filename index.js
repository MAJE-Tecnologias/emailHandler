const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const { sendEmail } = require('./api/controller/emailController'); // Corrigido o caminho para importação

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para processar JSON
app.use(bodyParser.json());

// Definir a rota para enviar e-mails
app.post('/send-email', sendEmail);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
