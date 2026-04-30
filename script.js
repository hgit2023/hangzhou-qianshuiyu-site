const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

const slides = [
  {
    title: "时尚高清屏 19.5 寸",
    desc: "适用于办公、店铺收银、展示陈列等多场景。",
    price: "￥550"
  },
  {
    title: "高刷电竞屏 27 寸",
    desc: "高刷新率与低延迟画面，提升电竞和影音体验。",
    price: "￥1299"
  },
  {
    title: "商务窄边框 24 寸",
    desc: "简约外观与稳定性能，满足企业批量采购需求。",
    price: "￥799"
  }
];

let activeIndex = 0;
const titleElement = document.getElementById("banner-title");
const descElement = document.getElementById("banner-desc");
const priceElement = document.getElementById("banner-price");
const dots = Array.from(document.querySelectorAll(".dot"));
const prevButton = document.querySelector(".banner-arrow-left");
const nextButton = document.querySelector(".banner-arrow-right");

function renderSlide(index) {
  const slide = slides[index];
  if (!slide || !titleElement || !descElement || !priceElement) {
    return;
  }

  titleElement.textContent = slide.title;
  descElement.textContent = slide.desc;
  priceElement.textContent = slide.price;

  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === index);
  });
}

function goToSlide(index) {
  activeIndex = (index + slides.length) % slides.length;
  renderSlide(activeIndex);
}

if (prevButton && nextButton && dots.length === slides.length) {
  prevButton.addEventListener("click", () => goToSlide(activeIndex - 1));
  nextButton.addEventListener("click", () => goToSlide(activeIndex + 1));

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => goToSlide(index));
  });
}

renderSlide(activeIndex);

const form = document.getElementById("contact-form");
const statusElement = document.getElementById("form-status");

if (form && statusElement) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !phone || !message) {
      statusElement.textContent = "请完整填写姓名、手机号和留言内容。";
      statusElement.style.color = "#b91c1c";
      return;
    }

    statusElement.textContent = "提交成功，我们会尽快与您联系。";
    statusElement.style.color = "#047857";
    form.reset();
  });
}
