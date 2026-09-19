const KIWIFY_CHECKOUT_URL = "https://pay.kiwify.com.br/gp8XT5b";

document
  .querySelectorAll("[data-checkout-link]")
  .forEach((link) => {
    link.href = KIWIFY_CHECKOUT_URL;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });