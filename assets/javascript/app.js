var queryURL = "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=pl_name,pl_orbper,pl_bmassj,st_dist,st_teff&order=dec&format=ascii";
// var config = {
//     apiKey: "EBb20IKo5DUliI4QmZnwQQ4sfvUKIcqfgHdePwb3",
// }

$.ajax({
    url: queryURL,
    method: 'GET'

})
    .then(function(response){
        $("#results").append(response);
        console.log(response);
    })