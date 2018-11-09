document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');


  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const button = document.querySelector('#delete-list-button');
  button.addEventListener('click', handledelete);



});


const handleFormSubmit = function (event) {
  event.preventDefault();
  const newListitem = document.createElement('p');
  const formResultParagraph = document.querySelector("#reading-list");
  newListitem.textContent = `${event.target.title.value} ${event.target.author.value} ${event.target.category.value}`
  formResultParagraph.appendChild(newListitem);
  document.querySelector("#new-item-form").reset();
};

const handledelete = function (event) {
  // console.log(event);
// const readingListContainer =
document.querySelector("#reading-list").innerHTML = "";


};
