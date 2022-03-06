import React from "react";
import { graphql, StaticQuery } from "gatsby";
import {
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { imageUrlFor } from "../lib/image-url";
import { buildImageObj } from "../lib/helpers";
import Container from "./Container";

export default function Welcome() {
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        const card1 = data.content.sectionContent[0];
        const image = data.content.sectionContent[1];
        const card2 = data.content.sectionContent[2];
        console.log(data.content);
        return (
          <section id="welcome">
            <Container>
              <Grid
                // h="280px"
                templateColumns={{ base: "1fr", sm: "repeat(3, 1fr)" }}
                templateRows={{ base: "repeat(3, 1fr)", sm: "1fr" }}
                py={{ lg: "6rem", base: "3rem" }}
                mt={{ lg: "6rem", base: "3rem" }}
                gap={{ lg: "2rem", base: "2rem", sm: "1rem" }}
                px={{ base: "3rem", sm: "0" }}
              >
                <GridItem
                  colSpan={1}
                  display="flex"
                  alignItems={"center"}
                  justifyContent="center"
                  flexDir="column"
                  textAlign="center"
                  px={{ lg: "3rem", base: "1.6rem" }}
                  py={{ lg: "8rem", base: "4rem" }}
                  rowSpan={1}
                  bg="white"
                >
                  <Heading
                    dangerouslySetInnerHTML={{ __html: card1.heading }}
                  />
                  <Divider my="1rem" borderColor="textPrimary" w="50%" />
                  <Text
                    dangerouslySetInnerHTML={{ __html: card1.text }}
                    fontSize="1.4rem"
                  />
                </GridItem>
                <GridItem
                  colSpan={1}
                  rowSpan={1}
                  h={{ base: "30rem", sm: "auto" }}
                  w="100%"
                  bgImage={`
                linear-gradient(to right bottom,#f3d6d6,#f1b0c1),url(${imageUrlFor(
                  buildImageObj(image)
                )
                  .width(600)
                  .height(600)
                  .url()})
                  
                `}
                  bgBlendMode="soft-light"
                  bgSize={"cover"}
                ></GridItem>
                <GridItem
                  colSpan={1}
                  display="flex"
                  alignItems={"center"}
                  justifyContent="center"
                  flexDir="column"
                  textAlign="center"
                  px={{ lg: "3rem", base: "1.6rem" }}
                  bg="primary"
                  rowSpan={1}
                >
                  <Heading
                    dangerouslySetInnerHTML={{ __html: card2.heading }}
                  />
                  <Divider my="1rem" borderColor="textPrimary" w="50%" />
                  <Text
                    dangerouslySetInnerHTML={{ __html: card2.text }}
                    fontSize="1.4rem"
                  />
                </GridItem>
              </Grid>
            </Container>
          </section>
        );
      }}
    />
  );
}

const query = graphql`
  query WelcomeContent {
    content: sanitySection(
      hash: { hash: { current: { regex: "/welcome/" } } }
    ) {
      sectionContent {
        ... on SanityCardText {
          _key
          _type
          heading
          text
        }
        ... on SanityFigure {
          _key
          _type
          alt
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
          asset {
            _id
          }
          caption
        }
      }
    }
  }
`;
