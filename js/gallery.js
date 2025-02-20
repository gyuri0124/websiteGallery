/* 원본 띄우기 */
document.addEventListener("DOMContentLoaded", function() {
  const image = document.querySelectorAll(".pic");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".close");

  // 이미지 클릭 시 모달 열기
  image.forEach(img => {
    img.addEventListener("click", function() {
      modal.style.display = "flex";
      modalImg.src = this.src;
    });
  });

  // 닫기 버튼 클릭 시 모달 닫기
  closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
  });
});
