document.getElementById('Form_contact').addEventListener('submit', function() {
    var nome = this.querySelector('input[name=nome]'), nome = nome.value;
    var email = this.querySelector('input[name=email]'), email = email.value;
    var phone = this.querySelector('input[name=phone]'), phone = phone.value;
    var text = "Olá Dubai,\n Meu nome é " + nome + ", estou interessado em seus serviços, por favor, entre em contato comigo pelo email " + email;
    this.querySelector('textarea[name=body]').setAttribute('value', text);
})

//MÁSCARA PARA O TELEFONE

function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id(el){
	return document.getElementById(el);
}
window.onload = function(){
	id('phone').onkeyup = function(){
		mascara( this, mtel );
	}
}