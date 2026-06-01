document.addEventListener("DOMContentLoaded", () => {
    console.log("✓ pokeDeck Studio inicializado com sucesso!");

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
});
