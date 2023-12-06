function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function submitForm() {
  var email = document.getElementsByName('email')[0].value;
  var storyName = document.getElementsByName('storyname')[0].value;
  var comments = document.getElementsByName('comments')[0].value;

  console.log("Email:", email);
  console.log("Story Name:", storyName);
  console.log("Comments:", comments);

  // Create an object with the form data
  var formData = {
    email: email,
    storyName: storyName,
    comments: comments
  };

  $.ajax({
    type: "POST",
    url: "/formData.json",  // Location of the file for the form to be saved
    contentType: "application/json",
    data: JSON.stringify(formData),
    success: function(response) {
      console.log("Data successfully appended:", response);
    },
    error: function(error) {
      console.error("Error appending data:", error);
    }
  });
  closeForm();
  
}
