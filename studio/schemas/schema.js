// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

import figure from './objects/figure';
import cardText from './objects/cardText';
import cta from './objects/cta';
import hero from './objects/hero';
import internalLink from './objects/internalLink';
import link from './objects/link';
import person from './objects/person';
import service from './objects/service';
import formGroup from './objects/formGroup';
import form from './objects/form';
import groupedService from './objects/groupedService';

import intro from './documents/intro';
import serviceSection from './documents/serviceSection';
import page from './documents/page';
import imageSection from './documents/imageSection';
import route from './documents/route';
import section from './documents/section';
import siteConfig from './documents/siteConfig';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'spa',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    figure,
    imageSection,
    cardText,
    cta,
    hero,
    internalLink,
    link,
    person,
    service,
    intro,
    serviceSection,
    page,
    route,
    formGroup,
    section,
    form,
    siteConfig,
    groupedService,
  ]),
});
