import React from 'react';
import { FaShieldAlt } from 'react-icons/fa'; // Assuming react-icons is installed

const AntiVirusPage = () => {
  return (
    <section id="anti-virus-service-page" className="services-detail-page">
      <div className="page-content-wrapper">
        <h2 className="page-title">
          <FaShieldAlt className="page-icon" /> Cybersecurity & Anti-Virus Solutions
        </h2>
        <p className="page-intro">
          In today's interconnected world, robust cybersecurity is non-negotiable. Unison provides comprehensive cybersecurity and anti-virus solutions to protect your digital assets, sensitive data, and critical infrastructure from evolving threats.
        </p>

        <h3>Our Cybersecurity Offerings:</h3>
        <ul>
          <li>
            <strong>Threat Detection & Prevention:</strong> Implement advanced anti-virus, anti-malware, and intrusion detection systems to proactively identify and neutralize threats.
          </li>
          <li>
            <strong>Network Security:</strong> Design and deploy secure network architectures, including firewalls, VPNs, and secure Wi-Fi solutions.
          </li>
          <li>
            <strong>Endpoint Security:</strong> Protect all your devices (laptops, desktops, mobile) from malware, ransomware, and other vulnerabilities.
          </li>
          <li>
            <strong>Data Protection & Encryption:</strong> Secure your sensitive data at rest and in transit through robust encryption and data loss prevention (DLP) strategies.
          </li>
          <li>
            <strong>Security Audits & Compliance:</strong> Conduct thorough security assessments, vulnerability testing, and ensure compliance with industry regulations (e.g., GDPR, HIPAA).
          </li>
          <li>
            <strong>Incident Response & Recovery:</strong> Develop and implement incident response plans to quickly detect, contain, and recover from security breaches.
          </li>
          <li>
            <strong>Security Awareness Training:</strong> Educate your employees on best practices to minimize human error, a common cause of security incidents.
          </li>
        </ul>

        <p className="page-outro">
          Safeguard your business with Unison's expert cybersecurity and anti-virus solutions, ensuring resilience and peace of mind in the digital landscape.
        </p>
      </div>
    </section>
  );
};

export default AntiVirusPage;