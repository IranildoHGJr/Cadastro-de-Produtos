var d = document;
function processar(idTabela)
{
    alert("Produto registrado");
	var newRow = d.createElement('tr');
	newRow.insertCell(0).innerHTML = d.getElementsByName('codpro')[0].value;
    newRow.insertCell(1).innerHTML = d.getElementsByName('nompro')[0].value;
    newRow.insertCell(0).innerHTML = d.getElementsByName('valprouni')[0].value;
    newRow.insertCell(1).innerHTML = d.getElementsByName('despro')[0].value;
    d.getElementById(idTabela).appendChild(newRow);
    return false;
}

function comfirmar(form)
{

    if (form.codigoProduto.value == 0||form.inputQuantidade.value == 0||form.inputDescricao.value == 0||form.nomedoproduto.value == 0)

    alert("Dados Invalidos");
    else
    alert("Produto registrado");
    form.nomedoproduto.value = " ";
    form.codigoProduto.value = " ";
    form.inputQuantidade.value = "1";
    form.inputDescricao.value = " ";
}

function limpar(form)
{
    form.nomedoproduto.value = " ";
    form.codigoProduto.value = " ";
    form.inputQuantidade.value = "1";
    form.inputDescricao.value = " ";
}

