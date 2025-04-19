"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ClientLayout = ({ children }) => {
  const pathname = usePathname();
  
  const excludeHeaderFooter = pathname.includes('/manager') || window.location.hostname.startsWith("admin")
console.log(excludeHeaderFooter);

  return (
    <div className="min-h-screen flex flex-col">
      {!excludeHeaderFooter && <Header />}

      <main className="flex-grow">{children}</main>

      {!excludeHeaderFooter && <Footer />}
    </div>
  );
};

export default ClientLayout;
