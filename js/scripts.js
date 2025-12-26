document.querySelectorAll(".mega-left .nav-link").forEach((link) => {
  link.addEventListener("mouseenter", function () {
    // HAPUS ACTIVE DI SEMUA MENU KIRI
    document
      .querySelectorAll(".mega-left .nav-link")
      .forEach((el) => el.classList.remove("active"));

    // HAPUS ACTIVE DI SEMUA TAB
    document
      .querySelectorAll(".mega-right .tab-pane")
      .forEach((tab) => tab.classList.remove("show", "active"));

    // AKTIFKAN MENU YANG DI HOVER
    this.classList.add("active");

    // AMBIL TARGET TAB
    const target = this.getAttribute("href");
    const tabPane = document.querySelector(target);

    if (tabPane) {
      tabPane.classList.add("show", "active");
    }
  });
});
