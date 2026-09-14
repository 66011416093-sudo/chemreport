// ==========================================
// ChemReport - Main Application
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ------------------------------------------
    // Sidebar menu
    // ------------------------------------------

    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {

        item.addEventListener("click", function (event) {

            event.preventDefault();

            menuItems.forEach(menu => {
                menu.classList.remove("active");
            });

            this.classList.add("active");

            const menuName = this.innerText.trim();

            showNotification(
                `เปิดเมนู ${menuName}`,
                "ฟังก์ชันนี้จะเชื่อมต่อกับระบบในขั้นตอนถัดไป"
            );
        });

    });


    // ------------------------------------------
    // Quick action buttons
    // ------------------------------------------

    const quickButtons = document.querySelectorAll(
        ".quick-actions button"
    );

    quickButtons.forEach(button => {

        button.addEventListener("click", function () {

            const action = this.querySelector("strong");

            if (action) {

                showNotification(
                    action.innerText,
                    "กำลังเตรียมฟังก์ชันสำหรับการใช้งาน"
                );

            }

        });

    });


    // ------------------------------------------
    // Search
    // ------------------------------------------

    const searchInput =
        document.querySelector(".search-box input");

    if (searchInput) {

        searchInput.addEventListener("input", function () {

            const keyword =
                this.value.toLowerCase().trim();

            const rows =
                document.querySelectorAll("tbody tr");

            rows.forEach(row => {

                const text =
                    row.innerText.toLowerCase();

                if (text.includes(keyword)) {

                    row.style.display = "";

                } else {

                    row.style.display = "none";

                }

            });

        });

    }


    // ------------------------------------------
    // Notification button
    // ------------------------------------------

    const notification =
        document.querySelector(".notification");

    if (notification) {

        notification.addEventListener("click", () => {

            showNotification(
                "การแจ้งเตือน",
                "ขณะนี้มีรายการที่ต้องตรวจสอบ 12 รายการ"
            );

        });

    }


    // ------------------------------------------
    // View all buttons
    // ------------------------------------------

    const viewButtons =
        document.querySelectorAll(".view-all");

    viewButtons.forEach(button => {

        button.addEventListener("click", () => {

            showNotification(
                "ข้อมูลทั้งหมด",
                "ระบบจัดการข้อมูลจะเปิดใช้งานในขั้นตอนถัดไป"
            );

        });

    });


    // ------------------------------------------
    // Notification system
    // ------------------------------------------

    function showNotification(title, message) {

        const oldNotification =
            document.querySelector(".system-notification");

        if (oldNotification) {
            oldNotification.remove();
        }


        const notification =
            document.createElement("div");

        notification.className =
            "system-notification";


        notification.innerHTML = `
            <div class="notification-icon">
                ✓
            </div>

            <div class="notification-content">
                <strong>${title}</strong>
                <span>${message}</span>
            </div>

            <button class="notification-close">
                ×
            </button>
        `;


        document.body.appendChild(notification);


        setTimeout(() => {

            notification.classList.add("show");

        }, 10);


        const close =
            notification.querySelector(
                ".notification-close"
            );

        close.addEventListener("click", () => {

            notification.classList.remove("show");

            setTimeout(() => {
                notification.remove();
            }, 300);

        });


        setTimeout(() => {

            if (notification.parentElement) {

                notification.classList.remove("show");

                setTimeout(() => {

                    if (notification.parentElement) {
                        notification.remove();
                    }

                }, 300);

            }

        }, 4000);

    }

});
