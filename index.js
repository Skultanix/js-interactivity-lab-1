//js test
console.log("Hello world.")

//assigning message variable
const message = document.querySelector("#message")

//adding movies

//addMovie function
function addMovie(event) {
    //preventing default event
    event.preventDefault()
    //input field
    let inputField = document.querySelector('input')
    //new list element
    const movie = document.createElement(`li`)
    //new span element
    const movieTitle = document.createElement(`span`)
    //what is typed into the inputField is stored as a movie title
    movieTitle.textContent = inputField.value
    //crossOffMovie event
    movieTitle.addEventListener("click", crossOffMovie)
    //appending movieTitle to movie list
    movie.appendChild(movieTitle)
    //adding the delete button
    const deleteBtn = document.createElement("button")
    //setting content of the delete button
    deleteBtn.textContent = `X`
    //delete button
    deleteBtn.addEventListener("click", deleteMovie)
    //appending x button to movie element
    movie.appendChild(deleteBtn)
    //finding ul element
   const listActual = document.querySelector('ul')
   //appending movie titles from the list in a displayable manner
   listActual.appendChild(movie)
}
//delete function
function deleteMovie(event) {
    event.target.parentNode.remove()
    //deletion message
    message.textContent = `The film has been deleted.`
}
//cross off function
function crossOffMovie (event) {
    event.target.classList.toggle("checked")
    if(event.target.classList.contains("checked")) {
        message.textContent = `The film has been watched.`
    } else {
        message.textContent = `The film has been re-added to the list.`
    }
}

//selection of form element
const form = document.querySelector(`form`)
//event data
form.addEventListener("submit",addMovie)

