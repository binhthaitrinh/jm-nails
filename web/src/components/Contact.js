import {
  Box,
  Button,
  FormControl,
  Grid,
  GridItem,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { graphql, StaticQuery } from "gatsby";
import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <StaticQuery
      query={query}
      render={(data) => (
        <Box as="section" id="contact-us" mt="6rem">
          <Container>
            <Grid
              templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }}
              bg="primary"
            >
              <GridItem>
                <VStack
                  px="6rem"
                  py="4rem"
                  align="center"
                  justifyContent="center"
                  h="100%"
                >
                  <Text
                    fontFamily={"Playfair Display, serif;"}
                    fontWeight="700"
                    fontSize="1.4rem"
                    mb="0.4rem"
                    color="pinkPrimary"
                    textAlign={"center"}
                    lineHeight={1.2}
                  >
                    {data.content.subHeading}
                  </Text>
                  <SectionHeading mb="2rem" fontSize={"3.2rem"}>
                    {data.content.heading}
                  </SectionHeading>
                  <Box
                    as="form"
                    w="100%"
                    //   onSubmit={handleOnSubmit}
                    className="form"
                    autoComplete="new-password"
                    __css={{
                      "& > *:not(:last-child)": {
                        mb: "1.6rem",
                      },
                    }}
                  >
                    <FormControl>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        required
                        placeholder="Enter your name..."
                        bg="white"
                        outline="none"
                        border="none"
                        borderRadius={0}
                        size="lg"
                        fontSize="1.6rem"
                        height="auto"
                        padding="1.2rem 1rem"
                      />
                    </FormControl>
                    <FormControl>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder="Enter your email..."
                        bg="white"
                        outline="none"
                        border="none"
                        borderRadius={0}
                        size="lg"
                        fontSize="1.6rem"
                        height="auto"
                        padding="1.2rem 1rem"
                      />
                    </FormControl>
                    <FormControl>
                      <Input
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        required
                        placeholder="Enter your phone number..."
                        bg="white"
                        outline="none"
                        border="none"
                        borderRadius={0}
                        size="lg"
                        fontSize="1.6rem"
                        height="auto"
                        padding="1.2rem 1rem"
                      />
                    </FormControl>

                    <Button
                      size="lg"
                      bg="buttonPrimary"
                      color="white"
                      borderRadius={0}
                      height="auto"
                      padding="1.6rem 1.6rem"
                      fontSize={"1.2rem"}
                      _hover={{ bg: "textPrimary" }}
                    >
                      Reach out to us!
                    </Button>
                    {/* {serverState.status && (
                  <div className="form__msg-div">
                  <p className="form__msg u-center-text">
                  {serverState.status.msg}
                  </p>
                  </div>
                )} */}
                  </Box>
                </VStack>
              </GridItem>
              <GridItem display={{ base: "none", sm: "block" }}>
                <Box
                  h="480px"
                  w="100%"
                  bgImage={`linear-gradient(to right bottom,#f3d6d6,#f1b0c1),url(${imageUrlFor(
                    buildImageObj(data.content.sectionContent[0].photo)
                  )
                    .width(400)
                    .height(400)
                    .format("webp")
                    .url()})`}
                  bgBlendMode="soft-light"
                  bgSize={"cover"}
                ></Box>
              </GridItem>
            </Grid>
          </Container>
        </Box>
      )}
    />
  );
}

const query = graphql`
  query Contact {
    content: sanitySection(
      hash: { hash: { current: { regex: "/contact/" } } }
    ) {
      heading
      subHeading
      sectionContent {
        ... on SanityForm {
          _key
          _type
          photo {
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
              _type
              height
              width
              x
              y
            }
          }
        }
      }
    }
  }
`;
