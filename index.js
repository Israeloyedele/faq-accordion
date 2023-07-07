const faqs = document.querySelectorAll('.faq-wrap');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
    if (faq.classList.contains('show')){
        faq.classList.remove('show'); 
    } else {
        faqs.forEach(faq => {
            faq.classList.remove('show'); 
        });
        faq.classList.add('show')
        }
        })
    });