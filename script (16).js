function climbStairs(n, costs) {
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;
  for (let j = 1; j <= n; j++) {
    for (let d = 1; d <= 3 && j - d >= 0; d++) {
      dp[j] = Math.min(dp[j], dp[j - d] + costs[j - 1] + d * d);
    }
  }
  return dp[n];
}

document.getElementById("solve").addEventListener("click", () => {
  const out = document.getElementById("result");
  const n = parseInt(document.getElementById("n").value, 10);
  const costs = document.getElementById("costs").value
    .split(",")
    .map(s => parseInt(s.trim(), 10));

  if (!n || costs.length !== n || costs.some(Number.isNaN)) {
    out.className = "error";
    out.textContent = "Enter a valid n and exactly n comma-separated costs.";
    return;
  }
  out.className = "";
  out.textContent = "Minimum cost: " + climbStairs(n, costs);
});
