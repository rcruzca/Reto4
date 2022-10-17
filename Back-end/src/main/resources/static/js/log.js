$.get("/user", function(data) {        
    $("#user").html(data.name);
    $(".unauthenticated").hide()
    $(".authenticated").show()
});
var logout = function() {   
    $.post("/logout", function() {
        $("#user").html('');
        $(".unauthenticated").show();
        $(".authenticated").hide();
    })
    return true;
}
