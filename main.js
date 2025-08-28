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


document.getElementById("call-btn4").addEventListener("click", function () {
  const point = document.getElementById("point-show").innerText;
  const finalPoint = parseInt(point);

  if (finalPoint < 20) {
    alert("❌ You Dont have too much coin. You need atleast 20 point.");
    return;
  } else {
    alert("Calling Ambulance 1994-999999...");
  }
  const data = {
    who: "Ambulance Number",
    date: new Date().toLocaleTimeString(),
    number: "1994-999999",
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

document.getElementById("call-btn5").addEventListener("click", function () {
  const point = document.getElementById("point-show").innerText;
  const finalPoint = parseInt(point);

  if (finalPoint < 20) {
    alert("❌ You Dont have too much coin. You need atleast 20 point.");
    return;
  } else {
    alert("Calling Women & Child Helpline 109...");
  }
  const data = {
    who: "Women & Child Helpline Number",
    date: new Date().toLocaleTimeString(),
    number: 109,
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

document.getElementById("call-btn6").addEventListener("click", function () {
  const point = document.getElementById("point-show").innerText;
  const finalPoint = parseInt(point);

  if (finalPoint < 20) {
    alert("❌ You Dont have too much coin. You need atleast 20 point.");
    return;
  } else {
    alert("Calling Anti-Corruption 106...");
  }
  const data = {
    who: "Anti-Corruption Number",
    date: new Date().toLocaleTimeString(),
    number: 106,
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

document.getElementById("call-btn7").addEventListener("click", function () {
  const point = document.getElementById("point-show").innerText;
  const finalPoint = parseInt(point);

  if (finalPoint < 20) {
    alert("❌ You Dont have too much coin. You need atleast 20 point.");
    return;
  } else {
    alert("Calling Electricity Outage 16216...");
  }
  const data = {
    who: "Electricity Outage Number",
    date: new Date().toLocaleTimeString(),
    number: 16216,
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

document.getElementById("call-btn8").addEventListener("click", function () {
  const point = document.getElementById("point-show").innerText;
  const finalPoint = parseInt(point);

  if (finalPoint < 20) {
    alert("❌ You Dont have too much coin. You need atleast 20 point.");
    return;
  } else {
    alert("Calling Brac 16445...");
  }
  const data = {
    who: "Brac Number",
    date: new Date().toLocaleTimeString(),
    number: 16445,
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

document.getElementById("call-btn9").addEventListener("click", function () {
  const point = document.getElementById("point-show").innerText;
  const finalPoint = parseInt(point);

  if (finalPoint < 20) {
    alert("❌ You Dont have too much coin. You need atleast 20 point.");
    return;
  } else {
    alert("Calling Bangladesh Railway 163...");
  }
  const data = {
    who: "Bangladesh Railway Number",
    date: new Date().toLocaleTimeString(),
    number: 163,
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