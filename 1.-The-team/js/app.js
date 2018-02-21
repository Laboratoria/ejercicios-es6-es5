         
         
         // ES5

// declaracion de las variables

var [teamName, product] = [
  'formacion', ['Amalia', 'Karla', 'Silvana', 'Manu', 'Jonh', 'Mike'],
];

var formatTeamMessage = function (teamName, people) {
  var message = 'Hay ' + people.length + " " + 'personas en el equipo de' + " " + teamName + "\n" + "Ellos son" + " " + people.join(", ") + ".";
  console.log(message)
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
