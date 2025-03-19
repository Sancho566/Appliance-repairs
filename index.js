// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Close mobile menu on click outside
document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('active');
    }
});

 // Simple Intersection Observer for animation triggers
 document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeInUp');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
        observer.observe(element);
    });
});

class Carousel {
    constructor() {
        this.slides = document.querySelectorAll('[data-slide]');
        this.indicators = document.querySelectorAll('[data-indicator]');
        this.currentSlide = 0;
        this.init();
    }

    init() {
        document.querySelector('[data-next]').addEventListener('click', () => this.next());
        document.querySelector('[data-prev]').addEventListener('click', () => this.prev());
        
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goto(index));
        });

        this.update();
    }

    update() {
        this.slides.forEach((slide, index) => {
            slide.classList.toggle('opacity-0', index !== this.currentSlide);
            slide.classList.toggle('opacity-100', index === this.currentSlide);
        });

        this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('bg-white/80', index !== this.currentSlide);
            indicator.classList.toggle('bg-white', index === this.currentSlide);
            indicator.classList.toggle('w-3', index !== this.currentSlide);
            indicator.classList.toggle('w-6', index === this.currentSlide);
        });
    }

    next() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.update();
    }

    prev() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.update();
    }

    goto(index) {
        this.currentSlide = index;
        this.update();
    }
}

