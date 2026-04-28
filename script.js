const questions = [
    { q: "7 x 8 bằng bao nhiêu?", a: "56", options: ["54", "56", "64", "48"] },
    { q: "Số nào lớn nhất: 0.5, 0.15, 0.51?", a: "0.51", options: ["0.5", "0.15", "0.51", "Bằng nhau"] },
    { q: "Hình vuông có cạnh 5cm. Diện tích là?", a: "25cm²", options: ["20cm²", "25cm²", "30cm²", "15cm²"] }
];

let currentIdx = 0;
let diamonds = 0;

function loadQuestion() {
    const qData = questions[currentIdx];
    document.getElementById("question-text").innerText = qData.q;
    const container = document.getElementById("options-container");
    container.innerHTML = "";

    qData.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.classList.add("option-btn");
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(opt, btn);
        container.appendChild(btn);
    });

    // Cập nhật tiến trình
    const progress = (currentIdx / questions.length) * 100;
    document.getElementById("progress-fill").style.width = progress + "%";
}

function checkAnswer(selected, btn) {
    const correct = questions[currentIdx].a;
    const allBtns = document.querySelectorAll(".option-btn");
    
    // Vô hiệu hóa nút để không bấm nhiều lần
    allBtns.forEach(b => b.style.pointerEvents = "none");

    if (selected === correct) {
        btn.classList.add("correct");
        diamonds += 10;
        document.getElementById("diamond-count").innerText = "💎 " + diamonds;
    } else {
        btn.classList.add("wrong");
        // Hiển thị đáp án đúng cho học sinh thấy
        allBtns.forEach(b => { if(b.innerText === correct) b.classList.add("correct"); });
    }

    // Đợi 1.5 giây rồi sang câu mới
    setTimeout(() => {
        currentIdx++;
        if (currentIdx < questions.length) {
            loadQuestion();
        } else {
            document.getElementById("progress-fill").style.width = "100%";
            document.getElementById("quiz-section").style.display = "none";
            document.getElementById("result-screen").style.display = "block";
        }
    }, 1500);
}

// Bắt đầu chạy
loadQuestion();
