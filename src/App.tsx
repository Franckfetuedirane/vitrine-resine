import { useEffect, useState, type FormEvent } from 'react';
import {
  ArrowDown, ArrowRight, ArrowUpRight, Facebook, Instagram, Linkedin,
  MapPin, Menu, Music2, Phone, Mail, Sparkles, X,
} from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import logoImage from './assets/images/IMG-20260913-WA0029.jpg';

const collections = [
  {
    number: '01',
    title: 'Boucles d’oreilles',
    detail: 'Formes, pigments et couleurs au choix',
    image: 'https://images.pexels.com/photos/17225168/pexels-photo-17225168/free-photo-of-red-flowers-encased-in-resin-earrings-hanging-from-flowerpot.jpeg?auto=compress&cs=tinysrgb&w=1100',
    alt: 'Boucles d’oreilles en résine avec fleurs rouges encapsulées',
  },
  {
    number: '02',
    title: 'Colliers & gourmettes',
    detail: 'Accessoires à personnaliser',
    image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=1100',
    alt: 'Collier présenté sur un fond clair',
  },
  {
    number: '03',
    title: 'Peignes & accessoires',
    detail: 'Détails uniques, finitions brillantes',
    image: 'https://images.pexels.com/photos/7256649/pexels-photo-7256649.jpeg?auto=compress&cs=tinysrgb&w=1100',
    alt: 'Détail de création artisanale et accessoires',
  },
  {
    number: '04',
    title: 'Coques de téléphone',
    detail: 'Une coque pensée selon vos envies',
    image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1100',
    alt: 'Téléphone et accessoires photographiés en studio',
  },
  {
    number: '05',
    title: 'Montres personnalisées',
    detail: 'Une idée cadeau qui se remarque',
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1100',
    alt: 'Montre présentée en gros plan',
  },
  {
    number: '06',
    title: 'Porte-clés en résine',
    detail: 'Petites créations à offrir ou à garder',
    image: 'https://images.pexels.com/photos/16137821/pexels-photo-16137821/free-photo-of-golden-handmade-keychain-on-book-page.jpeg?auto=compress&cs=tinysrgb&w=1100',
    alt: 'Porte-clé artisanal personnalisé',
  },
  {
    number: '07',
    title: 'Décoration & fleurs',
    detail: 'Plateaux, inclusions florales et cadeaux',
    image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1100',
    alt: 'Fleurs colorées pour une inspiration de création',
  },
];

const activities = [
  {
    number: '01',
    title: 'Résine époxy',
    text: 'Bijoux, accessoires, objets décoratifs et créations personnalisées.',
    image: 'https://images.pexels.com/photos/17225168/pexels-photo-17225168/free-photo-of-red-flowers-encased-in-resin-earrings-hanging-from-flowerpot.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Boucles d’oreilles avec fleurs encapsulées dans la résine',
    className: 'activity-resin',
  },
  {
    number: '02',
    title: 'Savons artisanaux',
    text: 'Des savons préparés avec soin pour les gestes du quotidien.',
    image: 'https://images.pexels.com/photos/3735152/pexels-photo-3735152.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Savons artisanaux présentés dans un décor lumineux',
    className: 'activity-soap',
  },
  {
    number: '03',
    title: 'Vinaigre de cuisine',
    text: 'Une fabrication artisanale parmi les activités de GS ART.',
    image: 'https://images.pexels.com/photos/35438467/pexels-photo-35438467/free-photo-of-assorted-vinegar-bottles-on-kitchen-counter.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Plusieurs bouteilles de vinaigre sur un comptoir de cuisine',
    className: 'activity-vinegar',
  },
  {
    number: '04',
    title: 'Balais traditionnels africains',
    text: 'Balais artisanaux aux poignées tressées et colorées.',
    image: 'https://images.pexels.com/photos/34692814/pexels-photo-34692814/free-photo-of-collection-of-traditional-brooms-with-colorful-handles.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Collection de balais traditionnels avec poignées colorées',
    className: 'activity-broom',
  },
  {
    number: '05',
    title: 'Décoration & autres',
    text: 'Des idées utiles et décoratives, conçues avec le même soin.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Intérieur décoré avec des objets soigneusement choisis',
    className: 'activity-decor',
  },
];

const steps = [
  { number: '01', title: 'Votre idée', text: 'Nous définissons ensemble l’objet, les couleurs et les détails.' },
  { number: '02', title: 'Préparation', text: 'Choix des moules, pigments et éléments à inclure.' },
  { number: '03', title: 'Coulée', text: 'La résine est dosée, teintée et coulée avec précision.' },
  { number: '04', title: 'Séchage & finition', text: 'La pièce durcit, puis est démoulée, poncée et polie.' },
  { number: '05', title: 'Votre création', text: 'Elle est vérifiée et préparée avant remise ou livraison.' },
];

const socialLinks = [
  { label: 'Instagram', Icon: Instagram, href: siteConfig.instagram },
  { label: 'Facebook', Icon: Facebook, href: siteConfig.facebook },
  { label: 'TikTok', Icon: Music2, href: siteConfig.tiktok },
  { label: 'LinkedIn', Icon: Linkedin, href: siteConfig.linkedin },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}`;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.showcase-reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const sendOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      'Bonjour GS ART, je souhaite demander une création en résine.',
      `Nom : ${formData.get('name')}`,
      `Téléphone : ${formData.get('phone')}`,
      `Création souhaitée : ${formData.get('creation')}`,
      `Détails : ${formData.get('details')}`,
    ].join('\n');
    window.open(`${whatsappUrl}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setFormSent(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div id="top" className="showcase">
      <header className="showcase-header">
        <a className="showcase-brand" href="#top" aria-label={`${siteConfig.brandName}, accueil`}>
          <img src={logoImage} alt="" />
          <span><strong>{siteConfig.brandName}</strong><small>Créations en résine époxy</small></span>
        </a>
        <button
          className="showcase-menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`showcase-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navigation principale">
          <a href="#creations" onClick={closeMenu}>Créations</a>
          <a href="#activites" onClick={closeMenu}>Activités</a>
          <a href="#atelier" onClick={closeMenu}>Notre démarche</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="showcase-nav-cta" href="#commande" onClick={closeMenu}>Commander <ArrowUpRight size={16} /></a>
        </nav>
      </header>

      <main>
        <section className="showcase-hero">
          <div className="showcase-hero-copy">
            <p className="showcase-kicker"><span /> Atelier au Cameroun</p>
            <h1>Résine époxy,<br /><em>créée pour vous.</em></h1>
            <p className="showcase-intro">Des pièces décoratives uniques, réalisées à la main et pensées autour de vos envies.</p>
            <div className="showcase-hero-actions">
              <a className="showcase-button" href="#creations">Découvrir nos créations <ArrowDown size={16} /></a>
              <a className="showcase-text-link" href="#contact">Parler de mon projet <ArrowRight size={16} /></a>
            </div>
            <div className="showcase-locations" aria-label="Nos villes">
              <span><MapPin size={15} /> Bafoussam</span>
              <span><MapPin size={15} /> Douala</span>
            </div>
          </div>
          <div className="showcase-hero-visual">
            <img src="https://images.pexels.com/photos/17225168/pexels-photo-17225168/free-photo-of-red-flowers-encased-in-resin-earrings-hanging-from-flowerpot.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="Boucles d’oreilles artisanales en résine avec fleurs encapsulées" />
            <div className="showcase-image-caption"><span>GS ART</span><span>Pièces réalisées sur mesure</span></div>
            <span className="showcase-image-index">01 / 03</span>
          </div>
          <div className="showcase-hero-note">La matière<br /><em>prend forme.</em></div>
        </section>

        <section id="creations" className="showcase-section showcase-creations showcase-reveal">
          <div className="showcase-section-heading">
            <div>
              <p className="showcase-kicker"><span /> L’univers GS ART</p>
              <h2>Des créations pour<br /><em>chaque envie.</em></h2>
            </div>
            <p>Boucles d’oreilles, colliers, peignes, coques, montres et porte-clés : découvrez les créations en résine époxy de GS ART.</p>
          </div>
          <div className="showcase-creation-grid">
            {collections.map((collection) => (
              <article className="showcase-creation" key={collection.number}>
                <div className="showcase-creation-image">
                  <img src={collection.image} alt={collection.alt} loading="eager" decoding="async" />
                  <span>{collection.number}</span>
                </div>
                <div className="showcase-creation-copy">
                  <h3>{collection.title}</h3>
                  <p>{collection.detail}</p>
                  <a href="#commande" aria-label={`Commander ${collection.title}`}><ArrowUpRight size={18} /></a>
                </div>
              </article>
            ))}
          </div>
          <div className="showcase-collection-note"><Sparkles size={17} /><p>Une couleur, un prénom, des fleurs séchées ou une idée spéciale ? <a href="#commande">Parlons de votre création sur mesure.</a></p></div>
        </section>

        <section id="activites" className="showcase-activities showcase-reveal">
          <div className="showcase-section-heading">
            <div>
              <p className="showcase-kicker"><span /> Les activités GS ART</p>
              <h2>Bien plus que<br /><em>la résine.</em></h2>
            </div>
            <p>GS ART rassemble plusieurs savoir-faire artisanaux pour la maison, le quotidien et les idées cadeaux.</p>
          </div>
          <div className="showcase-activity-grid">
            {activities.map((activity) => (
              <article className={`showcase-activity ${activity.className}`} key={activity.number}>
                <img src={activity.image} alt={activity.alt} loading="eager" decoding="async" />
                <div className="showcase-activity-shade" />
                <span className="showcase-activity-number">{activity.number}</span>
                <div className="showcase-activity-copy">
                  <h3>{activity.title}</h3>
                  <p>{activity.text}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="showcase-image-disclaimer">Visuels d’illustration des activités. Les produits et finitions peuvent varier selon les créations disponibles.</p>
        </section>

        <section id="atelier" className="showcase-process showcase-reveal">
          <div className="showcase-process-heading">
            <p className="showcase-kicker"><span /> Simplement, avec soin</p>
            <h2>La résine, étape<br /><em>par étape.</em></h2>
            <p>La qualité d’une création se joue dans la préparation, le dosage, le temps de séchage et le soin des finitions.</p>
          </div>
          <div className="showcase-steps">
            {steps.map((step) => (
              <article className="showcase-step" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="showcase-contact showcase-reveal">
          <div className="showcase-contact-intro">
            <p className="showcase-kicker"><span /> Bafoussam · Douala</p>
            <h2>Parlons de<br /><em>votre création.</em></h2>
            <p>Appelez-nous, écrivez-nous ou décrivez votre projet dans le formulaire. Nous sommes à votre écoute.</p>
            <a className="showcase-contact-detail" href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}><Phone size={18} /><span>Téléphone<strong>{siteConfig.phone}</strong></span></a>
            <a className="showcase-contact-detail" href={`mailto:${siteConfig.email}`}><Mail size={18} /><span>E-mail<strong>{siteConfig.email}</strong></span></a>
            <div className="showcase-contact-cities">
              <span><MapPin size={15} /> Bafoussam</span>
              <span><MapPin size={15} /> Douala</span>
              <span>Cameroun</span>
            </div>
          </div>
          <form id="commande" className="showcase-form" onSubmit={sendOrder}>
            <div className="showcase-form-heading">
              <span>PROJET SUR MESURE</span>
              <h3>Décrivez-nous votre idée</h3>
              <p>Le formulaire prépare un message WhatsApp avec vos informations.</p>
            </div>
            <div className="showcase-form-row">
              <label>Votre nom<input name="name" type="text" autoComplete="name" placeholder="Nom complet" required /></label>
              <label>Votre téléphone<input name="phone" type="tel" autoComplete="tel" placeholder="Ex. 6XX XX XX XX" required /></label>
            </div>
            <label>Type de création
              <select name="creation" defaultValue="" required>
                <option value="" disabled>Choisissez une création</option>
                <option>Boucles d’oreilles</option><option>Porte-clés en résine</option><option>Peigne en résine</option>
                <option>Collier ou gourmette</option><option>Coque de téléphone</option>
                <option>Montre ou accessoire</option><option>Objet décoratif</option>
                <option>Autre création sur mesure</option>
              </select>
            </label>
            <label>Votre idée<textarea name="details" rows={4} placeholder="Couleurs, dimensions, occasion, fleurs à inclure..." required /></label>
            <button className="showcase-button showcase-form-submit" type="submit">Envoyer ma demande sur WhatsApp <ArrowUpRight size={17} /></button>
            {formSent && <p className="showcase-form-status" role="status">Votre demande WhatsApp est prête. Envoyez le message dans la fenêtre ouverte.</p>}
          </form>
        </section>
      </main>

      <footer className="showcase-footer">
        <a className="showcase-footer-brand" href="#top">{siteConfig.brandName}<span>Résine époxy · Cameroun</span></a>
        <div className="showcase-socials" aria-label="Réseaux sociaux">
          {socialLinks.map(({ label, Icon, href }) => (
            <a key={label} href={href || '#contact'} aria-label={`${label}${href ? '' : ', lien à ajouter'}`} title={href ? label : `${label} · lien à ajouter`}><Icon size={18} /></a>
          ))}
        </div>
        <span>© {new Date().getFullYear()} {siteConfig.brandName}</span>
        <a href="#top">Retour en haut <ArrowUpRight size={15} /></a>
      </footer>
    </div>
  );
}

export default App;