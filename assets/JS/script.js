const btnBuscar = document.getElementById('buscar');
const totalUltimo = document.getElementById('resultado');
const canvas = document.getElementById('grafico')
const url = "https://mindicador.cl/api";

async function getValor() {
    try {
        const select = document.getElementById('monedas');
        const tipoMoneda = select.value;
        const res = await fetch(`${url}/${tipoMoneda}`); 
        const data = await res.json();

        return data;
        
    } catch (error) {
        alert(error.message)
    }
}

function calculo(cantidad, valor){
    var total = cantidad / valor
    return total;
}



btnBuscar.addEventListener('click', async ()=>{
    const valor = parseInt(document.getElementById('montoIn').value);
    const result = (await getValor());
    const serie = result.serie;
    const valorFinal = serie[0].valor;
    const final = calculo(valor, valorFinal);

    totalUltimo.innerHTML = `La cotizacion del dia de hoy es $${final}`

    

    

});