const gtForm = document.getElementById("formf");




gtForm.addEventListener("submit",function(event){


    gtForm.event.preventDefault();
   
    var pname = gtForm.name.value;
    var pnum = gtForm.num.value;
    var description = gtForm.discript.value;
    var pdate = new date(gtForm.date.value);

    let arry = [pname, pnum, description, pdate];

    localStorage.setItem("1",arry);

    var display = document.getElementById("display");
    var links = document.createElement("A");

    links.setAttribute("href","project.html");
    links.setAttribute("class", "link");
    var project = document.createTextNode(name);
    link.appendChild(project);
    display.appendChild(links);
    gtForm.reset();
});

// form 2

function show(){
    
       confirm('you are about to save your work exprience details. Are you sure you fill it as you desire? if so press OK!!');
    
    //set work exprience input	
        var workT = document.getElementById('wname').value;
        var workd = document.getElementById('wdescription').value;
        var workDate = document.getElementById('wdateline').value;
    
        localStorage.setItem('wname',workT);
        localStorage.setItem('wdescription', workd);
        localStorage.setItem('wdateline',workDate);
    alert('you have successfully to save your work exprience details if you want to access it press on the link CLICK HERE TO SEE THE DETAILS');
    
    }
    //get the work exprience input
    function work(){
        var storedValue = localStorage.getItem('wname');
        var storedValue = localStorage.getItem('wdescription');
        var storedValue = localStorage.getItem('wdateline');
    }
    //it will going to clear all work exprience localstorage
    function cleared(){
         confirm('This action will going to clear your work exprience you stored;  Do u want to continue?')
    
        localStorage.removeItem('wname');
        localStorage.removeItem('wdescription');
        localStorage.removeItem('wdateline');
    }