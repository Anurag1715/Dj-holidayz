import { countries } from "countries-list";

// Helper to format countries for CustomSelect
export const getCountryOptions = () => {
  const list = Object.values(countries).map((c) => ({
    label: c.name,
    value: c.name,
  }));
  return list.sort((a, b) => a.label.localeCompare(b.label));
};

// Helper to format nationalities for CustomSelect
export const getNationalityOptions = () => {
  const commonNationalities = [
    "Indian",
    "Emirati",
    "Saudi",
    "Omani",
    "Qatari",
    "Bahraini",
    "Kuwaiti",
    "American",
    "British",
    "Canadian",
    "Australian",
    "German",
    "French",
    "Italian",
    "Spanish",
    "Russian",
    "Chinese",
    "Japanese",
    "South Korean",
    "Pakistani",
    "Bangladeshi",
    "Sri Lankan",
    "Nepalese",
    "Egyptian",
    "Filipino",
    "Indonesian",
    "Malaysian",
    "Singaporean",
    "Turkish",
    "Vietnamese",
    "Thai",
  ];

  const countryNames = Object.values(countries).map((c) => c.name);
  const combined = [...commonNationalities, ...countryNames];

  const uniqueMap = new Map();
  combined.forEach((nat) => {
    if (nat) {
      uniqueMap.set(nat.toLowerCase(), { label: nat, value: nat });
    }
  });

  return Array.from(uniqueMap.values()).sort((a, b) =>
    a.label.localeCompare(b.label),
  );
};

export const customerTypeOptions = [
  { label: "Corporate", value: "Corporate" },
  { label: "Group", value: "Group" },
  { label: "Solo", value: "Solo" },
  { label: "Student", value: "Student" },
  { label: "Cruise", value: "Cruise" },
  { label: "Others", value: "Others" },
];

export const visaTypeOptions = [
  { label: "Tourist visa", value: "Tourist visa" },
  { label: "Business visa", value: "Business visa" },
  { label: "Student visa", value: "Student visa" },
];

export const VisaEnquiryFormBuilder = (control, styles, setValue) => {
  const countryList = getCountryOptions();
  const nationalityList = getNationalityOptions();

  return {
    personalInfo: [
      {
        name: "first_name",
        parent: "visa_enquiry",
        control,
        type: "text",
        label: true,
        required: true,
      },
      {
        name: "last_name",
        parent: "visa_enquiry",
        control,
        type: "text",
        label: true,
        required: true,
      },
      {
        name: "residence_country",
        parent: "visa_enquiry",
        control,
        type: "select",
        data: countryList,
        searchable: true,
        label: true,
        required: true,
      },
      {
        name: "nationality",
        parent: "visa_enquiry",
        control,
        type: "select",
        data: nationalityList,
        searchable: true,
        label: true,
        required: true,
      },
    ],
    travelInfo: [
      {
        name: "destination_country",
        parent: "visa_enquiry",
        control,
        type: "select",
        data: countryList,
        searchable: true,
        label: true,
        required: true,
      },
      {
        name: "customer_type",
        parent: "visa_enquiry",
        control,
        type: "select",
        data: customerTypeOptions,
        label: true,
        required: true,
      },
      {
        name: "visa_type",
        parent: "visa_enquiry",
        control,
        type: "select",
        data: visaTypeOptions,
        label: true,
        required: true,
      },
      {
        name: "travel_date",
        parent: "visa_enquiry",
        control,
        type: "datepicker",
        label: true,
        required: true,
      },
    ],
    contactInfo: [
      {
        name: "phone",
        parent: "visa_enquiry",
        control,
        type: "phone",
        label: true,
        required: true,
        full: true,
      },
      {
        name: "email",
        parent: "visa_enquiry",
        control,
        type: "text",
        label: true,
        required: true,
        full: true,
      },
    ],
    additionalInfo: [
      {
        name: "description",
        parent: "visa_enquiry",
        control,
        type: "textarea",
        label: true,
        required: false,
      },
      {
        name: "attachment",
        parent: "visa_enquiry",
        control,
        type: "file",
        label: true,
        required: false,
        setValue,
      },
    ],
  };
};

export const CruiseEnquiryFormBuilder = (control, styles, setValue) => {
  const countryList = getCountryOptions();
  const nationalityList = getNationalityOptions();

  return {
    personalInfo: [
      {
        name: "first_name",
        parent: "holiday_enquiry",
        control,
        type: "text",
        label: true,
        required: true,
      },
      {
        name: "last_name",
        parent: "holiday_enquiry",
        control,
        type: "text",
        label: true,
        required: true,
      },
      {
        name: "residence_country",
        parent: "holiday_enquiry",
        control,
        type: "select",
        data: countryList,
        searchable: true,
        label: true,
        required: true,
      },
      {
        name: "nationality",
        parent: "holiday_enquiry",
        control,
        type: "select",
        data: nationalityList,
        searchable: true,
        label: true,
        required: true,
      },
    ],
    contactInfo: [
      {
        name: "email",
        parent: "holiday_enquiry",
        control,
        type: "text",
        label: true,
        required: true,
        full: true,
      },
      {
        name: "phone",
        parent: "holiday_enquiry",
        control,
        type: "phone",
        label: true,
        required: true,
        full: true,
      },
      {
        name: "customer_type",
        parent: "holiday_enquiry",
        control,
        type: "select",
        data: customerTypeOptions,
        label: true,
        required: true,
        full: true,
      },
      {
        name: "company",
        parent: "holiday_enquiry",
        control,
        type: "text",
        label: true,
        required: false,
      },
      {
        name: "residence",
        parent: "holiday_enquiry",
        control,
        type: "text",
        label: true,
        required: false,
      },
    ],
    travelInfo: [
      {
        name: "from_date",
        parent: "holiday_enquiry",
        control,
        type: "datepicker",
        label: true,
        required: true,
      },
      {
        name: "to_date",
        parent: "holiday_enquiry",
        control,
        type: "datepicker",
        label: true,
        required: true,
      },
      {
        name: "destination",
        parent: "holiday_enquiry",
        control,
        type: "text",
        label: true,
        required: false,
        full: true,
      },
      {
        name: "package_name",
        parent: "holiday_enquiry",
        control,
        type: "text",
        label: true,
        required: true,
        full: true,
      },
      {
        name: "budget",
        parent: "holiday_enquiry",
        control,
        type: "text",
        label: true,
        required: false,
        full: true,
      },
    ],
    additionalInfo: [
      {
        name: "description",
        parent: "holiday_enquiry",
        control,
        type: "textarea",
        label: true,
        required: false,
        full: true,
      },
    ],
  };
};
