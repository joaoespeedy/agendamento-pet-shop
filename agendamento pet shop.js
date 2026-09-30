const form = document.getElementById("formAgendamento");

const petInput = document.getElementById("pet");
const tutorInput = document.getElementById("tutor");
const dataInput = document.getElementById("data");
const horarioInput = document.getElementById("horario");
const servicoInput = document.getElementById("servico");

const lista = document.getElementById("listaAgendamentos");
const mensagem = document.getElementById("mensagem");


form.addEventListener("submit", function(event) {

    event.preventDefault();

    const pet = petInput.value.trim();
    const tutor = tutorInput.value.trim();
    const data = dataInput.value;
    const horario = horarioInput.value;
    const servico = servicoInput.value;

    if (
        pet === "" ||
        tutor === "" ||
        data === "" ||
        horario === "" ||
        servico === ""
    ) {
        mensagem.textContent = "Preencha todos os campos.";
        mensagem.style.color = "#dc2626";

        return;
    }

    adicionarAgendamento(
        pet,
        tutor,
        data,
        horario,
        servico
    );

    mensagem.textContent = "Agendamento adicionado!";
    mensagem.style.color = "#16a34a";

    form.reset();

});


function adicionarAgendamento(
    pet,
    tutor,
    data,
    horario,
    servico
) {

    // Remove a mensagem de lista vazia
    const vazio = document.querySelector(".vazio");

    if (vazio) {
        vazio.remove();
    }

    const agendamento = document.createElement("div");

    agendamento.classList.add("agendamento");

    const informacoes = document.createElement("div");

    informacoes.classList.add("informacoes");

    const titulo = document.createElement("h3");

    titulo.textContent = `🐾 ${pet}`;

    const tutorTexto = document.createElement("p");

    tutorTexto.textContent = `Tutor: ${tutor}`;

    const dataTexto = document.createElement("p");

    dataTexto.textContent =
        `📅 Data: ${formatarData(data)}`;

    const horarioTexto = document.createElement("p");

    horarioTexto.textContent =
        `🕐 Horário: ${horario}`;

    const servicoTexto = document.createElement("p");

    servicoTexto.textContent =
        `✂️ Serviço: ${servico}`;


    const botaoRemover = document.createElement("button");

    botaoRemover.textContent = "Remover";

    botaoRemover.classList.add("remover");


    botaoRemover.addEventListener("click", function() {

        agendamento.remove();

        mensagem.textContent =
            "Agendamento removido.";

        mensagem.style.color = "#dc2626";


        if (lista.children.length === 0) {

            lista.innerHTML = `
                <p class="vazio">
                    Nenhum agendamento cadastrado.
                </p>
            `;

        }

    });


    informacoes.appendChild(titulo);
    informacoes.appendChild(tutorTexto);
    informacoes.appendChild(dataTexto);
    informacoes.appendChild(horarioTexto);
    informacoes.appendChild(servicoTexto);

    agendamento.appendChild(informacoes);
    agendamento.appendChild(botaoRemover);

    lista.appendChild(agendamento);
}


function formatarData(data) {

    const partes = data.split("-");

    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}