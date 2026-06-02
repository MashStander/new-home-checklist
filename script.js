/**
 * New Home Checklist - Updated Production Script
 * Architecture: State-Driven Vanilla JS (Matches original template IDs seamlessly)
 * Fixes: Text aligned left, added item URLs, added "Or similar product" toggle switchers.
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
        "Outdoor Cleaning & Storage": [
            "Outdoor broom", "Pressure washer (optional)", "Storage box"
        ]
    }
};

// 2. STATE OBJECT (Extended for links and similar toggles)
let appState = {
    checked: {},    
    removed: {},    
    collapsed: {},
    links: {},      // "Room||Category||Item" -> "https://..."
    similar: {}     // "Room||Category||Item" -> boolean
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
            if (!appState.links) appState.links = {};
            if (!appState.similar) appState.similar = {};
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

    const txtBox = document.getElementById('progressText');
    if (txtBox) {
        txtBox.innerHTML = `Items: ${checked}/${total} Complete (${percent}%) | Remaining: ${remaining}`;
    }

    const fillBar = document.getElementById('progressFill');
    if (fillBar) {
        fillBar.style.width = `${percent}%`;
    }
}

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
