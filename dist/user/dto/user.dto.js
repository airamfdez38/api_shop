"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = void 0;
const openapi = require("@nestjs/swagger");
class UserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, email: { required: true, type: () => String }, phone: { required: true, type: () => String }, dni: { required: true, type: () => String } };
    }
}
exports.UserDto = UserDto;
//# sourceMappingURL=user.dto.js.map