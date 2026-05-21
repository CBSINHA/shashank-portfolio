import Section from "../components/layout/Section";

import SectionTitle from "../components/ui/SectionTitle";

import CertificateCard from "../components/ui/CertificateCard";

import { certificates } from "../data/certificates";

const CertificatesSection = () => {
  const featuredCertificates =
    certificates.filter(
      (certificate) =>
        certificate.featured
    );

  return (
    <Section id="certificates">
      <SectionTitle
        eyebrow="Certificates"
        title="Learning and technical certifications."
        description="Certifications and coursework focused on programming, problem solving, and software security concepts."
      />

      <div
        className="
          grid
          gap-8
          lg:grid-cols-3
        "
      >
        {featuredCertificates.map(
          (certificate) => (
            <CertificateCard
              key={certificate.title}
              certificate={
                certificate
              }
            />
          )
        )}
      </div>
    </Section>
  );
};

export default CertificatesSection;