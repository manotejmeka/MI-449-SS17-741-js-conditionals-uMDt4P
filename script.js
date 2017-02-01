var AGE = null
var RND = null
var GUESS = 0

function promptDisplay(text,action){
    var name = prompt(text)

    if (name != null) {
        actions(action,name.trim())
    }else{
        promptDisplay(text,action)
    }
}

function confimName(text){
    var r = confirm("Can I call you "+text);
    if (r == true) {
        alert("Please tell me a little more about your self.")
        promptDisplay("How old are you?","age")
    } else {
        promptDisplay("Please enter your name!","name")
    }
}

function age(value){
    var numb = parseInt(value)
    if(numb < 29){
        alert("Your in your prime time.")
    } else if( numb < 50){
        alert("$$$ in the bank!")
    } else{
        alert("Golden Years!")
    }
    AGE = value
    alert("Now guess a random number from 1 to "+numb)
    
}

function actions(text,value){
    if(text=="name"){
        confimName(value)
    }else if(text=="age"){
        age(value)
        RND = getRandomInt(1,AGE)
        promptDisplay("Enter your guess number","guess")
        
    }else if("guess"){
        guessNumber(parseInt(value))
    }
}

function guessNumber(value){
    if (value == RND){
        alert("Finally you got it!")
        return
    }else if(GUESS == 5){
        GIVEUP = true    
    }else if(GUESS >= 5 && GIVEUP){
        alert("Haha you gave up. Your number is "+RND+"\
        Hint hint if your age is smaller is it is easier to guess")
        return
    }
    GUESS = GUESS + 1
    alert("Infinit loop till you get it")
    promptDisplay("Enter your guess number","guess")

    
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
promptDisplay("Please enter your name!","name")
