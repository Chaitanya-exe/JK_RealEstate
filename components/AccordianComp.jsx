import React from 'react'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordianComp = () => {
  return (
    <div className="max-w-[980px] mx-auto pb-8 my-10">
      <Accordion
        defaultExpanded
        className="divide-y-2 divide-white bg-cardBg/90 shadow"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            component="span"
            className="font-medium text-[22px] tracking-[0.5px]"
          >
            Q1: What services does [Your Company Name] offer?
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography className="bodyText">
            We provide a range of real estate services, including residential
            and commercial property sales, property leasing, real estate
            investment consulting, and property management.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        defaultExpanded
        className="divide-y-2 shadow divide-white bg-cardBg/90"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography
            component="span"
            className="font-medium text-[22px] tracking-[0.5px]"
          >
            Q2: How do I schedule a consultation?{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="bodyText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        defaultExpanded
        className="divide-y-2 shadow divide-white bg-cardBg/90"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography
            component="span"
            className="font-medium text-[22px] tracking-[0.5px]"
          >
            Q2: How do I schedule a consultation?{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="bodyText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordianComp
