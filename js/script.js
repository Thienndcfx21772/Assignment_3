function handleSubmit() {
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
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

// phần 4 ---------->

function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".view-more");
  viewMore.style.display = "inline-block";
}

function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".view-more");
  viewMore.style.display = "none";
}

function handleViewMore(element) {
  const parentElement = element.closest(".parent");
  const viewMore = parentElement.querySelector(".view-more");

  if (viewMore.innerHTML == "View more") {
    const sContent = parentElement.querySelectorAll(".s-content");
    sContent.forEach((element) => {
      element.style.display = "block";
    });
    viewMore.innerHTML = "Less more";
  } else {
    const sContent = parentElement.querySelectorAll(".s-content");
    sContent.forEach((element) => {
      element.style.display = "none";
    });
    viewMore.innerHTML = "View more";
  }
}
