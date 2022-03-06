import React from "react";
import { graphql, StaticQuery } from "gatsby";
import {
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  Box,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { imageUrlFor } from "../lib/image-url";
import { buildImageObj } from "../lib/helpers";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/bundle";

export default function Testimonials() {
  React.useEffect(() => {
    new Swiper(".mySwiper2", {
      // Optional parameters
      modules: [Pagination, Navigation, Autoplay],

      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      autoplay: {
        delay: 5000,
      },

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // // And if we need scrollbar
      // scrollbar: {
      //   el: ".swiper-scrollbar",
      // },
    });
  }, []);
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        return (
          <Box as="section" py="3rem" id="testimonials">
            <Container>
              <Text
                fontFamily={"Playfair Display, serif;"}
                fontWeight="700"
                fontSize="1.8rem"
                mb="0.8rem"
                color="pinkPrimary"
                textAlign={"center"}
              >
                {data.content?.subHeading}
              </Text>
              <SectionHeading>{data.content.heading}</SectionHeading>
              <Box
                bg="white"
                position="relative"
                _hover={{
                  "& > .swiper-button-prev": {
                    opacity: "1",
                    visibility: "visible",
                  },
                  "& > .swiper-button-next": {
                    opacity: "1",
                    visibility: "visible",
                  },
                }}
              >
                <Box className="swiper mySwiper2" w="100%" py="4rem">
                  <Box className="swiper-wrapper" h="100%">
                    {data.content.sectionContent.map((review) => (
                      <Box
                        className="swiper-slide"
                        key={review._key}
                        h="90%"
                        overflow={"hidden"}
                        textAlign="center"
                      >
                        <VStack
                          align="center"
                          justify={"center"}
                          h="100%"
                          px="8rem"
                        >
                          <Image
                            src={imageUrlFor(buildImageObj(review.profilePic))
                              .width(400)
                              .height(400)
                              .url()}
                            w="100px"
                            borderRadius={"50%"}
                          />
                          <Text fontSize="1.6rem" textAlign={"center"}>
                            {review.review}
                          </Text>
                          <Text color="pinkPrimary" fontSize="1.8rem">
                            {review.name} - {review.city}
                          </Text>
                        </VStack>
                      </Box>
                    ))}
                  </Box>
                  <Box
                    className="swiper-pagination"
                    __css={{
                      "& > .swiper-pagination-bullet-active": {
                        background: "buttonPrimary",
                      },
                    }}
                  />
                </Box>
                <Box
                  className="swiper-button-prev"
                  left="-30px"
                  _after={{ content: '"←"' }}
                  color="textPrimary"
                  opacity={0}
                  visibility="hidden"
                  transition="all 0.2s ease-out"
                  bg="#faefed"
                  borderRadius={"50%"}
                  p="4rem 3rem"
                  _hover={{ color: "pinkPrimary" }}
                />
                <Box
                  className="swiper-button-next"
                  right="-30px"
                  _after={{ content: '"→"' }}
                  color="textPrimary"
                  opacity={0}
                  visibility="hidden"
                  transition="all 0.2s ease-out"
                  bg="#faefed"
                  borderRadius={"50%"}
                  p="4rem 3rem"
                  _hover={{ color: "pinkPrimary" }}
                />
              </Box>
            </Container>
          </Box>
        );
      }}
    />
  );
}

const query = graphql`
  query Testimonials {
    content: sanitySection(
      hash: { hash: { current: { regex: "/testimonials/" } } }
    ) {
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
