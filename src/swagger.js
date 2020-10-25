import expressOasGenerator from 'express-oas-generator';

export default (app) => {
    expressOasGenerator.init(app, {});
};
