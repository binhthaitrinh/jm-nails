import { graphql, Link as GatsbyLink } from "gatsby";
import * as React from "react";
import SEO from "../components/seo";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { RiInstagramFill } from "react-icons/ri";
import { SiInstagram, SiGooglemaps, SiGo } from "react-icons/si";
import { AiFillPhone } from "react-icons/ai";
import Welcome from "../components/Welcome";
import OurWork from "../components/OurWork";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Container from "../components/Container";

export const query = graphql`
  query HomeQuery {
    site: sanitySiteConfig {
      description
      title
      instagram
      phoneNumber
      url
      address
      mainNavigation {
        hash {
          current
        }
        section {
          heading
        }
      }
      logo {
        crop {
          bottom
          left
          right
          top
          _key
          _type
        }
        hotspot {
          _key
          height
          _type
          width
          x
          y
        }
        asset {
          _id
        }
        alt
        caption
      }
      hero {
        heading
        image {
          alt
          caption
          asset {
            _id
          }
          crop {
            _key
            _type
            bottom
            left
            right
            top
          }
          hotspot {
            _key
            height
            _type
            width
            x
            y
          }
        }
        ctas {
          title
          route {
            hash {
              current
            }
          }
        }
        tagline
      }
    }
  }
`;

// markup
const IndexPage = (props) => {
  const { data } = props;
  return (
    <main>
      <SEO
        description={data.site.description}
        title={data.site.title}
        openGraph={imageUrlFor(buildImageObj(data.site.logo))
          .width(600)
          .height(600)
          .url()}
      />
      <Box bg="primary" position="sticky" top={0} zIndex="9999">
        <Box maxW="960px" margin="0 auto" py="1.2rem">
          <HStack justify="space-between">
            <Text fontSize="1.2rem" textTransform={"uppercase"}>
              Welcome to JM Nails Spa
            </Text>
            <HStack>
              <Link
                href={`tel:${data.site.phoneNumber}`}
                _hover={{ textDecoration: "none" }}
              >
                <HStack>
                  <Icon as={AiFillPhone} w="2rem" h="2rem" />
                  <Text fontSize="1.2rem">{data.site.phoneNumber}</Text>
                </HStack>
              </Link>
              <Link
                href={data.site.instagram}
                _hover={{ textDecoration: "none" }}
              >
                <HStack>
                  <Icon as={SiInstagram} w="2rem" h="2rem" ml="2.4rem" />
                  <Text fontSize="1.2rem">
                    {data.site.instagram.split("/")[3]}
                  </Text>
                </HStack>
              </Link>
            </HStack>
          </HStack>
        </Box>
      </Box>
      <Stack
        direction="row"
        as="nav"
        justify={"space-between"}
        align="center"
        maxW="960px"
        mx="auto"
      >
        <Box>
          <Link as={GatsbyLink} to="/">
            <Image
              src={imageUrlFor(buildImageObj(data.site.logo))
                .width(100)
                .height(100)
                .url()}
              w="80px"
            />
          </Link>
        </Box>
        <Box>
          <Stack
            as="ul"
            listStyleType={"none"}
            spacing="1.6rem"
            direction={"row"}
            align="center"
            justify={"flex-end"}
            py="3rem"
          >
            {data.site.mainNavigation.map((item) => (
              <Link
                as={GatsbyLink}
                to={`#${item.hash.current}`}
                key={item.hash.current}
                _hover={{
                  textDecoration: "none",
                  borderBottom: "1px solid",
                  borderBottomColor: "textPrimary",
                }}
                _focus={{ outline: "none" }}
              >
                <Box as="li" fontSize={"1.2rem"} textTransform="uppercase">
                  {item.section.heading || "Welcome"}
                </Box>
              </Link>
            ))}
            <Link
              href={`tel:${data.site.phoneNumber}`}
              _hover={{
                textDecoration: "none",
                "& > li": {
                  bg: "textPrimary",
                },
              }}
            >
              <Box
                as="li"
                bg="buttonPrimary"
                fontSize={"1.6rem"}
                p="1rem 2rem"
                color="white"
              >
                Book Now
              </Box>
            </Link>
          </Stack>
        </Box>
      </Stack>
      <Grid
        templateColumns="repeat(5, 1fr)"
        maxW="960px"
        mx="auto"
        mt="2rem"
        h="38rem"
      >
        <GridItem
          colSpan={2}
          transform={"translateX(3rem)"}
          zIndex="999"
          bgImage={`
        linear-gradient(to right bottom,#f3d6d6,#f1b0c1),url(${imageUrlFor(
          buildImageObj(data.site.hero.image)
        )
          .width(600)
          .height(600)
          .url()})
          
        `}
          bgBlendMode="soft-light"
          bgSize={"cover"}
        >
          {/* <Image
            src={imageUrlFor(buildImageObj(data.site.hero.image))
              .width(600)
              .height(600)
              .url()}
          /> */}
        </GridItem>
        <GridItem
          colSpan={3}
          bg="white"
          transform="translateY(2rem)"
          p="0 4rem 0 7rem"
        >
          <Stack align="center" justify={"center"} h="100%">
            <Box>
              <Heading
                as="h1"
                fontSize="2.4rem"
                lineHeight={1.6}
                fontWeight="normal"
              >
                {data.site.hero.heading.split("-")[0]}
              </Heading>
              <Heading
                as="h1"
                fontSize="2.4rem"
                mb="2rem"
                fontWeight={"normal"}
              >
                {data.site.hero.heading.split("-")[1]}
              </Heading>
              <Text fontSize="1.2rem" lineHeight={"2"}>
                {data.site.hero.tagline}
              </Text>
              <Box mt="1.6rem">
                {data.site.hero.ctas.map((cta, index) => (
                  <Link
                    href={`#${cta.route.hash.current}`}
                    _hover={{
                      textDecoration: "none",
                      "& > li": {
                        bg: "textPrimary",
                      },
                    }}
                    key={index}
                    display="inline-block"
                  >
                    <Box
                      bg="buttonPrimary"
                      fontSize={"1.6rem"}
                      p="1rem 2rem"
                      color="white"
                    >
                      {cta.title}
                    </Box>
                  </Link>
                ))}
              </Box>
            </Box>
          </Stack>
        </GridItem>
      </Grid>
      <Welcome />
      <OurWork />
      <Services />
      <Testimonials />
      <Contact />
      <Box as="footer" mt="8rem" bg="textPrimary" py="4rem">
        <Container>
          <HStack justify="space-between" color="white">
            <Link
              href={`tel:${data.site.phoneNumber}`}
              _hover={{ textDecoration: "none" }}
            >
              <HStack>
                <Icon as={AiFillPhone} w="2rem" h="2rem" />
                <Text fontSize="1.2rem">{data.site.phoneNumber}</Text>
              </HStack>
            </Link>
            <Link
              href={data.site.instagram}
              _hover={{ textDecoration: "none" }}
            >
              <HStack>
                <Icon as={SiInstagram} w="2rem" h="2rem" ml="2.4rem" />
                <Text fontSize="1.2rem">
                  {data.site.instagram.split("/")[3]}
                </Text>
              </HStack>
            </Link>
            <HStack>
              <Icon as={SiGooglemaps} w="2rem" h="2rem" ml="2.4rem" />
              <Text fontSize="1.2rem">{data.site.address}</Text>
            </HStack>
          </HStack>
        </Container>
      </Box>
    </main>
  );
};

export default IndexPage;
