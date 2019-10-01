var d = document;
function processar(idTabela)
{
    alert("Produto registrado");
	var newRow = d.createElement('tr');
	newRow.insertCell(0).innerHTML = d.getElementsByName('codpro')[0].value;
    newRow.insertCell(1).innerHTML = d.getElementsByName('nompro')[0].value;
    newRow.insertCell(2).innerHTML = d.getElementsByName('inpQua')[0].value;
    newRow.insertCell(3).innerHTML = d.getElementsByName('valprouni')[0].value;
    newRow.insertCell(4).innerHTML = d.getElementsByName('despro')[0].value;
    d.getElementById(idTabela).appendChild(newRow);
    return false;
}

