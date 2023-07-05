import ServicesBanner from "@/app/components/Banner/ServicesBanner";
import ServicesContent from "@/app/components/Services/ServicesContent";


const SeoManagement = () => {
  return (
    <>
      <ServicesBanner heading="SEO Management" />
      <ServicesContent
        heading="SEO Management"
        description="Boosting your online presence is crucial in today's digital landscape. Our SEO experts can optimize your website content, conduct keyword research, and develop a tailored strategy to improve your search engine rankings. We employ white-hat techniques to drive organic traffic to your website, increasing your online visibility and attracting potential customers."
      />
    </>
  );
};

export default SeoManagement;
