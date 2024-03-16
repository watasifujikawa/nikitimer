/**
 * 
 */


let prevRestDays = -1; // 前回の残り日数を保存する変数

//現在の時間をhtmlに埋め込んで実行し表示させる関数
function showRestTime() {

  const now = new Date();
  const goal = new Date(2024, 2, 18);

  const restMillisecond = goal.getTime() - now.getTime();
  const day = Math.floor(restMillisecond / 1000 / 60 / 60 / 24);
  const hour = Math.floor(restMillisecond / 1000 / 60 / 60) % 24;
  const minute = Math.floor(restMillisecond / 1000 / 60) % 60;
  const second = Math.floor(restMillisecond / 1000) % 60;

  document.getElementById('day').textContent = day;
  document.getElementById('hour').textContent = hour;
  document.getElementById('minute').textContent = String(minute).padStart(2, '0');
  document.getElementById('second').textContent = String(second).padStart(2, '0');
  
   const restDays = Math.ceil(restMillisecond / (1000 * 60 * 60 * 24)); // 残り日数を計算

  // 前回の残り日数と比較して残り日数が変化した場合のみアラートを表示
  if (restDays !== prevRestDays) {
    prevRestDays = restDays;
    alert("誕生日まで後 " + restDays + " 日");
  }

  // 残り日数が0以下になったら、誕生日おめでとうのアラートを表示
  if (restDays <= 0) {
    clearInterval(timer); // タイマーを停止
    otherFunction();
  }
}


function otherFunction() {
  // ここに0秒になったときに実行したい処理を記述
  alert("誕生日おめでとうございます。\n彼女さん共今後できればですが、家族ぐるみで交流を深めたいと思っているので、なんやかんや今後よろしくおねがいします。\n今後もお幸せに誕生日おめでとう！！！！by webサイト作成者より");
}

//一秒に一回実行させる関数
setInterval(showRestTime, 1000);
