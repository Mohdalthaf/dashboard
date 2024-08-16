document.addEventListener("DOMContentLoaded", function() {
    const viewAllLink = document.querySelector(".view-all1");
    const paymentRows = document.querySelectorAll(".payment-rows, .payment-rows2");

    // Initially hide the payment rows
    paymentRows.forEach(row => {
        row.style.display = "none";
    });

    viewAllLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default action of the link

        paymentRows.forEach(row => {
            if (row.style.display === "none") {
                row.style.display = "flex"; // Show the row (or use "block" if preferred)
            } else {
                row.style.display = "none"; // Hide the row
            }
        });
    });
});
