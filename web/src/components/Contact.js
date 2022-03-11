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
import React, { useState } from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });

  const handleServerResponse = (ok, msg, form) => {
    setServerState({ submitting: false, status: { ok, msg } });
    if (ok) {
      form.reset();
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    try {
      await fetch(
        process.env.GET_FORM_URL ||
          "https://getform.io/f/3decbcfe-cf53-49aa-9a13-872f9fc52f32",
        {
          method: "post",
          body: new FormData(form),
        }
      );

      handleServerResponse(true, "Form submission success. Thanks!", form);
      setTimeout(() => {
        setServerState({ ...serverState, status: null });
      }, 3000);
    } catch (err) {
      handleServerResponse(false, e.response.data.error, form);
      setTimeout(() => {
        setServerState({ ...serverState, status: null });
      }, 3000);
    }
  };
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
                    w="100%"
                    //   onSubmit={handleOnSubmit}
                    __css={{
                      "& > * > *:not(:last-child)": {
                        mb: "1.6rem",
                      },
                    }}
                  >
                    <form
                      data-netlify="true"
                      onSubmit={handleOnSubmit}
                      name="contact"
                      // method="POST"
                      // action="/"
                      id="form-contact"
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
                          name="phone"
                          id="phone"
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
                        type="submit"
                        _hover={{ bg: "textPrimary" }}
                      >
                        Reach out to us!
                      </Button>
                    </form>
                    {/* {serverState.status && (
                  <div className="form__msg-div">
                  <p className="form__msg u-center-text">
                  {serverState.status.msg}
                  </p>
                  </div>
                )} */}
                    {serverState.status && (
                      <Box mt="1.6rem">
                        <Text fontSize="1.6em">{serverState.status.msg}</Text>
                      </Box>
                    )}
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
