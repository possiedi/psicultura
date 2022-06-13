const numPeso = document.getElementById('peso');
const numQuantidade = document.getElementById('quantidade');
const numTemperatura = document.getElementById('temperatura');

const btnCalculate = document.getElementById('btn-calculate');
const res = document.getElementById('res');
const res2 = document.getElementById('res2');
const res3 = document.getElementById('res3');

function calculate(event) {
  event.preventDefault();
  if (event.target === 'touchstart') {
    event.preventDefault();
  }

  const peso = +numPeso.value;
  const quantidade = +numQuantidade.value;
  const temperatura = +numTemperatura.value;

  // Pesos
  const peso$05$20 = peso >= 0.5 && peso <= 2;
  const peso$21$55 = peso >= 2.1 && peso <= 5.5;
  const peso$56$11 = peso >= 5.6 && peso <= 11;
  const peso$111$18 = peso >= 11.1 && peso <= 18;
  const peso$181$27 = peso >= 18.1 && peso <= 27;
  const peso$271$39 = peso >= 27.1 && peso <= 39;
  const peso$391$55 = peso >= 39.1 && peso <= 55;
  const peso$551$75 = peso >= 55.1 && peso <= 75;
  const peso$751$102 = peso >= 75.1 && peso <= 102;
  const peso$1021$132 = peso >= 102.1 && peso <= 132;
  const peso$1321$168 = peso >= 132.1 && peso <= 168;
  const peso$1681$208 = peso >= 168.1 && peso <= 208;
  const peso$2081$253 = peso >= 208.1 && peso <= 253;
  const peso$2531$303 = peso >= 253.1 && peso <= 303;
  const peso$3031$355 = peso >= 303.1 && peso <= 355;
  const peso$3551$410 = peso >= 355.1 && peso <= 410;
  const peso$4101$466 = peso >= 410.1 && peso <= 466;
  const peso$4661$523 = peso >= 466.1 && peso <= 523;
  const peso$5231$580 = peso >= 523.1 && peso <= 580;
  const peso$5801$637 = peso >= 580.1 && peso <= 637;
  const peso$6371$694 = peso >= 637.1 && peso <= 694;
  const peso$6941$751 = peso >= 694.1 && peso <= 751;
  const peso$7511$806 = peso >= 751.1 && peso <= 806;
  const peso$8061$859 = peso >= 806.1 && peso <= 859;
  const peso$8591$912 = peso >= 859.1 && peso <= 912;
  const peso$9121$962 = peso >= 912.1 && peso <= 962;
  const peso$9621$1012 = peso >= 962.1 && peso <= 1012;
  const peso$10121$1062 = peso >= 1012.1 && peso <= 1062;
  const peso$10621$1112 = peso >= 1062.1 && peso <= 1112;
  const peso$11121$1162 = peso >= 1112.1 && peso <= 1162;

  // Ração proporcional
  const peso14 = peso * 0.00014;
  const peso12 = peso * 0.00012;
  const peso10 = peso * 0.0001;
  const peso8 = peso * 0.00008;
  const peso7 = peso * 0.00007;
  const peso6 = peso * 0.00006;
  const peso5 = peso * 0.00005;
  const peso4 = peso * 0.00004;
  const peso3 = peso * 0.00003;
  const peso2 = peso * 0.00002;
  const peso1 = peso * 0.00002;

  // Ração proporcional ao peso
  const pesoQ14 = peso14 * quantidade;
  const pesoQ12 = peso12 * quantidade;
  const pesoQ10 = peso10 * quantidade;
  const pesoQ8 = peso8 * quantidade;
  const pesoQ7 = peso7 * quantidade;
  const pesoQ6 = peso6 * quantidade;
  const pesoQ5 = peso5 * quantidade;
  const pesoQ4 = peso4 * quantidade;
  const pesoQ3 = peso3 * quantidade;
  const pesoQ2 = peso2 * quantidade;
  const pesoQ1 = peso1 * quantidade;

  // Temperatura
  const temp$15$18 = temperatura >= 15 && temperatura <= 18;
  const temp$19$21 = temperatura >= 19 && temperatura <= 21;
  const temp$22$24 = temperatura >= 22 && temperatura <= 24;
  const temp$25$28 = temperatura >= 25 && temperatura <= 28;
  const temp$29$30 = temperatura >= 29 && temperatura <= 30;
  const temp$31$32 = temperatura >= 31 && temperatura <= 32;

  // Granulometria
  const $1mm = 'Granulometria da ração: 1mm';
  const $17mm = 'Granulometria da ração: 1.7mm';
  const $253mm = 'Granulometria da ração: 2.5mm a 3mm';
  const $34mm = 'Granulometria da ração: 3mm a 4mm';
  const $56mm = 'Granulometria da ração: 5mm a 6mm';
  const $78mm = 'Granulometria da ração: 7mm a 8mm';

  // Vezes ao dia
  const alimentacao = 'Quantidade de alimentação diária: ';
  const vezes12 = alimentacao + '12 vezes de ';
  const vezes10 = alimentacao + '10 vezes de ';
  const vezes9 = alimentacao + '9 vezes de ';
  const vezes8 = alimentacao + '8 vezes de ';
  const vezes7 = alimentacao + '7 vezes de ';
  const vezes6 = alimentacao + '6 vezes de ';
  const vezes5 = alimentacao + '5 vezes de ';
  const vezes4 = alimentacao + '4 vezes de ';
  const vezes3 = alimentacao + '3 vezes de ';

  // Ração 0.5g a 2g (14% - 12 vezes)
  const racao$05$15$18 = (pesoQ14 * 0.4).toFixed(2);
  const racao$05$19$21 = (pesoQ14 * 0.6).toFixed(2);
  const racao$05$22$24 = (pesoQ14 * 0.8).toFixed(2);
  const racao$05$25$28 = pesoQ14.toFixed(2);
  const racao$05$29$30 = (pesoQ14 * 0.8).toFixed(2);
  const racao$05$31$32 = (pesoQ14 * 0.6).toFixed(2);

  const racao$05$15$18$12 = ((pesoQ14 * 0.4) / 12).toFixed(2);
  const racao$05$19$21$12 = ((pesoQ14 * 0.6) / 12).toFixed(2);
  const racao$05$22$24$12 = ((pesoQ14 * 0.8) / 12).toFixed(2);
  const racao$05$25$28$12 = (pesoQ14 / 12).toFixed(2);
  const racao$05$29$30$12 = ((pesoQ14 * 0.8) / 12).toFixed(2);
  const racao$05$31$32$12 = ((pesoQ14 * 0.6) / 12).toFixed(2);

  // Ração 2.1g a 5.5g (12% - 10 vezes)
  const racao$21$15$18 = (pesoQ12 * 0.4).toFixed(2);
  const racao$21$19$21 = (pesoQ12 * 0.6).toFixed(2);
  const racao$21$22$24 = (pesoQ12 * 0.8).toFixed(2);
  const racao$21$25$28 = pesoQ12.toFixed(2);
  const racao$21$29$30 = (pesoQ12 * 0.8).toFixed(2);
  const racao$21$31$32 = (pesoQ12 * 0.6).toFixed(2);

  const racao$21$15$18$10 = ((pesoQ12 * 0.4) / 10).toFixed(2);
  const racao$21$19$21$10 = ((pesoQ12 * 0.6) / 10).toFixed(2);
  const racao$21$22$24$10 = ((pesoQ12 * 0.8) / 10).toFixed(2);
  const racao$21$25$28$10 = (pesoQ12 / 10).toFixed(2);
  const racao$21$29$30$10 = ((pesoQ12 * 0.8) / 10).toFixed(2);
  const racao$21$31$32$10 = ((pesoQ12 * 0.6) / 10).toFixed(2);

  // Ração 5.6g a 11g (10% - 9 vezes)
  const racao$56$15$18 = (pesoQ10 * 0.4).toFixed(2);
  const racao$56$19$21 = (pesoQ10 * 0.6).toFixed(2);
  const racao$56$22$24 = (pesoQ10 * 0.8).toFixed(2);
  const racao$56$25$28 = pesoQ10.toFixed(2);
  const racao$56$29$30 = (pesoQ10 * 0.8).toFixed(2);
  const racao$56$31$32 = (pesoQ10 * 0.6).toFixed(2);

  const racao$56$15$18$09 = ((pesoQ10 * 0.4) / 9).toFixed(2);
  const racao$56$19$21$09 = ((pesoQ10 * 0.6) / 9).toFixed(2);
  const racao$56$22$24$09 = ((pesoQ10 * 0.8) / 9).toFixed(2);
  const racao$56$25$28$09 = (pesoQ10 / 9).toFixed(2);
  const racao$56$29$30$09 = ((pesoQ10 * 0.8) / 9).toFixed(2);
  const racao$56$31$32$09 = ((pesoQ10 * 0.6) / 9).toFixed(2);

  // Ração 11.1g a 18g (8% - 9 vezes)
  const racao$111$15$18 = (pesoQ8 * 0.4).toFixed(2);
  const racao$111$19$21 = (pesoQ8 * 0.6).toFixed(2);
  const racao$111$22$24 = (pesoQ8 * 0.8).toFixed(2);
  const racao$111$25$28 = pesoQ8.toFixed(2);
  const racao$111$29$30 = (pesoQ8 * 0.8).toFixed(2);
  const racao$111$31$32 = (pesoQ8 * 0.6).toFixed(2);

  const racao$111$15$18$09 = ((pesoQ8 * 0.4) / 9).toFixed(2);
  const racao$111$19$21$09 = ((pesoQ8 * 0.6) / 9).toFixed(2);
  const racao$111$22$24$09 = ((pesoQ8 * 0.8) / 9).toFixed(2);
  const racao$111$25$28$09 = (pesoQ8 / 9).toFixed(2);
  const racao$111$29$30$09 = ((pesoQ8 * 0.8) / 9).toFixed(2);
  const racao$111$31$32$09 = ((pesoQ8 * 0.6) / 9).toFixed(2);

  // Ração 18.1g a 27g (7% - 8 vezes)
  const racao$181$15$18 = (pesoQ7 * 0.4).toFixed(2);
  const racao$181$19$21 = (pesoQ7 * 0.6).toFixed(2);
  const racao$181$22$24 = (pesoQ7 * 0.8).toFixed(2);
  const racao$181$25$28 = pesoQ7.toFixed(2);
  const racao$181$29$30 = (pesoQ7 * 0.8).toFixed(2);
  const racao$181$31$32 = (pesoQ7 * 0.6).toFixed(2);

  const racao$181$15$18$08 = ((pesoQ7 * 0.4) / 8).toFixed(2);
  const racao$181$19$21$08 = ((pesoQ7 * 0.6) / 8).toFixed(2);
  const racao$181$22$24$08 = ((pesoQ7 * 0.8) / 8).toFixed(2);
  const racao$181$25$28$08 = (pesoQ7 / 8).toFixed(2);
  const racao$181$29$30$08 = ((pesoQ7 * 0.8) / 8).toFixed(2);
  const racao$181$31$32$08 = ((pesoQ7 * 0.6) / 8).toFixed(2);

  // Ração 27.1g a 39g (6% - 7 vezes)
  const racao$271$15$18 = (pesoQ6 * 0.4).toFixed(2);
  const racao$271$19$21 = (pesoQ6 * 0.6).toFixed(2);
  const racao$271$22$24 = (pesoQ6 * 0.8).toFixed(2);
  const racao$271$25$28 = pesoQ6.toFixed(2);
  const racao$271$29$30 = (pesoQ6 * 0.8).toFixed(2);
  const racao$271$31$32 = (pesoQ6 * 0.6).toFixed(2);

  const racao$271$15$18$07 = ((pesoQ6 * 0.4) / 7).toFixed(2);
  const racao$271$19$21$07 = ((pesoQ6 * 0.6) / 7).toFixed(2);
  const racao$271$22$24$07 = ((pesoQ6 * 0.8) / 7).toFixed(2);
  const racao$271$25$28$07 = (pesoQ6 / 7).toFixed(2);
  const racao$271$29$30$07 = ((pesoQ6 * 0.8) / 7).toFixed(2);
  const racao$271$31$32$07 = ((pesoQ6 * 0.6) / 7).toFixed(2);

  // Ração 39.1g a 55g (5% - 6 vezes)
  const racao$391$15$18 = (pesoQ5 * 0.4).toFixed(2);
  const racao$391$19$21 = (pesoQ5 * 0.6).toFixed(2);
  const racao$391$22$24 = (pesoQ5 * 0.8).toFixed(2);
  const racao$391$25$28 = pesoQ5.toFixed(2);
  const racao$391$29$30 = (pesoQ5 * 0.8).toFixed(2);
  const racao$391$31$32 = (pesoQ5 * 0.6).toFixed(2);

  const racao$391$15$18$06 = ((pesoQ5 * 0.4) / 6).toFixed(2);
  const racao$391$19$21$06 = ((pesoQ5 * 0.6) / 6).toFixed(2);
  const racao$391$22$24$06 = ((pesoQ5 * 0.8) / 6).toFixed(2);
  const racao$391$25$28$06 = (pesoQ5 / 6).toFixed(2);
  const racao$391$29$30$06 = ((pesoQ5 * 0.8) / 6).toFixed(2);
  const racao$391$31$32$06 = ((pesoQ5 * 0.6) / 6).toFixed(2);

  // Ração 55.1g a 102g (5% - 5 vezes)
  const racao$551$15$18 = (pesoQ5 * 0.4).toFixed(2);
  const racao$551$19$21 = (pesoQ5 * 0.6).toFixed(2);
  const racao$551$22$24 = (pesoQ5 * 0.8).toFixed(2);
  const racao$551$25$28 = pesoQ5.toFixed(2);
  const racao$551$29$30 = (pesoQ5 * 0.8).toFixed(2);
  const racao$551$31$32 = (pesoQ5 * 0.6).toFixed(2);

  const racao$551$15$18$05 = ((pesoQ5 * 0.4) / 5).toFixed(2);
  const racao$551$19$21$05 = ((pesoQ5 * 0.6) / 5).toFixed(2);
  const racao$551$22$24$05 = ((pesoQ5 * 0.8) / 5).toFixed(2);
  const racao$551$25$28$05 = (pesoQ5 / 5).toFixed(2);
  const racao$551$29$30$05 = ((pesoQ5 * 0.8) / 5).toFixed(2);
  const racao$551$31$32$05 = ((pesoQ5 * 0.6) / 5).toFixed(2);

  // Ração 102.1g a 132g (5% - 4 vezes)
  const racao$1021$15$18 = (pesoQ5 * 0.4).toFixed(2);
  const racao$1021$19$21 = (pesoQ5 * 0.6).toFixed(2);
  const racao$1021$22$24 = (pesoQ5 * 0.8).toFixed(2);
  const racao$1021$25$28 = pesoQ5.toFixed(2);
  const racao$1021$29$30 = (pesoQ5 * 0.8).toFixed(2);
  const racao$1021$31$32 = (pesoQ5 * 0.6).toFixed(2);

  const racao$1021$15$18$04 = ((pesoQ5 * 0.4) / 4).toFixed(2);
  const racao$1021$19$21$04 = ((pesoQ5 * 0.6) / 4).toFixed(2);
  const racao$1021$22$24$04 = ((pesoQ5 * 0.8) / 4).toFixed(2);
  const racao$1021$25$28$04 = (pesoQ5 / 4).toFixed(2);
  const racao$1021$29$30$04 = ((pesoQ5 * 0.8) / 4).toFixed(2);
  const racao$1021$31$32$04 = ((pesoQ5 * 0.6) / 4).toFixed(2);

  // Ração 132.1g a 208g (4% - 4 vezes)
  const racao$1321$15$18 = (pesoQ4 * 0.4).toFixed(2);
  const racao$1321$19$21 = (pesoQ4 * 0.6).toFixed(2);
  const racao$1321$22$24 = (pesoQ4 * 0.8).toFixed(2);
  const racao$1321$25$28 = pesoQ4.toFixed(2);
  const racao$1321$29$30 = (pesoQ4 * 0.8).toFixed(2);
  const racao$1321$31$32 = (pesoQ4 * 0.6).toFixed(2);

  const racao$1321$15$18$04 = ((pesoQ4 * 0.4) / 4).toFixed(2);
  const racao$1321$19$21$04 = ((pesoQ4 * 0.6) / 4).toFixed(2);
  const racao$1321$22$24$04 = ((pesoQ4 * 0.8) / 4).toFixed(2);
  const racao$1321$25$28$04 = (pesoQ4 / 4).toFixed(2);
  const racao$1321$29$30$04 = ((pesoQ4 * 0.8) / 4).toFixed(2);
  const racao$1321$31$32$04 = ((pesoQ4 * 0.6) / 4).toFixed(2);

  // Ração 208.1g a 253g (4% - 3 vezes)
  const racao$2081$15$18 = (pesoQ4 * 0.4).toFixed(2);
  const racao$2081$19$21 = (pesoQ4 * 0.6).toFixed(2);
  const racao$2081$22$24 = (pesoQ4 * 0.8).toFixed(2);
  const racao$2081$25$28 = pesoQ4.toFixed(2);
  const racao$2081$29$30 = (pesoQ4 * 0.8).toFixed(2);
  const racao$2081$31$32 = (pesoQ4 * 0.6).toFixed(2);

  const racao$2081$15$18$04 = ((pesoQ4 * 0.4) / 3).toFixed(2);
  const racao$2081$19$21$04 = ((pesoQ4 * 0.6) / 3).toFixed(2);
  const racao$2081$22$24$04 = ((pesoQ4 * 0.8) / 3).toFixed(2);
  const racao$2081$25$28$04 = (pesoQ4 / 3).toFixed(2);
  const racao$2081$29$30$04 = ((pesoQ4 * 0.8) / 3).toFixed(2);
  const racao$2081$31$32$04 = ((pesoQ4 * 0.6) / 3).toFixed(2);

  // Ração 253.1g a 580g (3% - 3 vezes)
  const racao$2531$15$18 = (pesoQ3 * 0.4).toFixed(2);
  const racao$2531$19$21 = (pesoQ3 * 0.6).toFixed(2);
  const racao$2531$22$24 = (pesoQ3 * 0.8).toFixed(2);
  const racao$2531$25$28 = pesoQ3.toFixed(2);
  const racao$2531$29$30 = (pesoQ3 * 0.8).toFixed(2);
  const racao$2531$31$32 = (pesoQ3 * 0.6).toFixed(2);

  const racao$2531$15$18$04 = ((pesoQ3 * 0.4) / 3).toFixed(2);
  const racao$2531$19$21$04 = ((pesoQ3 * 0.6) / 3).toFixed(2);
  const racao$2531$22$24$04 = ((pesoQ3 * 0.8) / 3).toFixed(2);
  const racao$2531$25$28$04 = (pesoQ3 / 3).toFixed(2);
  const racao$2531$29$30$04 = ((pesoQ3 * 0.8) / 3).toFixed(2);
  const racao$2531$31$32$04 = ((pesoQ3 * 0.6) / 3).toFixed(2);

  // Ração 580.1g a 1162g (2% - 3 vezes)
  const racao$5801$15$18 = (pesoQ2 * 0.4).toFixed(2);
  const racao$5801$19$21 = (pesoQ2 * 0.6).toFixed(2);
  const racao$5801$22$24 = (pesoQ2 * 0.8).toFixed(2);
  const racao$5801$25$28 = pesoQ2.toFixed(2);
  const racao$5801$29$30 = (pesoQ2 * 0.8).toFixed(2);
  const racao$5801$31$32 = (pesoQ2 * 0.6).toFixed(2);

  const racao$5801$15$18$04 = ((pesoQ2 * 0.4) / 3).toFixed(2);
  const racao$5801$19$21$04 = ((pesoQ2 * 0.6) / 3).toFixed(2);
  const racao$5801$22$24$04 = ((pesoQ2 * 0.8) / 3).toFixed(2);
  const racao$5801$25$28$04 = (pesoQ2 / 3).toFixed(2);
  const racao$5801$29$30$04 = ((pesoQ2 * 0.8) / 3).toFixed(2);
  const racao$5801$31$32$04 = ((pesoQ2 * 0.6) / 3).toFixed(2);

  if (peso$05$20) {
    if (temp$15$18) {
      res.innerText = `${racao$05$15$18} kg`;
      res2.innerText = `${vezes12} ${racao$05$15$18$12} kg`;
      res3.innerText = `${$1mm}`;
    } else if (temp$19$21) {
      res.innerText = `${racao$05$19$21} kg`;
      res2.innerText = `${vezes12} ${racao$05$19$21$12} kg`;
      res3.innerText = `${$1mm}`;
    } else if (temp$22$24) {
      res.innerText = `${racao$05$22$24} kg`;
      res2.innerText = `${vezes12} ${racao$05$22$24$12} kg`;
      res3.innerText = `${$1mm}`;
    } else if (temp$25$28) {
      res.innerText = `${racao$05$25$28} kg`;
      res2.innerText = `${vezes12} ${racao$05$25$28$12} kg`;
      res3.innerText = `${$1mm}`;
    } else if (temp$29$30) {
      res.innerText = `${racao$05$29$30} kg`;
      res2.innerText = `${vezes12} ${racao$05$29$30$12} kg`;
      res3.innerText = `${$1mm}`;
    } else if (temp$31$32) {
      res.innerText = `${racao$05$31$32} kg`;
      res2.innerText = `${vezes12} ${racao$05$31$32$12} kg`;
      res3.innerText = `${$1mm}`;
    } else {
      res.innerText = 'Por favor, colocar a temperatura entre 15 a 32 graus.';
      res2.innerText = '';
      res3.innerText = '';
    }
  } else if (peso$21$55) {
    if (temp$15$18) {
      res.innerText = `${racao$21$15$18} kg`;
      res2.innerText = `${vezes10} ${racao$21$15$18$10} kg`;
      res3.innerText = `${$1mm}`;
    } else if (temp$19$21) {
      res.innerText = `${racao$21$19$21} kg`;
      res2.innerText = `${vezes10} ${racao$21$19$21$10} kg`;
      res3.innerText = `${$1mm}`;
    } else if (temp$22$24) {
      res.innerText = `${racao$21$22$24} kg`;
      res2.innerText = `${vezes10} ${racao$21$22$24$10} kg`;
      res3.innerText = `${$1mm}`;
    } else if (temp$25$28) {
      res.innerText = `${racao$21$25$28} kg`;
      res2.innerText = `${vezes10} ${racao$21$25$28$10} kg`;
      res3.innerText = `${$1mm}`;
    } else if (temp$29$30) {
      res.innerText = `${racao$21$29$30} kg`;
      res2.innerText = `${vezes10} ${racao$21$29$30$10} kg`;
      res3.innerText = `${$1mm}`;
    } else if (temp$31$32) {
      res.innerText = `${racao$21$31$32} kg`;
      res2.innerText = `${vezes10} ${racao$21$31$32$10} kg`;
      res3.innerText = `${$1mm}`;
    } else {
      res.innerText = 'Por favor, colocar a temperatura entre 15 a 32 graus.';
      res2.innerText = '';
      res3.innerText = '';
    }
  } else if (peso$56$11) {
    if (temp$15$18) {
      res.innerText = `${racao$56$15$18} kg`;
      res2.innerText = `${vezes9} ${racao$56$15$18$09} kg`;
      res3.innerText = `${$17mm}`;
    } else if (temp$19$21) {
      res.innerText = `${racao$56$19$21} kg`;
      res2.innerText = `${vezes9} ${racao$56$19$21$09} kg`;
      res3.innerText = `${$17mm}`;
    } else if (temp$22$24) {
      res.innerText = `${racao$56$22$24} kg`;
      res2.innerText = `${vezes9} ${racao$56$22$24$09} kg`;
      res3.innerText = `${$17mm}`;
    } else if (temp$25$28) {
      res.innerText = `${racao$56$25$28} kg`;
      res2.innerText = `${vezes9} ${racao$56$25$28$09} kg`;
      res3.innerText = `${$17mm}`;
    } else if (temp$29$30) {
      res.innerText = `${racao$56$29$30} kg`;
      res2.innerText = `${vezes9} ${racao$56$29$30$09} kg`;
      res3.innerText = `${$17mm}`;
    } else if (temp$31$32) {
      res.innerText = `${racao$56$31$32} kg`;
      res2.innerText = `${vezes9} ${racao$56$31$32$09} kg`;
      res3.innerText = `${$17mm}`;
    } else {
      res.innerText = 'Por favor, colocar a temperatura entre 15 a 32 graus.';
      res2.innerText = '';
      res3.innerText = '';
    }
  } else if (peso$111$18) {
    if (temp$15$18) {
      res.innerText = `${racao$111$15$18} kg`;
      res2.innerText = `${vezes9} ${racao$111$15$18$09} kg`;
      res3.innerText = `${$17mm}`;
    } else if (temp$19$21) {
      res.innerText = `${racao$111$19$21} kg`;
      res2.innerText = `${vezes9} ${racao$111$19$21$09} kg`;
      res3.innerText = `${$17mm}`;
    } else if (temp$22$24) {
      res.innerText = `${racao$111$22$24} kg`;
      res2.innerText = `${vezes9} ${racao$111$22$24$09} kg`;
      res3.innerText = `${$17mm}`;
    } else if (temp$25$28) {
      res.innerText = `${racao$111$25$28} kg`;
      res2.innerText = `${vezes9} ${racao$111$25$28$09} kg`;
      res3.innerText = `${$17mm}`;
    } else if (temp$29$30) {
      res.innerText = `${racao$111$29$30} kg`;
      res2.innerText = `${vezes9} ${racao$111$29$30$09} kg`;
      res3.innerText = `${$17mm}`;
    } else if (temp$31$32) {
      res.innerText = `${racao$111$31$32} kg`;
      res2.innerText = `${vezes9} ${racao$111$31$32$09} kg`;
      res3.innerText = `${$17mm}`;
    } else {
      res.innerText = 'Por favor, colocar a temperatura entre 15 a 32 graus.';
      res2.innerText = '';
      res3.innerText = '';
    }
  } else if (peso$181$27) {
    if (temp$15$18) {
      res.innerText = `${racao$181$15$18} kg`;
      res2.innerText = `${vezes8} ${racao$181$15$18$08} kg`;
      res3.innerText = `${$253mm}`;
    } else if (temp$19$21) {
      res.innerText = `${racao$181$19$21} kg`;
      res2.innerText = `${vezes8} ${racao$181$19$21$08} kg`;
      res3.innerText = `${$253mm}`;
    } else if (temp$22$24) {
      res.innerText = `${racao$181$22$24} kg`;
      res2.innerText = `${vezes8} ${racao$181$22$24$08} kg`;
      res3.innerText = `${$253mm}`;
    } else if (temp$25$28) {
      res.innerText = `${racao$181$25$28} kg`;
      res2.innerText = `${vezes8} ${racao$181$25$28$08} kg`;
      res3.innerText = `${$253mm}`;
    } else if (temp$29$30) {
      res.innerText = `${racao$181$29$30} kg`;
      res2.innerText = `${vezes8} ${racao$181$29$30$08} kg`;
      res3.innerText = `${$253mm}`;
    } else if (temp$31$32) {
      res.innerText = `${racao$181$31$32} kg`;
      res2.innerText = `${vezes8} ${racao$181$31$32$08} kg`;
      res3.innerText = `${$253mm}`;
    } else {
      res.innerText = 'Por favor, colocar a temperatura entre 15 a 32 graus.';
      res2.innerText = '';
      res3.innerText = '';
    }
  } else if (peso$271$39) {
    if (temp$15$18) {
      res.innerText = `${racao$271$15$18} kg`;
      res2.innerText = `${vezes7} ${racao$271$15$18$07} kg`;
      res3.innerText = `${$253mm}`;
    } else if (temp$19$21) {
      res.innerText = `${racao$271$19$21} kg`;
      res2.innerText = `${vezes7} ${racao$271$19$21$07} kg`;
      res3.innerText = `${$253mm}`;
    } else if (temp$22$24) {
      res.innerText = `${racao$271$22$24} kg`;
      res2.innerText = `${vezes7} ${racao$271$22$24$07} kg`;
      res3.innerText = `${$253mm}`;
    } else if (temp$25$28) {
      res.innerText = `${racao$271$25$28} kg`;
      res2.innerText = `${vezes7} ${racao$271$25$28$07} kg`;
      res3.innerText = `${$253mm}`;
    } else if (temp$29$30) {
      res.innerText = `${racao$271$29$30} kg`;
      res2.innerText = `${vezes7} ${racao$271$29$30$07} kg`;
      res3.innerText = `${$253mm}`;
    } else if (temp$31$32) {
      res.innerText = `${racao$271$31$32} kg`;
      res2.innerText = `${vezes7} ${racao$271$31$32$07} kg`;
      res3.innerText = `${$253mm}`;
    } else {
      res.innerText = 'Por favor, colocar a temperatura entre 15 a 32 graus.';
      res2.innerText = '';
      res3.innerText = '';
    }
  } else if (peso$391$55) {
    if (temp$15$18) {
      res.innerText = `${racao$391$15$18} kg`;
      res2.innerText = `${vezes6} ${racao$391$15$18$06} kg`;
      res3.innerText = `${$253mm}`;
    } else if (temp$19$21) {
      res.innerText = `${racao$391$19$21} kg`;
      res2.innerText = `${vezes6} ${racao$391$19$21$06} kg`;
      res3.innerText = `${$253mm}`;
    } else if (temp$22$24) {
      res.innerText = `${racao$391$22$24} kg`;
      res2.innerText = `${vezes6} ${racao$391$22$24$06} kg`;
      res3.innerText = `${$253mm}`;
    } else if (temp$25$28) {
      res.innerText = `${racao$391$25$28} kg`;
      res2.innerText = `${vezes6} ${racao$391$25$28$06} kg`;
      res3.innerText = `${$253mm}`;
    } else if (temp$29$30) {
      res.innerText = `${racao$391$29$30} kg`;
      res2.innerText = `${vezes6} ${racao$391$29$30$06} kg`;
      res3.innerText = `${$253mm}`;
    } else if (temp$31$32) {
      res.innerText = `${racao$391$31$32} kg`;
      res2.innerText = `${vezes6} ${racao$391$31$32$06} kg`;
      res3.innerText = `${$253mm}`;
    } else {
      res.innerText = 'Por favor, colocar a temperatura entre 15 a 32 graus.';
      res2.innerText = '';
      res3.innerText = '';
    }
  } else if (peso$551$75 || peso$751$102) {
    if (temp$15$18) {
      res.innerText = `${racao$551$15$18} kg`;
      res2.innerText = `${vezes5} ${racao$551$15$18$05} kg`;
      res3.innerText = `${$34mm}`;
    } else if (temp$19$21) {
      res.innerText = `${racao$551$19$21} kg`;
      res2.innerText = `${vezes5} ${racao$551$19$21$05} kg`;
      res3.innerText = `${$34mm}`;
    } else if (temp$22$24) {
      res.innerText = `${racao$551$22$24} kg`;
      res2.innerText = `${vezes5} ${racao$551$22$24$05} kg`;
      res3.innerText = `${$34mm}`;
    } else if (temp$25$28) {
      res.innerText = `${racao$551$25$28} kg`;
      res2.innerText = `${vezes5} ${racao$551$25$28$05} kg`;
      res3.innerText = `${$34mm}`;
    } else if (temp$29$30) {
      res.innerText = `${racao$551$29$30} kg`;
      res2.innerText = `${vezes5} ${racao$551$29$30$05} kg`;
      res3.innerText = `${$34mm}`;
    } else if (temp$31$32) {
      res.innerText = `${racao$551$31$32} kg`;
      res2.innerText = `${vezes5} ${racao$551$31$32$05} kg`;
      res3.innerText = `${$34mm}`;
    } else {
      res.innerText = 'Por favor, colocar a temperatura entre 15 a 32 graus.';
      res2.innerText = '';
      res3.innerText = '';
    }
  } else if (peso$1021$132) {
    if (temp$15$18) {
      res.innerText = `${racao$1021$15$18} kg`;
      res2.innerText = `${vezes4} ${racao$1021$15$18$04} kg`;
      res3.innerText = `${$56mm}`;
    } else if (temp$19$21) {
      res.innerText = `${racao$1021$19$21} kg`;
      res2.innerText = `${vezes4} ${racao$1021$19$21$04} kg`;
      res3.innerText = `${$56mm}`;
    } else if (temp$22$24) {
      res.innerText = `${racao$1021$22$24} kg`;
      res2.innerText = `${vezes4} ${racao$1021$22$24$04} kg`;
      res3.innerText = `${$56mm}`;
    } else if (temp$25$28) {
      res.innerText = `${racao$1021$25$28} kg`;
      res2.innerText = `${vezes4} ${racao$1021$25$28$04} kg`;
      res3.innerText = `${$56mm}`;
    } else if (temp$29$30) {
      res.innerText = `${racao$1021$29$30} kg`;
      res2.innerText = `${vezes4} ${racao$1021$29$30$04} kg`;
      res3.innerText = `${$56mm}`;
    } else if (temp$31$32) {
      res.innerText = `${racao$1021$31$32} kg`;
      res2.innerText = `${vezes4} ${racao$1021$31$32$04} kg`;
      res3.innerText = `${$56mm}`;
    } else {
      res.innerText = 'Por favor, colocar a temperatura entre 15 a 32 graus.';
      res2.innerText = '';
      res3.innerText = '';
    }
  } else if (peso$1321$168 || peso$1321$168 || peso$1681$208) {
    if (temp$15$18) {
      res.innerText = `${racao$1321$15$18} kg`;
      res2.innerText = `${vezes4} ${racao$1321$15$18$04} kg`;
      res3.innerText = `${$56mm}`;
    } else if (temp$19$21) {
      res.innerText = `${racao$1321$19$21} kg`;
      res2.innerText = `${vezes4} ${racao$1321$19$21$04} kg`;
      res3.innerText = `${$56mm}`;
    } else if (temp$22$24) {
      res.innerText = `${racao$1321$22$24} kg`;
      res2.innerText = `${vezes4} ${racao$1321$22$24$04} kg`;
      res3.innerText = `${$56mm}`;
    } else if (temp$25$28) {
      res.innerText = `${racao$1321$25$28} kg`;
      res2.innerText = `${vezes4} ${racao$1321$25$28$04} kg`;
      res3.innerText = `${$56mm}`;
    } else if (temp$29$30) {
      res.innerText = `${racao$1321$29$30} kg`;
      res2.innerText = `${vezes4} ${racao$1321$29$30$04} kg`;
      res3.innerText = `${$56mm}`;
    } else if (temp$31$32) {
      res.innerText = `${racao$1321$31$32} kg`;
      res2.innerText = `${vezes4} ${racao$1321$31$32$04} kg`;
      res3.innerText = `${$56mm}`;
    } else {
      res.innerText = 'Por favor, colocar a temperatura entre 15 a 32 graus.';
      res2.innerText = '';
      res3.innerText = '';
    }
  } else if (peso$2081$253) {
    if (temp$15$18) {
      res.innerText = `${racao$2081$15$18} kg`;
      res2.innerText = `${vezes3} ${racao$2081$15$18$04} kg`;
      res3.innerText = `${$56mm}`;
    } else if (temp$19$21) {
      res.innerText = `${racao$2081$19$21} kg`;
      res2.innerText = `${vezes3} ${racao$2081$19$21$04} kg`;
      res3.innerText = `${$56mm}`;
    } else if (temp$22$24) {
      res.innerText = `${racao$2081$22$24} kg`;
      res2.innerText = `${vezes3} ${racao$2081$22$24$04} kg`;
      res3.innerText = `${$56mm}`;
    } else if (temp$25$28) {
      res.innerText = `${racao$2081$25$28} kg`;
      res2.innerText = `${vezes3} ${racao$2081$25$28$04} kg`;
      res3.innerText = `${$56mm}`;
    } else if (temp$29$30) {
      res.innerText = `${racao$2081$29$30} kg`;
      res2.innerText = `${vezes3} ${racao$2081$29$30$04} kg`;
      res3.innerText = `${$56mm}`;
    } else if (temp$31$32) {
      res.innerText = `${racao$2081$31$32} kg`;
      res2.innerText = `${vezes3} ${racao$2081$31$32$04} kg`;
      res3.innerText = `${$56mm}`;
    } else {
      res.innerText = 'Por favor, colocar a temperatura entre 15 a 32 graus.';
      res2.innerText = '';
      res3.innerText = '';
    }
  } else if (
    peso$2531$303 ||
    peso$3031$355 ||
    peso$3551$410 ||
    peso$4101$466 ||
    peso$4661$523 ||
    peso$5231$580
  ) {
    if (temp$15$18) {
      res.innerText = `${racao$2531$15$18} kg`;
      res2.innerText = `${vezes3} ${racao$2531$15$18$04} kg`;
      res3.innerText = `${$56mm}`;
    } else if (temp$19$21) {
      res.innerText = `${racao$2531$19$21} kg`;
      res2.innerText = `${vezes3} ${racao$2531$19$21$04} kg`;
      res3.innerText = `${$56mm}`;
    } else if (temp$22$24) {
      res.innerText = `${racao$2531$22$24} kg`;
      res2.innerText = `${vezes3} ${racao$2531$22$24$04} kg`;
      res3.innerText = `${$56mm}`;
    } else if (temp$25$28) {
      res.innerText = `${racao$2531$25$28} kg`;
      res2.innerText = `${vezes3} ${racao$2531$25$28$04} kg`;
      res3.innerText = `${$56mm}`;
    } else if (temp$29$30) {
      res.innerText = `${racao$2531$29$30} kg`;
      res2.innerText = `${vezes3} ${racao$2531$29$30$04} kg`;
      res3.innerText = `${$56mm}`;
    } else if (temp$31$32) {
      res.innerText = `${racao$2531$31$32} kg`;
      res2.innerText = `${vezes3} ${racao$2531$31$32$04} kg`;
      res3.innerText = `${$56mm}`;
    } else {
      res.innerText = 'Por favor, colocar a temperatura entre 15 a 32 graus.';
      res2.innerText = '';
      res3.innerText = '';
    }
  } else if (
    peso$5801$637 ||
    peso$6371$694 ||
    peso$6941$751 ||
    peso$7511$806 ||
    peso$8061$859 ||
    peso$8591$912 ||
    peso$9121$962 ||
    peso$9621$1012 ||
    peso$10121$1062 ||
    peso$10621$1112 ||
    peso$11121$1162
  ) {
    if (temp$15$18) {
      res.innerText = `${racao$5801$15$18} kg`;
      res2.innerText = `${vezes3} ${racao$5801$15$18$04} kg`;
      res3.innerText = `${$78mm}`;
    } else if (temp$19$21) {
      res.innerText = `${racao$5801$19$21} kg`;
      res2.innerText = `${vezes3} ${racao$5801$19$21$04} kg`;
      res3.innerText = `${$78mm}`;
    } else if (temp$22$24) {
      res.innerText = `${racao$5801$22$24} kg`;
      res2.innerText = `${vezes3} ${racao$5801$22$24$04} kg`;
      res3.innerText = `${$78mm}`;
    } else if (temp$25$28) {
      res.innerText = `${racao$5801$25$28} kg`;
      res2.innerText = `${vezes3} ${racao$5801$25$28$04} kg`;
      res3.innerText = `${$78mm}`;
    } else if (temp$29$30) {
      res.innerText = `${racao$5801$29$30} kg`;
      res2.innerText = `${vezes3} ${racao$5801$29$30$04} kg`;
      res3.innerText = `${$78mm}`;
    } else if (temp$31$32) {
      res.innerText = `${racao$5801$31$32} kg`;
      res2.innerText = `${vezes3} ${racao$5801$31$32$04} kg`;
      res3.innerText = `${$78mm}`;
    } else {
      res.innerText = 'Por favor, colocar a temperatura entre 15 a 32 graus.';
      res2.innerText = '';
      res3.innerText = '';
    }
  } else {
    res.innerText = 'Por favor, inserir um peso entre 0.5g e 1162g';
    res2.innerText = '';
    res3.innerText = '';
  }
}

btnCalculate.addEventListener('touchstart', calculate);
btnCalculate.addEventListener('click', calculate);
