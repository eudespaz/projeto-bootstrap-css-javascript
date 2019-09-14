

function cadastrar()
{
var x=document.getElementById("meu-input");
var r=confirm("Escolha um valor!");
if (r==true){
  alert('Parabéns ' + x.value + ' Cadastro Realizado !!!');
  }
  else{
  x="Você pressionou Cancelar!";
  alert("Cadastro Não Realizado !!!");
  }
document.getElementById("meu-input").innerHTML=x;
}