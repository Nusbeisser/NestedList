const tree = {
  name: "Nagłówek",
  type: "checkbox",
  data: {
    "Pododdział 1": {
      type: "radio",
      data: [
        { "Zespół 1 HR": [] },
        { "Zespół 2 Marketing": [] },
        {
          type: "checkbox",
          "Zespół 3 Analitycy": [
            { "Podzespół 3.1": { data: "Kalendarz" } },
            { "Podzespół 3.2": { data: "Kokpit" } },
            { "Podzespół 3.3": { data: "Widok" } },
            { "Podzespół 3.4": { data: "Różności" } },
            { "Podzespół 3.5": { data: "Szukaj" } },
          ],
        },
        {
          type: "checkbox",
          "Zespół 3 Programiści": [
            { "Podzespół 4.1": { data: "Front-end" } },
            { "Podzespół 4.2": { data: "Middle-front-end" } },
            { "Podzespół 4.3": { data: "Middle-end" } },
            { "Podzespół 4.4": { data: "Middle-back-end" } },
            { "Podzespół 4.5": { data: "Back-end" } },
          ],
        },
      ],
    },
    "Pododdział 2": {
      type: "radio",
      data: [],
    },
    "Pododdział 3": {
      type: "radio",
      data: [],
    },
    "Niezrzeszeni.": [],
  },
};

export default tree;
