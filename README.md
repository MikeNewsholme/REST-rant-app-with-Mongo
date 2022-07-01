# Project REST-Rant

REST-Rant is an app where users can review restaurants.
[x]Part 1: Project setup, stub three routes, and creating a README file
** in progress []Part 2: Stub remaining GET and POST routes, planning mock restaurant data, drawing wireframes, and making your first view
[]Part 3: Making more views, creating a layout page, and expanding your README
[]Part 4: Adding some style with CSS
[]Part 5: Forms, validation, and navigation
[]Part 6: Implementing delete functionality and adding a DELETE route
[]Part 7: Implementing edit form and functionality, adding a PUT route
[]Part 8: Implementing the Mongoose ODM
[]Part 9: Seed data, validations, and helper methods
[]Part 10: Adding commentary: rants and raves
[]Part 11: Populating data for star ratings
[]Part 12: Deploying your project


| Method        | Path                      | Purpose       
| ------------- | ------------------------- | ------------  
| GET           |       /                   | Home Page     
| GET           | /places                   | Places index page  
| POST          | /places                   | Create new place 
| GET           | /places/new               | Form page for creating a new place  
| GET           | /places/:id               | details about a particular place  
| PUT           | /places/:id               | update a particular place 
| GET           |/places/:id/edit           | form page for editing an existing place  
| DELETE        |/places/:id                | Delete a particular place  
| POST          |/places/:id/rant           | Create a rant about a particular place  
| DELETE        | /places/:id/rant/:rantId  | Delete a rant about a particular place  
| GET           | *                         | 404 page(matches any route not defined here)  