const BOT_TOKEN = '8335838796:AAHnE-KQbmJcZOo_mKgM4XxQPdIMUKihtH0';
const CHAT_ID = '8335838796';

function sendYes() {
    const message = '💚 Someone clicked YES!';
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}`;
    fetch(url)
    .then(response => {
        console.log('YES message sent to Telegram!');
    })
    .catch(error => console.error('Error:', error));
    document.querySelector('.t').style.visibility = 'visible';
    document.querySelector('.nobtn').style.visibility = 'hidden';
}

function moveButton(event) {
    const button = event.target;
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 100);
    button.style.position = 'fixed';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
    const message = '❌ Someone clicked NO!';
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}`;
    fetch(url)
    .then(response => {
        console.log('NO message sent to Telegram!');
    })
    .catch(error => console.error('Error:', error));
}