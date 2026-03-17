document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const miss = document.getElementById("miss").value;
  let result = "";

  if (miss === "スライス") {
    result = "あなたはスライス改善型。つかまりやすいドライバーがおすすめです。";
  } else if (miss === "フック") {
    result = "あなたはフック型。操作性の高いクラブがおすすめです。";
  } else {
    result = "あなたはミート率改善型。寛容性の高いクラブがおすすめです。";
  }

  document.getElementById("result").innerText = result;
});
