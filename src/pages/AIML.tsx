import { FaBrain } from 'react-icons/fa'; // Assuming react-icons is installed

const AiMlPage = () => {
  return (
    <section id="ai-ml-service-page" className="services-detail-page">
      <div className="page-content-wrapper">
        <h2 className="page-title">
          <FaBrain className="page-icon" /> AI & Machine Learning Solutions
        </h2>
        <p className="page-intro">
          At Unison, we harness the power of Artificial Intelligence and Machine Learning to transform your business operations, unlock hidden insights, and drive innovation. Our expert consultants design and implement intelligent systems that learn, adapt, and make data-driven decisions.
        </p>

        <h3>Our AI & ML Offerings:</h3>
        <ul>
          <li>
            <strong>Predictive Analytics:</strong> Forecast future trends, customer behavior, and market demands to make informed strategic decisions.
          </li>
          <li>
            <strong>Natural Language Processing (NLP):</strong> Develop solutions for sentiment analysis, chatbots, language translation, and text summarization to enhance customer interactions and data processing.
          </li>
          <li>
            <strong>Computer Vision:</strong> Implement image and video analysis for object recognition, facial recognition, quality control, and security applications.
          </li>
          <li>
            <strong>Recommendation Systems:</strong> Create personalized experiences for your customers, driving engagement and sales through intelligent product or content suggestions.
          </li>
          <li>
            <strong>Intelligent Automation:</strong> Automate complex tasks and workflows, improving efficiency and reducing operational costs.
          </li>
          <li>
            <strong>Custom ML Model Development:</strong> Build bespoke machine learning models tailored to your unique business challenges and data sets.
          </li>
        </ul>

        <p className="page-outro">
          Partner with Unison to integrate cutting-edge AI and ML capabilities into your enterprise, turning data into your most valuable asset.
        </p>
      </div>
    </section>
  );
};

export default AiMlPage;