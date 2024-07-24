const e = require('express');
const db = require('../model/db');

const addCustomer = (req, res) => {
  const { name, city } = req.body;
  db.query(
    'INSERT INTO users (name, city) VALUES ($1, $2) RETURNING id',
    [name, city]
  );
};

const getCustomers = (req, res) => {
  db.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const updateCustomer = async (req, res) => {
  try {
    const customerId = parseInt(req.params.id);
    const { name, city } = req.body;

    const dbQuery = await db.query(
      'UPDATE users SET NAME = $1, CITY =$2 WHERE ID = $3',
      [name, city, customerId])
    res.status(200).send(`Customer modified with IsssD: ${customerId}`)
  } catch (error) {
    console.log(error)
  }

}





const deleteCustomer = (req, res) => {
  const customerId = parseInt(req.params.id);

  db.query('DELETE FROM users WHERE id = $1', [customerId], (error, results) => {
    if (error) {
      console.log(error)
    }
    res.status(200).send(`Customer deleted with ID: ${customerId}`)
  })
}



const getCustomerById = async (req, res) => {
  console.log(req.params.id)
  const customerId = parseInt(req.params.id);

  const users = await db.query('select * from users where id=$1', [customerId],
    (error, results) => {
      console.log
      if (error) {
        console.log(error)
      }
      console.log(results)
      res.status(200).json(results.rows);

    }
  )
}

module.exports = {
  addCustomer,
  getCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer
};  