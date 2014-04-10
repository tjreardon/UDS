function validate()
{
  var good = true
  var n = document.forms["myForm"]["name"].value;
  if(n == null || n == "")
  {
    document.getElementById("nameWarning").textContent = "Must fill in a name!";
    good = false;
  }
  
  var e = document.forms["myForm"]["email"].value;
  if(e == "" || e == null || e.substring("@") == -1 || e.substring(".") == -1)
  {
	document.getElementById("emailWarning").textContent = "Email adress not valid";
	good = false;
  }
  
  var radGroup = document.forms["myForm"]["plan"];
  var isSelected = function(){
	for(var i=0; i<radGroup.length; i++) {
        if( radGroup[i].checked){
			return true;
		}
    }
	return false;
	}
	if(!isSelected()){
		good = false;
		document.getElementById("planWarning").textContent = "You must select a meal plan";
	}
  return good;
}
