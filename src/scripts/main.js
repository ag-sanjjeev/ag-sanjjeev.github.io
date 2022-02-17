$(document).ready(function() {
	var obj = new Portfolio();

	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
	    if (event.matches) {
	    	applytheme('dark');
	    } else {
	    	applytheme('light');
	    }

	});

	var theme = window.localStorage.getItem('theme');
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    	applytheme('dark');
	} else if (theme == 'dark') {
		applytheme('dark');
	}

	$(window).scroll(function () {
	    
	    $('.fadeshow').each(function (i) {	    	
	      	if (isElementOnScreen(this)) {
	        	$(this).animate({ 'opacity': '1' }, 1500);
	      	}
	    });
	    nav_link_scroll_active();
	    skill_animated_progressbar();
	});

	nav_link_active();

	themetoggle();	
});

class Portfolio {
	constructor() {
		console.log('Portfolio initiated');
		
		this.skills = [
			{'name' : 'html5', 'icon' : 'fab fa-html5', 'exp' : '3', 'level' : '95', 'summary' : 'I have worked various Front-End design and fullfilled requirements with SEO friendly design.', 'action':'#contact-us'},
			{'name' : 'css3', 'icon' : 'fab fa-css3', 'exp' : '3', 'level' : '92', 'summary' : 'I have designed Websites with rich design and responsive friendly.', 'action':'#contact-us'},
			{'name' : 'javascript', 'icon' : 'fab fa-js', 'exp' : '3', 'level' : '94', 'summary' : 'I have worked with various Front-End design and fullfilled requirements with SEO friendly design.', 'action':'#contact-us'},
			{'name' : 'sass', 'icon' : 'fab fa-sass', 'exp' : '3', 'level' : '89', 'summary' : 'I have worked with designing Websites with both CSS3 and Sass with requirements basis.', 'action':'#contact-us'},
			{'name' : 'bootstrap', 'icon' : 'fab fa-bootstrap', 'exp' : '3', 'level' : '87', 'summary' : 'I have worked with latest bootstrap framework for clean and mobile friendly Websites.', 'action':'#contact-us'},
			{'name' : 'jquery', 'icon' : 'fab fa-js', 'exp' : '3', 'level' : '92', 'summary' : 'I have worked with Jquery library for advanced client architecture with bootstrap.', 'action':'#contact-us'},
			{'name' : 'PHP', 'icon' : 'fab fa-php', 'exp' : '3', 'level' : '91', 'summary' : 'I have worked with latest PHP server side web developement with meeting recommendated web standards.', 'action':'#contact-us'},
			{'name' : 'MySQL', 'icon' : 'fa fa-database', 'exp' : '3', 'level' : '85', 'summary' : 'I have worked with MySQL for all kind of server side related projects to handle data as well.', 'action':'#contact-us'},
			{'name' : 'Angular', 'icon' : 'fab fa-angular', 'exp' : '3', 'level' : '82', 'summary' : 'I have worked with latest Angular framework for single end architecture desigs.', 'action':'#contact-us'},			
		];

		this.services = [
			{'name' : 'Website designing', 'img' : 'images/web-designing.png', 'summary' : 'We are providing web designing services as per your requirements. And custom designs are ready to design or Modifications with excisting designs are done by us.', 'action': '#contact-us'},
			{'name' : 'Website design changes', 'img' : 'images/web-design-changes.jpg', 'summary' : 'We are doing website maintanence and correction work for pre-build projects.', 'action': '#contact-us'},
			{'name' : 'PHP Web Application', 'img' : 'images/php-application.jpg', 'summary' : 'We are providing web application developement with latest PHP server-side scripting language, custom business logic application developement provided and also we are providing maintanence service for existing projects.', 'action': '#contact-us'},
			{'name' : 'PHP Web Application Maintanence', 'img' : 'images/application-maintenance.jpg', 'summary' : 'We are providing service for existing projects and work samples to maintain and also changes or modification to existing project are done by us.', 'action': '#contact-us'},
			{'name' : 'Bug Clearance', 'img' : 'images/bug-clearance.jpg', 'summary' : 'We are providing web application related bug analysis and bug clearance for existing web designs and PHP web applications.', 'action': '#contact-us'},
			{'name' : 'Database Maintanence', 'img' : 'images/db.jpg', 'summary' : 'We are providing MySQL database maintanence and optimisation work for existing php applications.', 'action': '#contact-us'},
			{'name' : 'SEO Implementation', 'img' : 'images/seo.jpg', 'summary' : 'We are providing SEO implementation for existing web designs and also custom web designs with SEO friendly implementated.', 'action': '#contact-us'}
		];

		this.projects = [
			{'name' : 'Website designing', 'img' : 'images/web-designing.png', 'type' : 'Project Summary', 'summary' : 'We handle webdesignings with followings HTML5, CSS3, JavaScript, Bootstrap, Jquery, and more', 'action': '#contact-us'},
			{'name' : 'Customised ERP', 'img' : 'images/erp.jpg', 'type' : 'Project Summary', 'summary' : 'We handle customised ERP applications with entries and reports that supported by PHP and MySQL', 'action': '#contact-us'},
			{'name' : 'Billing Applications', 'img' : 'images/billing.png', 'type' : 'Project Summary', 'summary' : 'We handle Billing Applications from small-scale to large-scall with reports that supported by PHP and MySQL', 'action': '#contact-us'},
			{'name' : 'Portfolios', 'img' : 'images/portfolio.png', 'type' : 'Project Summary', 'summary' : 'We handle Portfolios and Landing page for your business and services to reach online customers.', 'action': '#contact-us'},
			{'name' : 'Ecommerce Websites', 'img' : 'images/ecommerce.jpg', 'type' : 'Project Summary', 'summary' : 'We handle Ecommerce applications with payment integration to establish your online business and services to next level', 'action': '#contact-us'}
		];

		this.socialprofiles = [
			{'name' : 'Sanjjeev AG', 'icon' : 'images/social/facebook.png', 'username' : 'ag.sanjjeev21', 'action':'https://www.facebook.com/ag.sanjjeev21'},
			{'name' : 'Sanjjeev AG', 'icon' : 'images/social/twitter.png', 'username' : 'agsanjjeev', 'action':'https://twitter.com/agsanjjeev'},
			{'name' : 'Sanjjeev AG', 'icon' : 'images/social/instagram.jpg', 'username' : 'agsanjjeev', 'action':'https://www.instagram.com/agsanjjeev/'},
			{'name' : 'Sanjjeev AG', 'icon' : 'images/social/github.png', 'username' : 'ag-sanjjeev', 'action':'https://github.com/ag-sanjjeev'},
			{'name' : 'Sanjjeev AG', 'icon' : 'images/social/linkedin.png', 'username' : 'ag sanjjeev', 'action':'https://www.linkedin.com/in/ag-sanjjeev-6a337a232/'}
		];

		this.initSkills();
		this.initServices();
		this.initProjects();
		this.initSocialProfiles();
		this.initCopyWriteYear();

	}

	initSkills() {
		$('#skills-container').html('');
		var html = '';
		this.skills.forEach(function(e, i) {
			
			html +=	'<div class="col-md-3 card-showcase text-start mx-3 fadeshow">';
			html += '<div class="card-showcase-header">';
			html += '<i class="card-showcase-icon '+e.icon+'"></i>';
			html += '<div class="card-showcase-progress">';
			html += '<span>';
			html += '<label class="skill-name">'+e.name+'</label> ';
			html += '<small class="badge rounded-pill skill-exp">'+e.exp+'+</small>';
			html += '</span>';
			html += '<div class="progress mt-2">';
			html += '<div class="progress-bar skill-level" role="progressbar" data-value="'+e.level+'" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">0%</div>';
			html += '</div>';
			html += '</div>';
			html += '</div>';
			html += '<h3 class="h3 my-3">Skills Summary</h3>';
			html += '<p class="skill-summary">'+e.summary+'</p>';
			html += '<a href="'+e.action+'" class="icon-link skill-action">';
			html += 'Contact us';
			html += '<i class="fa fa-angle-double-right"></i>';
			html += '</a>';
			html += '</div>';

		});
		$('#skills-container').append(html);
	}

	initServices() {
		$('#services-container').html('');
		var html = '';
		var flex_row = '';
		this.services.forEach(function(e, i) {
			flex_row = (i%2 == 0) ? 'flex-lg-row-reverse' : 'flex-lg-row-forward';

			html +='<div class="row '+flex_row+' align-items-center g-5 py-2 fadeshow">';
			html +='<div class="col-10 col-sm-8 col-lg-6">';
			html +='<img src="'+e.img+'" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">';
			html +='</div>';
			html +='<div class="col-lg-6">';
			html +='<h1 class="display-5 text-start fw-bold lh-1 mb-3">'+e.name+'</h1>';
			html +='<p class="lead text-start py-3">'+e.summary+'</p>';
			html +='<div class="d-grid gap-2 d-md-flex justify-content-md-start">';
			html +='<a href="'+e.action+'" class="btn btn-lg px-4 me-md-2 contact-us">Contact Us</a>';
			html += '</div>';
			html +='</div>';
			html +='</div>';

		});
		$('#services-container').append(html);
	}

	initProjects() {
		$('#projects-container').html('');
		var html = '';
		this.projects.forEach(function(e, i) {

			html += '<div class="col-md-6 fadeshow">';
			html += '<div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative project-box">';
			html += '<div class="col p-4 d-flex flex-column position-static">';
			html += '<strong class="d-inline-block mb-2">'+e.type+'</strong>';
			html += '<h3 class="mb-0">'+e.name+'</h3>';
			html += '<p class="card-text mb-auto py-3">'+e.summary+'</p>';
			html += '<a href="'+e.action+'" class="stretched-link">Contact us</a>';
			html += '</div>';
			html += '<div class="col-auto d-none d-lg-block">';
			html += '<img src="'+e.img+'" class="img-fluid" style="max-width: 230px; height: 100%;">';
			html += '</div>';
			html += '</div>';
			html += '</div>';

		});
		$('#projects-container').append(html);
	}

	initSocialProfiles() {
		$('#social-profile-container').html('');
		var html = '';
		this.socialprofiles.forEach(function(e, i) {
			
			html += '<div class="d-flex pt-3 fadeshow">';
			html += '<div class="social-logo-container '+e.logoClass+'">';
			html += '<img src="'+e.icon+'" class="social-logo"/>';
			html += '</div>';

			html += '<div class="pb-3 mb-0 small lh-sm border-bottom w-100">';
			html += '<div class="d-flex justify-content-between">';
			html += '<strong>'+e.name+'</strong>';
			html += '<a href="'+e.action+'" target="_blank" class="badge rounded-pill">Contact</a>';
			html += '</div>';
			html += '<span class="d-block username">@'+e.username+'</span>';
			html += '</div>';
			html += '</div>';

		});
		$('#social-profile-container').append(html);
	}

	initCopyWriteYear() {
		var d = new Date();		
		var copywrite_text = 'Sanjjeev &copy; ' + d.getFullYear();
		$('.copywrite-year').html(copywrite_text);
	}
}

function isElementOnScreen(element) {
	var offset = 1;
	var windowTop = offset * window.innerHeight / 100;
	var windowBottom = window.innerHeight - windowTop;
	var windowLeft = 0;
	var windowRight = window.innerWidth;

	var elementRect = element.getBoundingClientRect();
	var elementTop = elementRect.top;
	var elementBottom = elementRect.bottom;
	var elementLeft = elementRect.left;
	var elementRight = elementRect.right;
	var status = ( elementTop <= windowBottom && elementBottom >= windowTop && elementLeft <= windowRight && elementRight >= windowLeft);
	
	return status;

}

function nav_link_active() {
	var nav_link = document.querySelectorAll('.nav-link');
	nav_link.forEach(function(i) { 
		i.addEventListener('click', function(j) { 
			nav_link.forEach(function(k) {
				k.classList.remove('active');
			});
			i.classList.add('active');
		}) 
	});
}

function nav_link_scroll_active() {
	var nav_link = document.querySelectorAll('.nav-link');
	nav_link.forEach(function(i) { 
		var section = i.getAttribute('href').toString();
		var section_container = document.querySelectorAll(section)[0];

		var windowTop = window.innerHeight / 100;
		var windowBottom = window.innerHeight - windowTop;
		var elementRect = section_container.getBoundingClientRect();
		var elementTop = elementRect.top;
		var elementBottom = elementRect.bottom;

		if (elementTop <= windowBottom && elementBottom >= windowTop) {
			nav_link.forEach(function(k) {
				k.classList.remove('active');
			});
			i.classList.add('active');			
		}
	});
}

function skill_animated_progressbar() {
	var skill_bar = document.querySelectorAll('#skills-container > .fadeshow .progress-bar.skill-level');

	skill_bar.forEach(function(i) {
		var level = i.getAttribute('data-value');
		var currentLevel = 0;

		if (isElementOnScreen(i) && !i.classList.contains('active')) {
			  i.classList.add('active');
			  var skill_level_timer = setInterval(function () {
			    currentLevel += 1;
			    $(i).text(currentLevel + "%");    
			    $(i).attr('aria-valuenow', currentLevel);
			    $(i).css({ 'width' : currentLevel+'%' });
			    if (currentLevel == level) {
			      clearInterval(skill_level_timer);
			    }
			  }, 30);
		}
	});
}

function themetoggle() {
	document.querySelectorAll('#toggletheme')[0].addEventListener('change', function(i) { 
		if(i.target.checked)
		{
			window.localStorage.setItem('theme', 'dark');
			document.querySelectorAll('#theme-link')[0].href = './src/dist/themes/dark.css';
		}
		else 
		{
			window.localStorage.setItem('theme', 'light');
			document.querySelectorAll('#theme-link')[0].href = './src/dist/themes/light.css';	
		}
	});
}

function applytheme(theme = 'light') {
	if (theme == 'light') {
		document.querySelectorAll('#toggletheme')[0].checked = false;
		document.querySelectorAll('#theme-link')[0].href = './src/dist/themes/light.css';
	} else if (theme == 'dark') {
		document.querySelectorAll('#toggletheme')[0].checked = true;
		document.querySelectorAll('#theme-link')[0].href = './src/dist/themes/dark.css';
	} else {
		document.querySelectorAll('#toggletheme')[0].checked = false;
		document.querySelectorAll('#theme-link')[0].href = './src/dist/themes/light.css';
	}
}