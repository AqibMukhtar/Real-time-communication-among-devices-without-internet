function ready() {
    let socket = io();
    console.log(socket);

    document.getElementById('sendMessage').onclick = function () {
        socket.emit('new message', document.getElementById('commingMessage').value);
    };

    socket.on('new message', function (commingMessage) {
        let node = document.createElement("H1");                 // Create a <li> node
        let textnode = document.createTextNode(commingMessage);         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.body.appendChild(node);
        document.getElementById('commingMessage').value = '';
    })

};

/*$('#sendMessage').click(() => {
    socket.emit('new message', $('#commingMessage').val());
})*/

/*socket.on('new message', (commingMessage) => {
    $('#messages').append('<div class="oldmessages">' + commingMessage + '</div>');
    $('#commingMessage').val('');
})*/

/*<div>
<div id = 'messages'>
  <div class="oldmessages">Hello</div>
  <div class="oldmessages">Hey</div>
  <div class="oldmessages">WhatsUP</div>
  <div class="oldmessages">NotjingDOWN</div>
</div>*/

/*#newMessage {
    position: fixed;
    bottom: 0;
    width: 100%;
}*/