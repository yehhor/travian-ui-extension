import {Unit} from "./units";

const $: JQueryStatic = window['$']

const DEFAULT_SELECTOR = '[href="production.php?t='
export const resourceSelectors = {
    wood: `${DEFAULT_SELECTOR}1"]`,
    brick: `${DEFAULT_SELECTOR}2"]`,
    iron: `${DEFAULT_SELECTOR}3"]`,
    crop: `${DEFAULT_SELECTOR}4"]`,
}

export function getResourcesSummary() {
    return Object.values(resourceSelectors).reduce((summ: number, selector: string) => {
        return summ + +$(`${selector} .value`).text().replace(' ', '')
    }, 0)
}


export function calculateOptiomalResources(unit: Unit): { amount: number, wood: number, brick: number, iron: number, crop: number } {
    const summ = getResourcesSummary();
    const {wood, brick, iron, crop} = unit.resources;
    const resourcesSumm = wood + brick + iron + crop;

    const limits = getLimits()
    // wood * x + brick * x = summ
    // (wood + brick)*x = summ
    // x = summ / resourcesSumm

    const amount = Number((summ / resourcesSumm).toFixed(0))
    const optimal = {
        amount,
        wood: amount * wood,
        brick: amount * brick,
        iron: amount * iron,
        crop: amount * crop,
    }

    return optimal
    // Object.entries(optimal.resources).forEach(([key, value]) => {
    //     optimal.resources[key] = limits.resources;
    // })
}

function getLimits() {
    const resources = $('.warehouse .capacity .value').text().split('7;')[0].split('&#')[0].replace(' ', '')
    const crop = $('.granary .capacity .value').text().split('7;')[0].split('&#')[0].replace(' ', '')
    return {
        resources,
        crop
    }
}