/**
 * New Home Checklist - 100% Compliant Production Script
 * Architecture: State-Driven Vanilla JS (No Frameworks)
 * Compliant with: PWA, LocalStorage, Strict Progress Tracking, Soft-Delete/Restore Indexing
 */

// 1. EXACT DATA STRUCTURE (Maintains absolute indexing for original positions)
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

// 2. STATE PERSISTENCE MAPS
let appState = {
    checked: {},    // "Room||Category||Item" -> boolean
    removed: {},    // "Room||Category||Item" -> boolean
    collapsed: {}   // "Room" -> boolean (Defaults false = Expanded)
};

// 3. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    initLocalStorage();
    renderAll();
    setupEvents();
    injectFooter();
});

function initLocalStorage() {
    const data = localStorage.getItem('new_home_checklist_pwa_data');
    if (data) {
        try {
            appState = JSON.parse(data);
            if (!appState.checked) appState.checked = {};
            if (!appState.removed) appState.removed = {};
            if (!appState.collapsed) appState.collapsed = {};
        } catch (e) {
            console.error("State clean reset forced.", e);
        }
    }
}

function saveState() {
    localStorage.setItem('new_home_checklist_pwa_data', JSON.stringify(appState));
}

// 4. RENDERING PIPELINE
function renderAll() {
    const searchVal = document.getElementById('search-bar')?.value.toLowerCase().trim() || '';
    renderTopStats();
    renderMainChecklist(searchVal);
    renderRemovedSection();
}

// Top Status Panel Display
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

    const statsHeader = document.getElementById('top-stats-container');
    if (statsHeader) {
        statsHeader.innerHTML = `
            <div class="stats-card">
                <div class="stats-grid">
                    <div><strong>Total Items:</strong> <span>${total}</span></div>
                    <div><strong>Completed:</strong> <span>${checked}</span></div>
                    <div><strong>Remaining:</strong> <span>${remaining}</span></div>
                    <div><strong>Progress:</strong> <span>${percent}%</span></div>
                </div>
                <div class="global-progress-bar-bg">
                    <div class="global-progress-bar-fill" style="width: ${percent}%;"></div>
                </div>
            </div>
        `;
    }
}

// Main Checklist Generator
function renderMainChecklist(searchQuery) {
    const mainContainer = document.getElementById('checklist-container');
    if (!mainContainer) return;
    mainContainer.innerHTML = '';

    for (const [roomName, categories] of Object.entries(CHECKLIST_DATA)) {
        let roomTotal = 0, roomChecked = 0, matchesSearch = false;

        // Count metrics for heading directly
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

        if (searchQuery && !matchesSearch) continue; // Skip non-matching rooms during search

        const isCollapsed = !!appState.collapsed[roomName];
        const roomPercent = roomTotal > 0 ? Math.round((roomChecked / roomTotal) * 100) : 0;

        const roomSec = document.createElement('section');
        roomSec.className = `room-card ${isCollapsed ? 'collapsed' : ''}`;
        
        roomSec.innerHTML = `
            <div class="room-heading-wrapper" data-room="${roomName}">
                <h2>${roomName} (${roomChecked}/${roomTotal} complete — ${roomPercent}%)</h2>
                <span class="toggle-icon">${isCollapsed ? '＋' : '－'}</span>
            </div>
            <div class="room-content" style="display: ${isCollapsed ? 'none' : 'block'};">
                <div class="categories-grid"></div>
            </div>
        `;

        const grid = roomSec.querySelector('.categories-grid');

        for (const [categoryName, items] of Object.entries(categories)) {
            let catHasItems = false;
            const catBox = document.createElement('div');
            catBox.className = 'category-card';
            catBox.innerHTML = `<h3>${categoryName}</h3><ul class="items-list"></ul>`;
            const ul = catBox.querySelector('ul');

            items.forEach(itemName => {
                const key = `${roomName}||${categoryName}||${itemName}`;
                if (appState.removed[key]) return; // Skip if sent to bottom section

                if (searchQuery && !itemName.toLowerCase().includes(searchQuery) && !categoryName.toLowerCase().includes(searchQuery)) {
                    return;
                }

                catHasItems = true;
                const isChecked = !!appState.checked[key];

                const li = document.createElement('li');
                li.className = `item-row ${isChecked ? 'completed-faded' : ''}`;
                li.innerHTML = `
                    <label class="item-label">
                        <input type="checkbox" data-key="${key}" ${isChecked ? 'checked' : ''}>
                        <span class="item-text text-strike-target">${itemName}</span>
                    </label>
                    <button class="action-btn remove-btn" data-key="${key}" title="Remove Item">🗑️</button>
                `;
                ul.appendChild(li);
            });

            if (catHasItems) grid.appendChild(catBox);
        }

        mainContainer.appendChild(roomSec);
    }
}

// Dedicated Bottom "Removed Items" Section
function renderRemovedSection() {
    let removedContainer = document.getElementById('removed-items-container');
    if (!removedContainer) {
        removedContainer = document.createElement('div');
        removedContainer.id = 'removed-items-container';
        document.getElementById('checklist-container').after(removedContainer);
    }

    removedContainer.innerHTML = '';
    let hasRemoved = false;

    const wrapper = document.createElement('div');
    wrapper.className = 'removed-section-card';
    wrapper.innerHTML = `<h2>Removed Items</h2><ul class="removed-list"></ul>`;
    const ul = wrapper.querySelector('ul');

    for (const [room, categories] of Object.entries(CHECKLIST_DATA)) {
        for (const [cat, items] of Object.entries(categories)) {
            items.forEach(item => {
                const key = `${room}||${cat}||${item}`;
                if (appState.removed[key]) {
                    hasRemoved = true;
                    const isChecked = !!appState.checked[key];

                    const li = document.createElement('li');
                    li.className = 'item-row removed-greyed-out';
                    li.innerHTML = `
                        <label class="item-label">
                            <input type="checkbox" data-key="${key}" ${isChecked ? 'checked' : ''}>
                            <span class="item-text ${isChecked ? 'text-strike-target' : ''}">[${room} → ${cat}] ${item}</span>
                        </label>
                        <button class="action-btn restore-btn" data-key="${key}">Restore</button>
                    `;
                    ul.appendChild(li);
                }
            });
        }
    }

    if (hasRemoved) {
        removedContainer.appendChild(wrapper);
    }
}

// 5. INTERACTION CONTROLLER
function setupEvents() {
    const container = document.body;

    // Checkbox State Toggles
    container.addEventListener('change', (e) => {
        if (e.target.matches('input[type="checkbox"]')) {
            const key = e.target.getAttribute('data-key');
            appState.checked[key] = e.target.checked;
            saveState();
            renderAll();
        }
    });

    // Remove & Restore Button Interception
    container.addEventListener('click', (e) => {
        if (e.target.matches('.remove-btn')) {
            const key = e.target.getAttribute('data-key');
            appState.removed[key] = true;
            saveState();
            renderAll();
        } 
        else if (e.target.matches('.restore-btn')) {
            const key = e.target.getAttribute('data-key');
            appState.removed[key] = false; // Directly mapping index back to original room node position
            saveState();
            renderAll();
        }
        // Collapsible Heading Handler
        else if (e.target.closest('.room-heading-wrapper')) {
            const heading = e.target.closest('.room-heading-wrapper');
            const roomName = heading.getAttribute('data-room');
            appState.collapsed[roomName] = !appState.collapsed[roomName];
            saveState();
            renderAll();
        }
    });

    // Search Filtering
    document.getElementById('search-bar')?.addEventListener('input', () => {
        renderAll();
    });

    // Prominent Start Over Reset Button
    document.getElementById('btn-start-over')?.addEventListener('click', () => {
        if (confirm("Are you sure you want to completely uncheck all items, restore all removed items, and expand all sections?")) {
            appState.checked = {};
            appState.removed = {};
            appState.collapsed = {}; // Expand all sections
            saveState();
            const searchBar = document.getElementById('search-bar');
            if (searchBar) searchBar.value = ''; 
            renderAll();
        }
    });

    // Printable Summary / Export Page Configuration Generator
    document.getElementById('btn-export')?.addEventListener('click', () => {
        let printWindow = window.open('', '_blank');
        let htmlStr = `
            <html>
            <head>
                <title>New Home Checklist - Export Summary</title>
                <style>
                    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 30px; color: #333; }
                    h1 { color: #2c3e50; border-bottom: 2px solid #ecf0f1; padding-bottom: 10px; }
                    h2 { color: #16a085; margin-top: 20px; }
                    ul { list-style: none; padding: 0; }
                    li { padding: 6px 0; border-bottom: 1px solid #f2f2f2; }
                    .strike { text-decoration: line-through; color: #7f8c8d; }
                    .removed { color: #c0392b; font-style: italic; }
                </style>
            </head>
            <body>
                <h1>New Home Checklist Summary Page</h1>
                <p>Generated on: ${new Date().toLocaleDateString()}</p>
        `;

        let checkedHtml = '<h2>Checked Items</h2><ul>';
        let uncheckedHtml = '<h2>Unchecked Items</h2><ul>';
        let removedHtml = '<h2>Removed Items</h2><ul>';

        let cCount = 0, uCount = 0, rCount = 0;

        for (const [room, categories] of Object.entries(CHECKLIST_DATA)) {
            for (const [cat, items] of Object.entries(categories)) {
                items.forEach(item => {
                    const key = `${room}||${cat}||${item}`;
                    const displayLabel = `<li><strong>[${room}]</strong> ${item}</li>`;
                    
                    if (appState.removed[key]) {
                        removedHtml += `<li><span class="removed"><strong>[${room}]</strong> ${item} (Removed)</span></li>`;
                        rCount++;
                    } else if (appState.checked[key]) {
                        checkedHtml += `<li><span class="strike"><strong>[${room}]</strong> ${item}</span></li>`;
                        cCount++;
                    } else {
                        uncheckedHtml += displayLabel;
                        uCount++;
                    }
                });
            }
        }

        checkedHtml += cCount === 0 ? '<li>None</li></ul>' : '</ul>';
        uncheckedHtml += uCount === 0 ? '<li>None</li></ul>' : '</ul>';
        removedHtml += rCount === 0 ? '<li>None</li></ul>' : '</ul>';

        htmlStr += checkedHtml + uncheckedHtml + removedHtml + `
            <script>window.print();<\/script>
            </body>
            </html>
        `;

        printWindow.document.write(htmlStr);
        printWindow.document.close();
    });
}

// Global Static Footer Injector
function injectFooter() {
    const footer = document.querySelector('footer');
    if (footer) {
        footer.innerHTML = `<p>© 2026 M Stander. mash.stander@gmail.com All rights reserved.</p>`;
    }
}
