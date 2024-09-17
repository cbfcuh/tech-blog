const signupFormHandler = async (event) => {
    event.preventDefault(); 

    // Get the username and password values from the signup form 
    const username = document.querySelector("#username-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
  
    // Check if both username and password fields are filled
    if (username && password) {
      
      const response = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify({ username, password }), 
        headers: { "Content-Type": "application/json" }, 
      });
  
      // If the signup is successful redirect to the homepage
      if (response.ok) {
        document.location.replace("/");
      } else {
        // If the request fails with error message
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector(".signup-form")
    .addEventListener("submit", signupFormHandler);
  