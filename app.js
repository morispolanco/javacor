const openai = require('openai');

const apiKey = 'TU_CLAVE_DE_API';
const openaiInstance = new openai(apiKey);

async function correctText(prompt) {
  try {
    const options = {
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 100,
    };

    const response = await openaiInstance.complete(options);
    const correctedText = response.choices[0].text;

    return correctedText;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Ejemplo de uso
const inputText = 'Texto de ejemplo para corregir';

correctText(inputText)
  .then(correctedText => {
    console.log(correctedText);
  })
  .catch(error => {
    console.error(error);
  });
