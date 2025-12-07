function placeOrder() {
  const orderNumber = Math.floor(Math.random() * 1000) + 1;
  document.getElementById("orderMessage").innerHTML =
    "✅ تم تسجيل طلبك! توجه للمطعم لاستلام طلبك. رقمك هو: " + orderNumber;
}
