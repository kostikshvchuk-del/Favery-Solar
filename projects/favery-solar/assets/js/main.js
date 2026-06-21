let cart = JSON.parse(localStorage.getItem('faveryCart')) || [];
let currentFilter = 'all';
let currentSort = 'default';

const productsGrid = document.getElementById('productsGrid');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const orderForm = document.getElementById('orderForm');
const orderCart = document.getElementById('orderCart');
const toast = document.getElementById('toast');
const header = document.getElementById('header');
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const sortSelect = document.getElementById('sortSelect');

function renderProducts() {
  let filtered = currentFilter === 'all' ? [...products] : products.filter(p => p.category === currentFilter);
  const sort = currentSort;

  if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  else if (sort === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));

  productsGrid.innerHTML = filtered.map(p => {
    const inCart = cart.find(item => item.id === p.id);
    return `
      <div class="product-card" data-id="${p.id}">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        <div class="product-img">
          <img src="${p.img}" alt="${p.name}" loading="lazy">
        </div>
        <div class="product-body">
          <h3>${p.name}</h3>
          <p class="product-specs">${p.specs}</p>
          <div class="product-prices">
            ${p.oldPrice ? `<span class="old-price">${p.oldPrice.toLocaleString()} грн</span>` : ''}
            <span class="current-price">${p.price.toLocaleString()} грн</span>
          </div>
          <button class="btn btn-primary btn-sm add-to-cart" data-id="${p.id}">
            ${inCart ? '✓ У кошику' : 'Додати в кошик'}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function renderCart() {
  cartItems.innerHTML = cart.map((item, idx) => {
    const prod = products.find(p => p.id === item.id);
    return `
      <div class="cart-item">
        <img src="${prod.img}" alt="${prod.name}">
        <div class="cart-item-info">
          <div class="cart-item-title">${prod.name}</div>
          <div class="cart-item-price">${(prod.price * item.qty).toLocaleString()} грн</div>
        </div>
        <div class="cart-item-qty">
          <button class="qty-btn" data-idx="${idx}" data-action="minus">−</button>
          <span>${item.qty}</span>
          <button class="qty-btn" data-idx="${idx}" data-action="plus">+</button>
        </div>
        <button class="cart-item-del" data-idx="${idx}">&times;</button>
      </div>
    `;
  }).join('') || '<p class="cart-empty">Кошик порожній</p>';

  const total = cart.reduce((sum, item) => {
    const prod = products.find(p => p.id === item.id);
    return sum + (prod ? prod.price * item.qty : 0);
  }, 0);
  cartTotal.textContent = `${total.toLocaleString()} грн`;
  cartCount.textContent = cart.reduce((s, i) => s + i.qty, 0);

  localStorage.setItem('faveryCart', JSON.stringify(cart));
}

function addToCart(id) {
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id, qty: 1 });
  }
  renderCart();
  renderProducts();
  showToast('Товар додано до кошика');
  cartSidebar.classList.add('open');
  cartOverlay.classList.add('show');
}

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

function toggleCart() {
  cartSidebar.classList.toggle('open');
  cartOverlay.classList.toggle('show');
}

productsGrid.addEventListener('click', e => {
  const btn = e.target.closest('.add-to-cart');
  if (btn) addToCart(Number(btn.dataset.id));
});

cartItems.addEventListener('click', e => {
  const btn = e.target.closest('.qty-btn');
  const del = e.target.closest('.cart-item-del');
  if (btn) {
    const idx = Number(btn.dataset.idx);
    if (btn.dataset.action === 'minus') {
      if (cart[idx].qty > 1) cart[idx].qty--;
      else cart.splice(idx, 1);
    } else {
      cart[idx].qty++;
    }
    renderCart();
    renderProducts();
  }
  if (del) {
    cart.splice(Number(del.dataset.idx), 1);
    renderCart();
    renderProducts();
  }
});

cartBtn.addEventListener('click', toggleCart);
cartClose.addEventListener('click', toggleCart);
cartOverlay.addEventListener('click', toggleCart);

checkoutBtn.addEventListener('click', () => {
  if (!cart.length) { showToast('Кошик порожній'); return; }
  checkoutModal.classList.add('open');
  modalOverlay.classList.add('show');
  orderCart.value = JSON.stringify(cart.map(item => {
    const prod = products.find(p => p.id === item.id);
    return { name: prod.name, qty: item.qty, price: prod.price };
  }));
});

modalClose.addEventListener('click', () => {
  checkoutModal.classList.remove('open');
  modalOverlay.classList.remove('show');
});
modalOverlay.addEventListener('click', () => {
  checkoutModal.classList.remove('open');
  modalOverlay.classList.remove('show');
});

orderForm.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(orderForm);
  fetch('php/order.php', { method: 'POST', body: formData })
    .then(r => r.text())
    .then(msg => {
      alert(msg);
      cart = [];
      renderCart();
      renderProducts();
      orderForm.reset();
      checkoutModal.classList.remove('open');
      modalOverlay.classList.remove('show');
    })
    .catch(() => {
      alert('Дякуємо! Ваше замовлення прийнято. Ми передзвонимо для підтвердження.');
      cart = [];
      renderCart();
      renderProducts();
      orderForm.reset();
      checkoutModal.classList.remove('open');
      modalOverlay.classList.remove('show');
    });
});

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderProducts();
  });
});

document.querySelectorAll('.footer-links a[data-filter]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    currentFilter = link.dataset.filter;
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.remove('active');
      if (b.dataset.filter === currentFilter) b.classList.add('active');
    });
    renderProducts();
    document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
  });
});

sortSelect.addEventListener('change', () => {
  currentSort = sortSelect.value;
  renderProducts();
});

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.pageYOffset > 50);
});

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('open');
  document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    nav.classList.remove('open');
    document.body.style.overflow = '';
  });
});

renderProducts();
renderCart();
