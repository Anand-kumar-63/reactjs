<!-- use params
The code import { useParams } from 'react-router-dom'; imports the useParams hook from the react-router-dom library in React.
Here's what useParams does:

1.useParams is a hook provided by react-router-dom that allows you to access URL parameters from the current route.
2.When a route in your application has dynamic segments (e.g., /profile/:userId), useParams can be used to extract these parameters.
3.It returns an object of key-value pairs where the keys are the parameter names, and the values are the values from the current URL. -->


<!-- We are going to learn how to properly manage our data if you kmow hoe to handle this data efficeintly your apps efficiency can be increased -->

<!--  -->

<!-- data handling  -->
1.you know what happens in a raect application there is lots and lots of data having different hierarchy
2.when our app grows big there are component and component wihtin them its like a tree big tree there is a lot of levels of nesting inside it
3.passsind data from one component is a very big challenge when the applicatino is huge and react has one way data flow from parent to children to thier childrens like restaurant menu pass data to restaurant category then category pass data to itemlist  
                                   GIVEN HIERARCHY
                                   resmenu>>rescategory>>itemlist
                           
         ---- suppose that resmenu has some dummy data and you have to access it in itemlist you cant directly access    that dummy data from itemlist you have to first pass it to rescategory then to itemlist
         ----let say there is a nesting of multiple levels now its gonna be difficult doing props drilling passing props in a hierarchy manner so react introduced us a concept knows as {USE CONTEXT} to easy this data management:   now if our data is inside parent component then any child component can acess it directly using CONTEXT

         --- there are many ways to avoid props drilling one way is using context other are  also there 
         ---you can create multiple context.js file for accessing the context data in other file there is a useContext  hook from react;
             >>put that data in the context file which you have to use at multiple location 