// 1. Definir las traducciones primero
const resources = {
    es: {
      translation: {
        aboutMe: "Sobre Mí.",
        contact: "Contacto",
        language: "Idiomas",
        es: "Español",
        en: "Ingles",

        projects: "Mis Trabajos"
        
      }
    },
    en: {
      translation: {
        aboutMe: "About Me",
        contact: "Contact",
        language: "Languages",
        es: "Spanish",
        en: "English",

        projects: "My Projects"
        
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
    document.getElementById('about-title').textContent = i18next.t('aboutMe');
    document.getElementById('contact-info').textContent = i18next.t('contact');
   document.getElementById('language').textContent = i18next.t('language');
   document.getElementById('es').textContent = i18next.t('es');
   document.getElementById('en').textContent = i18next.t('en');
   /// document.getElementById('projects-title').textContent = i18next.t('projects');
   
  }
  
  // 5. Animación de tarjetas (esto está bien como lo tienes)
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