#### [3. Inventario](inventory)

Dado un arreglo de objetos como parámetro de una función, conteniendo la
categoría y precio del producto, retornar el precio total de una categoría
indicada.

> **Hint:** Usar los métodos [`.filter()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
y [`.reduce()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
para lograr el resultado.


const inventory = [
  { name: "Inka Cola", category: "beverage", stock: "10" },
  { name: "Cusqueña", category: "beverage", stock: "15" },
  { name: "Pisco", category: "beverage", stock: "20" },
  { name: "Lúcuma", category: "fruit", stock: "30" },
  { name: "Aguaymanto", category: "fruit", stock: "5" },
  { name: "Tequila", category: "beverage", stock: "50" },
  { name: "Mezcal", category: "beverage", stock: "25" },
  { name: "Aguacate", category: "fruit", stock: "100" },
  { name: "Chayote", category: "fruit", stock: "5" },
  { name: "Cuitlacoche", category: "fungus", stock: "10" },
  { name: "Arándonos", category: "fruit", stock: "19" },
  { name: "Ciruela", category: "fruit", stock: "8" }
];

'categoría existente - debe retornar el total del precio'

ejemplo para : 

totalByCategory(inventory, "beverage");

debe mostrar en cosola: 120

'categoría que no existe - debe retornar 0', 