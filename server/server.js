const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/api/sustainable-energy", (req, res) => {
  res.json({
    title: "永續能源",
    content: "這是永續能源的內容，介紹如何發展可再生能源。",
  });
});

app.get("/api/buy-power", (req, res) => {
  res.json({
    title: "我要買電",
    content: "這裡提供如何購買綠電的資訊。",
  });
});

app.get("/api/green-energy-consultant", (req, res) => {
  res.json({
    title: "綠電顧問",
    content: "專家提供綠電市場的諮詢與服務。",
  });
});

app.get("/api/sell-power", (req, res) => {
    res.json({
      title: "我要賣電",
      content: "這裡提供如何販售綠電的資訊。",
    });
  });

  app.get("/api/common-question-answer", (req, res) => {
    res.json({
      title: "常見 Q&A",
      content: "專家提供綠電市場的一般問題答案。",
    });
  });

  app.get("/api/lastest-news", (req, res) => {
    res.json({
      title: "最新消息",
      content: "綠電市場的第一手消息。",
    });
  });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
