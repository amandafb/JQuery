function consultaCep() {
    $(".barra-progresso").show(); //aparece a barra de progresso enquanto a pesquisa está sendo feita no servidor
    var cep = document.getElementById("cep").value;

    var url = "https://viacep.com.br/ws/" + cep + "/json/"
   
    // requisição ajax 
    $.ajax({
        url: url,
        type: "GET",
        success: function (response) {
            $("#logradouro").html(response.logradouro);
            document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;
            $("#tituloCep").html(`CEP ${response.cep}`);
            $(".cep").show();
            $(".barra-progresso").hide(); //
        }
    })
}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
});


