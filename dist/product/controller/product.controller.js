"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const product_entity_1 = require("../entity/product.entity");
const product_service_1 = require("../service/product.service");
const swagger_1 = require("@nestjs/swagger");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    findAll() {
        const product = [
            {
                uuid: 1,
                name: "producto 1",
                description_short: "descripcion corta",
                description_long: "descripcion larga",
                price: 50,
                stock: 10,
                img_featured: "",
                isActive: true
            }
        ];
        return product;
    }
    findById(uuid) {
        const product = {
            uuid: 1,
            name: "producto 1",
            description_short: "descripcion corta",
            description_long: "descripcion larga",
            price: 50,
            stock: 10,
            img_featured: "",
            isActive: true
        };
        return product;
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("../entity/product.entity").Product] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ProductController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':uuid'),
    openapi.ApiResponse({ status: 200, type: require("../entity/product.entity").Product }),
    __param(0, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", product_entity_1.Product)
], ProductController.prototype, "findById", null);
ProductController = __decorate([
    (0, swagger_1.ApiTags)("Products"),
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map