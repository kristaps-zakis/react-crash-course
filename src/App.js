import { useState } from 'react';
import Accordion from './Accordion';
import Profile from './Profile';

function App() {
  const [openAccordianId, setOpenAccordianId] = useState(null);

  const handleAccordionClick = (accordionId) => {
    setOpenAccordianId((prevOpenAccordianId) =>
      prevOpenAccordianId === accordionId ? null : accordionId
    );
  };

  return (
    <div>
      <Accordion
        id="accordion-1"
        labelText="Accordion"
        open={openAccordianId === 'accordion-1'}
        onClick={handleAccordionClick}
      >
        <Profile />
      </Accordion>

      <Accordion
        id="accordion-2"
        labelText="Accordion 2"
        open={openAccordianId === 'accordion-2'}
        onClick={handleAccordionClick}
      >
        Some hard-coded content 2
      </Accordion>
    </div>
  );
}

export default App;
