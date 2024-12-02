document.getElementById('calculate-btn').addEventListener('click', () => {
    const checkboxes = document.querySelectorAll('input[name="product"]:checked');
    let totalCost = 0;
  
    checkboxes.forEach((checkbox) => {
      totalCost += parseInt(checkbox.value, 10);
    });
  
    document.getElementById('total-cost').textContent = totalCost;
  });
  