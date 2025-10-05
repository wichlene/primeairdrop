"use client";
import React, { useEffect, useState } from 'react';

const CryptoSidebar = () => {
  const [prices, setPrices] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd");
        const data = await res.json();
        setPrices({
          btc: data.bitcoin.usd,
          eth: data.ethereum.usd
        });
      } catch (error) {
        console.error("Fiyat verisi alınamadı", error);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: "fixed",
      top: 100,
      left: 0,
      width: 160,
      background: "#f9f9f9",
      padding: "12px",
      borderRight: "1px solid #ddd",
      zIndex: 1000,
      fontSize: "14px",
      fontFamily: "Arial, sans-serif",
      color: "#333",
      boxShadow: "2px 0 5px rgba(0,0,0,0.05)"
    }}>
      <h4 style={{ marginBottom: "10px", fontSize: "16px", color: "#111" }}>Anlık Fiyatlar</h4>
      <div>₿ BTC: ${prices.btc || "..."}</div>
      <div>Ξ ETH: ${prices.eth || "..."}</div>
    </div>
  );
};

export default CryptoSidebar;
