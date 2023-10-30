    // Crie um novo projeto com uma página que tenha 1 campo de texto e 1 campo do tipo "datetime-local" e 1 botão com o rótulo 
    // "Adicionar". O usuário deve digitar o nome de um evento e selecionar em que horário esse evento (um objeto com os valores 
    // selecionados) vai ocorrer. Ao clicar em adicionar, deve ser mostrado na tela a lista de eventos em ordem cronológica, 
    // utilizem o método sort de array. Para facilitar o trabalho de mostrar os eventos na tela, veja o método 
    // replaceChildren()

    const event_user = document.querySelector("#event");
    const date_time = document.querySelector("#data");
    const button = document.querySelector("#button");
    const events = document.querySelector("#events");

    let arrayObjetos = [];

    function adicionarEvento() {
        let objeto = {
            evento: event_user.value,
            data: date_time.value
        }
        arrayObjetos.push(objeto);
    }

    function ordenarArrayObjetos() {
        arrayObjetos.sort((antes, depois) => antes.data.localeCompare(depois.data));
    }

    function exibirEventos() {
        events.textContent = "";
        
        arrayObjetos.forEach(element => {
            const evento = document.createElement("h2");
            const data = document.createElement("p");

            evento.textContent = `Evento: ${element.evento}`;
            data.textContent = `Data: ${element.data}`;

            events.appendChild(evento);
            events.appendChild(data);
        })
    }

    button.addEventListener("click", () => {
        adicionarEvento();
        ordenarArrayObjetos();
        exibirEventos();
    })