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
     <h1 class="banner-heading">خدمات المحاسبة والرواتب والضرائب المهنية —
      ابتداءً من ٥٠٠ ر.س / شهريًا</h1>
      <p class="banner-text">أدر أعمالك المالية بسهولة — بدون ضغوط أو تكاليف مرتفعة<br>
      مثالي للمحلات والمطاعم والأعمال الصغيرة<br>
      <span class="cta-heading" style="font-size:2rem; font-weight:900;padding-top:10px;">ابدأ الآن</span><br>
      اضغط على <a href="https://wa.me/966500226253" style="text-decoration: none;" target="_blank"><span class="whatsapp-text" style="font-size:2rem; font-weight:900;"><i class="fab fa-whatsapp whatsapp-text" style="padding: 4px;"></i>واتساب</span><a/> واحصل على تقاريرك الشهرية — بسرعة ودقة!
</p>    `;
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
    document.getElementById("card1Title").innerHTML = `<span style="font-size:1.6rem; font-weight:700;">المحاسبة</span>`;
    document.getElementById("card2Title").innerHTML = `<span style="font-size:1.6rem; font-weight:700;">الزكاة والضرائب</span>`;
    document.getElementById("card3Title").innerHTML = `<span style="font-size:1.6rem; font-weight:700;">الرواتب</span>`;

    document.getElementById("badge1").innerText = "فقط *500 ريال";
    document.getElementById("badge2").innerText = "فقط *500 ريال";
    document.getElementById("badge3").innerText = "فقط *500 ريال";

    document.getElementById("card1List").innerHTML = `
      <li style="font-size:1.2rem;"><i class="fas fa-star" style="color: #ffd700; margin-left: 6px; font-size: small"></i> البيانات المالية الشهرية</li>
      <li style="font-size:1.2rem;"><i class="fas fa-star" style="color: #ffd700; margin-left: 6px; font-size: small"></i> تتبع التدفقات النقدية والمصروفات</li>
      <li style="font-size:1.2rem;"><i class="fas fa-star" style="color: #ffd700; margin-left: 6px; font-size: small"></i> تقارير الأرباح والخسائر</li>
    `;
    document.getElementById("card2List").innerHTML = `
      <li style="font-size:1.2rem;"><i class="fas fa-star" style="color: #ffd700; margin-left: 6px; font-size: small"></i> إعداد وتقديم ضريبة القيمة المضافة</li>
      <li style="font-size:1.2rem;"><i class="fas fa-star" style="color: #ffd700; margin-left: 6px; font-size: small"></i> الامتثال الزكوي وتقديم الإقرارات</li>
      <li style="font-size:1.2rem;"><i class="fas fa-star" style="color: #ffd700; margin-left: 6px; font-size: small"></i> دعم تقديم الإقرارات الرسمية</li>
    `;
    document.getElementById("card3List").innerHTML = `
      <li style="font-size:1.2rem;"><i class="fas fa-star" style="color: #ffd700; margin-left: 6px; font-size: small"></i> حساب الرواتب الشهرية</li>
      <li style="font-size:1.2rem;"><i class="fas fa-star" style="color: #ffd700; margin-left: 6px; font-size: small"></i> إدارة بيانات الموظفين</li>
      <li style="font-size:1.2rem;"><i class="fas fa-star" style="color: #ffd700; margin-left: 6px; font-size: small"></i> إعداد مكافأة نهاية الخدمة</li>
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
      <a href="https://wa.me/966500226253" target="_blank"><i class="fab fa-whatsapp"></i> 6253 022 50 966+ </a> 
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
