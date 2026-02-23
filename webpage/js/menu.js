document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     MENU DATA (DATABASE STYLE)
  ========================== */

  const menuData = [

    // COLD DRINKS
    {
      name: "Iced Americano",
      category: "Cold-Coffee",
      type: "drinks",
      price: 50,
      image: "../../assets/prod_images/drinks/americano.png",
      featured: true,
      sizePrices: [
        { size: "16oz", price: 50 },
        { size: "22oz", price: 60 }
      ]
    },//d
    {
      name: "Iced Latte",
      category: "Cold-Coffee",
      type: "drinks",
      price: 50,
      image: "../../assets/prod_images/drinks/latte.png",
      sizePrices: [
        { size: "16oz", price: 50 },
        { size: "22oz", price: 60 }
      ]
    },//d
    {
      name: "Iced Mocha",
      category: "Cold-Coffee",
      type: "drinks",
      price: 60,
      image: "../../assets/prod_images/drinks/mocha.png",
      sizePrices: [
        { size: "16oz", price: 60 },
        { size: "22oz", price: 70 }
      ]
    },//d
    {
      name: "Iced Caramel Macchiato",
      category: "Cold-Coffee",
      type: "drinks",
      price: 60,
      image: "../../assets/prod_images/drinks/macchiato.png",
      sizePrices: [
        { size: "16oz", price: 60 },
        { size: "22oz", price: 70 }
      ]
    },//d
    {
      name: "Vanilla Latte",
      category: "Cold-Coffee",
      type: "drinks",
      price: 60,
      image: "../../assets/prod_images/drinks/vanilla.png",
      sizePrices: [
        { size: "16oz", price: 60 },
        { size: "22oz", price: 70 }
      ]
    },//d
    {
      name: "Caramel Latte",
      category: "Cold-Coffee",
      type: "drinks",
      price: 60,
      image: "../../assets/prod_images/drinks/caramel.png",
      sizePrices: [
        { size: "16oz", price: 60 },
        { size: "22oz", price: 70 }
      ]
    },//d
    {
      name: "Salted Caramel Latte",
      category: "Cold-Coffee",
      type: "drinks",
      price: 60,
      image: "../../assets/prod_images/drinks/salted.png",
      sizePrices: [
        { size: "16oz", price: 60 },
        { size: "22oz", price: 70 }
      ]
    },//d
    {
      name: "Spanish Latte",
      category: "Cold-Coffee",
      type: "drinks",
      price: 60,
      image: "../../assets/prod_images/drinks/spanish.png",
      sizePrices: [
        { size: "16oz", price: 60 },
        { size: "22oz", price: 70 }
      ]
    },//d
    {
      name: "Hazlenut Latte",
      category: "Cold-Coffee",
      type: "drinks",
      price: 60,
      image: "../../assets/prod_images/drinks/hazlenut.png",
      sizePrices: [
        { size: "16oz", price: 60 },
        { size: "22oz", price: 70 }
      ]
    },//d


    // HOT DRINKS
    { name: "Hot Latte", category: "Hot-Drinks", type: "drinks", price: 60, image: "../../assets/prod_images/drinks/hot-latte.png", featured: true },//d
    { name: "Caramel Macchiato", category: "Hot-Drinks", type: "drinks", price: 60, image: "../../assets/prod_images/drinks/hot-caramel.png" },//d



    // FRUITY SODA
    {
      name: "Blueberry Soda",
      category: "Fruity-Soda",
      type: "drinks",
      price: 30,
      image: "../../assets/prod_images/drinks/blueberry.png",
      sizePrices: [
        { size: "12oz", price: 30 },
        { size: "16oz", price: 40 },
        { size: "22oz", price: 50 }
      ]
    },
    {
      name: "Blue Lemonade",
      category: "Fruity-Soda",
      type: "drinks",
      price: 30,
      image: "../../assets/prod_images/drinks/lemonade.png",
      sizePrices: [
        { size: "12oz", price: 30 },
        { size: "16oz", price: 40 },
        { size: "22oz", price: 50 }
      ]
    },
    {
      name: "Strawberry",
      category: "Fruity-Soda",
      type: "drinks",
      price: 30,
      image: "../../assets/prod_images/drinks/strawberry.png",
      sizePrices: [
        { size: "12oz", price: 30 },
        { size: "16oz", price: 40 },
        { size: "22oz", price: 50 }
      ]
    },
    {
      name: "Green Apple",
      category: "Fruity-Soda",
      type: "drinks",
      price: 30,
      image: "../../assets/prod_images/drinks/green.png",
      featured: true,
      sizePrices: [
        { size: "12oz", price: 30 },
        { size: "16oz", price: 40 },
        { size: "22oz", price: 50 }
      ]
    },
    {
      name: "Lemon",
      category: "Fruity-Soda",
      type: "drinks",
      price: 30,
      image: "../../assets/prod_images/drinks/lemon.png",
      sizePrices: [
        { size: "12oz", price: 30 },
        { size: "16oz", price: 40 },
        { size: "22oz", price: 50 }
      ]
    },
    {
      name: "Lychee",
      category: "Fruity-Soda",
      type: "drinks",
      price: 30,
      image: "../../assets/prod_images/drinks/lychee.png",
      sizePrices: [
        { size: "12oz", price: 30 },
        { size: "16oz", price: 40 },
        { size: "22oz", price: 50 }
      ]
    },


    // NON COFFEE
    {
      name: "Ube Dream",
      category: "Non-Coffee",
      type: "drinks",
      price: 60,
      image: "../../assets/prod_images/drinks/Ube.png",
      sizePrices: [
        { size: "16oz", price: 60 },
        { size: "22oz", price: 70 }
      ]
    },//d
    {
      name: "Strawberry Milk",
      category: "Non-Coffee",
      type: "drinks",
      price: 60,
      image: "../../assets/prod_images/drinks/milk.png",
      sizePrices: [
        { size: "16oz", price: 60 },
        { size: "22oz", price: 70 }
      ]
    },//d
    {
      name: "Matcha Latte",
      category: "Non-Coffee",
      type: "drinks",
      price: 60,
      image: "../../assets/prod_images/drinks/matcha.png",
      featured: true,
      sizePrices: [
        { size: "16oz", price: 60 },
        { size: "22oz", price: 70 }
      ]
    },//d
    {
      name: "Dark Chocolate",
      category: "Non-Coffee",
      type: "drinks",
      price: 60,
      image: "../../assets/prod_images/drinks/dark-chocolate.png",
      sizePrices: [
        { size: "16oz", price: 60 },
        { size: "22oz", price: 70 }
      ]
    },//d
    {
      name: "Ube Cream Cheese",
      category: "Non-Coffee",
      type: "drinks",
      price: 70,
      image: "../../assets/prod_images/drinks/ube-cheese.png",
      featured: true,
      sizePrices: [
        { size: "16oz", price: 70 },
        { size: "22oz", price: 80 }
      ]
    },//d
    {
      name: "Strawberry Oreo",
      category: "Non-Coffee",
      type: "drinks",
      price: 70,
      image: "../../assets/prod_images/drinks/strawberry-oreo.png",
      sizePrices: [
        { size: "16oz", price: 70 },
        { size: "22oz", price: 80 }
      ]
    },//d
       {
      name: "Strawberry Matcha",
      category: "Non-Coffee",
      type: "drinks",
      price: 70,
      image: "../../assets/prod_images/drinks/strawberry-matcha.png",
      sizePrices: [
        { size: "16oz", price: 70 },
        { size: "22oz", price: 80 }
      ]
    },//d
 {
      name: "Mango Cheesecake",
      category: "Non-Coffee",
      type: "drinks",
      price: 70,
      image: "../../assets/prod_images/drinks/cheesecake.png",
      sizePrices: [
        { size: "16oz", price: 70 },
        { size: "22oz", price: 80 }
      ]
    },//d



    // RICEMEAL
    { name: "PorkSilog", category: "Rice-Meals", type: "foods", price: 105, image: "../../assets/prod_images/foods/porksilog.png", featured: true },
    { name: "TapSilog", category: "Rice-Meals", type: "foods", price: 110, image: "../../assets/prod_images/foods/tapsilog.png", featured: true },
        { name: "Lechelog", category: "Rice-Meals", type: "foods", price: 110, image: "../../assets/prod_images/foods/lechelog.png" },
       { name: "ChixSilog", category: "Rice-Meals", type: "foods", price: 110, image: "../../assets/prod_images/foods/chixsilog.png" },
     { name: "BangSilog", category: "Rice-Meals", type: "foods", price: 105, image: "../../assets/prod_images/foods/bangsilog.png" },
    { name: "SisigSilog", category: "Rice-Meals", type: "foods", price: 105, image: "../../assets/prod_images/foods/sisigsilog.png" },
  { name: "ShangSilog", category: "Rice-Meals", type: "foods", price: 100, image: "../../assets/prod_images/foods/shangsilog.png" },
  { name: "HungSilog", category: "Rice-Meals", type: "foods", price: 100, image: "../../assets/prod_images/foods/hungsilog.png", featured: true  },
  { name: "HotSilog", category: "Rice-Meals", type: "foods", price: 75, image: "../../assets/prod_images/foods/hotsilog.png" },


// Chicken Wings

    {
      name: "Chicken Wings (4pcs)",
      category: "Chicken-Wings",
      type: "foods",
      price: 130,
      image: "../../assets/prod_images/foods/wings.png",
      flavors: ["BBQ", "Terriyaki", "Sweet Chili", "Honey Butter", "Yangnyeom", "Buffalo"],
       options: [
        "Flavored Chicken Wings (4pcs) - 130 (with plain rice)",
        "6 pcs - 150 | with 2 rice - 175",
        "10 pcs - 220 | with 2 rice - 255",
        "16 pcs - 350"
      ]
    },

     {
      name: "Flavored Chicken Poppers",
      category: "Chicken-Wings",
      type: "foods",
      price: 130,
      image: "../../assets/prod_images/foods/poppers.png",
      flavors: ["BBQ", "Terriyaki", "Sweet Chili", "Honey Butter", "Yangnyeom", "Buffalo"],
      options: [
        "Flavored Chicken Poppers - 95 (with plain rice)",
        "6 pcs - 150 | with 2 rice - 175",
        "10 pcs - 220 | with 2 rice - 255",
        "16 pcs - 350"
      ],
      featured: true
    },



    { name: "Sisig Double", category: "Shareable", type: "foods", price: 130, image: "../../assets/prod_images/foods/double.png" },
 { name: "Shanghai", category: "Shareable", type: "foods", price: 160, image: "../../assets/prod_images/foods/shanghai.png" },

    // Burgers
    { name: "Chicken Burger", category: "Burgers", type: "foods", price: 99, image: "../../assets/prod_images/foods/Burger.png" },//d
    { name: "Chicken Burger With Fries", category: "Burgers", type: "foods", price: 120, image: "../../assets/prod_images/foods/burger2.png", featured: true },//d

    //snacks
    { name: "Nachos Overload", category: "Snacks", type: "foods", price: 100, image: "../../assets/prod_images/foods/Nachos.png", featured: true },//d
    { name: "Regular Fries", category: "Snacks", type: "foods", price: 60, image: "../../assets/prod_images/foods/Reg-fries.png" },//d
    { name: "Cheesy Fries", category: "Snacks", type: "foods", price: 80, image: "../../assets/prod_images/foods/C-fries.png" },//d
    {
      name: "Chix & Fries",
      category: "Snacks",
      type: "foods",
      price: 135,
      image: "../../assets/prod_images/foods/Chix-fries.png",
      flavors: ["BBQ", "Terriyaki", "Sweet Chili", "Garlic Mayo", "Honey Butter", "Yangnyeom", "Buffalo"]
    }//d

  ];


  const overviewCategories = [
    "Featured-Drinks", "Cold-Coffee", "Hot-Drinks", "Fruity-Soda", "Non-Coffee",
    "Featured-Foods", "Rice-Meals", "Chicken-Wings", "Shareable", "Burgers", "Snacks"
  ];

  const allItemsImages = {
    "Featured-Drinks": "../../assets/overview/featured-drinks-custom.png", //d
    "Cold-Coffee": "../../assets/overview/cold-coffee-custom.png", //d
    "Hot-Drinks": "../../assets/overview/hot-drinks-custom.png", //d
    "Fruity-Soda": "../../assets/overview/fruity-soda-custom.png",  //d
    "Non-Coffee": "../../assets/overview/non-coffee-custom.png",//d
    "Featured-Foods": "../../assets/overview/featured-foods-custom.png",//d
    "Rice-Meals": "../../assets/overview/rice-meals-custom.png",//d
    "Chicken-Wings": "../../assets/overview/chicken-wings-custom.png",//d
    "Shareable": "../../assets/overview/shareable-custom.png",//d
    "Burgers": "../../assets/overview/burgers-custom.png",//d
    "Snacks": "../../assets/overview/snacks-custom.png"
  };
  /* =========================
     DOM REFERENCES
  ========================== */

  const drinksOverview = document.getElementById("drinksOverview");
  const foodsOverview = document.getElementById("foodsOverview");
  const detailsContainer = document.getElementById("menuDetails");

  const filterButtons = document.querySelectorAll(".filter-btn");
  const sections = document.querySelectorAll("[data-section]");
  const breadcrumb = document.getElementById("breadcrumb");
  const breadcrumbHome = document.getElementById("breadcrumb-home");
  const breadcrumbCategory = document.getElementById("breadcrumb-category");

  const formatter = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP"
  });

  /* =========================
     RENDER OVERVIEW CARDS
  ========================== */

  overviewCategories.forEach(cat => {

    const type =
      cat.includes("Foods") ||
        ["Rice-Meals", "Chicken-Wings", "Shareable", "Burgers", "Snacks"].includes(cat)
        ? "foods"
        : "drinks";

    const container = type === "foods" ? foodsOverview : drinksOverview;

    const card = document.createElement("div");
    card.className = "menu-item clickable no-modal";
    card.dataset.filterTrigger = cat;

    card.innerHTML = `
<img src="${allItemsImages[cat]}" alt="${cat}" loading="lazy">
  <span class="label">${cat.replace(/-/g, " ")}</span>
`;

    container.appendChild(card);
  });

  /* =========================
     RENDER DETAIL SECTIONS
  ========================== */

  const uniqueCategories = [...new Set(menuData.map(item => item.category))];
  uniqueCategories.push("Featured-Drinks");
  uniqueCategories.push("Featured-Foods");

  uniqueCategories.forEach(category => {

    const heading = document.createElement("h3");
    heading.className = "category-heading hidden";
    heading.dataset.category = category;
    heading.textContent = category.replace(/-/g, " ");

    const grid = document.createElement("div");
    grid.className = "grid-container hidden";
    grid.dataset.category = category;

    let filteredItems = [];

    if (category === "Featured-Drinks") {
      filteredItems = menuData.filter(item => item.featured && item.type === "drinks");
    }
    else if (category === "Featured-Foods") {
      filteredItems = menuData.filter(item => item.featured && item.type === "foods");
    }
    else {
      filteredItems = menuData.filter(item => item.category === category);
    }

    filteredItems.forEach(item => {

      const card = document.createElement("div");
      card.className = "menu-item";
      card.dataset.price = item.price;

      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <span class="label">${item.name}</span>
      `;

      grid.appendChild(card);
    });

    detailsContainer.appendChild(heading);
    detailsContainer.appendChild(grid);
  });

  /* =========================
     FILTER SYSTEM
  ========================== */

  function filterMenu(category) {

    filterButtons.forEach(b => b.classList.remove("active"));
    document.querySelector(`[data-filter="${category}"]`)?.classList.add("active");

    if (category === "all") {
      sections.forEach(el => el.classList.remove("hidden"));
      document.querySelectorAll("[data-category]").forEach(el => el.classList.add("hidden"));
      breadcrumb.classList.add("hidden");
      return;
    }

    sections.forEach(el => el.classList.add("hidden"));
    document.querySelectorAll("[data-category]").forEach(el => el.classList.add("hidden"));

    document.querySelectorAll(`[data-category="${category}"]`)
      .forEach(el => el.classList.remove("hidden"));

    breadcrumbCategory.textContent = category.replace(/-/g, " ");
    breadcrumb.classList.remove("hidden");
  }

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterMenu(btn.dataset.filter);
    });
  });

  document.addEventListener("click", e => {
    const trigger = e.target.closest("[data-filter-trigger]");
    if (trigger) filterMenu(trigger.dataset.filterTrigger);
  });

  breadcrumbHome.addEventListener("click", e => {
    e.preventDefault();
    filterMenu("all");
  });

  /* =========================
     MODAL SYSTEM
  ========================== */

  document.addEventListener("click", e => {

    const item = e.target.closest(".menu-item");
    if (!item || item.classList.contains("no-modal")) return;

    const name = item.querySelector(".label").textContent;
    const img = item.querySelector("img").src;
    const price = Number(item.dataset.price);
    const selectedItem = menuData.find(menuItem => menuItem.name === name);

    const extraSections = [];

    if (selectedItem?.sizePrices?.length) {
      const sizeRows = selectedItem.sizePrices
        .map(s => `<li><span>${s.size}</span><strong>${formatter.format(s.price)}</strong></li>`)
        .join("");

      extraSections.push(`
        <div class="modal-section">
          <h4 class="modal-section-title">Sizes</h4>
          <ul class="modal-list modal-size-list">${sizeRows}</ul>
        </div>
      `);
    }

    if (selectedItem?.flavors?.length) {
      const flavors = selectedItem.flavors.map(flavor => `<li>${flavor}</li>`).join("");
      extraSections.push(`
        <div class="modal-section">
          <h4 class="modal-section-title">Available Flavors</h4>
          <ul class="modal-list">${flavors}</ul>
        </div>
      `);
    }

    if (selectedItem?.options?.length) {
      const options = selectedItem.options.map(option => `<li>${option}</li>`).join("");
      extraSections.push(`
        <div class="modal-section">
          <h4 class="modal-section-title">Options</h4>
          <ul class="modal-list">${options}</ul>
        </div>
      `);
    }
    const modal = document.createElement("div");
    modal.className = "modal show";

    modal.innerHTML = `
      <div class="modal-content">
        <button class="close-btn">&times;</button>
        <div class="modal-image-container">
          <img class="modal-image" src="${img}" alt="${name}">
        </div>
        <div class="modal-body">
          <h2 class="modal-title">${name}</h2>
          <p class="modal-price">${formatter.format(price)}</p>
          ${extraSections.join("")}
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = "hidden";

    modal.querySelector(".close-btn").onclick = () => {
      modal.remove();
      document.body.style.overflow = "";
    };

    modal.onclick = e => {
      if (e.target === modal) {
        modal.remove();
        document.body.style.overflow = "";
      }
    };
  });

  /* =========================
     INIT
  ========================== */

  filterMenu("all");

});




