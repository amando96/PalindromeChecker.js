var PalindromeChecker = function(){
};

PalindromeChecker.prototype = {
    check: function(str){
        str = str.replace(/\s/g, '').replace(/\W+/g, '').toLowerCase();
        reversed = str.split("").reverse().join("");
        if(str === reversed){                
            return true;
        } else {
             return false;   
        }
    }
}; 