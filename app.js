function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    console.log(campoPesquisa);

    if (campoPesquisa == "") {
        section.innerHTML = "digite o compositor";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = ""
    let titulo = "";
    let descricao = "";


    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase();
        descricao = dado.descricao.toLocaleLowerCase();
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            resultados += `
        <div class="item-resultado">
        <h2> <a href=${dado.link}" target="_blank"> ${dado.titulo}</a></h2>
        <p class="descricao-meta">${dado.descricao}
        </p>
    </div>`


        }

    }

    if (resultados == "") {
        section.innerHTML = "<p>Compositor não adicionado ao banco de dados</p>";
        return;
    }


    section.innerHTML = resultados
}

