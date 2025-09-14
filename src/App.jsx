import React from "react";
import "./App.css";
import NavbarComponent from "./components/Navbar";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <div className="app">
      <header id="intro" className="intro">
        <h1>{t("Sikkim: Land of Monasteries, Mountains & Culture")}</h1>
        <p>{t("Nestled in the lap of the majestic Himalayas, Sikkim is India’s hidden gem of natural beauty and cultural richness. Known for its snow-capped peaks like Kanchenjunga, vibrant Buddhist monasteries, and warm hospitality, Sikkim offers travelers a perfect blend of adventure and tranquility.")}</p>
        <p>{t("From lush valleys and alpine meadows to traditional festivals and diverse cuisines, every corner of Sikkim tells a story of harmony between nature and culture. Whether you seek spiritual peace, thrilling treks, or just breathtaking views, Sikkim promises an unforgettable journey.")}</p>
      </header>

      <NavbarComponent />

      <section id="cultural-calendar" className="section">
        <h2>📅 {t("Cultural Calendar")}</h2>
        <p>{t("Sikkim hosts numerous festivals throughout the year, including Losar, Bumchu, and Saga Dawa, celebrating its rich Buddhist culture. These festivals give tourists a glimpse into the local traditions, rituals, and vibrant performances.")}</p>
      </section>

      <section id="why-choose" className="section">
        <h2>🗻 {t("Why Choose Sikkim")}</h2>
        <p>{t("Sikkim offers pristine landscapes, rich biodiversity, adventure sports, and a peaceful environment, making it a top choice for travelers. The blend of natural beauty and cultural heritage ensures a unique and memorable experience.")}</p>
      </section>

      <section id="problems" className="section">
        <h2>🌍 {t("Problems This Website Solves")}</h2>
        <p>{t("Many tourists lack reliable information about Sikkim’s cultural heritage and must rely on scattered sources to plan their trips.")}</p>
        <p>{t("Planning a trip can be challenging due to insufficient details about travel costs, accommodations, and festival timings. This website aims to centralize all essential information for an easier, stress-free experience.")}</p>
      </section>
    </div>
  );
}

export default App;
