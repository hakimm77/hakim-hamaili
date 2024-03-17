import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();
  const navItems = [
    {
      name: "Home",
      route: "/home",
    },
    {
      name: "Project",
      route: "/projects",
    },
    {
      name: "Contact",
      route: "/contact",
    },
  ];
  return (
    <Flex
      flexDir="row"
      w="100%"
      py={3}
      px={10}
      borderBottomColor={"gray"}
      borderBottomWidth={1}
      alignItems="center"
      justifyContent="space-between"
    >
      <Text
        fontSize={50}
        fontWeight="bold"
        cursor="pointer"
        onClick={() => {
          router.push("/");
        }}
      >
        H
      </Text>

      <Flex
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        w="20%"
      >
        {navItems.map((item, idx) => (
          <Text
            key={idx}
            cursor="pointer"
            fontSize={20}
            fontWeight={500}
            onClick={() => {
              router.push(item.route);
            }}
          >
            {item.name}
          </Text>
        ))}
      </Flex>
    </Flex>
  );
};
