const rawData = [
  {
    no: 1,
    id: "TR001",
    k: "Jakarta",
    cat: "Elektronik",
    p: "Laptop",
    s: 15000000,
    issue: "Duplikat Data",
  },
  {
    no: 2,
    id: "TR002",
    k: "Bandung",
    cat: "Fashion",
    p: "Kemeja",
    s: 250000,
    issue: "-",
  },
  {
    no: 3,
    id: "TR003",
    k: "Surabaya",
    cat: "Kuliner",
    p: "Bakso",
    s: 50000,
    issue: "-",
  },
  {
    no: 4,
    id: "TR004",
    k: "Jakarta",
    cat: "Elektronik",
    p: "Mouse",
    s: 150000,
    issue: "-",
  },
  {
    no: 5,
    id: "TR005",
    k: "Medan",
    cat: "Fashion",
    p: "Celana",
    s: 300000,
    issue: "-",
  },
  {
    no: 6,
    id: "TR006",
    k: "Bandung",
    cat: "Kuliner",
    p: "Seblak",
    s: 25000,
    issue: "-",
  },
  {
    no: 7,
    id: "TR007",
    k: "Surabaya",
    cat: "Elektronik",
    p: "Smartphone",
    s: 5000000,
    issue: "-",
  },
  {
    no: 8,
    id: "TR008",
    k: "Jakarta",
    cat: "Fashion",
    p: "Kaos",
    s: 100000,
    issue: "-",
  },
  {
    no: 9,
    id: "TR009",
    k: "Bandung",
    cat: "Elektronik",
    p: "Monitor",
    s: 2000000,
    issue: "-",
  },
  {
    no: 10,
    id: "TR010",
    k: "Jakarta",
    cat: "Fashion",
    p: "Sepatu",
    s: 500000,
    issue: "-",
  },
  {
    no: 11,
    id: "TR011",
    k: "Jakarta",
    cat: "Fashion",
    p: "Sepatu",
    s: 500000,
    issue: "-",
  },
  {
    no: 12,
    id: "TR012",
    k: "Bandung",
    cat: "Kuliner",
    p: "Mie Ayam",
    s: 20000,
    issue: "-",
  },
  {
    no: 13,
    id: "TR013",
    k: "Surabaya",
    cat: "Elektronik",
    p: "Keyboard",
    s: 200000,
    issue: "-",
  },
  {
    no: 14,
    id: "TR014",
    k: "Medan",
    cat: "Fashion",
    p: "Jaket",
    s: 350000,
    issue: "-",
  },
  {
    no: 15,
    id: "TR015",
    k: "Jakarta",
    cat: "Kuliner",
    p: "Sate",
    s: 40000,
    issue: "-",
  },
  {
    no: 16,
    id: "TR016",
    k: "Bandung",
    cat: "Elektronik",
    p: "Headset",
    s: 150000,
    issue: "-",
  },
  {
    no: 17,
    id: "TR017",
    k: "Surabaya",
    cat: "Fashion",
    p: "Tas",
    s: 250000,
    issue: "-",
  },
  {
    no: 18,
    id: "TR018",
    k: "Medan",
    cat: "Kuliner",
    p: "Nasi Goreng",
    s: 30000,
    issue: "-",
  },
  {
    no: 19,
    id: "TR019",
    k: "Jakarta",
    cat: "Elektronik",
    p: "Flashdisk",
    s: 100000,
    issue: "-",
  },
  {
    no: 20,
    id: "TR020",
    k: "Bandung",
    cat: "Fashion",
    p: "Topi",
    s: 80000,
    issue: "-",
  },
  {
    no: 21,
    id: "TR021",
    k: "Surabaya",
    cat: "Kuliner",
    p: "Bakso",
    s: 50000,
    issue: "-",
  },
  {
    no: 22,
    id: "TR022",
    k: "Medan",
    cat: "Elektronik",
    p: "Mouse",
    s: 120000,
    issue: "-",
  },
  {
    no: 23,
    id: "TR023",
    k: "Jakarta",
    cat: "Fashion",
    p: "Kaos",
    s: 100000,
    issue: "-",
  },
  {
    no: 24,
    id: "TR024",
    k: "Bandung",
    cat: "Kuliner",
    p: "Seblak",
    s: 25000,
    issue: "-",
  },
  {
    no: 25,
    id: "TR025",
    k: "Surabaya",
    cat: "Elektronik",
    p: "Monitor",
    s: 2000000,
    issue: "-",
  },
  {
    no: 26,
    id: "TR026",
    k: "Medan",
    cat: "Fashion",
    p: "Celana",
    s: 300000,
    issue: "-",
  },
  {
    no: 27,
    id: "TR027",
    k: "Jakarta",
    cat: "Kuliner",
    p: "Mie Goreng",
    s: 25000,
    issue: "-",
  },
  {
    no: 28,
    id: "TR028",
    k: "Bandung",
    cat: "Elektronik",
    p: "Laptop",
    s: 14000000,
    issue: "-",
  },
  {
    no: 29,
    id: "TR029",
    k: "Surabaya",
    cat: "Fashion",
    p: "Kemeja",
    s: 200000,
    issue: "-",
  },
  {
    no: 30,
    id: "TR030",
    k: "Medan",
    cat: "Kuliner",
    p: "Soto",
    s: 30000,
    issue: "-",
  },
  {
    no: 31,
    id: "TR031",
    k: "Jakarta",
    cat: "Elektronik",
    p: "Smartphone",
    s: 5000000,
    issue: "-",
  },
  {
    no: 32,
    id: "TR032",
    k: "Bandung",
    cat: "Fashion",
    p: "Sandal",
    s: 90000,
    issue: "-",
  },
  {
    no: 33,
    id: "TR033",
    k: "Surabaya",
    cat: "Kuliner",
    p: "Nasi Uduk",
    s: 20000,
    issue: "-",
  },
  {
    no: 34,
    id: "TR034",
    k: "Medan",
    cat: "Elektronik",
    p: "Keyboard",
    s: 220000,
    issue: "-",
  },
  {
    no: 35,
    id: "TR035",
    k: "Jakarta",
    cat: "Fashion",
    p: "Blouse",
    s: 180000,
    issue: "-",
  },
  {
    no: 36,
    id: "TR036",
    k: "Bandung",
    cat: "Kuliner",
    p: "Batagor",
    s: 30000,
    issue: "-",
  },
  {
    no: 37,
    id: "TR037",
    k: "Surabaya",
    cat: "Elektronik",
    p: "Mouse",
    s: 130000,
    issue: "-",
  },
  {
    no: 38,
    id: "TR038",
    k: "Medan",
    cat: "Fashion",
    p: "Jaket",
    s: 400000,
    issue: "-",
  },
  {
    no: 39,
    id: "TR039",
    k: "Jakarta",
    cat: "Kuliner",
    p: "Sate Ayam",
    s: 45000,
    issue: "-",
  },
  {
    no: 40,
    id: "TR040",
    k: "Bandung",
    cat: "Elektronik",
    p: "Headphone",
    s: 250000,
    issue: "-",
  },
  {
    no: 41,
    id: "TR041",
    k: "Surabaya",
    cat: "Fashion",
    p: "Sepatu",
    s: 600000,
    issue: "-",
  },
  {
    no: 42,
    id: "TR042",
    k: "Medan",
    cat: "Kuliner",
    p: "Mie Ayam",
    s: 22000,
    issue: "-",
  },
  {
    no: 43,
    id: "TR043",
    k: "Jakarta",
    cat: "Elektronik",
    p: "Laptop",
    s: 15500000,
    issue: "-",
  },
  {
    no: 44,
    id: "TR044",
    k: "Bandung",
    cat: "Fashion",
    p: "Kaos",
    s: 110000,
    issue: "-",
  },
  {
    no: 45,
    id: "TR045",
    k: "Surabaya",
    cat: "Kuliner",
    p: "Bakso",
    s: 55000,
    issue: "-",
  },
  {
    no: 46,
    id: "TR046",
    k: "Medan",
    cat: "Elektronik",
    p: "Flashdisk",
    s: 90000,
    issue: "-",
  },
  {
    no: 47,
    id: "TR047",
    k: "Jakarta",
    cat: "Fashion",
    p: "Kemeja",
    s: 230000,
    issue: "-",
  },
  {
    no: 48,
    id: "TR048",
    k: "Bandung",
    cat: "Kuliner",
    p: "Nasi Goreng",
    s: 28000,
    issue: "-",
  },
  {
    no: 49,
    id: "TR049",
    k: "Surabaya",
    cat: "Elektronik",
    p: "Monitor",
    s: 2100000,
    issue: "-",
  },
  {
    no: 50,
    id: "TR050",
    k: "Medan",
    cat: "Fashion",
    p: "Tas",
    s: 300000,
    issue: "-",
  },
  {
    no: 51,
    id: "TR051",
    k: "Jakarta",
    cat: "Kuliner",
    p: "Soto",
    s: 35000,
    issue: "-",
  },
  {
    no: 52,
    id: "TR052",
    k: "Bandung",
    cat: "Elektronik",
    p: "Mouse",
    s: 140000,
    issue: "-",
  },
  {
    no: 53,
    id: "TR053",
    k: "Surabaya",
    cat: "Fashion",
    p: "Jaket",
    s: 370000,
    issue: "-",
  },
  {
    no: 54,
    id: "TR054",
    k: "Medan",
    cat: "Kuliner",
    p: "Seblak",
    s: 27000,
    issue: "-",
  },
  {
    no: 55,
    id: "TR055",
    k: "Jakarta",
    cat: "Elektronik",
    p: "Smartphone",
    s: 5200000,
    issue: "-",
  },
  {
    no: 56,
    id: "TR056",
    k: "Bandung",
    cat: "Fashion",
    p: "Sandal",
    s: 85000,
    issue: "-",
  },
  {
    no: 57,
    id: "TR057",
    k: "Surabaya",
    cat: "Kuliner",
    p: "Mie Goreng",
    s: 23000,
    issue: "-",
  },
  {
    no: 58,
    id: "TR058",
    k: "Medan",
    cat: "Elektronik",
    p: "Keyboard",
    s: 210000,
    issue: "-",
  },
  {
    no: 59,
    id: "TR059",
    k: "Jakarta",
    cat: "Fashion",
    p: "Blouse",
    s: 190000,
    issue: "-",
  },
  {
    no: 60,
    id: "TR060",
    k: "Bandung",
    cat: "Kuliner",
    p: "Batagor",
    s: 32000,
    issue: "-",
  },
  {
    no: 61,
    id: "TR061",
    k: "Surabaya",
    cat: "Elektronik",
    p: "Headset",
    s: 160000,
    issue: "-",
  },
  {
    no: 62,
    id: "TR062",
    k: "Medan",
    cat: "Fashion",
    p: "Sepatu",
    s: 550000,
    issue: "-",
  },
  {
    no: 63,
    id: "TR063",
    k: "Jakarta",
    cat: "Kuliner",
    p: "Sate",
    s: 42000,
    issue: "-",
  },
  {
    no: 64,
    id: "TR064",
    k: "Bandung",
    cat: "Elektronik",
    p: "Flashdisk",
    s: 95000,
    issue: "-",
  },
  {
    no: 65,
    id: "TR065",
    k: "Surabaya",
    cat: "Fashion",
    p: "Kaos",
    s: 105000,
    issue: "-",
  },
  {
    no: 66,
    id: "TR066",
    k: "Medan",
    cat: "Kuliner",
    p: "Nasi Uduk",
    s: 22000,
    issue: "-",
  },
  {
    no: 67,
    id: "TR067",
    k: "Jakarta",
    cat: "Elektronik",
    p: "Laptop",
    s: 14500000,
    issue: "-",
  },
  {
    no: 68,
    id: "TR068",
    k: "Bandung",
    cat: "Fashion",
    p: "Kemeja",
    s: 210000,
    issue: "-",
  },
  {
    no: 69,
    id: "TR069",
    k: "Surabaya",
    cat: "Kuliner",
    p: "Soto",
    s: 31000,
    issue: "-",
  },
  {
    no: 70,
    id: "TR070",
    k: "Medan",
    cat: "Elektronik",
    p: "Monitor",
    s: 2200000,
    issue: "-",
  },
  {
    no: 71,
    id: "TR071",
    k: "Jakarta",
    cat: "Fashion",
    p: "Tas",
    s: 270000,
    issue: "-",
  },
  {
    no: 72,
    id: "TR072",
    k: "Bandung",
    cat: "Kuliner",
    p: "Bakso",
    s: 48000,
    issue: "-",
  },
  {
    no: 73,
    id: "TR073",
    k: "Surabaya",
    cat: "Elektronik",
    p: "Mouse",
    s: 125000,
    issue: "-",
  },
  {
    no: 74,
    id: "TR074",
    k: "Medan",
    cat: "Fashion",
    p: "Jaket",
    s: 360000,
    issue: "-",
  },
  {
    no: 75,
    id: "TR075",
    k: "Jakarta",
    cat: "Kuliner",
    p: "Mie Ayam",
    s: 21000,
    issue: "-",
  },
  {
    no: 76,
    id: "TR076",
    k: "Bandung",
    cat: "Elektronik",
    p: "Headphone",
    s: 260000,
    issue: "-",
  },
  {
    no: 77,
    id: "TR077",
    k: "Surabaya",
    cat: "Fashion",
    p: "Sepatu",
    s: 620000,
    issue: "-",
  },
  {
    no: 78,
    id: "TR078",
    k: "Medan",
    cat: "Kuliner",
    p: "Seblak",
    s: 26000,
    issue: "-",
  },
  {
    no: 79,
    id: "TR079",
    k: "Jakarta",
    cat: "Elektronik",
    p: "Keyboard",
    s: 205000,
    issue: "-",
  },
  {
    no: 80,
    id: "TR080",
    k: "Bandung",
    cat: "Fashion",
    p: "Blouse",
    s: 175000,
    issue: "-",
  },
  {
    no: 81,
    id: "TR081",
    k: "Surabaya",
    cat: "Kuliner",
    p: "Nasi Goreng",
    s: 29000,
    issue: "-",
  },
  {
    no: 82,
    id: "TR082",
    k: "Medan",
    cat: "Elektronik",
    p: "Smartphone",
    s: 5100000,
    issue: "-",
  },
  {
    no: 83,
    id: "TR083",
    k: "Jakarta",
    cat: "Fashion",
    p: "Kaos",
    s: 115000,
    issue: "-",
  },
  {
    no: 84,
    id: "TR084",
    k: "Bandung",
    cat: "Kuliner",
    p: "Sate Ayam",
    s: 43000,
    issue: "-",
  },
  {
    no: 85,
    id: "TR085",
    k: "Surabaya",
    cat: "Elektronik",
    p: "Flashdisk",
    s: 98000,
    issue: "-",
  },
  {
    no: 86,
    id: "TR086",
    k: "Medan",
    cat: "Fashion",
    p: "Kemeja",
    s: 220000,
    issue: "-",
  },
  {
    no: 87,
    id: "TR087",
    k: "Jakarta",
    cat: "Kuliner",
    p: "Batagor",
    s: 31000,
    issue: "-",
  },
  {
    no: 88,
    id: "TR088",
    k: "Bandung",
    cat: "Elektronik",
    p: "Mouse",
    s: 135000,
    issue: "-",
  },
  {
    no: 89,
    id: "TR089",
    k: "Surabaya",
    cat: "Fashion",
    p: "Tas",
    s: 280000,
    issue: "-",
  },
  {
    no: 90,
    id: "TR090",
    k: "Medan",
    cat: "Kuliner",
    p: "Soto",
    s: 33000,
    issue: "-",
  },
  {
    no: 91,
    id: "TR091",
    k: "Jakarta",
    cat: "Elektronik",
    p: "Laptop",
    s: 15000000,
    issue: "-",
  },
  {
    no: 92,
    id: "TR092",
    k: "Bandung",
    cat: "Fashion",
    p: "Sandal",
    s: 88000,
    issue: "-",
  },
  {
    no: 93,
    id: "TR093",
    k: "Surabaya",
    cat: "Kuliner",
    p: "Mie Goreng",
    s: 24000,
    issue: "-",
  },
  {
    no: 94,
    id: "TR094",
    k: "Medan",
    cat: "Elektronik",
    p: "Keyboard",
    s: 215000,
    issue: "-",
  },
  {
    no: 95,
    id: "TR095",
    k: "Jakarta",
    cat: "Fashion",
    p: "Jaket",
    s: 390000,
    issue: "-",
  },
  {
    no: 96,
    id: "TR096",
    k: "Bandung",
    cat: "Kuliner",
    p: "Bakso",
    s: 52000,
    issue: "-",
  },
  {
    no: 97,
    id: "TR097",
    k: "Surabaya",
    cat: "Elektronik",
    p: "Monitor",
    s: 2050000,
    issue: "-",
  },
  {
    no: 98,
    id: "TR098",
    k: "Medan",
    cat: "Fashion",
    p: "Sepatu",
    s: 580000,
    issue: "-",
  },
  {
    no: 99,
    id: "TR099",
    k: "Jakarta",
    cat: "Kuliner",
    p: "Nasi Uduk",
    s: 21000,
    issue: "-",
  },
  {
    no: 100,
    id: "TR100",
    k: "Bandung",
    cat: "Elektronik",
    p: "Headset",
    s: 170000,
    issue: "-",
  },
];

// Unclean Raw Data dengan berbagai masalah
const uncleanedData = [
  {
    no: 1,
    id: "TR001",
    k: "Jakarta",
    cat: "Elektronik",
    p: "Laptop",
    s: 15000000,
    issue: "Duplikat Data",
  },
  {
    no: 2,
    id: "TR002",
    k: "Bandung",
    cat: "Fashion",
    p: "Kemeja",
    s: 250000,
    issue: "-",
  },
  {
    no: 3,
    id: "TR003",
    k: "Surabaya",
    cat: "Kuliner",
    p: "Bakso",
    s: 50000,
    issue: "-",
  },
  {
    no: 4,
    id: "TR001",
    k: "Jakarta",
    cat: "Elektronik",
    p: "Laptop",
    s: 15000000,
    issue: "Duplikat Data",
  },
  {
    no: 5,
    id: "TR004",
    k: "Jakarta",
    cat: "ELEKTRONIK",
    p: "Mouse",
    s: 150000,
    issue: "Naming Inconsistency",
  },
  {
    no: 6,
    id: "TR005",
    k: "Medan",
    cat: "Fashion",
    p: "Celana",
    s: 300000,
    issue: "-",
  },
  {
    no: 7,
    id: "TR006",
    k: "Bandung",
    cat: "Kuliner",
    p: "Seblak",
    s: 25000,
    issue: "-",
  },
  {
    no: 8,
    id: "TR007",
    k: "Surabaya",
    cat: "Elektronik",
    p: "Smartphone",
    s: 5000000,
    issue: "-",
  },
  {
    no: 9,
    id: "TR008",
    k: "Jakarta",
    cat: "Fashion",
    p: "Kaos",
    s: 100000,
    issue: "-",
  },
  {
    no: 10,
    id: "TR009",
    k: "Bandung",
    cat: "Elektronik",
    p: "Monitor",
    s: 2000000,
    issue: "-",
  },
];

let pivotFilters = { k: [], cat: [] };
let charts = [];
const fmt = (n) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);

function switchTab(t) {
  const btns = document.querySelectorAll(".tab-button");
  btns.forEach((b) => b.classList.remove("active", "text-slate-400"));
  document.getElementById(`tab-${t}`).classList.add("active");

  ["raw", "pivot", "presentation"].forEach((s) =>
    document.getElementById(`content-${s}`).classList.add("hidden"),
  );
  document.getElementById(`content-${t}`).classList.remove("hidden");

  if (t === "pivot") {
    renderPivotSlicers();
    const pf = processPivotFiltered();
    renderTbls(pf);
  }
}


function processPivotFiltered() {
  const cityP = {},
    catP = {},
    multiP = {};
  const cities = [...new Set(rawData.map((d) => d.k))].sort();
  const cats = [...new Set(rawData.map((d) => d.cat))].sort();
  let total = 0,
    count = 0;

  const filteredData = rawData.filter((d) => {
    const cityMatch =
      pivotFilters.k.length === 0 || pivotFilters.k.includes(d.k);
    const catMatch =
      pivotFilters.cat.length === 0 || pivotFilters.cat.includes(d.cat);
    return cityMatch && catMatch;
  });

  filteredData.forEach((d) => {
    total += d.s;
    count++;
    cityP[d.k] = (cityP[d.k] || 0) + d.s;
    catP[d.cat] = (catP[d.cat] || 0) + d.s;
    if (!multiP[d.k]) multiP[d.k] = {};
    multiP[d.k][d.cat] = (multiP[d.k][d.cat] || 0) + d.s;
  });

  // Only include cities/cats that have data (or all if no filter)
  const activeCities = pivotFilters.k.length > 0 ? pivotFilters.k.sort() : cities;
  const activeCats = pivotFilters.cat.length > 0 ? pivotFilters.cat.sort() : cats;

  return { cityP, catP, multiP, cities: activeCities, cats: activeCats, allCities: cities, allCats: cats, total, count, filteredData };
}

function renderPivotSlicers() {
  const cities = [...new Set(rawData.map((d) => d.k))].sort();
  const cats = [...new Set(rawData.map((d) => d.cat))].sort();

  const renderBtns = (containerId, type, items) => {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    items.forEach(val => {
      const btn = document.createElement('button');
      const isActive = pivotFilters[type].includes(val);
      btn.className = `pivot-slicer-btn${isActive ? ' active' : ''}`;
      btn.textContent = val;
      btn.onclick = () => togglePivotFilter(type, val);
      container.appendChild(btn);
    });
  };

  renderBtns('pivot-slicer-city', 'k', cities);
  renderBtns('pivot-slicer-cat', 'cat', cats);
  lucide.createIcons();
}

function togglePivotFilter(type, val) {
  const idx = pivotFilters[type].indexOf(val);
  if (idx > -1) pivotFilters[type].splice(idx, 1);
  else pivotFilters[type].push(val);
  renderPivotSlicers();
  const pf = processPivotFiltered();
  renderTbls(pf);
}

function resetPivotFilters() {
  pivotFilters.k = [];
  pivotFilters.cat = [];
  renderPivotSlicers();
  const pf = processPivotFiltered();
  renderTbls(pf);
}


function renderTbls(d) {
  const renderS = (id, obj) => {
    let h = `<table class="w-full text-sm"><thead><tr><th class="p-3 text-left excel-header">Label</th><th class="p-3 text-right excel-header">Total Penjualan</th></tr></thead><tbody>`;
    Object.entries(obj).forEach(
      ([k, v]) =>
        (h += `<tr class="hover:bg-slate-50 transition"><td class="p-4 border-b font-bold text-slate-700">${k}</td><td class="p-4 border-b text-right font-mono text-green-700 font-black">${fmt(v)}</td></tr>`),
    );
    h += `</tbody></table>`;
    document.getElementById(id).innerHTML = h;
  };
  renderS("pivot-city-tbl", d.cityP);
  renderS("pivot-cat-tbl", d.catP);

  let mh = `<table class="w-full text-[10px] border-collapse"><thead><tr class="bg-slate-900 text-white">
          <th class="p-4 border border-slate-700 text-left uppercase font-black">Wilayah \\ Sektor</th>${d.cats.map((c) => `<th class="p-4 border border-slate-700 text-right uppercase font-black">${c}</th>`).join("")}
          <th class="p-4 border border-slate-700 text-right bg-slate-800 uppercase font-black tracking-widest">Total Keseluruhan</th></tr></thead><tbody>`;
  d.cities.forEach((r) => {
    let rowT = 0;
    mh += `<tr class="hover:bg-slate-50 transition"><td class="p-4 border font-black text-slate-800 bg-slate-50/50">${r}</td>`;
    d.cats.forEach((c) => {
      const v = (d.multiP[r] && d.multiP[r][c]) || 0;
      rowT += v;
      mh += `<td class="p-4 border text-right font-mono text-slate-500">${fmt(v)}</td>`;
    });
    mh += `<td class="p-4 border text-right font-black bg-green-50 text-green-900">${fmt(rowT)}</td></tr>`;
  });
  mh += `</tbody></table>`;
  document.getElementById("pivot-multi-tbl").innerHTML = mh;

  // Render Proportion Tables
  renderProportionTables(d);
  // Render Product by Category Table
  renderProductByCategory(d);
  // Render pivot charts
  renderPivotCharts(d);
}

function renderProportionTables(d) {
  // Proportion by City
  let cityHtml = `<table class="w-full text-[11px] border-collapse"><thead><tr class="bg-blue-900 text-white">
    <th class="p-3 border border-slate-300 text-left uppercase font-black">Kota</th>
    <th class="p-3 border border-slate-300 text-right uppercase font-black">Total Penjualan (Rp)</th>
    <th class="p-3 border border-slate-300 text-right uppercase font-black">Proporsi (%)</th></tr></thead><tbody>`;
  let totalCity = d.total;
  d.cities.forEach((city) => {
    const val = d.cityP[city];
    const pct = totalCity > 0 ? ((val / totalCity) * 100).toFixed(2) : 0;
    cityHtml += `<tr class="hover:bg-blue-50 transition"><td class="p-3 border border-slate-200 font-bold text-slate-700">${city}</td><td class="p-3 border border-slate-200 text-right font-mono text-slate-800">${fmt(val)}</td><td class="p-3 border border-slate-200 text-right font-bold text-blue-700">${pct}%</td></tr>`;
  });
  cityHtml += `<tr class="bg-blue-900 text-white"><td class="p-3 border border-slate-300 font-black">TOTAL</td><td class="p-3 border border-slate-300 text-right font-mono font-black">${fmt(totalCity)}</td><td class="p-3 border border-slate-300 text-right font-black">100.00%</td></tr></tbody></table>`;
  document.getElementById("pivot-proportion-city-tbl").innerHTML =
    cityHtml;

  // Proportion by Category
  let catHtml = `<table class="w-full text-[11px] border-collapse"><thead><tr class="bg-orange-900 text-white">
    <th class="p-3 border border-slate-300 text-left uppercase font-black">Kategori</th>
    <th class="p-3 border border-slate-300 text-right uppercase font-black">Total Penjualan (Rp)</th>
    <th class="p-3 border border-slate-300 text-right uppercase font-black">Proporsi (%)</th></tr></thead><tbody>`;
  let totalCat = d.total;
  d.cats.forEach((cat) => {
    const val = d.catP[cat];
    const pct = totalCat > 0 ? ((val / totalCat) * 100).toFixed(2) : 0;
    catHtml += `<tr class="hover:bg-orange-50 transition"><td class="p-3 border border-slate-200 font-bold text-slate-700">${cat}</td><td class="p-3 border border-slate-200 text-right font-mono text-slate-800">${fmt(val)}</td><td class="p-3 border border-slate-200 text-right font-bold text-orange-700">${pct}%</td></tr>`;
  });
  catHtml += `<tr class="bg-orange-900 text-white"><td class="p-3 border border-slate-300 font-black">TOTAL</td><td class="p-3 border border-slate-300 text-right font-mono font-black">${fmt(totalCat)}</td><td class="p-3 border border-slate-300 text-right font-black">100.00%</td></tr></tbody></table>`;
  document.getElementById("pivot-proportion-cat-tbl").innerHTML = catHtml;
}

function renderProductByCategory(d) {
  // Build product data grouped by category using filtered data
  const sourceData = d.filteredData || rawData;
  const prodCatData = {};
  sourceData.forEach((item) => {
    if (!prodCatData[item.cat]) prodCatData[item.cat] = {};
    prodCatData[item.cat][item.p] =
      (prodCatData[item.cat][item.p] || 0) + item.s;
  });

  // Create table
  let tblHtml = `<table class="w-full text-[10px] border-collapse"><thead><tr class="bg-slate-900 text-white">
    <th class="p-2 border border-slate-300 text-left uppercase font-black">Kategori</th>
    <th class="p-2 border border-slate-300 text-left uppercase font-black">Produk</th>
    <th class="p-2 border border-slate-300 text-right uppercase font-black">Total Penjualan (Rp)</th>
    <th class="p-2 border border-slate-300 text-right uppercase font-black">% dalam Kategori</th></tr></thead><tbody>`;

  const catColors = {
    Elektronik: "bg-emerald-50",
    Fashion: "bg-indigo-50",
    Kuliner: "bg-amber-50",
  };
  let grandTotal = d.total;

  Object.keys(prodCatData)
    .sort()
    .forEach((cat) => {
      const products = prodCatData[cat];
      const catTotal = Object.values(products).reduce((a, b) => a + b, 0);
      let isFirst = true;
      Object.entries(products)
        .sort((a, b) => b[1] - a[1])
        .forEach(([prod, val]) => {
          const pct =
            catTotal > 0 ? ((val / catTotal) * 100).toFixed(2) : 0;
          if (isFirst) {
            tblHtml += `<tr class="${catColors[cat] || "bg-slate-50"}"><td class="p-2 border border-slate-200 font-bold text-slate-900">${cat}</td><td class="p-2 border border-slate-200 text-slate-700">${prod}</td><td class="p-2 border border-slate-200 text-right font-mono">${fmt(val)}</td><td class="p-2 border border-slate-200 text-right font-bold">${pct}%</td></tr>`;
            isFirst = false;
          } else {
            tblHtml += `<tr class="${catColors[cat] || "bg-slate-50"}"><td class="p-2 border border-slate-200"></td><td class="p-2 border border-slate-200 text-slate-700">${prod}</td><td class="p-2 border border-slate-200 text-right font-mono">${fmt(val)}</td><td class="p-2 border border-slate-200 text-right font-bold">${pct}%</td></tr>`;
          }
        });
    });

  tblHtml += `<tr class="bg-slate-900 text-white"><td class="p-2 border border-slate-300 font-black" colspan="2">TOTAL</td><td class="p-2 border border-slate-300 text-right font-mono font-black">${fmt(grandTotal)}</td><td class="p-2 border border-slate-300 text-right font-black">100.00%</td></tr></tbody></table>`;
  document.getElementById("pivot-product-cat-tbl").innerHTML = tblHtml;

  // Render Top 10 Products Chart
  renderTop10ProductsChart(prodCatData, grandTotal);
}

// ---- Pivot Tab Inline Charts ----
let pivotCharts = [];
function renderPivotCharts(d) {
  pivotCharts.forEach(c => c.destroy());
  pivotCharts = [];

  const pivotColors = {
    cities: ['#107c41','#3b82f6','#f59e0b','#ef4444','#8b5cf6','#ec4899'],
    cats: ['#107c41','#6366f1','#f59e0b'],
  };

  // 1. Region Analysis – horizontal bar
  const ctxCity = document.getElementById('pivot-chart-city').getContext('2d');
  const cityLabels = Object.keys(d.cityP);
  const cityVals = Object.values(d.cityP);
  pivotCharts.push(new Chart(ctxCity, {
    type: 'bar',
    data: {
      labels: cityLabels,
      datasets: [{
        label: 'Pendapatan',
        data: cityVals,
        backgroundColor: cityLabels.map((_, i) => pivotColors.cities[i % pivotColors.cities.length]),
        borderRadius: 10,
        barThickness: 28,
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { border: { display: false }, grid: { color: '#f1f5f9' }, ticks: { callback: v => 'Rp' + (v / 1000000).toFixed(0) + 'Jt' } },
        y: { border: { display: false }, grid: { display: false }, ticks: { font: { weight: '700' } } },
      },
    }
  }));

  // 2. Sector Analysis – doughnut
  const ctxCat = document.getElementById('pivot-chart-cat').getContext('2d');
  pivotCharts.push(new Chart(ctxCat, {
    type: 'doughnut',
    data: {
      labels: Object.keys(d.catP),
      datasets: [{
        data: Object.values(d.catP),
        backgroundColor: pivotColors.cats,
        borderWidth: 4,
        borderColor: '#ffffff',
        hoverOffset: 16,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '70%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: { usePointStyle: true, padding: 20, font: { weight: '700', size: 11 } },
        },
        tooltip: {
          callbacks: { label: ctx => ctx.label + ': ' + fmt(ctx.raw) }
        }
      },
    }
  }));

  // 3. Cross-Pivot – stacked bar
  const ctxMulti = document.getElementById('pivot-chart-multi').getContext('2d');
  pivotCharts.push(new Chart(ctxMulti, {
    type: 'bar',
    data: {
      labels: d.cities,
      datasets: d.cats.map((c, i) => ({
        label: c,
        data: d.cities.map(ct => (d.multiP[ct] && d.multiP[ct][c]) || 0),
        backgroundColor: pivotColors.cats[i],
        borderRadius: 6,
        barThickness: 44,
      }))
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { stacked: true, grid: { display: false }, border: { display: false }, ticks: { font: { weight: '700' } } },
        y: { stacked: true, border: { display: false }, grid: { color: '#f1f5f9' }, ticks: { callback: v => 'Rp' + (v / 1000000).toFixed(0) + 'Jt' } },
      },
      plugins: {
        legend: {
          position: 'bottom',
          labels: { usePointStyle: true, padding: 20, font: { weight: '700', size: 11 } },
        },
        tooltip: {
          callbacks: { label: ctx => ctx.dataset.label + ': ' + fmt(ctx.raw) }
        }
      },
    }
  }));

  // 4. Proportion City – pie chart
  const ctxPropCity = document.getElementById('pivot-chart-prop-city').getContext('2d');
  pivotCharts.push(new Chart(ctxPropCity, {
    type: 'pie',
    data: {
      labels: d.cities,
      datasets: [{
        data: d.cities.map(c => d.cityP[c] || 0),
        backgroundColor: d.cities.map((_, i) => pivotColors.cities[i % pivotColors.cities.length]),
        borderWidth: 3,
        borderColor: '#ffffff',
        hoverOffset: 12,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { usePointStyle: true, padding: 16, font: { weight: '600', size: 10 } },
        },
        tooltip: {
          callbacks: {
            label: ctx => {
              const total = ctx.dataset.data.reduce((a,b) => a+b, 0);
              const pct = total > 0 ? ((ctx.raw / total) * 100).toFixed(1) : 0;
              return ctx.label + ': ' + fmt(ctx.raw) + ' (' + pct + '%)';
            }
          }
        }
      },
    }
  }));

  // 5. Proportion Category – pie chart
  const ctxPropCat = document.getElementById('pivot-chart-prop-cat').getContext('2d');
  pivotCharts.push(new Chart(ctxPropCat, {
    type: 'pie',
    data: {
      labels: d.cats,
      datasets: [{
        data: d.cats.map(c => d.catP[c] || 0),
        backgroundColor: pivotColors.cats,
        borderWidth: 3,
        borderColor: '#ffffff',
        hoverOffset: 12,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { usePointStyle: true, padding: 16, font: { weight: '600', size: 10 } },
        },
        tooltip: {
          callbacks: {
            label: ctx => {
              const total = ctx.dataset.data.reduce((a,b) => a+b, 0);
              const pct = total > 0 ? ((ctx.raw / total) * 100).toFixed(1) : 0;
              return ctx.label + ': ' + fmt(ctx.raw) + ' (' + pct + '%)';
            }
          }
        }
      },
    }
  }));
}

function renderTop10ProductsChart(prodCatData, total) {
  // Flatten and sort products by sales
  const allProducts = [];
  Object.values(prodCatData).forEach((products) => {
    Object.entries(products).forEach(([name, val]) =>
      allProducts.push({ name, val }),
    );
  });
  allProducts.sort((a, b) => b.val - a.val);
  const top10 = allProducts.slice(0, 10);

  const ctx = document
    .getElementById("chart-top-products")
    .getContext("2d");
  if (
    charts.length > 0 &&
    charts[charts.length - 1].id === "top-products-chart"
  ) {
    charts.pop().destroy();
  }

  const chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: top10.map((p) => p.name),
      datasets: [
        {
          label: "Penjualan",
          data: top10.map((p) => p.val),
          backgroundColor: "#107c41",
          borderRadius: 8,
        },
      ],
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: {
          border: { display: false },
          grid: { color: "#f1f5f9" },
          ticks: { callback: (v) => v / 1000000 + "Jt" },
        },
        y: { border: { display: false }, grid: { display: false } },
      },
    },
  });
  chart.id = "top-products-chart";
  charts.push(chart);
}




function renderUncleanedTable() {
  const tbody = document.getElementById("uncleaned-table-body");
  tbody.innerHTML = "";
  uncleanedData.forEach((row) => {
    const isIssue = row.issue !== "-";
    const issueColor =
      row.issue === "Duplikat Data"
        ? "bg-red-100 text-red-700"
        : "bg-yellow-100 text-yellow-700";
    const rowClass = isIssue
      ? "bg-red-50/50 border-red-100 hover:bg-red-100/50"
      : "hover:bg-slate-50/50";

    tbody.innerHTML += `<tr class="transition border-b border-slate-50 ${rowClass}">
      <td class="excel-cell text-center font-bold text-slate-300 text-[10px]">${row.no}</td>
      <td class="excel-cell font-mono text-xs font-semibold text-slate-400">${row.id}</td>
      <td class="excel-cell font-black text-slate-800">${row.k}</td>
      <td class="excel-cell"><span class="px-2 py-1 rounded-lg text-[9px] font-black tracking-tighter ${
        row.cat === "Elektronik" || row.cat === "ELEKTRONIK"
          ? "bg-emerald-100 text-emerald-700"
          : row.cat === "Fashion"
            ? "bg-indigo-100 text-indigo-700"
            : "bg-amber-100 text-amber-700"
      }">${row.cat}</span></td>
      <td class="excel-cell text-slate-500 font-medium">${row.p}</td>
      <td class="excel-cell text-right font-black text-slate-900">${fmt(row.s)}</td>
      <td class="excel-cell text-center"><span class="px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-tighter ${isIssue ? issueColor : "bg-green-100 text-green-700"}">${row.issue}</span></td>
    </tr>`;
  });
  lucide.createIcons();
}

function init() {
  const b = document.getElementById("raw-table-body");
  rawData.forEach(
    (r, i) =>
      (b.innerHTML += `<tr class="hover:bg-slate-50/50 transition border-b border-slate-50">
          <td class="excel-cell text-center font-bold text-slate-300 text-[10px]">${i + 1}</td>
          <td class="excel-cell font-mono text-xs font-semibold text-slate-400">${r.id}</td>
          <td class="excel-cell font-black text-slate-800">${r.k}</td>
          <td class="excel-cell"><span class="px-2 py-1 rounded-lg text-[9px] font-black uppercase tracking-tighter ${r.cat === "Elektronik" ? "bg-emerald-100 text-emerald-700" : r.cat === "Fashion" ? "bg-indigo-100 text-indigo-700" : "bg-amber-100 text-amber-700"}">${r.cat}</span></td>
          <td class="excel-cell text-slate-500 font-medium">${r.p}</td>
          <td class="excel-cell text-right font-black text-slate-900">${fmt(r.s)}</td></tr>`),
  );
  lucide.createIcons();
  
  // Render Data Mentah table
  renderUncleanedTable();
  
  switchTab("raw");

}

// Slide Presentasi Logic
let currentSlideIdx = 1;
const totalSlides = 7;

function updateSlide() {
    const slideImg = document.getElementById('presentation-slide');
    const slideNum = document.getElementById('current-slide');
    if (slideImg && slideNum) {
        slideImg.style.opacity = 0;
        setTimeout(() => {
            slideImg.src = `slides/image${currentSlideIdx}.png`;
            slideImg.style.opacity = 1;
        }, 150);
        slideNum.textContent = currentSlideIdx;
    }
}

function prevSlide() {
    if (currentSlideIdx > 1) {
        currentSlideIdx--;
        updateSlide();
    }
}

function nextSlide() {
    if (currentSlideIdx < totalSlides) {
        currentSlideIdx++;
        updateSlide();
    }
}

// Modal Team Logic
function openTeamModal() {
    const modal = document.getElementById('team-modal');
    const content = document.getElementById('team-modal-content');
    modal.classList.remove('invisible', 'opacity-0', 'pointer-events-none');
    content.classList.remove('scale-95', 'opacity-0');
    content.classList.add('scale-100', 'opacity-100');
}

function closeTeamModal() {
    const modal = document.getElementById('team-modal');
    const content = document.getElementById('team-modal-content');
    modal.classList.add('invisible', 'opacity-0', 'pointer-events-none');
    content.classList.remove('scale-100', 'opacity-100');
    content.classList.add('scale-95', 'opacity-0');
}

window.onload = init;
