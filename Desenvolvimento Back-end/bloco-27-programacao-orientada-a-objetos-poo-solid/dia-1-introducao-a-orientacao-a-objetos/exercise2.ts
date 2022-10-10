class Client {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    if (newName.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }

    this._name = newName;
  }
}

class OrderItem {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }

  set name(newName: string) {
    if (newName.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }

    this._name = newName;
  }

  set price(newPrice: number) {
    if (newPrice < 0) {
      throw new Error('O novo preço deve conter um valor válido.');
    }

    this._price = newPrice;
  }
}

class Order {
  private _client: Client;
  private _consumedItems: OrderItem[];
  private _paymentMethod: string;
  private _discount: number | 0;

  constructor(client: Client, consumedItems: OrderItem[], paymentMethod: string, discount: number) {
    this._client = client;
    this._consumedItems = consumedItems;
    this._paymentMethod = paymentMethod;
    this._discount = discount;
  }

  get client(): Client {
    return this._client;
  }

  set client(newClient: Client) {
    this._client = newClient;
  }

  get items(): OrderItem[] {
    return this._consumedItems;
  }

  set items(newConsumedItems: OrderItem[]) {
    if (newConsumedItems.length === 0) {
      throw new Error('O pedido deve ter pelo meno um item.');
    }

    this._consumedItems = newConsumedItems;
  }

  get paymentMethod(): string {
    return this._paymentMethod;
  }

  set paymentMethod(newPaymentMethod: string) {
    this._paymentMethod = newPaymentMethod;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(newDiscount: number) {
    if (newDiscount < 0) {
      throw new Error('O desconto não pode ser um valor negativo.');
    }

    this._discount = newDiscount;
  }

  public calculateTotal(): number {
    const total = this._consumedItems.reduce((total, item) => total += item.price, 0);
    return total;
  }

  public calculateTotalWithDiscount(): number {
    const total = this._consumedItems.reduce((total, item) => total += item.price, 0);
    const discount =  total * (this._discount * 100) / 100
    return total - discount;
  }
}

const client = new Client('João');
client.name = 'Joaquim';
console.log(client.name);

const sandwich = new OrderItem('Sanduíche Natural', 5.00);
const juice = new OrderItem('Suco de Abacaxi', 5.00);
const dessert = new OrderItem('Gelatina de Uva', 2.50);

const order = new Order(client, [sandwich, juice, dessert], 'dinheiro', 0.10);

console.log(order);
console.log('Valor normal: ', order.calculateTotal());
console.log('Valor com desconto: ', order.calculateTotalWithDiscount());