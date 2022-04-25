const tree = {
  section: "Nagłówek główny wielowierszowy",
  type: "checkbox",
  data: [
    {
      section: "Pododdział 1",
      type: "radio",
      data: [
        { section: "Zespół 1", name: "HR", data: [] },
        { section: "Zespół 2", name: "Marketing", data: [] },
        {
          type: "checkbox",
          section: "Zespół 3",
          name: "Analitycy",
          data: [
            { section: "Podzespół 3.1", data: "Kalendarz" },
            { section: "Podzespół 3.2", data: "Kokpit" },
            { section: "Podzespół 3.3", data: "Widok" },
            { section: "Podzespół 3.4", data: "Różności" },
            { section: "Podzespół 3.5", data: "Szukaj" },
          ],
        },
        {
          type: "checkbox",
          section: "Zespół 4",
          name: "Programiści",
          data: [
            { section: "Podzespół 4.1", data: "Front-end" },
            { section: "Podzespół 4.2", data: "Middle-front-end" },
            { section: "Podzespół 4.3", data: "Middle-end" },
            { section: "Podzespół 4.4", data: "Middle-back-end" },
            { section: "Podzespół 4.5", data: "Back-end" },
          ],
        },
      ],
    },
    { section: "Pododdział 2", type: "radio", data: [] },
    { section: "Pododdział 3", type: "radio", data: [] },
    {
      section: "Niezrzeszeni",
      type: "checkbox",
      data: [
        { name: "PracownikX" },
        { name: "PracownikY" },
        { name: "PracownikZ" },
      ],
    },
  ],
};

export default tree;