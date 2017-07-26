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