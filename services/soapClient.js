import soap from 'soap';

const WSDL_URL = 'https://www.w3schools.com/xml/tempconvert.asmx?WSDL';

export async function celsiusToFahrenheit(celsius) {
  try {
    const client = await soap.createClientAsync(WSDL_URL);
    const [result] = await client.CelsiusToFahrenheitAsync({ Celsius: celsius });
    return result.CelsiusToFahrenheitResult;
  } catch (error) {
    console.error('Error al consumir SOAP:', error);
    throw new Error('Error al convertir temperatura');
  }
}
