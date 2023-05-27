function handleSubmit() {
  const emailValue = document.getElementById("email").value;
  const errorEmail = document.getElementById("error-email");

  const checkMail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const checkEmail = emailValue.match(checkMail);
  const info = document.querySelector(".info");
  const submitControl = document.querySelector(".submit-email");

  if (checkEmail) {
    info.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Vui lòng nhập đúng định dạng email";
  }
}
// js từ phần kinh nghiệm --> sở thích

// js mouse over
function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".control-view");
  viewMore.style.display = "inline-block";
}
// js mouse out
function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".control-view");
  viewMore.style.display = "none";
}
// js kinh nghiệm
function handleClickKn() {
  const kinhNghiem = document.getElementById("Kinh-nghiem");
  const btnKn = document.getElementById("btnKn");

  if (btnKn.classList.value.includes("view-more")) {
    kinhNghiem.style.display = "block";

    btnKn.classList.remove("view-more");
    btnKn.classList.add("view-less");
    btnKn.innerHTML = "View Less";
  } else {
    kinhNghiem.style.display = "none";

    btnKn.classList.remove("view-less");
    btnKn.classList.add("view-more");
    btnKn.innerHTML = "View More";
  }
}
//js kỹ năng
function handleClickKyNang() {
  const kyNang = document.getElementById("ky-nang");
  const btnKyNang = document.getElementById("btn-ky-nang");

  if (btnKyNang.classList.value.includes("view-more")) {
    kyNang.style.display = "block";

    btnKyNang.classList.remove("view-more");
    btnKyNang.classList.add("view-less");
    btnKyNang.innerHTML = "View Less";
  } else {
    kyNang.style.display = "none";

    btnKyNang.classList.remove("view-less");
    btnKyNang.classList.add("view-more");
    btnKyNang.innerHTML = "View More";
  }
}
// js ngôn ngữ
function handleClickNgonNgu() {
  const ngonNgu = document.getElementById("ngon-ngu");
  const btnNgonNgu = document.getElementById("btn-ngon-ngu");

  if (btnNgonNgu.classList.value.includes("view-more")) {
    ngonNgu.style.display = "block";

    btnNgonNgu.classList.remove("view-more");
    btnNgonNgu.classList.add("view-less");
    btnNgonNgu.innerHTML = "View Less";
  } else {
    ngonNgu.style.display = "none";

    btnNgonNgu.classList.remove("view-less");
    btnNgonNgu.classList.add("view-more");
    btnNgonNgu.innerHTML = "View More";
  }
}
// js hoạt động
function handleClickHoatDong() {
  const hoatDong = document.getElementById("hoat-dong");
  const btnHd = document.getElementById("btn-hoat-dong");

  if (btnHd.classList.value.includes("view-more")) {
    hoatDong.style.display = "block";

    btnHd.classList.remove("view-more");
    btnHd.classList.add("view-less");
    btnHd.innerHTML = "View Less";
  } else {
    hoatDong.style.display = "none";

    btnHd.classList.remove("view-less");
    btnHd.classList.add("view-more");
    btnHd.innerHTML = "View More";
  }
}
// js học vấn
function handleClickHocVan() {
  const hocVan = document.getElementById("hoc-van");
  const btnHv = document.getElementById("btn-hoc-van");

  if (btnHv.classList.value.includes("view-more")) {
    hocVan.style.display = "block";

    btnHv.classList.remove("view-more");
    btnHv.classList.add("view-less");
    btnHv.innerHTML = "View Less";
  } else {
    hocVan.style.display = "none";

    btnHv.classList.remove("view-less");
    btnHv.classList.add("view-more");
    btnHv.innerHTML = "View More";
  }
}
// js sở thích
function handleClickSoThich() {
  const soThich = document.getElementById("so-thich");
  const btnSt = document.getElementById("btn-so-thich");

  if (btnSt.classList.value.includes("view-more")) {
    soThich.style.display = "block";

    btnSt.classList.remove("view-more");
    btnSt.classList.add("view-less");
    btnSt.innerHTML = "View Less";
  } else {
    soThich.style.display = "none";

    btnSt.classList.remove("view-less");
    btnSt.classList.add("view-more");
    btnSt.innerHTML = "View More";
  }
}
