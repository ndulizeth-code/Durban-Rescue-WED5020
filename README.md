 DURBAN-RESCUE-WED5020 - Part 3

Student:ST10527294
Module: WEDE5020
Website: Durban Rescue - Dog & Cat Adoption Durban

 Part 3 Features Implemented

2.1 JavaScript Interactivity:
- Accordion (about.html FAQ)
- Lightbox (adopt.html click pet image enlarges)
- Modal popup (adopt.html click card shows details)
- Leaflet Interactive Map (contact.html - Durban location -29.8587,31.0218)
- CSS Animations: fadeIn on pet cards, hover transform, smooth scroll

2.2 Dynamic Content:
- pets array in JS/script.js dynamically generates HTML (loadPets function)
- Search filter - type dog/cat/Buddy/Luna instantly filters
- Uses forEach and DOM manipulation

3. SEO:
- Titles with keywords: "Dog & Cat Adoption Durban"
- Meta descriptions on every page
- H1, H2, H3 hierarchy
- Alt text: "Dog for adoption at Durban Rescue Durban" etc
- Internal links between pages
- Mobile responsive with viewport meta and media queries (768px, 320px)
- Lazy loading on images: loading="lazy"

**3.2 Social & Local SEO:**
- Keywords: Durban, KZN, Durban Rescue, dog adoption Durban, cat adoption Durban
- Social links in footer
- Local SEO terms throughout

3.3 Technical SEO:
- robots.txt allows crawling and points to sitemap
- sitemap.xml with 5 URLs
- Lazy loading images
- HTTPS via Netlify deployment

4.1 Enquiry Form (enquiry.html):
- Input, select, textarea, button all present
- Attributes: required, minlength, pattern, readonly
- Action attribute points to Formspree for email: action="https://formspree.io/f/xzzbrqkw"
- JS validation: name length, phone 10 digits, email regex
- Error message div: id="enquiryError"
- Cost calculation: onchange shows R850 Dog / R650 Cat
- Availability: JS shows "available now in Durban"
- AJAX: fetch() with FormData simulates submission

4.2 General Contact (contact.html):
- Form with validation + AJAX

How to run:
Open index.html with Live Server. All JS in JS/script.js

GitHub & Live URL:
- GitHub: https://github.com/ST10527294/Durban-Rescue-WED5020
- Live Site: https://durban-rescue-wed5020.netlify.app