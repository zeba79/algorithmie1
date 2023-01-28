let giveMe = document.getElementById('giveUp');
console.log(giveMe.innerText);
giveMe.addEventListener('click', function(){
    // let greetings = document.getElementById('greet');
    let username = prompt("Quel est notre nom ?");
    let age = prompt("Quel est ton age ?");
    let civilite = prompt("Votre civilité");
    
    document.querySelector("#greet").innerHTML = `Bonjour , ${civilite} ${username} , vous avez ${age} ans !`

})

// 