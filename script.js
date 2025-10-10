const langBtn = document.getElementById("langBtn");
let isEnglish = true;

langBtn.addEventListener("click", () => {
  const htmlTag = document.documentElement;

  if (isEnglish) {
    // ===== Arabic Mode =====
    htmlTag.setAttribute("lang", "ar");
    htmlTag.setAttribute("dir", "rtl");

    // 🟡 Banner (Arabic Only)
    document.getElementById("bannerTitle").innerHTML = `
      خدمات المحاسبة والرواتب والضرائب المهنية —
      <span >ابتداءً من ٥٠٠ ر.س / شهريًا</span><br>
      أدر أعمالك المالية بسهولة — بدون ضغوط أو تكاليف مرتفعة<br>
      مثالي للمحلات والمطاعم والأعمال الصغيرة<br><br>
      <span class="cta-heading">ابدأ الآن</span><br>
      اضغط على <span class="whatsapp-text">واتساب</span> واحصل على تقاريرك الشهرية — بسرعة ودقة!
    `;
    const bannerTitle = document.getElementById("bannerTitle");
    bannerTitle.style.textAlign = "center";
    bannerTitle.style.direction = "rtl";

    // 🟡 Banner Text हटाना ताकि English न दिखे
    const bannerText = document.getElementById("bannerText");
    if (bannerText) {
      bannerText.innerHTML = "";
      bannerText.style.display = "none";
    }

    // 🟡 Cards
    document.getElementById("card1Title").innerText = "المحاسبة";
    document.getElementById("card2Title").innerText = "الزكاة والضرائب";
    document.getElementById("card3Title").innerText = "الرواتب";

    document.getElementById("badge1").innerText = "فقط *500 ريال";
    document.getElementById("badge2").innerText = "فقط *500 ريال";
    document.getElementById("badge3").innerText = "فقط *500 ريال";

    document.getElementById("card1List").innerHTML = `
      <li><i class="fas fa-star" style="color: #ffd700; margin-left: 6px; font-size: small"></i> البيانات المالية الشهرية</li>
      <li><i class="fas fa-star" style="color: #ffd700; margin-left: 6px; font-size: small"></i> تتبع التدفقات النقدية والمصروفات</li>
      <li><i class="fas fa-star" style="color: #ffd700; margin-left: 6px; font-size: small"></i> تقارير الأرباح والخسائر</li>
    `;
    document.getElementById("card2List").innerHTML = `
      <li><i class="fas fa-star" style="color: #ffd700; margin-left: 6px; font-size: small"></i> إعداد وتقديم ضريبة القيمة المضافة</li>
      <li><i class="fas fa-star" style="color: #ffd700; margin-left: 6px; font-size: small"></i> الامتثال الزكوي وتقديم الإقرارات</li>
      <li><i class="fas fa-star" style="color: #ffd700; margin-left: 6px; font-size: small"></i> دعم تقديم الإقرارات الرسمية</li>
    `;
    document.getElementById("card3List").innerHTML = `
      <li><i class="fas fa-star" style="color: #ffd700; margin-left: 6px; font-size: small"></i> حساب الرواتب الشهرية</li>
      <li><i class="fas fa-star" style="color: #ffd700; margin-left: 6px; font-size: small"></i> إدارة بيانات الموظفين</li>
      <li><i class="fas fa-star" style="color: #ffd700; margin-left: 6px; font-size: small"></i> إعداد مكافأة نهاية الخدمة</li>
    `;

    ["card1List", "card2List", "card3List"].forEach((id) => {
      const ul = document.getElementById(id);
      ul.style.textAlign = "right";
      ul.style.direction = "rtl";
    });

    // 🟡 Buttons
    document.getElementById("btn1").innerText = "اشترك بـ *500 ريال / شهر";
    document.getElementById("btn2").innerText = "اشترك بـ *500 ريال / شهر";
    document.getElementById("btn3").innerText = "اشترك بـ *500 ريال / شهر";

    // 🟡 Footer
    document.getElementById("footerText").innerHTML = `
      📞 تواصل معنا عبر 
      <a href="https://wa.me/966598905242" target="_blank"><i class="fab fa-whatsapp"></i> واتساب</a> 
      أو البريد الإلكتروني 
      <a href="mailto:info@mizaniyya.com"><i class="fas fa-envelope"></i> info@mizaniyya.com</a>
    `;

    langBtn.innerText = "English";
    isEnglish = false;
  } else {
    // ===== English Mode =====
    htmlTag.setAttribute("lang", "en");
    htmlTag.setAttribute("dir", "ltr");
    location.reload(); // English वापस लाने के लिए reload
  }
});
