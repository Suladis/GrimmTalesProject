// Sample stories data
var stories = [
  {
    "id": 1,
    "title": "The Frog King",
    "story_path": "/stories/tales/frogKing.txt",
    "bg_image": "/stories/talesbg/frogking.jpg"
  },
  {
    "id": 2,
    "title": "Cinderella",
    "story_path": "/stories/tales/cinderella.txt",
    "bg_image": "/stories/talesbg/frogking.jpg"
  },
  {
    "id": 3,
    "title": "Snow White",
    "story_path": "/stories/tales/snow.txt",
    "bg_image": "/stories/talesbg/frogking.jpg"
  },
  {
    "id": 4,
    "title": "Grandfather Death",
    "story_path": "/stories/tales/death.txt",
    "bg_image": "/stories/talesbg/frogking.jpg"
  },
  {
    "id": 5,
    "title": "Little Red Riding Hood",
    "story_path": "/stories/tales/littlered.txt",
    "bg_image": "/stories/talesbg/frogking.jpg"
  },
  {
    "id": 6,
    "title": "The Cat and the Mouse",
    "story_path": "/stories/tales/catandmouse.txt",
    "bg_image": "/stories/talesbg/frogking.jpg"
  }
];

function storypop(value) {
  document.getElementById("storyid").style.display = "block";
  writeStory(value);
}

function closeStoryPop() {
  document.getElementById("storyid").style.display = "none";
}

function writeStory(value) {
  // Find story by the Id passed
  var story = stories.find(s => s.id === value);

  if (story) {
    console.log("Story found:", story);

    // Set title
    var titleElement = document.getElementById("storyname");
    if (titleElement) {
      titleElement.innerHTML = "<h1>" + story.title + "</h1>";
    } else {
      console.error("Title element not found");
    }

    // Fetch and set story content using AJAX
    var storyboxElement = document.getElementById("storybox");
    if (storyboxElement) {
      fetch(story.story_path)
        .then(response => response.text())
        .then(function contentToHtml(text) {
          return text
            .split('\n\n')
            .map(paragraph =>  `<p>${paragraph}</p>`)
            .join('\n')
        }
        )
        .then(content => {
          
          storyboxElement.innerHTML = content ;
        })
        .catch(error => console.error("Error fetching story:", error));
    } else {
      console.error("Storybox element not found");
    }

    // Set background image
    var storyidElement = document.getElementById("storyid");
    if (storyidElement) {
      storyidElement.style.backgroundImage = "url('" + story.bg_image + "')";
    } else {
      console.error("Storyid element not found");
    }
  } else {
    console.error("Story not found for id:", value);
  }
}
