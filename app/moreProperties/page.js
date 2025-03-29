"use client";

import { properties } from "@/constants/dummydata";
import Image from "next/image";
import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import PushPinIcon from "@mui/icons-material/PushPin";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

export default function MoreProperties() {
  const [openModal, setOpenModal] = useState(false);
  const [modal, setModal] = useState(null);

  const renderModal = () => {
    return (
      <div className="bg-prim_black/20 z-20 h-screen w-screen fixed bottom-0 right-0 left-0 flex items-center justify-center">
        <div className="bg-prim_white rounded-md relative max-w-[65vw] max-h-[80vh] w-full p-4 overflow-y-auto">
          <span className="absolute right-2 top-2">
            <IconButton onClick={() => setOpenModal(false)}>
              <Close />
            </IconButton>
          </span>
          <h2 className="hero_subheading">{modal?.title}</h2>
          <h2 className="text-[20px] mb-2">{modal?.description}</h2>
          <ul>
            {modal?.features.map((item, _id) => (
              <li key={_id} className="flex pb-1">
                <PushPinIcon
                  className="rotate-45 mr-2 text-bright_red/80"
                  fontSize="small"
                />
                <span className="bodyText">{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4 my-6">
            {modal?.images.map((imgsrc) => (
              <Image
                key={imgsrc}
                src={imgsrc}
                width={400}
                height={300}
                alt="image"
                className="rounded"
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section>
      <div className="bg-bright_red pt-[75px]">
        <div
          style={{ backgroundImage: `url('/prop1.png')` }}
          className="w-full h-[320px] bg-prim_black flex  justify-center items-center text-center bg-center bg-cover  bg-no-repeat "
        >
          <h1 className="md:hero_heading hero_heading_Sm text-white">
            View all properties
          </h1>
        </div>
      </div>

      {openModal && renderModal()}

      <div className="flex justify-center  flex-wrap gap-7 my-6 px-4 md:px-28">
        {properties?.map((property) => (
          <div
            onClick={() => {
              setOpenModal(true);
              setModal(property);
            }}
            key={property.id}
            className="rounded-lg p-1 max-w-[400px] overflow-hidden shadow-md"
          >
            <Image
              src={property.images[1]}
              width={800}
              height={400}
              alt="img"
              className="h-[240px] rounded w-full hover:scale-[1.02] transition duration-200 object-cover object-center"
            />
            <p className="text-[20px] leading-tight py-2">{property.title}</p>
            {/* <p className="text-ellipsis ext-nowrap">{property.description}</p> */}

            <div className="flex gap-1">
              <LocationOnIcon fontSize="small" className="text-prim_black/55" />
              <span>GH-4, Lajpat Nagar</span>
            </div>

            <div className="flex gap-1">
              <SquareFootIcon fontSize="small" className="text-prim_black/55" />
              <span>800 X 800 sq</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
