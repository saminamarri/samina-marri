import React from 'react';
import SectionHeading from '../components/SectionHeading';
import Timeline from '../components/Timeline';
import CertificateCard from '../components/CertificateCard';
import PageTransition from '../components/PageTransition';
import { educationData } from '../data/education';
import { certificatesData } from '../data/certificates';

export default function EducationPage() {
  return (
    <PageTransition>
      <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        
        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            label="ACADEMIC BACKGROUND"
            title="EDUCATION"
            subtitle="Formal academic degrees, specialized studio training, and pedagogical pursuits."
            centered={true}
          />
          <Timeline items={educationData} />
        </div>

        {/* Certificates & Professional Development */}
        <div className="pt-10">
          <SectionHeading
            label="CREDENTIALS & HONORS"
            title="CERTIFICATES & NATIONAL RECOGNITION"
            subtitle="National honor award ceremonies, specialized certifications in graphic design, web & application development, and agentic AI technology."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificatesData.map((cert) => (
              <CertificateCard
                key={cert.id}
                title={cert.title}
                organization={cert.organization}
                category={cert.category}
                description={cert.description}
                image={cert.image}
              />
            ))}
          </div>
        </div>

      </div>
    </PageTransition>
  );
}
