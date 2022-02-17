var responsesChat = {
	'unknown' : ['?', 'Choose any one of the above option', '@_@', ':(', '...'],
	'start' : 'These are my portfolio sections. Choose the below option to explore my portfolio. <br /> <ol><li><a href="#" data-message="about">\\About</a></li><li><a href="#" data-message="skills">\\Skills</a></li><li><a href="#" data-message="projects">\\Projects</a></li><li><a href="#" data-message="contact">\\Contact</a></li></ol>',
	'skill' : [{   title: "HTML",   icon: "fab fa-html5",   percentage: 80,   content: "Proficient in creating and structuring web pages using HTML tags and attributes. Able to implement semantic markup and accessibility best practices." }, {   title: "CSS",   icon: "fab fa-css3",   percentage: 75,   content: "Skilled in styling web pages using CSS properties and selectors. Able to create responsive layouts, apply animations and transitions, and optimize performance." }, {   title: "JavaScript",   icon: "fab fa-js",   percentage: 70,   content: "Strong knowledge of JavaScript fundamentals, including variables, functions, and control flow. Experienced in manipulating the DOM, handling events, and implementing client-side validation." }, {   title: "BootStrap",   icon: "fab fa-bootstrap",   percentage: 75,   content: "Proficient in using Bootstrap framework to create responsive and mobile-first web pages. Familiar with its grid system, components, and utility classes." }, {   title: "Jquery",   icon: "fa fa-server",   percentage: 80,   content: "Skilled in utilizing jQuery library to simplify DOM manipulation, handle events, and make AJAX requests. Able to create interactive and dynamic web pages." }, {   title: "PHP",   icon: "fab fa-php",   percentage: 80,   content: "Proficient in PHP programming language, including object-oriented programming concepts, database connectivity, and session management. Experienced in developing web applications and working with MVC architecture." }, {   title: "MySQL",   icon: "fa fa-server",   percentage: 75,   content: "Strong knowledge of MySQL database management system, including creating and modifying tables, writing complex queries, and optimizing database performance. Able to design and implement relational databases." }, {   title: "Laravel",   icon: "fab fa-laravel",   percentage: 60,   content: "I have a basic understanding of Laravel, a popular PHP framework. I\'m familiar with the concepts of MVC (Model-View-Controller) architecture, routing, authentication, and database migrations. I\'m' in now gaining experience in developing web applications using Laravel and improving my skills in utilizing its features and functionalities." }],
	'project' : 'These are the projects I can handle. <br /> <ol> <li>PHP Application Development</li> <li>Database Management</li> <li>Front-End Designing</li> <li>Bug Clearance</li></ol> <br />For more about projects. <br/> See <a href="https://github.com/ag-sanjjeev?tab=repositories" class="link">My Repositories</a>',
	'contact' : 'You can reach out to me via <a href="mailto:resulttext" class="link">Email</a> <br /> You can explore my repositories from <a href="https://github.com/ag-sanjjeev?tab=repositories" class="link">Here</a>',
	'about' : 'Hi I am Sanjjeev. I am an enthusiastic programmer who has learned a wider and deeper set of applications in PHP to become a web developer. Currently, I am exploring machine learning, which is subset of AI, using PHP. Additionally, I am capable and rising my skills in front-end design.'
};

window.onload = function(e) {

	document.querySelectorAll('#start-btn')[0].addEventListener('click', function(e) {

		afterStart();		

	});

	document.addEventListener('click', function(e) {
		const target = e.target.closest('[data-message]');

		if (target) {

			var notYetStart = document.querySelectorAll('#start-btn')[0].classList.contains('active');
			
			if (notYetStart) {
				alert('Please Start');
				return false;
			}

			sendMessage(e.target.dataset.message);
		}
	});

}

function chatSend(form) {
	
	var inputField = form.chatInput;

	sendMessage(inputField.value);

	inputField.value = '';

	return false;
}

function afterStart() {

	document.querySelectorAll('#start-btn')[0].classList.remove('active');

	document.querySelectorAll('.input-group form')[0].classList.add('active');	

	sendMessage('START');
}

function startMessageResponseLoader() {
	document.querySelectorAll('.message-response-loader')[0].classList.add('active');
}

function stopMessageResponseLoader() {
	document.querySelectorAll('.message-response-loader')[0].classList.remove('active');
}

function scrollToBottom() {
	var container = document.querySelectorAll('.messages-chatbox')[0];
	container.scrollTop = container.scrollHeight;
}

function sendMessage(message = '') {	

	if (message.trim().length <= 0) {
		return false;
	}

	var messageContent = document.createElement('p');
	messageContent.classList.add('message-content');
	messageContent.innerHTML = message;

	var messageChild = document.createElement('div');
	messageChild.classList.add('message-container','sendMessage');
	messageChild.appendChild(messageContent);

	document.querySelectorAll('.messages-chatbox')[0].appendChild(messageChild);
	
	scrollToBottom();

	giveResponse(message);

}

function giveResponse(message = '') {
	
	startMessageResponseLoader();

	var responseMessage = '?';

	if (message.trim().length <= 0) {
		
		setTimeout(function() {
			stopMessageResponseLoader();
		}, 500);

		return;
	}

	message = message.toLowerCase();

	if (message.indexOf('start') !== -1) {
		responseMessage = responsesChat.start;
	} else if (message.indexOf('thank') !== -1 || message.indexOf('wow') !== -1 || message.indexOf('great') !== -1 || message.indexOf('nice') !== -1 || message.indexOf('super') !== -1 ) {
		responseMessage = 'You\'re welcome';
	} else if (message.indexOf('about') !== -1) {
		responseMessage = responsesChat.about;
	} else if (message.indexOf('skill') !== -1) {

		responseMessage = processSkills(responsesChat.skill);

	} else if (message.indexOf('project') !== -1) {
		responseMessage = responsesChat.project;
	} else if (message.indexOf('contact') !== -1) {
		responseMessage = responsesChat.contact;
	} else {
		responseMessage = responsesChat.unknown;
		let random = Math.floor(Math.random() * responseMessage.length);
		responseMessage = responseMessage[random];
	}

	if (typeof responseMessage == 'object') {

		var promise = Promise.resolve();
		responseMessage.forEach(function(i) {

			promise = promise.then(function () {

				var messageContent = document.createElement('div');
				messageContent.classList.add('message-content');
				messageContent.innerHTML = i;

				var messageChild = document.createElement('div');
				messageChild.classList.add('message-container','receiveMessage');
				messageChild.appendChild(messageContent);
				
				document.querySelectorAll('.messages-chatbox')[0].appendChild(messageChild);
				scrollToBottom();

				return new Promise(function (resolve) {
					document.querySelectorAll('.progressBar').forEach(function(i) { i.children[0].style.left=i.dataset.percentage + '%'; });
					setTimeout(resolve, 500);
				})
			});
			
		});


		promise.then(function() {
			stopMessageResponseLoader();
		});

	} else {

		var messageContent = document.createElement('div');
		messageContent.classList.add('message-content');
		messageContent.innerHTML = responseMessage;

		var messageChild = document.createElement('div');
		messageChild.classList.add('message-container','receiveMessage');
		messageChild.appendChild(messageContent);

		setTimeout(function() {
			stopMessageResponseLoader();
			document.querySelectorAll('.messages-chatbox')[0].appendChild(messageChild);
			scrollToBottom();
		}, 500);

	}


}

function processSkills(skills) {
	
	var responseArray = [];

	skills.forEach(function(i) {
		let title = i.title;
		let icon = i.icon;
		let percentage = i.percentage;
		let content = i.content;

		let response = "";

		response = '<div class="skill-message">';
		response += '<div class="skill-header">';
		response += '<div class="info">';
		response += '<i class="' + icon + '"></i>';
		response += '<div class="title-progress">';
		response += '<h3 class="title">' + title + '</h3>';
		response += '<div class="progressBar" data-percentage="' + percentage + '" ><span></span></div>';
		response += '</div>';
		response += '</div>';
		response += '<div class="percentage-container">';		
		response += '<span class="percentage">' + percentage + ' %</span>';
		response += '</div>';
		response += '</div>';
		response += '<div class="skill-body">' + content + '</div>';
		response += '</div>';

		responseArray.push(response);
	});

	return responseArray;

}
