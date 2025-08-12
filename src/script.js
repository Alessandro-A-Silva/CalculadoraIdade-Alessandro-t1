//Calcula quantos anos/meses/dias a pessoa tem do dia do seu nascimento até a data atual
function CalcularIdade() {

    const resultado = document.getElementById("resultado");
    const dataNascimento = document.getElementById("data-nascimento").value;

    if (dataNascimento == "")
        resultado.textContent = "Selecione uma data de nascimento valida.";
    else {

        const dataAtual = new Date();
        const [anoAtual, mesAtual, diaAtual] = [dataAtual.getFullYear(), dataAtual.getMonth() + 1, dataAtual.getDate()];
        const [anoNascimento, mesNascimento, diaNascimento] = dataNascimento.split("-").map(Number);

        let anos = anoAtual - anoNascimento;
        let meses = mesAtual - mesNascimento;
        let dias = diaAtual - diaNascimento;

        if (dias < 0) {
            let ultimoDiasMesAteior = new Date(anoAtual, mesAtual - 1, 0).getDate();
            dias += ultimoDiasMesAteior;
        }

        if (meses < 0)
            meses += 12;

        if (anoAtual - anoNascimento == 0 && diaAtual < diaNascimento)
            meses--;

        if (mesAtual < mesNascimento)
            anos--;

        resultado.textContent = `Você tem ${anos} ${anos == 1 ? 'ano' : 'anos'}, ${meses} ${meses == 1 ? 'mês' : 'meses'} e ${dias} ${dias == 1 ? 'dia' : 'dias'}.`;
    }
}

//Configura o input da data-nascimento para ter como valor inicial e valor maximo a data atual
function DataAtual() {
    const dataAtual = new Date();
    const ano = dataAtual.getFullYear().toString();
    const mes = (dataAtual.getMonth() + 1) < 10 ? `0${dataAtual.getMonth() + 1}` : (dataAtual.getMonth() + 1).toString();
    const dia = dataAtual.getDate() < 10 ? `0${dataAtual.getDate()}` : dataAtual.getDate().toString();
    const dataAtualFormatada = `${ano}-${mes}-${dia}`
    document.getElementById("data-nascimento").value = dataAtualFormatada;
    document.getElementById("data-nascimento").setAttribute("max", dataAtualFormatada);
}

//Executa a função DataAtual(); após o carregamento da pagina
document.addEventListener("DOMContentLoaded", function () {
    DataAtual();
});


