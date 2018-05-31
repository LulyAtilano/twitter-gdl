//creo una variable para llamar al botón
var btn = document.getElementById("btn");
// //le agrego un escuchador y llamo a la función ADD
btn.addEventListener('click', add);

//Función que agrega mensaje
function add(){
	//tomando contenido de textarea
	var comment = document.getElementById("text").value;
	//si cumple con la condición, continúa con la fcn
	if (comment.length > 0 && comment.length < 141) {
		//limpio el textarea
		document.getElementById("text").value = "";
		//defino variable que llame al contador
		var element = document.getElementById('counter');
		//reseteo color del contador
		element.style.cssText = "color: #69CBF8;"
		//reseteo el alto del input
		document.getElementById("text").style.cssText = "height: auto;";
		//Reseteo Contador
		var element = document.getElementById('counter');
		//Reseteo mi contador
		element.innerHTML = 140;

		btn.removeAttribute("style", "cursor");
		//creo mi section para los comentarios
		var postSection = document.getElementById("post-section");
		var containerComments = document.createElement("div");
		containerComments.setAttribute("id", "container-comments");
		postSection.appendChild(containerComments);
		//creo un nuevo Div para el comentario
		var newComment = document.createElement("div");
		//agrego la clase "comment" a mi div
		newComment.classList.add("comment");
		//creo un nuevo párrafo
		var paragraph = document.createElement("p");
		//creo un nodo de texto con el comentario rescatado
		var textNode = document.createTextNode(comment);
		//uno el textNode al parrafo
		paragraph.appendChild(textNode);

		var user = document.createElement("h5");
		var userName = document.getElementById("user");
		var userNameText = document.createTextNode(userName.textContent);
		user.appendChild(userNameText)


		//creando div
		var divImg = document.createElement("div");
		divImg.classList.add("miniPic");

		var divIcons = document.createElement("div")
		divIcons.classList.add("icons");

		//creando input
		var check = document.createElement('input');
		//agregandole el tipo checkbox
		check.type = 'checkbox';

		var heart = document.createElement("i");
		heart.classList.add("fa", "fa-heart", "heart");

		var trash = document.createElement("i");
		trash.classList.add("fa", "fa-trash", "trash");

		var postTime = document.createElement("p");
		var textTime = document.createTextNode(moment().format('LT'));
		postTime.appendChild(textTime);
		postTime.id = "time-size";

		divIcons.appendChild(heart);
		divIcons.appendChild(trash);
		divIcons.appendChild(check);
		divIcons.appendChild(postTime);
		
		

		newComment.appendChild(user)
		newComment.appendChild(divImg);
		//uno el párrafo al div de comentario
		newComment.appendChild(paragraph);

		newComment.appendChild(divIcons);
		
		
		//agrego el comentario al container
		containerComments.appendChild(newComment);

		//al hacer click en el c
		check.addEventListener('click', function(){
			paragraph.classList.toggle('strike-out');
		})
		//remueve newComent en cont, al darle click en trash
		trash.addEventListener('click', function(){
			if (check.checked) {
				containerComments.removeChild(newComment)
			} else{
				alert("usa el check")
			}
		})

		heart.addEventListener('click', function(){
			heart.classList.toggle('red')
		})
	}	
}

//llamo al input
var element = document.getElementById('text');
//le agrego un evento que llame a la función resize
//keyup y keydown para que el cambio de tamaño en el input se analice en los 2 casos
element.addEventListener('keydown', autosize);
element.addEventListener('keyup', autosize);
//Función que cambia el tamaño del input
function autosize(){
  	//le doy alto inline (dentro del html)
  	element.style.cssText = 'height:auto; padding:0';
  	//hago que el alto cambie según el alto del contenido del input (scrollHeight)
    element.style.cssText = 'height:' + element.scrollHeight + 'px';
}

//llamo a mi input
var textCont = document.getElementById('text');
// le agrego un event listener onkeyup que llame a la fcn counter
textCont.addEventListener('onkeyup', counter);

function counter(){
	var element = document.getElementById('counter');
	//el contenido de mi span = 140 - largo de mi value
	element.innerHTML = 140 - textCont.value.length;
	//cambios de color segun largo del value, para que al borrar no sse equivoque de colores ni con el btn
	if (element.innerHTML < 140 && element.innerHTML > 19) {
		element.style.cssText = "color: #69CBF8;";
		btn.style.cssText = "cursor: pointer; background: #69CBF8;";
	} else if (element.innerHTML < 20 && element.innerHTML > 9) {
		element.style.color = "orange";
	} else if (element.innerHTML < 10 && element.innerHTML > -1) {
		btn.style.cssText = "cursor: pointer; background: #69CBF8;";
		element.style.color = "red";
	} else if (element.innerHTML < 0) {
		element.style.color = "red";
		btn.style.cssText = "cursor: auto;";
	} else if (element.innerHTML == 140) {
		btn.style.cssText = "cursor: auto;";
		element.style.cssText = "color: #69CBF8;"
	}
}