##CommBank Data Visualisation Assignment

http://commbank-vis.surge.sh/

This is a charting project made in React for the Data Visualisation team at CommBank.

###Tools Used

I used the Recharts library to render the dataset provided. Out of the box, it allowed for a simplified setup process and offered a wealth of powerful charting options to quickly bootstrap the project.The tables were rendered using React-Table which also allowed for simple data inputting. React-Grid-Layout and React-Burger-Menu for navigational/aesthetic improvements.

Underneath the visuals, I used Redux for passing state changes app wide via dispatched actions. This project was bootstrapped with Create-React-App which provided Webpack for bundling and Jest for testing. 

###Thoughts

Although happy with how the project aesthetically looks, I am disappointed at not being able to implement several features I had in mind owing to time constraints.

The drawback of Recharts was that it required a zero-indexed set of dataset for its charts, meaning that I could not have flexibility in the way I retrieved my data (as I would with something i.e JSON). 

Due to time constraints, I could not fully explore the possibility of including more charts and tables in the second page (hence the left menu bar). 

Thanks for reading :)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

