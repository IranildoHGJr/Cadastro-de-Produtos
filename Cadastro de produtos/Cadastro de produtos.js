function cal_media(n1,n2)
{
    var m = (n1+n2);
    return m;
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
