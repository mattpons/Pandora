# Pandora
Simple NodeJS express service with some utility endpoints

## To Run

```bash
npm install
npm start
```

## Endpoints
* GET:  /randString

 Generates a random 32 byte hex string

<br/>  
* POST:  /reverse

 Reverses a given string
 
 Example:
 ```json
 {
     "message": "text to be reversed"
 }
 ``` 
 