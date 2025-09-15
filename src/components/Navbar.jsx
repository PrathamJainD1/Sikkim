import React from "react";
import { useTranslation } from "react-i18next";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "../App.css";

function NavbarComponent() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <Navbar expand="lg" className="custom-navbar" variant="dark">
      <Container>
        <Navbar.Brand href="/" className="brand-text">{t("Explore Sikkim")}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Food Dropdown */}
            <NavDropdown title={t("Food")} id="food-dropdown">
              <NavDropdown.Item href="https://en.wikipedia.org/wiki/Thukpa" target="_blank">{t("Thukpa")}</NavDropdown.Item>
              <NavDropdown.Item href="https://en.wikipedia.org/wiki/Momo_(food)" target="_blank">{t("Momos")}</NavDropdown.Item>
              <NavDropdown.Item href="https://en.wikipedia.org/wiki/Chhurpi" target="_blank">{t("Chhurpi")}</NavDropdown.Item>
            </NavDropdown>
            {/* Culture Dropdown */}
            <NavDropdown title={t("Culture")} id="culture-dropdown">
              <NavDropdown.Item href="https://www.sikkim.gov.in/departments/cultural-affairs-and-heritage-department/festivals-in-sikkim" target="_blank">{t("Festivals")}</NavDropdown.Item>
              <NavDropdown.Item href="https://sikkimtourism.gov.in/Public/ExperienceSikkim/musicanddance" target="_blank">{t("Dance")}</NavDropdown.Item>
              <NavDropdown.Item href="https://sikkimtourism.org/exploring-the-rich-art-and-craft-of-sikkim/" target="_blank">{t("Art")}</NavDropdown.Item>
            </NavDropdown>
            {/* Monasteries Dropdown */}
            <NavDropdown title={t("Monasteries")} id="monasteries-dropdown">
              <NavDropdown.Item href="https://www.karmapa.org/karma-kagyu/rumtek-monastery/" target="_blank">{t("Rumtek")}</NavDropdown.Item>
              <NavDropdown.Item href="https://en.wikipedia.org/wiki/Pemayangtse_Monastery" target="_blank">{t("Pemayangtse")}</NavDropdown.Item>
              <NavDropdown.Item href="https://en.wikipedia.org/wiki/Tashiding_Monastery" target="_blank">{t("Tashiding")}</NavDropdown.Item>
            </NavDropdown>
            {/* 360° View Dropdown */}
            <NavDropdown title={t("360° View")} id="view-dropdown">
              <NavDropdown.Item href="https://www.dreamstime.com/photos-images/rumtek-360.html" target="_blank">{t("Rumtek 360")}</NavDropdown.Item>
              <NavDropdown.Item href="https://www.dreamstime.com/photos-images/pemayangtse-360.html" target="_blank">{t("Pemayangtse 360")}</NavDropdown.Item>
              <NavDropdown.Item href="https://www.dreamstime.com/photos-images/tashiding-360.html" target="_blank">{t("Tashiding 360")}</NavDropdown.Item>
            </NavDropdown>
            {/* Travel Routes Dropdown */}
            <NavDropdown title={t("Travel Routes")} id="routes-dropdown">
              <NavDropdown.Item href="https://www.tourmyindia.com/states/sikkim/gangtok-tourism-map.html" target="_blank">{t("Gangtok Route")}</NavDropdown.Item>
              <NavDropdown.Item href="https://www.tourmyindia.com/states/sikkim/pelling-tourism-map.html" target="_blank">{t("Pelling Route")}</NavDropdown.Item>
              <NavDropdown.Item href="https://www.northsikkimtourism.com/north-sikkim-map/" target="_blank">{t("North Sikkim Route")}</NavDropdown.Item>
            </NavDropdown>
            {/* Booking Dropdown */}
            <NavDropdown title={t("Booking / Participation")} id="booking-dropdown">
              <NavDropdown.Item href="https://www.makemytrip.com/holidays-india/sikkim-travel-packages.html" target="_blank">{t("Book a Tour")}</NavDropdown.Item>
              <NavDropdown.Item href="https://www.holidify.com/collections/festivals-of-sikkim" target="_blank">{t("Participate in Events")}</NavDropdown.Item>
            </NavDropdown>
            {/* Language Switch */}
            <Nav.Link onClick={() => changeLanguage("en")}>🇬🇧 EN</Nav.Link>
            <Nav.Link onClick={() => changeLanguage("hi")}>🇮🇳 HI</Nav.Link>
            <Nav.Link onClick={() => changeLanguage("mr")}>🇮🇳 MR</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

