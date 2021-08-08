var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/user', (req, res) => {
  const users = [
    {
      name: "Marcela",
      surname: "Vallejos",
      age: 35
    },
    {
      name: "Gabriela",
      surname: "Monette",
      age: 26
    },
    {
      name: "Fernando",
      surname: "Grasler",
      age: 36 
    },
    {
      name: "Kiara",
      surname: "Lunetin",
      age: 18
    },
    {
      name: "Pedro",
      surname: "Florian",
      age: 37
    }
  ]
  
  res.json(users)
});

router.get('/user/quantity', (req, res) => {
  const qty = {
    quantity: 5 
  }

  res.json(qty)
});

module.exports = router;
