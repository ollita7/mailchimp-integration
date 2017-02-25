$(".sumbit-button").on("click",function(){
    var email = $(".email-input").val();
    if (!email){
        $(".error").css("display","block");
    }else{
        $(".error").css("display","none");
        add(email);
    }    
});

var apiKey = "5e6d7f8534685432bfbad401ee8ba178-us15";
var listId = "86286858af";

function add(email){
    var url = "https://us15.api.mailchimp.com/3.0/lists/" + listId + "/members/"
    var data = {
        "email_address": email,
        "status": "subscribed",
    }
    $.ajax({
        type: "POST",
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