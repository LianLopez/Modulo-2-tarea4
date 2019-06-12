var members = [];

function filtrar(listacompleta) {
    var chekeados = Array.from(document.querySelectorAll("input[name=party]:checked")).map(input => input.value)
    var selected = document.querySelector("select").value
    listaFiltrada = listacompleta.filter(member => chekeados.includes(member.party) && (selected == "" ? true : selected == member.state))
    return listaFiltrada
}

function iniciar() {
    miApp.members = filtrar(members);
}

var miApp = new Vue({
    el: '#app',
    data: {
        members: {}
    }
});