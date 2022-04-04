const phrase =  "Tryber x aqui!";
const phraseX = (word) => phrase.replace("x", word);

//console.log(phraseX('Bebeto'));

const skills = ['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'GitHub'];

const addSkills = (phraseX) => `${phraseX} Minhas cinco principais habilidades são: ${skills.sort()}.`;

//console.log(addSkills(phraseX('João')));
