const donkeyGame = (amountOfTries) => {
    let tail = Math.floor(Math.random() * 10);
console.log(tail);
    let tries = 0;
    
        return function(guess){
            for(let i = 0; i<guess.length+1 ; ++i){
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
console.log(donkeyGame(5)([1,5,3,4,5]));
