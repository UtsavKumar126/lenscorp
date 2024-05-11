import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Typography from "@mui/material/Typography";

function Faqs() {
  const sx = {
    border: "1px solid black", // Set border to black
    borderRadius: "1rem", // Optional: Add border radius for a rounded appearance
    boxShadow: "none", // Optional: Remove default box shadow
  };
  const sx2={
    border:"none",
    outline:"none"
  }
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="text-2xl">GET TO KNOW US</div>
      <div className="underLined mt-2"></div>
      <div className="mt-5 text-7xl">Frequently Asked Questions</div>
      <div className="mt-[3rem] grid grid-cols-2 px-[2rem] gap-[2rem] place-items-center">
        <div className="max-w-[80%]">
          <Accordion sx={sx2}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={sx}
            >
              <Typography>Do I need to sign a contract</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We will first work with you to comprehend your requirements in
                detail. Thereafter, we would draft an agreement with proposed
                solutions.After assessing possible challenges and pitfalls and
                identifying ways to overcome them, we will jointly sign an
                agreement, not a binding contract.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="max-w-[80%]">
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={sx}
            >
              <Typography>How do we ensure quality of deliverables </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We are researchers, first. We thoroughly benchmark our proposed
                solutions against internal and public datasets and baselines
                after each development sprint. After final delivery, we will
                continuously enhance our delivery based on your feedbacks.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="max-w-[80%]">
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={sx}
            >
              <Typography>How do I begin Collaboration</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Please contact us at solutions@lenscorp.ai. We usually respond
                within 24 Hrs.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="max-w-[80%]">
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={sx}
            >
              <Typography>What sevices do we offer</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We build accurate and efficient AI systems for your business.
                Our ethically-trained solutions are paving a new path forward to
                create explainable, transparent, and easily customizable. In
                addition, we grant ownership of all copyrights to the system,
                software, and model to you.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="max-w-[80%]">
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={sx}
            >
              <Typography>How to ensure user privacy?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We do not share, sell, or rent your competitive information
                (including any and all data) to any third party.Since we grant
                exclusive Intellectual Property Rights back to you, we have no
                intention of violating any user privacy.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="max-w-[80%]">
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={sx}
            >
              <Typography>How can i pay for the services</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We split the entire project into multiple milestones.We work on
                an advanced milestone payment basis with an option to drop off
                remaining milestones anytime.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
