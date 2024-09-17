const deletePost = async function(event) {
    const id = event.target.getAttribute("data-id");
    
    if (id) {
        // Send a 'delete' request to the server 
        const response = await fetch(`/api/post/${id}`, {
            method: "DELETE",
        });
        
        // If successful load the page with changes
        if (response.ok) {
            document.location.reload(); 
        } else {
            // If there's an error alert the user with status
            alert(response.statusText);
        }
    }
}

.querySelector('.delete-btn')
.addEventListener('click', deletePost);
