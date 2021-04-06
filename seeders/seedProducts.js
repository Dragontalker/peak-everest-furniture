const mongoose = require('mongoose');
const Product = require('../app/db/models/products');

mongoose.connect(
    'mongodb://localhost/mernCommerce',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
);

const productSeed = [
    {
        "heading": "Bekant Desk",
        "description": "Black Staineed ash vaneer/black. 63x31 1/2\" (160x80cm)\n\nThis sturdy desk is built to outlast years of coffee and hard work. You get a generous work surface and a clever solution to keep cords in place underneath.",
        "image": [
            "https://www.ikea.com/ca/en/images/products/bekant-desk-black-stained-ash-veneer-black__0736414_pe740529_s5.jpg", 
            "https://www.ikea.com/ca/en/images/products/bekant-desk-black-stained-ash-veneer-black__0853167_pe714690_s5.jpg",
            "https://www.ikea.com/ca/en/images/products/bekant-desk-black-stained-ash-veneer-black__0735086_pe739739_s5.jpg",
            "https://www.ikea.com/ca/en/images/products/bekant-desk-black-stained-ash-veneer-black__0855886_pe714484_s5.jpg"
        ],
        "price": 219.00,
        "rating": 3,
        "reviews": [ 
            { "name": "Fil", "rating": 4, "review": "Was awesome" },
            { "name": "Jane", "rating": 2, "review": "Broke after second use, returned." }
        ]
    },
    {
        "heading": "Mittback Trestle",
        "description": "Birch. 22 7/8x27 1/2/36 5/8\" (58x70/93cm)\n\nMITTBACK trestle has a tilt function that helps you get the comfort you need to unleash your creativity when you work from home or enjoy a hobby.\n\nSolid wood is a durable natural material.",
        "image": [
            "https://www.ikea.com/ca/en/images/products/mittback-trestle-birch__0977887_pe813909_s5.jpg",
            "https://www.ikea.com/ca/en/images/products/mittback-trestle-birch__1012807_ph176805_s5.jpg",
            "https://www.ikea.com/ca/en/images/products/mittback-trestle-birch__1012823_ph176804_s5.jpg",
            "https://www.ikea.com/ca/en/images/products/mittback-trestle-birch__0984095_pe816157_s5.jpg"
        ],
        "price": 45.00,
        "rating": 0,
        "reviews": []
    },
    {
        "heading": "Linnmon Adils Table",
        "description": "White, 39 3/8x23 5/8\" (100x60cm)\n\nPre-drilled leg holes for easy assembly.\n\nAdjustable feet allow you to level the table on uneven floors.",
        "image": [
            "https://www.ikea.com/ca/en/images/products/linnmon-adils-table-white__0737165_pe740925_s5.jpg"
        ],
        "price": 29.99,
        "rating": 4.5,
        "reviews": []
    },
    {
        "heading": "Renberget Swivel Chair",
        "description": "Bomstad black\n\nThis desk chair has adjustable tilt tension that allows you to adjust the resistance to suit your movements and weight.\n\nYou sit comfortably since the chair is adjustable in height. ",
        "image": [
            "https://www.ikea.com/ca/en/images/products/renberget-swivel-chair-bomstad-black__0724701_pe734583_s5.jpg",
            "https://www.ikea.com/ca/en/images/products/renberget-swivel-chair-bomstad-black__0754785_pe748094_s5.jpg",
            "https://www.ikea.com/ca/en/images/products/renberget-swivel-chair-bomstad-black__0456923_pe604449_s5.jpg",
            "https://www.ikea.com/ca/en/images/products/renberget-swivel-chair-bomstad-black__0456921_pe604444_s5.jpg"
        ],
        "price": 59.99,
        "rating": 4,
        "reviews": [
            { "name": "Adam", "rating": 4, "review": "Works well enough, but I don't like the armrests" }
        ]
    },
    {
        "heading": "Adde Chair",
        "description": "Black\n\nYou can stack the chairs, so they take less space when you're not using them.\n\nThis chair has been tested for home use and meets the requirements for durability and safety, set forth in the following standards: EN 12520 and EN 1022.",
        "image": [
            "https://www.ikea.com/ca/en/images/products/adde-chair-black__0728277_pe736167_s5.jpg",
            "https://www.ikea.com/ca/en/images/products/adde-chair-black__0872134_pe716740_s5.jpg",
            "https://www.ikea.com/ca/en/images/products/adde-chair-black__0872127_pe594887_s5.jpg",
            "https://www.ikea.com/ca/en/images/products/adde-chair-black__0947776_pe798637_s5.jpg"
        ],
        "price": 16.00,
        "rating": 0,
        "reviews": []
    },
    {
        "heading": "Markus Office Chair",
        "description": "Vissle dark grey\n\n10-year Limited Warranty. Read about the terms in the Limited Warranty brochure.\n\nThe adjustable and lockable tilt function increases stability and control in different sitting positions.",
        "image": [
            "https://www.ikea.com/ca/en/images/products/markus-office-chair-vissle-dark-gray__0724714_pe734597_s5.jpg",
            "https://www.ikea.com/ca/en/images/products/markus-office-chair-vissle-dark-gray__0399810_pe563882_s5.jpg",
            "https://www.ikea.com/ca/en/images/products/markus-office-chair-vissle-dark-gray__0404191_pe566310_s5.jpg",
            "https://www.ikea.com/ca/en/images/products/markus-office-chair-vissle-dark-gray__0491538_pe625202_s5.jpg"
        ],
        "price": 169.00,
        "rating": 4.5,
        "reviews": []
    }
]

Product.insertMany(productSeed);