import React, { useState, useEffect, useRef } from "react";
const dataofform = {
  name: "",
  street_address: "",
  city: "",
  state: "",
  zip_code: "",
  googleMapLink: "",
};
const API_KEY = "AIzaSyAg1DPUqnLyuFzwZBshW75XAq-8hIHH66g";

const Autofill = () => {
  const [formState, setFormState] = useState(dataofform);
  const autocompleteRef = useRef(null);
  const autocompleteInstance = useRef(null);
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markerRef = useRef(null);

  const loadGoogleMapsScript = (apiKey, onLoad) => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.onload = onLoad;
    document.body.appendChild(script);
  };

  useEffect(() => {
    const handlePlaceSelect = () => {
      if (autocompleteInstance.current) {
        const place = autocompleteInstance.current.getPlace();
        const addressComponents = place.address_components || [];
        const lat = place.geometry?.location.lat();
        const lng = place.geometry?.location.lng();

        setFormState({
          name: place.name || "",
          street_address: `${addressComponents[0]?.long_name || ""} ${
            addressComponents[1]?.long_name || ""
          }`,
          city: addressComponents[1]?.long_name || "",
          state: addressComponents[3]?.long_name || "",
          zip_code: addressComponents[5]?.long_name || "",
          googleMapLink: place.url || "",
        });

        // Update map with new location
        mapInstance.current.setCenter({ lat, lng });
        if (markerRef.current) {
          markerRef.current.setPosition({ lat, lng });
        } else {
          markerRef.current = new window.google.maps.Marker({
            position: { lat, lng },
            map: mapInstance.current,
          });
        }
      }
    };

    const initAutocomplete = () => {
      if (window.google && window.google.maps) {
        autocompleteInstance.current = new window.google.maps.places.Autocomplete(autocompleteRef.current);
        autocompleteInstance.current.addListener("place_changed", handlePlaceSelect);
        // Initialize map with a default center
        mapInstance.current = new window.google.maps.Map(mapRef.current, {
          zoom: 15,
          center: { lat: 37.7749, lng: -122.4194 },
        });
      }
    };

    loadGoogleMapsScript(API_KEY, initAutocomplete);

    return () => {
      if (autocompleteInstance.current) {
        window.google.maps.event.clearInstanceListeners(autocompleteInstance.current);
      }
      if (mapInstance.current) {
        window.google.maps.event.clearInstanceListeners(mapInstance.current);
      }
    };
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="px-4 sm:px-6 lg:px-48 py-7">
      <p className="text-center text-2xl">Add your location here...</p>
      <div className="w-full mt-10 mx-auto p-6 py-10 bg-gray-100 shadow-lg rounded-lg">
        <form className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="location" className="text-base font-medium text-gray-800 mb-1">
              Location
            </label>
            <input
              type="text"
              id="autocomplete"
              name="location"
              ref={autocompleteRef}
              className="p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Enter location"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="name" className="text-base font-medium text-gray-800 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className="p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="street" className="text-base font-medium text-gray-800 mb-1">
              Street
            </label>
            <input
              type="text"
              name="street_address"
              value={formState.street_address}
              onChange={handleChange}
              className="p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Enter street address"
            />
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex flex-col flex-1">
              <label htmlFor="city" className="text-base font-medium text-gray-800 mb-1">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formState.city}
                onChange={handleChange}
                className="p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Enter city"
              />
            </div>

            <div className="flex flex-col flex-1">
              <label htmlFor="state" className="text-base font-medium text-gray-800 mb-1">
                State
              </label>
              <input
                type="text"
                name="state"
                value={formState.state}
                onChange={handleChange}
                className="p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Enter state"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="zipcode" className="text-base font-medium text-gray-800 mb-1">
              Zipcode/Pincode
            </label>
            <input
              type="text"
              name="zip_code"
              value={formState.zip_code}
              onChange={handleChange}
              className="p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Zipcode"
            />
          </div>
        </form>

        <div
          ref={mapRef}
          style={{ height: "400px", width: "100%", marginTop: "20px" }}
          className="rounded-lg border-2 border-gray-300"
        ></div>
      </div>
    </div>
  );
};

export default Autofill;
