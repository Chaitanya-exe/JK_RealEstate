"use client";

import AccordianComp from "@/components/AccordianComp";
import QueryForm from "@/components/QueryForm";
import ServiceDetail from "@/components/ServiceDetail";
import Top from "@/components/Top";
import { services } from "@/constants/dummydata";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { id } = useParams();
  const pathname = usePathname();
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    if (id) {
      const parsedId = parseInt(id, 10);
      const service = services.find(
        (service) => parseInt(service.id, 10) === parsedId
      );
      setServiceData(service);
    }
  }, [id, pathname]);

  return (
    <div>
      <ServiceDetail serviceData={serviceData} />
      <section
        id="form"
        className="h-[690px] py-10 mb-12 mt-36 relative w-full bg-[url('/formBg.png')] bg-cover bg-center"
      >
        <QueryForm />
      </section>

      {/* faqs */}
      <section id="faqs" className="my-24">
        <Top
          head1={<p>Your Questions, Answered</p>}
          classname={" py-5 text-center mx-auto max-w-[600px] "}
        />

        <AccordianComp />
      </section>
    </div>
  );
};

export default Page;
