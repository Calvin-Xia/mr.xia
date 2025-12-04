/**
 * Mr.Xia 个人网站 - 主脚本文件
 * 包含时间显示、动画效果和交互功能
 */

// ===== 时间显示模块 =====
const TimeDisplay = {
    /**
     * 初始化时间显示
     */
    init() {
        this.updateTime();
        setInterval(() => this.updateTime(), 1000);
    },

    /**
     * 更新时间显示
     */
    updateTime() {
        const now = new Date();
        const timeString = this.formatTime(now);
        const dateString = this.formatDate(now);
        
        const timeElement = document.getElementById('currentTime');
        if (timeElement) {
            timeElement.innerHTML = `
                <span style="font-size: 0.9em; opacity: 0.8;">?? ${dateString}</span>
                <span style="font-weight: 700;">? ${timeString}</span>
            `;
        }
    },

    /**
     * 格式化时间
     */
    formatTime(date) {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    },

    /**
     * 格式化日期
     */
    formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
        const weekday = weekdays[date.getDay()];
        return `${year}-${month}-${day} ${weekday}`;
    }
};

// ===== 计时器模块 =====
const Timer = {
    seconds: 0,
    minutes: 0,
    hours: 0,
    intervalId: null,

    /**
     * 初始化计时器
     */
    init() {
        const startBtn = document.getElementById('start');
        const pauseBtn = document.getElementById('pause');
        const resetBtn = document.getElementById('reset');

        if (startBtn && pauseBtn && resetBtn) {
            startBtn.addEventListener('click', () => this.start());
            pauseBtn.addEventListener('click', () => this.pause());
            resetBtn.addEventListener('click', () => this.reset());
            
            // 初始状态
            pauseBtn.disabled = true;
        }
    },

    /**
     * 更新计时器显示
     */
    update() {
        this.seconds++;
        
        if (this.seconds >= 60) {
            this.seconds = 0;
            this.minutes++;
        }
        
        if (this.minutes >= 60) {
            this.minutes = 0;
            this.hours++;
        }

        const timerElement = document.getElementById('timer');
        if (timerElement) {
            const formatted = `${String(this.hours).padStart(2, '0')}:${String(this.minutes).padStart(2, '0')}:${String(this.seconds).padStart(2, '0')}`;
            timerElement.textContent = formatted;
        }
    },

    /**
     * 开始计时
     */
    start() {
        if (!this.intervalId) {
            this.intervalId = setInterval(() => this.update(), 1000);
            document.getElementById('start').disabled = true;
            document.getElementById('pause').disabled = false;
        }
    },

    /**
     * 暂停计时
     */
    pause() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
            document.getElementById('start').disabled = false;
            document.getElementById('pause').disabled = true;
        }
    },

    /**
     * 重置计时器
     */
    reset() {
        this.pause();
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        
        const timerElement = document.getElementById('timer');
        if (timerElement) {
            timerElement.textContent = '00:00:00';
        }
        
        document.getElementById('start').disabled = false;
        document.getElementById('pause').disabled = true;
    }
};

// ===== 页面动画模块 =====
const PageAnimations = {
    /**
     * 初始化页面动画
     */
    init() {
        this.addFadeInAnimations();
        this.addScrollAnimations();
    },

    /**
     * 添加淡入动画
     */
    addFadeInAnimations() {
        const elements = document.querySelectorAll('main > *');
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`;
        });
    },

    /**
     * 添加滚动动画
     */
    addScrollAnimations() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-up');
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('.card, .shadowbox').forEach(element => {
            observer.observe(element);
        });
    }
};

// ===== 导航高亮模块 =====
const Navigation = {
    /**
     * 初始化导航
     */
    init() {
        this.highlightCurrentPage();
    },

    /**
     * 高亮当前页面
     */
    highlightCurrentPage() {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-links a');
        
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            if (linkPath === currentPath) {
                link.style.color = 'var(--primary-color)';
                link.style.background = 'rgba(99, 102, 241, 0.1)';
            }
        });
    }
};

// ===== 工具函数 =====
const Utils = {
    /**
     * 创建波纹效果
     */
    createRipple(event) {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.classList.add('ripple');

        button.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    },

    /**
     * 平滑滚动到顶部
     */
    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

// ===== 页面加载初始化 =====
document.addEventListener('DOMContentLoaded', () => {
    // 初始化各模块
    TimeDisplay.init();
    Timer.init();
    PageAnimations.init();
    Navigation.init();

    // 为所有按钮添加波纹效果
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', Utils.createRipple);
    });

    // 控制台欢迎信息
    console.log('%c?? 欢迎来到 Mr.Xia 的个人网站！', 'color: #6366f1; font-size: 20px; font-weight: bold;');
    console.log('%c? 网站采用现代化简约设计风格', 'color: #ec4899; font-size: 14px;');
});

// 导出模块供外部使用
window.MrXiaApp = {
    TimeDisplay,
    Timer,
    PageAnimations,
    Navigation,
    Utils
};
