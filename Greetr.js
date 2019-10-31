/* Greetr.js */

(function (global, $) {
    
    var Greetr = function(firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language);
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