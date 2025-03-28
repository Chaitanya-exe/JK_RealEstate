import React from 'react'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordianComp = () => {
  return (
    <div className="max-w-[980px] max-md:mx-4 mx-auto md:pb-8 my-4 md:my-10">
      <Accordion
        defaultExpanded
        className="divide-y-2 max-sm:-space-y-2 divide-white bg-cardBg/90 shadow"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            component="span"
            className="font-medium text-[19px] tracking-normal md:text-[22px] md:tracking-[0.5px]"
          >
            Q1: What services does J.K estate offer?
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography className="bodyText">
            We provide a wide range of real estate services, including residential
            and commercial property sales, leasing, consulting, and property management majorly in Delhi/NCR region
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        defaultExpanded
        className="divide-y-2 max-sm:-space-y-2 divide-white bg-cardBg/90 shadow"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography
            component="span"
            className="font-medium text-[19px] tracking-normal md:text-[22px] md:tracking-[0.5px]"
          >
            Q2: What does your consultancy process look like?{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="bodyText">
          Our process typically includes initial consultation, needs assessment, market research, property shortlisting, viewings, negotiation, transaction management, and post-deal support.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        defaultExpanded
        className="divide-y-2 max-sm:-space-y-2 divide-white bg-cardBg/90 shadow"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography
            component="span"
            className="font-medium text-[19px] tracking-normal md:text-[22px] md:tracking-[0.5px]"
          >
            Q3: How do you determine which properties to show ?{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="bodyText">
          We analyze your business requirements, budget constraints, location preferences, and growth projections to create a customized property shortlist.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        defaultExpanded
        className="divide-y-2 max-sm:-space-y-2 divide-white bg-cardBg/90 shadow"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography
            component="span"
            className="font-medium text-[19px] tracking-normal md:text-[22px] md:tracking-[0.5px]"
          >
            Q4: How do you stay current with market trends ?{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="bodyText">
          We continuously monitor market data, industry publications, economic indicators, and maintain active involvement in real estate networks and professional associations.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        defaultExpanded
        className="divide-y-2 max-sm:-space-y-2 divide-white bg-cardBg/90 shadow"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography
            component="span"
            className="font-medium text-[19px] tracking-normal md:text-[22px] md:tracking-[0.5px]"
          >
            Q5: Can you help me prepare my property for the market?{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="bodyText">
          Yes, we can provide recommendations for property improvements, staging, and presentation to maximize its appeal to potential clients.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordianComp
