const { sequelize } = require('../models');

const populateSales = () => new Promise((resolve) => {
  sequelize.query('select id, TRIM(CONCAT(firstname, \' \', lastname)) as fullname, email, item, quantity, total_price from sales_db').then((result) => {
    // console.log('res', result);
    resolve(result[0]);
  });
});

const populateDetail = () => new Promise((resolve) => {
  sequelize.query(`SELECT fullname, email, coalesce (baju,0) as baju, coalesce(celana,0) as celana, coalesce(jaket,0) as jaket, coalesce(sendal,0) as sandal, coalesce(sepatu,0) as sepatu
  FROM crosstab($$ select TRIM(CONCAT(firstname, ' ', lastname)) as fullname, email, item, quantity from sales_db order by email $$, $$ select distinct item from sales_db sd order by item $$) 
       AS final_result(fullname varchar, email varchar, baju NUMERIC,celana NUMERIC,jaket NUMERIC,sendal NUMERIC,sepatu NUMERIC);`).then((result) => {
    resolve(result[0]);
  });
});

exports.health = (req, res) => {
  res.status(200).json({
    message: 'success',
    status: 200,
  });
};
exports.twitter = () => {};
exports.sales = (req, res) => {
  populateSales().then((result) => {
    // console.log(result);
    console.log('data', JSON.stringify(result));
    res.render('table', { data: result });
    // console.log(JSON.stringify(result[0]));
  });
};

exports.salesdetail = (req, res) => {
  populateDetail().then((result) => {
    console.log('data', JSON.stringify(result));
    res.render('table2', { data: result });
  });
};
