/* Greetr.js */

(function (global, $) {
    
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
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
    Greetr.prototype = {
        
        fullName : function() {
            return this.firstName + ' ' + this.lastName;
        },
        
        validate : function() { 
            if(supportedLangs.indexOf(this.language) === -1){
                throw 'Invalid Language requested';
            }
        },
        
        greeting : function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },
        
        greet: function(formal) { 
            var msg;
            
            if(formal){
                msg = this.formalGreeting();
            }else{
                msg = this.greeting();
            }
            
            if(console){
                console.log(msg);
            }
            
            // 'this' refers to the calling object at execution time. Returning it back makes the method chainable
            return this;
        },
        
        log: function() {
            if(console){
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }
        },
        
        setLang: function(lang) {
            if(lang){
                this.language = lang;
                this.validate();
            }
            return this;
        }
    };
    
    // the function constructor that constructs the Greetr object
    Greetr.init = function(firstName, lastName, language){
        
        var self=this;
        
        // setup default values for firstname, lastname, language.
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
        
    }
    
    // the prototype of the function constructor (Greetr.init) has been assigned the object Greetr.prototype.
    Greetr.init.prototype = Greetr.prototype;
    
    // exposed Greetr to global object, and also gave it an alias.
    global.Greetr = global.G$ = Greetr;
    
}(window, jQuery));