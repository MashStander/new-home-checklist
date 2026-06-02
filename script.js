/**
 * New Home Checklist - Tailored Production Script
 * Architecture: State-Driven Vanilla JS (Matches original template IDs seamlessly)
 */

// 1. EXACT DATA STRUCTURE
const CHECKLIST_DATA = {
    "Kitchen": {
        "Cookware (Pots & Pans)": [
            "Small saucepan", "Medium saucepan", "Large saucepan", "Large stock pot", 
            "Non-stick frying pan", "Large frying pan/skillet", "Casserole pot/Dutch oven", 
            "Roasting pan", "Wok", "Grill pan", "Sauté pan", "Steamer insert", 
            "Pressure cooker", "Tagine", "Crepe pan"
        ],
        "Cutlery & Knives": [
            "Chef's knife", "Bread knife", "Paring knife", "Utility knife", "Carving knife", 
            "Knife block or magnetic strip", "Knife sharpener", "Sharpening steel"
        ],
        "Utensils & Kitchen Tools": [
            "Wooden spoon", "Slotted spoon", "Serving spoon", "Ladle", "Spatula/turner", 
            "Silicone spatula", "Tongs", "Whisk", "Can opener", "Bottle opener", "Corkscrew", 
            "Vegetable peeler", "Kitchen scissors", "Garlic press", "Pizza cutter", 
            "Ice cream scoop", "Nutcracker", "Meat thermometer", "Egg slicer"
        ],
        "Food Preparation & Measuring": [
            "Large chopping board", "Small chopping board", "Mixing bowls (various sizes)", 
            "Colander", "Sieve", "Salad spinner", "Grater", "Mortar and pestle", 
            "Measuring cups", "Measuring spoons", "Kitchen scale", "Measuring jug"
        ],
        "Bakeware": [
            "Baking trays", "Muffin tin", "Cake tins", "Loaf tin", "Cooling rack", 
            "Oven dishes", "Rolling pin", "Pastry brush", "Cookie cutters", "Cake server", 
            "Piping bags"
        ],
        "Crockery & Tableware": [
            "Dinner plates", "Side plates", "Bowls", "Mugs", "Glasses (water)", 
            "Wine glasses (optional)", "Coffee cups", "Serving bowls", "Salad bowl", 
            "Platter", "Gravy boat", "Cake stand", "Butter dish"
        ],
        "Table Linen": [
            "Tablecloth", "Placemats", "Cloth napkins", "Coasters", "Table runner", 
            "Napkin rings", "Seasonal table décor"
        ],
        "Flatware (Silverware)": [
            "Dinner fork", "Dinner knife", "Dessert spoon", "Teaspoon", "Serving spoon", 
            "Slotted serving spoon", "Serving fork", "Cake server", "Salad servers",
            "Starter settings for 6 people (minimum)", "Starter settings for 8–12 people (ideal)"
        ],
        "Storage & Organisation": [
            "Airtight containers", "Glass storage containers", "Spice jars", "Bread bin", 
            "Biscuit/cookie tin", "Cutlery tray", "Drawer organisers", "Shelf organisers", 
            "Lazy Susan turntable", "Under-shelf baskets", "Label maker (optional)", 
            "Storage bins", "Cereal containers", "Wire baskets"
        ],
        "Cleaning & Hygiene": [
            "Dish rack/drainer", "Dishwashing liquid", "Dishwasher tablets", "Dish brush", 
            "Scrubbing pads", "Microfibre cloths", "All-purpose cleaner", "Degreaser", 
            "Glass cleaner", "Disinfectant", "Floor cleaner", "Kitchen bin", "Recycling bin", 
            "Compost bin (optional)", "Bin liners", "Hand soap dispenser", "Paper towel holder", 
            "Paper towels", "Rubber gloves", "Apron"
        ]
    },
    "Bathroom": {
        "Essential Fixtures & Accessories": [
            "Bath mat", "Hand towels", "Bath towels", "Face cloths", "Toilet brush", 
            "Toilet bin", "Toilet roll holder", "Toilet paper", "Soap dispenser", 
            "Toothbrush holder", "Shower caddy", "Laundry basket"
        ],
        "Storage & Organisation": [
            "Bathroom cabinet", "Storage baskets", "Shelf organisers", "Medicine box", 
            "Drawer organisers"
        ],
        "Cleaning Supplies": [
            "Toilet cleaner", "Bathroom cleaner", "Glass cleaner", "Disinfectant", 
            "Sponge", "Scrubbing brush", "Microfibre cloths", "Rubber gloves"
        ],
        "Nice to Have": [
            "Heated towel rail", "Bathroom scales", "Magnifying mirror", "Bath tray", 
            "Air freshener"
        ]
    },
    "Bedroom": {
        "Bed & Bedding": [
            "Bed frame", "Mattress", "Mattress protector", "Pillows", "Pillow protectors", 
            "Fitted sheets", "Flat sheets (optional)", "Duvet/comforter", "Duvet cover", 
            "Blankets", "2–3 fitted sheets per bed", "2–4 pillowcases per pillow", "2 duvet cover sets"
        ],
        "Furniture": [
            "Bedside tables", "Bedside lamps", "Chest of drawers", "Wardrobe (if no built-in cupboards)", 
            "Full-length mirror", "Dressing table", "Storage bench", "Reading chair", "Ottoman"
        ],
        "Storage & Organisation": [
            "Clothes hangers", "Under-bed storage containers", "Laundry basket", "Shoe rack", 
            "Drawer organisers", "Jewellery box"
        ],
        "Bedroom Comfort": [
            "Curtains or blinds", "Rug", "Fan", "Heater", "Alarm clock", "Charging station"
        ]
    },
    "Lounge / Living Room": {
        "Seating": [
            "Sofa/couch", "Coffee table", "Side table", "Armchairs", "Recliner", 
            "Ottoman", "Bean bags"
        ],
        "Entertainment": [
            "Television", "TV stand or wall mount", "Sound bar", "Speakers", 
            "Gaming console", "Streaming device"
        ],
        "Lighting": [
            "Floor lamp", "Table lamp", "Reading lamp"
        ],
        "Décor": [
            "Curtains/blinds", "Area rug", "Cushions", "Throws", "Wall art", 
            "Indoor plants", "Mirrors"
        ],
        "Storage": [
            "Bookshelf", "TV unit", "Storage baskets", "Sideboard/display cabinet"
        ],
        "Cleaning": [
            "Vacuum cleaner", "Broom", "Dustpan", "Mop", "Bucket", "Duster"
        ]
    },
    "Patio / Braai / Barbecue Area": {
        "Cooking Equipment": [
            "Braai/barbecue", "Braai tongs", "Braai fork", "Braai grid", "Firelighters", 
            "Charcoal or wood", "Fire poker", "Meat thermometer", "Rotisserie", 
            "Smoker box", "Pizza stone"
        ],
        "Outdoor Furniture": [
            "Outdoor table", "Outdoor chairs", "Patio lounge suite", "Umbrella", 
            "Hammock", "Outdoor bar stools"
        ],
        "Outdoor Dining & Entertaining": [
            "Melamine or outdoor plates", "Outdoor glasses", "Serving trays", "Ice bucket", 
            "Cooler box", "Drinks dispenser"
        ],
        "Outdoor Comfort": [
            "Outdoor cushions", "Blanket basket", "Patio heater", "Outdoor fan", 
            "Outdoor lighting", "Lanterns"
        ]
    },
    "Gardening & Maintenance": {
        "Basic Garden Tools": [
            "Garden hose", "Hose reel", "Watering can", "Pruning shears", "Garden gloves", 
            "Spade", "Rake"
        ],
        "Outdoor Cleaning & Storage": [
            "Outdoor broom", "Pressure washer (optional)", "Storage box"
        ]
    }
};

// 2. STATE OBJECT
let appState = {
    checked: {},    
    removed: {},    
    collapsed: {}   
};

// 3. INITIALIZE
document.addEventListener('DOMContentLoaded', () => {
    const data = localStorage.getItem('new_home_checklist_data');
    if (data) {
        try {
            appState = JSON.parse(data);
            if (!appState.checked) appState.checked = {};
            if (!appState.removed) appState.removed = {};
            if (!appState.collapsed) appState.collapsed = {};
        } catch (e) {
            console.error("State parse reset.", e);
        }
    }
    renderAll();
    setupEvents();
});

function saveState() {
    localStorage.setItem('new_home_checklist_data', JSON.stringify(appState));
}

// 4. RENDERING ENGINE
function renderAll() {
    const searchVal = document.getElementById('search')?.value.toLowerCase().trim() || '';
    renderTopStats();
    renderMainChecklist(searchVal);
    renderRemovedSection();
}

// Renders Header Info Dashboard
function renderTopStats() {
    let total = 0, checked = 0;

    for (const [room, categories] of Object.entries(CHECKLIST_DATA)) {
        for (const [cat, items] of Object.entries(categories)) {
            items.forEach(item => {
                const key = `${room}||${cat}||${item}`;
                if (!appState.removed[key]) {
                    total++;
                    if (appState.checked[key]) checked++;
                }
            });
        }
    }

    const remaining = total - checked;
    const percent = total > 0 ? Math.round((checked / total) * 100) : 0;

    // Plugs directly into your <div id="progressText"></div>
    const txtBox = document.getElementById('progressText');
    if (txtBox) {
        txtBox.innerHTML = `Items: ${checked}/${total} Complete (${percent}%) | Remaining: ${remaining}`;
    }

    // Plugs directly into your <div id="progressFill"></div>
    const fillBar = document.getElementById('progressFill');
    if (fillBar) {
        fillBar.style.width = `${percent}%`;
    }
}

// Renders the main App body dynamically
function renderMainChecklist(searchQuery) {
    const appContainer = document.getElementById('app');
    if (!appContainer) return;
    appContainer.innerHTML = '';

    for (const [roomName, categories] of Object.entries(CHECKLIST_DATA)) {
        let roomTotal = 0, roomChecked = 0, matchesSearch = false;

        for (const [cat, items] of Object.entries(categories)) {
            items.forEach(item => {
                const key = `${roomName}||${cat}||${item}`;
                if (!appState.removed[key]) {
                    roomTotal++;
                    if (appState.checked[key]) roomChecked++;
                    if (!searchQuery || item.toLowerCase().includes(searchQuery) || cat.toLowerCase().includes(searchQuery)) {
                        matchesSearch = true;
                    }
                }
            });
        }

        if (searchQuery && !matchesSearch) continue;

        const isCollapsed = !!appState.collapsed[roomName];
        const roomPercent = roomTotal > 0 ? Math.round((roomChecked / roomTotal) * 100) : 0;

        const roomSec = document.createElement('section');
        roomSec.className = `room-card ${isCollapsed ? 'collapsed' : ''}`;
        
        roomSec.innerHTML = `
            <div class="room-heading-wrapper" data-room="${roomName}" style="cursor:pointer; display:flex; justify-content:space-between; align-items:center;">
                <h2>${roomName} (${roomChecked}/${roomTotal} complete — ${roomPercent}%)</h2>
                <span class="toggle-icon" style="font-weight:bold; font-size:1.2rem;">${isCollapsed ? '＋' : '－'}</span>
            </div>
            <div class="room-content" style="display: ${isCollapsed ? 'none' : 'block'}; margin-top:15px;">
                <div class="categories-grid"></div>
            </div>
        `;

        const grid = roomSec.querySelector('.categories-grid');

        for (const [categoryName, items] of Object.entries(categories)) {
            let catHasItems = false;
            const catBox = document.createElement('div');
            catBox.className = 'category-card';
            catBox.innerHTML = `<h3 style="margin-bottom:10px; border-bottom:1px solid #eee; padding-bottom:5px;">${categoryName}</h3><ul class="items-list" style="list-style:none; padding:0;"></ul>`;
            const ul = catBox.querySelector('ul');

            items.forEach(itemName => {
                const key = `${roomName}||${categoryName}||${itemName}`;
                if (appState.removed[key]) return;

                if (searchQuery && !itemName.toLowerCase().includes(searchQuery) && !categoryName.toLowerCase().includes(searchQuery)) {
                    return;
                }

                catHasItems = true;
                const isChecked = !!appState.checked[key];

                const li = document.createElement('li');
                li.className = `item-row ${isChecked ? 'completed-faded' : ''}`;
                li.style.display = "flex";
                li.style.justifyContent = "space-between";
                li.style.alignItems = "center";
                li.style.padding = "6px 0";

                li.innerHTML = `
                    <label style="display:flex; align-items:center; gap:10px; width:100%; cursor:pointer;">
                        <input type="checkbox" data-key="${key}" ${isChecked ? 'checked' : ''}>
                        <span class="text-strike-target">${itemName}</span>
                    </label>
                    <button class="remove-btn" data-key="${key}" style="background:none; border:none; cursor:pointer; font-size:1.1rem;" title="Remove Item">🗑️</button>
                `;
                ul.appendChild(li);
            });

            if (catHasItems) grid.appendChild(catBox);
        }

        appContainer.appendChild(roomSec);
    }
}

// Plugs directly into your bottom <div id="removedItems"></div>
function renderRemovedSection() {
    const remContainer = document.getElementById('removedItems');
    if (!remContainer) return;
    remContainer.innerHTML = '';
    
    let hasRemoved = false;
    const ul = document.createElement('ul');
    ul.style.listStyle = "none";
    ul.style.padding = "0";

    for (const [room, categories] of Object.entries(CHECKLIST_DATA)) {
        for (const [cat, items] of Object.entries(categories)) {
            items.forEach(item => {
                const key = `${room}||${cat}||${item}`;
                if (appState.removed[key]) {
                    hasRemoved = true;
                    const isChecked = !!appState.checked[key];

                    const li = document.createElement('li');
                    li.className = 'item-row removed-greyed-out';
                    li.style.display = "flex";
                    li.style.justifyContent = "space-between";
                    li.style.alignItems = "center";
                    li.style.padding = "8px";
                    li.style.marginBottom = "5px";
                    li.style.borderRadius = "4px";

                    li.innerHTML = `
                        <label style="display:flex; align-items:center; gap:10px;">
                            <input type="checkbox" data-key="${key}" ${isChecked ? 'checked' : ''}>
                            <span class="${isChecked ? 'text-strike-target' : ''}"><strong>[${room}]</strong> ${item}</span>
                        </label>
                        <button class="restore-btn" data-key="${key}" style="background:#e0e0e0; border:none; border-radius:4px; padding:4px 8px; cursor:pointer; font-size:0.85rem;">Restore</button>
                    `;
                    ul.appendChild(li);
                }
            });
        }
    }

    if (hasRemoved) {
        remContainer.appendChild(ul);
    } else {
        remContainer.innerHTML = '<p style="color:#888; font-style:italic;">No removed items.</p>';
    }
}

// 5. EVENTS CONTROLLER
function setupEvents() {
    const body = document.body;

    // Checkbox toggling
    body.addEventListener('change', (e) => {
        if (e.target.matches('input[type="checkbox"]')) {
            const key = e.target.getAttribute('data-key');
            appState.checked[key] = e.target.checked;
            saveState();
            renderAll();
        }
    });

    // Clicks on interactive items
    body.addEventListener('click', (e) => {
        if (e.target.matches('.remove-btn')) {
            const key = e.target.getAttribute('data-key');
            appState.removed[key] = true;
            saveState();
            renderAll();
        } 
        else if (e.target.matches('.restore-btn')) {
            const key = e.target.getAttribute('data-key');
            appState.removed[key] = false;
            saveState();
            renderAll();
        }
        else if (e.target.closest('.room-heading-wrapper')) {
            const wrap = e.target.closest('.room-heading-wrapper');
            const room = wrap.getAttribute('data-room');
            appState.collapsed[room] = !appState.collapsed[room];
            saveState();
            renderAll();
        }
    });

    // Real-time Search Input Linking
    document.getElementById('search')?.addEventListener('input', () => {
        renderAll();
    });

    // "Start Over" confirmation hook
    document.getElementById('resetBtn')?.addEventListener('click', () => {
        if (confirm("Are you sure you want to completely uncheck all items, restore all removed items, and expand all sections?")) {
            appState.checked = {};
            appState.removed = {};
            appState.collapsed = {}; 
            saveState();
            const sInput = document.getElementById('search');
            if (sInput) sInput.value = '';
            renderAll();
        }
    });

    // Export printable document builder summary hook
    document.getElementById('exportBtn')?.addEventListener('click', () => {
        let pWin = window.open('', '_blank');
        let html = `
            <html>
            <head>
                <title>New Home Checklist - Export Summary</title>
                <style>
                    body { font-family: -apple-system, sans-serif; padding: 30px; color: #333; }
                    h1 { color: #2c3e50; border-bottom: 2px solid #eee; padding-bottom: 10px; }
                    h2 { color: #16a085; margin-top: 25px; border-bottom: 1px solid #f5f5f5; }
                    ul { list-style: none; padding: 0; }
                    li { padding: 6px 0; border-bottom: 1px solid #f9f9f9; }
                    .strike { text-decoration: line-through; color: #95a5a6; }
                    .rem { color: #c0392b; font-style: italic; }
                </style>
            </head>
            <body>
                <h1>New Home Checklist Summary Page</h1>
                <p>Generated: ${new Date().toLocaleDateString()}</p>
        `;

        let checkedHtml = '<h2>Checked Items</h2><ul>';
        let uncheckedHtml = '<h2>Unchecked Items</h2><ul>';
        let removedHtml = '<h2>Removed Items</h2><ul>';

        let c = 0, u = 0, r = 0;

        for (const [room, categories] of Object.entries(CHECKLIST_DATA)) {
            for (const [cat, items] of Object.entries(categories)) {
                items.forEach(item => {
                    const key = `${room}||${cat}||${item}`;
                    if (appState.removed[key]) {
                        removedHtml += `<li><span class="rem"><strong>[${room}]</strong> ${item}</span></li>`;
                        r++;
                    } else if (appState.checked[key]) {
                        checkedHtml += `<li><span class="strike"><strong>[${room}]</strong> ${item}</span></li>`;
                        c++;
                    } else {
                        uncheckedHtml += `<li><strong>[${room}]</strong> ${item}</li>`;
                        u++;
                    }
                });
            }
        }

        checkedHtml += c === 0 ? '<li>None</li></ul>' : '</ul>';
        uncheckedHtml += u === 0 ? '<li>None</li></ul>' : '</ul>';
        removedHtml += r === 0 ? '<li>None</li></ul>' : '</ul>';

        html += checkedHtml + uncheckedHtml + removedHtml + `
            <script>window.print();<\/script>
            </body>
            </html>
        `;
        pWin.document.write(html);
        pWin.document.close();
    });
}
