var queryURL = "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=pl_name,pl_orbper,pl_bmassj,st_dist,st_teff&order=dec&format=ascii";
var config = {
    apiKey: "EBb20IKo5DUliI4QmZnwQQ4sfvUKIcqfgHdePwb3",
}

$.ajax({
    url: queryURL,
    method: "GET"

})
    .then(function(response){
        //var results = response.data;
        $("#results").append(response);
        console.log(response);
    })

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
  
  });
//"http://exoplanetarchive.ipac.caltech.edu/cgi-bin/TblView/nph-tblView?app=ExoTbls&config=planets&constraint=st_teffstr%20between%200%20and%205075"
