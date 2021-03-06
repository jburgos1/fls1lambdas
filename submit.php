<?php
if(isset($_POST['send'])){

	$to = 'FLS1 VP <sectoronevicepresident@gmail.com>';
	$subject = 'Message from floridalambdas.com';
	$message = 'Name: ' . $_POST['name'] . "\r\n\r\n";
	$message .= 'Email: ' . $_POST['email'] . "\r\n\r\n";
	$message .= 'Phone: ' . $_POST['phone'] . "\r\n\r\n";
	$message .= 'Message: ' . $_POST['message'];


	$headers = "From: FLS1 website\r\n";
	$headers .= "Content-Type: text/plain; charset= UTF-8\r\n";
	//$headers .= "CC: info@floridalambdas.com";

	//echo $message;
	$success = mail($to,$subject,$message,$headers,'-fsectoronevicepresident@gmail.com');
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport"    content="width=device-width, initial-scale=1.0">
	
	<!-- SEO -->
	<meta name="keywords" content="Lambdas, Florida Lambdas, FLS1, Florida Sector 1, Lambda Theta Phi, FL Sector 1, #FLS1, #Lambdas, #FloridaSector1, Latin Fraternity, Latino Greek Movement, oldest latin fraternity, oldest latino fraternity, latino organization, minority organization, latin brotherhood, the lambdas, Lambda, latin fraternity, latino fraternity, latino fraternities, latino frat, hispanic fraternity, hispanic fraternities, hispanic frat, latinos in college, latino college, hispanic college students, latino college students, hispanics in college, latino brotherhood, latino brothers, NIC, latino students, latinos on campus, UF, University of Florida, Gators, UCF, University of Central Florida, Knights, USF, University of South Florida, Bulls, ERAU, Embry Riddle Aeronautical University, Eagles, FSU, Florida State University, Seminoles, donations, donate">

	<meta name="description" content="Donate to the First and Largest Latin Fraternity in the Nation, is a Latino-based fraternity dedicated to assisting the minority and Latino community in the US."> 

	<title>Donations - Florida Sector 1</title>
	
	<!--Fonts -->
	<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Montserrat:400,700" type='text/css'>
	<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,700" media="screen">
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" >
	<link rel="stylesheet" href="fonts/font-awesome.min.css">
	<link href='http://fonts.googleapis.com/css?family=PT+Sans' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>

	<!-- Icon -->
	<link rel="shortcut icon" href="favicon.ico">

	<!-- CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" type="text/css">
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/bootstrap-theme.min.css" media="screen" >
	<link rel="stylesheet" href="css/main.css">
	
	<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
	<script src="js/html5shiv.js"></script>
	<script src="js/respond.min.js"></script>
	<![endif]-->
</head>
<body>

	<!-- Google Analytics Tracking -->
	<?php include_once("includes/analyticstracking.php") ?>
	
	<!-- Fixed navbar -->
	<div class="navbar navbar-inverse navbar-fixed-top headroom">
		<div class="container" id="topmenu">
			<div class="navbar-header">
				<!-- Button for smallest screens -->
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
				<a class="navbar-brand" href="index.html">
					<img src="img/logo_web2.png" alt="Florida Sector 1" id="logo">
				</a>
			</div>

			<div class="navbar-collapse collapse" id="nav_menu">
				<ul class="col-md-12 col-xs-12 nav navbar-nav pull-right">
					
					<li>
						<a href="index.html">
							Home
						</a>
					</li>

					<li>
						<a href="Florida-Sector-One-History.html">
							History
						</a>
					</li>

					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">
							Who We Are <b class="caret"></b>
						</a>

						<ul class="dropdown-menu">

							<li>
								<a href="Florida-Sector-One-Executive-Board.html">
									Executive Board
								</a>
							</li>

							<li role="presentation" class="divider"></li>							

							<li>
								<a href="Chapters/Phi-Chapter.html">
									Phi Chapter (UF)
								</a>
							</li>

							<li>
								<a href="Chapters/Alpha-Alpha-Chapter.html">
									Alpha Alpha (UCF)
								</a>
							</li>

							<li>
								<a href="Chapters/Alpha-Psi-Chapter.html">
									Alpha Psi (USF)
								</a>
							</li>

							<li>
								<a href="Chapters/Beta-Delta-Chapter.html">
									Beta Delta (ERAU)
								</a>
							</li>

							<li>
								<a href="Chapters/Beta-Iota-Chapter.html">
									Beta Iota (FSU)
								</a>
							</li>

							<li>
								<a href="Chapters/Lambda-Beta-Alumni-Chapter.html">
									Alumni
								</a>
							</li>
						</ul>

					</li>

					<li>
						<a href="Contact-Florida-Sector-One.html">
							Contact
						</a>
					</li>

					<li class="active">
						<a href="Donate-To-Florida-Sector-One.html">
							Donate
						</a>
					</li>

					<li>
						<a href="http://quest.lambda1975.org/" target="_blank">
							The Quest
						</a>
					</li>
				</ul>
			</div><!--/.nav-collapse -->
		</div>
	</div> 
	<!-- /.navbar -->

	<!-- container -->
	<div class="container">

		<ol class="breadcrumb">
			<li>
				<a href="index.html">
					Home
				</a>
			</li>

			<li class="active">
				Message
			</li>
		</ol>


		<div class="row">
			<p>Your message has been received. Thanks for contacting us. We will contacting you as we can.</p>			 
		</div>
	</div>

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<script src="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script src="js/charts.js"></script>

	<script src="js/headroom.min.js"></script>
	<script src="js/jQuery.headroom.min.js"></script>
	<script src="js/template.js"></script>



</body>
