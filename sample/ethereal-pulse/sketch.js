// GVMインスタンスをグローバルに宣言
let gvm = new GVM(120); // BPMを120に設定

function setup() {
    // ウィンドウ全体をキャンバスとして使用
    createCanvas(windowWidth, windowHeight);
    noFill();
    strokeWeight(1.5);
}

function draw() {
    // 背景を暗い色で設定し、トレイル効果を追加
    background(20, 20, 40, 30);

    // キャンバスの中心座標
    let centerX = width / 2;
    let centerY = height / 2;

    // ノイズフィールドの設定
    let numRings = 50; // 波紋の数
    let maxRadius = min(width, height) / 2 * 0.9; // 最大半径

    for (let i = 0; i < numRings; i++) {
        beginShape();

        // 各リングの色を設定（リズムに応じて変化）
        let hue = map(i, 0, numRings, 180, 360); // 色相を変化させる
        stroke(color(`hsla(${hue}, 70%, 60%, ${0.8})`));

        for (let angle = 0; angle < TWO_PI; angle += radians(5)) {
            // ノイズ値の計算（leapNoise関数でリズムに同期させる）
            let noiseFactor = gvm.leapNoise(4, 1, [i, 0]);

            // 半径をノイズに基づいて計算
            let radius = maxRadius * (i / numRings) * (1 + noiseFactor * 0.5);

            // 極座標からXY座標へ変換
            let x = centerX + radius * cos(angle);
            let y = centerY + radius * sin(angle);

            vertex(x, y);
        }

        endShape(CLOSE);
    }
}

// ウィンドウサイズが変更された際に呼び出される関数
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
