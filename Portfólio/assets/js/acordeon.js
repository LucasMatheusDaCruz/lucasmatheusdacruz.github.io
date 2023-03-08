// Selecionando todos os elementos com a classe "trigger" dentro dos elementos com a classe "acordeon"
const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

// Adicionando um evento de click em cada elemento com a classe "trigger"
acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        // Selecionando o elemento pai do elemento com a classe "trigger"
        const acordeon = trigger.parentElement
        // Verificando se o elemento pai já contém a classe "open"
        const isOpen = acordeon.classList.contains('open')

        // Adicionando ou removendo a classe "open" do elemento pai
        if (isOpen) {
            acordeon.classList.remove('open')
        } else {
            acordeon.classList.add('open')
        }
    })
})
