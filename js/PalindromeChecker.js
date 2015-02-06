;(function(){
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
    
    var checker = new PalindromeChecker();
    var test = [
        'A but tuba.',
        'A car, a man, a maraca.',
        'A dog, a plan, a canal: pagoda.',
        'A dog! A panic in a pagoda!',
        'A lad named E. Mandala',
        'A man, a plan, a canal: Panama.',
        'A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!',
        'A new order began, a more Roman age bred Rowena.',
        'A nut for a jar of tuna.',
        'A Santa at Nasa.',
        'Not a palindrome!'
    ];
    for(var i = 0; i < test.length; i++){
        result = checker.check(test[i]);
        document.getElementById('results').innerHTML += '<li class="'+result+'">'+test[i]+': '+result+'</li>';
    }
    
})();