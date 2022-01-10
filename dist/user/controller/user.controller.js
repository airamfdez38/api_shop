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
exports.UserController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../entity/user.entity");
const swagger_1 = require("@nestjs/swagger");
let UserController = class UserController {
    findAll() {
        const user = [
            {
                id: 1,
                name: "Aitana",
                surname: "Fdez Sanchez",
                email: "aitana@gmail.com",
                phone: "612345678",
                dni: "123456789S",
                isActive: true,
            },
            {
                id: 2,
                name: "Miriam",
                surname: "Fdez Garrido",
                email: "miriam@gmail.com",
                phone: "612345678",
                dni: "123456789S",
                isActive: true,
            },
            {
                id: 3,
                name: "Claudia",
                surname: "Fdez Garrido",
                email: "claudia@gmail.com",
                phone: "612345678",
                dni: "123456789S",
                isActive: true,
            }
        ];
        return user;
    }
    findById(uuid) {
        return {
            id: 3,
            name: "Claudia",
            surname: "Fdez Garrido",
            email: "claudia@gmail.com",
            phone: "612345678",
            dni: "123456789S",
            isActive: true,
        };
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("../entity/user.entity").User] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], UserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':uuid'),
    openapi.ApiResponse({ status: 200, type: require("../entity/user.entity").User }),
    __param(0, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", user_entity_1.User)
], UserController.prototype, "findById", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)("Users"),
    (0, common_1.Controller)('user')
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map