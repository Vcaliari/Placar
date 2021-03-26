window.onload = function()
{
  $("[name=MCI] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == '18 dias'){
      $('[name=imgMCI]').attr('src', "image/18dias.jpg");
    } else if(selText == '16 dias'){
      $('[name=imgMCI]').attr('src', "image/16dias.jpg");
    } else if(selText == '14 dias'){
      $('[name=imgMCI]').attr('src', "image/14dias.jpg");
    } else if(selText == '12 dias'){
      $('[name=imgMCI]').attr('src', "image/12dias.jpg");
    } else if(selText == '10 dias'){
      $('[name=imgMCI]').attr('src', "image/10dias.jpg");
	}
  });

  $("[name=MD1-1] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD1-1]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD1-1]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD1-1]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD1-1]').attr('src', "image/Circulo.png");
    }
  });

  $("[name=MD1-2] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD1-2]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD1-2]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD1-2]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD1-2]').attr('src', "image/Circulo.png");
    }
  });

  $("[name=MD1-3] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD1-3]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD1-3]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD1-3]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD1-3]').attr('src', "image/Circulo.png");
    }
  });

  $("[name=MD1-4] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD1-4]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD1-4]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD1-4]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD1-4]').attr('src', "image/Circulo.png");
    }
  });

  $("[name=MD1-5] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD1-5]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD1-5]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD1-5]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD1-5]').attr('src', "image/Circulo.png");
    }
  });

  $("[name=MD1-6] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD1-6]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD1-6]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD1-6]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD1-6]').attr('src', "image/Circulo.png");
    }
  });
  $("[name=MD1-7] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD1-7]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD1-7]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD1-7]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD1-7]').attr('src', "image/Circulo.png");
    }
  });

  $("[name=MD1-8] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD1-8]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD1-8]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD1-8]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD1-8]').attr('src', "image/Circulo.png");
    }
  });

  $("[name=MD1-9] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD1-9]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD1-9]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD1-9]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD1-9]').attr('src', "image/Circulo.png");
    }
  });

  $("[name=MD1-10] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD1-10]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD1-10]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD1-10]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD1-10]').attr('src', "image/Circulo.png");
    }
  });

  $("[name=MD1-11] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD1-11]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD1-11]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD1-11]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD1-11]').attr('src', "image/Circulo.png");
    }
  });

  $("[name=MD1-12] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD1-12]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD1-12]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD1-12]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD1-12]').attr('src', "image/Circulo.png");
    }
  });
  $("[name=MD1-13] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD1-13]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD1-13]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD1-13]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD1-13]').attr('src', "image/Circulo.png");
    }
  });

  $("[name=MD1-14] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD1-14]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD1-14]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD1-14]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD1-14]').attr('src', "image/Circulo.png");
    }
  });

  $("[name=MD1-15] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD1-15]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD1-15]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD1-15]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD1-15]').attr('src', "image/Circulo.png");
    }
  });

  $("[name=MD1-16] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD1-16]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD1-16]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD1-16]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD1-16]').attr('src', "image/Circulo.png");
    }
  });

  $("[name=MD1-17] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD1-17]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD1-17]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD1-17]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD1-17]').attr('src', "image/Circulo.png");
    }
  });

  $("[name=MD1-18] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD1-18]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD1-18]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD1-18]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD1-18]').attr('src', "image/Circulo.png");
    }
  });

  $("[name=MD2-1] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD2-1]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD2-1]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD2-1]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD2-1]').attr('src', "image/Circulo.png");
    }
  });

  $("[name=MD2-2] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD2-2]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD2-2]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD2-2]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD2-2]').attr('src', "image/Circulo.png");
    }
  });

  $("[name=MD2-3] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD2-3]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD2-3]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD2-3]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD2-3]').attr('src', "image/Circulo.png");
    }
  });

  $("[name=MD2-4] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD2-4]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD2-4]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD2-4]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD2-4]').attr('src', "image/Circulo.png");
    }
  });

  $("[name=MD2-5] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD2-5]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD2-5]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD2-5]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD2-5]').attr('src', "image/Circulo.png");
    }
  });

  $("[name=MD2-6] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD2-6]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD2-6]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD2-6]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD2-6]').attr('src', "image/Circulo.png");
    }
  });
  $("[name=MD2-7] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD2-7]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD2-7]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD2-7]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD2-7]').attr('src', "image/Circulo.png");
    }
  });

  $("[name=MD2-8] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD2-8]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD2-8]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD2-8]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD2-8]').attr('src', "image/Circulo.png");
    }
  });

  $("[name=MD2-9] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD2-9]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD2-9]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD2-9]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD2-9]').attr('src', "image/Circulo.png");
    }
  });

  $("[name=MD2-10] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD2-10]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD2-10]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD2-10]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD2-10]').attr('src', "image/Circulo.png");
    }
  });

  $("[name=MD2-11] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD2-11]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD2-11]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD2-11]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD2-11]').attr('src', "image/Circulo.png");
    }
  });

  $("[name=MD2-12] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD2-12]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD2-12]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD2-12]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD2-12]').attr('src', "image/Circulo.png");
    }
  });
  $("[name=MD2-13] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD2-13]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD2-13]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD2-13]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD2-13]').attr('src', "image/Circulo.png");
    }
  });

  $("[name=MD2-14] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD2-14]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD2-14]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD2-14]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD2-14]').attr('src', "image/Circulo.png");
    }
  });

  $("[name=MD2-15] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD2-15]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD2-15]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD2-15]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD2-15]').attr('src', "image/Circulo.png");
    }
  });

  $("[name=MD2-16] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD2-16]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD2-16]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD2-16]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD2-16]').attr('src', "image/Circulo.png");
    }
  });

  $("[name=MD2-17] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD2-17]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD2-17]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD2-17]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD2-17]').attr('src', "image/Circulo.png");
    }
  });

  $("[name=MD2-18] a").on('click', function(e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    if (selText == 'Cumpriu'){
      $('[name=imgMD2-18]').attr('src', "image/Feito.png");
    } else if(selText == 'Não cumpriu'){
      $('[name=imgMD2-18]').attr('src', "image/Nao_feito.png");
    } else if(selText == 'Em andamento'){
      $('[name=imgMD2-18]').attr('src', "image/Andamento.png");
    } else if(selText == 'Próximos'){
      $('[name=imgMD2-18]').attr('src', "image/Circulo.png");
    }
  });
}