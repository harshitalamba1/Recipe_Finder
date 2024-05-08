function search() {
    let filter = document.getElementById('find').value.toUpperCase();
    let items = document.querySelectorAll('.col');
  
    for (let i = 0; i < items.length; i++) {
      let title = items[i].querySelector('.card-title');
      let value = title.textContent || title.innerText;
  
        if (value.toUpperCase().indexOf(filter) > -1) {
        items[i].style.display = ""; // Show the entire row
        } 
        else {
        items[i].style.display = "none"; // Hide the entire row
        }
    }
}