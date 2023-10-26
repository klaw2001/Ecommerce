import React, { useState } from 'react';

const HeaderTop = () => {
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const currencyOptions = [
    { value: 'EUR', label: 'EUR €' },
    { value: 'USD', label: 'USD $' },
  ];

  const languageOptions = [
    { value: 'en', label: 'English', flag: '/assets/images/flag01.jpg' },
    { value: 'ar', label: 'اللغة العربية', flag: '/assets/images/flag02.jpg' },
    { value: 'es', label: 'Spanish', flag: '/assets/images/flag03.jpg' },
  ];

  const toggleCurrencyDropdown = () => {
    setCurrencyDropdownOpen(!currencyDropdownOpen);
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  return (
    <div className="headertop py-3">
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="d-flex justify-content-between">
            <div className="headtext1">
              <span>
                Additional{' '}
                <span className="text-danger">20% Off</span> Sale Items – Please See Details
              </span>
            </div>
            <div className="d-flex">
              <div className="dropdown me-4 headtext2">
                <button
                  className="text-decoration-none"
                  onClick={toggleCurrencyDropdown}
                >
                  USD $
                  <i className={`bi bi-chevron-${currencyDropdownOpen ? 'up' : 'down'}`}></i>
                </button>
                {currencyDropdownOpen && (
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
                    {currencyOptions.map((option) => (
                      <li key={option.value}>
                        <a href="#" className="dropdown-item">
                          {option.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="dropdown headtext2">
                <button
                  className="text-decoration-none"
                  onClick={toggleLanguageDropdown}
                >
                  <img src="/assets/images/flag01.jpg" alt="" />
                  English
                  <i className={`bi bi-chevron-${languageDropdownOpen ? 'up' : 'down'}`}></i>
                </button>
                {languageDropdownOpen && (
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    {languageOptions.map((option) => (
                      <li key={option.value}>
                        <a href="#" className="dropdown-item">
                          <img src={option.flag} alt="" />
                          {option.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
