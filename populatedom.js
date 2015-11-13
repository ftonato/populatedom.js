'use strict';
/*! populateDOM.js v.1.0 by @ftonato forked from @dannyvankooten | MIT license */

/**
  * Populate form fields from a JSON object.
  *
  * @param form object The form element containing your input fields.
  * @param data array JSON data to populate the fields with.
  * @param basename string Optional basename which is added to `name` attributes
**/
export default function populateDOM( form, data, basename) {

  for(let key in data) {
    if( ! data.hasOwnProperty( key ) ) {
      continue;
    }

    let name = key;
    let value = data[key];

    // handle array name attributes
    if(typeof(basename) !== "undefined") {
      name = basename + "[" + key + "]";
    }

    if(Array.isArray(value)) {
      name += '[]';
    } else if(typeof value == "object") {
      populateDOM( form, value, name);
      continue;
    }

    // only proceed if element is set
    let element = form.elements.namedItem( name );
    if( ! element ) {
      continue;
    }

    // check element type
    switch(element.type || element.constructor ) {
      default:
        element.value = value;
      break;

      case RadioNodeList:
        for( let j=0; j < element.length; j++ ) {
          element[j].checked = ( value.indexOf(element[j].value) > -1 );
        }
      break;

      case 'select-multiple':
        let values = value.constructor == Array ? value : [value];

        for(let k = 0; k < element.options.length; k++) {
          element.options[k].selected |= (values.indexOf(element.options[k].value) > -1 );
        }
      break;

      case 'select':
      case 'select-one':
        element.value = value.toString() || value;
      break;

    } // end switch
  } // end for
} // end module
