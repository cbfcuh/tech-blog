const postFormHandler = async (event) => {
    event.preventDefault(); 

    const title = document.querySelector("#post-title").value.trim();
    const body = document.querySelector("#post-body").value.trim();

    // Check if both the title and body fields are filled
    if (title && body) {
        
        const response = await fetch("/api/post", {
            method: "POST",
            body: JSON.stringify({ title, body }), 
            headers: { "Content-Type": "application/json" }, 
        });

        // If the post is successful redirect to homepage
        if (response.ok) {
            document.location.replace("/"); 
        } else {
            // If the request fails show alert with error message
            alert(response.statusText);
        }
    }
};

document
  .querySelector(".post-form")
  .addEventListener("submit", postFormHandler);
