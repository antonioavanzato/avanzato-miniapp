// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;
tg.expand();
tg.ready();

// Контент для всех разделов
const sections = {
    main: {
        title: 'Anton Avanzato',
        content: `
            <div class="menu-grid">
                <div class="menu-item" onclick="app.navigateTo('portfolio')">
                    <span class="emoji">📸</span>
                    <span class="label">Портфолио</span>
                </div>
                <div class="menu-item" onclick="app.navigateTo('price')">
                    <span class="emoji">💰</span>
                    <span class="label">Прайс</span>
                </div>
                <div class="menu-item" onclick="app.navigateTo('tutorial')">
                    <span class="emoji">🎓</span>
                    <span class="label">Обучение</span>
                </div>
                <div class="menu-item" onclick="app.navigateTo('presets')">
                    <span class="emoji">🎨</span>
                    <span class="label">Пресеты</span>
                </div>
                <div class="menu-item" onclick="app.navigateTo('web')">
                    <span class="emoji">🌐</span>
                    <span class="label">Создание сайта</span>
                </div>
                <div class="menu-item" onclick="app.navigateTo('reviews')">
                    <span class="emoji">⭐</span>
                    <span class="label">Отзывы</span>
                </div>
                <div class="menu-item" onclick="app.navigateTo('contacts')">
                    <span class="emoji">📞</span>
                    <span class="label">Контакты</span>
                </div>
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
                <div class="review-stars">⭐⭐⭐⭐⭐</div>
                <div class="review-author">Анна</div>
                <div class="review-text">"Отличный фотограф! Свадьба прошла идеально, все гости в восторге. Очень чуткий и профессиональный подход."</div>
                <div class="review-date">2 недели назад</div>
            </div>
            <div class="card">
                <div class="review-stars">⭐⭐⭐⭐⭐</div>
                <div class="review-author">Михаил</div>
                <div class="review-text">"Профессионал своего дела. Быстро, качественно, креативно. Рекомендую!"</div>
                <div class="review-date">месяц назад</div>
            </div>
            <div class="card">
                <div class="review-stars">⭐⭐⭐⭐⭐</div>
                <div class="review-author">Елена</div>
                <div class="review-text">"Делали семейную фотосессию. Дети вели себя естественно, Антон нашёл подход. Фото шикарные!"</div>
                <div class="review-date">2 месяца назад</div>
            </div>
        `
    },
    tutorial: {
        title: 'Обучение',
        content: `
            <div class="card">
                <h3>📸 Базовый курс фотографии</h3>
                <p style="margin: 12px 0;">5 уроков по основам композиции, света и работы с камерой. Для начинающих.</p>
                <p><strong>Формат:</strong> онлайн, видеоуроки + обратная связь</p>
                <p><strong>Старт:</strong> еженедельно</p>
                <button class="button" onclick="app.showAlert('Курс скоро будет доступен! Следите за анонсами')">
                    Записаться
                </button>
            </div>
            <div class="card">
                <h3>🎬 Мастер-класс по видеосъемке</h3>
                <p style="margin: 12px 0;">Работа с движением, монтаж, цветокоррекция.</p>
                <p><strong>Длительность:</strong> 3 дня по 2 часа</p>
                <button class="button" onclick="app.showAlert('Скоро открываем запись! Оставьте заявку')">
                    Узнать подробнее
                </button>
            </div>
        `
    },
    presets: {
        title: 'Пресеты и луты',
        content: `
            <div class="card">
                <h3>🎨 Пакет "Портрет"</h3>
                <p style="margin: 8px 0;">10 пресетов для обработки портретов (Lightroom)</p>
                <p>✔ Нежная цветокоррекция<br>✔ Универсальные тона<br>✔ Для любых камер</p>
                <div style="font-size: 20px; font-weight: 600; color: #40a7e3; margin: 8px 0;">1 500₽</div>
                <button class="button" onclick="app.buyPreset('portrait')">
                    Купить
                </button>
            </div>
            <div class="card">
                <h3>🌅 Пакет "Ландшафт"</h3>
                <p style="margin: 8px 0;">8 пресетов для пейзажей и путешествий</p>
                <p>✔ Насыщенные цвета<br>✔ Динамический диапазон<br>✔ Для RAW и JPEG</p>
                <div style="font-size: 20px; font-weight: 600; color: #40a7e3; margin: 8px 0;">1 200₽</div>
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
                <p>Создание современных, быстрых и красивых сайтов для фотографов, блогеров и бизнеса.</p>
                <ul style="margin: 12px 0; padding-left: 20px;">
                    <li>Индивидуальный дизайн</li>
                    <li>Адаптация под все устройства</li>
                    <li>SEO оптимизация</li>
                    <li>Интеграция с Telegram и соцсетями</li>
                    <li>Поддержка после запуска</li>
                </ul>
                <div style="font-size: 20px; font-weight: 600; color: #40a7e3; margin: 8px 0;">от 50 000₽</div>
                <button class="button" onclick="app.orderSite()">
                    Заказать консультацию
                </button>
            </div>
        `
    },
    price: {
        title: 'Прайс-лист',
        content: `
            <div class="card">
                <ul class="price-list">
                    <li class="price-item">
                        <span class="price-name">Свадебная съемка</span>
                        <span class="price-value">50 000₽</span>
                    </li>
                    <li class="price-item">
                        <span class="price-name">Портретная съемка (1 час)</span>
                        <span class="price-value">15 000₽</span>
                    </li>
                    <li class="price-item">
                        <span class="price-name">Видеосъемка (1 день)</span>
                        <span class="price-value">25 000₽</span>
                    </li>
                    <li class="price-item">
                        <span class="price-name">Обработка фото (за час)</span>
                        <span class="price-value">5 000₽/час</span>
                    </li>
                    <li class="price-item">
                        <span class="price-name">Ретушь (за фото)</span>
                        <span class="price-value">от 500₽</span>
                    </li>
                    <li class="price-item">
                        <span class="price-name">Предметная съемка</span>
                        <span class="price-value">10 000₽/час</span>
                    </li>
                </ul>
                <p style="margin-top: 16px; color: #666; font-size: 14px;">* Точная стоимость зависит от сложности и сроков</p>
            </div>
            <button class="button" onclick="app.openChat()">
                Уточнить детали
            </button>
        `
    },
    portfolio: {
        title: 'Портфолио',
        content: `
            <div class="gallery">
                <div class="gallery-item" onclick="app.showAlert('Свадебная съемка')"></div>
                <div class="gallery-item" onclick="app.showAlert('Портрет')"></div>
                <div class="gallery-item" onclick="app.showAlert('Пейзаж')"></div>
                <div class="gallery-item" onclick="app.showAlert('Предметная съемка')"></div>
                <div class="gallery-item" onclick="app.showAlert('Семейная фотосессия')"></div>
                <div class="gallery-item" onclick="app.showAlert('Видеоролик')"></div>
                <div class="gallery-item" onclick="app.showAlert('Репортаж')"></div>
                <div class="gallery-item" onclick="app.showAlert('Love story')"></div>
            </div>
        `
    }
};

// Основной объект приложения
const app = {
    currentSection: 'main',
    history: [],

    init() {
        // Получаем параметр из ссылки (если есть)
        const startParam = tg.initDataUnsafe?.start_param;
        
        if (startParam && sections[startParam]) {
            this.navigateTo(startParam);
        } else {
            this.showSection('main');
        }

        // Настройка кнопки "Назад"
        tg.BackButton.onClick(() => this.goBack());
        
        // Инициализация нижней навигации
        this.initBottomNav();
    },

    showSection(sectionId) {
        const section = sections[sectionId];
        if (!section) return;

        document.getElementById('pageTitle').textContent = section.title;
        document.getElementById('content').innerHTML = section.content;
        
        this.currentSection = sectionId;
        
        // Показываем/скрываем кнопку "Назад"
        const backBtn = document.getElementById('backBtn');
        if (this.history.length > 0) {
            backBtn.classList.remove('hidden');
            tg.BackButton.show();
        } else {
            backBtn.classList.add('hidden');
            tg.BackButton.hide();
        }

        // Обновляем активный пункт в нижнем меню
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

    // Вспомогательные функции
    openChat() {
        tg.openTelegramLink('https://t.me/anton_avanzato');
    },

    showAlert(msg) {
        tg.showAlert(msg);
    },

    buyPreset(presetId) {
        tg.showAlert(`Покупка пресета "${presetId}". Для оплаты напишите в личные сообщения.`);
    },

    orderSite() {
        tg.showAlert('Свяжитесь со мной в Telegram для обсуждения деталей.');
    }
};

// Запуск приложения
window.app = app;
document.addEventListener('DOMContentLoaded', () => app.init());
