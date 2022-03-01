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
} from "@chakra-ui/react";
import { imageUrlFor } from "../lib/image-url";
import { buildImageObj } from "../lib/helpers";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        return (
          <Box as="section" py="6rem" id="our-services">
            <Container bg="white" p="6rem 3rem">
              <SectionHeading>{data.content.heading}</SectionHeading>
              <Box bg="white">
                {data.content.sectionContent.map((section) => (
                  <Box key={section.groupedServiceTitle} mb="4rem">
                    <Heading as="h3" textAlign={"center"} mb="2rem">
                      {section.groupedServiceTitle}
                    </Heading>
                    <Grid
                      templateColumns="repeat(2, 1fr)"
                      columnGap={"4rem"}
                      rowGap="2rem"
                    >
                      {section.services.map((service) => {
                        return (
                          <GridItem key={service.groupedServiceName}>
                            <HStack
                              justify="space-between"
                              fontSize={"1.6rem"}
                              borderBottom="1px solid"
                              borderColor={"textPrimary"}
                            >
                              <Text>{service.groupedServiceName}</Text>
                              <Text>{service.groupedServicePrice}</Text>
                            </HStack>
                          </GridItem>
                        );
                      })}
                    </Grid>
                  </Box>
                ))}
              </Box>
            </Container>
          </Box>
        );
      }}
    />
  );
}

const query = graphql`
  query Services {
    content: sanitySection(
      hash: { hash: { current: { regex: "/our-services/" } } }
    ) {
      heading
      sectionContent {
        ... on SanityServiceSection {
          services {
            groupedServiceName
            groupedServicePrice
          }
          groupedServiceTitle
        }
      }
    }
  }
`;
