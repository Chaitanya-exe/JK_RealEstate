"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const ClientLayout = ({ children }) => {
  const pathname = usePathname();
  const [host, setHost] = useState("");
  
  useEffect(()=>{
    setHost(window.location.hostname);
  },[])

  const excludeHeaderFooter = pathname.includes('/manager') || host.startsWith("admin");

  return (
    <div className="min-h-screen flex flex-col">
      {!excludeHeaderFooter && <Header />}

      <main className="flex-grow">{children}</main>

      {!excludeHeaderFooter && <Footer />}
    </div>
  );
};

export default ClientLayout;
