// Knowledge base for the admin Help Assistant widget. Each topic is matched
// against what the admin types by keyword overlap (see helpSearch.js) — no
// external API involved, so keep this in sync whenever the admin UI changes.
//
// `section` should match a Dashboard SECTIONS id (or 'general' for
// cross-cutting topics) so the assistant can prioritize suggestions for
// whichever page is currently open.

const topics = [
  // ---------- General ----------
  {
    id: 'save-publish',
    section: 'general',
    title: 'How does "Save & Publish" work?',
    keywords: ['save', 'publish', 'commit', 'deploy', 'live site', 'update the site', 'button'],
    steps: [
      'Make your edits anywhere on the page — they only exist in this browser tab so far.',
      'Click the blue "Save & Publish" button in the top-right corner.',
      'That writes your changes directly into the site\'s code repository on GitHub.',
    ],
    impact: 'The GitHub write triggers Netlify to automatically rebuild and redeploy the public site. That takes about 1–3 minutes, so the live site keeps showing the old content for a short while even though your save already succeeded. Each admin page saves independently — saving Projects does not save unsaved edits on another page.',
  },
  {
    id: 'upload-image',
    section: 'general',
    title: 'How do I upload an image, and why did it look broken right after?',
    keywords: ['upload', 'image', 'photo', 'picture', 'thumbnail', 'broken image', 'not showing', 'not uploading'],
    steps: [
      'Click "Upload new image" under any Image field and choose a file.',
      'It uploads straight to the site\'s GitHub repository as its own commit — this happens immediately, separately from "Save & Publish".',
      'The thumbnail in the admin panel updates right away using a local copy of the file so you can confirm it looks right.',
    ],
    impact: 'The image file itself is committed to GitHub instantly, but it will not be reachable at its live URL on the public website until the next Netlify rebuild finishes (roughly 1–3 minutes — same delay as any save). You do still need to click "Save & Publish" on the page afterwards, because that\'s what records which entry the image belongs to.',
  },
  {
    id: 'grid-popup',
    section: 'general',
    title: 'How do I edit an entry shown as a card?',
    keywords: ['grid', 'card', 'popup', 'modal', 'edit entry', 'click card'],
    steps: [
      'Click anywhere on a card to open its editor in a popup window.',
      'Make your changes inside the popup.',
      'Close it with "Done", the ✕ in the header, clicking outside the popup, or pressing Escape.',
    ],
    impact: 'Closing the popup just closes the editor — nothing is sent to the live site yet. You still need "Save & Publish" at the top of the page to make the changes permanent.',
  },
  {
    id: 'reorder-remove',
    section: 'general',
    title: 'How do I reorder or delete an entry?',
    keywords: ['reorder', 'move', 'order', 'delete', 'remove', 'arrow', 'up down'],
    steps: [
      'List view: use the ↑ / ↓ arrows on a row to move it, or × to delete it.',
      'Grid view: open the card\'s popup and use the ↑ / ↓ / × buttons in its header — or just hover the card and click the × in its corner to delete without opening it.',
    ],
    impact: 'The order shown here is the exact order entries appear on the public site. As with any edit, click "Save & Publish" for the new order or a deletion to actually go live.',
  },
  {
    id: 'add-entry',
    section: 'general',
    title: 'How do I add a new entry?',
    keywords: ['add', 'new', 'create entry', '+ add', 'new item'],
    steps: [
      'Click the "+ Add" button above any list or grid.',
      'A blank entry appears at the top — open it and fill in its fields.',
    ],
    impact: 'The new entry stays local to your browser until you click "Save & Publish"; it will not appear on the live site before that.',
  },
  {
    id: 'sign-in',
    section: 'general',
    title: 'How do I sign in / what is the access token?',
    keywords: ['login', 'log in', 'sign in', 'token', 'access token', 'password'],
    steps: [
      'On the sign-in screen, click "Don\'t have a token yet?" for the exact steps to generate one on GitHub.',
      'In short: create a GitHub personal access token scoped only to the NGO-React-app repository, with Contents set to "Read and write".',
      'Paste the token into the Access Token field and click "Sign in".',
    ],
    impact: 'The token is what lets this panel read and write the site\'s content directly on your behalf — treat it like a password, since anyone with it can edit the live site.',
  },

  // ---------- Home Page ----------
  {
    id: 'home-hero',
    section: 'home',
    title: 'Editing the Home page Hero',
    keywords: ['hero', 'banner', 'homepage title', 'gif'],
    steps: [
      'Set the background GIF/Image, Title, and Subtitle.',
      'Fill in the Primary and Secondary button text + link pairs.',
    ],
    impact: 'This is the very first thing a visitor sees at the top of the homepage, above the fold.',
  },
  {
    id: 'home-focus',
    section: 'home',
    title: 'Editing Focus Areas',
    keywords: ['focus area', 'icon', 'font awesome', 'animation'],
    steps: [
      'Each entry needs an Icon — a Font Awesome class name, e.g. "fas fa-lightbulb".',
      'Pick an Animation: pulse, rotate, or bounce.',
      'Set the Title shown under the icon.',
    ],
    impact: 'Rendered as the small animated icon cards in the homepage\'s Focus Areas section, in the order listed here.',
  },
  {
    id: 'home-about-preview',
    section: 'home',
    title: 'Editing the About Preview section',
    keywords: ['about preview', 'mission', 'vision', 'diversity'],
    steps: [
      'Fill in the section title, Mission/Vision titles and text, and Diversity title/intro.',
      'Diversity Points is a bullet list.',
      'Set the button text and link at the bottom.',
    ],
    impact: 'Shows a condensed mission/vision/diversity summary on the homepage that links through to the full About page.',
  },
  {
    id: 'home-podcast-gallery-preview',
    section: 'home',
    title: 'Podcast Preview & Gallery Preview sections',
    keywords: ['podcast preview', 'gallery preview', 'view more'],
    steps: [
      'Here you only set the section title and the "view more" button text/link.',
    ],
    impact: 'The actual episodes/photos shown are pulled automatically — the first 3 items from the Podcasts page and the first 3 from the Gallery page respectively. To change what appears, edit content on the Podcasts or Gallery admin pages, not here.',
  },
  {
    id: 'home-testimonials',
    section: 'home',
    title: 'Editing Testimonials',
    keywords: ['testimonial', 'quote', 'review'],
    steps: [
      'Each entry has a Quote and an Author Name.',
      'Set the section title and the button text/link below the list.',
    ],
    impact: 'Displayed as the testimonials section on the homepage, in the order listed.',
  },

  // ---------- About Page ----------
  {
    id: 'about-basics',
    section: 'about',
    title: 'Editing Mission, Vision, Impact, Achievements, Diversity, Highlights',
    keywords: ['mission', 'vision', 'impact', 'achievements', 'diversity', 'highlights', 'bullet points'],
    steps: [
      'Each of these sections has a Title/Intro plus a plain bullet-point list of "Items".',
      'Use "+ Add" under Items to add another bullet point.',
    ],
    impact: 'These render as the matching text sections and bullet lists down the About page, in this order.',
  },
  {
    id: 'about-partners',
    section: 'about',
    title: 'Editing Partners',
    keywords: ['partner', 'partners'],
    steps: [
      'Click "+ Add" or click an existing card to open its popup.',
      'Set Image, Name, Position (optional), and Bio.',
    ],
    impact: 'Shown as the Partners grid on the About page with photo, name, role, and bio.',
  },
  {
    id: 'about-tech-team',
    section: 'about',
    title: 'Editing Tech Team',
    keywords: ['tech team', 'developer', 'team'],
    steps: [
      'Click "+ Add" or click an existing card to open its popup.',
      'Set Image, Name, and a Link Text/URL pair (e.g. their LinkedIn or GitHub).',
    ],
    impact: 'Shown as the Tech Team grid on the About page.',
  },

  // ---------- Contact Page ----------
  {
    id: 'contact-basics',
    section: 'contact',
    title: 'Editing the Contact page',
    keywords: ['contact', 'address', 'phone', 'email', 'success message'],
    steps: [
      'Hero: Title and Subtitle at the top of the page.',
      'Form & Success Message: the form section title, plus the title/text shown after someone submits the contact form.',
      'Contact Info: section title, Address, Phone, and Email.',
    ],
    impact: 'These fields control the text and contact details shown on the public Contact page.',
  },

  // ---------- Projects ----------
  {
    id: 'projects-add',
    section: 'projects',
    title: 'Adding or editing a Project',
    keywords: ['project', 'add project', 'new project'],
    steps: [
      'Click "+ Add" or click an existing card to open its popup.',
      'Set Title and Image.',
      'Either fill in an external Link (e.g. an Instagram post), or click "+ Create a Project Page for this" to build a dedicated page instead.',
      'Add Tags (location, date, etc.) — these show as small pills on the card.',
    ],
    impact: 'Shows up as a card in the Projects grid on the public site, in this order (unless it\'s the Featured one — see the "featured project" topic).',
  },
  {
    id: 'projects-featured',
    section: 'projects',
    title: 'How does the "Featured" project work?',
    keywords: ['featured', 'feature', 'highlight', 'highlighted project'],
    steps: [
      'Open exactly one project\'s popup and turn on "Featured".',
      'Make sure no other project is also marked Featured.',
    ],
    impact: 'The public Projects page always shows one big highlighted card at the top and a regular grid below. Exactly one project must be Featured: if none are, the Projects page will error out; if more than one is, only the first one becomes the big card and every other Featured project disappears from the page entirely (it\'s filtered out of the regular grid too). So always keep exactly one project Featured.',
  },
  {
    id: 'projects-page-vs-link',
    section: 'projects',
    title: 'External Link vs. dedicated Project Page — what\'s the difference?',
    keywords: ['project page', 'link', 'external url', 'create page', 'remove page link'],
    steps: [
      'Link: clicking the project on the site goes straight to that external URL (e.g. an Instagram post).',
      'Project Page: click "+ Create a Project Page for this" to build a dedicated page at /projects/<slug> instead, with its own Hero Image and content blocks — edit that content right inside the same popup once it\'s linked.',
      'Click "Remove Page Link" to detach the page from this project.',
    ],
    impact: 'When a Project Page is linked, the site uses it instead of the Link field — the project card links to /projects/<slug>. Removing the page link does not delete the page itself; it just becomes unlinked (visible under Project Pages as "Not linked to any project") and stops being reachable from this project.',
  },

  // ---------- Project Pages ----------
  {
    id: 'project-pages-overview',
    section: 'projectPages',
    title: 'What is the Project Pages section?',
    keywords: ['project pages', 'overview', 'read only'],
    steps: [
      'This page is read-only — it just lists every dedicated project page that exists.',
      'To create or edit one, go to the Projects section and open the matching project\'s popup.',
    ],
    impact: 'Each card shows the page\'s hero image, its URL (/projects/<slug>), how many content blocks it has, and which project (if any) currently links to it.',
  },

  // ---------- Ambassadors ----------
  {
    id: 'ambassadors-add',
    section: 'ambassadors',
    title: 'Adding or editing an Ambassador',
    keywords: ['ambassador', 'add ambassador'],
    steps: [
      'Click "+ Add" or click an existing card to open its popup.',
      'Set Photo, Name, and Instagram Link.',
    ],
    impact: 'Shown as a card on the Ambassadors page, in the order listed.',
  },

  // ---------- Podcasts ----------
  {
    id: 'podcasts-add',
    section: 'podcasts',
    title: 'Adding or editing a Podcast',
    keywords: ['podcast', 'episode', 'youtube'],
    steps: [
      'Click "+ Add" or click an existing card to open its popup.',
      'Set Thumbnail, Title, and YouTube Link.',
    ],
    impact: 'Shown on the Podcasts page, and the first 3 podcasts here also appear automatically in the homepage\'s Podcast Preview section.',
  },

  // ---------- Gallery ----------
  {
    id: 'gallery-add',
    section: 'gallery',
    title: 'Adding or editing a Gallery image',
    keywords: ['gallery', 'photo', 'video link', 'floating'],
    steps: [
      'Click "+ Add" or click an existing card to open its popup.',
      'Set the Image, an optional caption Title, and an optional Video Link.',
      'Toggle "Floating animation" if you want it to have that effect on the page.',
    ],
    impact: 'Shown on the Gallery page, and the first 3 images here also appear automatically in the homepage\'s Gallery Preview section.',
  },

  // ---------- Site-wide ----------
  {
    id: 'site-logo',
    section: 'site',
    title: 'Editing the logo',
    keywords: ['logo', 'typewriter'],
    steps: [
      'Set the Logo Text (used for the typewriter effect) and the Logo Image.',
    ],
    impact: 'The logo appears in the navbar at the top of every page on the site.',
  },
  {
    id: 'site-footer',
    section: 'site',
    title: 'Editing the Footer',
    keywords: ['footer', 'organization name', 'tagline'],
    steps: [
      'Set the Organization Name, Tagline, and the "Connect With Us" title.',
    ],
    impact: 'Shown in the footer at the bottom of every page on the site.',
  },
  {
    id: 'site-social',
    section: 'site',
    title: 'Editing Social Links',
    keywords: ['social', 'facebook', 'twitter', 'instagram', 'linkedin', 'youtube', 'spotify'],
    steps: [
      'Fill in the URL for each platform you use: Facebook, Twitter, Instagram, LinkedIn, YouTube, Spotify.',
      'Leave any you don\'t use blank.',
    ],
    impact: 'Controls the social icons/links shown site-wide, typically in the navbar and footer.',
  },
];

export default topics;
