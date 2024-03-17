import { Flex, Text } from "@chakra-ui/react";
import { colors } from "../utils/colors";
import { SocialButton } from "./tools/SocialButton";

export const Introduction = () => {
  const socialMedia = [
    { name: "Github", link: "", icon: require("../assets/github-icon.png") },
    {
      name: "Linkedin",
      link: "",
      icon: require("../assets/linkedin-icon.png"),
    },
    { name: "Email", link: "", icon: require("../assets/mail-icon.png") },
  ];

  return (
    <Flex flexDir="column" w="85%" justifyContent="flex-start" my={140}>
      <Text
        color={colors.highlight}
        fontSize={40}
        fontWeight="semibold"
        mb={-8}
      >
        Hey there!, I'm-
      </Text>
      <Text fontSize={120} fontWeight="900" ml={2}>
        Hakim Hamaili
      </Text>

      <Text fontSize={40} fontWeight="semibold" w="60%" mb={8} ml={2}>
        Software Engineer.
        {/* this will be changing with a typing animation through a list of words like Software engineer, Web developer, Game developer, App developer, Swiss army knife*/}
        <span style={{ color: colors.gray }}>A self-taught developer</span>
        <br />
        <span style={{ color: colors.gray }}>
          with an interest in Entrepreneurship.
        </span>
      </Text>

      <Text fontSize={25} fontWeight="400" w="60%" color={colors.gray}>
        🚀 Exploring new opportunities and projects.
      </Text>
      <Text fontSize={25} fontWeight="400" w="60%" color={colors.gray} mb={10}>
        💻 Currently Working in{" "}
        <span style={{ color: colors.highlight }}>Full-Stack Development</span>.
      </Text>

      <Flex flexDir="row" alignItems="center">
        {socialMedia.map((item, idx) => (
          <SocialButton
            key={idx}
            text={item.name}
            link={item.link}
            icon={item.icon}
          />
        ))}
      </Flex>
    </Flex>
  );
};
