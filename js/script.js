document.addEventListener("DOMContentLoaded", function () {
    const deleteLinks = document.querySelectorAll(".delete");
    deleteLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            if (!confirm("¿Estás seguro de que deseas eliminar este producto?")) {
                event.preventDefault();
            }
        });
    });
});
