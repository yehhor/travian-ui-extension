"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Unit = /** @class */ (function () {
    function Unit(name, resources) {
        this.name = name;
        this.resources = resources;
    }
    return Unit;
}());
exports.Unit = Unit;
exports.units = {
    imp: new Unit("Империанец", {
        wood: 150,
        brick: 160,
        iron: 210,
        crop: 80
    }),
    caesar: new Unit("Конница Цезаря", {
        wood: 550,
        brick: 640,
        iron: 800,
        crop: 180
    }),
    taran: new Unit("Таран", {
        wood: 900,
        brick: 360,
        iron: 500,
        crop: 70
    }),
    cat: new Unit("Империанец", {
        wood: 950,
        brick: 1350,
        iron: 600,
        crop: 90
    }),
};
