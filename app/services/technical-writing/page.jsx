import ServicesBanner from "@/app/components/Banner/ServicesBanner";
import ServicesContent from "@/app/components/Services/ServicesContent";


const TechnicalWriting = () => {
  return (
    <>
      <ServicesBanner heading="Technical Writing" />
      <ServicesContent
        heading="Technical Writing"
        description="We understand the importance of clear and concise technical documentation. Our technical writers have the expertise to translate complex concepts into user-friendly and easy-to-understand content. Whether it's user manuals, product guides, or technical reports, we ensure your technical content is accurate, informative, and accessible to your target audience."
      />
    </>
  );
};

export default TechnicalWriting;
