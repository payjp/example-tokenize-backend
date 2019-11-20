const express = require('express');
const bodyParser = require('body-parser');
const payjp = require('payjp')(process.env.PAYJP_TEST_SECRET_KEY);

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.post('/save_card', async (request, response) => {
  const { card } = request.body;
  if (!card) {
    response.status(400).json({ message: 'Card not found.' });
  }
  try {
    const customer = await payjp.customers.create({
      card
    });
    response.status(201).json(customer);
  } catch (e) {
    const { error } = JSON.parse(e.response.text);
    console.warn('payjp error', error);
    response.status(e.status).json({ message: error.message });
  }
})

const listener = app.listen(process.env.PORT, () => {
  console.log('App is now running on port ' + listener.address().port);
});