const socket = io("http://localhost:8081/");

var getUserMsg = () => {
    var msg = $("#userMsg").val();
    socket.emit("user_sendMsg", msg);
    showMsg(msg, 'send');
    $("#userMsg").val('');
}

socket.on("user_receiveMsg", (data) => {
    console.log("received msg");
    console.log(data)
    showMsg(data, 'receive');
})
// socket.emit("userMsg", "hello every one")

var showMsg = (msg, type) => {
    var divTag = $("<div/>").text(msg);
    switch(type) {
        case 'send':
            divTag.addClass("sendMsg");
            break;
        case 'receive':
            divTag.addClass("receiveMsg");
            break;
    }
    $(".msgContainer").append(divTag);
}