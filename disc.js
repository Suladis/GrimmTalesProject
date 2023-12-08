document.addEventListener("DOMContentLoaded", function(){
    $.ajax({
        type: "GET",
        url: "formData.json",
        dataType: "json",
        success: function(data) {
            data.formData.forEach(function (entry) {
                var html = '<div>';
                html += '<p>Email: ' + entry.email + '</p>';
                html += '<p>Story Name: ' + entry.storyName + '</p>';
                html += '<p>Comments: ' + entry.comments + '</p>';
                html += '</div><hr>';
                
                // Append the data to the container
                $('.container').append(html);
              });
    
        },
        error: function(){
            alert("json not found");
        }
    });

});