const ola = [
  { 
    type: 'titleSecondary',
    id: 1,
    content: {
      text: 'Super texto FODA',
      color: '#23238E',
      fontFamily: "'Poppins', sans-serif",
      fontSize: '12px',
    }
  },
  {
    type: 'text',
    id: 1,
    content: {
      textFormat: {
        color: '#5C3317',
        fontFamily: "'Poppins', sans-serif",
        fontSize: '15px',
      },
      text: [
        'o link esta bem aqui: ',
        '; olha esse texto colorido: ',
        ';e tem esses dois outros links aqui: ',
        ' , ',
        ". Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, 'and what is the use of a book,' thought Alice 'without pictures or conversations"
      ],
      link: [
        { position: 0, url: 'https://github.com/Clayton1805', linkText: 'gitHub' },
        { position: 2, url: 'https://www.linkedin.com/in/claytonmiguel', linkText: 'linkedin', color: '#eb0e0e' },
        { position: 3, url: 'https://www.youtube.com' },
      ],
      span: [
        {
          position: 1,
          spanText: 'super colorido',
          color: '#21a809',
          fontWeight: 'bold'
        }
      ]
    },
  }
]

module.exports = ola;