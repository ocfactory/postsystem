/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

(function(){
emailjs.init("Qf1S6-dpH3ePN3pNr");
})();

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
		const logo = document.getElementById('logo');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
			logo.src = "assets/img/logo_w.png";
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
			logo.src = "assets/img/logo.png";
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

	/* ===============================
       Contact Form - EmailJS
    =============================== */

	function validateField(id){

		const field = document.getElementById(id);

		if(!field.value.trim()){
			field.classList.add("is-invalid");
			return false;
		}

		field.classList.remove("is-invalid");
		return true;
	}

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function(e){

            e.preventDefault();

			const validName = validateField("name");
			const validEmail = validateField("email");
			const validPhone = validateField("phone");
			const validMessage = validateField("message");

			if(!(validName && validEmail && validPhone && validMessage)){
				return;
			}

			const params = {
				name: document.getElementById("name").value,
				email: document.getElementById("email").value,
				phone: document.getElementById("phone").value,
				message: document.getElementById("message").value
			};

            emailjs.send("service_t7ib4oh","template_fcuc9fe", params)
            .then(function(response){

                alert("메일이 성공적으로 전송되었습니다.");
                contactForm.reset();

            }, function(error){

                alert("메일 전송 실패");

            });

        });

    }
	
	["name","email","phone","message"].forEach(function(id){

		const field = document.getElementById(id);

		if(field){
			field.addEventListener("input", function(){
				if(field.value.trim()){
					field.classList.remove("is-invalid");
				}
			});
		}

	});
	
	const languageData = {

		en: {
			title: "Beyond Automation",
			subtitle: "Organic Orchestration for Ever-Evolving Logistics",
			
			services: "SERVICES",
			services_t1: "Management Software",
			services_st1: "Software solutions designed to manage and optimize warehouse and logistics operations",
			services_t2: "Automation",
			services_st2: "Automation control systems for smart warehouse operations",
			services_t3: "Integration & Services",
			services_st3: "End-to-end consulting, system implementation, and support",
			
			solutions: "SOLUTIONS",
			solutions_t1: "WMS",
			solutions_st1: "Warehouse Management System",
			solutions_t2: "WCS",
			solutions_st2: "Warehouse Control System",
			solutions_t3: "Consulting & System Support",
			solutions_st3: "Technical Support & Maintenance",
			solutions_t4: "ECS",
			solutions_st4: "Equipment Control System",
			solutions_t5: "SMS",
			solutions_st5: "Sortation Management System",
			solutions_t6: "Automated Systems",
			solutions_st6: "Automation & Robotics",
			
			aboutus: "ABOUT US",
			aboutus_desc1: "POST System: The Warmest Connection Between Technology and People",
			aboutus_desc2: "Dreaming of a better tomorrow, we pioneer a new future with an innovative and responsible mindset.",
			aboutus_desc3: "We value customer satisfaction above all and never stop challenging ourselves to exceed expectations.",
			aboutus_t1: "Experience",
			aboutus_st1: "",
			aboutus_t1_desc: "We provide optimal solutions based on deep industry know-how and expertise.",
			aboutus_t2: "Technology",
			aboutus_st2: "",
			aboutus_t2_desc: "We realize innovative technological value through research that knows no bounds.",
			aboutus_t3: "Future Possibilities",
			aboutus_st3: "Next Generation",
			aboutus_t3_desc: "We create sustainable value to empower the next generation.",
			aboutus_t4: "Challenge & Growth",
			aboutus_st4: '"Our today is the stepping stone for a better tomorrow."',
			aboutus_t4_desc: "Powered by the passion and bold spirit of our team, we are evolving every moment. We look beyond yesterday's achievements to pioneer the possibilities of tomorrow.",
			aboutus_t5: "Our Promise",
			aboutus_st5: '"A Reliable Mailbox Connecting the World and People"',
			aboutus_t5_desc: "We strive to be a reliable bridge connecting people and the world through human-centered technology. As a partner that delivers your voice to a prosperous future, this is why POST System exists.",
			
			contactus: "CONTACT US",
			contactus_name: "Your Name *",
			contactus_feedback_name: "A name is required.",
			contactus_email: "Your Email *",
			contactus_feedback_email1: "An email is required.",
			contactus_feedback_email2: "Email is not valid.",
			contactus_phone: "Your Phone *",
			contactus_feedback_phone: "A phone number is required.",
			contactus_message: "Your Message *",
			contactus_feedback_message: "A message is required.",
			contactus_sendmessage: "Send Message"
		},

		kr: {
			title: "자동화를 넘어서는 진화",
			subtitle: "변화하는 물류 환경에 최적화된 유기적 통합",
			
			services: "서비스",
			services_t1: "관리 소프트웨어",
			services_st1: "창고 및 물류 운영을 관리하는 최적화된 솔루션",
			services_t2: "자동화",
			services_st2: "스마트 창고 운영을 위한 자동화 시스템",
			services_t3: "통합 및 서비스",
			services_st3: "종합적인 컨설팅, 시스템 구현 및 지원",
			
			solutions: "솔루션",
			solutions_t1: "WMS",
			solutions_st1: "창고 관리 시스템",
			solutions_t2: "WCS",
			solutions_st2: "창고 자동화 시스템",
			solutions_t3: "컨설팅 및 지원",
			solutions_st3: "기술 지원 및 유지보수",
			solutions_t4: "ECS",
			solutions_st4: "장비 제어 시스템",
			solutions_t5: "SMS",
			solutions_st5: "분류 관리 시스템",
			solutions_t6: "자동화 시스템",
			solutions_st6: "자동화 및 로봇",
			
			aboutus: "회사소개",
			aboutus_desc1: "기술과 사람을 잇는 가장 따뜻한 연결, 포스트시스템",
			aboutus_desc2: "오늘보다 나은 내일을 꿈꾸며, 혁신적인 기술력과 책임감 있는 자세로 새로운 미래를 개척합니다.",
			aboutus_desc3: "우리는 고객의 가치를 소중히 여기며, 기대에 보답하기 위해 멈추지 않고 도전합니다.",
			aboutus_t1: "풍부한 경험",
			aboutus_st1: "",
			aboutus_t1_desc: "깊이 있는 노하우를 바탕으로 최적의 솔루션을 제시합니다.",
			aboutus_t2: "미래 기술력",
			aboutus_st2: "",
			aboutus_t2_desc: "한계를 두지 않는 연구를 통해 혁신적인 기술 가치를 실현합니다.",
			aboutus_t3: "내일의 가능성",
			aboutus_st3: "",
			aboutus_t3_desc: "다음 세대를 위한 지속 가능한 가치를 창출합니다.",
			aboutus_t4: "도전과 성장",
			aboutus_st4: '"포스트시스템의 오늘은 내일을 위한 발판입니다."',
			aboutus_t4_desc: "구성원들의 뜨거운 열정과 패기를 동력 삼아 지금 이 순간에도 끊임없이 진화하고 있습니다. 어제의 성과에 안주하지 않고 내일의 가능성을 개척하며 성장합니다.",
			aboutus_t5: "우리의 약속",
			aboutus_st5: '"세상과 사람을 연결하는 신뢰의 우체통"',
			aboutus_t5_desc: "사람과 세상을 잇는 기술로 모두의 든든한 가교가 되겠습니다. 고객의 목소리를 담아 풍요로운 내일로 배달하는 파트너, 그것이 포스트시스템의 존재 이유입니다.",
	
			contactus: "주소 및 문의",
			contactus_name: "이름 *",
			contactus_feedback_name: "이름은 필수 입력 사항입니다.",
			contactus_email: "이메일 주소 *",
			contactus_feedback_email1: "이메일 주소는 필수 입력 사항입니다.",
			contactus_feedback_email2: "이메일 주소가 유효하지 않습니다.",
			contactus_phone: "전화번호 *",
			contactus_feedback_phone: "전화번호는 필수 입력 사항입니다.",
			contactus_message: "메시지 *",
			contactus_feedback_message: "메시지는 필수 입력 사항입니다.",
			contactus_sendmessage: "이메일 전송"
		}

	};

    // 언어 변경 함수
	function setLanguage(lang){

		document.querySelectorAll("[data-lang]").forEach(function(el){

			const key = el.getAttribute("data-lang");

			if(languageData[lang] && languageData[lang][key]){
				el.innerText = languageData[lang][key];
			}

		});
		
		document.querySelectorAll("[data-lang-placeholder]").forEach(function(el){

			const key = el.getAttribute("data-lang-placeholder");

			if(languageData[lang] && languageData[lang][key]){
				el.placeholder = languageData[lang][key];
			}

		});

		// 아이콘 변경
		const icon = document.getElementById("currentLang");

		if(icon){
			icon.src = "assets/img/" + lang + ".png";
		}

		localStorage.setItem("language", lang);
	}
	
	// 드롭다운 이미지 클릭 이벤트
	document.querySelectorAll(".lang-option").forEach(function(el){

		el.addEventListener("click", function(e){

		   e.preventDefault();

			const lang = this.dataset.lang;

			setLanguage(lang);

		});

	});
	
	// 저장된 언어 불러오기
	const savedLang = localStorage.getItem("language") || "en";

	setLanguage(savedLang);

	const currentIcon = document.getElementById("currentLang");

	if(currentIcon){
		currentIcon.src = "assets/img/" + savedLang + ".png";
	}

});
