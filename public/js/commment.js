// function to handle comment form submission
const commentFormHandler = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior (page reload)

    
    const body = document.querySelector("#comment").value.trim();

    
    let post_id = window.location.href.split('/').slice(-1)[0];

    // Check if the comment body is not empty
    if (body) {
        
        const response = await fetch("/api/comment", {
            method: "POST", // 
            body: JSON.stringify({ body, post_id }), 
            headers: { "Content-Type": "application/json"}, 
        });

        // Check if the server response is OK
        if (response.ok) {
            // If successful load the page to with the new comment
            document.location.replace(`/post/${post_id}`); 
        } else {
            // If there's an error, alert the user with status
            alert(response.statusText);
        }
    }
};


console.log(window.location.href.split('/').slice(-1)[0]);

document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);
