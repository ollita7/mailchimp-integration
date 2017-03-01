var apiKey = "60da41639943e316dbb98f4aa";
var listId = "86286858af";

function add(email){

    var url = "https://cavepot.us15.list-manage.com/subscribe/post-json";
    var data = {
        "b_email": email,
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