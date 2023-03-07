import bitcoin from "assets/icons/main/bitcoin.png";
import sharplyFalling from "assets/icons/weather/sharplyFalling.svg";

export const DETAILS = [
  { id: 0, title: "Location", content: "United States", bold: true },
  { id: 1, title: "Exchange", content: "NASDAQ", bold: true },
  { id: 2, title: "Sector", content: "Information Technology", bold: true },
  { id: 3, title: "Total Cash", content: "48,304,001,024" },
  { id: 4, title: "Total Debt", content: "132,480,000,000" },
  { id: 5, title: "Total Revenue", content: "394,328,014,848" },
  { id: 6, title: "EBITDA", content: "130,541,002,752" },
  { id: 7, title: "Debt to Equity", content: "261.446" },
  { id: 8, title: "Revenue per Share", content: "24.317" },
  { id: 9, title: "Gross Profit", content: "170,782,000,000" },
  { id: 10, title: "Free Cash Flow", content: "90,215,251,968" },
  { id: 11, title: "Revenue Growth", content: "8.10%" },
  { id: 12, title: "Category", content: "Token", bold: true },
  { id: 13, title: "Platform", content: "Ethereum", bold: true },
  { id: 14, title: "Total Supply", content: "20,000,000,000" },
  { id: 15, title: "Max Supply", content: "40,000,000,000" },
  {
    id: 16,
    title: "Whitepaper",
    content: "https://www.stellar.org/papers/stellar-consensus-protocol.pdf",
    underline: true,
  },
  { id: 17, title: "Tags", content: "smart-contracts, medium of exchange" },
  {
    id: 18,
    title: "Description",
    content:
      "Stellar (XLM) is a cryptocurrency . Stellar has a current supply of 50,001,787,506.607185 with 26,153,823,528.171074 in circulation. The last known price of Stellar is 0.07962521 USD and is up 0.23 over the last 24 hours. It is currently trading on 473 active market(s) with $63,225,097.83 traded over the last 24 hours. More information can be found at https://www.stellar.org.",
  },
];

export const MENU_LIST = [
  { id: 0, title: "7D" },
  { id: 1, title: "15D" },
  { id: 2, title: "30D" },
  { id: 3, title: "90D" },
  { id: 4, title: "180D" },
  { id: 5, title: "365D" },
  { id: 6, title: "All" },
];

export const COIN = {
  id: 0,
  image: bitcoin,
  name: "Bitcoin",
  subName: "BTC-USD",
  risk: "High",
  price: 287000000,
  maximumLoss: 74.2,
  weatherIcon: "slightlyFalling",
  weather: "Slightly falling",
  date: "2023.01.05",
};

export const WEEKLY = [
  { id: 0, date: "2023.2.11", image: sharplyFalling },
  { id: 1, date: "2023.2.12", image: sharplyFalling },
  { id: 2, date: "2023.2.13", image: sharplyFalling },
  { id: 3, date: "2023.2.14", image: sharplyFalling },
  { id: 4, date: "2023.2.15", image: sharplyFalling },
  { id: 5, date: "2023.2.16", image: sharplyFalling },
  { id: 6, date: "2023.2.17", image: sharplyFalling },
];

export const DOWNLOAD = {
  data: [
    { id: 0, title: "All" },
    { id: 1, title: "Price" },
    { id: 2, title: "Tail Risk" },
  ],
  level: [
    { id: 0, title: "All" },
    { id: 1, title: "0.99" },
    { id: 2, title: "0.95" },
    { id: 3, title: "Others" },
  ],
};
