// Simple language toggle (EN / ES) using data-i18n attributes

(function () {
  const translations = {
    en: {
      companyName: 'Ticas Tile & Granite',
      companyTagline: 'Premium Granite & Tile Installation',
      galleryTagline: 'Project Gallery',
      socialTagline: 'Follow Us',

      navHome: 'Home',
      navGallery: 'Gallery',
      navSocial: 'Social',

      heroTitle: 'Premium Granite & Tile Installation',
      heroSubtitle:
        'Elevating kitchens, bathrooms, and commercial spaces with expertly crafted granite, tile, and custom stonework.',
      btnViewGallery: 'View Gallery',
      btnFollowUs: 'Follow Us',

      statProjects: 'Completed Projects',
      statYears: 'Years of Experience',
      statRating: 'Client Rated Quality',

      aboutTitle: 'About Ticas Tile & Granite',
      aboutText1:
        'Ticas Tile & Granite specializes in premium granite and tile installations for residential and commercial spaces. From luxury kitchen countertops to custom tile showers, we deliver craftsmanship you can feel and quality that lasts.',
      aboutText2:
        'Our team combines precise installation techniques with carefully selected stone materials, ensuring every project reflects the strength, beauty, and durability of natural stone.',
      aboutList1Title: 'Residential & Commercial',
      aboutList1Text: 'From single-family homes to large commercial properties.',
      aboutList2Title: 'Licensed & Insured',
      aboutList2Text: 'Safety, compliance, and quality on every project.',
      aboutMediaPlaceholder: 'Granite countertop project preview',
      aboutBadge: 'Custom Stonework',
      aboutMediaText: 'Precision cuts, detailed edges, and clean grout lines.',

      servicesTitle: 'Our Services',
      servicesSubtitle: 'Comprehensive granite and tile solutions tailored to your space.',
      serviceGraniteTitle: 'Granite Countertops',
      serviceGraniteText:
        'Custom-measured and fabricated granite slabs for kitchens, bathrooms, islands, and more.',
      serviceTileTitle: 'Tile Installation',
      serviceTileText:
        'Precision tile installation for floors, showers, backsplashes, entryways, and outdoor spaces.',
      serviceCountertopsTitle: 'Quartz & Stone Surfaces',
      serviceCountertopsText:
        'High-performance quartz and stone options with modern profiles and seamless finishes.',
      serviceCustomTitle: 'Custom Work & Design',
      serviceCustomText:
        'Niche installations, feature walls, outdoor kitchens, and fully custom stone designs.',

      whyTitle: 'Why Choose Ticas Tile & Granite',
      whySubtitle: 'A detail-driven team focused on quality, precision, and long-lasting results.',
      whyQualityTitle: 'Premium Materials',
      whyQualityText:
        'We carefully source granite, tile, and stone that meet strict standards for durability and aesthetics.',
      whyCraftTitle: 'Craftsmanship & Detail',
      whyCraftText:
        'Clean lines, precise cuts, and expertly aligned patterns for a truly professional finish.',
      whyServiceTitle: 'Reliable Service',
      whyServiceText:
        'Clear communication, on-time scheduling, and respect for your home or jobsite.',

      ctaTitle: 'Ready to upgrade your space?',
      ctaText:
        'Explore our recent projects in the gallery or follow us on social media to see more transformations.',

      galleryTitle: 'Project Gallery',
      gallerySubtitle:
        'Discover our granite countertops, tile installations, and custom stone projects.',
      photosSectionTitle: 'Photos',
      photosSectionSubtitle:
        'A curated look at our recent granite and tile installations.',
      photosEmpty:
        'Photo gallery coming soon. Please check back for new project photos.',
      videosSectionTitle: 'Videos',
      videosSectionSubtitle:
        'Short highlights of our installations, finishes, and completed spaces.',
      videosEmpty:
        'Video gallery coming soon. Follow us on social media for more behind-the-scenes content.',

      socialTitle: 'Follow Us',
      socialSubtitle:
        'Stay inspired with the latest granite countertops, tile work, and behind-the-scenes videos.',
      socialInstagramTitle: 'Instagram',
      socialInstagramText:
        'Follow us on Instagram to see our latest granite installations, tile designs, and project highlights.',
      socialInstagramBtn: 'View Instagram',
      socialFacebookTitle: 'Facebook',
      socialFacebookText:
        'Like our Facebook page for project updates, reviews, and new service announcements.',
      socialFacebookBtn: 'View Facebook',
      socialTikTokTitle: 'TikTok',
      socialTikTokText:
        'Follow us on TikTok for quick installation clips, tips, and transformation videos.',
      socialTikTokBtn: 'View TikTok',
      socialPreviewPlaceholder: '',
    },
    es: {
      companyName: 'Ticas Tile & Granite',
      companyTagline: 'Instalación Premium de Granito y Azulejo',
      galleryTagline: 'Galería de Proyectos',
      socialTagline: 'Síguenos',

      navHome: 'Inicio',
      navGallery: 'Galería',
      navSocial: 'Redes',

      heroTitle: 'Instalación Premium de Granito y Azulejo',
      heroSubtitle:
        'Mejoramos cocinas, baños y espacios comerciales con granito, azulejos y trabajos en piedra de alta calidad.',
      btnViewGallery: 'Ver Galería',
      btnFollowUs: 'Síguenos',

      statProjects: 'Proyectos Completados',
      statYears: 'Años de Experiencia',
      statRating: 'Calidad Valorada por Clientes',

      aboutTitle: 'Acerca de Ticas Tile & Granite',
      aboutText1:
        'Ticas Tile & Granite se especializa en instalaciones premium de granito y azulejo para espacios residenciales y comerciales. Desde cubiertas de cocina de lujo hasta regaderas de azulejo personalizadas, entregamos trabajo detallado y calidad duradera.',
      aboutText2:
        'Nuestro equipo combina técnicas de instalación precisas con materiales de piedra cuidadosamente seleccionados, asegurando que cada proyecto refleje la fuerza, belleza y durabilidad de la piedra natural.',
      aboutList1Title: 'Residencial y Comercial',
      aboutList1Text: 'Desde casas familiares hasta grandes propiedades comerciales.',
      aboutList2Title: 'Licenciados y Asegurados',
      aboutList2Text: 'Seguridad, cumplimiento y calidad en cada proyecto.',
      aboutMediaPlaceholder: 'Vista previa de proyecto de cubierta de granito',
      aboutBadge: 'Trabajo en Piedra a Medida',
      aboutMediaText:
        'Cortes precisos, cantos detallados y líneas de boquilla limpias.',

      servicesTitle: 'Nuestros Servicios',
      servicesSubtitle:
        'Soluciones completas de granito y azulejo adaptadas a su espacio.',
      serviceGraniteTitle: 'Cubiertas de Granito',
      serviceGraniteText:
        'Placas de granito hechas a la medida para cocinas, baños, islas y más.',
      serviceTileTitle: 'Instalación de Azulejo',
      serviceTileText:
        'Instalación precisa de azulejo para pisos, regaderas, backsplashes, entradas y áreas exteriores.',
      serviceCountertopsTitle: 'Superficies de Cuarzo y Piedra',
      serviceCountertopsText:
        'Opciones de cuarzo y piedra de alto rendimiento con acabados modernos y continuos.',
      serviceCustomTitle: 'Trabajo y Diseño Personalizado',
      serviceCustomText:
        'Instalaciones especiales, muros decorativos, cocinas exteriores y diseños totalmente personalizados en piedra.',

      whyTitle: 'Por Qué Elegir Ticas Tile & Granite',
      whySubtitle:
        'Un equipo enfocado en la calidad, la precisión y resultados duraderos.',
      whyQualityTitle: 'Materiales Premium',
      whyQualityText:
        'Seleccionamos cuidadosamente granito, azulejo y piedra que cumplen con altos estándares de durabilidad y estética.',
      whyCraftTitle: 'Detalle y Acabado',
      whyCraftText:
        'Líneas limpias, cortes exactos y patrones alineados profesionalmente.',
      whyServiceTitle: 'Servicio Confiable',
      whyServiceText:
        'Comunicación clara, cumplimiento de tiempos y respeto por su hogar o proyecto.',

      ctaTitle: '¿Listo para renovar su espacio?',
      ctaText:
        'Explore nuestros proyectos recientes en la galería o síganos en redes sociales para ver más transformaciones.',

      galleryTitle: 'Galería de Proyectos',
      gallerySubtitle:
        'Descubra nuestras cubiertas de granito, instalaciones de azulejo y proyectos en piedra.',
      photosSectionTitle: 'Fotos',
      photosSectionSubtitle:
        'Una selección de nuestros proyectos recientes de granito y azulejo.',
      photosEmpty:
        'Galería de fotos próximamente. Vuelva pronto para ver nuevos proyectos.',
      videosSectionTitle: 'Videos',
      videosSectionSubtitle:
        'Pequeños videos de nuestras instalaciones, detalles y espacios terminados.',
      videosEmpty:
        'Galería de videos próximamente. Síganos en redes sociales para más contenido.',

      socialTitle: 'Síguenos',
      socialSubtitle:
        'Manténgase inspirado con nuestras últimas cubiertas de granito, trabajos en azulejo y videos.',
      socialInstagramTitle: 'Instagram',
      socialInstagramText:
        'Síganos en Instagram para ver nuestras últimas instalaciones de granito, diseños de azulejo y proyectos destacados.',
      socialInstagramBtn: 'Ver Instagram',
      socialFacebookTitle: 'Facebook',
      socialFacebookText:
        'Dé like a nuestra página de Facebook para ver actualizaciones, reseñas y nuevos servicios.',
      socialFacebookBtn: 'Ver Facebook',
      socialTikTokTitle: 'TikTok',
      socialTikTokText:
        'Síganos en TikTok para clips rápidos de instalación, consejos y videos de transformación.',
      socialTikTokBtn: 'Ver TikTok',
      socialPreviewPlaceholder: '',
    },
  };

  const STORAGE_KEY = 'ttg_lang';

  function applyTranslations(lang) {
    const dict = translations[lang] || translations.en;
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });
  }

  function setLanguage(lang) {
    const normalized = lang === 'es' ? 'es' : 'en';
    localStorage.setItem(STORAGE_KEY, normalized);
    document.documentElement.lang = normalized;
    applyTranslations(normalized);
    const labelEl = document.getElementById('langLabel');
    if (labelEl) {
      labelEl.textContent = normalized.toUpperCase();
    }
  }

  function init() {
    const stored = localStorage.getItem(STORAGE_KEY) || 'en';
    setLanguage(stored);

    const toggle = document.getElementById('langToggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        const current = localStorage.getItem(STORAGE_KEY) || 'en';
        const next = current === 'en' ? 'es' : 'en';
        setLanguage(next);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

