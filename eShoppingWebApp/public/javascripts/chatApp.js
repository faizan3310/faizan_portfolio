


var socket = io("http://localhost:8080");
// socket.close();

socket.on("receive_msg", (data) => {
    console.log("data received" + data);
    addMsgToContainer(data, 'receive');
});
var sendMsg = () => {
    var msg = $("#userMsg").val();
    $("#userMsg").val('');
    addMsgToContainer(msg, 'send');

    socket.emit("user_send_Msg", msg);
    
}



var addMsgToContainer = (msg, type) => {
    if (type == 'send') {
        var divTag = $("<div CLASS='sendMsg'/>").text(msg);
        $(".msgBlock").append(divTag);
    } else { // receive
        var divTag = $("<div CLASS='receiveMsg'/>").text(msg);
        $(".msgBlock").append(divTag);
    }
}