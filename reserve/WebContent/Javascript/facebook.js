
window.fbAsyncInit = function() {
                FB.init({appId: '420540321292410', status: true, cookie: true, xfbml: true});
 
                /* All the events registered */
                FB.Event.subscribe('auth.login', function(response) {
                    // do something with response
                    login();
                    console.log("something called login");
                });
                FB.Event.subscribe('auth.logout', function(response) {
                    // do something with response
                    logout();
                    console.log("something called logout");
        
                });
                

                
                FB.getLoginStatus(function(response) {
                    if (response.session) {
                    	login();
                    console.log("something called login for sure");
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

  

            function login(){
                FB.api('/me', function(response) {
                    localStorage.setItem('login',response.name);
                    console.log("LOGIN: response.name: "+ response.name+" |localStorage.getItem('login'): " +localStorage.getItem('login'));
                });
            }
            function logout(){
            	FB.api('/me', function(response) {
                    localStorage.setItem('logout',response.name);
                    console.log("LOGOUT: response.name: "+ response.name+" |localStorage.getItem('logout'): " +localStorage.getItem('logout'));
 
                });
            }
 


 