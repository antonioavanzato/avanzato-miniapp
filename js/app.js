// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;
tg.expand();

// Данные для разделов
const sections = {
    main: {
        title: 'Anton Avanzato',
        content: `
            <div class="menu-grid">
                <button class="menu-item" onclick="app.navigateTo('portfolio')">
                    <span class="emoji">📸</span>
                    <span class="label">Портфолио</span>
                </button>
                <button class="menu-item" onclick="app.navigateTo('price')">
                    <span class="emoji">💰</span>
                    <span class="label">Прайс</span>
                </button>
                <button class="menu-item" onclick="app.navigateTo('tutorial')">
                    <span class="emoji">🎓</span>
                    <span class="label">Обучение</span>
                </button>
                <button class="menu-item" onclick="app.navigateTo('presets')">
                    <span class="emoji">🎨</span>
                    <span class="label">Пресеты</span>
                </button>
                <button class="menu-item" onclick="app.navigateTo('web')">
                    <span class="emoji">🌐</span>
                    <span class="label">Создание сайта</span>
                </button>
                <button class="menu-item" onclick="app.navigateTo('reviews')">
                    <span class="emoji">⭐</span>
                    <span class="label">Отзывы</span>
                </button>
                <button class="menu-item" onclick="app.navigateTo('contacts')">
                    <span class="emoji">📞</span>
                    <span class="label">Контакты</span>
                </button>
            </div>
        `
    },
    contacts: {
        title: 'Контакты',
        content: `
            <div class="card">
                <div class="contact-item">
                    <span class="contact-icon">📱</span>
                    <div class="contact-info">
                        <div class="contact-title">Telegram</div>
                        <div class="contact-desc">@anton_avanzato</div>
                    </div>
                </div>
                <div class="contact-item">
                    <span class="contact-icon">📷</span>
                    <div class="contact-info">
                        <div class="contact-title">Instagram</div>
                        <div class="contact-desc">@anton_avanzato</div>
                    </div>
                </div>
                <div class="contact-item">
                    <span class="contact-icon">📧</span>
                    <div class="contact-info">
                        <div class="contact-title">Email</div>
                        <div class="contact-desc">anton@avanzato.ru</div>
                    </div>
                </div>
            </div>
            <button class="button" onclick="app.openChat()">
                Написать в Telegram
            </button>
        `
    },
    reviews: {
        title: 'Отзывы',
        content: `
            <div class="card">
                <div style="font-size: 24px; margin-bottom: 8px;">⭐⭐⭐⭐⭐</div>
                <div style="font-weight: 600;">Анна</div>
                <div style="color: #666; margin: 8px 0;">"Отличный фотограф! Свадьба прошла идеально"</div>
                <div style="font-size: 14px; color: #999;">2 недели назад</div>
            </div>
            <div class="card">
                <div style="font-size: 24px; margin-bottom: 8px;">⭐⭐⭐⭐⭐</div>
                <div style="font-weight: 600;">Михаил</div>
                <div style="color: #666; margin: 8px 0;">"Профессионал своего дела. Рекомендую!"</div>
                <div style="font-size: 14px; color: #999;">месяц назад</div>
            </div>
        `
    },
    tutorial: {
        title: 'Обучение',
        content: `
            <div class="card">
                <h3>📸 Базовый курс фотографии</h3>
                <p style="margin: 12px 0;">5 уроков по основам композиции и света</p>
                <button class="button" onclick="app.showAlert('Курс скоро будет доступен!')">
                    Записаться
                </button>
            </div>
            <div class="card">
                <h3>🎬 Видеосъемка</h3>
                <p style="margin: 12px 0;">Мастер-класс по работе с видео</p>
                <button class="button" onclick="app.showAlert('Скоро открываем запись!')">
                    Узнать
                </button>
            </div>
        `
    },
    presets: {
        title: 'Пресеты и луты',
        content: `
            <div class="card">
                <h3>🎨 Пакет "Портрет"</h3>
                <p style="margin: 8px 0;">10 пресетов для обработки портретов</p>
                <div style="font-size: 20px; font-weight: 600; color: #40a7e3; margin: 8px 0;">1500₽</div>
                <button class="button" onclick="app.buyPreset('portrait')">
                    Купить
                </button>
            </div>
            <div class="card">
                <h3>🌅 Пакет "Ландшафт"</h3>
                <p style="margin: 8px 0;">8 пресетов для пейзажей</p>
                <div style="font-size: 20px; font-weight: 600; color: #40a7e3; margin: 8px 0;">1200₽</div>
                <button class="button" onclick="app.buyPreset('landscape')">
                    Купить
                </button>
            </div>
        `
    },
    web: {
        title: 'Создание сайта',
        content: `
            <div class="card">
                <h3>🌐 Сайт под ключ</h3>
                <ul style="margin: 12px 0; padding-left: 20px;">
                    <li>Индивидуальный дизайн</li>
                    <li>Адаптация под все устройства</li>
                    <li>SEO оптимизация</li>
                    <li>Интеграция с Telegram</li>
                </ul>
                <div style="font-size: 20px; font-weight: 600; color: #40a7e3; margin: 8px 0;">от 50 000₽</div>
                <button class="button" onclick="app.orderSite()">
                    Заказать
                </button>
            </div>
        `
    },
    price: {
        title: 'Прайс',
        content: `
            <div class="card">
                <ul class="price-list">
                    <li class="price-item">
                        <span class="price-name">Свадебная съемка</span>
                        <span class="price-value">50 000₽</span>
                    </li>
                    <li class="price-item">
                        <span class="price-name">Портретная съемка</span>
                        <span class="price-value">15 000₽</span>
                    </li>
                    <li class="price-item">
                        <span class="price-name">Видеосъемка</span>
                        <span class="price-value">25 000₽</span>
                    </li>
                    <li class="price-item">
                        <span class="price-name">Обработка фото</span>
                        <span class="price-value">5 000₽/час</span>
                    </li>
                </ul>
            </div>
        `
    },
    portfolio: {
        title: 'Портфолио',
        content: `
            <div class="gallery">
                <div class="gallery-item" onclick="app.showAlert('Фото 1')" style="background: #ddd;"></div>
                <div class="gallery-item" onclick="app.showAlert('Фото 2')" style="background: #ccc;"></div>
                <div class="gallery-item" onclick="app.showAlert('Фото 3')" style="background: #bbb;"></div>
                <div class="gallery-item" onclick="app.showAlert('Фото 4')" style="background: #aaa;"></div>
                <div class="gallery-item" onclick="app.showAlert('Фото 5')" style="background: #999;"></div>
                <div class="gallery-item" onclick="app.showAlert('Фото 6')" style="background: #888;"></div>
            </div>
        `
    }
};

// Основное приложение
const app = {
    currentSection: 'main',
    history: [],

    init() {
        const startParam = tg.initDataUnsafe?.start_param;
        
        if (startParam && sections[startParam]) {
            this.navigateTo(startParam);
        } else {
            this.showSection('main');
        }

        tg.BackButton.onClick(() => this.goBack());
        this.initBottomNav();
    },

    showSection(sectionId) {
        const section = sections[sectionId];
        if (!section) return;

        document.getElementById('pageTitle').textContent = section.title;
        document.getElementById('content').innerHTML = section.content;
        
        this.currentSection = sectionId;
        
        if (this.history.length > 0) {
            tg.BackButton.show();
        } else {
            tg.BackButton.hide();
        }

        this.updateBottomNav(sectionId);
    },

    navigateTo(sectionId) {
        if (this.currentSection !== 'main') {
            this.history.push(this.currentSection);
        }
        this.showSection(sectionId);
    },

    goBack() {
        if (this.history.length > 0) {
            const prevSection = this.history.pop();
            this.showSection(prevSection);
        } else {
            this.showSection('main');
        }
    },

    initBottomNav() {
        const nav = document.getElementById('bottomNav');
        nav.classList.remove('hidden');
        
        document.querySelectorAll('.nav-item').forEach(btn => {
            btn.addEventListener('click', () => {
                const section = btn.dataset.section;
                if (section === 'main') {
                    this.showSection('main');
                    this.history = [];
                } else {
                    this.navigateTo(section);
                }
            });
        });
    },

    updateBottomNav(sectionId) {
        document.querySelectorAll('.nav-item').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.section === sectionId);
        });
    },

    openChat() {
        tg.openTelegramLink('https://t.me/anton_avanzato');
    },

    showAlert(msg) {
        tg.showAlert(msg);
    },

    buyPreset(presetId) {
        tg.showAlert(`Покупка пресета ${presetId}. Оплата через Telegram Stars`);
    },

    orderSite() {
        tg.showAlert('Свяжитесь со мной для обсуждения деталей');
    }
};

window.app = app;
document.addEventListener('DOMContentLoaded', () => app.init());
