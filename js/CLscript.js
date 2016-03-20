
//CL scripts

//<!-- inicialización -->
		
var DESARROLLO=false;
var registro=[];
var env;		
var customerId  =  env.customerId;
var projectId   =  env.projectId;
var packId      =  env.packId;
var id          =  env.Id;
var eMail;		
var password;  
	  
	  // Autenticación
	   
	   function userAuth(customerId,projectId,packId,id,eMail,password){
	    

		var cmsURL;
		 
				var cmsRead=function(cmsURL){
					$.get(cmsURL, function(htmlexterno)
						{

							if (htmlexterno=="usrLoginOK"){
								//alert("El servicio autorizó la operación");

								return true;
								}
						    else {
						    	  //alert("El servicio web no autoriza la operación "+htmlexterno);
						    	  return false;
						    	 };
							         
						});
						
					};
				


				cmsURL="http://localhost:7070/usrLogin?customerid="+customerId+"&projectId="+projectId+"&packId="+packId+"&id="+id+"&email="+eMail+"&password="+password;  //ToDo: cambiar en PRO
				//alert('before cmsRead');
				cmsRead(cmsURL);
				//alert('after cmsRead');

     };


	 function submitLogin(){
			//Entrar a tuZona
	 		//Datos de login a la barra de navegación
			var frm = document.forms["navForm"];
			eMail = frm.eMail.value;
			password = frm.password.value;
			
			if (userAuth(env.customerId,env.projectId,env.packId,env.id,eMail,password)==true){
				document.location="./tuZona.html";
			}
			else alert('Acceso no permitido');

	 };


