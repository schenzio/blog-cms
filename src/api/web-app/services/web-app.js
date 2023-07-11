'use strict';

/**
 * web-app service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::web-app.web-app');
