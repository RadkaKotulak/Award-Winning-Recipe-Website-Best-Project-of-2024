function search_recipe() {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('recipes');

  for (i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display = "none";
      } else {
          x[i].style.display = "list-item";
      }
  }
}

function toggleRecipeList() {
  var recipeList = document.getElementById("recipeList");
  if (recipeList.style.display === "none" || recipeList.style.display === "") {
      recipeList.style.display = "block";
  } else {
      recipeList.style.display = "none";
  }
}

//https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/<---- REFERENCE 