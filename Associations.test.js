const {sequelize} = require('./db')
const {Restaurant, Menu, sequelize} = require('./Associations')

describe('Restaurant Database', () => {

    beforeAll(async() => {
        //resets database evrytime the code is run. force true ensures that new tables are created
        await sequelize.sync({force:true})
        
        const arrayOfRsetaurants = [
            {restaurantName: 'Dennys', location: 'Mansfield', capacity: 100},
            {restaurantName: 'Fire Tacos', Capacity: 'Grand Prairie', capacity: 70},
            {restaurantName: 'Jakes', Capacity: 'Mansfield', capacity: 120}
        ]
        
        // const arrayOfMenuss =[
        //     {category: 'Breakfats', menuType: 'Kids meal'},
        //     {category: 'Lunch', menuType: 'Drimks'},
        //     {category: 'Dinner', menuType: 'Salads'}
        // ]
        
        await Restaurant.bulkCreate(arrayOfRestaurants)
        //await Menu.bulkCreate(arrayOfMenus)
    })

    test('restaurants have name', async() => {
        const testRestaurant = await Restaurant.findOne({where: {name: 'Dennys'}});
        const testRestaurant = await Restaurant.findOne({where: {name: 'Jakes'}});
        expect(testRestaurant.name).toBe('Dennys')
        expect(testRestaurant.name).toBe('Jakes')
    })

    // test('menus have name', async() => {
    //     const testMuenu = await Menu.findOne({where: {name: 'Prince'}});
    //     expect(testMenuname).toBe('Prince')
    // })

    // test('musicians have an instrument', async() => {
    //     //read test Musician instance from db
    //     const testMusician = await Musician.findOne({where: {name: 'Prince'}});
    //     expect(testMusician.instrument).toBe('all')
    // })

    // test('can create a band', async() => {
    //     //read test Band instance from db
    //     const testBand = await Band.findOne({where: {name: 'Beatles'}});
    //     expect(testBand.genre).toBe('pop')
    // })

    

})