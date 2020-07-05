## Create Owner

Create a single business owner.

**URL**: `/owner`

**Request body example**
```json
{
    "businesses": [],
    "firstName": "John",
    "lastName": "Doe",
    "imageURL": "https://i.pinimg.com/736x/18/45/d6/1845d65689ecc7cecfaf8f4d958a7f67.jpg",
    "description": "Hi! I run a small business in Vancouver. Looking forward to meeting you all!",
}
```

**Method**: `POST`

**Auth required**: `YES`

**Permissions required**: `NO`

### Success Response

**Condition**: If the request body aligns with schema

**Code**: `200 OK`

**Content example**
```json
{
    "success": true,
    "id": "5ef3e8b749db9440f8251185",
    "message": "Owner created!"
}
```

### Error Response

**Condition**: If such business owner does not exist

**Code**: `404 NOT FOUND`

**Content example**
```json
{
    "success": false,
    "error": "Owner not created!"
}
```

## Update Owner

Update a single business owner.

**URL**: `/owner/:id`

**URL Parameters**: `id=[int]` where `id` is the ID of the business owner

**Request body example**
```json
{
    "businesses": [],
    "firstName": "John",
    "lastName": "Doe",
    "imageURL": "https://i.pinimg.com/736x/18/45/d6/1845d65689ecc7cecfaf8f4d958a7f67.jpg",
    "description": "Hi! I run a small business in Vancouver. Looking forward to meeting you all!",
}
```

**Method**: `PUT`

**Auth required**: `YES`

**Permissions required**: `NO`

### Success Response

**Condition**: If such business owner exists and aligns with schema

**Code**: `200 OK`

**Content example**
```json
{
    "success": true,
    "id": "5ef3e8b749db9440f8251185",
    "message": "Owner updated!"
}
```

### Error Response

**Condition**: If such business owner does not exist

**Code**: `404 NOT FOUND`

**Content example**
```json
{
    "error": "",
    "message": "Owner not updated!"
}
```

## Delete Owner

Delete a single business owner.

**URL**: `/owner/:id`

**URL Parameters**: `id=[int]` where `id` is the ID of the business owner

**Method**: `DELETE`

**Auth required**: `YES`

**Permissions required**: `NO`

### Success Response

**Condition**: If such business owner exists

**Code**: `200 OK`

**Content example**
```json
{
    "success": true,
    "data": {
        "businesses": [],
        "_id": "5ef3e8b749db9440f8251185",
        "firstName": "John",
        "lastName": "Doe",
        "imageURL": "https://i.pinimg.com/736x/18/45/d6/1845d65689ecc7cecfaf8f4d958a7f67.jpg",
        "description": "Hi! I run a small business in Vancouver. Looking forward to meeting you all!",
        "createdAt": "2020-06-24T23:58:47.450Z",
        "updatedAt": "2020-06-24T23:58:47.450Z",
        "__v": 0
    }
}
```

### Error Response

**Condition**: If such business owner does not exist

**Code**: `404 NOT FOUND`

**Content example**
```json
{
    "error": "Owner not found"
}
```

## Get Owners

Get a list of business owners

**URL**: `/owners`

**Method**: `GET`

**Auth required**: `NO`

**Permissions required**: `NO`

### Success Response

**Condition**: If business owner exists

**Code**: `200 OK`

**Content example**
```json
{
    "success": true,
    "data": {
        "businesses": [],
        "_id": "5ef3e8b749db9440f8251185",
        "firstName": "John",
        "lastName": "Doe",
        "imageURL": "https://i.pinimg.com/736x/18/45/d6/1845d65689ecc7cecfaf8f4d958a7f67.jpg",
        "description": "Hi! I run a small business in Vancouver. Looking forward to meeting you all!",
        "createdAt": "2020-06-24T23:58:47.450Z",
        "updatedAt": "2020-06-24T23:58:47.450Z",
        "__v": 0
    }
}
```

### Error Response

**Condition**: If no business owner exists

**Code**: `404 NOT FOUND`

**Content example**
```json
{
    "success": false,
    "error": "Owner not found"
}
```

## Get Owner by ID

Get a single business owner's information details.

**URL**: `/owner/:id`

**URL Parameters**: `id=[int]` where `id` is the ID of the business owner

**Method**: `GET`

**Auth required**: `NO`

**Permissions required**: `NO`

### Success Response

**Condition**: If such business owner exists

**Code**: `200 OK`

**Content example**
```json
{
    "success": true,
    "data": {
        "businesses": [],
        "_id": "5ef3e8b749db9440f8251185",
        "firstName": "John",
        "lastName": "Doe",
        "imageURL": "https://i.pinimg.com/736x/18/45/d6/1845d65689ecc7cecfaf8f4d958a7f67.jpg",
        "description": "Hi! I run a small business in Vancouver. Looking forward to meeting you all!",
        "createdAt": "2020-06-24T23:58:47.450Z",
        "updatedAt": "2020-06-24T23:58:47.450Z",
        "__v": 0
    }
}
```

### Error Response

**Condition**: If such business owner does not exist

**Code**: `404 NOT FOUND`

**Content example**
```json
{
    "error": "Owner not found"
}
```
