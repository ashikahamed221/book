var popupoverlay=document.querySelector('.popup-overlay')
var popbox=document.querySelector('.pop-box')
var addpopup=document.getElementById('add-popup')

addpopup.addEventListener("click",function(){
     popupoverlay.style.display="block"
     popbox.style.display="block" 
})


var cancelpopup=document.getElementById('cancel-popup')

cancelpopup.addEventListener("click",function(event){
      event.preventDefault()
      popupoverlay.style.display="none"
      popbox.style.display="none" 
})

//select book container,add-book,select book-title,book aurther,book description

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitle=document.getElementById("book-title-input")
var bookaurther=document.getElementById("book-aurther-input")
var bookdescription=document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement('div')
    div.setAttribute("class","book-container")
    div.innerHTML= `<h2>${booktitle.value}</h2>
     <h5>${bookaurther.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick="cancel(event)">delete</button`

    container.append(div)
    popupoverlay.style.display="none"
    popbox.style.display="none" 
})
function cancel(event){
    event.target.parentElement.remove()
}