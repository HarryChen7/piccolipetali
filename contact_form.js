//get the form by its id
const form = document.getElementById("contact-form"); 

//event listener for when user submits form
const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();

  //when event is triggered, create FormData object called 'mail' based on 'input' values and their 'name' attributes in the form
  let mail = new FormData(form);

  //call a function called 'sendMail()' with 'mail' as parameter. This function will use 'Fetch API' to post the 'mail' to the url 'send' (specified in our 'form' element attibute)
  sendMail(mail);
})

const sendMail = (mail) => {
    //supply base url with 'send' for 'fetch()'
    fetch("/send", {
      method: "post", //method is post as we are sending data, not receiving.
      body: mail, //this is the data that we are sending.
  
    }).then((response) => {
      return response.json();
    });
  };
  
