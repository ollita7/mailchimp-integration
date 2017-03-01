(function () {
    $(".sumbit-button").on("click",function(){
        var email = $(".email-input").val();
        if (!email){
            $(".error").css("display","block");
        }else{
            $(".error").css("display","none");
            add(email);
            $("#shareModal").modal();
        }
    });
})()

var apiKey = "60da41639943e316dbb98f4aa";
var listId = "86286858af";

function add(email){
    var url = "https://cavepot.us15.list-manage.com/subscribe/post-json";
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
        url: url,
        data: data,
        success: function(msg) {
            console.log(msg);
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