//Add History
const callHistory = [];

//Call Button
document.getElementById("call-btn1").addEventListener("click", function () {
  const point = document.getElementById("point-show").innerText;
  const finalPoint = parseInt(point);

  if (finalPoint < 20) {
    alert("❌ You Dont have too much coin. You need atleast 20 point.");
    return;
  } else {
    alert("Calling National Emergency 999...");
  }
  const data = {
    who: "National Emergency Number",
    date: new Date().toLocaleTimeString(),
    number: 999,
  };

  document.getElementById("point-show").innerText = finalPoint - 20;
  const callHistoryContainer = document.getElementById("callHistory-parent");
  const callHistoryContainer1 = document.getElementById("callHistory-parent1");
  
    const div = document.createElement("div");
    div.innerHTML = `
         <div
          class="bg-zinc-50 rounded-lg mt-[8px] mb-[8px] flex items-center justify-between p-[16px]"
        >
          <div>
            <h1 class="inter-font text-[18px] max-sm:text-[14px] font-semibold">
              ${data.who}
            </h1>
            <p class="hind-madurai-font font-normal text-[18px]">${data.number}</p>
          </div>
          <h1 class="hind-madurai-font text-[18px] font-normal">${data.date}</h1>
        </div>
        `;
        const div1=div.cloneNode(true);
    callHistoryContainer.appendChild(div);
    callHistoryContainer1.appendChild(div1);
});

document.getElementById("call-btn2").addEventListener("click", function () {
  const point = document.getElementById("point-show").innerText;
  const finalPoint = parseInt(point);

  if (finalPoint < 20) {
    alert("❌ You Dont have too much coin. You need atleast 20 point.");
    return;
  } else {
    alert("Calling Police 999...");
  }
  const data = {
    who: "Police Number",
    date: new Date().toLocaleTimeString(),
    number: 999,
  };

  callHistory.push(data);
  document.getElementById("point-show").innerText = finalPoint - 20;
  const callHistoryContainer = document.getElementById("callHistory-parent");
  const callHistoryContainer1 = document.getElementById("callHistory-parent1");
  
    const div = document.createElement("div");
    div.innerHTML = `
         <div
          class="bg-zinc-50 rounded-lg mt-[8px] mb-[8px] flex items-center justify-between p-[16px]"
        >
          <div>
            <h1 class="inter-font text-[18px] max-sm:text-[14px] font-semibold">
              ${data.who}
            </h1>
            <p class="hind-madurai-font font-normal text-[18px]">${data.number}</p>
          </div>
          <h1 class="hind-madurai-font text-[18px] font-normal">${data.date}</h1>
        </div>
        `;
        const div1=div.cloneNode(true);
    callHistoryContainer.appendChild(div);
    callHistoryContainer1.appendChild(div1);
});
document.getElementById("call-btn3").addEventListener("click", function () {
  const point = document.getElementById("point-show").innerText;
  const finalPoint = parseInt(point);

  if (finalPoint < 20) {
    alert("❌ You Dont have too much coin. You need atleast 20 point.");
    return;
  } else {
    alert("Calling Fire Service 999...");
  }
  const data = {
    who: "Fire Service Number",
    date: new Date().toLocaleTimeString(),
    number: 999,
  };

  callHistory.push(data);
  document.getElementById("point-show").innerText = finalPoint - 20;
  const callHistoryContainer = document.getElementById("callHistory-parent");
  const callHistoryContainer1 = document.getElementById("callHistory-parent1");
    const div = document.createElement("div");
    div.innerHTML = `
         <div
          class="bg-zinc-50 rounded-lg mt-[8px] mb-[8px] flex items-center justify-between p-[16px]"
        >
          <div>
            <h1 class="inter-font text-[18px] max-sm:text-[14px] font-semibold">
              ${data.who}
            </h1>
            <p class="hind-madurai-font font-normal text-[18px]">${data.number}</p>
          </div>
          <h1 class="hind-madurai-font text-[18px] font-normal">${data.date}</h1>
        </div>
        `;
        const div1=div.cloneNode(true);
    callHistoryContainer.appendChild(div);
    callHistoryContainer1.appendChild(div1);
});