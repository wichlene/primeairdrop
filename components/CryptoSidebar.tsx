<div id="crypto-sidebar" style="position: fixed; top: 100px; left: 0; width: 200px; background: #0d1117; color: #00ff88; padding: 16px; border-right: 1px solid #333; z-index: 1000; font-family: Arial, sans-serif; font-size: 14px;">
  <h4 style="margin: 0 0 12px 0; font-size: 16px; color: #00ff88;">🪙 Popüler Coin Fiyatları (Demo)</h4>
  <div id="prices">Yükleniyor...</div>
</div>

<script>
  async function fetchPrices() {
    try {
      const resp = await fetch('prices.json');
      const data = await resp.json();

      const pricesHTML = `
        ₿ BTC: $${data.bitcoin}<br>
        Ξ ETH: $${data.ethereum}<br>
        ◎ SOL: $${data.solana}<br>
        🟡 BNB: $${data.binancecoin}<br>
        🐶 DOGE: $${data.dogecoin}<br>
        🪙 SHIB: $${data["shiba-inu"]}<br>
        🔵 XRP: $${data.ripple}<br>
        🟣 ADA: $${data.cardano}<br>
        🔶 AVAX: $${data["avalanche-2"]}<br>
        🔷 MATIC: $${data.polygon}<br>
        💠 LINK: $${data.chainlink}<br>
        🟢 TON: $${data.toncoin}
      `;

      document.getElementById("prices").innerHTML = pricesHTML;
    } catch (err) {
      document.getElementById("prices").innerText = "Veri alınamadı 😕";
      console.error(err);
    }
  }

  fetchPrices();
  setInterval(fetchPrices, 60000);
</script>
