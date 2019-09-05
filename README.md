# Exoplanet Finder
This website allows users to search for exoplanets, or planets located oustide of the Solar System that have been identified by NASA, by selecting certain search criteria. This site would be useful to anyone who wants to learn more about astronomy and known exoplanets. 

## How to run on local machine
The repository can be cloned by clicking the Clone or Download button on the main repository page, then clicking the button next to the url which appears below. Then open a Terminal or Git Bash window, navigate to the location where you want to place the cloned repository, type 'git clone' and paste the repository url that was just copied. The site can be accessed by opening the index.html page in a web browser.  

## Repository organization
The main directory contains the Readmd.md, index.html and index2.html files, as well as the assets folder. 'index.html' contains the basic html code for displaying the site hompage, including the dropdown menus to select search criteria to query the NASA Exoplanet API with. It also contains links to the 'style.css', 'app.js', as well as the Bootstrap, jQuery, Tabulator, and Firebase CDNs. 
'index2.html' contains code for displaying elements on the second page, which provides additional information on specific planets from the NASA Exoplanet API. This includes an input where the user can enter his or her weight in pounds, three red SVG circles showing the relative sizes of Earth, Jupiter, and a selected exoplanet from the NASA API (if information on the planet's radius is available), and 'more info' button that the user can click to see additional information on the selected exoplanet.
<br>
Within the assets folder are three subfolders - the 'css', 'images', and 'javascript' subfolders. The 'images' subfolder contains the 'space3.jpg' file, which is the background image for both pages on the site. Within the 'css' folder is the 'style.css' file, which contains code for styling both pages of the site and setting 'space3.jpg' as the background image for both. 
<br>
The 'javascript' subfolder contains 'app.js' which contains all of the JavaScript and jQuery code for running the site. This file contains code to use information from the app's Firebase project configuration to initialize the Firebase database. It also contains a function which is called when the 'Submit' button is clicked, that uses the search criteria selected from the dropdown menu to query the Exoplanet API. The results are retrieved from the API as a JSON object. The 'populate' function within this on-click function then create a results table that is populated with the data from the search. 
<br>
The file also contains a function which is triggered whenever the user clicks on the name of any planet in the results and which will send the information on that planet to the Firebase database for this project. The name of any planet in the results table also contains a link to 'index2.html' which, when clicked, will open this page with additional information on that planet. Information on the planet just clicked on is retrieved from the Firebase database (only the most recently added result is retrieved, to ensure that information on the planet that was just clicked on is displayed on the page). In 'app.js', there is also a function that is triggered when the user clicks on the more info button on the second page. This function will open a new tab and utilize the planet name to display a list of search results for that planet on the NASA exoplanet website. 

## How to use site
On the homepage, there are three dropdown menus, each of which has search criteria to query the NASA Exoplanet with. These criteria are temperature (in Kelvin), planet mass in Jupiter masses, and orbital period in Earth days. Clicking the 'Submit' button next to these menus will query the database with the selected criteria. The results retrieved from the database will then be displayed in the table below. The user can then click the 'Reset' button next to the submit button to reset the page back to its original state.
<br>
The results are displayed in the form of a table which is organized into six columns. Each column contains a category of information for each planet that is retrieved from the search (if that information is available). These categories are the planet name, orbital period (in Earth days), the planet mass (in Jupiter masses), distance to the planetary system from Earth (in parsecs), temperature of the star that the planet orbits (in Kelvin) and the radius of the planet (in Jupiter radii). Directly above this table is a row which displays information on the Earth as a frame of reference to compare with the information that is returned on the exoplanets. This information includes Earth's orbital period, mass in Jupiter masses, distance from Earth in parsecs (0 in this case), temperature in Kelvin, and radius in Jupiter radii. 
<br><br>
![Search-Gif](/gifs/search.gif)
<br><br>
Clicking on the name of any planet in the table will open a new tab with additional information on that planet.
<br><br>
![Planet-Gif](/gifs/planet.gif)
<br><br>
 On this page is a search bar where the user can enter his or her weight in pounds to find out what he or she would weigh on the selected planet. Clicking the submit button below the input form triggers a function which uses the person's entered weight and the planet's mass or radius to calculate the person's weight in pounds on that planet and display it below the submit button. If data on either the planet's mass or its radius are not available, then the message "Sorry, there is either no data on this planet's Mass or Radius" will be displayed there instead. If data on the planet's radius is available, this information will be used to create a SVG circle, which is displayed below. If this information is not available, the text "No data" will be displayed there instead. 
 <br><br>
![Weight-Gif](/gifs/weight.gif)
<br><br>
 Next to the circle representing this exoplanet, two additional circles are displayed - one representing the Earth and one representing Jupiter. The size of the circle representing each planet is proportional to the size of the actual planets, to show the sizes of each compared to the others.
 <br>
At the bottom of the page is a button labeled 'Get more planet info.' Clicking on this button will open a new tab which displays the search results for that planet on the NASA exoplanet website.
<br><br>
![More-Info-Gif](/gifs/more-info.gif)
<br><br>

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
More functionality could be added to the site as more information on exoplanets becomes available. For example, the creators of the site were hoping to show artist renditions of certain exoplanets, or photographs of some planets that are fairly close to Earth, but that information could not be found in any available APIs. The creators of the site also wanted to add information on the second page which would allow the user to calculate how long a day is on a selected exoplanet. This functionality could be included if APIs which contain that type of information are found.

## Link to deployed site
<a href = "https://awesome-team-999.github.io/Project-1/">Exoplanet Finder</a>
