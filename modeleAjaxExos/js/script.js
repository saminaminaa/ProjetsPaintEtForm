$(document).ready(function() {
	
//--------------recuperer les departements :------------------------------------
    function getDepartement(){
        var request=$.ajax({
            url:"https://geo.api.gouv.fr/departements", //appel de l'api
            method: "GET", //recup
            dataType: "json",
            beforeSend: function (xhr ){
                xhr.overrideMimeType("application/json; charset=uft-8");
            }});
			request.done(function(msg){
				var departement = document.getElementById("listeDpt");
				departement.addEventListener("change",getListCommune,false);
            
				$.each(msg, function(index,e){
					departement.innerHTML += "<option value="+e.code+">"+ e.nom +"</option>" 
            })
            

	getListCommune();
//--------------recuperer les communes -------------------------------------------	
	function getListCommune(){ //liste des communes
        var request=$.ajax({
            url:"https://geo.api.gouv.fr/departements/"+departement.value+"/communes",
            method: "GET",
            dataType: "json",
            beforeSend: function (xhr ){
                xhr.overrideMimeType("application/json; charset=uft-8");
            }});
        request.done(function(msg){
            var commune = document.getElementById("listeCommune");
                commune.addEventListener("change",getInfoCommune,false);
                $.each(msg, function(index,f){
                    commune.innerHTML += "<option value="+f.code+">"+ f.nom +"</option>" 
                })
                    
                getInfoCommune()
                function getInfoCommune(){ //info communes
                    var request=$.ajax({
                    url:"https://geo.api.gouv.fr/communes/"+commune.value ,
                    method: "GET",
                    dataType: "json",
                    beforeSend: function (xhr ){
                    xhr.overrideMimeType("application/json; charset=uft-8");
                }});
                request.done(function(msg){
                    document.getElementById("nom").innerText = "Nom : "+ msg.nom;
                    document.getElementById("cp").innerText = "Code postal : "+ msg.codesPostaux;
                    document.getElementById("population").innerText = "Population : "+ msg.population;
                });
                request.fail(function(jqXHR, textStatus) {
                    console.log("Il y a une erreur");
                }); 
            }
        });
        request.fail(function(jqXHR, textStatus) {
            console.log("Il y a une erreur");
        });
    }
});
    request.fail(function(jqXHR, textStatus) {
        console.log("Il y a une erreur");
    });
}    
getDepartement(); //appel de la fonction getDepartement
});