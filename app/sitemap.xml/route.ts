export async function GET() {
  const sitemap = [
    {
      url: 'https://unasistentesv.com/',
      lastModified: new Date(),
    },
    {
      url: 'https://unasistentesv.com/#quienes',
      lastModified: new Date(),
    },
    {
      url: 'https://unasistentesv.com/#servicios',
      lastModified: new Date(),
    },
    {
      url: 'https://unasistentesv.com/#formulario-consulta',
      lastModified: new Date(),
    },
    {
      url: 'https://unasistentesv.com/#redes',
      lastModified: new Date(),
    },
  ]

  return new Response(JSON.stringify(sitemap), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
