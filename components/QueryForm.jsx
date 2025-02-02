"use client";

import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import Button from "./Button";
import { IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const QueryForm = () => {
  const [query, setQuery] = useState({
    name: "",
    number: "",
    email: "",
    type: "",
    inquiry: "",
  });
  const [querySent, setQuerySent] = useState(false);
  const [queryduplicate, setQueryDuplicate] = useState(false);

  console.log(queryduplicate);


  const handleClick = async () => {
    try {
      setQuerySent(false);

      const response = await fetch("api/query/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...query }),
      });
      const data = await response.json();
      alert(data.msg);
      if (data.success) {
        setQuerySent(true);
      }
    } catch (err) {
      alert("some error occured, Try again later");
      setQuerySent(false);
      // setQueryDuplicate(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setQuerySent(false);
    setQueryDuplicate(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <form className={`*:my-2 content-center pt-2 md:pt-6 md:w-full mx-auto  `}>
      <Snackbar
        open={querySent}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Query sent successfully."
        action={action}
      />
      <Snackbar
        open={queryduplicate}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Query sent already ."
        action={action}
      />

      <div className="md:flex items-center  *:my-2 *:md:my-0 *:w-full gap-4 *:border *:rounded *:flex *:items-center *:p-2.5 *:gap-2  ">
        <div className="">
          <PersonIcon />
          <input
            type="text"
            id="name"
            name="Name"
            value={query.name}
            onChange={(e) => setQuery({ ...query, name: e.target.value })}
            placeholder="Full Name"
            className="capitalize w-full outline-none bg-transparent px-2"
          />
        </div>
        <div className="">
          <LocalPhoneIcon />
          <input
            type="text"
            id="number"
            name="number"
            value={query.number}
            onChange={(e) => setQuery({ ...query, number: e.target.value })}
            placeholder="Phone Number"
            className="w-full outline-none bg-transparent px-2"
          />
        </div>
      </div>
      <div className="md:flex items-center *:my-2 *:md:my-0 *:w-full gap-4 *:border *:rounded *:flex *:items-center  *:gap-2  ">
        <div className="p-2.5 ">
          <EmailIcon />
          <input
            type="email"
            id="email"
            name="email"
            value={query.email}
            onChange={(e) => setQuery({ ...query, email: e.target.value })}
            placeholder="Email"
            className="w-full outline-none bg-transparent px-2"
          />
        </div>

        <div className="">
          <select
            name="type"
            defaultValue=""
            className="w-full capitalize bg-transparent *:border-b *:border-text p-3 h-full focus:outline-none"
            onChange={(e) =>
              setQuery({ ...query, type: e.target.value.toUpperCase() })
            }
          >
            <option
              value={query.type}
              // onChange={(e) =>
              //   setQuery({ ...query, type: e.target.value.toUpper() })
              // }
              disabled
              hidden
              className=""
            >
              Type of inquiry
            </option>
            <option value="consultation" className=" *:hover:font-semibold">
              Consultation
            </option>
            <option value="design" className=" *:hover:font-semibold">
              Design
            </option>
            <option value="maintanence" className=" *:hover:font-semibold">
              Maintanence
            </option>
            <option value="installation" className=" *:hover:font-semibold">
              Installation
            </option>
            <option value="other" className=" *:hover:font-semibold">
              Other
            </option>
          </select>
        </div>
      </div>
      <div className="border backdrop-blur-md rounded  flex items-center p-2 gap-2">
        <textarea
          rows={5}
          id="inquiry"
          name="inquiry"
          value={query.inquiry}
          onChange={(e) => {
            console.log(query);
            setQuery({ ...query, inquiry: e.target.value });
          }}
          placeholder="Tell us more about your needs or questions.."
          className="w-full  outline-none bg-transparent px-2"
        />
      </div>
      <div className="float-right flex items-center gap-6 md:py-3 py-2  ">
        <Button
          text={"7982500442"}
          type={"sec"}
          icon={<PersonIcon className="inline-flex size-5 md:size-6 mr-2" />}
          classname={"py-3 px-5 rounded-sm flex items-center"}
        />
        <Button
          text={"send"}
          type={"primary"}
          classname={"py-3 px-8 rounded-sm"}
          funCall={handleClick}
        />

      </div>
    </form>
  );
};

export default QueryForm;
