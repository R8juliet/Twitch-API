var endPoint = "https://wind-bow.gomix.me/twitch-api/streams/";
user = ["imaqtpie", "asmongold", "towelliee", "sypherpk"];

user.forEach(function(element) {
    var url = endPoint + element;
    $.getJSON(url, function(json) {
        if (json.stream === null) {
            $("#apiData").append("offline" +
                "</br>");
        } else {
            $("#apiData").prepend(json.stream.channel.display_name + "</br>");
        }
    })
});
