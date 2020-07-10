export const styles = {
    active: {
        backgroundColor: '#fafafa',
        cursor: 'pointer',
        padding: '7.5px 10px',
        fontSize: 'small',
        borderRadius: 4,
    },
    inactive: {
        backgroundColor: '#ffffff',
        cursor: 'pointer',
        padding: '7.5px 10px',
        fontSize: 'small',
        borderRadius: 4,
    },
}

export const defaultUser = {
    _id: '5f0679f17066fb7fe4dcbbcd',
    owns: [
        {
            _id: '5f04d613ff0fd1d3c71b3664',
            requests: [],
            tags: [],
            storeName: 'Mercante',
            imageUrl: 'https://thinksmall.s3-ca-central-1.amazonaws.com/jaQxNBDzomgSB5yLbqJ4n2.jpeg',
            storeOwner: 'Dummy Name',
            location: 'Mercante, University Boulevard, UBC, Vancouver, BC, Canada',
            lat: 49.263731,
            lng: -123.255166,
            description: 'Cozy, relaxed dining option at UBC offering artisanal pizzas, salads, pasta & desserts.',
            createdAt: '2020-07-07T20:07:47.961Z',
            updatedAt: '2020-07-07T20:07:47.961Z',
            __v: 0,
        },
    ],
    tags: [
        { label: 'Photographer' },
    ],
    requests: [
        {
            _id: '5f04e72670a68be788efaf60',
            business: 'Hunter & Hare',
            details: 'We need a logo for our website!',
            tags: [
                {
                    label: 'Call for Designers',
                },
            ],
            status: 'todo',
        },
    ],
    assigned: [
        {
            _id: '5f04e72670a68be788efaf60',
            business: 'Hunter & Hare',
            details: 'We need a logo for our website!',
            tags: [
                {
                    label: 'Call for Designers',
                },
            ],
            status: 'todo',
        },
    ],
    available: true,
    givenName: 'Jane',
    familyName: 'Doe',
    email: 'jdoe@mail.io',
    imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
    supplementaryUrl: 'https://unsplash.com/photos/6W4F62sN_yI',
    description: 'Hi everyone! I\'m a photographer :)',
    createdAt: '2020-07-09T01:59:13.408Z',
    updatedAt: '2020-07-09T01:59:13.408Z',
    __v: 0,
}

export const defaultNeeds = [
    { label: 'Call for Designers' },
    { label: 'Clothing' },
    { label: 'Call for Logo Design' },
    { label: 'Call for Delivery Personnel' },
    { label: 'Food' },
    { label: 'Call for Translators' },
    { label: 'Music Retail' },
    { label: 'Italian' },
]

export const defaultSkills = [
    { label: 'Web Design' },
    { label: 'Logo Design' },
    { label: 'Speaks Korean' },
    { label: 'Chef' },
    { label: 'Delivery' },
    { label: 'Speaks German' },
    { label: 'Food Designer' },
]

export const defaultConversations = [
    {
        id: 0,
        channel: true,
        title: 'general',
        messages: [],
    },
    {
        id: 1,
        channel: true,
        title: 'announcements',
        messages: [],
    },
    {
        id: 2,
        channel: true,
        title: 'daebak',
        messages: [
            {
                id: 0,
                message: 'Hi, there!',
                timestamp: '12:03 PM',
                comments: [
                    { id: 1, message: 'Hello', timestamp: '12:05 PM' },
                    { id: 2, message: 'Hey!', timestamp: '12:07 PM' },
                ],
            },
            {
                id: 1,
                message: 'Hello!',
                timestamp: '12:05 PM',
            },
            {
                id: 2,
                message: 'Hi.',
                timestamp: '12:17 PM',
            },
            {
                id: 3,
                message: 'Hey there!',
                timestamp: '12:23 PM',
                comments: [
                    { id: 0, message: 'Run Forrest, run!', timestamp: '12:27 PM' },
                ],
            },
        ],
    },
    {
        id: 3,
        channel: false,
        title: 'Alice Kim',
        messages: [
            {
                id: 0,
                message: 'Hi, there!',
                timestamp: '12:03 PM',
                comments: [
                    { id: 1, message: 'Hello', timestamp: '12:05 PM' },
                    { id: 2, message: 'Hey!', timestamp: '12:07 PM' },
                ],
            },
            {
                id: 1,
                message: 'Hello!',
                timestamp: '12:05 PM',
            },
            {
                id: 0,
                message: 'How\'s your project going?',
                timestamp: '12:17 PM',
            },
        ],
    },
]

export const defaultRequests = [
    {
        business: 'Tenth and Proper',
        details: 'We need a logo for our website!',
        tags: ['Call for Designers'],
    },
    {
        business: 'Hunter & Hare',
        details: 'We need a driver to pick up clothes!',
        tags: ['Call for Drivers'],
    },
    {
        business: 'Hunter & Hare',
        details: 'We need a logo for our website!',
        tags: ['Call for Designers'],
    },
]

export const defaultTags = [
    { label: 'Call for Designers', selected: false },
    { label: 'Call for Developers', selected: false },
    { label: 'Call for Translators', selected: false },
    { label: 'Call for Drivers', selected: false },
    { label: 'Call for Writers', selected: false },
]
