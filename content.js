// Google Meetページが読み込まれたときに実行
setTimeout(function () {
  // 会議ページかどうかを確認
  if (window.location.pathname.length > 1) {
    // ポップアップ作成
    const popup = document.createElement('div');
    popup.style = `
          position: fixed;
          top: 20px;
          right: 20px;
          background: white;
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 15px;
          z-index: 9999;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
          font-family: 'Google Sans', sans-serif;
          max-width: 300px;
      `;
    
    // 内容を設定
    popup.innerHTML = `
          <h3 style="margin-top: 0; color: #1a73e8; font-size: 16px; margin-bottom: 10px;">会議文字起こしのお願い</h3>
          <p style="margin-bottom: 10px; font-size: 14px; line-height: 1.4;">
            議事録作成のため、Gemini文字起こしを有効にしてください！<br>
            画面右上の鉛筆✐マークから開始できます。
          </p>
          <div style="text-align: right;">
              <button id="closeBtn" style="
                  background: #f1f1f1;
                  border: none;
                  padding: 4px 10px;
                  border-radius: 4px;
                  cursor: pointer;
                  font-size: 12px;">閉じる</button>
          </div>
      `;

    // 本体に追加
    document.body.appendChild(popup);

    // 閉じるボタンの機能
    document.getElementById('closeBtn').onclick = function () {
      popup.style.display = 'none';
    };
    
    // 一定時間後に自動的に閉じる（10秒後）
    setTimeout(function() {
      popup.style.display = 'none';
    }, 10000);
  }
}, 3000); // 3秒後に実行（ページ読み込み待ち）