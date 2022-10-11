/* Fill your code*/
function addPost() { 
    document.querySelector("#popupContact").style.display = "inherit"; 
  } 
  function postBlog() { 
    var title = document.querySelector("#title").value; 
    var description = document.querySelector("#detail").value; 
    console.log(title); 
    console.log(description); 
    document.querySelector("#popupContact").style.display = "none"; 
   
    var newPost = 
      '<br><div class="article-card" id="flashcard"><img src="assets/java card image.svg" alt=""><div class="card-text" id="card-text"><h1 id="blog-title">' + 
      title + 
      '</h1><p id="blog-description">' + 
      description + 
      '</p><p>Posted on</p></div><div class="card-buttons"><a><button type="button" id="edit">EDIT</button></a> <span>|</span><a ><button id="delete" onclick="deleteBlog()">DELETE</button></a></div></div>'; 
    document.querySelector(".body-div2").innerHTML += newPost; 
  } 
  function deleteBlog() { 
      document.querySelector(".body-div2").innerHTML = " "; 
  }