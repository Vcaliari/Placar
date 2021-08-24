const path = require('path');
var express = require('express');
var request = require('request');
var router = express.Router();   
var mysql = require('mysql');   
var expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser');
const sql = require('mssql');
const connStr = "mssql://sa:1234@localhost/PLACAR";
const Sequelize = require('sequelize')
const sequelize = new Sequelize('placar', 'root', '1234', {
  host: "localhost",
  dialect: 'mysql'
})

var testeMCI = [{}];
var testeMD1_14 = [{}];
var testeMD1_15 = [{}];
var testeMD1_16 = [{}];
var testeMD1_17 = [{}];
var testeMD1_18 = [{}];
var testeMD1_19 = [{}];
var testeMD1_20 = [{}];
var testeMD1_21 = [{}];
var testeMD1_22 = [{}];
var testeMD1_23 = [{}];
var testeMD1_24 = [{}];
var testeMD1_25 = [{}];
var testeMD2_14 = [{}];
var testeMD2_15 = [{}];
var testeMD2_16 = [{}];
var testeMD2_17 = [{}];
var testeMD2_18 = [{}];
var testeMD2_19 = [{}];
var testeMD2_20 = [{}];
var testeMD2_21 = [{}];
var testeMD2_22 = [{}];
var testeMD2_23 = [{}];
var testeMD2_24 = [{}];
var testeMD2_25 = [{}];

router.use(express.static(__dirname, + '/public'));

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "placar"
});

sequelize.authenticate().then(function(){
  console.log('Conectado com o banco de dados!');
}).catch(function(erro){
  console.log('Erro na autenticação do banco de dados!'); 
})

con.connect(function(err){
  if(err) throw err;
  con.query("SELECT * FROM placar", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
});
});

/* GET home page. */
router.get('/', function(req, res, next) {
  con.query('SELECT * FROM placar', function(errMCI, resultMCI, fieldsMCI){
    var teste = [{
      imageMD1_14: resultMCI[0].caminho,
      imageMD1_15: resultMCI[1].caminho,
      imageMD1_16: resultMCI[2].caminho,
      imageMD1_17: resultMCI[3].caminho,
      imageMD1_18: resultMCI[4].caminho,
      imageMD2_14: resultMCI[5].caminho,
      imageMD2_15: resultMCI[6].caminho,
      imageMD2_16: resultMCI[7].caminho,
      imageMD2_17: resultMCI[8].caminho,
      imageMD2_18: resultMCI[9].caminho,
      imageMCI: resultMCI[10].caminho,
      imageMD1_19: resultMCI[11].caminho,
      imageMD1_20: resultMCI[12].caminho,
      imageMD1_21: resultMCI[13].caminho,
      imageMD1_22: resultMCI[14].caminho,
      imageMD1_23: resultMCI[15].caminho,
      imageMD1_24: resultMCI[16].caminho,
      imageMD1_25: resultMCI[17].caminho,
      imageMD2_19: resultMCI[18].caminho,
      imageMD2_20: resultMCI[19].caminho,
      imageMD2_21: resultMCI[20].caminho,
      imageMD2_22: resultMCI[21].caminho,
      imageMD2_23: resultMCI[22].caminho,
      imageMD2_24: resultMCI[23].caminho,
      imageMD2_25: resultMCI[24].caminho
    }];
    res.render('index', { imagens: teste});
  });
});


router.post('/', function(request, response){
  var mci = request.body.mci;
  if (mci >= 17){
    sequelize.query('UPDATE PLACAR SET CAMINHO = "image/18dias.jpg" WHERE ID = "imgMCI"');
  }else if(mci <= 16 && mci > 14){
    sequelize.query('UPDATE PLACAR SET CAMINHO = "image/16dias.jpg" WHERE ID = "imgMCI"');
  }else if(mci <= 14 && mci > 12){
    sequelize.query('UPDATE PLACAR SET CAMINHO = "image/14dias.jpg" WHERE ID = "imgMCI"');
  }else if(mci <= 12 && mci > 10){
    sequelize.query('UPDATE PLACAR SET CAMINHO = "image/12dias.jpg" WHERE ID = "imgMCI"');
  }else if(mci <= 10){
    sequelize.query('UPDATE PLACAR SET CAMINHO = "image/10dias.jpg" WHERE ID = "imgMCI"');
  }

  var md1 = request.body.md1;
  if (md1.toUpperCase() == 'SIM'){
    sequelize.query('UPDATE PLACAR SET CAMINHO = "image/Feito.png" WHERE ID = "imgMD1-25"');
  }else if (md1.toUpperCase() == 'NÃO'){
    sequelize.query('UPDATE PLACAR SET CAMINHO = "image/Nao_feito.png" WHERE ID = "imgMD1-25"');
  }

  var md2 = request.body.md2;
  if (md2.toUpperCase() == 'SIM'){
    sequelize.query('UPDATE PLACAR SET CAMINHO = "image/Feito.png" WHERE ID = "imgMD2-25"');
  }else if (md2.toUpperCase() == 'NÃO' || md2.toUpperCase() == 'NAO'){
    sequelize.query('UPDATE PLACAR SET CAMINHO = "image/Nao_feito.png" WHERE ID = "imgMD2-25"');
  }

});

module.exports = router;
