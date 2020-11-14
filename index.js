// const randomPhrases = Array[Math.floor(Math.random() * Array.length)];

const Phrases = [
  {
    titleQuestion: `O Artigo XXVI da Declaração contém três proposições, a saber:  `,
    questions: [
      '1. Toda pessoa tem direito à instrução. A instrução será gratuita, pelo menos nos graus elementares e fundamentais. A instrução elementar será obrigatória. A instrução técnico-profissional será acessível a todos, bem como a instrução superior, esta baseada no mérito.',
      '2. A instrução será orientada no sentido do pleno desenvolvimento da personalidade humana e do fortalecimento do respeito pelos direitos humanos e pelas liberdades fundamentais. A instrução promoverá a compreensão, a tolerância e a amizade entre todas as nações e grupos raciais ou religiosos, e coadjuvará as atividades das Nações Unidas em prol da manutenção da paz.',
      '3. Os pais têm prioridade de direito na escolha do gênero de instrução que será ministrada a seus filhos.',
      'É correto afirmar que há a presença de referenciadores anafóricos',
    ],
    response: [
      '[A] nas proposições 1, 2 e 3.',
      '[B] nas duas primeiras proposições.',
      '[C] nas duas últimas proposições.',
      '[D] nas proposições 1 e 3.',
      '[E] apenas numa das proposições.',
    ],
    CorrectResponse: '[QUESTION:] => [A] " nas proposições 1, 2 e 3."',
  },
  {
    titleQuestion: `A obra “A Hora da Estrela” é de autoria de:`,
    questions: [''],
    response: [
      '[A] Jorge Amado.',
      '[B] Clarice Lispector.',
      '[C] Oswald de Andrade.',
      '[D] Álvares de Azevedo.',
    ],
    CorrectResponse: '[QUESTION:] => [A] "Jorge Amado."',
  },

  { question: 'Teste 2', response: 'Response Teste 2' },
  // { question: 'Teste 3', response: 'Response Teste 3' },
  // { question: 'Teste 4', response: 'Response Teste 4' },
  // { question: 'Teste 5', response: 'Response Teste 5' },
  // { question: 'Teste 6', response: 'Response Teste 7' },
];
const randomMonth = Phrases[Math.floor(Math.random() * Phrases.length)];

console.log('RESPONDA A QUESTÃO =>', randomMonth);
