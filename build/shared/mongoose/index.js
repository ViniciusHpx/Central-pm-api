"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const conection = mongoose_1.default
    .connect('mongodb+srv://datalabsms:4n4rc0@cluster0.sx594ak.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
    console.log('Banco de dadods conectado !');
})
    .catch(err => {
    console.log(`Erro ao conectar ao banco de dados ${err}`);
});
exports.default = conection;
