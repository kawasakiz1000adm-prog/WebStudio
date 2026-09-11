/* =========================
   MOBILE MENU
========================= */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("active");

        menuButton.textContent =
            nav.classList.contains("active")
                ? "×"
                : "☰";

    });


    document.querySelectorAll(".nav a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

            menuButton.textContent = "☰";

        });

    });

}



/* =========================
   CURRENT YEAR
========================= */

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}



/* =========================
   PROJECTS DATA
========================= */

const projects = {

    store: {

        kicker: "01 / E-COMMERCE",

        icon: "01",

        title: "متجر إلكتروني",

        text:
            "متجر عصري لعرض المنتجات بطريقة واضحة وسهلة مع تجربة متجاوبة.",

        details: [
            "Responsive",
            "Product Pages",
            "UI/UX",
            "Fast"
        ]

    },


    restaurant: {

        kicker: "02 / RESTAURANT",

        icon: "02",

        title: "موقع مطعم / Café",

        text:
            "واجهة مناسبة للمطاعم والمقاهي مع منيو واضح ومعلومات التواصل والطلب.",

        details: [
            "Menu",
            "Mobile",
            "Modern UI",
            "Contact"
        ]

    },


    business: {

        kicker: "03 / BUSINESS",

        icon: "03",

        title: "موقع شركة",

        text:
            "موقع احترافي يبرز الخدمات والمعلومات المهمة ويبني حضوراً رقمياً قوياً.",

        details: [
            "Business",
            "Responsive",
            "SEO Ready",
            "Fast"
        ]

    }

};



/* =========================
   PROJECT MODAL
========================= */

const projectModal =
    document.getElementById("projectModal");

const modalKicker =
    document.getElementById("modalKicker");

const modalIcon =
    document.getElementById("modalIcon");

const modalTitle =
    document.getElementById("modalTitle");

const modalText =
    document.getElementById("modalText");

const modalDetails =
    document.getElementById("modalDetails");



function showProject(id) {

    const project =
        projects[id];

    if (!project) {
        return;
    }


    modalKicker.textContent =
        project.kicker;


    modalIcon.textContent =
        project.icon;


    modalTitle.textContent =
        project.title;


    modalText.textContent =
        project.text;


    modalDetails.innerHTML =
        project.details
            .map(item => `<span>${item}</span>`)
            .join("");


    projectModal.classList.add("show");

    projectModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";

}



function closeProject() {

    projectModal.classList.remove("show");

    projectModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";

}



/* =========================
   CLOSE MODAL OUTSIDE
========================= */

projectModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            projectModal
        ) {

            closeProject();

        }

    }
);



/* =========================
   ESC CLOSE MODAL
========================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeProject();

        }

    }
);



/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const name =
            document
                .getElementById("name")
                .value
                .trim();


        const email =
            document
                .getElementById("email")
                .value
                .trim();


        const websiteType =
            document
                .getElementById("websiteType")
                .value;


        const budget =
            document
                .getElementById("budget")
                .value;


        const message =
            document
                .getElementById("message")
                .value
                .trim();



        if (
            !name ||
            !email ||
            !websiteType ||
            !budget ||
            !message
        ) {

            alert(
                "يرجى ملء جميع المعلومات."
            );

            return;

        }



        /*
            مهم:

            رقم WhatsApp خاص بـ WebStudio.

            خاصو يكون:
            أرقام فقط

            بلا:
            +
            مسافات
            -
        */

        const myWhatsApp =
            "212783698160";



        const whatsappMessage =
`🔔 طلب جديد من WebStudio

👤 الاسم:
${name}

📧 البريد الإلكتروني:
${email}

🌐 نوع الموقع:
${websiteType}

💰 الميزانية التقريبية:
${budget}

📝 تفاصيل المشروع:
${message}

━━━━━━━━━━━━━━
WebStudio`;



        const whatsappURL =
            `https://wa.me/${myWhatsApp}?text=${encodeURIComponent(
                whatsappMessage
            )}`;



        window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );


        contactForm.reset();

    }
);



/* =========================
   SCROLL REVEAL
========================= */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "visible"
                    );


                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );



document
    .querySelectorAll(".reveal")
    .forEach(element => {

        observer.observe(element);

    });