import Form from 'react-bootstrap/Form';
import { useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import scriptLoader from "react-async-script-loader";


const Search = ({ isScriptLoaded, isScriptLoadSucceed }) => {

  const [address, setAddress] = useState("");

  const handleChange = (value) => {
    setAddress(value)
  }

  const handleSelect = (value) => {
    setAddress(value)
  }

  if (isScriptLoaded && isScriptLoadSucceed) {
    return (
      <div>
        <PlacesAutocomplete
          value={address}
          onChange={handleChange}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
              <Form className="form-container">
                <Form.Group className="w-50 mt-4 mb-2" controlId="formBasicEmail">
                  <Form.Control 
                    className='locator'
                    {...getInputProps({
                      placeholder: "Enter Address...",
                    })} 
                    type="text" 
                    placeholder="Find BLW branches near you..." 
                  />
                </Form.Group>
                <div>
                  {loading && <div className='text-white'>Loading...</div>}
                  {suggestions.map((suggestion) => {
                    const style = suggestion.active
                      ? { backgroundColor: "#D2F898", cursor: "pointer" }
                      : { backgroundColor: "#ffffff", cursor: "pointer" };

                    return (
                      <div {...getSuggestionItemProps(suggestion, { style })}>
                        {suggestion.description}
                      </div>
                    );
                  })}
                </div>
              </Form>
          )}
        </PlacesAutocomplete>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default scriptLoader([
  `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}&libraries=places`,
])(Search);
