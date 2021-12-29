"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDto = void 0;
const openapi = require("@nestjs/swagger");
class ProductDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, description_short: { required: true, type: () => String }, description_long: { required: true, type: () => String }, price: { required: true, type: () => Number }, stock: { required: true, type: () => Number }, img_featured: { required: true, type: () => String } };
    }
}
exports.ProductDto = ProductDto;
//# sourceMappingURL=product.dto.js.map