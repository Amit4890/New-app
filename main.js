let coins = 100;
const coinDisplay = document.getElementById("coinDisplay");
const callHistoryList = document.getElementById("callHistoryList");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");

function updateCoins() {
  coinDisplay.textContent = coins;
}

function makeCall(serviceName, serviceNumber) {
  if (coins < 20) {
    alert("You don't have enough coins!");
    return;
  }
  coins -= 20;
  updateCoins();

  alert(`20 coins deducted. `);

  const li = document.createElement("li");
  li.className = "flex justify-between";
  li.innerHTML = `<span>${serviceName}</span> <span>${serviceNumber}</span>`;
  callHistoryList.appendChild(li);
}

document.querySelectorAll(".callBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".bg-white");
    const serviceName = card.querySelector("h4").innerText;
    const serviceNumber = card.querySelector(".text-3xl").innerText;
    makeCall(serviceName, serviceNumber);
  });
});

clearHistoryBtn.addEventListener("click", () => {
  callHistoryList.innerHTML = "";
});
