const { faker } = require('@faker-js/faker');

var database = {
  products: []
};

for (var i = 1; i <= 300; i++) {

  database.products.push(
    {
      id: i,
      name: faker.commerce.productName(),
      description: faker.lorem.sentences(),
      price: faker.commerce.price(),
      imageUrl: 'https://picsum.photos/id/' + i + '/500',
      quantity: faker.datatype.number()
    }
  );

}

console.log(JSON.stringify(database));
