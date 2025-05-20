import { useState } from "react";
import {
  BurgerMenuImage,
  ImageLogo,
  LanguageSelector,
  LinkGroups,
  LinkItems,
  LinksWrapper,
  LogoHeader,
  LogoutCont,
  LogOutText,
  MainMenuWrapper,
} from "./Menu.style";
import { Image, Pressable, Text } from "react-native";
import { router } from "expo-router";

const Links = [
  { label: "Your Surveys", route: "/home/" },
  { label: "History", route: "/history/" },
  { label: "Rewards", route: "/rewards/" },
  {
    label: "Privacy Policy",
    route:
      "https://publicwisdomaccount.com/#44d46bcd-6848-4656-b4be-c309f16c6712",
  },
  {
    label: "Support",
    route: "mailto:support@publicwisdomaccount.com",
  },
  {
    label: "Contact Us",
    route:
      "https://publicwisdomaccount.com/#5bcfaf66-4d1b-4e16-8936-da4338163f08",
  },
  {
    label: "Opt Out",
    // route: `${config.COMPANY_URL}/panel-manager/pages/optOut/?panelId=${config.PANEL_ID}`,
    route: "",
  },
];

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const logOutUser = () => {
    console.log("Logging out...");
    router.navigate("/");
    // Add logout logic here
  };
  const topLinks = Links.slice(0, 3);
  const bottomLinks = Links.slice(3);

  return (
    <MainMenuWrapper>
      <LogoHeader>
        <Pressable onPress={() => setShowMenu(!showMenu)}>
          <Image
            source={
              showMenu
                ? require("../../assets/images/closeMenuIcon.png")
                : require("../../assets/images/menuIcon.png")
            }
            style={{ height: 30, width: 30 }}
          />
        </Pressable>

        <ImageLogo>
          <Image
            source={require("../../assets/images/pwLogo.jpg")}
            style={{ height: 80, width: 270, borderRadius: 10 }}
          />
        </ImageLogo>

        <LogoutCont>
          <Pressable onPress={logOutUser}>
            <LogOutText>Log Out</LogOutText>
          </Pressable>
        </LogoutCont>
      </LogoHeader>

      {showMenu && (
        <LinksWrapper isShown={showMenu}>
          {/* First 3 links */}
          <LinkGroups>
            {topLinks.map((item, index) => (
              <Pressable
                key={index}
                onPress={() => {
                  setShowMenu(false);
                  router.navigate(item?.route);
                }}
                style={{ marginVertical: 10 }}
              >
                <LinkItems>{item.label}</LinkItems>
              </Pressable>
            ))}
          </LinkGroups>

          {/* Rest of the links */}
          <LinkGroups>
            {bottomLinks.map((item, index) => (
              <Pressable
                key={index}
                onPress={() => {
                  setShowMenu(false);
                  router.navigate(item?.route);
                }}
                style={{ marginVertical: 10 }}
              >
                <LinkItems>{item.label}</LinkItems>
              </Pressable>
            ))}
          </LinkGroups>
        </LinksWrapper>
      )}
    </MainMenuWrapper>
  );
};

export default Menu;
