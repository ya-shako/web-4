document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll(".product-checkbox");
    const quantities = document.querySelectorAll(".product-quantity");
    const totalAmountElement = document.getElementById("total-amount");
    const submitOrderButton = document.getElementById("submit-order");
  
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
  
    function updateTotalAmount() {
      let total = 0;
      checkboxes.forEach((checkbox, index) => {
        const quantity = parseInt(quantities[index].value, 10) || 0;
        const price = parseInt(checkbox.getAttribute("data-price"), 10);
        if (checkbox.checked && quantity > 0) {
          total += quantity * price;
        }
      });
      totalAmountElement.textContent = total;
    }
  
    // Обновление количества по выбору чекбокса
    checkboxes.forEach((checkbox, index) => {
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          quantities[index].value = "1";
        } else {
          quantities[index].value = "0";
        }
        updateTotalAmount();
      });
    });
  
    // Обновление суммы при изменении количества
    quantities.forEach((quantityInput) => {
      quantityInput.addEventListener("input", () => {
        // Проверка на нежелательные значения
        if (quantityInput.value === "" || parseInt(quantityInput.value, 10) < 0) {
          quantityInput.value = "0";
        }
        updateTotalAmount();
      });
    });
  
    // Обработка кнопки "Оформить заказ"
    submitOrderButton.addEventListener("click", () => {
      const firstName = firstNameInput.value.trim();
      const lastName = lastNameInput.value.trim();
      const totalAmount = totalAmountElement.textContent;
  
      alert(`Заказчик: ${lastName} ${firstName}\nИтого: ${totalAmount} руб.`);
    });
  });
  