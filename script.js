// Microloan data
const PRODUCTS = [
  { name: "Займер", desc: "Первый займ до 30 000 ₽ под 0%. Решение за 2 минуты.", amount: 30000, term: "1–30 дней", rate: "0%", link: "#" },
  { name: "еКапуста", desc: "До 100 000 ₽ на карту. Без отказа. Онлайн 24/7.", amount: 100000, term: "1–365 дней", rate: "0.99%/день", link: "#" },
  { name: "MoneyMan", desc: "Первый займ бесплатно. До 15 000 ₽ без проверок.", amount: 15000, term: "7–30 дней", rate: "0%", link: "#" },
  { name: "WebBankir", desc: "Деньги на карту или QIWI. Ставка от 0,69% в день.", amount: 30000, term: "1–30 дней", rate: "0.69%/день", link: "#" },
  { name: "Vivus", desc: "Первый займ до 10 000 ₽ бесплатно. Решение мгновенно.", amount: 10000, term: "1–30 дней", rate: "0%", link: "#" },
  { name: "До Зарплаты", desc: "Займ до 30 000 ₽. Получите деньги за 15 минут.", amount: 30000, term: "5–30 дней", rate: "1.5%/день", link: "#" },
  { name: "TurboZaim", desc: "Микрозайм до 100 000 ₽. Решение за 1 минуту.", amount: 100000, term: "1–168 дней", rate: "0.8%/день", link: "#" },
  { name: "MigCredit", desc: "Первый займ до 15 000 ₽ под 0%. Повторный — до 99 999 ₽.", amount: 15000, term: "7–30 дней", rate: "0%", link: "#" }
];

// DOM elements
const productsContainer = document.getElementById('products');
const amountSlider = document.getElementById('amount');
const termSlider = document.getElementById('term');
const rateSlider = document.getElementById('rate');
const amountValue = document.getElementById('amount-value');
const termValue = document.getElementById('term-value');
const rateValue = document.getElementById('rate-value');
const menuToggle = document.querySelector('.menu-toggle');
const mainMenu = document.getElementById('mainMenu');

// Format numbers
function formatNum(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// Update values
amountSlider.addEventListener('input', () => {
  amountValue.textContent = `${formatNum(amountSlider.value)} ₽`;
});
termSlider.addEventListener('input', () => {
  termValue.textContent = `${termSlider.value} дн.`;
});
rateSlider.addEventListener('input', () => {
  rateValue.textContent = `${parseFloat(rateSlider.value).toFixed(1)}%`;
});

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
  mainMenu.classList.toggle('active');
});

// Render products
function renderProducts() {
  productsContainer.innerHTML = PRODUCTS.map(item => `
    <div class="product-card">
      <div class="product-card-header">
        <h3>${item.name}</h3>
        <div class="rate">${item.rate}</div>
      </div>
      <div class="product-card-body">
        <p>${item.desc}</p>
        <div><strong>До ${formatNum(item.amount)} ₽</strong> • ${item.term}</div>
      </div>
      <div class="product-card-footer">
        <a href="${item.link}" class="btn" target="_blank">Перейти</a>
      </div>
    </div>
  `).join('');
}

// Initialize
renderProducts();
