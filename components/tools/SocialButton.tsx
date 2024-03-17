import { Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export const SocialButton = ({
  text,
  link,
  icon,
}: {
  text: string;
  link: string;
  icon: any;
}) => {
  return (
    <Flex
      bgColor="#141414"
      cursor="pointer"
      flexDir="row"
      mr={5}
      alignItems="center"
      p={2}
      px={5}
      borderRadius={10}
      _hover={{
        backgroundColor: "#707070",
      }}
    >
      <Image
        alt={`${text}-icon`}
        src={icon}
        style={{ width: 20, height: 20, marginRight: 7 }}
      />
      <Text fontSize={18}>{text}</Text>
    </Flex>
  );
};
