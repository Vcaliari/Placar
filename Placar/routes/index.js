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
var testeMD2_14 = [{}];
var testeMD2_15 = [{}];
var testeMD2_16 = [{}];
var testeMD2_17 = [{}];
var testeMD2_18 = [{}];

router.use(express.static(__dirname, + '/public'));

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "placar"
});

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
      imageMCI: resultMCI[10].caminho
    }];
    res.render('index', { imagens: teste});
  });
  /*con.query('SELECT CAMINHO FROM PLACAR WHERE ID = "imgMD1-14"', function(errMD1_14, resultMD1_14, fieldsMD1_14){
    var testeMD1_14 = [{
      name: "teste",
      image: resultMD1_14[0].CAMINHO
    }];
    return testeMD1_14;
  });  
  con.query('SELECT CAMINHO FROM PLACAR WHERE ID = "imgMD1-15"', function(errMD1_15, resultMD1_15, fieldsMD1_15){
    var testeMD1_15 = [{
      name: "teste",
      image: resultMD1_15[0].CAMINHO
    }];
    return testeMD1_15;
  });
  con.query('SELECT CAMINHO FROM PLACAR WHERE ID = "imgMD1-16"', function(errMD1_16, resultMD1_16, fieldsMD1_16){
    var testeMD1_16 = [{
      name: "teste",
      image: resultMD1_16[0].CAMINHO
    }];
    return testeMD1_16;
  });
  con.query('SELECT CAMINHO FROM PLACAR WHERE ID = "imgMD1-17"', function(errMD1_17, resultMD1_17, fieldsMD1_17){
    var testeMD1_17 = [{
      name: "teste",
      image: resultMD1_17[0].CAMINHO
    }];
    return testeMD1_17;
  });
  con.query('SELECT CAMINHO FROM PLACAR WHERE ID = "imgMD1-18"', function(errMD1_18, resultMD1_18, fieldsMD1_18){
    var testeMD1_18 = [{
      name: "teste",
      image: resultMD1_18[0].CAMINHO
    }];
    return testeMD1_18;
  });
  con.query('SELECT CAMINHO FROM PLACAR WHERE ID = "imgMD2-14"', function(errMD2_14, resultMD2_14, fieldsMD2_14){
    var testeMD2_14 = [{
      name: "teste",
      image: resultMD2_14[0].CAMINHO
    }];
    return testeMD2_14;
  });
  con.query('SELECT CAMINHO FROM PLACAR WHERE ID = "imgMD2-15"', function(errMD2_15, resultMD2_15, fieldsMD2_15){
    var testeMD2_15 = [{
      name: "teste",
      image: resultMD2_15[0].CAMINHO
    }];
    return testeMD2_15;
  });
  con.query('SELECT CAMINHO FROM PLACAR WHERE ID = "imgMD2-16"', function(errMD2_16, resultMD2_16, fieldsMD2_16){
    var testeMD2_16 = [{
      name: "teste",
      image: resultMD2_16[0].CAMINHO
    }];
    return testeMD2_16;
  });
  con.query('SELECT CAMINHO FROM PLACAR WHERE ID = "imgMD2-17"', function(errMD2_17, resultMD2_17, fieldsMD2_17){
    var testeMD2_17 = [{
      name: "teste",
      image: resultMD2_17[0].CAMINHO
    }];
    return testeMD2_17;
  });
  con.query('SELECT CAMINHO FROM PLACAR WHERE ID = "imgMD2-18"', function(errMD2_18, resultMD2_18, fieldsMD2_18){
    var testeMD2_18 = [{
      name: "teste",
      image: resultMD2_18[0].CAMINHO
    }];
    return testeMD2_18;
  });*/
  //res.render('index', { imagensMCI: testeMCI,
                        /*imagensMD1_14: testeMD1_14,
                        imagensMD1_15: testeMD1_15,
                        imagensMD1_16: testeMD1_16,
                        imagensMD1_17: testeMD1_17,
                        imagensMD1_18: testeMD1_18,
                        imagensMD2_14: testeMD2_14,
                        imagensMD2_15: testeMD2_15,
                        imagensMD2_16: testeMD2_16,
                        imagensMD2_17: testeMD2_17,
  imagensMD2_18: testeMD2_18});*/
});


sequelize.authenticate().then(function(){
  console.log('Boa!');
}).catch(function(erro){
  console.log('Moio'); 
})


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
    sequelize.query('UPDATE PLACAR SET CAMINHO = "image/Feito.png" WHERE ID = "imgMD1-18"');
  }else if (md1.toUpperCase() == 'NÃO'){
    sequelize.query('UPDATE PLACAR SET CAMINHO = "image/Nao_feito.png" WHERE ID = "imgMD1-18"');
  }

  var md2 = request.body.md2;
  if (md2.toUpperCase() == 'SIM'){
    sequelize.query('UPDATE PLACAR SET CAMINHO = "image/Feito.png" WHERE ID = "imgMD2-18"');
  }else if (md2.toUpperCase() == 'NÃO' || md2.toUpperCase() == 'NAO'){
    sequelize.query('UPDATE PLACAR SET CAMINHO = "image/Nao_feito.png" WHERE ID = "imgMD2-18"');
  }

});

module.exports = router;
