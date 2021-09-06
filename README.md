``` 
    [html]
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Necessidade de TS EXEMPLO</title>
</head>
<body>
    <input type="number" id="numero1">
    <input type="number" id="numero2">
    <button id="calcular">Calcular</button>
    
    <hr/>

    <div id="resultado"></div>

    <script type="text/javascript" src="app.js"></script>
</body>
</html> 
```


```
    [JavaScript]

let first = document.getElementById('numero1'); 
let second = document.getElementById('numero2');
let button = document.getElementById('calcular');
let resultado = document.getElementById('resultado');

function calcular(n1, n2) {
    return  n1 + n2;
}

button.addEventListener('click', function () {
    resultado.innerHTML = calcular(first.value, second.value)
});
```

<hr/>
<hr/>

→ Criamos uma calcualdora bem básica que realiza apenas soma, ela não apresenta nenhum erro. Todavia quando passamos nossos valores queremos, obviamente, que eles sejam somados; isso não ocorre, ainda que não tenha erro. Ele junta os valores. Exemplo:

⇒ Caso passemos os valore 2 e 3 desejamos que a somo seja = 5, 

mas ele retorna a junção dos valores, sendo assim, 23 e não é o que queremos

<hr/>
<hr/>

<h2>##Porque isso ocorre ?</h2>

⇒ Independentemente do tipo de input que tenhamos no nosso HTML, mesmo que seja de númeor, ele sempre vai retornar uma string. Ou seja, quando digitamos o valor <kbd>2</kbd>  ele veio como <kbd>2</kbd> o memos ocorreu com o <kbd>3</kbd>

<hr/>
<hr/>

<h2>##Como resolver isso ?</h2>

⇒ Podemos fazer uma verificação do tipo:


```
    [JavaScript]
function calcular(n1, n2) {
	if(typeof n1 == 'number' && typeof n2 == 'number') {
			return n1 + n2
	} else {
			n1 = parseInt(n1);
			n2 = parseInt(n2);
			return n1 + n2
	}
}

//parseFloat() aceita valores quebrados;
//parseInt() retorna um valor inteiro

/*
	Uma outra forma de transformar em número inteiro é
	colocar um "+" antes dos numeros. Exemplo:
	+n1 + +n2
*/
```
 

→ E o resultado a partir de agora, ira ser somado e e dará o valor correto.

<hr/>
<hr/>

<h3>##Mas Perceba</h3>

⇒  função calcular é muito simples, ela só precisa receber dois valores e em número e fazer o cálculo, todavia, afim que funcionar, havemos de fazer uma grande verificação que não deveria haver.

⇒ Nesse momento, surge a necessidade do <kbd>TypeScript</kbd> pois iremos definir que o <kbd>n1</kbd> e <kbd>n2</kbd> sempre serão números. Logo, se eu não mandar um número para esse código, nem deixa o código rodar, já coloca logo uma mensagem de erro.