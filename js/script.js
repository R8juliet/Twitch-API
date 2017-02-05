var streamEP = "https://wind-bow.gomix.me/twitch-api/streams/";
var channelEP = "https://wind-bow.gomix.me/twitch-api/channels/";
user = [
    "imaqtpie",
    "asmongold",
    "towelliee",
    "sypherpk",
    "ESL_SC2",
    "OgamingSC2",
    "cretetion",
    "freecodecamp",
];
$(document).ready(function() {
    user.forEach(function(element) {
        let streamUrl = streamEP + element;
        let channelUrl = channelEP + element;
        $.getJSON(streamUrl, function(json) {
            if (json.stream === null) {
                $("#offline").append("<p id="+element+" class ='well'>offline</p>");
            } else {
                $("#online").append("<p id="+element+" class = 'well'>" + json.stream.channel.display_name + "</p>");
            }
        })


        var image = $.getJSON(channelUrl, function(json) {

          $("#"+element).prepend("<img src="+json.logo+">").delay(1000, 'image')
        })
    });
});
