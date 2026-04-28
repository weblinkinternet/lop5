// Thêm hàm này vào đầu file script.js
function showPage(pageId) {
    // Ẩn tất cả các trang
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    
    // Hiện trang được chọn
    document.getElementById(pageId + '-page').style.display = 'block';

    // Đổi trạng thái menu
    document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
    // (Tùy chọn: Thêm logic để active đúng icon)
    
    if(pageId === 'learn') {
        loadQuestion(); // Bắt đầu bài học khi bấm vào môn học
    }
}

// Cập nhật kim cương ra ngoài trang chủ
function updateDiamond(amount) {
    diamonds += amount;
    document.getElementById("diamond-home").innerText = diamonds;
}
