function ready() {
    let socket = io();

    document.getElementById('sendMessage').onclick = () =>
        emitMessage(socket,document.getElementById('commingMessage').value);

    document.getElementById('commingMessage').onkeydown = (e) => {
        if(e.keyCode==13)
        emitMessage(socket,e.target.value);
    };

    listenMessage(socket);
}

function emitMessage(source,message){
    if(message!="") source.emit('new message', message);
} 

function listenMessage(destination){
    let messsagePosition='right';

    destination.on('new message', (commingMessage) => {
        let node = document.createElement("div");                 // Create a <li> node
        let textnode = document.createTextNode(commingMessage);         // Create a text node
        node.appendChild(textnode); 
        
        messsagePosition = (messsagePosition=='left')?'right':'left';  
        node.setAttribute('class','message '+messsagePosition)                           // Append the text to <li>
        document.getElementById('conversation__area').appendChild(node);
        document.getElementById('commingMessage').value = '';
    });
}

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