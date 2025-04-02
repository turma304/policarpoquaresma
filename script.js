function mostrarCuriosidade() {
    const modal = document.getElementById("modalCuriosidade");

    // Array de curiosidades sobre Lima Barreto
    const curiosidades = [
        "Lima Barreto escreveu 'O Triste Fim de Policarpo Quaresma' enquanto estava internado em um hospício.",
        "Ele foi um dos primeiros escritores brasileiros a criticar abertamente o racismo e as desigualdades sociais.",
        "Mesmo sendo um dos maiores escritores brasileiros, Lima Barreto morreu na pobreza e sem o devido reconhecimento.",
        "Seu romance 'O Triste Fim de Policarpo Quaresma' quase foi censurado na época por criticar o governo brasileiro.",
        "Lima Barreto tinha o sonho de entrar para a Academia Brasileira de Letras, mas nunca conseguiu uma vaga.",
        "Seu nome completo era Afonso Henriques de Lima Barreto, em homenagem ao primeiro rei de Portugal.",
        "Perdeu a mãe quando tinha apenas 7 anos, o que impactou profundamente sua vida.",
        "Seu pai trabalhava como tipógrafo na Imprensa Nacional, influenciando seu interesse pela literatura.",
        "Estudou no prestigiado Colégio Pedro II, mas enfrentou dificuldades financeiras.",
        "Ingressou na Escola Politécnica do Rio de Janeiro para estudar engenharia, mas não concluiu o curso.",
        "Trabalhou como jornalista para se sustentar antes de se dedicar à literatura.",
        "Publicou seu primeiro romance, 'Recordações do Escrivão Isaías Caminha', aos 27 anos.",
        "Além de romances, escreveu diversas crônicas e sátiras sobre a sociedade brasileira.",
        "Era um grande admirador de Machado de Assis, mas desenvolveu um estilo mais combativo.",
        "Escrevia regularmente para a revista 'Careta', onde fazia críticas políticas e sociais.",
        "Foi internado três vezes em hospitais psiquiátricos devido ao alcoolismo e crises emocionais.",
        "Usava o álcool como uma forma de lidar com a exclusão social e o racismo que sofria.",
        "Morreu aos 41 anos, em 1922, vítima de um colapso cardíaco agravado pelo alcoolismo.",
        "Apesar de rejeitado pela Academia Brasileira de Letras em vida, hoje é um dos escritores mais estudados do Brasil.",
        "O Prêmio Lima Barreto foi criado em sua homenagem para valorizar escritores negros e marginalizados."
    ];
    

    // Escolhe uma curiosidade aleatória
    const curiosidadeAleatoria = curiosidades[Math.floor(Math.random() * curiosidades.length)];

    // Exibe a curiosidade no modal
    document.getElementById("curiosidadeTexto").innerText = curiosidadeAleatoria;

    // Mostra o modal com animação
    modal.classList.add("ativo");
}

function fecharCuriosidade() {
    const modal = document.getElementById("modalCuriosidade");

    // Adiciona efeito de fade-out antes de esconder
    modal.style.opacity = "0";
    
    setTimeout(() => {
        modal.classList.remove("ativo");
        modal.style.opacity = "1"; // Reseta a opacidade para próxima vez
    }, 300); // Tempo para sumir suavemente
}

function rolarPara(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}