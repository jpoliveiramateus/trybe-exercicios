let players = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3, 
    },

};

console.log('A jogadora ' + players.name + ' ' + players.lastName + ' tem ' + players.age + ' anos de idade.');

players.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A jogadora ' + players.name + ' ' + players.lastName + ' foi eleita a melhor do mundo por ' + players.bestInTheWorld.length + ' vezes.');

console.log('A jogadora possui ' + players.medals.golden + ' medalhas de ouro e ' + players.medals.silver + ' medalhas de prata.');