const cloudinary = require('cloudinary').v2;

exports.handler = async function(event, context) {
  // Configura o Cloudinary com variáveis de ambiente
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });

  try {
    // Busca imagens apenas da pasta 'finearts'
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: 'finearts/', // Filtra por esta pasta
      max_results: 100     // Limite de imagens retornadas
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        images: result.resources.map(img => ({
          public_id: img.public_id,
          url: img.secure_url,
          width: img.width,
          height: img.height
        }))
      }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*' // Importante para CORS
      }
    };
  } catch (error) {
    console.error('Erro no Cloudinary:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Erro ao buscar imagens' }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  }
};