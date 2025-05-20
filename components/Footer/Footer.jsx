import { Pressable, Text } from "react-native";
import { config } from "../../config";
import {
  LinkItem,
  LinksWrapper,
  MainWrapper,
  WatermarkContainer,
} from "./Footer.style";

const Links = [
  {
    label: "Privacy Policy",
    route: "https://www.webmd.com/about-webmd-policies/surveys-privacy",
  },
  {
    label: "Terms of Use",
    route: "",
  },
  {
    label: "Support",
    route: "https://customercare.webmd.com/hc/en-us#30438330661773",
  },
  {
    label: "Contact Us",
    route: "mailto:patientsurveysupport@webmd.net",
  },
  {
    label: "Opt Out",
    route: `${config.COMPANY_URL}/panel-manager/pages/optOut/?panelId=${config.PANEL_ID}`,
  },
];

const Footer = () => {
  return (
    <MainWrapper>
      <LinksWrapper>
        {Links.map((item, index) => {
          return (
            <Pressable>
              <Text>{item.label}</Text>
            </Pressable>
          );
        })}
      </LinksWrapper>
      <WatermarkContainer>Powered By Q One</WatermarkContainer>
    </MainWrapper>
  );
};
export default Footer;
