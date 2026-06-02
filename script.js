/**
 * New Home Checklist - Resilient Production Master Script
 * Built Custom for MashStander Template Structure
 * Features: Auto-detecting layout bindings, Left-aligned defaults, Product URL links, "Or similar product" states.
 */

// 1. EXACT DATA MAP STRUCTURE (Direct from Github File LIST FINAL.docx)
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
            "Dish rack/drainer", "Dishwashing liquid", "Dishwasher tablets (if applicable)", "Dish brush", 
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
        "Outdoor Cleaning": [
            "Outdoor broom", "Pressure washer (optional)", "Storage box"
        ]
    }
};

// 2. LOCALSTORAGE STATE MANAGEMENT
let appState = {
    checked: {},    
    removed: {},    
    collapsed: {},
    links: {},      
    similar: {}     
};

// 3. APP LIFE-CYCLE ENGINE
document.addEventListener('DOMContentLoaded', () => {
    const cachedData = localStorage.getItem('new_home_checklist_data');
    if (cachedData) {
        try {
            appState = JSON.parse(cachedData);
            if (!appState.checked) appState.checked = {};
            if (!appState.removed) appState.removed = {};
            if (!appState.collapsed) appState.collapsed = {};
            if (!appState.links) appState.links = {};
            if (!appState.similar) appState.similar = {};
        } catch (error) {
            console.error("Local storage sync error. Reinitializing.", error);
        }
    }
    renderAll();
    setupEventListeners();
});

function saveStateToStorage() {
    localStorage.setItem('new_home_checklist_data', JSON.stringify(appState));
}

// 4. RENDERING ROUTINES
function renderAll() {
    const currentSearch = document.getElementById('search')?.value.toLowerCase().trim() || '';
    renderDashboardMetrics();
    renderMainListUI(currentSearch);
    renderTrashSectionUI();
}

function renderDashboardMetrics() {
    let globalTotal = 0, globalChecked = 0;

    for (const [room, categories] of Object.entries(CHECKLIST_DATA)) {
        for (const [cat, items] of Object.entries(categories)) {
            items.forEach(item => {
                const stateKey = `${room}||${cat}||${item}`;
                if (!appState.removed[stateKey]) {
                    globalTotal++;
                    if (appState.checked[stateKey]) globalChecked++;
                }
            });
        }
    }

    const remainingItems = globalTotal - globalChecked;
    const computedPercentage = globalTotal > 0 ? Math.round((globalChecked / globalTotal) * 100) : 0;

    const summaryTextContainer = document.getElementById('progressText');
    if (summaryTextContainer) {
        summaryTextContainer.innerHTML = `Items: ${globalChecked}/${globalTotal} Complete (${computedPercentage}%) | Remaining: ${remainingItems}`;
    }

    const structuralProgressBarFill = document.getElementById('progressFill');
    if (structuralProgressBarFill) {
        structuralProgressBarFill.style.width = `${computedPercentage}%`;
    }
}

function renderMainListUI(searchQuery) {
    // FAILSAFE CONTAINER FINDER: Checks for 'checklist', 'app', or creates a placeholder right before the removed items section!
    let mainAppContainer = document.getElementById('checklist') || document.getElementById('app');
    
    if (!mainAppContainer) {
        const removedSection = document.getElementById('removedItems');
        if (removedSection) {
            mainAppContainer = document.createElement('div');
            mainAppContainer.id = 'checklist';
            mainAppContainer.style.width = '100%';
            mainAppContainer.style.marginBottom = '30px';
            removedSection.parentNode.insertBefore(mainAppContainer, removedSection);
        } else {
            return; // Absolute fallback protection
        }
    }
    
    mainAppContainer.innerHTML = '';

    for (const [roomName, categories] of Object.entries(CHECKLIST_DATA)) {
        let roomTotal = 0, roomChecked = 0, matchesSearchFilter = false;

        for (const [cat, items] of Object.entries(categories)) {
            items.forEach(item => {
                const stateKey = `${roomName}||${cat}||${item}`;
                if (!appState.removed[stateKey]) {
                    roomTotal++;
                    if (appState.checked[stateKey]) roomChecked++;
                    if (!searchQuery || item.toLowerCase().includes(searchQuery) || cat.toLowerCase().includes(searchQuery)) {
                        matchesSearchFilter = true;
                    }
                }
            });
        }

        if (searchQuery && !matchesSearchFilter) continue;

        const sectionCollapsedState = !!appState.collapsed[roomName];
        const currentRoomPercentage = roomTotal > 0 ? Math.round((roomChecked / roomTotal) * 100) : 0;

        const functionalRoomCard = document.createElement('section');
        functionalRoomCard.className = `room-card ${sectionCollapsedState ? 'collapsed' : ''}`;
        functionalRoomCard.style.background = '#ffffff';
        functionalRoomCard.style.padding = '20px';
        functionalRoomCard.style.borderRadius = '8px';
        functionalRoomCard.style.marginBottom = '20px';
        functionalRoomCard.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
        
        functionalRoomCard.innerHTML = `
            <div class="room-heading-wrapper" data-room="${roomName}" style="display:flex; justify-content:space-between; align-items:center; cursor:pointer;">
                <h2 style="margin:0; font-size:1.3rem; font-weight:bold;">${roomName} (${roomChecked}/${roomTotal} complete — ${currentRoomPercentage}%)</h2>
                <span class="toggle-icon" style="font-size:1.2rem; font-weight:bold;">${sectionCollapsedState ? '＋' : '－'}</span>
            </div>
            <div class="room-content" style="display: ${sectionCollapsedState ? 'none' : 'block'}; margin-top:15px;">
                <div class="categories-grid"></div>
            </div>
        `;

        const categoryGridBox = functionalRoomCard.querySelector('.categories-grid');

        for (const [categoryName, items] of Object.entries(categories)) {
            let columnHasValidVisibleItems = false;
            const singleCategoryCard = document.createElement('div');
            singleCategoryCard.className = 'category-card';
            singleCategoryCard.style.marginBottom = '15px';
            singleCategoryCard.innerHTML = `<h3 style="font-size:1.05rem; color:#4a5568; border-bottom:1px solid #edf2f7; padding-bottom:5px; margin-bottom:10px;">${categoryName}</h3><ul class="items-list" style="list-style:none; padding:0; margin:0;"></ul>`;
            const categoricalListContainer = singleCategoryCard.querySelector('ul');

            items.forEach(itemName => {
                const stateKey = `${roomName}||${categoryName}||${itemName}`;
                if (appState.removed[stateKey]) return;

                if (searchQuery && !itemName.toLowerCase().includes(searchQuery) && !categoryName.toLowerCase().includes(searchQuery)) {
                    return;
                }

                columnHasValidVisibleItems = true;
                const isCurrentlyChecked = !!appState.checked[stateKey];
                const tiedUrl = appState.links[stateKey] || '';
                const isSimilarToggled = !!appState.similar[stateKey];

                const individualItemRow = document.createElement('li');
                individualItemRow.className = `item-row ${isCurrentlyChecked ? 'completed-faded' : ''}`;
                individualItemRow.style.display = 'flex';
                individualItemRow.style.justifyContent = 'space-between';
                individualItemRow.style.alignItems = 'center';
                individualItemRow.style.padding = '8px 0';
                individualItemRow.style.borderBottom = '1px solid #f7fafc';
                if (isCurrentlyChecked) individualItemRow.style.opacity = '0.5';

                individualItemRow.innerHTML = `
                    <div class="item-left-block" style="display:flex; flex-direction:column; align-items:flex-start; gap:4px; width:100%;">
                        <label class="item-main-label" style="display:flex; align-items:center; gap:10px; cursor:pointer; width:100%; font-size:1rem;">
                            <input type="checkbox" class="main-checkbox" data-key="${stateKey}" ${isCurrentlyChecked ? 'checked' : ''} style="width:16px; height:16px;">
                            <span class="text-strike-target" style="${isCurrentlyChecked ? 'text-decoration:line-through; color:#a0aec0;' : ''}">${itemName}</span>
                        </label>
                        
                        <div class="item-controls" style="display:flex; align-items:center; flex-wrap:wrap; gap:12px; margin-left:26px; margin-top:2px;">
                            <button class="link-edit-btn ${tiedUrl ? 'has-link' : ''}" data-key="${stateKey}" style="background:${tiedUrl ? '#e8f4fd' : '#f1f2f6'}; border:1px solid ${tiedUrl ? '#3498db' : '#ced6e0'}; color:${tiedUrl ? '#2980b9' : '#57606f'}; border-radius:4px; padding:2px 6px; font-size:0.75rem; cursor:pointer; font-weight:${tiedUrl ? 'bold' : 'normal'}">
                                🔗 ${tiedUrl ? 'Link Added' : 'Add Link'}
                            </button>
                            ${tiedUrl ? `<a href="${tiedUrl}" target="_blank" class="link-visit-anchor" style="font-size:0.75rem; color:#3498db; text-decoration:underline;">Visit</a>` : ''}

                            <label class="similar-toggle-label" style="display:inline-flex; align-items:center; gap:5px; cursor:pointer; font-size:0.75rem; color:#7f8c8d;">
                                <input type="checkbox" class="similar-checkbox" data-key="${stateKey}" ${isSimilarToggled ? 'checked' : ''} style="width:12px; height:12px;">
                                <span class="similar-text">Or similar product</span>
                            </label>
                        </div>
                    </div>
                    <button class="remove-btn" data-key="${stateKey}" title="Remove Item" style="background:none; border:none; cursor:pointer; font-size:1rem; padding:0 5px;">🗑️</button>
                `;
                categoricalListContainer.appendChild(individualItemRow);
            });

            if (columnHasValidVisibleItems) categoryGridBox.appendChild(singleCategoryCard);
        }

        mainAppContainer.appendChild(functionalRoomCard);
    }
}

function renderTrashSectionUI() {
    const historicalRemovedSectionContainer = document.getElementById('removedItems');
    if (!historicalRemovedSectionContainer) return;
    historicalRemovedSectionContainer.innerHTML = '';
    
    let hasRemovedRowsPresent = false;
    const historicalListRootNode = document.createElement('ul');
    historicalListRootNode.style.listStyle = 'none';
    historicalListRootNode.style.padding = '0';
    historicalListRootNode.style.margin = '10px 0 0 0';

    for (const [room, categories] of Object.entries(CHECKLIST_DATA)) {
        for (const [cat, items] of Object.entries(categories)) {
            items.forEach(item => {
                const stateKey = `${room}||${cat}||${item}`;
                if (appState.removed[stateKey]) {
                    hasRemovedRowsPresent = true;
                    const nestedCheckState = !!appState.checked[stateKey];

                    const removedListItemRow = document.createElement('li');
                    removedListItemRow.style.display = 'flex';
                    removedListItemRow.style.justifyContent = 'space-between';
                    removedListItemRow.style.alignItems = 'center';
                    removedListItemRow.style.padding = '6px 0';
                    removedListItemRow.style.borderBottom = '1px solid #edf2f7';
                    removedListItemRow.style.color = '#a0aec0';

                    removedListItemRow.innerHTML = `
                        <label style="display:flex; align-items:center; gap:10px; cursor:pointer;">
                            <input type="checkbox" data-key="${stateKey}" ${nestedCheckState ? 'checked' : ''} style="width:14px; height:14px;">
                            <span style="${nestedCheckState ? 'text-decoration:line-through;' : ''}"><strong>[${room}]</strong> ${item}</span>
                        </label>
                        <button class="restore-btn" data-key="${stateKey}" style="background:#e2e8f0; border:none; border-radius:4px; padding:2px 8px; font-size:0.75rem; cursor:pointer; color:#4a5568;">Restore</button>
                    `;
                    historicalListRootNode.appendChild(removedListItemRow);
                }
            });
        }
    }

    if (hasRemovedRowsPresent) {
        historicalRemovedSectionContainer.appendChild(historicalListRootNode);
    } else {
        historicalRemovedSectionContainer.innerHTML = '<p class="empty-removed-text" style="color:#a0aec0; font-style:italic; margin-top:10px;">No removed items.</p>';
    }
}

// 5. INTERACTIVE EVENTS DELEGATION HANDLERS
function setupEventListeners() {
    const applicationEventScopeRoot = document.body;

    // Direct Toggles Handlers
    applicationEventScopeRoot.addEventListener('change', (event) => {
        if (event.target.matches('.main-checkbox') || event.target.closest('#removedItems') && event.target.matches('input[type="checkbox"]')) {
            const stateKey = event.target.getAttribute('data-key');
            appState.checked[stateKey] = event.target.checked;
            saveStateToStorage();
            renderAll();
        }
        else if (event.target.matches('.similar-checkbox')) {
            const stateKey = event.target.getAttribute('data-key');
            appState.similar[stateKey] = event.target.checked;
            saveStateToStorage();
        }
    });

    // Delegated Clicks Engine
    applicationEventScopeRoot.addEventListener('click', (event) => {
        if (event.target.matches('.remove-btn')) {
            const stateKey = event.target.getAttribute('data-key');
            appState.removed[stateKey] = true;
            saveStateToStorage();
            renderAll();
        } 
        else if (event.target.matches('.restore-btn')) {
            const stateKey = event.target.getAttribute('data-key');
            appState.removed[stateKey] = false;
            saveStateToStorage();
            renderAll();
        }
        else if (event.target.closest('.room-heading-wrapper')) {
            const clickableHeaderWrapper = event.target.closest('.room-heading-wrapper');
            const correspondingRoomTarget = clickableHeaderWrapper.getAttribute('data-room');
            appState.collapsed[correspondingRoomTarget] = !appState.collapsed[correspondingRoomTarget];
            saveStateToStorage();
            renderAll();
        }
        else if (event.target.matches('.link-edit-btn')) {
            const stateKey = event.target.getAttribute('data-key');
            const ongoingSavedUrl = appState.links[stateKey] || '';
            const userSuppliedUrl = prompt("Enter or paste the product website link below:", ongoingSavedUrl);
            
            if (userSuppliedUrl !== null) {
                const fullyTrimmedUrl = userSuppliedUrl.trim();
                if (fullyTrimmedUrl === '') {
                    delete appState.links[stateKey];
                } else {
                    appState.links[stateKey] = (fullyTrimmedUrl.indexOf('://') === -1) ? 'https://' + fullyTrimmedUrl : fullyTrimmedUrl;
                }
                saveStateToStorage();
                renderAll();
            }
        }
    });

    // Connect Filter Hooks
    document.getElementById('search')?.addEventListener('input', () => {
        renderAll();
    });

    // Start Over Reset Implementation
    document.getElementById('resetBtn')?.addEventListener('click', () => {
        if (confirm("Are you sure you want to completely uncheck all items, restore all removed items, clear linked products, and expand all sections?")) {
            appState.checked = {};
            appState.removed = {};
            appState.collapsed = {}; 
            appState.links = {};
            appState.similar = {};
            saveStateToStorage();
            const interactiveSearchInputNode = document.getElementById('search');
            if (interactiveSearchInputNode) interactiveSearchInputNode.value = '';
            renderAll();
        }
    });

    // Custom Built Printable Context Summary Engine
    document.getElementById('exportBtn')?.addEventListener('click', () => {
        let printWindowSandboxNode = window.open('', '_blank');
        let rawExportDocumentHtmlString = `
            <html>
            <head>
                <title>New Home Checklist - Export Summary</title>
                <style>
                    body { font-family: -apple-system, sans-serif; padding: 30px; color: #333; text-align: left; }
                    h1 { color: #2c3e50; border-bottom: 2px solid #eee; padding-bottom: 10px; text-align: left; }
                    h2 { color: #16a085; margin-top: 25px; border-bottom: 1px solid #f5f5f5; text-align: left; }
                    ul { list-style: none; padding: 0; text-align: left; }
                    li { padding: 6px 0; border-bottom: 1px solid #f9f9f9; text-align: left; }
                    .strike { text-decoration: line-through; color: #95a5a6; }
                    .rem { color: #c0392b; font-style: italic; }
                    .url-lbl { font-size: 0.85rem; color: #3498db; margin-left: 8px; }
                    .sim-lbl { font-size: 0.8rem; color: #7f8c8d; font-style: italic; margin-left: 8px; }
                </style>
            </head>
            <body>
                <h1>New Home Checklist Summary Page</h1>
                <p>Generated: ${new Date().toLocaleDateString()}</p>
        `;

        let checkedHtml = '<h2>Checked Items</h2><ul>';
        let uncheckedHtml = '<h2>Unchecked Items</h2><ul>';
        let removedHtml = '<h2>Removed Items</h2><ul>';

        let cCount = 0, uCount = 0, rCount = 0;

        for (const [room, categories] of Object.entries(CHECKLIST_DATA)) {
            for (const [cat, items] of Object.entries(categories)) {
                items.forEach(item => {
                    const stateKey = `${room}||${cat}||${item}`;
                    const customRenderedLinkSegment = appState.links[stateKey] ? ` <span class="url-lbl">(Link: ${appState.links[stateKey]})</span>` : '';
                    const customRenderedSimilarSegment = appState.similar[stateKey] ? ` <span class="sim-lbl">[Or similar product]</span>` : '';
                    
                    if (appState.removed[stateKey]) {
                        removedHtml += `<li><span class="rem"><strong>[${room}]</strong> ${item}</span></li>`;
                        rCount++;
                    } else if (appState.checked[stateKey]) {
                        checkedHtml += `<li><span class="strike"><strong>[${room}]</strong> ${item}</span>${customRenderedLinkSegment}${customRenderedSimilarSegment}</li>`;
                        cCount++;
                    } else {
                        uncheckedHtml += `<li><strong>[${room}]</strong> ${item}${customRenderedLinkSegment}${customRenderedSimilarSegment}</li>`;
                        uCount++;
                    }
                });
            }
        }

        checkedHtml += cCount === 0 ? '<li>None</li></ul>' : '</ul>';
        uncheckedHtml += uCount === 0 ? '<li>None</li></ul>' : '</ul>';
        removedHtml += rCount === 0 ? '<li>None</li></ul>' : '</ul>';

        rawExportDocumentHtmlString += checkedHtml + uncheckedHtml + removedHtml + `
            <script>window.print();<\/script>
            </body>
            </html>
        `;
        printWindowSandboxNode.document.write(rawExportDocumentHtmlString);
        printWindowSandboxNode.document.close();
    });
}
