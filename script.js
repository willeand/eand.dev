document.addEventListener('DOMContentLoaded', function() {
    console.log('Welcome to My New Website!');
    const navLinks = document.querySelectorAll('.NavBox nav a');
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split("/").pop();

        if (linkPage === currentPage) {
            link.classList.add('active');    // add the class
        } else {
            link.classList.remove('active'); // remove from others
        }
    });
});
