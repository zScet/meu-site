// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

let tickets = []; // Array para armazenar os tickets de mensagens

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para receber uma nova mensagem e criar um ticket
app.post('/api/tickets', (req, res) => {
  const { fullname, email, message } = req.body;
  const newTicket = { id: tickets.length + 1, fullname, email, message, status: 'Aberto' };
  tickets.push(newTicket);
  res.status(201).json(newTicket);
});

// Rota para obter todos os tickets de mensagens
app.get('/api/tickets', (req, res) => {
  res.json(tickets);
});

// Rota para responder a um ticket específico
app.post('/api/tickets/:id/resposta', (req, res) => {
  const { id } = req.params;
  const { resposta } = req.body;
  const ticket = tickets.find(ticket => ticket.id === parseInt(id));
  if (!ticket) return res.status(404).json({ message: 'Ticket não encontrado' });
  ticket.resposta = resposta;
  ticket.status = 'Fechado';
  res.json(ticket);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
