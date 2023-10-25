import React from 'react';

const testimonialData = [
  {
    name: 'Orando Bloom',
    quote:
      'All Perfect !! I have three sites with magento, this theme is the best !! Excellent support, advice theme installation package, sorry for English, are Italian but I had no problem !! Thank you !',
    email: 'Info@hasthemes.Com',
  },
  {
    name: 'Ajay Bloom',
    quote:
      'All Perfect !! I have three sites with magento, this theme is the best !! Excellent support, advice theme installation package, sorry for English, are Italian but I had no problem !! Thank you !',
    email: 'Info@hasthemes.Com',
  },
  {
    name: 'Swapnil Rane',
    quote:
      'All Perfect !! I have three sites with magento, this theme is the best !! Excellent support, advice theme installation package, sorry for English, are Italian but I had no problem !! Thank you !',
    email: 'Info@hasthemes.Com',
  },
  
];

const Testimonial = () => {
  return (
    <div className="container-fluid testimonialbg">
      <div className="row py-5">
        <div className="headtext text-center pt-5">
          <h3 className="fw-light">
            <i>What They Say</i>
          </h3>
          <h2 className="fw-bolder mb-3">CLIENT TESTIMONIALS</h2>
          <p>
            <img src="/assets/images/hr.webp" alt="" />
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex">
          {testimonialData.map((testimonial, index) => (
            <div key={index} className="col-md-6 col-lg-4 text-center">
              <div className="testimonialtext mb-5">
                <img src="/assets/images/quote.webp" className="pb-4" alt="" />
                <h5 className="fw-bold mb-4">{testimonial.name}</h5>
                <p className="mb-5">
                  <i>{testimonial.quote}</i>
                </p>
                <span>{testimonial.email}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
