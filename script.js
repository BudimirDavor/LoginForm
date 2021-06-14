function myFunction()
{
	var un = document.forms["myForm"]["Uname"].value;
	var pw = document.forms["myForm"]["Pass"].value;
	if(un=="student" && pw=="1234")
	{
		window.location.href="welcome.html";
	}
	else
	{
		alert("Invalid UserName and Password"); 
	}
}