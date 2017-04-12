// Exercício 1
		/* Ler um vetor W de 10 elementos, depois ler um valor V. Contar e escrever quantas vezes o valor V
			ocorre no vetor W e escrever também em que posições (índices) do vetor W o valor V aparece.
			Caso o valor V não ocorra nenhuma vez no vetor W, escrever uma mensagem informando isto. 
		*/
		var vetorw=[];
		
		var cont=0;
		for(var i=0; i<10; i++) {
			vetorw.push(parseInt(prompt("Digite 5 números: ")));
			
		}
		
		document.write("Valores do Vetor W: ");
		for(var i=0;  i< vetorw.length; i++){
			document.write(vetorw[i] +" ");
		}
		var v=parseInt(prompt("Digite um valor: "));
		for(var i=0; i<10; i++) {
			if(vetorw[i]==v) {
				cont++;
				document.write("<br/> A posição do valor é: " +i);
			} 
		}
		
		if(cont>0) {
			document.write("<br/> O valor de V ocorre: "+cont +" vezes no vetor W");
		} else {
			document.write("O valor de V não ocorre nenhuma vez no vetor W");
		}
