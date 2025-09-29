// 1. Definir las traducciones primero
const resources = {
    es: {
        translation: {
            aboutMe: "Sobre Mí",
            contact: "Contacto",
            portafolio: "Portafolio",
            language: "Idiomas",
            es: "Español",
            en: "Inglés",
            skills: "Habilidades Técnicas",
            database: "Base Datos (Oracle + MySQL)",
            text1: "Soy <span class='highlight'>Ingeniero en Informática</span> con más de 4 años de experiencia especializada en <span class='highlight'>desarrollo web con WordPress</span>. Experto en la creación de sitios altamente funcionales y optimizados mediante <span class='highlight'>Elementor, WooCommerce, Custom Fields</span> y técnicas avanzadas de <span class='highlight'>SEO</span>.",
            text2: "Poseo dominio avanzado de <span class='highlight'>HTML5, CSS3 y JavaScript (VainillaJS)</span>, complementado con experiencia en desarrollo backend utilizando <span class='highlight'>PHP</span> y el framework <span class='highlight'>Yii</span>.",
            text3: "Además, cuento con experiencia en el desarrollo de aplicaciones SPA con <span class='highlight'>Angular 12+</span> y una sólida formación en gestión de <span class='highlight'>bases de datos relacionales</span> como <span class='highlight'>SQL y Oracle</span>, con capacidad para escribir consultas complejas y optimizar rendimiento.",
            text4: "Mi enfoque combina <span class='highlight'>autonomía técnica</span>, <span class='highlight'>comunicación efectiva</span> y <span class='highlight'>colaboración en equipo</span> para entregar soluciones web que cumplen con los objetivos de negocio y ofrecen una experiencia de usuario excepcional.",
            projects: "Mis Trabajos",
            project_title1: "Tienda MercyBarCafé",
            project_desc1: "E-commerce desarrollado con WordPress y WooCommerce. Diseño responsive y integración con pasarela de pago Tropipay.",
            project_title2: "Sitio Web Renetaxis",
            project_desc2: "Landing page de promoción y adquisición de servicios usando pasarela de pago Tropipay.",
            project_title3: "Tienda Online LesFleurs",
            project_desc3: "Asesoría y optimización SEO.",
            project_title4: "Sitio Web Otbacademy.es",
            project_desc4: "Asesoría y optimización SEO",
            project_title5: "Tienda Online Renetaxis",
            project_desc5: "E-commerce desarrollado con WordPress y WooCommerce. Diseño responsive e integración con pasarela de pago Tropipay. Uso de temas pro.",
            project_title6: "Tienda Online LeisureExportingLLC",
            project_desc6: "E-commerce desarrollado con WordPress y WooCommerce. Diseño responsive e integración con pasarela de pago Clover. Uso de temas pro.",
            project_title7: "Sitio Web Hostal Cotarelo",
            project_desc7: "Hostal desarrollado con WordPress tiene opción de Booking (Reservas). Diseño responsive e integración con pasarela de pago Tropipay.",
            ver1: "Ver proyecto",
            ver2: "Ver proyecto",
            ver3: "Ver",
            ver4: "Ver",
            proximamente: "Próximamente",
            footer: "© 2025 Carlos Andres Gómez Pérez. Todos los derechos reservados."
        }
    },
    en: {
        translation: {
            aboutMe: "About Me",
            contact: "Contact",
            portafolio: "Portfolio",
            language: "Languages",
            es: "Spanish",
            en: "English",
            skills: "Technical Skills",
            database: "Database (Oracle + MySQL)",
            text1: "I am a <span class='highlight'>Software Engineer</span> with over 4 years of specialized experience in <span class='highlight'>web development with WordPress</span>. Expert in building highly functional and optimized websites through <span class='highlight'>Elementor, WooCommerce, Custom Fields</span> and advanced <span class='highlight'>SEO</span> techniques.",
            text2: "I possess advanced command of <span class='highlight'>HTML5, CSS3 and JavaScript (VanillaJS)</span>, complemented by backend development experience using <span class='highlight'>PHP</span> and the <span class='highlight'>Yii</span> framework.",
            text3: "Additionally, I have experience in developing SPA applications with <span class='highlight'>Angular 12+</span> and solid training in <span class='highlight'>relational database</span> management such as <span class='highlight'>SQL and Oracle</span>, with the ability to write complex queries and optimize performance.",
            text4: "My approach combines <span class='highlight'>technical autonomy</span>, <span class='highlight'>effective communication</span> and <span class='highlight'>team collaboration</span> to deliver web solutions that meet business objectives and provide an exceptional user experience.",
            projects: "My Projects",
            project_title1: "MercyBarCafé Store",
            project_desc1: "E-commerce developed with WordPress and WooCommerce. Responsive design and integration with Tropipay payment gateway.",
            project_title2: "Renetaxis Website",
            project_desc2: "Promotional landing page and service acquisition using Tropipay payment gateway.",
            project_title3: "LesFleurs Store",
            project_desc3: "SEO consulting and optimization.",
            project_title4: "Otbacademy.es Website",
            project_desc4: "SEO consulting and optimization",
            project_title5: "Renetaxis Store",
            project_desc5: "E-commerce developed with WordPress and WooCommerce. Responsive design and integration with Tropipay payment gateway. Use of premium themes.",
            project_title6: "LeisureExportingLLC Store",
            project_desc6: "E-commerce developed with WordPress and WooCommerce. Responsive design and integration with Clover payment gateway. Use of premium themes.",
            project_title7: "Cotarelo Hostel Website",
            project_desc7: "Hostel developed with WordPress featuring Booking option. Responsive design and integration with Tropipay payment gateway.",
            ver1: "View project",
            ver2: "View project",
            ver3: "View",
            ver4: "View",
            proximamente: "Coming soon",
            footer: "© 2025 Carlos Andres Gómez Pérez. All rights reserved."
        }
    }
};

// 2. Inicializar i18next
i18next.init({
    lng: 'es', // idioma por defecto
    debug: true,
    resources
}, function(err, t) {
    updateContent();
});

// 3. Función para cambiar idioma
function changeLanguage(lang) {
    i18next.changeLanguage(lang, updateContent);
}

// 4. Función para actualizar contenido
function updateContent() {
    // Información personal y sidebar
    document.getElementById('about-title').textContent = i18next.t('aboutMe');
    document.getElementById('contact-info').textContent = i18next.t('contact');
    document.getElementById('language').textContent = i18next.t('language');
    document.getElementById('es').textContent = i18next.t('es');
    document.getElementById('en').textContent = i18next.t('en');
    document.getElementById('portafolio').textContent = i18next.t('portafolio');
    document.getElementById('skills').textContent = i18next.t('skills');
    document.getElementById('database').textContent = i18next.t('database');

    // Texto sobre mí (usamos innerHTML para mantener los spans con clase highlight)
    document.getElementById('text1').innerHTML = i18next.t('text1');
    document.getElementById('text2').innerHTML = i18next.t('text2');
    document.getElementById('text3').innerHTML = i18next.t('text3');
    document.getElementById('text4').innerHTML = i18next.t('text4');

    // Sección de proyectos
    document.getElementById('projects').textContent = i18next.t('projects');

    // Proyecto 1
    document.getElementById('project_title1').textContent = i18next.t('project_title1');
    document.getElementById('project_desc1').textContent = i18next.t('project_desc1');
    document.getElementById('ver1').textContent = i18next.t('ver1');

    // Proyecto 2
    const project2 = document.querySelectorAll('.project-card')[1];
    project2.querySelector('.project-title').textContent = i18next.t('project_title2');
    project2.querySelector('.project-desc').textContent = i18next.t('project_desc2');
    project2.querySelector('.project-link').innerHTML = i18next.t('ver2') + ' <i class="fas fa-arrow-right"></i>';

    // Proyecto 3
    const project3 = document.querySelectorAll('.project-card')[2];
    project3.querySelector('.project-title').textContent = i18next.t('project_title3');
    project3.querySelector('.project-desc').textContent = i18next.t('project_desc3');
    project3.querySelector('.project-link').innerHTML = i18next.t('ver3') + ' <i class="fas fa-arrow-right"></i>';

    // Proyecto 4
    const project4 = document.querySelectorAll('.project-card')[3];
    project4.querySelector('.project-title').textContent = i18next.t('project_title4');
    project4.querySelector('.project-desc').textContent = i18next.t('project_desc4');
    project4.querySelector('.project-link').innerHTML = i18next.t('ver4') + ' <i class="fas fa-arrow-right"></i>';

    // Proyectos próximamente (5, 6, 7)
    const upcomingProjects = document.querySelectorAll('.project-card');
    [4, 5, 6].forEach(index => {
        const project = upcomingProjects[index];
        if (index === 4) {
            project.querySelector('.project-title').textContent = i18next.t('project_title5');
            project.querySelector('.project-desc').textContent = i18next.t('project_desc5');
        } else if (index === 5) {
            project.querySelector('.project-title').textContent = i18next.t('project_title6');
            project.querySelector('.project-desc').textContent = i18next.t('project_desc6');
        } else if (index === 6) {
            project.querySelector('.project-title').textContent = i18next.t('project_title7');
            project.querySelector('.project-desc').textContent = i18next.t('project_desc7');
        }
        project.querySelector('.project-link').innerHTML = i18next.t('proximamente') + ' <i class="fas fa-arrow-right"></i>';
    });

    // Footer
    document.querySelector('.footer p').textContent = i18next.t('footer');
}

// 5. Animación de tarjetas
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        }, index * 100);
    });
});
