import ServicesBanner from "@/app/components/Banner/ServicesBanner";
import ServicesContent from "@/app/components/Services/ServicesContent";

const ContentMarketing = () => {
  return (
    <>
      <ServicesBanner heading="Content Marketing" />
      <ServicesContent
        heading="Content Marketing"
        description="We understand the power of words and their impact on your brand. Our talented writers are dedicated to creating captivating, informative content that resonates with your target audience. From website copy and blog posts to social media content and product descriptions, we ensure that our content reflects your brand's unique voice."
      />
    </>
  );
};

export default ContentMarketing;
