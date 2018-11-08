
var queryURL = "";
var config = {
    apiKey: "EBb20IKo5DUliI4QmZnwQQ4sfvUKIcqfgHdePwb3",
}
var newdata;
 // Initialize Firebase
var config2 = {
    apiKey: "AIzaSyDDXtd4DCQU7kqmY4EwgdfIwAfnvpcZuwM",
    authDomain: "project-1-136a6.firebaseapp.com",
    databaseURL: "https://project-1-136a6.firebaseio.com",
    projectId: "project-1-136a6",
    storageBucket: "project-1-136a6.appspot.com",
    messagingSenderId: "49280110315"
};
firebase.initializeApp(config2);

var database = firebase.database();

$("#submit").on("click", function(event) {
    // Don't refresh the page!
    event.preventDefault();


        //var clnc = event.target.options[event.target.selectedIndex].dataset.clnc;
        //console.log("rc: " + rc);
        //console.log("clnc: " + clnc);

    //console.log(this.options[this.selectedIndex]);
    // Code in the logic for storing and retrieving the most recent user.
    var tempMin = $('#temp option:selected').attr('data-min');
    var tempMax = $('#temp option:selected').attr('data-max');

    var massMin = $('#mass option:selected').attr('data-min');
    var massMax = $('#mass option:selected').attr('data-max');

    var orbitMin = $('#orbit option:selected').attr('data-min');
    var orbitMax = $('#orbit option:selected').attr('data-max');
    console.log(tempMin, tempMax, massMin, massMax,orbitMin, orbitMax);
    queryURL = "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=pl_name,pl_orbper,pl_bmassj,st_dist,st_teff,pl_radj&order=dec&format=JSON&where=st_teff>=" + tempMin + "%20and%20st_teff<=" + tempMax + "%20and%20pl_bmassj>=" + massMin + "%20and%20pl_bmassj<=" + massMax + "%20and%20pl_orbper>=" + orbitMin + "%20and%20pl_orbper<=" + orbitMax;

    function populate(data){
        $("#planets").tabulator("setData", data);
    }

    //clickable anchor tag
var linkFormatter = function(cell, formatterParams){
	var value = this.sanitizeHTML(cell.getValue()),
	urlPrefix = formatterParams.urlPrefix || "",
	label = this.emptyToSpace(value),
	data;

	if(formatterParams.labelField){
		data = cell.getData();
		label = data[formatterParams.labelField];
	}

	if(formatterParams.label){
		switch(typeof formatterParams.label){
			case "string":
			label = formatterParams.label;
			break;

			case "function":
			label = formatterParams.label(cell);
			break;
		}
	}

	if(formatterParams.urlField){
		data = cell.getData();
		value = data[formatterParams.urlField];
	}

	if(formatterParams.url){
		switch(typeof formatterParams.url){
			case "string":
			value = formatterParams.url;
			break;

			case "function":
			value = formatterParams.url(cell);
			break;
		}
	}

	return "<a href='" + urlPrefix + value + "' target='_blank'>" + label + "</a>";
}

    $.ajax({
        url: queryURL,
        method: "GET"
    
    })
        .then(function(response){
            //var results = response.data;
            //console.log(response);
            var foo = JSON.parse(response)
            console.log(foo);
            boo = foo[0].pl_name;

        $("#planets").tabulator({
    
            //height:800, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
            layout:"fitColumns",
            columns:[ //Define Table Columns
                {title:"Planet Name", field:"pl_name", align: "left", formatter:linkFormatter, formatterParams:{url:"index2.html"}},
                {title:"Orbital Period (in Earth Days)", field:"pl_orbper", align:"left"},
                {title:"Planet Mass (in Jupiter Masses)", field:"pl_bmassj", align: "left"},
                {title:"Distance to Planetary System (in parsecs)", field:"st_dist", align:"left"},
                {title:"Temperature of Star (in Kelvin)", field:"st_teff", align:"left"},
                {title:"Radius (in Jupitar Radii)", field:"pl_radj", align:"left"}
            ],
            rowClick:function(e, row){
                var newdata = row.getData();
                console.log(newdata);
                //Push to firebase
                database.ref().push({
                    planet: newdata.pl_name,
                    orbitalPeriod: newdata.pl_orbper,
                    planetMass: newdata.pl_bmassj,
                    distanceTo: newdata.st_dist,
                    starTemp: newdata.st_teff,
                    planetRadius: newdata.pl_radj,
                    dateAdded: firebase.database.ServerValue.TIMESTAMP
                });
            },
        });
        populate(foo);

        });
        //$("body").on("click", "#planets", function() {
        //    console.log(newdata);
            //$("#planets").html("");
       // });
});


database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function (snapshot) {
    var planetName = snapshot.val().planet;
    $("#planet-name").append(planetName);
    console.log(planetName);
    var planetRadius = snapshot.val().planetRadius;
    console.log(planetRadius);
    var planetMassinJupiters = snapshot.val().planetMass;
    console.log(planetMassinJupiters);
    console.log(snapshot.val());
    $("#planet-text").text(planetName);
    if (planetRadius == null){
        $("#planet-text-radius").text("No data")
    } else{
        document.getElementById("planet-radius").setAttribute('r', planetRadius*30);
    }
    $("#submit2").on("click", function(event2) {
        event2.preventDefault();
        var planetMass = planetMassinJupiters * (1.898 * Math.pow(10, 27));
        var personMass = $("#weight-input").val();
        var surfaceGravity = (6.673 * Math.pow(10, -11) * planetMass) / Math.pow(planetRadius, 2);
        var personWeight = surfaceGravity * personMass;
        $("#weight-results").append(personWeight);
        if (planetRadius == null || planetMass == null) {
            $("#weight-results").append("Sorry, there is either no data on this planet's Mass or Radius")

        }
    });
        
        

});


//"http://exoplanetarchive.ipac.caltech.edu/cgi-bin/TblView/nph-tblView?app=ExoTbls&config=planets&constraint=st_teffstr%20between%200%20and%205075"

//Base URL
//"http://exoplanetarchive.ipac.caltech.edu/cgi-bin/TblView/nph-tblView?app=ExoTbls&config=planets&constraint=st_teffstr%20between%20" + tempMin + "%20and%20" + tempMax + "&constraint=pl_bmassjstr%20between%20" + massMin + "%20and%20" + massMax + "&constraint=pl_orbperstr%20between%20" + orbitMin + "%20and%20" + orbitMax