


let sendNL = function (callback){
    const message = "https://jsonplaceholder.typicode.com/users"
    let req = new XMLHttpRequest();
    //req.open('GET', message, true);

    req.onreadystatechange = function() {
        if(req.readyState == 4 && req.status == 200){
            let users = JSON.parse(req.response);
            //return callback(users[0]);
            callback(users[Math.floor((Math.random() * 10) + 1)])

        }
       // let users = JSON.parse(req.response);
        //callback(users[0]);
        //return users;
       //console.log(users[0], 'this is users[0]');
       //return users[0];
    }

    req.open('GET', message, true);
    req.send();

    console.log('the req: ', req);
    //console.log(' the return of the onload ', users[0]);
    //return users[0];


};

function responseFromBot(outputMessage) {
    let response = document.getElementById('botOutput');
    response.innerHTML = outputMessage.name;

}

//sendNL(responseFromBot);

function messageGenerator(){
    sendNL(responseFromBot);
}
//let response = document.getElementById('botOutput');

//let apiCall = sendNL("https://jsonplaceholder.typicode.com/users");
/* sendNL("https://jsonplaceholder.typicode.com/users", function(tResponse){
    let response = document.getElementById('botOutput');
    response.innerHTML = tResponse.name;
});

//console.log(typeof apiCall, 'this is apicall');
//console.log(apiCall);
//response.innerHTML = apiCall.name;

*/





// Actions
//document.getElementById('sendButton').onclick = sendNL(responseFromBot)


/*

document.getElementById('sendButton').onclick = function changeText(){
    let response = document.getElementById('botOutput');
    response.innerHTML = 'hi bitch';
}
*/