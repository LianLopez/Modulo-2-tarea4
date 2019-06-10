var members = [];

function miFiltro(listacompleta) {
    var chekeados = Array.from(document.querySelectorAll("input[name=party]:checked")).map(input => input.value)
    var selected = document.querySelector("select").value
    listaFiltrada = listacompleta.filter(member => chekeados.includes(member.party) && (selected == "" ? true : selected == member.state))
    app.members = listaFiltrada;
    return listaFiltrada
}

function iniciar() {
    miApp.members = miFiltro(members);
}

var miApp = new Vue({
    el: '#app',
    data: {
        members: {}
    }
});