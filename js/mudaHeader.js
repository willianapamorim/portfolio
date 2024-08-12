export function mudaHeader() {

    const header = document.getElementById("header");
    const projetosSection = document.getElementById("projetos");

    window.addEventListener("scroll", function() {
        const sectionTop = projetosSection.getBoundingClientRect().top;
        const sectionBottom = projetosSection.getBoundingClientRect().bottom;

        // Verifica se a seção "Projetos" está visível na viewport
        if (sectionTop < window.innerHeight && sectionBottom > 0) {
            header.classList.add("header-preto");
        } else {
            header.classList.remove("header-preto");
        }
    });
}