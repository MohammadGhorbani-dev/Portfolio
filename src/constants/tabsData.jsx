import {
  HomeRounded,
  PersonRounded,
  TerminalRounded,
  AlternateEmailRounded,
} from "@mui/icons-material";

const tabProps = (index) => {
  return {
    id: `sidebar-tab-${index}`,
    "aria-controls": `Page-${index}`,
  };
};

export const tabs = [
  { label: "Home", icon: <HomeRounded />, ...tabProps(0) },
  { label: "About", icon: <PersonRounded />, ...tabProps(1) },
  { label: "Portfolio", icon: <TerminalRounded />, ...tabProps(2) },
  { label: "Contact", icon: <AlternateEmailRounded />, ...tabProps(3) },
];
