const ola = [
  { 
    type: 'titleSecondary',
    id: 1,
    content: {
      text: 'Super texto FODA',
      color: '#000000',
      fontFamily: "'Poppins', sans-serif",
      fontSize: '12px',
    }
  },
  {
    type: 'text',
    id: 1,
    content: {
      textFormat: {
        color: '#000000',
        fontFamily: "'Poppins', sans-serif",
        fontSize: '12px',
      },
      text: [
        'o link esta bem aqui: ',
        '; olha esse texto colorido: ',
        ';e tem esses dois outros links aqui: ',
        ' , ',
        ' .'
      ],
      link: [
        { position: 0, url: 'www.1', linkText: 'site 1' },
        { position: 2, url: 'www.2', linkText: 'site 2', color: '#eb0e0e' },
        { position: 3, url: 'www.acessoriosDeModa' },
      ],
      span: [
        {
          position: 1,
          spanText: 'super colorido',
          color: '#21a809',
        }
      ]
    },
  }
]

module.exports = ola;