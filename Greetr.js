/* Greetr.js */

(function (global, $) {
    
    var Greetr = function(firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language);
    }
    
    // variables that are needed in the library but are not exposed to the outside world can be declared like this.
    var supportedLangs = ['en', 'es'];
    
    // kept as objects instead of arrays so as to access them as name-value pair.
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };
    
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos',
    };
    
    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    }
    
    // This object will hold the properties of the Greetr object, and is equal to function constructor's prototype property.
    Greetr.prototype = {};
    
    // the function constructor that constructs the Greetr object
    Greetr.init = function(firstname, lastname, language){
        
        var self=this;
        
        // setup default values for firstname, lastname, language.
        self.firstname = firstname || '';
        self.lastname = lastname || '';
        self.language = language || 'en';
        
    }
    
    // the prototype of the function constructor (Greetr.init) has been assigned the object Greetr.prototype.
    Greetr.init.prototype = Greetr.prototype;
    
    // exposed Greetr to global object, and also gave it an alias.
    global.Greetr = global.G$ = Greetr;
    
}(window, jQuery));