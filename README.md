# populateDOM.js

A simple JavaScript *populateDOM( form, data )* function which will populate form fields from a JSON object.

Input types (text, email, select, multiple select, etc) are taken into account but not validated.

Written with features of ES2015, based on [populate.js](https://github.com/dannyvankooten/populate.js)

## Usage

*HTML*
```html
<form id="my-form">
	<input type="text" name="name" />
	<input type="email" name="email" />

	<input type="text" name="address[addr1]" />
	<input type="text" name="address[city]" />
	<input type="text" name="address[state]" />
</form>

````

*JavaScript*
```javascript

// your JSON object
// keys have to match input names
var data = {
	"email": "john@doe.com",
	"name": "John Doe",
	"address": {
		"addr1": "Street name",
		"city": "City name",
		"state": "State"
	}
}

// your containing element
var formElement = document.getElementById('my-form');

// populate the form with our JSON object
populatedom(formElement, data);
```
See more in [example.html](./example.html)

## Contributing
See the [Contributing guide](./CONTRIBUTING.md).

## Contributors
See the awesome [contributors](./CONTRIBUTING.md).

## License
MIT licensed.
