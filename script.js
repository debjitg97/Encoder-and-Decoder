var caesarShift = function(str, amount) 
{
  if(amount<0) 
  {
    return caesarShift(str, amount+26);
  }
  var output="";
  for(var i=0; i<str.length; i++) 
  {
    var c = str[i];
    if(c.match(/[a-z]/i)) 
    {
      var code = str.charCodeAt(i);
      if(code>=65 && code<=90) 
      {
        c=String.fromCharCode(((code-65+amount)%26)+65);
      }
      else if(code>=97 && code<=122) 
      {
        c=String.fromCharCode(((code-97+amount)%26)+97);
      }
    }
    output+=c;
  }
  return output;
};

function compute()
{
  var text=document.getElementById("text").value, key=document.getElementById("key").value;
  if(isNaN(key))
  {
    window.alert("Key must be a valid integer!");
    document.getElementById("key").value="";
  }
  else if(document.getElementById("mode").value=="encode")
  document.getElementById("result").value=caesarShift(text, parseInt(key));
  else
  document.getElementById("result").value=caesarShift(text, -parseInt(key));
}
