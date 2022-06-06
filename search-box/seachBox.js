var searchBtn = document.querySelector('.search-box button')
var searchInput = document.querySelector('.search-box input')

searchBtn.addEventListener('click', function(){
    this.parentElement.classList.toggle('open')
    document.querySelector('.search-box input').focus()
})

searchInput.addEventListener("keypress", function(event){
    if(event.key == "Enter"){
        // search by google 
        window.location='http://www.google.com/search?q='+ this.value;
    }
})


