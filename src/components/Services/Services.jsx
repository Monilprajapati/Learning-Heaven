import React from 'react';
import "./Services.css";

const Services = () => {
  const servicesData = [
    {
      icon: 'fa-solid fa-clock',
      title: 'Learn in less time',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      icon: 'fa-solid fa-video',
      title: 'Collections of lectures',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      icon: 'fa-solid fa-calendar',
      title: 'Flexible Timing',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
    <section className="services" id="services">
      <header className="section-header">
        <h1>Why Choose Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </header>
      <div className="services-contents">
        {servicesData.map((service, index) => (
          <div className="service-box" key={index}>
            <div className="service-icon">
              <i className={service.icon}></i>
            </div>
            <div className="service-desc">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
