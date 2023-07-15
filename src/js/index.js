document.addEventListener('DOMContentLoaded', () => {
    const personagens = document.querySelectorAll('.personagem');
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    const nomePersonagem = document.getElementById('nome-personagem');
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    let imagemOriginalSrc = '';

    personagens.forEach((personagem) => {
        const imagemPersonagem = personagem.querySelector('.personagem-img');

        personagem.addEventListener('click', () => {
            const idPersonagem = personagem.getAttribute('id');
            const novaImagemSrc = `./src/imagens/card-${idPersonagem}.gif`;

            if (imagemOriginalSrc === '') {
                imagemOriginalSrc = imagemPersonagemGrande.getAttribute('src');
            }

            // Remover classe "selecionado" de todos os personagens
            personagens.forEach((personagem) => {
                personagem.classList.remove('selecionado');
            });

            // Adicionar classe "selecionado" ao personagem clicado
            personagem.classList.add('selecionado');

            imagemPersonagemGrande.setAttribute('src', novaImagemSrc);
            nomePersonagem.innerText = personagem.getAttribute('data-name');
            descricaoPersonagem.innerText = personagem.getAttribute('data-description');

            // Remover classe "selecionado" de todas as imagens
            personagens.forEach((personagem) => {
                const img = personagem.querySelector('.personagem-img');
                img.classList.remove('selecionado');
                const id = personagem.getAttribute('id');
                const imgSrc = `./src/imagens/selec-${id}.png`;
                img.setAttribute('src', imgSrc);
            });

            // Adicionar classe "selecionado" e alterar a imagem do personagem clicado
            imagemPersonagem.classList.add('selecionado');
            const selectedImgSrc = `./src/imagens/selec-${idPersonagem}.gif`;
            imagemPersonagem.setAttribute('src', selectedImgSrc);
        });
    });
});
