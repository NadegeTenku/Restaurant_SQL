const {sequelize} = require('./db')
const {Restaurant} = require('./Associations')

describe('Restaurant Database', () => {

    beforeAll(async() => {
        
        await sequelize.sync({force:true})
        
        const arrayOfRestaurants =[
            {restaurantName: 'Dennys', location: 'Mansfield', capacity: 50},
            {restaurantName: 'Fire Tacos', location: 'Grand Prairie', capacity: 70},
            {restaurantName: 'Jakes', location: 'Mansfield', capacity: 60}
        ]
        
        await Restaurant.bulkCreate(arrayOfRestaurants)
    })

    test('restaurants have name', async() => {
        const testRestaurant = await Restaurant.findOne({where: {name: 'Dennys'}});
        const testRestaurant = await Restaurant.findOne({where: {name: 'Jakes'}});
        expect(testRestaurant.name).toBe('Dennys')
        expect(testRestaurant.name).toBe('Jakes')
    })

    test('restaurants have capacity', async() => {
        const testRestaurant = await Restaurant.findOne({where: {capacity: 50}});
        const testRestaurant = await Restaurant.findOne({where: {capacity: 60}});
        expect(testRestaurant.capacity).toBe(50)
        expect(testRestaurant.capacity).toBe('Jakes')
    })

    // beforeAll(async() => {
        
        //  await sequelize.sync({force:true})
        
        // const arrayOfMenus =[
        //     {category: 'Breakfats', menuType: 'Kids meal'},
        //     {category: 'Lunch', menuType: 'Drimks'},
        //     {category: 'Dinner', menuType: 'Salads'}
        // ]
        
        //await Menu.bulkCreate(arrayOfMenus)

    // test('menus have name', async() => {
    //     const testMuenu = await Menu.findOne({where: {category: 'Lunch'}});
    //     const testMuenu = await Menu.findOne({where: {category: 'Dinner'}});
    //     expect(testMenu.category).toBe('Lunch')
    //     expect(testMenu.category).toBe('Dinner')
    // })

})