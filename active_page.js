var color = '#D5C455'
var page_url = window.location.href;
if (page_url.includes('index.html')) {
    document.getElementById('index').style.color = color;
} else if (page_url.includes('about.html')) {
    document.getElementById('about').style.color = color;
} else if (page_url.includes('services.html')) {
    document.getElementById('services').style.color = color;
} else if (page_url.includes('experience.html')) {
    document.getElementById('experience').style.color = color;
} else if (page_url.includes('contact.html')) {
    document.getElementById('contact').style.color = color;
}