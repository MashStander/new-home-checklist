const data = [
  {
    id: "kitchen",
    title: "Kitchen",
    items: [
      { id: "pan1", text: "Small saucepan" },
      { id: "pan2", text: "Medium saucepan" },
      { id: "pan3", text: "Large saucepan" }
    ]
  },
  {
    id: "bathroom",
    title: "Bathroom",
    items: [
      { id: "bath1", text: "Bath mat" },
      { id: "bath2", text: "Hand towels" }
    ]
  }
];

let state = JSON.parse(localStorage.getItem("homeChecklist")) || {
  checked: {},
  removed: {}
};

const app = document.getElementById("app");
const removedContainer = document.getElementById("removedItems");

function save() {
  localStorage.setItem("homeChecklist", JSON.stringify(state));
  updateProgress();
}

function toggleCheck(id) {
  state.checked[id] = !state.checked[id];
  save();
  render();
}

function removeItem(sectionId, item) {
  state.removed[item.id] = { ...item, sectionId };
  save();
  render();
}

function restoreItem(id) {
  delete state.removed[id];
  save();
  render();
}

function updateProgress() {
  let total = 0, done = 0;

  data.forEach(section => {
    section.items.forEach(i => {
      total++;
      if (state.checked[i.id]) done++;
    });
  });

  document.getElementById("progressText").innerText =
    `${done}/${total} completed`;

  document.getElementById("progressFill").style.width =
    `${(done / total) * 100}%`;
}

function render() {
  app.innerHTML = "";

  data.forEach(section => {
    const div = document.createElement("div");
    div.className = "section";

    div.innerHTML = `
      <div class="section-header">
        ${section.title}
      </div>
    `;

    section.items.forEach(item => {
      const row = document.createElement("div");
      row.className = "item " + (state.checked[item.id] ? "checked" : "");

      row.innerHTML = `
        <span>${item.text}</span>
        <div class="item-actions">
          <button class="icon-btn" onclick="toggleCheck('${item.id}')">✔</button>
          <button class="icon-btn remove" onclick='removeItem("${section.id}", ${JSON.stringify(item)})'>🗑</button>
        </div>
      `;

      div.appendChild(row);
    });

    app.appendChild(div);
  });

  // Removed items
  removedContainer.innerHTML = "";
  Object.values(state.removed).forEach(item => {
    const row = document.createElement("div");
    row.className = "item removed";

    row.innerHTML = `
      <span>${item.text}</span>
      <button class="icon-btn restore" onclick="restoreItem('${item.id}')">♻</button>
    `;

    removedContainer.appendChild(row);
  });

  updateProgress();
}

document.getElementById("search").addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  document.querySelectorAll(".item").forEach(el => {
    el.style.display = el.innerText.toLowerCase().includes(q)
      ? "flex"
      : "none";
  });
});

document.getElementById("resetBtn").onclick = () => {
  if (confirm("Reset everything?")) {
    state = { checked: {}, removed: {} };
    save();
    render();
  }
};

render();
