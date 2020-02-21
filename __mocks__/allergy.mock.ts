export const patient: fhir.Patient = {
  resourceType: "Patient",
  id: "8673ee4f-e2ab-4077-ba55-4980f408773e",
  extension: [
    {
      url:
        "http://fhir-es.transcendinsights.com/stu3/StructureDefinition/resource-date-created",
      valueDateTime: "2017-01-18T09:42:40+00:00"
    },
    {
      url:
        "https://purl.org/elab/fhir/StructureDefinition/Creator-crew-version1",
      valueString: "daemon"
    }
  ],
  identifier: [
    {
      id: "1f0ad7a1-430f-4397-b571-59ea654a52db",
      use: "usual",
      system: "OpenMRS ID",
      value: "10010W"
    }
  ],
  active: true,
  name: [
    {
      id: "efdb246f-4142-4c12-a27a-9be60b9592e9",
      use: "usual",
      family: "Wilson",
      given: ["John"]
    }
  ],
  gender: "male",
  birthDate: "1972-04-04",
  deceasedBoolean: false,
  address: [
    {
      id: "0c244eae-85c8-4cc9-b168-96b51f864e77",
      use: "home",
      line: ["Address10351"],
      city: "City0351",
      state: "State0351tested",
      postalCode: "60351",
      country: "Country0351"
    }
  ]
};

export const mockAllegenResponse = {
  setMembers: [
    {
      name: {
        uuid: "162298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        display: "ACE inhibitors"
      }
    },
    {
      name: {
        uuid: "162299AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        display: "ARBs (angiotensin II receptor blockers)"
      }
    },
    {
      name: { uuid: "71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", display: "Aspirin" }
    },
    {
      name: {
        uuid: "162301AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        display: "Cephalosporins"
      }
    },
    {
      name: {
        uuid: "73667AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        display: "Codeine"
      }
    },
    {
      name: {
        uuid: "162305AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        display: "Heparins"
      }
    },
    {
      name: {
        uuid: "162307AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        display: "Statins"
      }
    },
    {
      name: {
        uuid: "162302AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        display: "Erythromycins"
      }
    },
    {
      name: {
        uuid: "80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        display: "Morphine"
      }
    },
    {
      name: {
        uuid: "162306AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        display: "NSAIDs"
      }
    },
    {
      name: {
        uuid: "162297AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        display: "Penicillins"
      }
    },
    {
      name: {
        uuid: "162170AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        display: "Sulfonamides"
      }
    },
    {
      name: {
        uuid: "5622AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        display: "Other"
      }
    }
  ]
};

export const mockAllergyReactions = {
  setMembers: [
    {
      uuid: "121677AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      display: "Mental status change",
      name: {
        display: "Mental status change",
        uuid: "127084BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
        name: "Mental status change",
        locale: "en",
        localePreferred: true,
        conceptNameType: null,
        links: [
          {
            rel: "self",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/121677AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/127084BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
          },
          {
            rel: "full",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/121677AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/127084BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB?v=full"
          }
        ],
        resourceVersion: "1.9"
      },
      datatype: {
        uuid: "8d4a4c94-c2cc-11de-8d13-0010c6dffd0f",
        display: "N/A",
        links: [
          {
            rel: "self",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/conceptdatatype/8d4a4c94-c2cc-11de-8d13-0010c6dffd0f"
          }
        ]
      },
      conceptClass: {
        uuid: "8d4918b0-c2cc-11de-8d13-0010c6dffd0f",
        display: "Diagnosis",
        links: [
          {
            rel: "self",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/conceptclass/8d4918b0-c2cc-11de-8d13-0010c6dffd0f"
          }
        ]
      },
      set: false,
      version: "",
      retired: false,
      names: [
        {
          uuid: "134528BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "Le changement de l'état mental",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/121677AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134528BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "134529BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "Chanjman eta mantal",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/121677AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134529BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "21808BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "Altered Mental Status",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/121677AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/21808BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "80786BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "estado mental alterado",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/121677AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/80786BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "127084BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "Mental status change",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/121677AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/127084BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        }
      ],
      descriptions: [],
      mappings: [
        {
          uuid: "185768ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "CIEL: 121677",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/121677AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/185768ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "70242ABBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "SNOMED CT: 419284004",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/121677AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/70242ABBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "266979ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "IMO ProblemIT: 72276",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/121677AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/266979ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "95967ABBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "ICD-10-WHO: F99",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/121677AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/95967ABBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        }
      ],
      answers: [],
      setMembers: [],
      attributes: [],
      links: [
        {
          rel: "self",
          uri:
            "http://localhost:8090/openmrs/ws/rest/v1/concept/121677AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
        },
        {
          rel: "full",
          uri:
            "http://localhost:8090/openmrs/ws/rest/v1/concept/121677AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA?v=full"
        }
      ],
      resourceVersion: "2.0"
    },
    {
      uuid: "121629AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      display: "Anaemia",
      name: {
        display: "Anaemia",
        uuid: "21761BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
        name: "Anaemia",
        locale: "en",
        localePreferred: true,
        conceptNameType: "FULLY_SPECIFIED",
        links: [
          {
            rel: "self",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/121629AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/21761BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
          },
          {
            rel: "full",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/121629AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/21761BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB?v=full"
          }
        ],
        resourceVersion: "1.9"
      },
      datatype: {
        uuid: "8d4a4c94-c2cc-11de-8d13-0010c6dffd0f",
        display: "N/A",
        links: [
          {
            rel: "self",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/conceptdatatype/8d4a4c94-c2cc-11de-8d13-0010c6dffd0f"
          }
        ]
      },
      conceptClass: {
        uuid: "8d4918b0-c2cc-11de-8d13-0010c6dffd0f",
        display: "Diagnosis",
        links: [
          {
            rel: "self",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/conceptclass/8d4918b0-c2cc-11de-8d13-0010c6dffd0f"
          }
        ]
      },
      set: false,
      version: "",
      retired: false,
      names: [
        {
          uuid: "21764BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "Kubura amaraso",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/121629AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/21764BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "130249BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "Bệnh thiếu máu",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/121629AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/130249BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "131466BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "Thiếu máu",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/121629AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/131466BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "80822BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "anemia",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/121629AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/80822BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "134614BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "Anemi",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/121629AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134614BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "21762BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "Anémie",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/121629AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/21762BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "127495BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "রক্তস্বল্পতা",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/121629AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/127495BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "111240BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "АНЕМИЯ",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/121629AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/111240BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "127494BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "Anemia",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/121629AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/127494BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "21765BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "Upungufu wa damu mwilini",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/121629AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/21765BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "21761BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "Anaemia",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/121629AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/21761BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "21763BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "anemia",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/121629AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/21763BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "100564BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "Anaemic",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/121629AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/100564BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        }
      ],
      descriptions: [
        {
          uuid: "6449FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
          display:
            "A reduction in the number of circulating erythrocytes or in the quantity of hemoglobin.",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/121629AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/description/6449FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
            }
          ]
        },
        {
          uuid: "6450FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
          display: "ugonjwa wa kuvuja damu",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/121629AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/description/6450FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
            }
          ]
        }
      ],
      mappings: [
        {
          uuid: "185735ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "CIEL: 121629",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/121629AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/185735ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "133869ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "AMPATH: 3",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/121629AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/133869ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "70276ABBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "SNOMED CT: 271737000",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/121629AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/70276ABBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "88742ABBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "ICD-10-WHO: D64.9",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/121629AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/88742ABBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "267206ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "IMO ProblemIT: 37980",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/121629AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/267206ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "136180ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "AMPATH: 6030",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/121629AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/136180ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "143600ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "PIH: 3",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/121629AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/143600ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        }
      ],
      answers: [],
      setMembers: [],
      attributes: [],
      links: [
        {
          rel: "self",
          uri:
            "http://localhost:8090/openmrs/ws/rest/v1/concept/121629AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
        },
        {
          rel: "full",
          uri:
            "http://localhost:8090/openmrs/ws/rest/v1/concept/121629AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA?v=full"
        }
      ],
      resourceVersion: "2.0"
    },
    {
      uuid: "148888AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      display: "Anaphylaxis",
      name: {
        display: "Anaphylaxis",
        uuid: "48506BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
        name: "Anaphylaxis",
        locale: "en",
        localePreferred: true,
        conceptNameType: "FULLY_SPECIFIED",
        links: [
          {
            rel: "self",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/148888AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/48506BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
          },
          {
            rel: "full",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/148888AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/48506BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB?v=full"
          }
        ],
        resourceVersion: "1.9"
      },
      datatype: {
        uuid: "8d4a4c94-c2cc-11de-8d13-0010c6dffd0f",
        display: "N/A",
        links: [
          {
            rel: "self",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/conceptdatatype/8d4a4c94-c2cc-11de-8d13-0010c6dffd0f"
          }
        ]
      },
      conceptClass: {
        uuid: "8d4918b0-c2cc-11de-8d13-0010c6dffd0f",
        display: "Diagnosis",
        links: [
          {
            rel: "self",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/conceptclass/8d4918b0-c2cc-11de-8d13-0010c6dffd0f"
          }
        ]
      },
      set: false,
      version: "",
      retired: false,
      names: [
        {
          uuid: "134615BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "Anaphylaxie",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/148888AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134615BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "57491BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "anafilaxis",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/148888AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/57491BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "134616BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "Anafilaktik",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/148888AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134616BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "111235BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "АНАФИЛАКСИЯ",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/148888AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/111235BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "114498BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "anafylaxie",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/148888AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/114498BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "48506BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "Anaphylaxis",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/148888AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/48506BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "128037BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "Sốc phản vệ",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/148888AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/128037BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        }
      ],
      descriptions: [
        {
          uuid: "15170FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
          display:
            "An acute hypersensitivity reaction due to exposure to a previously encountered antigen. The reaction may include rapidly progressing urticaria, respiratory distress, vascular collapse, systemic shock, and death.",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/148888AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/description/15170FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
            }
          ]
        }
      ],
      mappings: [
        {
          uuid: "150048ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "3BT: 10005487",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/148888AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/150048ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "133162ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "PIH: 998",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/148888AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/133162ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "208315ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "CIEL: 148888",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/148888AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/208315ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "46784ABBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "SNOMED CT: 39579001",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/148888AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/46784ABBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "238853ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "IMO ProblemIT: 37966",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/148888AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/238853ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "102343ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "ICD-10-WHO: T78.2",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/148888AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/102343ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "161808ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "ICPC2: A92",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/148888AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/161808ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        }
      ],
      answers: [],
      setMembers: [],
      attributes: [],
      links: [
        {
          rel: "self",
          uri:
            "http://localhost:8090/openmrs/ws/rest/v1/concept/148888AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
        },
        {
          rel: "full",
          uri:
            "http://localhost:8090/openmrs/ws/rest/v1/concept/148888AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA?v=full"
        }
      ],
      resourceVersion: "2.0"
    }
  ]
};

export const mockPatientAllergy = {
  headers: null,
  ok: true,
  redirected: true,
  status: 200,
  statusText: "ok",
  trailer: null,
  type: null,
  url: "",
  clone: null,
  body: null,
  bodyUsed: null,
  arrayBuffer: null,
  blob: null,
  formData: null,
  json: null,
  text: null,
  data: {
    display: "ACE inhibitors",
    uuid: "e68fb587-486b-4894-9fc8-eba08fe682c7",
    allergen: {
      allergenType: "DRUG",
      codedAllergen: {
        uuid: "162298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        display: "ACE inhibitors",
        name: {
          display: "ACE inhibitors",
          uuid: "126205BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          name: "ACE inhibitors"
        },
        names: [
          {
            uuid: "134688BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Enzyme de conversion classe des inhibiteurs de la drogue",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134688BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "125408BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "ACE-inhibitors",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125408BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "135443BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Inhibiteurs de l’ECA",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/135443BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "134689BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Anjyotansen-konvèti anzim inhibiteurs klas dwòg",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134689BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "125409BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Angiotensin-converting enzyme inhibitors drug class",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125409BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "126205BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "ACE inhibitors",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/126205BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "127561BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Thuốc ức chế men chuyển",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/127561BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          }
        ],
        descriptions: [],
        mappings: [
          {
            uuid: "275111ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "CIEL: 162298",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/275111ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "275109ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "SNOMED CT: 41549009",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/275109ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "279273ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "NDF-RT NUI: N0000000181",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/279273ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "275110ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "NDF-RT NUI: N0000175562",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/275110ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "283334ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "MED-RT NUI: N0000175562",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/283334ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          }
        ],
        answers: [],
        setMembers: [],
        attributes: [],
        links: [
          {
            rel: "self",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/162298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
          },
          {
            rel: "full",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/162298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA?v=full"
          }
        ],
        resourceVersion: "2.0"
      },
      nonCodedAllergen: null
    },
    severity: {
      uuid: "1500AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      display: "Severe",
      name: {
        display: "Severe",
        uuid: "1742BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
        name: "Severe",
        locale: "en",
        localePreferred: true,
        conceptNameType: "FULLY_SPECIFIED",
        links: [
          {
            rel: "self",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/1500AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/1742BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
          },
          {
            rel: "full",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/1500AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/1742BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB?v=full"
          }
        ],
        resourceVersion: "1.9"
      },
      datatype: {
        uuid: "8d4a4c94-c2cc-11de-8d13-0010c6dffd0f",
        display: "N/A",
        links: [
          {
            rel: "self",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/conceptdatatype/8d4a4c94-c2cc-11de-8d13-0010c6dffd0f"
          }
        ]
      },
      conceptClass: {
        uuid: "8d491a9a-c2cc-11de-8d13-0010c6dffd0f",
        display: "Finding",
        links: [
          {
            rel: "self",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/conceptclass/8d491a9a-c2cc-11de-8d13-0010c6dffd0f"
          }
        ]
      },
      set: false,
      version: "",
      retired: false,
      names: [
        {
          uuid: "106144BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "SÉVÈRE",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/1500AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/106144BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "1742BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "Severe",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/1500AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/1742BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "134599BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "Sevè",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/1500AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134599BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        }
      ],
      descriptions: [
        {
          uuid: "16229FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
          display: "General qualifier value for the severity assesment",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/1500AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/description/16229FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
            }
          ]
        }
      ],
      mappings: [
        {
          uuid: "133263ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "PIH: 1903",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/1500AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/133263ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "135122ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "AMPATH: 1745",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/1500AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/135122ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "171742ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "CIEL: 1500",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/1500AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/171742ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        },
        {
          uuid: "132651ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          display: "SNOMED CT: 24484000",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/1500AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/132651ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            }
          ]
        }
      ],
      answers: [],
      setMembers: [],
      attributes: [],
      links: [
        {
          rel: "self",
          uri:
            "http://localhost:8090/openmrs/ws/rest/v1/concept/1500AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
        },
        {
          rel: "full",
          uri:
            "http://localhost:8090/openmrs/ws/rest/v1/concept/1500AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA?v=full"
        }
      ],
      resourceVersion: "2.0"
    },
    comment: "Patient Allergy comments",
    reactions: [
      {
        reaction: {
          uuid: "121677AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
          display: "Mental status change",
          name: {
            display: "Mental status change",
            uuid: "127084BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            name: "Mental status change",
            locale: "en",
            localePreferred: true,
            conceptNameType: null,
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/121677AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/127084BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              },
              {
                rel: "full",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/121677AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/127084BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB?v=full"
              }
            ],
            resourceVersion: "1.9"
          },
          datatype: {
            uuid: "8d4a4c94-c2cc-11de-8d13-0010c6dffd0f",
            display: "N/A",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/conceptdatatype/8d4a4c94-c2cc-11de-8d13-0010c6dffd0f"
              }
            ]
          },
          conceptClass: {
            uuid: "8d4918b0-c2cc-11de-8d13-0010c6dffd0f",
            display: "Diagnosis",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/conceptclass/8d4918b0-c2cc-11de-8d13-0010c6dffd0f"
              }
            ]
          },
          set: false,
          version: "",
          retired: false,
          names: [
            {
              uuid: "134528BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
              display: "Le changement de l'état mental",
              links: [
                {
                  rel: "self",
                  uri:
                    "http://localhost:8090/openmrs/ws/rest/v1/concept/121677AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134528BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
                }
              ]
            },
            {
              uuid: "134529BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
              display: "Chanjman eta mantal",
              links: [
                {
                  rel: "self",
                  uri:
                    "http://localhost:8090/openmrs/ws/rest/v1/concept/121677AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134529BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
                }
              ]
            },
            {
              uuid: "21808BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
              display: "Altered Mental Status",
              links: [
                {
                  rel: "self",
                  uri:
                    "http://localhost:8090/openmrs/ws/rest/v1/concept/121677AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/21808BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
                }
              ]
            },
            {
              uuid: "80786BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
              display: "estado mental alterado",
              links: [
                {
                  rel: "self",
                  uri:
                    "http://localhost:8090/openmrs/ws/rest/v1/concept/121677AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/80786BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
                }
              ]
            },
            {
              uuid: "127084BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
              display: "Mental status change",
              links: [
                {
                  rel: "self",
                  uri:
                    "http://localhost:8090/openmrs/ws/rest/v1/concept/121677AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/127084BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
                }
              ]
            }
          ],
          descriptions: [],
          mappings: [
            {
              uuid: "185768ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
              display: "CIEL: 121677",
              links: [
                {
                  rel: "self",
                  uri:
                    "http://localhost:8090/openmrs/ws/rest/v1/concept/121677AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/185768ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
                }
              ]
            },
            {
              uuid: "70242ABBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
              display: "SNOMED CT: 419284004",
              links: [
                {
                  rel: "self",
                  uri:
                    "http://localhost:8090/openmrs/ws/rest/v1/concept/121677AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/70242ABBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
                }
              ]
            },
            {
              uuid: "266979ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
              display: "IMO ProblemIT: 72276",
              links: [
                {
                  rel: "self",
                  uri:
                    "http://localhost:8090/openmrs/ws/rest/v1/concept/121677AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/266979ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
                }
              ]
            },
            {
              uuid: "95967ABBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
              display: "ICD-10-WHO: F99",
              links: [
                {
                  rel: "self",
                  uri:
                    "http://localhost:8090/openmrs/ws/rest/v1/concept/121677AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/95967ABBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
                }
              ]
            }
          ],
          answers: [],
          setMembers: [],
          attributes: [],
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/121677AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
            },
            {
              rel: "full",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/121677AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA?v=full"
            }
          ],
          resourceVersion: "2.0"
        },
        reactionNonCoded: null
      }
    ],
    patient: {
      uuid: "90f7f0b4-06a8-4a97-9678-e7a977f4b518",
      display: "10010W - John Taylor",
      identifiers: [
        {
          uuid: "21bb350c-799b-4837-9496-2ad213e058a4",
          display: "OpenMRS ID = 10010W",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/patient/90f7f0b4-06a8-4a97-9678-e7a977f4b518/identifier/21bb350c-799b-4837-9496-2ad213e058a4"
            }
          ]
        }
      ],
      person: {
        uuid: "90f7f0b4-06a8-4a97-9678-e7a977f4b518",
        display: "John Taylor",
        gender: "M",
        age: 41,
        birthdate: "1978-08-25T00:00:00.000+0000",
        birthdateEstimated: false,
        dead: false,
        deathDate: null,
        causeOfDeath: null,
        preferredName: {
          uuid: "4b68f067-6f4d-451a-bd80-342fc21ea486",
          display: "John Taylor",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/person/90f7f0b4-06a8-4a97-9678-e7a977f4b518/name/4b68f067-6f4d-451a-bd80-342fc21ea486"
            }
          ]
        },
        preferredAddress: {
          uuid: "e350d53f-0252-4259-8d87-d97a2d58166e",
          display: "Police Line",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/person/90f7f0b4-06a8-4a97-9678-e7a977f4b518/address/e350d53f-0252-4259-8d87-d97a2d58166e"
            }
          ]
        },
        attributes: [],
        voided: false,
        deathdateEstimated: false,
        birthtime: null,
        links: [
          {
            rel: "self",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/person/90f7f0b4-06a8-4a97-9678-e7a977f4b518"
          },
          {
            rel: "full",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/person/90f7f0b4-06a8-4a97-9678-e7a977f4b518?v=full"
          }
        ],
        resourceVersion: "1.11"
      },
      voided: false,
      links: [
        {
          rel: "self",
          uri:
            "http://localhost:8090/openmrs/ws/rest/v1/patient/90f7f0b4-06a8-4a97-9678-e7a977f4b518"
        },
        {
          rel: "full",
          uri:
            "http://localhost:8090/openmrs/ws/rest/v1/patient/90f7f0b4-06a8-4a97-9678-e7a977f4b518?v=full"
        }
      ],
      resourceVersion: "1.8"
    },
    voided: true,
    auditInfo: {
      creator: {
        uuid: "285f67ce-3d8b-4733-96e5-1e2235e8e804",
        display: "doc",
        links: [
          {
            rel: "self",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/user/285f67ce-3d8b-4733-96e5-1e2235e8e804"
          }
        ]
      },
      dateCreated: "2019-12-16T07:10:36.000+0000",
      changedBy: {
        uuid: "285f67ce-3d8b-4733-96e5-1e2235e8e804",
        display: "doc",
        links: [
          {
            rel: "self",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/user/285f67ce-3d8b-4733-96e5-1e2235e8e804"
          }
        ]
      },
      dateChanged: "2019-12-16T07:46:42.000+0000",
      voidedBy: {
        uuid: "285f67ce-3d8b-4733-96e5-1e2235e8e804",
        display: "doc",
        links: [
          {
            rel: "self",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/user/285f67ce-3d8b-4733-96e5-1e2235e8e804"
          }
        ]
      },
      dateVoided: "2019-12-16T07:46:42.000+0000",
      voidReason: "web service call"
    },
    links: [
      {
        rel: "self",
        uri:
          "http://localhost:8090/openmrs/ws/rest/v1/patient/90f7f0b4-06a8-4a97-9678-e7a977f4b518/allergy/e68fb587-486b-4894-9fc8-eba08fe682c7"
      }
    ],
    resourceVersion: "1.8"
  }
};

export const mockAllergyResult = {
  data: {
    display: "ARBs (angiotensin II receptor blockers)",
    uuid: "90c17541-833d-419e-b5d3-bc06828bf95f",
    allergen: {
      allergenType: "DRUG",
      nonCodedAllergen: null
    },
    severity: {
      uuid: "1498AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      display: "Mild",
      name: {
        display: "Mild",
        uuid: "1738BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
        name: "Mild",
        locale: "en",
        localePreferred: true,
        conceptNameType: "FULLY_SPECIFIED"
      }
    },
    comment: "The patient is showing a mild reaction to the above allergens",
    reactions: [
      {
        reaction: {
          uuid: "121677AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
          display: "Mental status change",
          name: {
            display: "Mental status change",
            uuid: "127084BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            name: "Mental status change",
            locale: "en",
            localePreferred: true,
            conceptNameType: null
          }
        }
      }
    ],
    patient: {
      uuid: "90f7f0b4-06a8-4a97-9678-e7a977f4b518",
      display: "10010W - John Taylor"
    },
    auditInfo: {
      creator: {
        uuid: "285f67ce-3d8b-4733-96e5-1e2235e8e804",
        display: "doc"
      },
      dateChanged: "2020-01-03T07:05:12.000+0000"
    }
  }
};

export const mockAllergyAllergens = {
  data: {
    setMembers: [
      {
        uuid: "162298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        display: "ACE inhibitors",
        name: {
          display: "ACE inhibitors",
          uuid: "126205BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          name: "ACE inhibitors",
          locale: "en",
          localePreferred: true,
          conceptNameType: null,
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/162298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/126205BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            },
            {
              rel: "full",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/162298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/126205BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB?v=full"
            }
          ],
          resourceVersion: "1.9"
        },
        datatype: {
          uuid: "8d4a4c94-c2cc-11de-8d13-0010c6dffd0f",
          display: "N/A",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/conceptdatatype/8d4a4c94-c2cc-11de-8d13-0010c6dffd0f"
            }
          ]
        },
        conceptClass: {
          uuid: "b4535251-9183-4175-959e-9ee67dc71e78",
          display: "Pharmacologic Drug Class",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/conceptclass/b4535251-9183-4175-959e-9ee67dc71e78"
            }
          ]
        },
        set: true,
        version: "",
        retired: false,
        names: [
          {
            uuid: "134688BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Enzyme de conversion classe des inhibiteurs de la drogue",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134688BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "125408BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "ACE-inhibitors",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125408BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "135443BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Inhibiteurs de l’ECA",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/135443BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "134689BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Anjyotansen-konvèti anzim inhibiteurs klas dwòg",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134689BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "125409BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Angiotensin-converting enzyme inhibitors drug class",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125409BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "126205BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "ACE inhibitors",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/126205BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "127561BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Thuốc ức chế men chuyển",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/127561BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          }
        ],
        descriptions: [],
        mappings: [
          {
            uuid: "275111ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "CIEL: 162298",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/275111ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "275109ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "SNOMED CT: 41549009",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/275109ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "279273ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "NDF-RT NUI: N0000000181",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/279273ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "275110ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "NDF-RT NUI: N0000175562",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/275110ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "283334ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "MED-RT NUI: N0000175562",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/283334ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          }
        ],
        answers: [],
        setMembers: [],
        attributes: [],
        links: [
          {
            rel: "self",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/162298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
          },
          {
            rel: "full",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/162298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA?v=full"
          }
        ],
        resourceVersion: "2.0"
      },
      {
        uuid: "162299AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        display: "ARBs (angiotensin II receptor blockers)",
        name: {
          display: "ARBs (angiotensin II receptor blockers)",
          uuid: "126204BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          name: "ARBs (angiotensin II receptor blockers)",
          locale: "en",
          localePreferred: true,
          conceptNameType: null,
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/162299AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/126204BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            },
            {
              rel: "full",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/162299AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/126204BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB?v=full"
            }
          ],
          resourceVersion: "1.9"
        },
        datatype: {
          uuid: "8d4a4c94-c2cc-11de-8d13-0010c6dffd0f",
          display: "N/A",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/conceptdatatype/8d4a4c94-c2cc-11de-8d13-0010c6dffd0f"
            }
          ]
        },
        conceptClass: {
          uuid: "b4535251-9183-4175-959e-9ee67dc71e78",
          display: "Pharmacologic Drug Class",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/conceptclass/b4535251-9183-4175-959e-9ee67dc71e78"
            }
          ]
        },
        set: true,
        version: "",
        retired: false,
        names: [
          {
            uuid: "135444BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display:
              "ARA-II (antagonistes des récepteurs de l'angiotensine II)",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162299AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/135444BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "134692BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Anjyotansen II bloke reseptè",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162299AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134692BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "125412BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Angiotensin II receptor blockers",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162299AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125412BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "134690BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "l'angiotensine II antagonistes des récepteurs",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162299AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134690BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "134693BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "ARB",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162299AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134693BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "126204BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "ARBs (angiotensin II receptor blockers)",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162299AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/126204BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "134691BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "ARBS",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162299AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134691BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "125410BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Angiotensin 2 receptor blockers",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162299AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125410BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "125411BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Angiotensin II receptor antagonists",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162299AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125411BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "125413BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Angiotensin 2 receptor antagonists",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162299AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125413BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          }
        ],
        descriptions: [],
        mappings: [
          {
            uuid: "275113ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "SNOMED CT: 96308008",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162299AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/275113ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "283335ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "MED-RT NUI: N0000175561",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162299AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/283335ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "275114ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "CIEL: 162299",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162299AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/275114ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "275112ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "NDF-RT NUI: N0000175561",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162299AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/275112ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          }
        ],
        answers: [],
        setMembers: [],
        attributes: [],
        links: [
          {
            rel: "self",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/162299AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
          },
          {
            rel: "full",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/162299AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA?v=full"
          }
        ],
        resourceVersion: "2.0"
      },
      {
        uuid: "71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        display: "Aspirin",
        name: {
          display: "Aspirin",
          uuid: "124912BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          name: "Aspirin",
          locale: "en",
          localePreferred: true,
          conceptNameType: null,
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/124912BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            },
            {
              rel: "full",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/124912BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB?v=full"
            }
          ],
          resourceVersion: "1.9"
        },
        datatype: {
          uuid: "8d4a4c94-c2cc-11de-8d13-0010c6dffd0f",
          display: "N/A",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/conceptdatatype/8d4a4c94-c2cc-11de-8d13-0010c6dffd0f"
            }
          ]
        },
        conceptClass: {
          uuid: "8d490dfc-c2cc-11de-8d13-0010c6dffd0f",
          display: "Drug",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/conceptclass/8d490dfc-c2cc-11de-8d13-0010c6dffd0f"
            }
          ]
        },
        set: false,
        version: "",
        retired: false,
        names: [
          {
            uuid: "88955BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Buffex",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/88955BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "91268BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Ecotrin",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/91268BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "100386BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Zero-Order Release",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/100386BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "88264BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Aspirin Litecoat",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/88264BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "95549BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Nu-Seals Aspirin",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/95549BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "91456BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Entercote",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/91456BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "92400BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Gennin-FC",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/92400BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "138968BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Acetylsalicylate sodium",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/138968BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "88267BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Aspirin Tri-Buffered",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/88267BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "87869BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Anacin Aspirin Regimen",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/87869BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "88488BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Bayer Aspirin with Calcium",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/88488BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "88209BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Arthritis Pain",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/88209BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "98312BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "St. Joseph Aspirin Adult Chewable",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/98312BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "131340BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Aspirine",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/131340BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "90104BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "CTD Aspirin",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/90104BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "94469BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Med Aspirin",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/94469BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "88952BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Bufferin",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/88952BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "100449BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Zorprin",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/100449BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "124913BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "ACETYLSALICYLIC ACID",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/124913BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "96019BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Palaprin Forte",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/96019BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "87872BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Anadin All-Night",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/87872BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "92409BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Genprin",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/92409BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "88241BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Ascriptin Enteric",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/88241BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "88266BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Aspirin Low Strength",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/88266BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "89617BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Claradin",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/89617BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "91271BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Ecotrin Maximum Strength",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/91271BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "91254BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Easprin",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/91254BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "98313BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "St. Joseph Aspirin Adult EC",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/98313BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "98930BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Therapy Bayer",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/98930BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "94184BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Low Dose ASA",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/94184BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "88271BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Aspirtab",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/88271BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "88265BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Aspirin Lo-Dose",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/88265BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "3919BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Acetylsalicylate sodium",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/3919BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "91393BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Empirin",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/91393BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "99663BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Uni-Buff",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/99663BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "88249BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Aspergum",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/88249BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "98330BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Stanback Analgesic",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/98330BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "88253BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Aspir-Low",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/88253BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "93927BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Levius",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/93927BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "96672BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "postMI",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/96672BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "94062BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Litecoat Aspirin",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/94062BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "91455BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Entaprin",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/91455BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "3921BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "dawa ya kupunguza maumivu",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/3921BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "96559BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Platet",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/96559BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "88490BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Bayer Childrens Aspirin",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/88490BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "99147BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Tri-Buffered Aspirin",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/99147BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "88259BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Aspirin Child Chewable",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/88259BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "98311BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "St. Joseph Aspirin",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/98311BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "89442BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Child ASA",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/89442BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "87083BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "1/2 Halfprin",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/87083BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "98165BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Sloprin",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/98165BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "91269BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Ecotrin Adult Low Strength",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/91269BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "88256BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Aspir-trin",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/88256BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "91270BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Ecotrin Low Strength Adult",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/91270BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "92343BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Genacote",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/92343BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "96199BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Paynocil",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/96199BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "100316BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "YSP Aspirin",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/100316BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "88205BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Arthritis Foundation Aspirin",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/88205BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "91761BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Extra Strength Bayer",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/91761BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "98207BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Solprin",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/98207BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "88268BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Aspirin-Antacid",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/88268BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "88493BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Bayer Plus",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/88493BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "88251BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Aspergum Orginal",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/88251BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "88272BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Aspro Clear Maximum Strength",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/88272BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "93788BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Laboprin",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/93788BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "88953BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Bufferin Arthritis Strength",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/88953BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "92752BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Heartline",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/92752BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "92698BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Halfprin",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/92698BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "87288BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Acuprin 81",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/87288BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "99836BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Valomag",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/99836BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "3920BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Aspirine",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/3920BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "89152BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Caprin",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/89152BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "124912BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Aspirin",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/124912BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "134669BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Aspirinn",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134669BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "88250BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Aspergum Cherry",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/88250BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "97548BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Ridiprin",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/97548BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "88486BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Bayer Aspirin",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/88486BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "88491BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Bayer Low Strength",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/88491BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "88954BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Bufferin Extra Strength",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/88954BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "95495BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Norwich Aspirin",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/95495BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "87047BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "dawa ya kitibu kichwa",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/87047BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "138969BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Asetilsalisilat sodium",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/138969BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "88258BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Aspirin Child",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/88258BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "98310BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "St. Joseph Adult Chewable Aspirin",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/98310BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "94746BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Minitabs",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/94746BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "89443BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Child Aspirin",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/89443BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "89706BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Coated Aspirin",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/89706BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "99704BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Uni-Tren",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/99704BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          }
        ],
        descriptions: [
          {
            uuid: "2729FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
            display: "dawa ya kupunguza maumivu",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/description/2729FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
              }
            ]
          },
          {
            uuid: "16090FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
            display:
              "Name of a drug which is used as anti inflammatory and analgesic  ",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/description/16090FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
              }
            ]
          }
        ],
        mappings: [
          {
            uuid: "133950ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "AMPATH: 88",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/133950ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "132901ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "SNOMED NP: 387458008",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/132901ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "132902ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "PIH: 88",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/132902ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "133372ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "PIH: 3189",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/133372ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "138324ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "SNOMED CT: 7947003",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/138324ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "173116ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "CIEL: 71617",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/173116ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "127508ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "RxNORM: 1191",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/127508ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "134092ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "AMPATH: 232",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/134092ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          }
        ],
        answers: [],
        setMembers: [],
        attributes: [],
        links: [
          {
            rel: "self",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
          },
          {
            rel: "full",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/71617AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA?v=full"
          }
        ],
        resourceVersion: "2.0"
      },
      {
        uuid: "162301AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        display: "Cephalosporins",
        name: {
          display: "Cephalosporins",
          uuid: "125417BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          name: "Cephalosporins",
          locale: "en",
          localePreferred: true,
          conceptNameType: null,
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/162301AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125417BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            },
            {
              rel: "full",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/162301AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125417BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB?v=full"
            }
          ],
          resourceVersion: "1.9"
        },
        datatype: {
          uuid: "8d4a4c94-c2cc-11de-8d13-0010c6dffd0f",
          display: "N/A",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/conceptdatatype/8d4a4c94-c2cc-11de-8d13-0010c6dffd0f"
            }
          ]
        },
        conceptClass: {
          uuid: "b4535251-9183-4175-959e-9ee67dc71e78",
          display: "Pharmacologic Drug Class",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/conceptclass/b4535251-9183-4175-959e-9ee67dc71e78"
            }
          ]
        },
        set: true,
        version: "",
        retired: false,
        names: [
          {
            uuid: "134670BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Céphalosporines",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162301AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134670BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "125417BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Cephalosporins",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162301AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125417BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "134671BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Sefalosporin",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162301AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134671BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "125416BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Cephalosporin drug class",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162301AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125416BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          }
        ],
        descriptions: [
          {
            uuid: "17196FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
            display: "Drug class containing all Cephalosporin generations",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162301AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/description/17196FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
              }
            ]
          }
        ],
        mappings: [
          {
            uuid: "283336ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "MED-RT NUI: N0000175488",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162301AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/283336ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "275119ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "NDF-RT NUI: N0000011161",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162301AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/275119ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "275118ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "SNOMED CT: 51779009",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162301AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/275118ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "275120ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "CIEL: 162301",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162301AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/275120ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          }
        ],
        answers: [],
        setMembers: [],
        attributes: [],
        links: [
          {
            rel: "self",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/162301AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
          },
          {
            rel: "full",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/162301AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA?v=full"
          }
        ],
        resourceVersion: "2.0"
      },
      {
        uuid: "73667AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        display: "Codeine",
        name: {
          display: "Codeine",
          uuid: "4770BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          name: "Codeine",
          locale: "en",
          localePreferred: true,
          conceptNameType: "FULLY_SPECIFIED",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/73667AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/4770BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            },
            {
              rel: "full",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/73667AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/4770BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB?v=full"
            }
          ],
          resourceVersion: "1.9"
        },
        datatype: {
          uuid: "8d4a4c94-c2cc-11de-8d13-0010c6dffd0f",
          display: "N/A",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/conceptdatatype/8d4a4c94-c2cc-11de-8d13-0010c6dffd0f"
            }
          ]
        },
        conceptClass: {
          uuid: "8d490dfc-c2cc-11de-8d13-0010c6dffd0f",
          display: "Drug",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/conceptclass/8d490dfc-c2cc-11de-8d13-0010c6dffd0f"
            }
          ]
        },
        set: false,
        version: "",
        retired: false,
        names: [
          {
            uuid: "134672BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Codéine",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/73667AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134672BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "98334BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Stanley-Linctus",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/73667AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/98334BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "98335BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Stanley-Syrup",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/73667AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/98335BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "110453BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Cough Linctus",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/73667AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/110453BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "134673BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Kodeyinn",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/73667AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134673BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "4770BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Codeine",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/73667AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/4770BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "131324BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Codeine",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/73667AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/131324BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          }
        ],
        descriptions: [],
        mappings: [
          {
            uuid: "173948ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "CIEL: 73667",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/73667AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/173948ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "133560ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "PIH: 6403",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/73667AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/133560ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "128349ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "RxNORM: 2670",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/73667AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/128349ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "138511ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "SNOMED CT: 85990009",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/73667AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/138511ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          }
        ],
        answers: [],
        setMembers: [],
        attributes: [],
        links: [
          {
            rel: "self",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/73667AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
          },
          {
            rel: "full",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/73667AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA?v=full"
          }
        ],
        resourceVersion: "2.0"
      },
      {
        uuid: "162305AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        display: "Heparins",
        name: {
          display: "Heparins",
          uuid: "125425BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          name: "Heparins",
          locale: "en",
          localePreferred: true,
          conceptNameType: null,
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/162305AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125425BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            },
            {
              rel: "full",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/162305AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125425BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB?v=full"
            }
          ],
          resourceVersion: "1.9"
        },
        datatype: {
          uuid: "8d4a4c94-c2cc-11de-8d13-0010c6dffd0f",
          display: "N/A",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/conceptdatatype/8d4a4c94-c2cc-11de-8d13-0010c6dffd0f"
            }
          ]
        },
        conceptClass: {
          uuid: "b4535251-9183-4175-959e-9ee67dc71e78",
          display: "Pharmacologic Drug Class",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/conceptclass/b4535251-9183-4175-959e-9ee67dc71e78"
            }
          ]
        },
        set: true,
        version: "",
        retired: false,
        names: [
          {
            uuid: "134676BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Héparines",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162305AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134676BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "125424BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Heparin drug class",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162305AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125424BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "141524BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Heparin derivative",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162305AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/141524BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "125425BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Heparins",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162305AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125425BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "134677BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Klas eparinn",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162305AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134677BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          }
        ],
        descriptions: [],
        mappings: [
          {
            uuid: "275130ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "SNOMED NP: 84812008",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162305AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/275130ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "275131ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "CIEL: 162305",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162305AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/275131ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "283340ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "MED-RT NUI: N0000175860",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162305AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/283340ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "275132ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "NDF-RT NUI: N0000006341",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162305AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/275132ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          }
        ],
        answers: [],
        setMembers: [
          {
            uuid: "77413AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
            display: "Heparin",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/77413AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
              }
            ]
          },
          {
            uuid: "77414AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
            display: "HEPARIN SODIUM",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/77414AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
              }
            ]
          },
          {
            uuid: "72681AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
            display: "CALCIUM HEPARIN",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/72681AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
              }
            ]
          },
          {
            uuid: "77419AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
            display: "HEPARINOIDS",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/77419AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
              }
            ]
          },
          {
            uuid: "104813AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
            display: "HEPARINOIDS / SALICYLIC ACID",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/104813AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
              }
            ]
          },
          {
            uuid: "104811AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
            display: "HEPARINOIDS / HYALURONIDASE",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/104811AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
              }
            ]
          }
        ],
        attributes: [],
        links: [
          {
            rel: "self",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/162305AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
          },
          {
            rel: "full",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/162305AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA?v=full"
          }
        ],
        resourceVersion: "2.0"
      },
      {
        uuid: "162307AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        display: "Statins",
        name: {
          display: "Statins",
          uuid: "125433BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          name: "Statins",
          locale: "en",
          localePreferred: true,
          conceptNameType: null,
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/162307AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125433BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            },
            {
              rel: "full",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/162307AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125433BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB?v=full"
            }
          ],
          resourceVersion: "1.9"
        },
        datatype: {
          uuid: "8d4a4c94-c2cc-11de-8d13-0010c6dffd0f",
          display: "N/A",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/conceptdatatype/8d4a4c94-c2cc-11de-8d13-0010c6dffd0f"
            }
          ]
        },
        conceptClass: {
          uuid: "b4535251-9183-4175-959e-9ee67dc71e78",
          display: "Pharmacologic Drug Class",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/conceptclass/b4535251-9183-4175-959e-9ee67dc71e78"
            }
          ]
        },
        set: true,
        version: "",
        retired: false,
        names: [
          {
            uuid: "134684BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Les statines",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162307AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134684BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "125431BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display:
              "Hydroxymethylglutaryl-coenzyme A reductase inhibitor drug class",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162307AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125431BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "134685BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Medikaman pou bese kolestewòl",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162307AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134685BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "125430BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Hydroxymethylglutaryl-coenzyme A reductase inhibitors",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162307AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125430BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "125432BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "HMG CoA reductase inhibitors",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162307AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125432BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "125433BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Statins",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162307AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125433BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          }
        ],
        descriptions: [],
        mappings: [
          {
            uuid: "275139ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "CIEL: 162307",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162307AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/275139ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "275138ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "SNOMED CT: 96302009",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162307AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/275138ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "275137ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "NDF-RT NUI: N0000175589",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162307AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/275137ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          }
        ],
        answers: [],
        setMembers: [],
        attributes: [],
        links: [
          {
            rel: "self",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/162307AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
          },
          {
            rel: "full",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/162307AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA?v=full"
          }
        ],
        resourceVersion: "2.0"
      },
      {
        uuid: "162302AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        display: "Erythromycins",
        name: {
          display: "Erythromycins",
          uuid: "126206BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          name: "Erythromycins",
          locale: "en",
          localePreferred: true,
          conceptNameType: null,
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/162302AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/126206BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            },
            {
              rel: "full",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/162302AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/126206BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB?v=full"
            }
          ],
          resourceVersion: "1.9"
        },
        datatype: {
          uuid: "8d4a4c94-c2cc-11de-8d13-0010c6dffd0f",
          display: "N/A",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/conceptdatatype/8d4a4c94-c2cc-11de-8d13-0010c6dffd0f"
            }
          ]
        },
        conceptClass: {
          uuid: "b4535251-9183-4175-959e-9ee67dc71e78",
          display: "Pharmacologic Drug Class",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/conceptclass/b4535251-9183-4175-959e-9ee67dc71e78"
            }
          ]
        },
        set: true,
        version: "",
        retired: false,
        names: [
          {
            uuid: "134674BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Erythromycines",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162302AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134674BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "125419BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Macrolide drug class",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162302AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125419BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "126206BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Erythromycins",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162302AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/126206BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "134675BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Eritwomisinn",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162302AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134675BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "125418BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Macrolides",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162302AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125418BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          }
        ],
        descriptions: [],
        mappings: [
          {
            uuid: "275121ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "NDF-RT NUI: N0000007529",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162302AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/275121ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "275123ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "CIEL: 162302",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162302AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/275123ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "283337ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "MED-RT NUI: N0000175431",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162302AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/283337ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "275122ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "SNOMED CT: 105908007",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162302AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/275122ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          }
        ],
        answers: [],
        setMembers: [],
        attributes: [],
        links: [
          {
            rel: "self",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/162302AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
          },
          {
            rel: "full",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/162302AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA?v=full"
          }
        ],
        resourceVersion: "2.0"
      },
      {
        uuid: "80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        display: "Morphine",
        name: {
          display: "Morphine",
          uuid: "6837BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          name: "Morphine",
          locale: "en",
          localePreferred: true,
          conceptNameType: "FULLY_SPECIFIED",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/6837BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            },
            {
              rel: "full",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/6837BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB?v=full"
            }
          ],
          resourceVersion: "1.9"
        },
        datatype: {
          uuid: "8d4a4c94-c2cc-11de-8d13-0010c6dffd0f",
          display: "N/A",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/conceptdatatype/8d4a4c94-c2cc-11de-8d13-0010c6dffd0f"
            }
          ]
        },
        conceptClass: {
          uuid: "8d490dfc-c2cc-11de-8d13-0010c6dffd0f",
          display: "Drug",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/conceptclass/8d490dfc-c2cc-11de-8d13-0010c6dffd0f"
            }
          ]
        },
        set: false,
        version: "",
        retired: false,
        names: [
          {
            uuid: "95707BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "OMS",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/95707BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "95796BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Oramorph",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/95796BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "6837BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Morphine",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/6837BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "100439BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Zomorph",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/100439BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "97433BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Rescudose",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/97433BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "90466BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Depodur",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/90466BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "94901BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "MS/S",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/94901BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "91169BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Duromorph",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/91169BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "95276BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Nepenthe",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/95276BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "95797BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Oramorph SR",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/95797BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "134678BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Morphine",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134678BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "93316BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Infumorph",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/93316BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "94873BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Morcap SR",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/94873BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "97722BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Roxanol",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/97722BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "94902BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "MSIR",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/94902BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "90413BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Demerol",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/90413BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "97602BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "RMS",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/97602BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "88383BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Avinza",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/88383BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "93576BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Kadian",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/93576BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "91133BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Duramorph PF",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/91133BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "95708BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "OMS brand of Morphine Sulfate",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/95708BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "98025BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Sevredol",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/98025BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "97256BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Rapi-Ject",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/97256BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "97723BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Roxanol UD",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/97723BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "88282BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Astramorph PF",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/88282BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "94900BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "MS Contin",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/94900BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "94254BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "M-Eslon",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/94254BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "134679BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Morfinn",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134679BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "94963BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "MXL brand of morphine sulfate",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/94963BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "94904BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "MST Continus",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/94904BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "97724BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Roxanol-T",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/97724BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          }
        ],
        descriptions: [],
        mappings: [
          {
            uuid: "138961ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "SNOMED CT: 73572009",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/138961ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "175991ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "CIEL: 80106",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/175991ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "130406ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "RxNORM: 7052",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/130406ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "145370ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "SNOMED NP: 373529000",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/145370ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          }
        ],
        answers: [],
        setMembers: [],
        attributes: [],
        links: [
          {
            rel: "self",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
          },
          {
            rel: "full",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/80106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA?v=full"
          }
        ],
        resourceVersion: "2.0"
      },
      {
        uuid: "162306AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        display: "NSAIDs",
        name: {
          display: "NSAIDs",
          uuid: "125428BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          name: "NSAIDs",
          locale: "en",
          localePreferred: true,
          conceptNameType: null,
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/162306AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125428BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            },
            {
              rel: "full",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/162306AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125428BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB?v=full"
            }
          ],
          resourceVersion: "1.9"
        },
        datatype: {
          uuid: "8d4a4c94-c2cc-11de-8d13-0010c6dffd0f",
          display: "N/A",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/conceptdatatype/8d4a4c94-c2cc-11de-8d13-0010c6dffd0f"
            }
          ]
        },
        conceptClass: {
          uuid: "b4535251-9183-4175-959e-9ee67dc71e78",
          display: "Pharmacologic Drug Class",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/conceptclass/b4535251-9183-4175-959e-9ee67dc71e78"
            }
          ]
        },
        set: true,
        version: "",
        retired: false,
        names: [
          {
            uuid: "134680BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display:
              "Non stéroïdiens agent anti-inflammatoire classe de médicaments",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162306AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134680BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "125427BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Nonsteroidal anti-inflammatory drug",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162306AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125427BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "125429BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Nonsteroidal anti-inflammatory agent drug class",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162306AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125429BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "134681BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Steroidyen anti-enflamatwa dwòg ajan klas",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162306AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134681BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "135445BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "AINS",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162306AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/135445BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "125428BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "NSAIDs",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162306AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125428BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          }
        ],
        descriptions: [],
        mappings: [
          {
            uuid: "275135ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "NDF-RT NUI: N0000175722",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162306AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/275135ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "275136ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "CIEL: 162306",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162306AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/275136ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "283341ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "MED-RT NUI: N0000175722",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162306AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/283341ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "275134ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "SNOMED CT: 16403005",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162306AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/275134ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          }
        ],
        answers: [],
        setMembers: [],
        attributes: [],
        links: [
          {
            rel: "self",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/162306AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
          },
          {
            rel: "full",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/162306AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA?v=full"
          }
        ],
        resourceVersion: "2.0"
      },
      {
        uuid: "162297AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        display: "Penicillins",
        name: {
          display: "Penicillins",
          uuid: "125406BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          name: "Penicillins",
          locale: "en",
          localePreferred: true,
          conceptNameType: null,
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/162297AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125406BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            },
            {
              rel: "full",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/162297AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125406BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB?v=full"
            }
          ],
          resourceVersion: "1.9"
        },
        datatype: {
          uuid: "8d4a4c94-c2cc-11de-8d13-0010c6dffd0f",
          display: "N/A",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/conceptdatatype/8d4a4c94-c2cc-11de-8d13-0010c6dffd0f"
            }
          ]
        },
        conceptClass: {
          uuid: "b4535251-9183-4175-959e-9ee67dc71e78",
          display: "Pharmacologic Drug Class",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/conceptclass/b4535251-9183-4175-959e-9ee67dc71e78"
            }
          ]
        },
        set: true,
        version: "",
        retired: false,
        names: [
          {
            uuid: "134682BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Pénicillines",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162297AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134682BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "125407BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Penicillin drug class",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162297AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125407BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "134683BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Penisilinn",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162297AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134683BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "125406BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Penicillins",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162297AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125406BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          }
        ],
        descriptions: [],
        mappings: [
          {
            uuid: "275105ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "SNOMED NP: 373270004",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162297AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/275105ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "275107ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "SNOMED NP: 6369005",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162297AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/275107ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "275106ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "NDF-RT NUI: N0000011281",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162297AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/275106ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "283333ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "MED-RT NUI: N0000175497",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162297AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/283333ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "275108ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "CIEL: 162297",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162297AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/275108ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          }
        ],
        answers: [],
        setMembers: [],
        attributes: [],
        links: [
          {
            rel: "self",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/162297AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
          },
          {
            rel: "full",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/162297AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA?v=full"
          }
        ],
        resourceVersion: "2.0"
      },
      {
        uuid: "162170AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        display: "Sulfonamides",
        name: {
          display: "Sulfonamides",
          uuid: "125434BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          name: "Sulfonamides",
          locale: "en",
          localePreferred: true,
          conceptNameType: null,
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/162170AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125434BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            },
            {
              rel: "full",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/162170AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125434BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB?v=full"
            }
          ],
          resourceVersion: "1.9"
        },
        datatype: {
          uuid: "8d4a4c94-c2cc-11de-8d13-0010c6dffd0f",
          display: "N/A",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/conceptdatatype/8d4a4c94-c2cc-11de-8d13-0010c6dffd0f"
            }
          ]
        },
        conceptClass: {
          uuid: "b4535251-9183-4175-959e-9ee67dc71e78",
          display: "Pharmacologic Drug Class",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/conceptclass/b4535251-9183-4175-959e-9ee67dc71e78"
            }
          ]
        },
        set: true,
        version: "",
        retired: false,
        names: [
          {
            uuid: "134686BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Sulfamides",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162170AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134686BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "125435BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Sulfonamide",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162170AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125435BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "124963BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Sulfonamide drug class",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162170AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/124963BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "125434BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Sulfonamides",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162170AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125434BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "134687BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Sulfonamid",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162170AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134687BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "125436BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Sulfa drugs",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162170AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/125436BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          }
        ],
        descriptions: [
          {
            uuid: "17165FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
            display: "Class of antibiotic or substance",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162170AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/description/17165FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
              }
            ]
          }
        ],
        mappings: [
          {
            uuid: "283332ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "MED-RT NUI: N0000175880",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162170AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/283332ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "237189ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "SNOMED CT: 387406002",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162170AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/237189ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "275140ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "NDF-RT NUI: N0000008048",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162170AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/275140ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "237191ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "CIEL: 162170",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162170AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/237191ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "237190ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "SNOMED NP: 59255006",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/162170AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/237190ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          }
        ],
        answers: [],
        setMembers: [
          {
            uuid: "924AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
            display: "SULFADOXINE AND PYRIMETHAMINE",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/924AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
              }
            ]
          },
          {
            uuid: "84462AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
            display: "SULFADOXINE",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/84462AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
              }
            ]
          },
          {
            uuid: "105232AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
            display: "PYRIMETHAMINE / SULFADOXINE",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/105232AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
              }
            ]
          }
        ],
        attributes: [],
        links: [
          {
            rel: "self",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/162170AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
          },
          {
            rel: "full",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/162170AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA?v=full"
          }
        ],
        resourceVersion: "2.0"
      },
      {
        uuid: "5622AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        display: "Other",
        name: {
          display: "Other",
          uuid: "126207BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
          name: "Other",
          locale: "en",
          localePreferred: true,
          conceptNameType: null,
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/5622AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/126207BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
            },
            {
              rel: "full",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/concept/5622AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/126207BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB?v=full"
            }
          ],
          resourceVersion: "1.9"
        },
        datatype: {
          uuid: "8d4a4c94-c2cc-11de-8d13-0010c6dffd0f",
          display: "N/A",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/conceptdatatype/8d4a4c94-c2cc-11de-8d13-0010c6dffd0f"
            }
          ]
        },
        conceptClass: {
          uuid: "8d492774-c2cc-11de-8d13-0010c6dffd0f",
          display: "Misc",
          links: [
            {
              rel: "self",
              uri:
                "http://localhost:8090/openmrs/ws/rest/v1/conceptclass/8d492774-c2cc-11de-8d13-0010c6dffd0f"
            }
          ]
        },
        set: false,
        version: "",
        retired: false,
        names: [
          {
            uuid: "135577BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Lòt ki pa-kode",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/5622AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/135577BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "126207BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Other",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/5622AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/126207BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "105802BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Autre et non codé",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/5622AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/105802BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "134542BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "LÒT SAN-KÒD",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/5622AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134542BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "2761BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "OTHER NON-CODED",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/5622AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/2761BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "110113BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Nyinginezo",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/5622AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/110113BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "134541BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Lòt",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/5622AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/134541BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "110860BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "Otro no codificado",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/5622AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/name/110860BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          }
        ],
        descriptions: [
          {
            uuid: "2253FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
            display:
              "A generic, descriptive answer which is a handwritten, non-coded response to a question.",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/5622AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/description/2253FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
              }
            ]
          }
        ],
        mappings: [
          {
            uuid: "144395ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "PIH Malawi: 6408",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/5622AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/144395ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "137878ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "org.openmrs.module.mdrtb: OTHER",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/5622AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/137878ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "172381ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "CIEL: 5622",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/5622AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/172381ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "141670ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "SNOMED MVP: 56221000105001",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/5622AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/141670ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "143666ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "PIH: 5622",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/5622AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/143666ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "135771ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "AMPATH: 5622",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/5622AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/135771ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          },
          {
            uuid: "137766ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
            display: "SNOMED NP: 74964007",
            links: [
              {
                rel: "self",
                uri:
                  "http://localhost:8090/openmrs/ws/rest/v1/concept/5622AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/mapping/137766ABBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
              }
            ]
          }
        ],
        answers: [],
        setMembers: [],
        attributes: [],
        links: [
          {
            rel: "self",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/5622AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
          },
          {
            rel: "full",
            uri:
              "http://localhost:8090/openmrs/ws/rest/v1/concept/5622AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA?v=full"
          }
        ],
        resourceVersion: "2.0"
      }
    ]
  }
};
