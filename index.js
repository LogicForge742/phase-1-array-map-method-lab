const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
const exceptions = {
  'api': 'API',
  'oo': 'OO',
  'nan': 'NaN',
  'jsonp': 'JSONP',
  'stoppropagation': 'StopPropagation',
  'preventdefault': 'PreventDefault',
  'constructor': 'Constructor'
};

const titleCased = () => {
  return tutorials.map(tutorial => {
    return tutorial
      .split(' ')
      .map(word => {
        // Separate trailing punctuation from the word
        const match = word.match(/^([a-zA-Z]+)([^a-zA-Z]*)$/);
        if (!match) return word; // If no match, return word as is

        const [ , coreWord, punctuation ] = match;
        const lowerWord = coreWord.toLowerCase();

        if (exceptions[lowerWord]) {
          return exceptions[lowerWord] + punctuation;
        }

        return coreWord.charAt(0).toUpperCase() + coreWord.slice(1).toLowerCase() + punctuation;
      })
      .join(' ');
  });
};


