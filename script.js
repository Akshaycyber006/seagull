/**
 * Seagull Logistics - Professional Website JavaScript
 * Customs Clearance & Freight Forwarding
 */

document.addEventListener('DOMContentLoaded', function() {



    // ========================================
    // MOBILE MENU TOGGLE
    // ========================================
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');

    // ========================================
    // SERVICE MODAL
    // ========================================
    const serviceModal = document.getElementById('serviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const modalClose = document.getElementById('modalClose');
    
    const serviceData = {
        'customs-clearance': {
            title: 'Customs Clearance',
            desc: 'We are one of the few Custom House Agents individually licensed to operate at almost all major ports. Our expertise allows us to handle the required documentation with ease, providing clear advantages to our customers through faster processing and regulatory compliance.',
            sections: [
                { title: 'Documents We Handle', list: ['Customs Documents', 'Port Documents', 'AEPC', 'HEPC', 'CLRI', 'DGFT', 'Texprocel'] },
                { title: 'Key Advantages', list: ['Licensed at major ports across the country', 'Expert documentation handling', 'Faster customs clearance', 'Smooth import and export processing'] }
            ]
        },
        'air-freight': {
            title: 'Air Freight',
            desc: 'Seagull provides fast and reliable air cargo services connecting major airports worldwide. Our extensive network and partnerships ensure timely delivery of your cargo to any destination.',
            sections: [
                { title: 'Services Included', list: ['Airport to Airport', 'Door to Door', 'Express Cargo', 'Charter Services', 'Perishable Cargo'] },
                { title: 'Key Advantages', list: ['Global airport network', 'Fast transit times', 'Temperature-controlled options', '24/7 tracking and monitoring'] }
            ]
        },
        'sea-freight': {
            title: 'Sea Freight',
            desc: 'Comprehensive sea freight solutions for all types of cargo including FCL, LCL, RoRo, break bulk, and project cargo. Our global network ensures reliable ocean transportation.',
            sections: [
                { title: 'Services Included', list: ['FCL (Full Container Load)', 'LCL (Less than Container Load)', 'RORO Shipping', 'Break Bulk', 'Project Cargo'] },
                { title: 'Key Advantages', list: ['Cost-effective ocean rates', 'Flexible container options', 'Specialized cargo handling', 'Regular sailing schedules'] }
            ]
        },
        'road-transport': {
            title: 'Road Transport',
            desc: 'Speed of response is the hallmark of Seagull Integrated Services. With its modern fleet of road transport equipment, Seagull can handle up to 200 consignments per day. Our extensive fleet includes a wide range of transport vehicles, cranes, and trailers designed to support different cargo requirements. A planned maintenance system ensures that the fleet remains operational at all times, enabling reliable and timely deliveries.',
            sections: [
                { title: 'Services Included', list: ['Road Transport', 'High Cube Vans', 'Temperature Controlled Trailers and Trucks', '20\' and 40\' Containers', 'Heavy Hauling Vehicles (Flats and Drop Decks)', 'Light Commercial Vehicles', 'Overhead Crane Handling (where applicable)'] },
                { title: 'Key Advantages', list: ['Large and modern vehicle fleet', 'Ability to handle high shipment volumes', 'Reliable and fast cargo movement', 'Efficient handling of heavy and specialized cargo'] }
            ]
        },
        'warehousing': {
            title: 'Warehousing',
            desc: 'Seagull provides secure storage and warehousing facilities at strategic locations across the country. These warehouses play a crucial role in ensuring smooth logistics operations for durables, consumables, and various other goods. The facilities are clean, temperature-controlled, and designed with flexible operational hours to support efficient storage and distribution.',
            sections: [
                { title: 'Services Included', list: ['Bonded Warehousing', 'Container Freight Station', 'Fulfillment Services', 'Temperature Controlled Storage', 'Secure Storage Facilities', 'Flexible Warehousing Operations'] },
                { title: 'Key Advantages', list: ['Nationwide warehousing network', 'Safe and temperature-controlled storage', 'Secure facilities with product insurance coverage', 'Strategic locations for efficient distribution'] }
            ]
        },
        'railway-transport': {
            title: 'Railway Transport',
            desc: 'One of the largest freight forwarding agents in India today, Seagull has built its scale of operations to match the needs of all customers—large, medium, or small. Many major cross-metro trains have special Seagull parcel vans attached, ensuring quick sorting and fast parcel movement across the rail network. Even the smallest customers are assured the same high level of service and individual attention. Close monitoring of all dispatches and delivery schedules ensures reliability and efficiency.',
            sections: [
                { title: 'Services', list: ['Dedicated Parcel Vans on Major Train Routes', 'Fast Cargo Sorting and Parcel Movement', 'Nationwide Rail Cargo Distribution', 'Rake Movement (Large Volume Cargo by Road and Rail)'] },
                { title: 'Key Advantages', list: ['Fast inter-city cargo transportation', 'Efficient handling of large shipment volumes', 'Reliable monitoring of dispatch and delivery schedules', 'Alternative backup arrangements in case of transport issues'] }
            ]
        }
    };

    // Open modal
    document.querySelectorAll('.services-overview .service-card').forEach(card => {
        card.addEventListener('click', function() {
            const serviceId = this.dataset.service;
            if (serviceData[serviceId]) {
                modalTitle.textContent = serviceData[serviceId].title;
                
                let bodyHtml = `<div class="service-desc">${serviceData[serviceId].desc}</div>`;
                
                serviceData[serviceId].sections.forEach(section => {
                    bodyHtml += `<div class="service-section">
                        <h4>${section.title}</h4>
                        <ul class="service-list">`;
                    section.list.forEach(item => {
                        bodyHtml += `<li>${item}</li>`;
                    });
                    bodyHtml += `</ul></div>`;
                });
                
                modalBody.innerHTML = bodyHtml;
                serviceModal.classList.add('show');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    function closeModal() {
        serviceModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }

    modalClose.addEventListener('click', closeModal);
    serviceModal.addEventListener('click', function(e) {
        if (e.target === serviceModal) closeModal();
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeModal();
    });
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            const icon = this.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // ========================================
    // HEADER SCROLL EFFECT
    // ========================================
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ========================================
    // SCROLL TO TOP BUTTON
    // ========================================
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ========================================
    // EMAILJS INIT (ONLY ONCE)
    // ========================================
    (function () {
        emailjs.init("fRuJ4X0igSIs5SpLv"); // your public key
    })();

    // ========================================
    // CONTACT FORM SUBMISSION
    // ========================================
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const form = this;
            const submitBtn = form.querySelector('button[type="submit"]');

            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            // ✅ VALIDATION
            if (!data.name || !data.email || !data.phone || !data.message) {
                showAlert('Please fill all required fields.', 'error');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showAlert('Invalid email address.', 'error');
                return;
            }

            const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
            if (!phoneRegex.test(data.phone)) {
                showAlert('Invalid phone number.', 'error');
                return;
            }

            // ✅ LOADING BUTTON
            submitBtn.disabled = true;
            submitBtn.innerText = "Sending...";

            // ✅ SEND EMAIL TO YOU
            emailjs.sendForm(
                'service_2jzqe9m',   // your service ID
                'template_4zrkr2y',   // your template ID
                form
            )
            .then(() => {
                showAlert('Message sent successfully!', 'success');
                form.reset();
            })
            .catch((error) => {
                console.error(error);
                showAlert('Failed to send message.', 'error');
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.innerText = "Send Message";
            });
        });
    }

    // ========================================
    // ALERT FUNCTION
    // ========================================
    function showAlert(message, type) {
        const existingAlert = document.querySelector('.custom-alert');
        if (existingAlert) {
            existingAlert.remove();
        }
        
        const alert = document.createElement('div');
        alert.className = `custom-alert alert-${type}`;
        alert.innerHTML = `
            <div class="alert-content">
                <i class="fa-solid ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
                <span>${message}</span>
                <button class="alert-close"><i class="fa-solid fa-times"></i></button>
            </div>
        `;
        
        alert.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            z-index: 10000;
            background-color: ${type === 'success' ? '#10B981' : '#EF4444'};
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            animation: slideIn 0.3s ease;
            max-width: 400px;
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            .alert-content {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            .alert-content i {
                font-size: 20px;
            }
            .alert-content span {
                flex: 1;
                font-size: 14px;
                font-weight: 500;
            }
            .alert-close {
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                padding: 5px;
                font-size: 16px;
                opacity: 0.8;
                transition: opacity 0.2s;
            }
            .alert-close:hover {
                opacity: 1;
            }
        `;
        if (!document.querySelector('#alert-styles')) {
            style.id = 'alert-styles';
            document.head.appendChild(style);
        }
        document.body.appendChild(alert);
        
        const closeBtn = alert.querySelector('.alert-close');
        closeBtn.addEventListener('click', function() {
            alert.remove();
        });
        
        setTimeout(function() {
            if (alert.parentNode) {
                alert.remove();
            }
        }, 5000);
    }

    // ========================================
    // ANIMATE ON SCROLL
    // ========================================
    const animateElements = document.querySelectorAll('.feature-card, .service-card, .industry-card, .facility-card, .branch-card, .mv-card, .vas-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ========================================
    // STATS COUNTER ANIMATION
    // ========================================
    const statNumbers = document.querySelectorAll('.stat-number');
    let statsAnimated = false;
    
    function animateStats() {
        if (statsAnimated) return;
        
        const statsSection = document.querySelector('.about-stats, .stats-section .about-stats');
        if (!statsSection) return;
        
        const sectionTop = statsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            statsAnimated = true;
            
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                const suffix = stat.textContent.replace(/[\d]/g, '');
                let current = 0;
                const increment = target / 50;
                const duration = 2000;
                const stepTime = duration / 50;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        stat.textContent = target + suffix;
                        clearInterval(timer);
                    } else {
                        stat.textContent = Math.floor(current) + suffix;
                    }
                }, stepTime);
            });
        }
    }
    
    window.addEventListener('scroll', animateStats);
    animateStats();
});