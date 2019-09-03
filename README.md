<!-- # Project-1
This page allows users to search for exoplanets by choosing certain parameters. The page retrieves information from the NASA Exoplanet API on planets fitting these parameters and displays them in a table. Users can click on an individual planet, and the program stores the name of that planet in a Firebase server, then opens a new tab with further information on that planet. From that second page, the user can enter his or her weight and find what the user's weight would be on that planet. Users can also find further information on the NASA Exoplanet website. In addition to jQuery and Bootstrap, the program utilizes the Tabulator library to create the table of planets.

https://awesome-team-999.github.io/Project-1/ -->

#Exoplanet Finder
This website allows users to search for planets, or planets located oustide of the Solar System that have been identified by NASA, by selecting certain search criteria. This site would be useful to anyone who wants to learn more about astronomy and known exoplanets. 

## How to run on local machine
The repository can be cloned by clicking the Clone or Download button on the main repository page, then clicking the button next to the url which appears below. Then open a Terminal or Git Bash window, navigate to the location where you want to place the cloned repository, then type 'git clone' and then paste the repository that was just copied. The site can be accessed by opening the index.html page in a web browser.  

## Repository organization
The main directory contains the Readmd.md, index.html and index2.html files, as well as the assets folder. 'index.html' contains the basic html code for displaying the site hompage and also contains links to the 'style.css', 'app.js', as the Bootstrap, jQuery, Tabulator, and Firebase CDNs. Also included on the page are dropdown options with search criteria to query the NASA Exoplanet with. These criteria are temperature (in Kelvin), planet mass in Jupiter masses, and orbital period in Earth days. Next to these dropdown menus is the 'Submit' button, which can be clicked to query the database with the selected criteria and display the results in the table below.Next to the submit button, is the 'Reset' button, which can be clicked after search results are returned to reset the page back to its original state. Below this is a row which displays information on the Earth as a frame of reference for information that is returned on any exoplanets, including its orbital period, mass in Jupiter masses, distance from Earth in parsecs (0 in this case), temperature in Kelvin, and radius in Jupiter radii. 
'index2.html' contains code for displaying elements on the second page, which provides additional information on specific planets from the NASA Exoplanet API.
Within the assets folder are three subfolders - the 'css', 'images', and 'javascript' subfolders. The 'images' subfolder contains the 'space3.jpg' file, which is the background image for both pages on the site. Within the 'css' folder is the 'style.css' file, which contains code for styling both pages of the site and setting 'space.jpg' as the background image for both. 
The 'javascript' subfolder contains 'app.js' which contains all of the JavaScript and jQuery code for running the site. This file contains code to use information from the app's Firebase project configuration to initialize the Firebase database. It also contains a function which is called when the 'Submit' button is clicked, that uses the search criteria selected from the dropdown menu to query the Exoplanet API. The results from the API are displayed as a JSON object. The 'populate' function within this on-click function then uses the results that are returned from the API to create a results table that is populated by the results of this search. The table is organzied into six columns, each of which contains a category of information for each planet that is retrieved from the search (if that information is available). These categories are the planet name, orbital period (in Earth days), the planet mass (in Jupiter masses), distance to the planetary system from Earth (in parsecs), temperature of the star that the planet orbits (in Kelvin) and the radius of the planet (in Jupiter radii).
Clicking on the name of any planet in the results table will also trigger a function which sends the information on that planet to the Firebase database for this project. The name of any planet in the results table also contains a link to 'index2.html' which, when clicked, will open this page with additional information on that planet. Information on the planet just clicked on is retrieved from the Firebase database (only the most recently added result is retrieved, to ensure that information on the planet that was just clicked on is displayed on the page). On this page is a search bar where the user can enter his or her weight in pounds to find out what he or she would weigh on the selected planet. Clicking the submit button below the input form triggers a function which uses the person's entered weight and the planet's mass or radius to calculate the person's weight in pounds on that planet and display it below the submit button. If data on either the planet's mass or its radius are not available, then the message "Sorry, there is either no data on this planet's Mass or Radius" will be displayed there instead. If data on the planet's radius is available, this information will be used to create a SVG circle, which is displayed below. If this information is not available, the text "No data" will be displayed there instead. Next to this planet, two additional circles are displayed - one representing the Earth and one representing Jupiter. The size of the representing each planet is proportional to the size of the actual planets, to show the sizes of each compared to the others.
At the bottom of the page is a button labeled 'Get more planet info.' Clicking on this button will trigger a function that opens a new tab and utilizes the planet name to display a list of search results for that planet on the NASA exoplanet website.

## How to use site
<!-- Add more information here -->

## Technology used
* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery
* NASA Exoplanet API
* Firebase
* Tabulator
* SVG
* JSON

## Future improvements
<!-- Add more information here -->

## Link to deployed site
<a href = "https://awesome-team-999.github.io/Project-1/">Exoplanet Finder</a>
