const ph1 = document.getElementById('ph1');
const ph2 = document.getElementById('ph2');
const metrosCubicos = document.getElementById('metros-cubicos');
const btnCalculate = document.getElementById('btn-calculate');
const res = document.getElementById('res');
const cal = 0.01445;

function calculate(event) {
  event.preventDefault();
  if (event.target === 'touchstart') {
    event.preventDefault();
  }

  // Conversão de string para número.
  const phAtual = +Number(ph1.value).toFixed(1);
  const phDesejado = +Number(ph2.value).toFixed(1);
  const metroCubicos = +Number(metrosCubicos.value).toFixed(1);

  // Diferença entre o phAtual e o phDesejado.
  const phDiferenca01 =
    (phDesejado.toFixed(1) - phAtual.toFixed(1)).toFixed(1) === '0.1';
  const phDiferenca02 =
    (phDesejado.toFixed(1) - phAtual.toFixed(1)).toFixed(1) === '0.2';
  const phDiferenca03 =
    (phDesejado.toFixed(1) - phAtual.toFixed(1)).toFixed(1) === '0.3';
  const phDiferenca04 =
    (phDesejado.toFixed(1) - phAtual.toFixed(1)).toFixed(1) === '0.4';
  const phDiferenca05 =
    (phDesejado.toFixed(1) - phAtual.toFixed(1)).toFixed(1) === '0.5';
  const phDiferenca06 =
    (phDesejado.toFixed(1) - phAtual.toFixed(1)).toFixed(1) === '0.6';
  const phDiferenca07 =
    (phDesejado.toFixed(1) - phAtual.toFixed(1)).toFixed(1) === '0.7';
  const phDiferenca08 =
    (phDesejado.toFixed(1) - phAtual.toFixed(1)).toFixed(1) === '0.8';
  const phDiferenca09 =
    (phDesejado.toFixed(1) - phAtual.toFixed(1)).toFixed(1) === '0.9';
  const phDiferenca10 =
    (phDesejado.toFixed(1) - phAtual.toFixed(1)).toFixed(1) === '1.0';
  const phDiferenca11 =
    (phDesejado.toFixed(1) - phAtual.toFixed(1)).toFixed(1) === '1.1';
  const phDiferenca12 =
    (phDesejado.toFixed(1) - phAtual.toFixed(1)).toFixed(1) === '1.2';
  const phDiferenca13 =
    (phDesejado.toFixed(1) - phAtual.toFixed(1)).toFixed(1) === '1.3';

  // Quantidade de cal
  const calTotal = (cal * metroCubicos).toFixed(2);
  const calTotal2 = ((cal * metroCubicos) * 2).toFixed(2);
  const calTotal3 = ((cal * metroCubicos) * 3).toFixed(2);
  const calTotal4 = ((cal * metroCubicos) * 4).toFixed(2);
  const calTotal5 = ((cal * metroCubicos) * 5).toFixed(2);
  const calTotal6 = ((cal * metroCubicos) * 6).toFixed(2);
  const calTotal7 = ((cal * metroCubicos) * 7).toFixed(2);
  const calTotal8 = ((cal * metroCubicos) * 8).toFixed(2);
  const calTotal9 = ((cal * metroCubicos) * 9).toFixed(2);
  const calTotal10 = ((cal * metroCubicos) * 10).toFixed(2);
  const calTotal11 = ((cal * metroCubicos) * 11).toFixed(2);
  const calTotal12 = ((cal * metroCubicos) * 12).toFixed(2);
  const calTotal13 = ((cal * metroCubicos) * 13).toFixed(2);

  if (phAtual >= 6.2 && phDesejado <= 7.5) {
    if (phDiferenca01) {
      res.innerHTML = `${calTotal} Kg de cal`;
    } else if (phDiferenca02) {
      res.innerHTML = `${calTotal2} Kg de cal`;
    } else if (phDiferenca03) {
      res.innerHTML = `${calTotal3} Kg de cal`;
    } else if (phDiferenca04) {
      res.innerHTML = `${calTotal4} Kg de cal`;
    } else if (phDiferenca05) {
      res.innerHTML = `${calTotal5} Kg de cal`;
    } else if (phDiferenca06) {
      res.innerHTML = `${calTotal6} Kg de cal`;
    } else if (phDiferenca07) {
      res.innerHTML = `${calTotal7} Kg de cal`;
    } else if (phDiferenca08) {
      res.innerHTML = `${calTotal8} Kg de cal`;
    } else if (phDiferenca09) {
      res.innerHTML = `${calTotal9} Kg de cal`;
    } else if (phDiferenca10) {
      res.innerHTML = `${calTotal10} Kg de cal`;
    } else if (phDiferenca11) {
      res.innerHTML = `${calTotal11} Kg de cal`;
    } else if (phDiferenca12) {
      res.innerHTML = `${calTotal12} Kg de cal`;
    } else if (phDiferenca13) {
      res.innerHTML = `${calTotal13} Kg de cal`;
    } else if (phAtual > phDesejado) {
      res.innerHTML =
        'Por favor, colocar os valores do pH corretamente, o valor atual está maior que o valor desejado.';
    }
  } else {
    res.innerHTML = 'Por favor, colocar os valores do pH entre 6.2 a 7.5.';
  }
}

btnCalculate.addEventListener('touchstart', calculate);
btnCalculate.addEventListener('click', calculate);
