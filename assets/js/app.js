var btn = document.getElementById('btn');
btn.addEventListener('click', add);

function add () {
	var comment = document.getElementById('text').value;
	
	if ( comment.length > 0  && comment.length <= 140 ) {
		document.getElementById('text').value = '';
		var element = document.getElementById('counter');
		element.style.cssText = 'color:  #69CBF8';
		// otra opción para cambiar el color es: element.style.color = #69CBF8;
		document.getElementById('text').style.cssText = "height: auto";
		element.innerHTML = 140;

		var postSection = document.getElementById('post-section');
		var containerComments = document.createElement('div');
		containerComments.id = 'container-comments';
		postSection.appendChild(containerComments);

		var paragraph = document.createElement('p');
		var textNode = document.createTextNode(comment);
		paragraph.appendChild(textNode);

		var newComment = document.createElement('div');
		newComment.classList.add('comment');

		var userName = document.getElementById('user');
		var user = document.createElement('h5');
		var userTextName = document.createTextNode(userName.textContent);
		user.appendChild(userTextName);

		var divImg = document.createElement('div');
		divImg.classList.add('miniPic');
		
		var divIcons = document.createElement('div');
		divIcons.classList.add('icons'); // se corrigió el nombre de la clase
		var check = document.createElement('input');
		check.type = 'checkbox';
		var heart = document.createElement('i');
		heart.classList.add('fa', 'fa-heart', 'heart');
		var trash = document.createElement('i');
		trash.classList.add('fa', 'fa-trash', 'trash');
		var posTime = document.createElement('p');
		posTime.id = 'time-size';
		var textTime = document.createTextNode(moment().format('LT'));
		posTime.appendChild(textTime);

		divIcons.appendChild(heart);
		divIcons.appendChild(trash);
		divIcons.appendChild(check);
		divIcons.appendChild(posTime);

		// Anidación de los elementos en el "div" newComment
		newComment.appendChild(user);
		newComment.appendChild(divImg); // aquí se añade la imagen del usuario en el
		newComment.appendChild(paragraph);
		newComment.appendChild(divIcons);
		containerComments.appendChild(newComment);

		check.addEventListener('click', function() {
			paragraph.classList.toggle('strike-out');
		});

		trash.addEventListener('click', function(){
			if ( check.checked ) {
			containerComments.removeChild(newComment);
			} else {
				confirm('Usar el check para borrar el comentario');
			}
		});

		heart.addEventListener('click', function(){
			heart.classList.toggle('red');
		});

	};

};

var element = document.getElementById('text');
element.addEventListener('keydown', autosize);
element.addEventListener('keyup', autosize);

function autosize() {
	element.style.cssText = 'height: auto; padding:0';
	element.style.cssText = 'height:' + element.scrollHeigth + 'px';
};

var textCont = document.getElementById('text');
// otra forma de obtener el valor de textCont
// var textCont = document.getElementById('text').value;
textCont.addEventListener('onkeyup', counter);

function counter() {
	var element = document.getElementById('counter');

	element.innerHTML = 140 - textCont.value.length;
	// otra forma de restar
	// element.innerHTML = 140 - textCont.length;
	
	if (element.innerHTML < 140 && element.innerHTML > 19) {
		element.style.cssText = 'color: #69CBF8';
		btn.style.cssText = 'cursor: pointer; background: #69CBF8';
	} else if ( element.innerHTML < 20 && element.innerHTML > 9) {
			// otra forma de asignar colores
		element.style.color = 'orange';
	} else if ( element.innerHTML < 10  && element.innerHTML > -1) {
		element.style.color = 'red';
		btn.style.cssText = 'cursor: pointer; background: #69CBF8';
	} else if ( element.innerHTML < 0) {
		element.style.color = 'red';
		btn.style.cssText = 'cursor: pointer';
	} else if ( element.innerHTML == 140) {
		element.style.color = 'color: #69CBF8';
		btn.style.cssText = 'cursor: auto';
	};
};