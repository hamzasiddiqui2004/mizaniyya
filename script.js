const langBtn = document.getElementById("langBtn");
let isEnglish = true;

langBtn.addEventListener("click", () => {
  if (isEnglish) {
    // ===== Arabic Mode =====
    // 🟡 Banner Title
    document.getElementById("bannerTitle").innerText =
      "محاسبة ميسّرة، الضرائب والرواتب بأسعار مناسبة";

    // 🟡 Section Title (subtitle under banner heading)
    document.getElementById("sectionTitle").innerText =
      "احصل على محاسب محترف — فقط *500 ريال شهريًا";

    // 🟡 Banner Text
    document.getElementById("bannerText").innerHTML = `
      <strong>ميزانية</strong> تساعدك على إدارة حسابات عملك بدون أي عناء. <br>
      <strong>كل ذلك من راحة منزلك - ابتداءً من *500 ريال شهريًا</strong>.
    `;
    document.getElementById("bannerTitle").style.direction = "rtl";
    document.getElementById("bannerText").style.direction = "rtl";
    document.getElementById("bannerText").style.textAlign = "right";
    document.getElementById("sectionTitle").style.direction = "rtl";

    // 🟡 Cards Title & Badges
    document.getElementById("card1Title").innerText = "المحاسبة";
    document.getElementById("card2Title").innerText = "الزكاة والضرائب";
    document.getElementById("card3Title").innerText = "الرواتب";

    document.getElementById("badge1").innerText = "فقط *500 ريال";
    document.getElementById("badge2").innerText = "فقط *500 ريال";
    document.getElementById("badge3").innerText = "فقط *500 ريال";

    // 🟡 Cards List Items
    document.getElementById("card1List").innerHTML = `
      <li><i class="fas fa-star" style="color: #ffd700; margin-right: 6px; font-size: small"></i> البيانات المالية الشهرية</li>
      <li><i class="fas fa-star" style="color: #ffd700; margin-right: 6px; font-size: small"></i> تتبع التدفقات النقدية والمصروفات</li>
      <li><i class="fas fa-star" style="color: #ffd700; margin-right: 6px; font-size: small"></i> تقارير الأرباح والخسائر</li>
    `;

    document.getElementById("card2List").innerHTML = `
      <li><i class="fas fa-star" style="color: #ffd700; margin-right: 6px; font-size: small"></i> إعداد وتقديم ضريبة القيمة المضافة</li>
      <li><i class="fas fa-star" style="color: #ffd700; margin-right: 6px; font-size: small"></i> الامتثال الزكوي وتقديم الإقرارات</li>
      <li><i class="fas fa-star" style="color: #ffd700; margin-right: 6px; font-size: small"></i> دعم تقديم الإقرارات الرسمية</li>
    `;

    document.getElementById("card3List").innerHTML = `
      <li><i class="fas fa-star" style="color: #ffd700; margin-right: 6px; font-size: small"></i> حساب الرواتب الشهرية</li>
      <li><i class="fas fa-star" style="color: #ffd700; margin-right: 6px; font-size: small"></i> إدارة بيانات الموظفين</li>
      <li><i class="fas fa-star" style="color: #ffd700; margin-right: 6px; font-size: small"></i> إعداد مكافأة نهاية الخدمة</li>
    `;

    // 🟡 Cards direction fix
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

    // Button switch text
    langBtn.innerText = "English";
    isEnglish = false;

  } else {
    // ===== English Mode (Simple reset) =====
    location.reload();
  }
});
