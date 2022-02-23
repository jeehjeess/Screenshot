// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

window.jsPDF = window.jspdf.jsPDF;
//alert(document.referrer);
//alert( window.location.href);
//alert(window.location.pathname);

$(function () {
  $("#accordion-basic, #accordion-text, #accordion-graphic, #accordion-font").accordion({
    autoHeight: false,
    navigation: true
  });
  $("#tabs").tabs();
  $(".button").button();
});

function setScreenshotUrl(url) {

  document.getElementById('target').src = url;

  const urlSite = localStorage.getItem('url');

  console.log("> " + urlSite);
  const inf = "https://ipinfo.io/json";
  fetch(inf)
    .then(response => response.json())
    .then(data => {
      console.log(JSON.stringify(data))
      dados = data;
      console.log(dados['ip']);


      const u = urlSite.split("/", 3);
      console.log(u[2]);

      /*const urlBusca = "https://rdap.registro.br/domain/" + u[2];
      console.log(">> " + urlBusca);
      fetch(urlBusca)
        .then(response => response.json())
        .then(data => {
          console.log(JSON.stringify(data))
          var dados2 = data;
          console.log(">>");
          var ip = dados2['nameservers'];
          console.log(dados2['ldhName']);
          console.log(dados2['nameservers']);
          console.log(">>>");
          console.log(ip[0]);
          console.log(ip[0].ldhName);
          console.log(ip[0].ipAddresses.v4[0]);
*/

      var data = new Date();
      var date = data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
      var hora = new Date();
      var time = hora.getHours() + ':' + hora.getMinutes() + ':' + hora.getSeconds();

      var doc = new jsPDF({filters: ["ASCIIHexEncode"]});

      // data, hora e nome da aplicação na primeira linha em tamanho menor

      doc.setFont('courier');
      doc.setFontSize(12);
      doc.text(10, 10, date + ' ' + time + '\t \t Nome da aplicação');
      

      //Título centralizado na página

      doc.setFont('Times');
      doc.setFontSize(30);
      //doc.setFontType('bold');
      doc.text(65, 30, 'Relatorio de Prova');

      //subtítulo 

      doc.setFont('Times');
      //doc.setFontType('bold');
      doc.setFontSize(20);
      doc.text(20, 50, 'Dados de autoria');

      //tabela com Dados de quem tirou o print

      doc.setFont('Times');
      //doc.setFontType('normal');

      // construção da tabela 1
      doc.setLineWidth(0.1);
      doc.line(20, 60, 190, 60);
      doc.line(20, 70, 190, 70);
      doc.line(20, 80, 190, 80);
      doc.line(70, 80, 70, 60);
      doc.line(20, 80, 20, 60);
      doc.line(190, 80, 190, 60);

      // primeira coluna da tabela 1
      doc.setFontSize(16);
      doc.text(25, 67, 'Nome');
      doc.text(25, 77, 'CPF');

      //segunda coluna da tabela 1
      doc.setFontSize(16);
      doc.text(80, 67, 'Fulana de tal');
      doc.text(80, 77, '000.000.000-00');


      //subtítulo 

      doc.setFont('Times');
      //doc.setFontType('bold');
      doc.setFontSize(20);
      doc.text(20, 100, 'Dados da Captura');

      //tabela 2
      doc.setLineWidth(0.1);
      doc.line(20, 110, 190, 110);
      doc.line(20, 120, 190, 120);
      doc.line(20, 130, 190, 130);
      doc.line(20, 140, 190, 140);
      doc.line(70, 110, 70, 140);
      doc.line(20, 110, 20, 140);
      doc.line(190, 110, 190, 140);

      // Primeira coluna  tabela 2
      doc.setFontSize(16);
      doc.text(25, 117, 'Data e hora');
      doc.text(25, 127, 'Endereço IP');
      doc.text(25, 137, 'Localização');

      // Segunda coluna  tabela 2
      doc.setFontSize(16);
      doc.text(80, 117, date + ' ' + time);
      doc.text(80, 127, '177.82.174.21');
      doc.text(80, 137, 'Latitude X Longitude Y');

      //subtítulo 

      doc.setFont('Times');
      //doc.setFontType('bold');
      doc.setFontSize(20);
      doc.text(20, 160, 'Endereço do conteúdo capturado');
      doc.setFontSize(14);
      doc.text(20, 170, 'URL: https://www.sitevaiaqui.com.br');


      //rodapé com número da página
      doc.setFont('courier');
      //doc.setFontType('normal');
      doc.setFontSize(12);
      doc.text(170, 200, 'Página 1 de x');



      /*doc.text("IP: " + dados['ip'], 30, 55);
      doc.text("IP: " + dados['ip'], 30, 60);*/

      /* doc.text("Domínio: " + dados2['ldhName'], 30, 80);
       doc.text("IP: " + ip[0].ipAddresses.v4[0], 30, 85);*/


      doc.addPage("a4", "1");
      doc.addImage(url, "JPEG", 15, 40, 180, 150);


      doc.save("captura.pdf");






    });
}





