
$(document).ready(function () {
	console.log("data");

	var url = '/user/profiledata';
	 $.ajax(url, {
      success: function(data) {
      	console.log("the real data is below");
      	console.log(data);
      	alert("I won");
      	$('#id_name').val(data.name);
      	$('#id_age').val(data.age);
      	$('#id_gender').val(data.gender);
      	$('#id_city').val(data.city);
      	$('#id_email').val(data.email);
      },
      error: function(error) {
      	console.log("some error happened");
      	console.log(error);
      	alert("I failed");
      }
   });


});

       

function doDataUpdate(){
	var dataposturl = '/user/profileupdate';
	 $.ajax(url, {
	 	type:"POST",

      success: function(data) {
      	console.log("the real data is below");
      	console.log(data);
      	alert("I won");
      var ed_name = ('#id_name').val();
      var ed_age= ('#id_age').val();
      var ed_gender= ('#id_gender').val();
      var ed_city= ('#id_city').val();
      var ed_email= ('#id_email').val();
      },
      error: function(error) {
      	console.log("some error happened");
      	console.log(error);
      	alert("I failed");
      }
   });
}

$('#id_success').click(function(){
	doDataUpdate( );
});