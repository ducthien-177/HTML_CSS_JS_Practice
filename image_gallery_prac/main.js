var images = document.querySelectorAll('.image img')
var pre = document.querySelector('.previous')
var next = document.querySelector('.next')
var close = document.querySelector('.close-btn')
var curImg = document.querySelector('.gallery__inner img')
var gallery = document.querySelector('.gallery')

var curIndex = 0

images.forEach((item, index)=>{
    item.addEventListener('click', function(){
        curIndex = index
        curImg.src = this.src
        gallery.classList.add('show')
        
    })

    
})

close.addEventListener('click', function(){
    gallery.classList.remove('show')

})
next.addEventListener('click', function(){
    curIndex++
    if(curIndex < images.length){
        curImg.src = images[curIndex].src
    }   
})
pre.addEventListener('click', function(){
    curIndex--
    if(curIndex > 0){
        curImg.src = images[curIndex].src
    } 
})
