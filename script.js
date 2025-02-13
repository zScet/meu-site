function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});


        // Função para redirecionar para a página de Cadastro
        function irParaCadastro() {
            window.location.href = "cadastro.html"; // Substitua pelo URL da sua página de cadastro
        }

        // Função para redirecionar para a página de Login
        function irParaLogin() {
            window.location.href = "login.html"; // Substitua pelo URL da sua página de login
        }
