// const people = [
//     {
//         name:'Laptop',
//         age :"17"
//     },{
//         name:'Phone',
//         age:'18'
//     }
// ]

const product = people.filter(person=> person.age >=18);

const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 }
  ];


  const increaseFactor = 1 + 10 / 100;
  const updatedProducts = products.map(p => ({
     ...p, price: p.price * increaseFactor
     }));
  console.log(updatedProducts);

