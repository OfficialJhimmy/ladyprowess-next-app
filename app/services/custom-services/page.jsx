import ServicesBanner from "@/app/components/Banner/ServicesBanner";
import ServicesContent from "@/app/components/Services/ServicesContent";

const CustomServices = () => {
  return (
    <>
      <ServicesBanner heading="Custom Services" />
      <ServicesContent
        heading="Custom Services"
        description="In addition to our core offerings, we provide custom services tailored to your requirements. We understand that each client has unique needs, and we are committed to delivering personalized solutions. We are here to assist you with editing and proofreading, social media management, email newsletters, or any other content-related services."
      />
    </>
  );
};

export default CustomServices;
