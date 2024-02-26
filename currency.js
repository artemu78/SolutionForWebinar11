function setCurrency(currency) {
  localStorage.setItem('currency', currency)
}
function getCurrency() {
  return localStorage.getItem('currency')
}