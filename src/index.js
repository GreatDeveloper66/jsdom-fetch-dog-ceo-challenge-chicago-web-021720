

document.addEventListener('DOMContentLoaded',() => {
  function printImages(message){
    message.forEach(function(image){
      const img = document.createElement("IMG");
      img.src = image;
      document.getElementById('dog-image-container').appendChild(img);
    });
  }

  function printBreeds(message){
    for(let breed in message){
      let item = document.createElement("LI");
      item.innerHTML = breed;
      item.addEventListener('click', function(){
        this.style.color="red";
      });
      document.getElementById('dog-breeds').appendChild(item);

    }
  }
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const imgUrl2 = "https://dog.ceo/api/breeds/list/all";
  fetch(imgUrl)
    .then(data => data.json())
    .then(json => printImages(json.message));
function getDogs(){
  fetch(imgUrl2)
    .then(data => data.json())
    .then(json => printBreeds(json.message));
}
getDogs();

  document.getElementById('breed-dropdown').addEventListener('change',function(){


    let dogBreeds = Array.from(document.getElementById('dog-breeds').children);
    dogBreeds.forEach(child => child.style.display="default");
    dogBreeds.forEach(function(child){
      if(child.textContent.startsWith(document.getElementById('breed-dropdown').value)){
        child.style.display="block";
      }
      else {
        child.style.display="none";
      }
    });
    let newlist = document.getElementById('dog-breeds').map(function(child){
      '<li>' + child.textContent + '</li>';
    });
    document.getElementById('dog-breeds').innerHTML = newlist;
  });
});
