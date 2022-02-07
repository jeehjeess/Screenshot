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
  const inf = "https://ipinfo.io/json"
  fetch(inf)
    .then(response => response.json())
    .then(data => console.log(JSON.stringify(data)));

  const u = urlSite.split("/", 3);
  console.log(u[2]);

  const urlBusca = "https://rdap.registro.br/domain/" + u[2];
  console.log(">> "+urlBusca);
  fetch(urlBusca)
    .then(response => response.json())
    .then(data => console.log(JSON.stringify(data)));


  var doc = new jsPDF();
  doc.setFontSize(40);
  doc.setFont("times", "bold", "center");  
  doc.text("IFSUL",35,20);
  doc.setFontSize(20);
  doc.text("DADOS:", 30,50);
  doc.addImage("ifsul.png", "PNG",15, 15, 15, 15);
  doc.addPage("a4","1");
  doc.addImage(url, "JPEG", 15, 40, 180, 180);
  doc.save("captura.pdf");
}


