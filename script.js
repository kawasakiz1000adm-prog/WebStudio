/* =========================
   MOBILE MENU
========================= */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("active");
});

document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});


/* =========================
   CURRENT YEAR
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================
   PROJECT MODAL
========================= */

const projectModal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalIcon = document.getElementById("modalIcon");

function showProject(project) {

    if (project === "E-Commerce") {

        modalIcon.textContent = "🛒";
        modalTitle.textContent = "متجر إلكتروني";
        modalText.textContent =
            "موقع متجر إلكتروني احترافي لعرض المنتجات وتنظيم عمليات البيع والشراء.";

    } else if (project === "Restaurant") {

        modalIcon.textContent = "🍔";
        modalTitle.textContent = "موقع مطعم";
        modalText.textContent =
            "موقع عصري للمطاعم يحتوي على قائمة الطعام والمعلومات وطرق التواصل.";

    } else if (project === "Business") {

        modalIcon.textContent = "💼";
        modalTitle.textContent = "موقع شركة";
        modalText.textContent =
            "موقع احترافي للشركات والخدمات مع تصميم يعكس هوية العلامة التجارية.";
    }

    projectModal.classList.add("show");
}


function closeProject() {
    projectModal.classList.remove("show");
}


projectModal.addEventListener("click", (event) => {

    if (event.target === projectModal) {
        closeProject();
    }

});


/* =========================
   CONTACT → WHATSAPP
========================= */

const contactForm = document.getElementById("contactForm");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const websiteType =
        document.getElementById("websiteType").value;

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !websiteType || !message) {

        alert("يرجى ملء جميع المعلومات.");

        return;
    }


    /*
       ضع هنا رقم WhatsApp ديالك
       
       مهم:
       المغرب = 212
       مثال:
       0612345678
       تصبح:
       212612345678

       ما تكتبش + ولا مسافات.
    */

    const myWhatsApp = "+212 783-698160";


    /* إنشاء الرسالة */

    const whatsappMessage =
`🔔 طلب جديد من الموقع

👤 الاسم:
${name}

📧 البريد الإلكتروني:
${email}

🌐 نوع الموقع:
${websiteType}

📝 تفاصيل المشروع:
${message}

━━━━━━━━━━━━━━
📌 WebStudio`;


    /* تحويل الرسالة إلى WhatsApp */

    const whatsappURL =
        "https://wa.me/" +
        myWhatsApp +
        "?text=" +
        encodeURIComponent(whatsappMessage);


    /* فتح WhatsApp */

    window.open(whatsappURL, "_blank");


    /* تفريغ الفورم */

    contactForm.reset();

});


/* =========================
   ESC CLOSE MODAL
========================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeProject();
    }

});