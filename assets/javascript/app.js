var url = "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=pl_name,pl_orbper,pl_bmassj,st_dist,st_teff&order=dec&format=ascii";
var config = {
    apiKey: "EBb20IKo5DUliI4QmZnwQQ4sfvUKIcqfgHdePwb3",
}

$.ajax({
    url: url,
    method: "GET"

})
    .then(function(response){
        var results = response.data;
        
    })