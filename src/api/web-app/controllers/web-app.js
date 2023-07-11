'use strict';

/**
 * web-app controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::web-app.web-app');
