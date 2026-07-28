import React from "react";
import { useTranslation } from "react-i18next";
import { SwitcherContainer, LanguageButton } from "./LanguageSwitcher.styles";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language ? i18n.language.slice(0, 2) : "en";

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <SwitcherContainer>
      <LanguageButton
        active={currentLang === "en"}
        onClick={() => handleLanguageChange("en")}
        disableRipple
      >
        EN
      </LanguageButton>

      <LanguageButton
        active={currentLang === "fr"}
        onClick={() => handleLanguageChange("fr")}
        disableRipple
      >
        FR
      </LanguageButton>
    </SwitcherContainer>
  );
};

export default LanguageSwitcher;