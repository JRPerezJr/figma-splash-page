const { body } = document;

const changeBackground = (number) => {
  // Check if bckground already showing
  let previousBackground;
  if (body.className) {
    previousBackground = body.className;
  }
  // Reset CSS class for body
  body.className = '';
  switch (number) {
    case '1':
      return previousBackground === 'background-1'
        ? false
        : body.classList.add('background-1');
    case '2':
      return previousBackground === 'background-2'
        ? false
        : body.classList.add('background-2');
    case '3':
      return previousBackground === 'background-3'
        ? false
        : body.classList.add('background-3');
    case '4':
      return previousBackground === 'background-4'
        ? false
        : body.classList.add('background-4');
    case '5':
      return previousBackground === 'background-5'
        ? false
        : body.classList.add('background-5');
    case '6':
      return previousBackground === 'background-6'
        ? false
        : body.classList.add('background-6');
    case '7':
      return previousBackground === 'background-7'
        ? false
        : body.classList.add('background-7');
    case '8':
      return previousBackground === 'background-8'
        ? false
        : body.classList.add('background-8');

    default:
      break;
  }
};
