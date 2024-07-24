const express = require('express');
const db = require('./model/db');
const customer = require('./controller/CustomerController');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/customers', customer.getCustomers);
app.get('/customer/:id', customer.getCustomerById);
app.post('/', customer.addCustomer);
app.put('/customer/:id', customer.updateCustomer);
app.delete('/customer/:id', customer.deleteCustomer);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});