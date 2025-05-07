import { celsiusToFahrenheit } from '../services/soapClient.js';

export async function convertirTemperatura(req, res) {
  const valor = req.query.valor;

  if (valor === undefined || valor === '' || isNaN(valor) || typeof valor !== 'string' || isNaN(Number(valor))) {
    return res.status(400).json({ message: 'Debe proporcionar un valor numérico en °C como número, no texto' });
  }

  const valorNumerico = Number(valor);

  try {
    const fahrenheit = await celsiusToFahrenheit(valorNumerico);
    res.json({
      celsius: valorNumerico,
      fahrenheit: parseFloat(fahrenheit)
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
