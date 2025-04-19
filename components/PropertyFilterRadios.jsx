"use client";

import React, { useState } from "react";

const PropertyFilterRadios = ({ onFilterChange }) => {
  const [propertyType, setPropertyType] = useState("Residential");
  const [status, setStatus] = useState("For Sale");

  const handlePropertyTypeChange = (event) => {
    const newValue = event.target.value;
    setPropertyType(newValue);
    if (onFilterChange) {
      onFilterChange({ propertyType: newValue, status });
    }
  };

  const handleStatusChange = (event) => {
    const newValue = event.target.value;
    setStatus(newValue);
    if (onFilterChange) {
      onFilterChange({ propertyType, status: newValue });
    }
  };

  return (
    <div className="flex-row md:flex-row gap-4 p-4 align-middle">
      <div className="flex flex-col py-3">
        <h3 className="text-lg font-semibold mb-2 text-gray-800 ">Property Type</h3>
        <div className="flex space-x-4">
          {["Residence", "Commercial", "Industrial"].map((type) => (
            <div key={type} className="flex items-center">
              <input
                type="radio"
                id={`property-${type}`}
                name="propertyType"
                value={type}
                checked={propertyType === type}
                onChange={handlePropertyTypeChange}
                className="w-4 h-4 text-bright_red focus:ring-bright_red"
              />
              <label
                htmlFor={`property-${type}`}
                className="ml-2 text-sm font-medium text-gray-700"
              >
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>
            
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">Status</h3>
        <div className="flex space-x-4">
          {["Sale", "Rent"].map((option) => (
            <div key={option} className="flex items-center">
              <input
                type="radio"
                id={`status-${option.replace(/\s+/g, "")}`}
                name="status"
                value={option}
                checked={status === option}
                onChange={handleStatusChange}
                className="w-4 h-4 text-bright_red focus:ring-bright_red"
              />
              <label
                htmlFor={`status-${option.replace(/\s+/g, "")}`}
                className="ml-2 text-sm font-medium text-gray-700"
              >
                {`For ${option}`}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyFilterRadios;

