

const generateQuote = () =>{
    let wordBanks = ['fall','die','eat','run','sleep'];
    let firstWord = '';
    let secondWord = '';

        if(firstWord == ''){
            randomIndex = Math.floor(Math.random() * wordBanks.length);
            currentWord = wordBanks[randomIndex];
            firstWord = currentWord;  
            wordBanks.splice(randomIndex,1);
        }
        
        if(secondWord == ''){
            randomIndex = Math.floor(Math.random() * wordBanks.length);
            currentWord = wordBanks[randomIndex];
            secondWord = currentWord;   
            wordBanks.splice(randomIndex,1);
        }

        return `Why do we ${firstWord}, Bruce? So that we can learn to ${secondWord}.`;

}

console.log(generateQuote());