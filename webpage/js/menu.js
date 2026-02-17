document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     MENU DATA (DATABASE STYLE)
  ========================== */

  const menuData = [

    // DRINKS
    { name: "Iced Americano", category: "Cold-Coffee", type: "drinks", price: 120, image: "/PICTURES/drinks/iced-americano.jpg", featured: true },
    { name: "Iced Latte", category: "Cold-Coffee", type: "drinks", price: 140, image: "/PICTURES/drinks/iced-latte.jpg" },
    { name: "Iced Mocha", category: "Cold-Coffee", type: "drinks", price: 150, image: "/PICTURES/drinks/iced-mocha.jpg" },
    { name: "Hot Latte", category: "Hot-Drinks", type: "drinks", price: 130, image: "/PICTURES/drinks/hot-latte.jpg" },
    { name: "Caramel Macchiato", category: "Hot-Drinks", type: "drinks", price: 160, image: "/PICTURES/drinks/caramel-macchiato.jpg" },
    { name: "Blueberry Soda", category: "Fruity-Soda", type: "drinks", price: 120, image: "/PICTURES/drinks/blueberry-soda.jpg" },
    { name: "Ube Dream", category: "Non-Coffee", type: "drinks", price: 180, image: "../../assets/prod_images/drinks/Ube.png", featured: true },

    // FOODS
    { name: "PorkSilog", category: "Rice-Meals", type: "foods", price: 120, image: "/picture/PorkSilog.png", featured: true },
    { name: "TapSilog", category: "Rice-Meals", type: "foods", price: 130, image: "/picture/Tapsilog.png" },
    { name: "Chicken Wings (4pcs)", category: "Chicken-Wings", type: "foods", price: 220, image: "/picture/Chicken Wings.png" },
    { name: "Sisig Double", category: "Shareable", type: "foods", price: 350, image: "/PICTURES/foods/sisig-double.jpg" },
    { name: "Chicken Burger", category: "Burgers", type: "foods", price: 150, image: "../../assets/prod_images/foods/Burger.png" },
    { name: "Nachos Overload", category: "Snacks", type: "foods", price: 180, image: "/picture/Nachos Overload.png", featured: true }
  ];


  const overviewCategories = [
    "Featured-Drinks","Cold-Coffee","Hot-Drinks","Fruity-Soda","Non-Coffee",
    "Featured-Foods","Rice-Meals","Chicken-Wings","Shareable","Burgers","Snacks"
  ];

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
      ["Rice-Meals","Chicken-Wings","Shareable","Burgers","Snacks"].includes(cat)
        ? "foods"
        : "drinks";

    const container = type === "foods" ? foodsOverview : drinksOverview;

    const card = document.createElement("div");
    card.className = "menu-item clickable no-modal";
    card.dataset.filterTrigger = cat;

    card.innerHTML = `
      <img src="../../assets/overview/${cat}.jpg" alt="${cat}" loading="lazy">
      <span class="label">${cat.replace(/-/g," ")}</span>
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
    heading.textContent = category.replace(/-/g," ");

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

    breadcrumbCategory.textContent = category.replace(/-/g," ");
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
    const price = item.dataset.price;

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
