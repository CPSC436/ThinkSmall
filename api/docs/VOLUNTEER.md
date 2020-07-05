## Create Volunteer

**URL**: `/volunteer`

**Method**: `GET`

**Auth required**: `NO`

**Permissions required**: `NO`

### Success Response

**Code**: `200 OK`

**Content example**

```json
{
    "firstName": "Jane",
    "lastName": "Doe",
    "imageURL": "https://images.unsplash.com/photo-1560252829-804f1aedf1be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "description": "Hi! I am a community volunteer. I'd love to help out!",
    "workURL": "https://unsplash.com/photos/J-Jb1niw1j0"
}
```

### Success Response
```json
{
    "success": true,
    "id": "5f011d862ebfe114bd624f41",
    "message": "Volunteer created!"
}
```

## Update Volunteer

## Delete Volunteer

## Get Volunteers

**URL**: `/volunteers`

**Method**: `GET`

**Auth required**: `NO`

**Permissions required**: `NO`

### Success Response

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

**Condition**: If no volunteer exists

**Code**: `404 NOT FOUND`

**Content example**
```json
{
    "success": false,
    "error": "Volunteer not found"
}
```

## Get Volunteer by ID
