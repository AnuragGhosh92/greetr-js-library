// On Click event handler on the login button.
$('#login').click(function() {
    
    // assuming we know the username and password, we create the greetr object first (the architecture allows us to not have to use the 'new' keyword here).
    var g = G$('John', 'Snow');
    
    // hide the login on the screen
    $('#logindiv').hide();
    
    // fetch the selected language
    var lang = $( "#lang" ).val();
    
    // set the language and pass in the jquery selector to fill the html with the greeting using our framework and log it as well with the help of chainable methods in the Greetr library.
    g.setLang(lang).HTMLGreeting('#greeting', true).log();
});

//g.greet().setLang('es').greet(true).log();