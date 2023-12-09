document.addEventListener("DOMContentLoaded", function(){
  $.ajax({
      type: "GET",
      url: "/discData.json",
      dataType: "json",
      success: function(data) {

          data.discData.forEach(function (entry) {
              var html = '<div>';
              html += '<p>Name: ' + entry.user + '</p>';
              html += '<p>Comments: ' + entry.usercomments + '</p>';
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



function subCom() {
    var user = document.getElementsByName('name')[0].value;
    var usercomments = document.getElementsByName('usercomments')[0].value;
  
    // Form data
    var discData = {
      user: user,
      usercomments: usercomments
    };
  
    $.ajax({
      type: "POST",
      url: "/discData.json",  // Location of the file for the form to be saved
      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify(discData),
      success: function(response) {
        console.log("Data successfully appended:", response);
      },
      error: function(error) {
        console.error("Error appending data:", error);
      }
    });
  
    // Clear form fields
    document.getElementsByName('name')[0].value = "";
    document.getElementsByName('usercomments')[0].value = "";
    location.reload();

  }
  
  