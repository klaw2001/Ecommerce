import React from 'react';

const featureItems = [
  {
    id: 1,
    icon: '/assets/images/icon-1.png',
    title: 'Free Shipping',
    description: 'On all orders over $75.00',
  },
  {
    id: 2,
    icon: '/assets/images/icon-2.png',
    title: 'Free Returns',
    description: 'Returns are free within 9 days',
  },
  {
    id: 3,
    icon: '/assets/images/icon-3.png',
    title: '100% Secure Payment',
    description: 'Your payments are safe with us.',
  },
  {
    id: 4,
    icon: '/assets/images/icon-4.png',
    title: 'Support 24/7',
    description: 'Contact us 24hrs a day',
  },
];

const FeaturedInfo = () => {
  return (
    <div className="container py-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 featureback d-flex justify-content-center">
        {featureItems.map((item) => (
          <div className="col ps-4 pe-2 mt-3 d-flex" key={item.id}>
            <div className="featureicon">
              <img src={item.icon} alt={item.title} />
            </div>
            <div className="featuretext ps-3 text-white">
              <h5>{item.title}</h5>
              <p className="text-white-50">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedInfo;
