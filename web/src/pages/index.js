import { graphql, Link as GatsbyLink } from "gatsby";
import * as React from "react";
import SEO from "../components/seo";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { SiInstagram, SiGooglemaps } from "react-icons/si";
import { AiFillPhone } from "react-icons/ai";
import Welcome from "../components/Welcome";
import OurWork from "../components/OurWork";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Container from "../components/Container";
import ExternalLink from "../components/ExternalLink";

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
    testimonialContent: sanitySection(heading: { regex: "/Testimonials/" }) {
      heading
      subHeading
      sectionContent {
        ... on SanityTestimonial {
          _key
          _type
          profilePic {
            alt
            caption
            asset {
              _id
            }
            crop {
              _key
              _type
              bottom
              right
              left
              top
            }
            hotspot {
              _key
              _type
              height
              width
              x
              y
            }
          }
          review
          city
          name
        }
      }
    }
  }
`;

// markup
const IndexPage = (props) => {
  const [showNav, setShowNav] = React.useState(false);

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
        <Container py="1.6rem">
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
                  <Text
                    fontSize="1.2rem"
                    display={{ base: "none", sm: "block" }}
                  >
                    {data.site.phoneNumber}
                  </Text>
                </HStack>
                <title>{data.site.phoneNumber}</title>
              </Link>
              <ExternalLink
                href={data.site.instagram}
                _hover={{ textDecoration: "none" }}
              >
                <HStack ml={{ base: "0.8rem", sm: "2.4rem" }}>
                  <Icon as={SiInstagram} w="2rem" h="2rem" />
                  <Text
                    fontSize="1.2rem"
                    display={{ base: "none", sm: "block" }}
                  >
                    {data.site.instagram.split("/")[3]}
                  </Text>
                </HStack>
                <title>{data.site.instagram}</title>
              </ExternalLink>
            </HStack>
          </HStack>
        </Container>
      </Box>
      <Container>
        <Stack
          direction="row"
          as="nav"
          justify={"space-between"}
          align="center"
        >
          <Box
            position="fixed"
            top="8rem"
            right="1.6rem"
            zIndex="999999"
            display={{ base: "block", sm: "none" }}
            __css={{
              "&.show > .nav-btn__line": {
                bgColor: "transparent",
              },
              "&.show > .nav-btn__line::before": {
                top: 0,
                transform: "rotate(135deg)",
              },
              "&.show > .nav-btn__line::after": {
                top: 0,
                transform: "rotate(-135deg)",
              },
            }}
            className={showNav && "show"}
            onClick={() => setShowNav((s) => !s)}
          >
            <Box
              position="relative"
              className="nav-btn__line"
              __css={{
                "&, &::after, &::before": {
                  w: "4rem",
                  h: "2px",
                  bg: "textPrimary",
                  display: "inline-block",
                  transition: "all 0.2s ease-out",
                },

                "&::after, &::before": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                },
                "&:after": {
                  top: "1rem",
                },
                "&:before": {
                  top: "-1rem",
                },
              }}
            />
          </Box>
          <Box>
            <Link as={GatsbyLink} to="/">
              <Image
                src={imageUrlFor(buildImageObj(data.site.logo))
                  .width(80)
                  .height(80)
                  .format("webp")
                  .url()}
                w="80px"
                alt={data.site.logo.alt}
              />
              <title>JM Nails Spa Logo</title>
            </Link>
          </Box>
          <Box>
            <Stack
              as="ul"
              listStyleType={"none"}
              spacing="1.6rem"
              direction={{ sm: "row", base: "column" }}
              align="center"
              justify={{ base: "center", sm: "flex-end" }}
              py="3rem"
              bg={{ base: "white", sm: "transparent" }}
              height={{ base: "100vh", sm: "auto" }}
              position={{ base: "fixed", sm: "relative" }}
              width={{ base: "75vw", sm: "auto" }}
              top={{ base: 0, sm: "auto" }}
              right={{ base: showNav ? "0" : "-75vw", sm: "auto" }}
              zIndex={9998}
              className={showNav && "show2"}
              transition="all 0.2s ease-out"
            >
              {data.site.mainNavigation.map((item) => (
                <Box
                  as="li"
                  fontSize={"1.2rem"}
                  textTransform="uppercase"
                  key={item.hash.current}
                >
                  <Link
                    as={GatsbyLink}
                    to={`#${item.hash.current}`}
                    _hover={{
                      textDecoration: "none",
                      borderBottom: "1px solid",
                      borderBottomColor: "textPrimary",
                    }}
                    _focus={{ outline: "none" }}
                  >
                    {item.section.heading || "Welcome"}
                  </Link>
                </Box>
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
                  transition="all 0.2s ease-out"
                >
                  Book Now
                </Box>
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Container>
      <Grid
        templateColumns="repeat(5, 1fr)"
        templateRows="repeat(5, 1fr)"
        maxW="960px"
        px="1.6rem"
        mx="auto"
        mt="2rem"
        h={{ base: "auto", sm: "38rem" }}
      >
        <GridItem
          colSpan={{ base: 5, sm: 2 }}
          rowSpan={{ base: 2, sm: 5 }}
          transform={{ base: "none", sm: "translateX(3rem)" }}
          h={{ base: "25rem", sm: "auto" }}
          zIndex="999"
          bgImage={`
        linear-gradient(to right bottom,#f3d6d6,#f1b0c1),url(${imageUrlFor(
          buildImageObj(data.site.hero.image)
        )
          .width(600)
          .height(600)
          .format("webp")
          .url()})
          
        `}
          bgBlendMode="soft-light"
          bgSize={"cover"}
          bgPos="top 35% right 0"
        ></GridItem>
        <GridItem
          colSpan={{ base: 5, sm: 3 }}
          rowSpan={{ base: 3, sm: 5 }}
          bg="white"
          transform={{ base: "none", sm: "translateY(2rem)" }}
          p={{ base: "2rem 4rem", sm: "0 4rem 0 6rem" }}
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
                lineHeight={1.6}
              >
                {data.site.hero.heading.split("-")[1]}
              </Heading>
              <Text fontSize="1.2rem" lineHeight={"2"}>
                {data.site.hero.tagline}
              </Text>
              <Box mt="1.6rem">
                {data.site.hero.ctas.map((cta, index) => (
                  <Link
                    key={index}
                    display="inline-block"
                    href={`tel:${data.site.phoneNumber}`}
                    _hover={{
                      textDecoration: "none",
                      "& > div": {
                        bg: "textPrimary",
                      },
                    }}
                  >
                    <Box
                      bg="buttonPrimary"
                      fontSize={"1.6rem"}
                      p="1rem 2rem"
                      color="white"
                      transition="all 0.2s ease-out"
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
      <Testimonials content={data.testimonialContent} />
      <Contact />
      <Box as="footer" mt="8rem" bg="textPrimary" py="4rem">
        <Container>
          <Stack
            justify="space-between"
            color="white"
            direction={{ base: "column", sm: "row" }}
            spacing="1rem"
          >
            <Link
              href={`tel:${data.site.phoneNumber}`}
              _hover={{ textDecoration: "none" }}
            >
              <HStack>
                <Icon as={AiFillPhone} w="2rem" h="2rem" mr="1rem" />
                <Text fontSize="1.2rem">{data.site.phoneNumber}</Text>
              </HStack>
            </Link>
            <ExternalLink href={data.site.instagram}>
              <HStack>
                <Icon as={SiInstagram} w="2rem" h="2rem" mr="1rem" />
                <Text fontSize="1.2rem">
                  {data.site.instagram.split("/")[3]}
                </Text>
              </HStack>
            </ExternalLink>
            <HStack>
              <Icon as={SiGooglemaps} w="2rem" h="2rem" mr="1rem" />
              <Text fontSize="1.2rem">{data.site.address}</Text>
            </HStack>
          </Stack>
        </Container>
      </Box>
    </main>
  );
};

export default IndexPage;
