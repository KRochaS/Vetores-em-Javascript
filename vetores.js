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
		/*  Exercício 2
			Ler um vetor C de 10 nomes de pessoas, após pedir que o usuário digite um nome qualquer de
			pessoa. Escrever a mensagem ACHEI, se o nome estiver armazenado no vetor C ou NÃO ACHEI
		    caso contrário. 
		*/
		
		document.write("<hr/>");
		var cont=0;
		var vetorc=[];
		for(var i=0; i< 5; i++) {
			vetorc.push(prompt("Digite um nome: "));
		}
		document.write("Os nomes no Vetor C: ");
		for(var i=0; i<vetorc.length; i++) {
			document.write("<br/>" +vetorc[i]);
		}
		var nome=prompt("Digite o nome que deseja achar: "); 
		for(var i=1; i<5; i++) {
			if(vetorc[i] == nome) {
			cont++;
			}
		}
		
		if(cont>0) {
			document.write("<br/><br/> Achei, o nome é "+nome);
		} else {
			document.write("<br/><br/> Não achei");
		}
	
		document.write("<hr/>")
		document.write("<br/>");
		/* Exercício 3
		Ler um vetor que contenha as notas de uma turma de 10 alunos. Calcular a média da turma e
		contar quantos alunos obtiveram nota acima desta média calculada. Escrever a média da turma e o
		resultado da contagem. 
		*/
		
		var cont=0;
		var somar=0;
		var vetorn=[];
		for(var i=0; i<10; i++) {
			vetorn.push(parseInt(prompt("Digite as notas dos alunos: ")));
		}
		document.write("As notas dos alunos são: ");
		for(var i=0; i<10; i++) {
			document.write(vetorn[i] +" ");
		}
		for(var i=0; i<10; i++) {
			somar=somar+vetorn[i];
			
		}
		var media=somar/10;
		document.write("<br/> A média é: "+media);
		for(var i=0; i<10; i++){
			if(vetorn[i]>media) {
				cont++;
			}
		}
		document.write("<br/> Alunos que tiveram a nota acima da média: "+cont);
		document.write("<hr/>");
		document.write("<br/>");
		/* Exercício 4
		 Ler um vetor X de 10 elementos. A seguir copiar todos os valores negativos do vetor X para um
		vetor R, sem deixar elementos vazios entre os valores copiados. Escrever o vetor X e o vetor R. 
		*/
		var vetorx=[];
		var vetorr=[];
		for(var i=0; i<10; i++) {
			vetorx.push(parseInt(prompt("Digite 10 valores incluindo negativos: ")));
		}
		document.write("Os valores no Vetor X são: ");
		for(var i=0; i<vetorx.length; i++) {
			document.write(vetorx[i] +" ");
		}
		for(var i=0; i<vetorx.length; i++) {
			if(vetorx[i]<0){
				vetorr[i]=vetorx[i];
				
			}
		}
		document.write("Valores no Vetor R: ");
		for(var i=0; i<vetorr.length; i++) {
			if(vetorr[i]!=undefined) {
				document.write(vetorr[i]);
			}
		}
		
		/* Exercício 5
		Ler dois vetores: R de 5 elementos e S de 10 elementos. Gerar um vetor X de 15 elementos cujas
		5 primeiras posições contenham os elementos de R e as 10 últimas posições, os elementos de S.
		Escrever o vetor X
		*/
		
		var vtr=[];
		var vts=[];
		var vtx=[];
		for(var i=0; i<5; i++) {
			vtr.push(parseInt(prompt("Digite os valores do Vetor R: ")));
		}
		document.write("<br/> Os Valores do Vetor R: ");
		for(var i=0; i<vtr.length; i++) {
			document.write(vtr[i] +" ");
		}
		for(var i=0; i<10; i++) {
			vts.push(parseInt(prompt("Digite os valores do Vetor S: ")));
		}
		document.write("<br/> Os valores do Vetor S: ");
		for(var i=0; i<vts.length; i++) {
			document.write(vts[i] +" ");
		}
		for(var i=0; i<5; i++) {
			vtx[i]=vtr[i];
		}
		for(var i=5; i<15; i++) {
			vtx[i]=vts[i-5];
		}
		document.write("<br/> Vetor X contendo valores do R e S: ");
		for(var i=0; i<vtx.length; i++){
			document.write(vtx[i] +" ");
		}
