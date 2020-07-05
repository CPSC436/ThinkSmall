## Create Volunteer

Create a single business volunteer.

**URL**: `/volunteer`

**Request body example**
```json
{
    "skills": [],
    "firstName": "Jane",
    "lastName": "Doe",
    "imageURL": "https://images.unsplash.com/photo-1560252829-804f1aedf1be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "description": "Hi! I am a community volunteer. I'd love to help out!",
    "workURL": "https://unsplash.com/photos/J-Jb1niw1j0"
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
    "id": "5f011d862ebfe114bd624f41",
    "message": "Volunteer created!"
}
```

### Error Response

**Condition**: If such business volunteer does not exist

**Code**: `404 NOT FOUND`

**Content example**
```json
{
    "success": false,
    "error": "Volunteer not created!"
}
```

## Update Volunteer

Update a single business volunteer.

**URL**: `/volunteer/:id`

**URL Parameters**: `id=[int]` where `id` is the ID of the business volunteer

**Request body example**
```json
{
    "skills": [0, 1],
    "firstName": "Jane",
    "lastName": "Doe",
    "imageURL": "https://images.unsplash.com/photo-1560252829-804f1aedf1be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "description": "Hi! I am a community volunteer. I'd love to help out!",
    "workURL": "https://unsplash.com/photos/J-Jb1niw1j0"
}
```

**Method**: `PUT`

**Auth required**: `YES`

**Permissions required**: `NO`

### Success Response

**Condition**: If such business volunteer exists and aligns with schema

**Code**: `200 OK`

**Content example**
```json
{
    "success": true,
    "id": "5f011d862ebfe114bd624f41",
    "message": "Volunteer updated!"
}
```

### Error Response

**Condition**: If such business volunteer does not exist

**Code**: `404 NOT FOUND`

**Content example**
```json
{
    "error": "",
    "message": "Volunteer not updated!"
}
```

## Delete Volunteer

Delete a single business volunteer.

**URL**: `/volunteer/:id`

**URL Parameters**: `id=[int]` where `id` is the ID of the business volunteer

**Method**: `DELETE`

**Auth required**: `YES`

**Permissions required**: `NO`

### Success Response

**Condition**: If such business volunteer exists

**Code**: `200 OK`

**Content example**
```json
{
    "success": true,
    "data": {
        "skills": [],
        "_id": "5f011d862ebfe114bd624f41",
        "firstName": "Jane",
        "lastName": "Doe",
        "imageURL": "https://images.unsplash.com/photo-1560252829-804f1aedf1be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "description": "Hi! I am a community volunteer. I'd love to help out!",
        "workURL": "https://unsplash.com/photos/J-Jb1niw1j0",
        "createdAt": "2020-07-05T00:23:34.108Z",
        "updatedAt": "2020-07-05T00:23:34.108Z",
        "__v": 0
    }
}
```

### Error Response

**Condition**: If such business volunteer does not exist

**Code**: `404 NOT FOUND`

**Content example**
```json
{
    "error": "Volunteer not found"
}
```

## Get Volunteers

Get a list of business volunteers

**URL**: `/volunteers`

**Method**: `GET`

**Auth required**: `NO`

**Permissions required**: `NO`

### Success Response

**Condition**: If business volunteer exists

**Code**: `200 OK`

**Content example**
```json
{
    "success": true,
    "data": [
        {
            "skills": [],
            "_id": "5f011d862ebfe114bd624f41",
            "firstName": "Jane",
            "lastName": "Doe",
            "imageURL": "https://images.unsplash.com/photo-1560252829-804f1aedf1be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
            "description": "Hi! I am a community volunteer. I'd love to help out!",
            "workURL": "https://unsplash.com/photos/J-Jb1niw1j0",
            "createdAt": "2020-07-05T00:23:34.108Z",
            "updatedAt": "2020-07-05T00:23:34.108Z",
            "__v": 0
        }
    ]
}
```

### Error Response

**Condition**: If no business volunteer exists

**Code**: `404 NOT FOUND`

**Content example**
```json
{
    "success": false,
    "error": "Volunteer not found"
}
```

## Get Volunteer by ID

Get a single business volunteer's information details.

**URL**: `/volunteer/:id`

**URL Parameters**: `id=[int]` where `id` is the ID of the business volunteer

**Method**: `GET`

**Auth required**: `NO`

**Permissions required**: `NO`

### Success Response

**Condition**: If such business volunteer exists

**Code**: `200 OK`

**Content example**
```json
{
    "success": true,
    "data": {
        "skills": [],
        "_id": "5f011d862ebfe114bd624f41",
        "firstName": "Jane",
        "lastName": "Doe",
        "imageURL": "https://images.unsplash.com/photo-1560252829-804f1aedf1be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "description": "Hi! I am a community volunteer. I'd love to help out!",
        "workURL": "https://unsplash.com/photos/J-Jb1niw1j0",
        "createdAt": "2020-07-05T00:23:34.108Z",
        "updatedAt": "2020-07-05T00:23:34.108Z",
        "__v": 0
    }
}
```

### Error Response

**Condition**: If such business volunteer does not exist

**Code**: `404 NOT FOUND`

**Content example**
```json
{
    "error": "Volunteer not found"
}
```
