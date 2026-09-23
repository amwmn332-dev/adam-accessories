// ==========================================
// 1. دالة طلب المنتج عبر الواتساب المباشر
// ==========================================
function orderProduct(productName) {
  // رقم الواتساب الخاص بمتجر إكسسوار آدم
  const phoneNumber = "201029290236";
  
  // صيغة الرسالة التلقائية عند الضغط على المنتج
  const message = `السلام عليكم، حابب أستفسر عن أطلب المنتج ده من متجر إكسسوار آدم:\n📌 *${productName}*`;
  
  // تشفير الرسالة لتناسب الروابط
  const encodedMessage = encodeURIComponent(message);
  
  // رابط الواتساب المباشر
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  // فتح الواتساب في نافذة جديدة
  window.open(whatsappUrl, '_blank');
}


// ==========================================
// 2. التمرير السلس التأثيرات التفاعلية (Smooth Scroll & Effects)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {

  // التمرير الناعم عند الضغط على أزرار التنقل الداخلي (مثل #products)
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // حساب ارتفاع الهيدر لعدم تغطية أول الجزء المراد الوصول إليه
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight - 10;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // تأثير ظهور خفيف وجميل لكروت المنتجات أثناء النزول للشاشة (Scroll Animation)
  const cards = document.querySelectorAll('.card');
  
  const observerOptions = {
    threshold: 0.1
  };

  const cardObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.5s ease-out';
    cardObserver.observe(card);
  });

});