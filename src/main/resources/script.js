const benefits = [
  { img: 'assets/benefits/ben1.png', title: 'Saves Lives', description: 'Save up to three lives.' },
  { img: 'assets/benefits/ben2.png', title: 'Health Check-up', description: 'Get a mini-health check' },
  { img: 'assets/benefits/ben3.png', title: 'Boosts Heart Health', description: 'Helps regulate iron.' },
  { img: 'assets/benefits/ben4.png', title: 'Feels Good to Help Others', description: 'Increases happiness.' },
  { img: 'assets/benefits/ben5.png', title: 'Stimulates Blood Cell Production', description: 'Body makes fresh blood cells.' }
];

const cardsEl = document.getElementById('cards');
benefits.forEach(b => {
  const div = document.createElement('div');
  div.className = 'card';
  div.innerHTML = '<h3>' + b.title + '</h3><p>' + b.description + '</p>';
  cardsEl.appendChild(div);
});

// Build share URLs using current location
const shareUrl = window.location.href;
const shareText = encodeURIComponent('Learn how donating blood saves lives and benefits your health. ' + shareUrl);

document.getElementById('fb').href = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(shareUrl);
document.getElementById('tw').href = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(shareUrl) + '&text=' + shareText;
document.getElementById('wa').href = 'https://wa.me/?text=' + shareText;
document.getElementById('ln').href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(shareUrl);
document.getElementById('mail').href = 'mailto:?subject=' + encodeURIComponent('Discover blood donation') + '&body=' + shareText;
document.getElementById('copy').addEventListener('click', (e) => {
  e.preventDefault();
  navigator.clipboard.writeText(shareUrl).then(() => {
    const s = document.getElementById('copy-status');
    s.style.display = 'block';
    setTimeout(() => s.style.display = 'none', 2000);
  });
});
