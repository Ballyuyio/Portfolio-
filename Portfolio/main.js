// ==========================================================
// SPACEX NAVIGATION & INTERACTIVE CONTROLLER
// ==========================================================
document.addEventListener("DOMContentLoaded", () => {
    // เลือก Element ทุกตัวที่ต้องการให้คลิกได้
    const allLinks = document.querySelectorAll("a, button, .js-link, .js-nav-btn, .assign-card");

    allLinks.forEach((item) => {
        item.style.cursor = "pointer";

        item.addEventListener("click", function (e) {
            // ดึง URL ได้ทั้งจาก data-href, data-url หรือ href (ครอบคลุมทั้งหมด)
            const targetUrl = this.getAttribute("data-href") || this.getAttribute("data-url") || this.getAttribute("href");
            const targetAttr = this.getAttribute("target") || (this.getAttribute("data-blank") === "true" ? "_blank" : "");

            // ถ้าไม่มีลิงก์ หรือคลิกโดนปุ่มเล่นวิดีโอ ให้ข้ามไป
            if (!targetUrl || targetUrl === "#" || targetUrl.startsWith("javascript:")) {
                return;
            }

            // ถ้าเป็นลิงก์เปิดแท็บใหม่
            if (targetAttr === "_blank" || this.getAttribute("data-target") === "_blank") {
                e.preventDefault();
                window.open(targetUrl, "_blank");
                return;
            }

            // ถ้าเป็นการสลับหน้าภายในเว็บเดียวกัน
            e.preventDefault();

            this.style.transform = "scale(0.96)";
            this.style.opacity = "0.7";

            setTimeout(() => {
                document.body.style.opacity = "0";
                document.body.style.transition = "opacity 0.2s ease";
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 200);
            }, 100);
        });
    });

    // Fade-in เข้าหน้าเว็บเมื่อพร้อม
    document.body.style.opacity = "1";
    document.body.style.transition = "opacity 0.25s ease";
});