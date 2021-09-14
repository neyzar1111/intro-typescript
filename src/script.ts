console.log("Hi typescript!");

(function() {
    document.getElementById('guess-form')!.addEventListener("submit", compareUserGuess);

    function compareUserGuess (event: Event) {
        event.preventDefault();

        const secretNumber:number = generateSecretNumber();
        const userNumber = document.querySelector('#guess') as HTMLInputElement;

        const userGuess = userNumber.valueAsNumber;
        if (secretNumber == userGuess) {
            alert("Awesome! You number " + userNumber + " was correct. You can be named many things, hungry not being one of them.");
        } else {
            alert("Bummer... You guessed " + userNumber + " and the secret number was " + secretNumber + ".");
        }
    }

    function generateSecretNumber() {
        const secretNumber = getRandomArbitrary(1, 22);

        return secretNumber;
    }

    function getRandomArbitrary(min:number, max:number) {
        return Math.round(Math.random() * (max - min) + min);
    }
})();
