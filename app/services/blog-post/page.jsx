import ServicesBanner from "@/app/components/Banner/ServicesBanner";
import ServicesContent from "@/app/components/Services/ServicesContent";

const BlogPost = () => {
  return (
    <>
      <ServicesBanner heading="Blog Post" />
      <ServicesContent
        heading="Blog Post"
        description="Engaging blog posts are an excellent way to connect with your audience and establish thought leadership in your industry. Our team of skilled writers can create informative and entertaining blog posts that spark conversation, increase engagement, and drive traffic to your website. Whether you need regular blog updates or a one-time post, we deliver content that keeps your readers returning for more."
      />{" "}
    </>
  );
};

export default BlogPost;
