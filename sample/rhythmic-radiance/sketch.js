// GVMインスタンスをグローバルに宣言
// 初期BPMを指定（ここでは120）
let gvm = new GVM(120);

function setup() {
    // ウィンドウ全体をキャンバスとして使用
    createCanvas(windowWidth, windowHeight);

    // 描画の際に図形の縁線を非表示
    noStroke();
}

function draw() {
    // 背景色を設定（暗めのグレー）
    background(30);

    // 現在のフェーズ（0〜1）を取得
    // フェーズはBPMに基づき、時間経過とともにリズムよく変化
    let phase = gvm.getPhase();

    // キャンバスの中心座標を計算
    let centerX = width / 2;
    let centerY = height / 2;

    // 描画する円の数
    let numCircles = 10;

    // 円の最大半径（キャンバスサイズに応じて動的に設定）
    let maxRadius = min(width, height) / 2 * 0.8; // キャンバスの短辺の80%を最大半径とする

    // リズミカルに変化する円を描画
    for (let i = 0; i < numCircles; i++) {
        // 各円の進行度（0〜1）を計算
        let progress = (i + phase) / numCircles;

        // 現在の進行度に基づいて円の半径を計算
        let radius = maxRadius * progress;

        // 円の透明度（アルファ値）を進行度に応じて設定
        let alpha = map(progress, 0, 1, 255, 50);

        // 円の色を進行度に応じて補間（グラデーション効果）
        fill(lerpColor(color('#ff6f61'), color('#6b5b95'), progress), alpha);

        // 中心座標に円を描画
        ellipse(centerX, centerY, radius * 2);
    }
}

// ウィンドウサイズが変更された際に呼び出される関数
function windowResized() {
    // キャンバスサイズをウィンドウサイズに合わせてリサイズ
    resizeCanvas(windowWidth, windowHeight);
}
