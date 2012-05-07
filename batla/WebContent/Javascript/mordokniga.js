var loggout;
var loggin;
newGameControl();
var one=1;
var zeroNull=0;


window.fbAsyncInit = function() {
                FB.init({appId: '420540321292410', status: true, cookie: true, xfbml: true});
 
                /* All the events registered */
                FB.Event.subscribe('auth.login', function(response) {
                    // do something with response
                    login();
                });
                FB.Event.subscribe('auth.logout', function(response) {
                    // do something with response
                    logout();
        
                });
                

                
                FB.getLoginStatus(function(response) {
                    if (response.session) {
                    	login();
                    }
                });
            };
            
            (function() {
                var e = document.createElement('script');
                e.type = 'text/javascript';
                e.src = document.location.protocol +
                    '//connect.facebook.net/en_US/all.js';
                e.async = true;
                document.getElementById('fb-root').appendChild(e);
            }());
            
            function newGameControl(){
            	
            	if(localStorage.getItem('checkiflogged')=='1'){
                	document.getElementById("newgame").style.visibility = "visible";
                	
                }
            	
            	 if(loggout != "undefined" && typeof loggout!="undefined"){
                 	document.getElementById("newgame").style.visibility = "visible";

                 	
                 } 
             	 
             	 if(loggout == "undefined"){
                  	document.getElementById("newgame").style.visibility = "hidden";

                  	
                  } 
             	 

            	 
            }
            
            
            function loginBoolenGiveValue(){
            	localStorage.setItem('checkiflogged',one);
            }
            
            function loginBoolenDeleteValue(){
            	localStorage.setItem('checkiflogged',zeroNull);
            }
            
  

            function login(){
                FB.api('/me', function(response) {
                	loginBoolenGiveValue();
                    localStorage.setItem('login',response.name);
                    loggin = localStorage.getItem('login');
                    newGameControl();
                });
            }
            function logout(){
            	FB.api('/me', function(response) {
            		loginBoolenDeleteValue();
                    localStorage.setItem('logout',response.name);
                    loggout = localStorage.getItem('logout');
                    newGameControl();   
                    
                });
            }
 


 