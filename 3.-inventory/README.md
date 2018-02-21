#### [3. Inventario](inventory)

Dado un arreglo de objetos como parámetro de una función, conteniendo la
categoría y precio del producto, retornar el precio total de una categoría
indicada.

**Ya te damos la solución; solo tienes que pasarlo de ES5 a ES6**

> **Hint:** Usar los métodos [`.filter()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
> y [`.reduce()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
> para lograr el resultado.

```
totalByCategory(inventory, "beverage");

debe mostrar en cosola: 120
```

```
totalByCategory(inventory, "no-existe");

debe mostrar en cosola: 0
```
