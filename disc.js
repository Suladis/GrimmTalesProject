document.addEventListener("DOMContentLoaded", function(){
    $.ajax({
        type: "Get",
        url: "formData.json",
        dataType: "json",
        success: function(data) {
    
        },
        error: function(){
            alert("json not found");
        }
    });
});