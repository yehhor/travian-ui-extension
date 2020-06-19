import {calculateOptiomalResources, getResourcesSummary} from "./resource-trader";
import {units} from "./units";

const $: JQueryStatic = window['$'];

document.querySelectorAll(
    'button.gold.exchange, ' +
    'button.gold[value="Обменять ресурсы"]',
).forEach(btn => {
    btn.addEventListener('click', e => {
        setTimeout(() => {
            const basic_table = $('#npc');
            const table = document.createElement('table')
            const tbody = document.createElement('tbody')

            table.id = 'npc'
            table.appendChild(tbody)


            Object.values(units).forEach(unit => {

                const row = document.createElement('tr');
                row.classList.add('hover')

                const resources = calculateOptiomalResources(unit);
                Object.entries(resources).filter(([key]) => key !== 'amount').forEach(([key, resource]) => {
                    const cell = document.createElement('td')
                    cell.textContent = String(resource);
                    cell.classList.add('rem')
                    row.appendChild(cell)
                })
                const cell = document.createElement('td')
                cell.innerHTML = `<img class="unit ${unit.imgClass}" src="img/x.gif"/> ${unit.name} (${resources.amount})`
                row.appendChild(cell)
                row.addEventListener('click', () => {
                    applyOptimalResource(resources, basic_table)
                })

                table.append(row)
            })
            basic_table.after(table)
        }, 500)
    })
})

function applyOptimalResource(resources: { wood: number, brick: number, iron: number, crop: number },
                              table: JQuery) {
    const resourcesArray = Object.values(resources)
    table.find('.sel input').toArray().forEach((input, index) => {
        $(input).val(resourcesArray[index + 1])
        $(input).trigger('keyup')
    })
}