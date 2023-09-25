let randomNumber = Math.floor((Math.random() * 10) + 1);
let count = 0;
console.log(randomNumber);

const handleSubmit = () => {
    console.log(randomNumber);
    count +=1;
    const value = document.getElementById("number").value
    const guesses = document.getElementById("guesses")
    guesses.value = count;
        if(value == randomNumber){
            const success = document.getElementById('success');
            success.innerHTML = "You Guess It Correct! You Are Winner 😊";
            guesses.value = 0;
    
        } else{
            const error = document.getElementById('error');
            error.style.display = "block"
            if(value == ""){
                error.innerHTML = "Please Enter the number, It can't be empty";
            }else if(value < randomNumber){
                error.innerHTML = "Please guess a larger number";
            } else{
                error.innerHTML = "Please guess a smaller number";
            }
            setTimeout(function(){
                error.style.display = "none"
            },3000,error)
        }
    }

document.querySelector('#submitBtn').addEventListener('click',handleSubmit);