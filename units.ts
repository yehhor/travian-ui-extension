export class Unit {
    constructor(name: string,
                resources: { wood: number; brick: number; iron: number; crop: number },
                public imgClass: string
                ) {
        this.name = name;
        this.resources = resources;
    }
    name: string
    resources: {
        wood: number,
        brick: number,
        iron: number,
        crop: number,
    }
}

export const units = {
    imp: new Unit(
        "Империанец",
        {
            wood: 150,
            brick: 160,
            iron: 210,
            crop: 80
        },
        'u3'
    ),
    caesar: new Unit(
        "Конница Цезаря",
        {
            wood: 550,
            brick: 640,
            iron: 800,
            crop: 180,
        },
        'u6'

    ),
    taran: new Unit(
        "Таран",
        {
            wood: 900,
            brick: 360,
            iron: 500,
            crop: 70
        },
        'u7'
    ),
    cat: new Unit(
        "катапульта",
        {
            wood: 950,
            brick: 1350,
            iron: 600,
            crop: 90,
        },
        'u8'
    ),

}
