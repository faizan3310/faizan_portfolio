var change = ( ) => {

    var password = document.querySelector("#userpass");
    var current = password.getAttribute('type');
  
    if(current == 'password'){
        password.setAttribute('type' , 'Text');
        document.querySelector("#openeye").style.display = 'inline-block';
        document.querySelector("#closedeye").style.display = 'none';
    } else{
        password.setAttribute('type' , 'password');
        document.querySelector("#openeye").style.display = "none";
        document.querySelector("#closedeye").style.display = "inline-block";
    }
  }
  
  var validatekeypress = (event) =>{
  }
  var images = {
      right: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/></svg>',
      wrong: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/></svg>'
  }
  
  
  var validatekeyup = (event) => {
      var element = event.target;
      
      // visibility validity
  
      if (element.value.length > 0){
          document.querySelector(".validationlist").style.display = "block";
      } else {
          document.querySelector(".validationlist").style.display = "none";
      }
  
      //1. Password must contain 10 characters
  
      if(element.value.length == 10){
          document.querySelector(".validate1").style.color = "green";
          document.querySelector("#showicon1").innerHTML = images.right;
      }else{
          document.querySelector(".validate1").style.color = "red";
          document.querySelector("#showicon1").innerHTML = images.wrong;
      }
  
      // 2. password must start  with upperCase
  
      var charcodeoffirstchar = element.value.charCodeAt(0);
      if(charcodeoffirstchar >= 65 && charcodeoffirstchar <= 90){
          document.querySelector(".validate2").style.color = "green";
          document.querySelector("#showicon2").innerHTML = images.right;
      }
      else{
          document.querySelector(".validate2").style.color = "red";
          document.querySelector("#showicon2").innerHTML = images.wrong;
      }
  
      // 3. Password must contain a special symbol
  
      var count2 = 0;
      for(var j = 0 ; j <= 10 ; j++){
          if((element.value.charCodeAt(j) >= 33 && element.value.charCodeAt(j) <= 47) || (element.value.charCodeAt(j) >= 58 && element.value.charCodeAt(j) <= 64)){
              count2 ++;
          }
          if(count2 == 1){
              document.querySelector(".validate3").style.color = "green";
              document.querySelector("#showicon3").innerHTML = images.right;
          }else{
              document.querySelector(".validate3").style.color = "red";
              document.querySelector("#showicon3").innerHTML = images.wrong;
          }
      }
  
          //4. Password must contain atleast 2 digits
  
          var count1 = 0 ;
  
          for(var i = 0 ; i < 10 ; i++){
              if(element.value.charCodeAt(i) >= 48 && element.value.charCodeAt(i) <= 58){
                  count1++;
              }
          }
  
          if(count1 == 2){
              document.querySelector(".validate4").style.color = 'green';
              document.querySelector("#showicon4").innerHTML = images.right;
          }
          else{
              document.querySelector(".validate4").style.color = "red";
              document.querySelector("#showicon4").innerHTML = images.wrong;
          }
  }
  
  