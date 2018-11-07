
var queryURL = "";
var config = {
    apiKey: "EBb20IKo5DUliI4QmZnwQQ4sfvUKIcqfgHdePwb3",
}

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
    queryURL = "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=pl_name,pl_orbper,pl_bmassj,st_dist,st_teff&order=dec&format=JSON&where=st_teff>=" + tempMin + "%20and%20st_teff<=" + tempMax + "%20and%20pl_bmassj>=" + massMin + "%20and%20pl_bmassj<=" + massMax + "%20and%20pl_orbper>=" + orbitMin + "%20and%20pl_orbper<=" + orbitMax;

    $.ajax({
        url: queryURL,
        method: "GET"
    
    })
        .then(function(response){
            //var results = response.data;
            var foo = JSON.parse(response)
            console.log(foo);
            boo = foo[0].pl_name;
            console.log(boo);
    
            for (i = 0; i < foo.length; i++) {
            $("#planets").append(
            "<tr><td><a href = 'https://awesome-team-999.github.io/Project-1/planet-page.html' target = '_blank'>" + foo[i].pl_name + "</a></td><td>" + 
            foo[i].pl_orbper + "</td><td>" + foo[i].pl_bmassj + "</td><td>" + foo[i].st_dist + 
            "</td><td>" + foo[i].st_teff + "</tr>");  
            }
        });
});

// var weight = $("#weight-input")
// $("#submit2").on("click", function(event2) {
//      event.preventDefault();
//      
//      var planetMass = $("");
//      var personMass = $("#weight-input");
//      var queryURL2 = ""
//
//      $.ajax({
//          url: queryURL2
//          method: "GET"
//      })
//          .then(function(response2){
//    
//
//
//          });
//
//
//
//
//})

//"http://exoplanetarchive.ipac.caltech.edu/cgi-bin/TblView/nph-tblView?app=ExoTbls&config=planets&constraint=st_teffstr%20between%200%20and%205075"

//Base URL
//"http://exoplanetarchive.ipac.caltech.edu/cgi-bin/TblView/nph-tblView?app=ExoTbls&config=planets&constraint=st_teffstr%20between%20" + tempMin + "%20and%20" + tempMax + "&constraint=pl_bmassjstr%20between%20" + massMin + "%20and%20" + massMax + "&constraint=pl_orbperstr%20between%20" + orbitMin + "%20and%20" + orbitMax