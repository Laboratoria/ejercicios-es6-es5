// ES5

// declaracion de las variables

var [teamName, product] = [
  "formacion",
  ["Amalia", "Karla", "Silvana", "Manu", "Jonh", "Mike"]
];

// no entendí muy bien que hace  var [teamName, product]
// te sugeriria estructurar tu data de otra forma
// algo asi:
var teachersTeam = {
  members: [
    { name: "Amalia" },
    { name: "Karla" },
    { name: "Silvana" },
    { name: "Manu" },
    { name: "John" },
    { name: "Mike" }
  ]
};

// teniendo la data organizada asi, podemos escalar la data mas facil
// por ej. si queremos que cada profe tenga algo mas que el nombre
// podriamos escribir { name: "Mike", edad:25 }
// si decides este aproach, cambiaria un poco la forma en como accedemos a los archivos

var formatTeamMessa;
ge = function(teamName, people) {
  var message =
    "Hay " +
    people.length +
    " " +
    "personas en el equipo de" +
    " " +
    teamName +
    "\n" +
    "Ellos son" +
    " " +
    people.join(", ") +
    ".";
  console.log(message);
  return message;
};

formatTeamMessage(teamName, product);

// Ahora comenta todo el código anterior y escribelo en ES6

//  ES6
// declaracion de las variables

// const [teamName, product] = [
//   'formacion', ['Amalia', 'Karla', 'Silvana', 'Manu', 'Jonh', 'Mike'],
// ];

// const formatTeamMessage = (teamName, people) => {
//   // escribe tu código en ES6 aqui...
// }

// formatTeamMessage(teamName, product);
