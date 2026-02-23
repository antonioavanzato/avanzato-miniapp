// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;
tg.expand();

// Данные для разделов
const sections = {
    main: {
        title: 'Anton Avanzato',
        content: `
            <div style="text-align: center; margin-bottom: 24px;">
                <h1 style="font-size: 24px; font-weight: 600; margin-bottom: 8px;">
                    ПОРТРЕТНЫЙ И ПРЕДМЕТНЫЙ ФОТОГРАФ<br>В КАЗАНИ — АНТОН АВАНЗАТО
                </h1>
            </div>

            <div class="card">
                <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
                    Меня зовут Антон Аванзато. Создаю атмосферные портреты, предметную съёмку и визуальные истории. 
                    Мой подход — это эстетика в простоте. Работаю в Казани и Москве. Более 250 завершённых проектов.
                </p>
            </div>

            <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
                <div style="width: 80px; height: 80px; border-radius: 50%; background: var(--tg-theme-button-color, #40a7e3); display: flex; align-items: center; justify-content: center; font-size: 32px; color: white;">
                    А
                </div>
                <div>
                    <h2 style="font-size: 22px; font-weight: 600; margin-bottom: 4px;">Антон Аванзато</h2>
                    <p style="color: var(--tg-theme-hint-color, #666);">Фотограф с 2019</p>
                </div>
            </div>

            <div class="card">
                <p style="font-size: 16px; line-height: 1.6;">
                    Я фотограф с 2019 года. Для меня фотография — это способ зафиксировать красоту момента в её первозданном виде. 
                    Специализируюсь на портретной и предметной съёмке, уделяя внимание каждой детали и световому рисунку.
                </p>
                <p style="font-size: 16px; line-height: 1.6; margin-top: 12px;">
                    Мои работы отмечены 500px (Выбор редакции), Agora Awards, 35awards, Portfolio Party и опубликованы в книге 
                    THE PLACE ECONOMY® издательства Hoyne. Обучаю цвету и обработке в Photoshop, Lightroom и DaVinci Resolve — 
                    без воды, только практика.
                </p>
            </div>

            <div style="display: flex; justify-content: space-around; margin: 24px 0; text-align: center;">
                <div>
                    <div style="font-size: 32px; font-weight: 700; color: var(--tg-theme-button-color, #40a7e3);">250+</div>
                    <div style="font-size: 14px; color: var(--tg-theme-hint-color, #666);">ПРОЕКТОВ</div>
                </div>
                <div>
                    <div style="font-size: 32px; font-weight: 700; color: var(--tg-theme-button-color, #40a7e3);">2019</div>
                    <div style="font-size: 14px; color: var(--tg-theme-hint-color, #666);">СТАРТ ПУТИ</div>
                </div>
            </div>

            <h3 style="font-size: 20px; font-weight: 600; margin: 24px 0 16px;">Почему клиенты выбирают меня:</h3>

            <div style="display: flex; flex-direction: column; gap: 12px;">
                <div style="display: flex; align-items: center; gap: 12px; background: var(--tg-theme-secondary-bg-color, #f8f9fa); padding: 12px; border-radius: 12px;">
                    <span style="font-size: 24px;">✨</span>
                    <div>
                        <div style="font-weight: 600;">Естественность</div>
                        <div style="font-size: 14px; color: var(--tg-theme-hint-color, #666);">Атмосферные кадры без постановочной «натянутости».</div>
                    </div>
                </div>
                
                <div style="display: flex; align-items: center; gap: 12px; background: var(--tg-theme-secondary-bg-color, #f8f9fa); padding: 12px; border-radius: 12px;">
                    <span style="font-size: 24px;">😌</span>
                    <div>
                        <div style="font-weight: 600;">Комфорт</div>
                        <div style="font-size: 14px; color: var(--tg-theme-hint-color, #666);">Помощь с позированием, локацией и образом — съёмка без стресса.</div>
                    </div>
                </div>
                
                <div style="display: flex; align-items: center; gap: 12px; background: var(--tg-theme-secondary-bg-color, #f8f9fa); padding: 12px; border-radius: 12px;">
                    <span style="font-size: 24px;">🎨</span>
                    <div>
                        <div style="font-weight: 600;">Чистый цвет</div>
                        <div style="font-size: 14px; color: var(--tg-theme-hint-color, #666);">Профессиональная обработка — Photoshop, Lightroom, DaVinci Resolve.</div>
                    </div>
                </div>
                
                <div style="display: flex; align-items: center; gap: 12px; background: var(--tg-theme-secondary-bg-color, #f8f9fa); padding: 12px; border-radius: 12px;">
                    <span style="font-size: 24px;">⚡</span>
                    <div>
                        <div style="font-weight: 600;">Скорость</div>
                        <div style="font-size: 14px; color: var(--tg-theme-hint-color, #666);">Готовые фотографии вы получаете в течение 2–3 дней.</div>
                    </div>
                </div>
            </div>

            <div style="margin-top: 24px; text-align: center;">
                <button class="button" onclick="app.navigateTo('portfolio')">
                    📸 Смотреть портфолио
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
            <style>
                .portfolio-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 16px;
                    margin-bottom: 32px;
                }
                
                @media (min-width: 768px) {
                    .portfolio-grid {
                        grid-template-columns: repeat(12, 1fr);
                    }
                }
                
                .portfolio-card {
                    position: relative;
                    overflow: hidden;
                    border-radius: 24px;
                    transition: all 0.7s ease-out;
                    cursor: pointer;
                }
                
                .portfolio-card:hover {
                    transform: scale(1.01);
                    filter: brightness(1.05);
                }
                
                .portfolio-card img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: grayscale(1);
                    transition: filter 0.5s ease;
                }
                
                .portfolio-card:hover img {
                    filter: grayscale(0);
                }
                
                .portfolio-label {
                    position: absolute;
                    bottom: 20px;
                    left: 20px;
                    font-size: 9px;
                    font-weight: 500;
                    letter-spacing: 0.5em;
                    text-transform: uppercase;
                    color: white;
                    background: rgba(0,0,0,0.3);
                    backdrop-filter: blur(10px);
                    padding: 8px 16px;
                    border-radius: 40px;
                    border: 1px solid rgba(255,255,255,0.2);
                }
                
                .aspect-portrait { aspect-ratio: 3/4; }
                .aspect-landscape { aspect-ratio: 16/10; }
                .aspect-square { aspect-ratio: 1/1; }
                .aspect-wide { aspect-ratio: 16/7; }
                .aspect-video { aspect-ratio: 4/3; }
                
                .col-span-8 { grid-column: span 8; }
                .col-span-4 { grid-column: span 4; }
                .col-span-6 { grid-column: span 6; }
                
                @media (max-width: 767px) {
                    .col-span-8, .col-span-4, .col-span-6 {
                        grid-column: span 1;
                    }
                }
                
                .contact-buttons {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    margin: 32px 0;
                }
                
                @media (min-width: 640px) {
                    .contact-buttons {
                        flex-direction: row;
                        justify-content: center;
                    }
                }
                
                .contact-btn {
                    padding: 16px 32px;
                    border: 1px solid var(--tg-theme-hint-color, #ccc);
                    border-radius: 40px;
                    font-size: 9px;
                    font-weight: 500;
                    letter-spacing: 0.5em;
                    text-transform: uppercase;
                    text-align: center;
                    transition: all 0.7s;
                    background: transparent;
                    color: var(--tg-theme-text-color, #000);
                }
                
                .contact-btn:hover {
                    background: var(--tg-theme-button-color, #40a7e3);
                    color: white;
                    border-color: var(--tg-theme-button-color, #40a7e3);
                }
                
                .social-links {
                    display: flex;
                    justify-content: center;
                    gap: 32px;
                    margin-top: 40px;
                }
                
                .social-link {
                    font-size: 9px;
                    font-weight: 500;
                    letter-spacing: 0.5em;
                    text-transform: uppercase;
                    color: var(--tg-theme-hint-color, #666);
                    transition: color 0.3s;
                }
                
                .social-link:hover {
                    color: var(--tg-theme-button-color, #40a7e3);
                }
            </style>

            <div style="text-align: center; margin: 24px 0 32px;">
                <h1 style="font-size: 32px; font-weight: 200; margin-bottom: 16px;">Портфолио</h1>
                <p style="color: var(--tg-theme-hint-color, #666); max-width: 600px; margin: 0 auto;">
                    Визуальные истории, запечатленные в моменте. Коллекция света, тени и эмоций.
                </p>
            </div>

            <div class="portfolio-grid">
                <!-- Портретная съемка -->
                <div class="portfolio-card col-span-8 aspect-landscape" onclick="app.showAlert('Портретная съемка')">
                    <img src="https://i.wfolio.ru/x/cXPZPmu9lCw5tkRNat7JtyHjrPiZiclN/VJgIrluFLtZWGwzaT5FJ07DuSK__bTQA/WFY7UuJewr7NuAw643fd7xufByqQiszH/ZbRpBxjHARz1F-J079vCd2i8gji0nOQP/KVJAbtgEOyKRqmjQ7FfnFQ.jpg" alt="Портретная съемка">
                    <span class="portfolio-label">ПОРТРЕТНАЯ</span>
                </div>

                <!-- Репортаж -->
                <div class="portfolio-card col-span-4 aspect-portrait" onclick="app.showAlert('Репортажная съемка')">
                    <img src="https://i.wfolio.ru/x/cXPZPmu9lCw5tkRNat7JtyHjrPiZiclN/VJgIrluFLtZWGwzaT5FJ07DuSK__bTQA/al3z2K7cv1CJAzQ_-EIEolqIEJSSWaqP/i3FqXwy7ko9sTuMRaYqltZeux6Icr_vO.jpg" alt="Репортажная съемка">
                    <span class="portfolio-label">РЕПОРТАЖ</span>
                </div>

                <!-- Предметная съемка -->
                <div class="portfolio-card col-span-4 aspect-square" onclick="app.showAlert('Предметная съемка')">
                    <img src="https://i.wfolio.ru/x/XEFEvE-Nu381pOR4oV5MYYkCKAb7WEFi/2HxtdBnmmBUxFRl-bxvEKe5TBld7KBhR/_uH9pu2xBLrIBMhIHc4If6rMv6m2DtCS/vJPnRPfNtXpoi7ezVQgk-ox-hn8Qy5km/e_qQwpGspR0qUs46vw41cA.jpg" alt="Предметная съемка">
                    <span class="portfolio-label">ПРЕДМЕТНАЯ</span>
                </div>

                <!-- Интерьерная съемка -->
                <div class="portfolio-card col-span-8 aspect-wide" onclick="app.showAlert('Интерьерная съемка')">
                    <img src="https://i.wfolio.ru/x/zfNWg0RActCaYvCdP8NS6h3QcKqIOO7I/oVCmpsR2A0_zCBuWQbm7dJYwNQ6ysoqE/TpaEb9QZvMei807TvGW2h_t-NBXMzDeP/SdvJvEswrvRiTddhUiBRlv91u4taz9_I/raCfsII-6FmZuONfAqHb7w.jpg" alt="Интерьерная съемка">
                    <span class="portfolio-label">ИНТЕРЬЕРНАЯ</span>
                </div>

                <!-- Видео -->
                <div class="portfolio-card col-span-6 aspect-video" onclick="app.showAlert('Видеосъемка')">
                    <img src="https://i.wfolio.ru/x/cXPZPmu9lCw5tkRNat7JtyHjrPiZiclN/VJgIrluFLtZWGwzaT5FJ07DuSK__bTQA/KQhfSNGgQwTIIsaDpSPAU9TP7gBudYdH/TFpukVkJAIN6QFpWeF6tNE8nEjKRGH8M/mNHQZHGkLqBeUqWOe23MvA.jpg" alt="Видеосъемка">
                    <span class="portfolio-label">ВИДЕО</span>
                </div>

                <!-- Архитектура -->
                <div class="portfolio-card col-span-6 aspect-video" onclick="app.showAlert('Архитектурная съемка')">
                    <img src="https://i.wfolio.ru/x/cXPZPmu9lCw5tkRNat7JtyHjrPiZiclN/VJgIrluFLtZWGwzaT5FJ07DuSK__bTQA/S6cv_dDap8Ndk0UFp_jvfHY1Kid1RDFv/5wrFmx6WwWFBTZ1Ctpj5r3z0c_6vT_P9/oRXcVIZYZC0sCYAWGQQutg.jpg" alt="Архитектурная съемка">
                    <span class="portfolio-label">АРХИТЕКТУРА</span>
                </div>

                <!-- Автомобильная -->
                <div class="portfolio-card col-span-8 aspect-wide" onclick="app.showAlert('Автомобильная съемка')">
                    <img src="https://i.wfolio.ru/x/zfNWg0RActCaYvCdP8NS6h3QcKqIOO7I/oVCmpsR2A0_zCBuWQbm7dJYwNQ6ysoqE/nNCmlyS0ijq83Xcw2K0DQfrmkSKsBri_/vIVHOfzffgZ7aJ4ozIdW1JypHQnNvBTj/woUdoSlHseskd6Lnr2eMgg.jpg" alt="Автомобильная съемка">
                    <span class="portfolio-label">АВТОМОБИЛЬНАЯ</span>
                </div>
            </div>

            <!-- Блок контактов -->
            <div style="text-align: center; padding: 40px 0;">
                <h2 style="font-size: 28px; font-weight: 200; margin-bottom: 24px;">Готовы создать шедевр?</h2>
                
                <div class="contact-buttons">
                    <button class="contact-btn" onclick="app.navigateTo('price')">ЗАПИСАТЬСЯ</button>
                    <button class="contact-btn" onclick="app.openChat()">ОБСУДИТЬ ПРОЕКТ</button>
                </div>
                
                <div class="social-links">
                    <a href="#" onclick="app.showAlert('Instagram')" class="social-link">INSTAGRAM</a>
                    <a href="#" onclick="app.openChat()" class="social-link">TELEGRAM</a>
                    <a href="#" onclick="app.showAlert('Behance')" class="social-link">BEHANCE</a>
                </div>
            </div>
    },

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
