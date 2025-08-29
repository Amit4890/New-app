let coins = 100;
let favorites = 0; 

const coinDisplay = document.getElementById("coinDisplay");
const callHistoryList = document.getElementById("callHistoryList");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");


const heartCount = document.querySelector("header .flex .flex .ml-1");

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

  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  alert(
    `📞Calling number... ${serviceName} (${serviceNumber}) `
  );

  const li = document.createElement("li");
  li.className =
    "flex justify-between items-center bg-white p-2 rounded shadow";
  li.innerHTML = `
    <div>
      <span class="font-semibold">${serviceName}</span>
      <span class="text-gray-500 ml-2">${serviceNumber}</span>
    </div>
    <span class="text-gray-400 text-xs">${time}</span>
  `;
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


document.querySelectorAll(".copyBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".bg-white");
    const serviceNumber = card.querySelector(".text-3xl").innerText;
    navigator.clipboard.writeText(serviceNumber).then(() => {
      alert(`Copied: ${serviceNumber}`);
    });
  });
});


clearHistoryBtn.addEventListener("click", () => {
  callHistoryList.innerHTML = "";
});

document.querySelectorAll(".bg-white button.text-gray-400").forEach((heart) => {
  heart.addEventListener("click", () => {
    favorites++;
    heartCount.textContent = favorites;
    heart.classList.toggle("text-red-500");
    heart.textContent = heart.classList.contains("text-red-500") ? "❤️" : "♡";
  });
});

      
