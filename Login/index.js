
var juser,jemail,jphone,err1,err2,err3;
function mylogin(){
  juser= document.getElementById('Full_Name');
  jemail= document.getElementById('Email');
  jphone= document.getElementById('Phone');
  err1 = document.getElementById('error1');
  err2 = document.getElementById('error2');
  err3 = document.getElementById('error3');


//   if(juser.value== "" || jemail.value== "" || jphone.value== ""){
//     alert('fill all records');
//   }

juser.addEventListener("click",()=>{
	err1.innerHTML="";
});
jemail.addEventListener("click",()=>{
	err2.innerHTML="";
});
jphone.addEventListener("click",()=>{
	err3.innerHTML="";
});

  if(juser.value==""){
	err1.innerHTML="required username!";
  }
  if(jemail.value==""){
	err2.innerHTML="required email!";
  }
  if(jphone.value==""){
	err3.innerHTML="required phone!";
  }

  else{
	if(jphone.value.length==10){
		alert('success')
	}
	
	else{
		alert('fill up valid phone no');
		
	
	}
  }
 
  

     
}