var moonPhase = 'full';

switch (moonPhase) {
  case 'full':
    console.log('Howwwwlll!!');
    break;
  case 'mostly full':
    console.log('Arms and legs are getting hairier');
    break;
  case 'mostly new':
    console.log('Back on two feet');
    break;
  default: // we use default just like an else on if/else control flows; just when a variable's value is different than any of the ones we've introduced.
    console.log('Invalid moon phase');
    break;
}
