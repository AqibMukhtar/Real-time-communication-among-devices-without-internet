function ready() {
    let socket = io();
    console.log(socket);
    let commingMessage = document.getElementById('commingMessage');
    let username = document.getElementById('username');


    document.getElementById('sendMessage').onclick = function() {
        if (username.value.length > 0 && commingMessage.value.length > 0) {
            socket.emit('new message', (username.value + ': ' + commingMessage.value));
        }
    };



    socket.on('new message', function(commingMessage) {
        let node = document.createElement("H3"); // Create a <li> node
        let textnode = document.createTextNode(commingMessage); // Create a text node
        node.appendChild(textnode); // Append the text to <li>
        document.body.appendChild(node);
        commingMessage.value = '';
    })

};