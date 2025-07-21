import React from 'react';
import { FaDatabase } from 'react-icons/fa'; // Assuming react-icons is installed

const DataEngineeringPage = () => {
  return (
    <section id="data-engineering-service-page" className="services-detail-page">
      <div className="page-content-wrapper">
        <h2 className="page-title">
          <FaDatabase className="page-icon" /> Data Engineering & Analytics
        </h2>
        <p className="page-intro">
          Unison specializes in building robust, scalable, and efficient data pipelines and platforms. Our data engineering services ensure that your data is clean, accessible, and ready for advanced analytics, empowering your organization to make informed decisions.
        </p>

        <h3>Our Data Engineering Offerings:</h3>
        <ul>
          <li>
            <strong>Data Pipeline Development:</strong> Design, build, and optimize automated data pipelines for seamless data ingestion, transformation, and loading (ETL/ELT).
          </li>
          <li>
            <strong>Data Warehousing & Lake Solutions:</strong> Implement modern data warehousing and data lake architectures (e.g., Snowflake, Databricks, Redshift, BigQuery) for centralized and scalable data storage.
          </li>
          <li>
            <strong>Cloud Data Platforms:</strong> Expertise in deploying and managing data solutions on leading cloud platforms like AWS, Azure, and Google Cloud Platform.
          </li>
          <li>
            <strong>Data Governance & Quality:</strong> Establish frameworks for data quality, security, compliance, and metadata management to ensure data integrity and trustworthiness.
          </li>
          <li>
            <strong>Big Data Technologies:</strong> Leverage technologies like Apache Spark, Hadoop, and Kafka for processing and analyzing large volumes of data.
          </li>
          <li>
            <strong>Business Intelligence (BI) & Reporting:</strong> Develop interactive dashboards and reports using tools like Tableau, Power BI, and Looker to visualize key business metrics.
          </li>
        </ul>

        <p className="page-outro">
          Transform your raw data into a strategic asset with Unison's comprehensive data engineering and analytics capabilities.
        </p>
      </div>
    </section>
  );
};

export default DataEngineeringPage;