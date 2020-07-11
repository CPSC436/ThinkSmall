db.users.insertMany([
    {
        _id: ObjectId('5f0932a99eeb33d77955d15b'),
        givenName: 'John',
        familyName: 'Doe',
        email: 'jdoe@mail.io',
        imageUrl: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        description: 'Hi! I run a small business in Vancouver. Looking forward to meeting you all!',
    }, {
        _id: ObjectId('5f0932a99eeb33d77955d15c'),
        givenName: 'Jane',
        familyName: 'Doe',
        email: 'jdoe@mail.io',
        phone: '(604)604-6040',
        imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        supplementaryUrl: 'https://unsplash.com/photos/6W4F62sN_yI',
        description: 'Hi everyone! I\'m a photographer :)',
        tags: [{ label: 'Photographer' }],
        owns: [
            {
                _id: ObjectId('5f04a784073af3659c1b0951'),
                storeName: 'Tenth and Proper',
                storeOwner: 'Marion Fudge',
                location: '4483 W 10th Ave, Vancouver',
                lat: 49.264100,
                lng: -123.209000,
                description: 'Tenth & Proper, a unique fashion and lifestyle boutique specializing in beautifully crafted casual wear for women.',
                requests: [0],
                tags: [{ label: 'Call for Designers' }, { label: 'Clothing' }],
            }
        ],
        tasks: [
            {
                _id: ObjectId('5f04e72670a68be788efaf5e'),
                business: 'Hunter & Hare',
                details: 'We need photos of our store!',
                tags: [{ label: 'Call for Photographer' }],
                status: 'In Progress',
            }
        ],
        requests: [
            {
                _id: ObjectId('5f04e72670a68be788efaf60'),
                business: 'Tenth and Proper',
                details: 'We need a logo for our website!',
                tags: [{ label: 'Call for Designers' }],
                status: 'To Do',
            }
        ],
        available: true,
    }
]);
