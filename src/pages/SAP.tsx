import React from 'react';
import { FaCogs } from 'react-icons/fa'; // Assuming react-icons is installed

const SapPage = () => {
  return (
    <section id="sap-service-page" className="services-detail-page">
      <div className="page-content-wrapper">
        <h2 className="page-title">
          <FaCogs className="page-icon" /> SAP Solutions & Consulting
        </h2>
        <p className="page-intro">
          Unison provides comprehensive SAP solutions designed to streamline your business processes, enhance operational efficiency, and maximize your return on investment. Our certified SAP consultants offer end-to-end services, from implementation and migration to optimization and support.
        </p>

        <h3>Our SAP Expertise Includes:</h3>
        <ul>
          <li>
            <strong>SAP S/4HANA Implementation:</strong> Guide your transition to SAP's intelligent ERP suite, leveraging in-memory computing for real-time insights.
          </li>
          <li>
            <strong>SAP ECC Support & Migration:</strong> Provide ongoing support for your existing SAP ECC systems and assist with seamless migration strategies to newer platforms.
          </li>
          <li>
            <strong>Module-Specific Consulting:</strong> Deep expertise in various SAP modules including FI/CO, SD, MM, PP, HCM, and CRM to address specific business needs.
          </li>
          <li>
            <strong>SAP Integration Services:</strong> Connect your SAP landscape with other enterprise systems, cloud applications, and third-party tools for a unified ecosystem.
          </li>
          <li>
            <strong>SAP Business Intelligence & Analytics:</strong> Implement SAP BW, SAP Analytics Cloud, and other tools to transform your raw data into actionable business intelligence.
          </li>
          <li>
            <strong>Custom Development & Enhancements:</strong> Develop tailored solutions and extensions within the SAP environment to meet unique business requirements.
          </li>
        </ul>

        <p className="page-outro">
          Let Unison help you unlock the full potential of your SAP investment, driving innovation and sustainable growth for your enterprise.
        </p>
      </div>
    </section>
  );
};

export default SapPage;