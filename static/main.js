const toggle = document.querySelector('.tablet-nav-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

if (toggle && mobileMenu) {
  toggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
  });
}

// const contactForm = document.querySelector('#contact-form');
// if (contactForm) {
//   contactForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const formData = new FormData(contactForm);
//     const name = formData.get('name') || 'there';
//     alert(`Thanks, ${name}! We will get back to you within one business day.`);
//     contactForm.reset();
//   });
// }

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name') || 'there';
    const email = formData.get('email') || 'Not provided';
    const business = formData.get('business') || 'Not provided';
    const service = formData.get('service') || 'Not specified';
    const message = formData.get('message') || 'No message';
    
    // Create WhatsApp message with all form data
    const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Business:* ${business}%0A*Service:* ${service}%0A*Message:* ${message}`;
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/923004108197?text=${whatsappMessage}`, '_blank');
    
    alert(`Thanks, ${name}! You'll now be redirected to WhatsApp to send your message.`);
    contactForm.reset();
  });
}



