import { useEffect, useState, type FormEvent } from 'react';
import {
  ArrowDown, ArrowRight, ArrowUpRight, Facebook, Ghost, Instagram, Linkedin,
  MapPin, Menu, Music2, Phone, Mail, Sparkles, X,
} from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import logoImage from './assets/images/IMG-20260913-WA0029.jpg';
import floralFrameImage from './assets/images/0a113fd2ba558258de29ccc753f139e3.jpg';
import africaResinImage from './assets/images/0c7d31c0997141067f630173c17b117d.jpg';
import floralKeychainPhoto from './assets/images/805e1854acd0933be94cc75954454fa5.jpg';
import floralClockImage from './assets/images/e3a22cd6dccad69146d941e6801db070.jpg';
import floralTableImage from './assets/images/f8ab8e09c8344267cf779c5bbab4651d.jpg';
import braceletPhoto from './assets/images/image.png';
import phoneCasePhoto from './assets/images/image copy.png';
import necklacePhoto from './assets/images/image copy 2.png';
import watchImage from './assets/products/gs-montre-personnalisee.png';
import earringsImage from './assets/products/gs-boucles-resine.png';
import soapImage from './assets/products/gs-savons-artisanaux.png';
import vinegarImage from './assets/products/gs-vinaigre-cuisine.png';
import broomImage from './assets/products/gs-balais-africains.png';

const collections = [
  {
    number: '01',
    title: 'Boucles d’oreilles',
    detail: 'Fleurs, couleurs et formes au choix',
    image: earringsImage,
    alt: 'Boucles d’oreilles en résine décorées de fleurs séchées',
  },
  {
    number: '02',
    title: 'Bracelets en résine',
    detail: 'Des fleurs délicates à porter au quotidien',
    image: braceletPhoto,
    alt: 'Bracelets fins avec fleurs séchées encapsulées dans la résine',
  },
  {
    number: '03',
    title: 'Colliers en résine',
    detail: 'Un pendentif fleuri à offrir ou à porter',
    image: necklacePhoto,
    alt: 'Collier avec pendentif cœur bleu en résine, fleur séchée et éclats dorés',
  },
  {
    number: '04',
    title: 'Coques de téléphone personnalisées',
    detail: 'Des effets marbrés et des détails selon vos envies',
    image: phoneCasePhoto,
    alt: 'Coque de téléphone marbrée rose et turquoise avec des éclats dorés',
  },
  {
    number: '05',
    title: 'Montres personnalisées',
    detail: 'Une idée cadeau pleine de caractère',
    image: watchImage,
    alt: 'Montre personnalisée avec cadran effet résine colorée',
  },
  {
    number: '06',
    title: 'Porte-clés en résine',
    detail: 'Des petits cadeaux à garder près de soi',
    image: floralKeychainPhoto,
    alt: 'Porte-clés personnalisé en résine avec fleurs séchées et détails dorés',
  },
  {
    number: '07',
    title: 'Horloges florales en résine',
    detail: 'Fleurs délicates et chiffres dorés pour votre intérieur',
    image: floralClockImage,
    alt: 'Horloge ronde en résine transparente incrustée de fleurs roses séchées',
  },
  {
    number: '08',
    title: 'Décoration murale en résine',
    detail: 'Une pièce sculpturale aux reflets bleus et dorés',
    image: africaResinImage,
    alt: 'Carte de l’Afrique en résine bleue et or au-dessus d’une table assortie',
  },
];

const activities = [
  {
    number: '01',
    title: 'Créations en résine époxy',
    text: 'Bijoux, accessoires, objets décoratifs et pièces personnalisées.',
    image: floralKeychainPhoto,
    alt: 'Porte-clés en résine décorés de fleurs et de pigments colorés',
    className: 'activity-resin',
  },
  {
    number: '02',
    title: 'Savons artisanaux',
    text: 'Des savons préparés avec soin pour le quotidien.',
    image: soapImage,
    alt: 'Savons artisanaux aux couleurs naturelles',
    className: 'activity-soap',
  },
  {
    number: '03',
    title: 'Vinaigre de cuisine',
    text: 'Une fabrication artisanale parmi les activités de GS ART.',
    image: vinegarImage,
    alt: 'Plusieurs bouteilles de vinaigre sur un comptoir de cuisine',
    className: 'activity-vinegar',
  },
  {
    number: '04',
    title: 'Balais traditionnels africains',
    text: 'Des balais artisanaux aux poignées tressées et colorées.',
    image: broomImage,
    alt: 'Collection de balais traditionnels avec poignées colorées',
    className: 'activity-broom',
  },
  {
    number: '05',
    title: 'Décoration & cadeaux',
    text: 'Des pièces décoratives conçues avec le même soin.',
    image: africaResinImage,
    alt: 'Décoration intérieure avec une carte de l’Afrique en résine bleue et or',
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
  { label: 'Snapchat', Icon: Ghost, href: siteConfig.snapchat },
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
            <p className="showcase-intro">Des créations en résine pleines de couleurs, imaginées pour vos cadeaux, mariages et anniversaires.</p>
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
            <div className="showcase-hero-photo showcase-hero-photo-main">
              <img src={floralTableImage} alt="Table basse en bois avec un plateau fleuri coulé dans la résine transparente" fetchPriority="high" decoding="async" />
              <div className="showcase-image-caption"><span>GS ART</span><span>Des fleurs préservées dans la résine</span></div>
              <span className="showcase-image-index">PIÈCES UNIQUES</span>
            </div>
            <div className="showcase-hero-photo showcase-hero-photo-detail" aria-hidden="true">
              <img src={floralKeychainPhoto} alt="" decoding="async" />
            </div>
            <div className="showcase-hero-photo showcase-hero-photo-accent" aria-hidden="true">
              <img src={floralFrameImage} alt="" decoding="async" />
            </div>
            <div className="showcase-event-card">
              <span><Sparkles size={16} /></span>
              <div><strong>La matière prend forme.</strong><small>Vos idées deviennent des pièces uniques</small></div>
            </div>
          </div>
        </section>

        <section id="creations" className="showcase-section showcase-creations showcase-reveal">
          <div className="showcase-section-heading">
            <div>
              <p className="showcase-kicker"><span /> L’univers GS ART</p>
              <h2>Des créations pour<br /><em>chaque envie.</em></h2>
            </div>
            <p>Boucles d’oreilles, pochettes, peignes, montres, porte-clés et bien d’autres créations en résine époxy, réalisées par GS ART.</p>
          </div>
          <div className="showcase-creation-grid">
            {collections.map((collection) => (
              <article className={`showcase-creation showcase-creation-${collection.number}`} key={collection.number}>
                <div className="showcase-creation-image">
                  <img src={collection.image} alt={collection.alt} loading="lazy" decoding="async" />
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
                <img src={activity.image} alt={activity.alt} loading="lazy" decoding="async" />
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
                <option>Pochette personnalisée</option><option>Plateau fleuri en résine</option>
                <option>Porte-bijoux personnalisé</option>
                <option>Montre personnalisée</option><option>Objet décoratif</option>
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
