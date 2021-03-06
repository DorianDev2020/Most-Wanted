 
//Build all of your functions for displaying and gathering information below (GUI).


// app is the function called to start the entire application
    function app(people){

        var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
        switch(searchType){
        case 'yes':
            // TODO: search by name
            searchByName(people);
            break;
        case 'no':
            // TODO: search by traits
            FindPeopeleByTriats(people);
            break;
        default:
            alert("Invalid input. Please try again!");
            app(people); // restart app
        break;
        }
    }

  
  // Menu function to call once you find who you are looking for
  function mainMenu(person, people){
  
    /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */
  
    if(!person){
      alert("Could not find that individual.");
      return app(people); // restart
    }
  
    var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");
  
    switch(displayOption){
      case "info":
        // TODO: get person's info
       displayPerson(person);
        break;
      case "family":
        // TODO: get person's family
        break;
      case "descendants":
        // TODO: get person's descendants
        break;
      case "restart":
        app(people); // restart
        break;
      case "quit":
        return; // stop execution
      default:
        return mainMenu(person, people); // ask again
    }
  }
  
  function searchByName(people){
    var firstName = promptFor("What is the person's first name?", chars);
    var lastName = promptFor("What is the person's last name?", chars);
  
    let filteredPeople = people.filter(function(el) {
      if(el.firstName === firstName && el.lastName === lastName) {
        return el;
      }
     
    });
    return mainMenu(filteredPeople[0],people);
   
}

function FindPeopeleByTriats(people)
{ var searchtraits = promptFor("choose what trait do you want to search for");
 switch(searchtraits){
     case "1":
        searchByGeneder(people);
         break;
    case "2":
        seacrhByHeight(people);
        break;
    case "3":
        seacrhByWeight(people);
        break;
    case "4":
        searchByEyeColor(people);
        break;
    default:
        return app(peolpe);
 }

}




    // TODO: What to do with filteredPeople?
    //Put all filtered pple in empty array
    //return that array
    //Or retun new array withou those pple

       function searchByGeneder(people){
           var gender = promptFor("What is the geneder of the person you are looking for",chars);
           
           let filteredPeople = peolpe.filter(function(el){
                if (el.gender === gender) {
               mainMenu(el, people);
           }
           });
          
        }

        function seacrhByHeight(people){
            var height = prompt("How tall is the perosn you are looking for",chars);

            let filteredPeople = peolpe.filter(function(el){
                if (el.height === height){
                    mainMenu(el, people);
                }
                
            });
           
        }

        function seacrhByWeight(peolpe){
            var weight = prompt("What is the wieght of the perosn you are looking for",chars);
            
            let filteredPeople = people.filter(function(el){
                if (el.weight === weight){
                    mainMenu(el, people);
                }
               
            });
           

        }
        function searchByEyeColor(peolpe){
            var eyecolor = prompt("What is the eyecoloe of the person your looking for",chars);

            let filteredPeople = peolpe.filter(function(el){
                if (el.eyecolor === eyecolor){
                    mainMenu(el, people);
                }
            });

        }
  
  // alerts a list of people
  function displayPeople(people){
    alert(people.map(function(person){
      return person.firstName + " " + person.lastName;
    }).join("\n"));
  }
  
  function displayPerson(person){
    // print all of the information about a person:
    // height, weight, age, name, occupation, eye color.
    var personInfo = "First Name: " + person.firstName + "\n";
    personInfo += "Last Name: " + person.lastName + "\n";
    personInfo += "gender: " + person.gender + "\n";
    personInfo += "height: " + person.height + "\n"; 
    personInfo += "weight: " + person.weight + "\n";
    personInfo += "occupation" + person.occupation + "\n";
    personInfo += "eyecolor" + person.eyecolor + "\n";
    personInfo += "dob" + person.dob + "\n";
    // TODO: finish getting the rest of the information to display
    alert(personInfo);
  }
  
  // function that prompts and validates user input
  function promptFor(question, callback){
    do{
      var response = prompt(question).trim();
    } while(!response || !callback(response));
    return response;
  }
  
  // helper function to pass into promptFor to validate yes/no answers
  function yesNo(input){
    return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
  }
  
  // helper function to pass in as default promptFor validation
  function chars(input){
    return true; // default validation only
  }