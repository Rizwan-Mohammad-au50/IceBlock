"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../public/images")));
app.get("/", (req, res) => {
    console.log(path_1.default.join(__dirname, "../public"));
    const foodData = [
        {
            name: "Chocolate",
            price: 100,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/Chocolate.png",
            type: "chocolate",
        },
        {
            name: "Vanilla",
            price: 250,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/Vanilla.png",
            type: "lunch",
        },
        {
            name: "Strawberry",
            price: 450,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/Strawberry.png",
            type: "creamy",
        },
        {
            name: "Mint Chocolate Chip",
            price: 180,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/MintChocolateChip.png",
            type: "chocolate",
        },
        {
            name: "Butter Pecan",
            price: 230,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/ButterPecan.png",
            type: "butter",
        },
        {
            name: "Chocolate Chip Cookie Dough",
            price: 250,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/ChocolateChipCookieDough.png",
            type: "chocolate",
        },
        {
            name: "Cookies n' Cream",
            price: 250,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/Cookiesn'Cream.png",
            type: "dinner",
        },
        {
            name: "Coffee",
            price: 250,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/Coffee.png",
            type: "creamy",
        },
        {
            name: "Chocolate Chip",
            price: 250,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/ChocolateChip.png",
            type: "chocolate",
        },
        {
            name: "Pistachio",
            price: 250,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/Pistachio.png",
            type: "dinner",
        },
        {
            name: "Neapolitan",
            price: 250,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/Neapolitan.png",
            type: "creamy",
        },
        {
            name: "Salted Caramel",
            price: 250,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/SaltedCaramel.png",
            type: "dinner",
        },
        {
            name: "Butterscotch",
            price: 250,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/Butterscotch.png",
            type: "butter",
        },
        
    ];
    res.json(foodData);
});

app.listen(9000, () => {
    console.log("Server is running on port 9000");
});
//# sourceMappingURL=index.js.map