//CONFIGRATION
var apiKey = "dabfeedff1bba431fef17fcc1"; //"60da41639943e316dbb98f4aa"
var listId = "44b406e72f"//"86286858af"; //
var url = "http://www.iscalegreenapp.com";
var hashtags = "iscalegreenapp, neonroots";
var text = "Crazy new app that let's you weigh your weed?!";
var via = "iscalegreenapp";
var urlMailchimp = "https://neonroots.us4.list-manage.com/subscribe/post-json";
(function () {
    $(".sumbit-button").on("click",function(){
        var email = $(".email-input").val();
        if (!email){
            $(".error").css("display","block");
        }else{
            $(".error").css("display","none");
            add(email, function(){
                $(".email-input").val("");
                $("#shareModal").modal(function(){
                    $("#twitter").attr("src", $("#twitter").attr("src"));
                });
            });
        }
    });
    initSocial();
})()

function initSocial(){
    var fb = $("#facebook");
    var twitter = $("#twitter");

    //FB changes
    var fb_href = $("#facebook").attr("src").replace(/#URL/g, url);
    $("#facebook").attr("src", fb_href);

    //twitter chages
    var twitter_src = $("#twitter").attr("href").replace(/#URL/g, url);
    twitter_src = twitter_src.replace(/#HASHTAGS/g, hashtags);
    twitter_src = twitter_src.replace(/#TEXT/g, text);
    twitter_src = twitter_src.replace(/#VIA/g, via);
    $("#twitter").attr("href", twitter_src);
}

function add(email, callback){
    var data = {
        "EMAIL": email,
        "u": apiKey,
        "id": listId
    }
    $.ajax({
        type: "POST",
        dataType: "jsonp",
        jsonp: "c", // trigger MailChimp to return a JSONP response
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Basic " + btoa(":" + apiKey));
        },
        url: urlMailchimp,
        data: data,
        success: function(msg) {
            if(msg.result === "success"){

            }
            if (callback != undefined) callback();
        }
    });
}

var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;

  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.bg').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();