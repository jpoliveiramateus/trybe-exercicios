type Slices =  4 | 6 | 8;

interface Pizza {
  flavor: string,
  slices: Slices

}

type flavorComum = 'Calabresa' | 'Frango' | 'Pepperoni';

interface PizzaComum extends Pizza {
  flavor: flavorComum,
}

type flavorVegetariana = 'Marguerita' | 'Palmito' | 'Cogumelo';

interface PizzaVegetariana extends Pizza {
  flavor: flavorVegetariana,
}

type flavorDoce = 'Nutela' | 'Goiabada com Queijo' | 'Marshmallow';

interface PizzaDoce extends Pizza {
  flavor: flavorDoce,
  slices: 4
}

export {
  Pizza,
  PizzaComum,
  PizzaVegetariana,
  PizzaDoce,
};