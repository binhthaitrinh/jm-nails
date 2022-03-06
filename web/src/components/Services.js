import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { Grid, GridItem, Heading, Text, Box, HStack } from "@chakra-ui/react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        return (
          <Box as="section" py={{ lg: "6rem", base: "3rem" }} id="our-services">
            <Container>
              <Box bg="white" p="6rem 3rem">
                <SectionHeading>{data.content.heading}</SectionHeading>
                <Box bg="white">
                  {data.content.sectionContent.map((section) => (
                    <Box key={section.groupedServiceTitle} mb="4rem">
                      <Heading as="h3" textAlign={"center"} mb="2rem">
                        {section.groupedServiceTitle}
                      </Heading>
                      <Grid
                        templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }}
                        columnGap={"4rem"}
                        rowGap="2rem"
                      >
                        {section.services.map((service, index) => {
                          return (
                            <GridItem
                              key={`${service.groupedServiceName}${service.groupedServicePrice}-${index}`}
                            >
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
