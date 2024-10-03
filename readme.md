# exports
There are two types of Exports:: 
1> Default export => during import  => import cards from "./components/cards";
2> Named export => during import => import {cards} from "./components/cards";

# hooks function
(normal js utility function)
- usestate() 
- useEffects()

# microservices
all the services run on thier own specific ports:: on a specific port we can have our ui services on other port we can haven our backend services  :: in short on different ports we can deploy deifferent services and all these services can be mapped to domain name  

# use effect 
-use effect is normal javascript function which requires two parameters a call back fucntion and a dependency array
-as the body function loads it renders all its components and wehn the render cycle stops useeffect callback function is called.
-if you want to render something after rendering the body componentts you can use useeffect callback function
