var username = "";

function ready() {
    while(username.length === 0)
    {
        username = prompt('Enter username');
    }
    let socket = io();
    console.log(socket);
    let commingMessage = document.getElementById('commingMessage');


    document.getElementById('sendMessage').onclick = function() {
        if (commingMessage.value.length > 0) {
            socket.emit('new message', (username + ': ' + commingMessage.value));
            commingMessage.value = "";
        }
    };



    socket.on('new message', function(commingMessage) {
        let node = document.createElement("h4"); // Create a <li> node
        let textnode = document.createTextNode(commingMessage); // Create a text node
        node.appendChild(textnode); // Append the text to <li>
        document.body.appendChild(node);
        commingMessage.value = '';
    })

};