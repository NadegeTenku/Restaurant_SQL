
const {Menu, Restaurant, sequelize} = require('./Associations')

describe('Menu Database', () => {

    beforeAll(async() => {
        await sequelize.sync({force:true})
        await Menu.create({menu_name: 'Breakfast'})
    })
        
    test('menu have name', async() => {
        
        const menus = await Menu.findAll()
        expect(menus.menu_name).toBe('Breakfast')  
        //expect(testMenu instanceof Menu).toBeTruthy()
    })

 
   
})
