

function getClass() {
    var r=document.getElementById("btn");
    alert(r.classList);
   

    r.classList.add("myClass");
}
function getClass1() {
    var r1=document.getElementById("btn1");
    

    r1.classList.toggle("myClass1");// add,remove,toggle
}
function getClass2() {
    var r2=document.getElementById("btn2");
    

    document.write(r2.classList.contains("myClass1"));
}

function getClass3() {
    var r=document.getElementById("btn3");
    

    r.classList.replace("myClass3","myClass4");
}

function msg1() {
    var r5=document.querySelector("h4");
    alert(r5.classList.item(2));
}

function validateform() {
    var name=document.myform.name.value;
    var password=document.myform.password.value;

    if(name==null || name=="") {
        alert("Name can't be blank");
        return false;
    }
    else if(password.length<6){
        alert("Password must be at least 6 characters long.");
        return false;
    }
}

// clicks
function DeleteClick() {
    alert("Record deleted successfully");
    confirm("are you sure you want to delete");
}
function ConfirmClick() {
    
    confirm("are you sure you want to delete");
}

function ConfirmClick2() {
    
   if(confirm("are you sure you want to delete?")==true){
    document.write("Record deleted");
   }
   else {
    alert("You cancelled...");
   }
}
// create folder
function msg() {
   folderName= prompt("Enter folder name");

   if(folderName==null){
    document.write("You cancelled");
   }
   else if(folderName==""){
    document.write("Please provide floder name...")
   }
   else{
    document.querySelector("h2").innerHTML="Folder Created:" +folderName ;
 }
}
   

function verifyClick() {
     var username=document.getElementById("txtName").value;
     var msg=document.getElementById("msg");

     if(username.length>=4 && username.length<=10) {
        msg.innerHTML="User name verified".bold().fontcolor('blue').italics();
     }
     else {
        msg.innerHTML="Invalid -user name- user name must be 4- 10 chars only".italics().fontcolor('purple');
     }
}

function changeCase() {
    var username=document.getElementById("txtName").value;
    document.getElementById("txtName").value=username.toUpperCase();
}


// font color

function changeColor() {
    alert(document.querySelector("select").value);

     document.querySelector("h5").innerHTML="Hello guys!".fontcolor(document.querySelector("select").value);
}