
document.querySelector("form"),addEventListener("submit",(e)=>{
  e.preventDefault();
})

      function body(){
        document.getElementById("body").style.backgroundImage="url(4.jpeg)";
        document.getElementById("body").style.backgroundRepeat="no-repeat";
        document.getElementById("body").style.backgroundSize="cover";
      }
      var arry =[];
      function signUp(){
        var chartRegisterPerMonth=[[],[],[],[],[],[],[],[],[],[],[],[]];
        var myDate = new Date();
        let userBal = 20000;
        var first = fN.value;
        var second = lN.value;
        var email = eM.value;
        var phone =pN.value;
        var password = pS.value;
        var cPassword = cM.value;
        var a = "40342"+ Math.floor(Math.random()*10000);   
        let pass = {"userDetail":{"firstname":first,"SecondName":second,"PhoneNumber":phone,"usersMoreDetails":{"address":{},"image":{},"country":{},"currency":{},},"Email":email,"Password":password, "accountNumber":a,"Bal":userBal,
        "TransactionHistory":{"transfer":[], "credit":[],"Airtimes":[],"withDraw":[],"deposit":[],"credit":[]},
        "chart":{"deposit":[[],[],[],[],[],[],[],[],[],[],[],[]],
        "debit":[[],[],[],[],[],[],[],[],[],[],[],[]]} }}
        
        let ass = {"userDetail":{"firstname":first,"SecondName":second,"PhoneNumber":phone,"usersMoreDetails":{"address":{},"image":{},"country":{},"currency":{},},"Email":email,"Password":password, "accountNumber":a,"Bal":userBal,"TransactionHistory":{"transfer":[], "credit":[],"Airtimes":[],"withDraw":[],"deposit":[],"credit":[]}}}
        
        //  form unfill
        if( ((first.length<=0) && (second<=0)) && ( (phone<=0) && (email.length<=0)  && (password<=0)) ){
          
        
            // alert("please fill out this form");
            document.getElementById("firstError").innerText="Please fill your first name";
            document.getElementById("secondError").innerText="Please fill your second name";
            document.getElementById("numError").innerText="Please fill  this with your mobile number";
            document.getElementById("passwordError").innerText="Please fill this with your password";
            document.getElementById("emailError").innerText="Please fill this with your email address";
          
        }

        // first name is not fill

        else if(first.length<=0){
          document.getElementById("firstError").innerText="Please fill your first name";

        }

        // second name is not fiil
        else if(second.length<=0){
          document.getElementById("secondError").innerText="Please fill your second name";
        }

        // phone number that less than 8
        else if(phone.length<8){
          if(phone.length<=0){
            document.getElementById("numError").innerText="Please fill this with your mobile number";
          }
          else 
          {

            document.getElementById("numError").innerText="Your mobile number must be upto atleast 8 numbers";
          }
          
        }

        // password unfill
        else if( password.length<8){

          if(password.length=0){

            document.getElementById("passwordError").innerText = "please fill it with your password";
          }
          else if(password.length<=7){

            document.getElementById("passwordError").innerText = "Your password must be atleast 8 characters";
          }

        }

      //  <-- differnce password-->
        else if(password!=cPassword){
          document.getElementById("comfirmError").innerText="Your comfirm password is difference from the password";

            document.getElementById("firstError").innerText="";
            document.getElementById("secondError").innerText="";
            document.getElementById("numError").innerText="";
            document.getElementById("passwordError").innerText=""
            document.getElementById("emailError").innerText=""

        }
          
        else{
         var  sarry = JSON.parse(localStorage.getItem("user"));
         if(sarry){
            var rake = sarry.find(h => ( h.userDetail.Email === email));
            if(rake){
                document.getElementById("emailError").innerText ="This  email address you use has alredy been used by another customer";
            }
            else{
                if(localStorage.user != null){
                arry = JSON.parse(localStorage.getItem("user"));
                };
                if(localStorage.registerMonths !=null){
                    chartRegisterPerMonth=JSON.parse(localStorage.getItem("registerMonths"));
                };
                var charts= chartRegisterPerMonth[myDate.getMonth()];
                charts.push(1);
                localStorage.setItem("registerMonths",JSON.stringify(chartRegisterPerMonth));
                arry.push(pass);
                sarry = JSON.stringify(arry);
                arry = JSON.stringify(ass);
                localStorage.setItem("user", sarry);
                localStorage.setItem("welcome",arry)
                document.getElementById("fN").value=" ";
                document.getElementById("lN").value=" ";
                document.getElementById("eM").value=" ";
                document.getElementById("pN").value=" ";
                document.getElementById("pS").value=" ";
                document.getElementById("cM").value=" ";
                location.href="Welcome.html";
            }
          }
          else{
              if(localStorage.user != null){
              arry = JSON.parse(localStorage.getItem("user"))
              };
              if(localStorage.regisetrMonths !=null){
                  chartRegisterPerMonth=JSON.parse(localStorage.getItem("registerMonths"))
                }
                var charts= chartRegisterPerMonth[myDate.getMonth()];

              charts.push(1);
              localStorage.setItem("registerMonths",JSON.stringify(chartRegisterPerMonth));
              arry.push(pass);
              sarry = JSON.stringify(arry);
              arry = JSON.stringify(ass);
              localStorage.setItem("user", sarry);
              localStorage.setItem("welcome",arry)
              document.getElementById("fN").value=" ";
              document.getElementById("lN").value=" ";
              document.getElementById("eM").value=" ";
              document.getElementById("pN").value=" ";
              document.getElementById("pS").value=" ";
              document.getElementById("cM").value=" ";
              location.href="Welcome.html"


          }
        }

      }