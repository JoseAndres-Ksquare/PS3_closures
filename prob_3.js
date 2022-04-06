const donkeyGame = (amountOfTries) => {
    let tail = 5;
    let tries = 0;
    
        return function(guess){
            for(let i = 0; i<guess.length ; ++i){
            if(tries === amountOfTries){
                return 'You have no tries left';
            }else{
                if(guess[i] === tail){
                    tries = ++tries
                    return 'You hit the mark!';
        
                }else if(guess[i]<tail){
                    tries = ++tries
                    console.log('The tail is above');
                    
                }else if(guess[i]>tail){
                    tries = ++tries;
                    console.log('The tail is below'); 
                }
            }
        }
        return "you didn't find the number";
    }
}
console.log(donkeyGame(7)([1,2,4,3,6]));


