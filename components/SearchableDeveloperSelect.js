import React, { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";

const SearchableDeveloperSelect = ({
  developers,
  selectedDeveloper,
  onSelect,
  onAddNew,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  const filteredDevelopers = developers.filter((dev) =>
    dev.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div className="form-floating w-full">
        <div
          className="form-control cursor-pointer flex items-center"
          onClick={() => setIsOpen(true)}
        >
          {selectedDeveloper?.name || "Select Developer"}
        </div>
        <label className="text-gray-500">
          Developer <span className="text-red-500">*</span>
        </label>
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border rounded-lg shadow-lg">
          <div className="p-2 border-b">
            <div className="relative">
              <input
                type="text"
                className="form-control pl-8"
                placeholder="Search developers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoFocus
              />
              {/* <Search
                className="absolute left-2 top-2 text-gray-400"
                size={20}
              />
              {searchTerm && (
                <button
                  className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
                  onClick={() => setSearchTerm("")}
                >
                  <X size={20} />
                </button>
              )} */}
            </div>
          </div>

          <div className="max-h-60 overflow-y-auto">
            {filteredDevelopers.length > 0 ? (
              filteredDevelopers.map((dev) => (
                <div
                  key={dev.id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    onSelect(dev);
                    setIsOpen(false);
                    setSearchTerm("");
                  }}
                >
                  {dev.name}
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-gray-500">
                No developers found
              </div>
            )}
          </div>

          <div className="p-2 border-t">
            <button
              className="btn btn-outline-dark w-full"
              onClick={() => {
                onAddNew();
                setIsOpen(false);
                setSearchTerm("");
              }}
            >
              Add New Developer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchableDeveloperSelect;
