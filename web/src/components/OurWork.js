import React from "react";
import { graphql, StaticQuery } from "gatsby";
import {
  Box,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  useFocusEffect,
} from "@chakra-ui/react";
import { imageUrlFor } from "../lib/image-url";
import { buildImageObj } from "../lib/helpers";
import Container from "./Container";
import Swiper, { Navigation, Pagination } from "swiper";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/bundle";

export default function OurWork() {
  React.useEffect(() => {
    new Swiper(".mySwiper", {
      // Optional parameters
      modules: [Pagination, Navigation],

      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,

      breakpoints: {
        // 320: {
        //   slidesPerView: 1,
        // },

        480: {
          slidesPerView: 2,
        },

        900: {
          slidesPerView: 3,
        },
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
        console.log(data.content);
        return (
          //   <RenderStuff data={data} />
          <Box as="section" id="our-work" py={{ lg: "6rem", base: "3rem" }}>
            <Container position="relative">
              <Heading
                size="2xl"
                textAlign={"center"}
                mb="6rem"
                _after={{
                  content: '""',
                  display: "block",
                  height: "1px",
                  width: "8rem",
                  background: "textPrimary",
                  margin: "2rem auto",
                }}
              >
                {data.content.heading}
              </Heading>
              <Box position="relative" mt="6rem">
                <Box
                  className="swiper mySwiper"
                  w="90%"
                  h={{ lg: "32rem", base: "32rem" }}
                  px={{ base: "2rem", sm: 0 }}
                >
                  <Box className="swiper-wrapper" h="100%">
                    {data.content.sectionContent.map((img) => (
                      <Box
                        className="swiper-slide"
                        key={img._key}
                        h="85%"
                        overflow={"hidden"}
                        bgImage={`
                linear-gradient(to right bottom,#f3d6d6,#f1b0c1),url(${imageUrlFor(
                  buildImageObj(img)
                )
                  .width(600)
                  .height(600)
                  .url()})
                  
                `}
                        bgBlendMode="soft-light"
                        bgSize={"cover"}
                      >
                        {/* <Image
                          src={imageUrlFor(buildImageObj(img))
                            .width(400)
                            .height(400)
                            .url()}
                        /> */}
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
                  left={{ lg: "-5px", base: "0" }}
                  top="45%"
                  _after={{ content: '"←"' }}
                  color="textPrimary"
                />
                <Box
                  className="swiper-button-next"
                  right={{ lg: "-5px", base: "0" }}
                  top="45%"
                  _after={{ content: '"→"' }}
                  color="textPrimary"
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
  query OurWork {
    content: sanitySection(
      hash: { hash: { current: { regex: "/our-work/" } } }
    ) {
      id
      heading
      subHeading
      sectionContent {
        ... on SanityFigure {
          _key
          _type
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
`;
