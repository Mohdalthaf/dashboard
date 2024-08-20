document.addEventListener("DOMContentLoaded", function() {
    const viewAllLink = document.querySelector(".view-all2");
    const taskRows = document.querySelectorAll(".task-row, .task-rows, .task-rows3");
  
    viewAllLink.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default link behavior
  
      taskRows.forEach(row => {
        if (row.style.display === "none" || row.style.display === "") {
          row.style.display = "flex"; // Show all tasks
        } else {
          row.style.display = "none"; // Hide all tasks
        }
      });
    });
  });



  