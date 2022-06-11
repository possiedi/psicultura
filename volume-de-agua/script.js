const horas = document.getElementById('horas');
const milimetros = document.getElementById('milimetros');
const metrosQuadrados = document.getElementById('metros-quadrados');
const btnCalculate = document.getElementById('btn-calculate');
const res = document.getElementById('res');

function calculate(event) {
  event.preventDefault();
  if (event.target === 'touchstart') {
    event.preventDefault();
  }

  // Conversão para número.
  const numHoras = +horas.value;
  const numMilimetros = +milimetros.value;
  const numMetrosQuadrados = +metrosQuadrados.value;

  // Tempo.
  const minutos = numHoras * 60;
  const segundos = minutos * 60;

  // Litros.
  const litrosTotais = (numMilimetros * numMetrosQuadrados).toFixed(2);
  const metrosCubicos = (litrosTotais / 1000).toFixed(2);
  const litrosPorHora = (litrosTotais / numHoras).toFixed(2);
  const litrosPorMinuto = (litrosTotais / minutos).toFixed(2);
  const litrosPorSegundo = (litrosTotais / segundos).toFixed(2);

  res.innerHTML = `Litros totais: ${litrosTotais} litros / ${metrosCubicos} m³<br>Litros por hora: ${litrosPorHora} litros<br>Litros por minuto: ${litrosPorMinuto} litros<br>Litros por segundo: ${litrosPorSegundo} litros`;
}

btnCalculate.addEventListener('touchstart', calculate);
btnCalculate.addEventListener('click', calculate);
