// project details
function save(){

    // check for blank input value
       var errormessage = "";
       
       if (document.getElementById('projectName').value=="") {
           errormessage += "Enter the project name...\n";
           document.getElementById('pprojectName').style.borderColor = "red";
       }
       if (document.getElementById('discription').value=="") {
           errormessage += "Enter the project description...\n";
           document.getElementById('discription').style.borderColor = "red";
       }
       if (document.getElementById('projectNum').value=="") {
        errormessage += "Enter the projectNum description...\n";
        document.getElementById('projectNum');
        }
       if (document.getElementById('date').value=="") {
           errormessage += "Enter the project date...\n";
           document.getElementById('date');
       }
       if (errormessage != "") {
           alert(errormessage);
           return false;
       }
   
       confirm('you are about to save your project details. Are you sure you fill the form as you desire? if so press OK!!');
   

       for (let i = 0; i<localStorage.length; i++){
        const projectNa = localStorage.key(i);
        const projectNu = localStorage.getItem(projectNa);
       }


   // set project input into local storage
       var Name = document.getElementById('projectName').value;
       var Num =document.getElementById('projectNum').value;
       var prodate = document.getElementById('discription').value;
       var date = document.getElementById('date').value;
   
       localStorage.setItem('projectName',Name);
       localStorage.setItem('discription',prodate);
       localStorage.setItem('date',date);
       localStorage.setItem('projectNum',Num);
   
   alert(' press on the link CLICK HERE to see the detales');
    
   }
   
   function load(){
       var storeV = localStorage.getItem('projectName');
       var storeV = localStorage.getItem('Num');
       var storeV = localStorage.getItem('discription');
       var storeV = localStorage.getItem('date');
   }


function clean(){
   
      confirm('This action will clear projects details in you localstorage;  Do u want to continue?');
   
       localStorage.removeItem('projectName');
       localStorage.removeItem('Num');
        localStorage.removeItem('discription');
        localStorage.removeItem('date');
}