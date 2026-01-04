// 全消去時のメイン関数
const triggerCompleteEffect = () => {
    // 1. ステータス文字を豪華に
    const status = document.getElementById('status-text');
    status.innerText = "SYSTEM PURIFIED: ALL KEYS TRACKED";
    status.style.color = "#38bdf8";
    status.style.fontSize = "1.2rem";
    status.style.textShadow = "0 0 10px #38bdf8";

    // 2. 全体にクラスを付与して光らせる
    document.body.classList.add('all-cleared');

    // 3. スキャンラインを走らせる
    const line = document.createElement('div');
    line.className = 'scan-line';
    line.style.animation = 'scan-move 2s linear forwards';
    document.body.appendChild(line);

    console.log("%c[AsciiTracker] SUCCESS: All sectors cleared.", "color: #38bdf8; font-weight: bold; font-size: 14px;");
};