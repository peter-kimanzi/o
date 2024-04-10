<!-- For index.php --> 


<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=1">
<title>Home</title>
<link rel="stylesheet" type="text/css" href="css/style.css">
</head>

<body>

<div class="form-container">
  <h1>AJAX Form Submit</h1>
  <form id="inputFormData">
    <div>
      <input type="text" placeholder="Name" name="fullname" id="fullname">
      <input type="text" placeholder="User Name" name="username" id="username">
      <input type="text" placeholder="Phone" name="phone" id="phone">
      <input type="button" id="submit" value="Submit">
    </div>
  </form>
  <div id="ajax-data">
    
  </div>
</div>  
      
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript">

</script>

</body>
</html>


<!-- For server.php --> 

<?php

$fullname =  $_POST['fullname'];
$username = $_POST['username'];
$phone = $_POST['phone'];

echo "Name:" . $fullname . "<br> Username:" . $username . "<br> Mobile:" . $phone

?>

<script>

$("#submit").on('click', function(){
    $.ajax({
      type: 'post',
      url: "server.php",
      data: $('#inputFormData').serialize(), 
      success: function(response) {
        $("#ajax-data").html(response);
      },
      error: function() {
        alert("error");
      }
    });
});
</script>


<style>
  *,*:after,*:before{
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	-ms-box-sizing: border-box;
	box-sizing: border-box;
}
body{
	font-family: arial;
	font-size: 16px;
	margin: 0;

	background: #003046;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
}

.form-container{
	width: 600px;
	padding: 30px;
	background: #fff;
	color: #000;
	text-align: center;
	border-radius: 15px;
}
.form-container h1{
	margin:0 0 15px;
	font-size: 46px;
}
input{
	width: 100%;
	height: 50px;
	padding: 15px;
	line-height: 20px;
	font-size: 18px;
	margin-bottom: 15px;
	border:2px solid #000;
	border-radius: 5px;
}
input[type="button"]{
	width: 200px;
	background: #003046;
	color: #fff;
	border:0;
	cursor: pointer;
}
#ajax-data{
	text-align: left;
	font-size: 20px;
}


</style>