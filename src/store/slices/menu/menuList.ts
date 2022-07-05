type TCategoryMenu = 'burgers' | 'sides' | 'drinks'

export interface IMenu {
    id: number
    category: TCategoryMenu
    name: string
    description: string
    price: number
    img: string
}

const menuList: IMenu[] = [
    {
        id: 1,
        category: 'burgers',
        name: 'Burger Dreams',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore commodi voluptate eum?',
        price: 9.20,
        img: 'https://assets.website-files.com/5e865e09d8efa3d64d76b59d/5e865e09d8efa3676276b5cd_Burger%2003.png'
    },
    {
        id: 2,
        category: 'burgers',
        name: 'Burger Waldo',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore commodi voluptate eum?',
        price: 10.00,
        img: 'https://assets.website-files.com/5e865e09d8efa3d64d76b59d/5e865e09d8efa3b2e676b5b5_Burger%2008.png'
    },
    {
        id: 3,
        category: 'burgers',
        name: 'Burger Cali',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore commodi voluptate eum?',
        price: 8.00,
        img: 'https://assets.website-files.com/5e865e09d8efa3d64d76b59d/5e865e09d8efa36d8576b5b4_Burger%2004.png'
    },
    {
        id: 4,
        category: 'burgers',
        name: 'Burger Bacon Buddy',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore commodi voluptate eum?',
        price: 9.99,
        img: 'https://assets.website-files.com/5e865e09d8efa3d64d76b59d/5e865e09d8efa3650476b5b3_Burger%2006.png'
    },
    {
        id: 5,
        category: 'burgers',
        name: 'Burger Spicy',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore commodi voluptate eum?',
        price: 9.20,
        img: 'https://assets.website-files.com/5e865e09d8efa3d64d76b59d/5e865e09d8efa33f0276b5b2_Burger%2002.png'
    },
    {
        id: 6,
        category: 'burgers',
        name: 'Burger Classic',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore commodi voluptate eum?',
        price: 8.00,
        img: 'https://assets.website-files.com/5e865e09d8efa3d64d76b59d/5e865e09d8efa343f176b5b1_Burger%2001.png'
    },
    {
        id: 7,
        category: 'sides',
        name: 'Salad Ceaser',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore commodi voluptate eum?',
        price: 6.00,
        img: 'https://assets.website-files.com/5e865e09d8efa3d64d76b59d/5e865e09d8efa30d7276b5ac_Side%2006.png'
    },
    {
        id: 8,
        category: 'sides',
        name: 'Beans Slow Cooked',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore commodi voluptate eum?',
        price: 4.00,
        img: 'https://assets.website-files.com/5e865e09d8efa3d64d76b59d/5e865e09d8efa360e276b609_Side%2005.png'
    },
    {
        id: 9,
        category: 'sides',
        name: 'Fries Cheese',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore commodi voluptate eum?',
        price: 5.00,
        img: 'https://assets.website-files.com/5e865e09d8efa3d64d76b59d/5e865e09d8efa352fc76b5e1_Side%2002.png'
    },
    {
        id: 10,
        category: 'sides',
        name: 'Fries Rustic',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore commodi voluptate eum?',
        price: 4.00,
        img: 'https://assets.website-files.com/5e865e09d8efa3d64d76b59d/5e865e09d8efa33ebb76b5f5_Side%2003.png'
    },
    {
        id: 11,
        category: 'drinks',
        name: 'Drink Fig & Lime',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore commodi voluptate eum?',
        price: 4.00,
        img: 'https://assets.website-files.com/5e865e09d8efa3d64d76b59d/5e865e09d8efa3409976b5b0_Drink%201.png'
    },
    {
        id: 12,
        category: 'drinks',
        name: 'Drink Liquor',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore commodi voluptate eum?',
        price: 7.00,
        img: 'https://assets.website-files.com/5e865e09d8efa3d64d76b59d/5e865e09d8efa30dc176b5af_Drink%202.png'
    },
    {
        id: 13,
        category: 'drinks',
        name: 'Drink Lime',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore commodi voluptate eum?',
        price: 4.00,
        img: 'https://assets.website-files.com/5e865e09d8efa3d64d76b59d/5e865e09d8efa3f65176b5ae_Drink%204.png'
    },
    {
        id: 14,
        category: 'drinks',
        name: 'Drink Cola',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore commodi voluptate eum?',
        price: 3.00,
        img: 'https://assets.website-files.com/5e865e09d8efa3d64d76b59d/5e865e09d8efa3145f76b5ad_Drink%203.png'
    },
]

export default menuList