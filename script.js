// Cole aqui o URL que a Kiwify fornece para o checkout do produto.
// Exemplo: https://pay.kiwify.com.br/SEU_CODIGO
const KIWIFY_CHECKOUT_URL = "#";

document.querySelectorAll("[data-checkout-link]").forEach((link) => {
  link.href = KIWIFY_CHECKOUT_URL;
  if (KIWIFY_CHECKOUT_URL !== "#") {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
});
