// import * as React from 'react';
var SYSTEM = {
  DEBUG: true,
  API_URL_LOCALHOST: 'http://localhost:3005/',
  API_URL_PRODUCTION: 'http://%s/api/',
  COPYRIGHT: '2017',
  DB_PREFIX_PS: 'ps_',
  DB_PREFIX_OSPS: 'osps_',
  DB_NAME: 'osps4',
  EMAIL_LOG_TO: 'rjaffe@sandi.net',
  EMAIL_HOST: 'mail.sandi.net',
  LAST_UPDATE_FILE: 'lastUpdate.txt',
  COURSE_UNDER_REVIEW_CONTACT: 'Jason Maher at jmaher@sandi.net',
  MAX_STUDENTS_TO_SHOW_IN_COURSE: 200
};
var CREDIT_THRESHOLDS = {
  '9': 10,
  '10': 21,
  '11': 32,
  '12': 44
};
var CREDIT_CHECK = {
  CREDIT_THRESHOLDS: CREDIT_THRESHOLDS
};
var CCTE = {
  NOT_COMPLETED: 0,
  NOT_ATTEMPTED: 0,
  ATTEMPTED: 1,
  COMPLETED: 2,
  SDUSD_SATISFIED: 0x1,
  CALPADS_SATISFIED: 0x2,
  PATHWAYS: [{
    sector: "Arts, Media, and Entertainment",
    name: "Design, Visual, and Media Arts",
    levels: {
      introductory: [['3639', '3640'], ['3645', '3646'], ['3765', '3766'], ['3691', '3692'], ['3693', '3694'], ['8373', '8374']],
      intermediate: [['8511', '8512'], ['8091', '8092'], ['8839', '8840'],
      // ['8572', '8572'], // Mult Med Prod 1-2
      ['8105', '8106']],
      capstone: [['8513', '8514'], ['8093', '8094'], ['8841', '8842'],
      // ['8573', '8573'], // Mult Med Prod 3-4
      ['8107', '8108']]
    }
  }, {
    sector: "Arts, Media, and Entertainment",
    name: "Production and Managerial Arts",
    levels: {
      introductory: [['8373', '8374'], ['3639', '3640'], ['1413', '1414'], ['0683', '0684']],
      intermediate: [['8432', '8433'], ['8375', '8376'], ['1462', '1463'], ['8691', '8692']],
      capstone: [['8434', '8435'], ['8239', '8240'], ['0685', '0686'], ['8693', '8694']]
    }
  }, {
    sector: "Arts, Media, and Entertainment",
    name: "Performing Arts",
    levels: {
      introductory: [['4871', '4872']],
      intermediate: [['4875', '4876']],
      capstone: [['4877', '4878']]
    }
  }, {
    sector: "Building and Construction Trades",
    name: "Residential and Commercial Construction",
    levels: {
      introductory: [['3763', '3764'], ['3651', '3652']],
      intermediate: [['8827', '8828'],
      // ['8568', '8568'], // Fine Woodworking 1-2
      ['3653', '3654']],
      capstone: [['3588', '3589'], ['8884', '8885'],
      // ['8823', '8823'], // Construction, General 1-2
      ['8886', '8887']]
    }
  }, {
    sector: "Business and Finance",
    name: "Business Management",
    levels: {
      introductory: [['0514', '0515'], ['0731', '0732'], ['0723', '0724']],
      intermediate: [['8663', '8664'],
      // ['8650', '8650'], // Bus Mgmt Own 1-2
      ['0561', '0562'], ['0591', '0592']],
      capstone: [['8666', '8667'], ['0589', '0590'], ['0594', '0595']]
    }
  }, {
    sector: "Business and Finance",
    name: "Financial Services",
    levels: {
      introductory: [['0514', '0515'], ['0731', '0732'], ['0723', '0724']],
      intermediate: [['8603', '8604'], ['0733', '0734'], ['0569', '0570']],
      capstone: [['8609', '8610'], ['8611', '8612'], ['8605', '8606']]
    }
  }, {
    sector: "Education, Child Development and Family Services",
    name: "Child Development",
    levels: {
      introductory: [['1171', '1172'], ['1154', '1155']],
      intermediate: [['1175', '1176'], ['8796', '8797']],
      capstone: [['8798', '8799'],
      // ['8721', '8721'], // Dev Psy Child 3-4
      ['1177', '1178'], ['1179', '1179'], ['1181', '1180']]
    }
  }, {
    sector: "Education, Child Development and Family Services",
    name: "Education",
    levels: {
      introductory: [['1171', '1172'], ['1154', '1155']],
      intermediate: [['8784', '8785']],
      capstone: [['8786', '8787']]
    }
  }, {
    sector: "Education, Child Development and Family Services",
    name: "Family and Human Services",
    levels: {
      introductory: [['1154', '1155']],
      intermediate: [['8181', '8182']],
      capstone: [['8183', '8183']]
    }
  }, {
    sector: "Engineering and Architecture",
    name: "Architectural Design",
    levels: {
      introductory: [['3657', '3658'], ['6240', '6241'] // Green up and Go
      ],
      intermediate: [['8171', '8172'] // CEA12
      ],
      capstone: [['8173', '8174']]
    }
  }, {
    sector: "Engineering and Architecture",
    name: "Engineering Design",
    levels: {
      introductory: [['3657', '3658'], ['6240', '6241'] // Green up and Go
      ],
      intermediate: [['8847', '8848'], ['3661', '3662'] // Design Tech SL IB 12
      ],
      capstone: [['3586', '3587'], ['8957', '8958'], ['8406', '8407'], ['8404', '8405'] // EDD12
      ]
    }
  }, {
    sector: "Health Science and Medical Technology",
    name: "Biotechnology",
    levels: {
      introductory: [['3005', '3006']],
      intermediate: [['8704', '8705'], ['6458', '6459']],
      capstone: [['8730', '8731'], ['8265', '8266'], ['8267', '8268']]
    }
  }, {
    sector: "Health Science and Medical Technology",
    name: "Patient Care",
    levels: {
      introductory: [['3005', '3006']],
      intermediate: [['3313', '3314'], ['6486', '6487'], ['3007', '3008']],
      capstone: [['8335', '8336'], ['8337', '8338'], ['8271', '8272'], ['8273', '8274'], ['8424', '8425'], ['8426', '8427']]
    }
  }, {
    sector: "Hospitality, Tourism, and Recreating",
    name: "Food Service and Hospitality",
    levels: {
      introductory: [['1165', '1166'], ['1169', '1169'], ['1163', '1163'], ['1198', '1199']],
      intermediate: [['8760', '8761'], ['1167', '1168']],
      capstone: [['8762', '8763'], ['8764', '8765']]
    }
  }, {
    sector: "Hospitality, Tourism, and Recreating",
    name: "Hospitality Tourism and Recreation",
    levels: {
      introductory: [['1198', '1199'], ['1165', '1166'], ['1169', '1169'], ['1163', '1163']],
      intermediate: [['8481', '8482']],
      capstone: [['8483', '8484']]
    }
  }, {
    sector: "Information and Communication Technologies",
    name: "Networking",
    levels: {
      introductory: [['3705', '3706'] // FoundIT
      ],
      intermediate: [['4465', '4466'] // IT Essentials
      ],
      capstone: [['4475', '4476']]
    }
  }, {
    sector: "Information and Communication Technologies",
    name: "Software and Systems Development",
    levels: {
      introductory: [['3705', '3706'] // FoundIT
      ],
      intermediate: [['4463', '4464']],
      capstone: [['4411', '4412'], ['4413', '4414'], ['4461', '4462'], ['8931', '8932'], ['8933', '8934'], ['4473', '4474'], ['4477', '4478'], ['8291', '8292'], ['8293', '8294'], ['4493', '4494'], ['4495', '4496']]
    }
  }, {
    sector: "Manufacturing and Product Development",
    name: "Graphic Production Technologies",
    levels: {
      introductory: [['3691', '3692'], ['3621', '3622']],
      intermediate: [['8882', '8883'], ['3623', '3624']],
      capstone: [['8851', '8852']]
    }
  }, {
    sector: "Manufacturing and Product Development",
    name: "Machining and Forming Technologies",
    levels: {
      introductory: [['3681', '3682']],
      intermediate: [['3683', '3684']],
      capstone: [['8812', '8813'], ['8814', '8815']]
    }
  }, {
    sector: "Manufacturing and Product Development",
    name: "Product Innovation and Design",
    levels: {
      introductory: [['3591', '3592']],
      intermediate: [['8311', '8312']],
      capstone: [['8313', '8314']]
    }
  }, {
    sector: "Marketing, Sales, and Service",
    name: "Marketing",
    levels: {
      introductory: [['0801', '0802']],
      intermediate: [['0803', '0804'], ['8277', '8278'], ['8490', '8491']],
      capstone: [['8279', '8280'], ['8492', '8493']]
    }
  }, {
    sector: "Public Services",
    name: "Emergency Response",
    levels: {
      introductory: [['0671', '0672']],
      intermediate: [['8253', '8254']],
      capstone: [['8255', '8256'], ['8259', '8280']]
    }
  }, {
    sector: "Public Services",
    name: "Legal Practices",
    levels: {
      introductory: [['0503', '0504'], ['3767', '3768']],
      intermediate: [['6694', '6695'], ['8393', '8394']],
      capstone: [['8395', '8396'], ['8397', '8398']]
    }
  }, {
    sector: "Public Services",
    name: "Public Safety",
    levels: {
      introductory: [['0503', '0504']],
      intermediate: [['8342', '8343']],
      capstone: [['8344', '8345']]
    }
  }, {
    sector: "Transportation",
    name: "Structural Repair and Refinishing",
    levels: {
      introductory: [['3578', '3579']],
      intermediate: [['8540', '8541']],
      capstone: [['8542', '8543']]
    }
  }, {
    sector: "Transportation",
    name: "Systems Diagnostics, Service, and Repair",
    levels: {
      introductory: [['3708', '3710']],
      intermediate: [['8304', '8305']],
      capstone: [['8306', '8307'], ['8308', '8309']]
    }
  }]
};
var OSPS_DATA = {
  OSPS_TABLE_LIST: ['osps_course_lists', 'osps_users_config', 'osps_ihigh_teacher_list', 'osps_ihigh_course_list' /*,'osps_ccte_pathways'*/],
  CSV_REQUIREMENT_FLAGS_FILENAME: 'csv_student_data.csv',
  CSV_REQUIREMENT_FLAGS_FIELDS_FILENAME: 'csv_student_data_fields.csv',
  CSV_JSON_FILENAME: 'csv_json.csv',
  CSV_JSON_FIELDS_FILENAME: 'csv_json_fields.csv',
  REQUIREMENT_FLAGS_TABLE_NAME: 'requirement_flags',
  JSON_DATA_TABLE_NAME: 'student_data',
  OSPS_USERS_TABLE: 'users',
  IHIGH_ELIGIBLE_COURSES_CSV_FILE: 'ihigh_eligible.csv',
  IHIGH_TABLE_NAME: 'ihigh',
  IHIGH_FIELDS_FILENAME: 'ihigh_fields.csv',
  GRADE_REPLACEMENT_CSV_FILENAME: 'grade_replacement.csv',
  GRADE_REPLACEMENT_CSV_FIELDS_FILENAME: 'grade_replacement_fields.csv',
  GRADE_REPLACEMENT_TABLE_NAME: 'grade_replacement'
};
var ELA = {
  GRAD: 0x400,
  EN1: 0x1,
  EN2: 0x2,
  EN3: 0x4,
  EN4: 0x8,
  AL1: 0x10,
  AL2: 0x20,
  AC1: 0x40,
  AC2: 0x80,
  AL_OR_AC1: 0x100,
  AL_OR_AC2: 0x200 // Have credit for at least 2 AmLit1 OR Other2
};
var ELE = {
  GRAD: 0x1,
  SEM1: 0x2,
  SEM2: 0x4
};
var HIS = {
  GRAD: 0x1,
  WH1: 0x2,
  WH2: 0x4,
  US1: 0x8,
  US2: 0x10,
  GOV: 0x20,
  ECON: 0x40,
  GOV_ECON: 0x80 // One of Gov / Econ
};
var LOE = {
  GRAD: 0x1,
  LEVEL4: 0x2,
  LEVEL2: 0x4,
  LOTE: 0x8
};
var MTH = {
  GRAD: 0x1,
  IM1A: 0x2,
  IM1B: 0x4,
  IM2A: 0x8,
  IM2B: 0x10,
  IM3A: 0x20,
  IM3B: 0x40,
  COLLEGE: 0x80,
  _4CREDITS: 0x100,
  _6CREDITS: 0x200
};
var NCR = {
  GRAD: 0x1
};
var OTH = {
  GRAD: 0x1
};
var PED = {
  GRAD: 0x1,
  SEM1: 0x2,
  SEM2: 0x4,
  SEM3: 0x8,
  SEM4: 0x10,
  SCHEDULED: 0x20,
  FITNESSGRAM: 0x40
};
var SCI = {
  GRAD: 0x1,
  BIO: 0x2,
  CHE: 0x4,
  PHY: 0x8,
  LIFE: 0x10,
  PHYSICAL: 0x20,
  OTHER: 0x40,
  _1REQMT: 0x80,
  _2REQMT: 0x100,
  _3REQMT: 0x200
};
var VPA = {
  GRAD: 0x1,
  SEM1: 0x2,
  SEM2: 0x4
};
var PERMISSIONS = {
  INDIVIDUAL: {
    PROFILE: 0x1,
    FILTER: 0x2,
    AT_RISK: 0x4,
    SEARCH: 0x8,
    COURSES: 0x10,
    SETTINGS: 0x20,
    DEF_LETTER_NOTES: 0x40,
    CONFIDENTIAL_NOTES: 0x80,
    USERS: 0x100,
    SPOOF: 0x200,
    SCHOOL_INFO: 0x400,
    SYSTEM_SETTINGS: 0x800,
    LOG: 0x1000,
    IHIGH: 0x2000,
    IHIGH_CONFIG: 0x4000,
    GRADE_VALIDATION: 0x8000,
    ADS: 0x10000,
    ADS_CONFIG: 0x20000,
    STUDENT: 0x40000,
    ANY: 0xFFFFF
  }
};
var PS_FIELDS = {
  PS_CAHSEE: ['student_number', 'math', 'ela', 'test_year'],
  PS_COURSE_LIST: ['course_number', 'course_name', 'department', 'credit_hours', 'repeatable', 'uc_category', 'weighted'],
  PS_ETHNIC_STUDIES: ['student_number', 'satisfied'],
  PS_FITNESSGRAM: ['student_number', 'overall'],
  PS_GPA: ['student_number', '9_12_total_wgpa', '10_12_total_wgpa', '10_12_wgpa_wo_pe_rotc'],
  PS_GRADE: ['student_number', 'school_name', 'store_code', 'course_code', 'grade', 'term_year', 'credits_attempted', 'credits_received', 'department', 'grade_level', 'replaced_grade', 'replaced_by_equivalent_course', 'replaces_equivalent_course', 'exclude_from_suppression', 'sdusd', 'weighted_grade_scale', 't_course_name'],
  PS_SCHEDULE: ['student_number', 'schoolid', 'teacher', 'room', 'team', 'expression', 'periods', 'cycle_days', 'course_code', 'course_name', 'course_department', 'term_name', 'year_number', 'current_term', 'section_number', 'maxenrollment', 'teacher_number'],
  PS_SCHOOL: ['name', 'abbreviation', 'schoolid'],
  PS_STUDENT: ['student_number', 'state_student_number', 'schoolid', 'last_name', 'first_name', 'middle_name', 'grade_level', 'gender', 'class_of', 'dob', 'ca_counselor', 'fed_ethnicity', 'el_proflevel', 'ethnicity_list', 'guardian_language', 'guardian_email', 'street', 'city', 'state', 'zip', 'transcript_notes', 'sped', 'non_diploma', 'foster_living_situation', 'homeless_living_situation', 'unaccompanied_youth', 'runaway_youth', 'other_living_situation'],
  PS_USER: ['teacher_number', 'last_name', 'first_name', 'email', 'role', 'schoolid'],
  PS_ONLINE_COURSE_REQUESTS: ['student_number', 'term_name', 'year_number', 'schoolid', 'course_number', 'priority', 'whocreated', 'whencreated', 'whomodified', 'whenmodified', 'completed']
};
var CONSTANTS = {
  SYSTEM: SYSTEM,
  I_HIGH_LAB_COURSE_NUMBERS: ['8155'],
  I_HIGH_SCHOOL_CODES: ['504'],
  CREDIT_CHECK: CREDIT_CHECK,
  CCTE: CCTE,
  OSPS_DATA: OSPS_DATA,
  PS_FIELDS: PS_FIELDS,
  UPDATE: {
    ELA: ELA,
    ELE: ELE,
    HIS: HIS,
    LOE: LOE,
    MTH: MTH,
    NCR: NCR,
    OTH: OTH,
    PED: PED,
    SCI: SCI,
    VPA: VPA
  },
  IN_PROGRESS_OFFSET: 0x800,
  UPDATE_LIST_FOR_SUMMARY: {
    ELA: {
      GRAD: ELA.GRAD,
      EN1: ELA.EN1,
      EN2: ELA.EN2,
      EN3: ELA.EN3,
      EN4: ELA.EN4,
      AL1: ELA.AL1,
      AL2: ELA.AL2,
      AC1: ELA.AC1,
      AC2: ELA.AC2
    },
    ELE: {
      GRAD: ELE.GRAD,
      SEM1: ELE.SEM1,
      SEM2: ELE.SEM2
    },
    HIS: {
      GRAD: HIS.GRAD,
      WH1: HIS.WH1,
      WH2: HIS.WH2,
      US1: HIS.US1,
      US2: HIS.US2,
      GOV: HIS.GOV,
      ECON: HIS.ECON
    },
    LOE: {
      GRAD: LOE.GRAD,
      LEVEL2: LOE.LEVEL2,
      LEVEL4: LOE.LEVEL4,
      LOTE: LOE.LOTE
    },
    MTH: {
      GRAD: MTH.GRAD,
      IM1A: MTH.IM1A,
      IM1B: MTH.IM1B,
      IM2A: MTH.IM2A,
      IM2B: MTH.IM2B,
      IM3A: MTH.IM3A,
      IM3B: MTH.IM3B,
      _4CREDITS: MTH._4CREDITS,
      _6CREDITS: MTH._6CREDITS
    },
    PED: {
      GRAD: PED.GRAD,
      SEM1: PED.SEM1,
      SEM2: PED.SEM2,
      SEM3: PED.SEM3,
      SEM4: PED.SEM4,
      SCHEDULED: PED.SCHEDULED,
      FITNESSGRAM: PED.FITNESSGRAM
    },
    SCI: {
      GRAD: SCI.GRAD,
      BIO: SCI.BIO,
      CHE: SCI.CHE,
      PHY: SCI.PHY,
      LIFE: SCI.LIFE,
      PHYSICAL: SCI.PHYSICAL,
      OTHER: SCI.OTHER
    },
    VPA: {
      GRAD: VPA.GRAD,
      SEM1: VPA.SEM1,
      SEM2: VPA.SEM2
    }
  },
  SUBJECT_TEXT: {
    HIS: 'History (a)',
    ELA: 'English (b)',
    MTH: 'Math (c)',
    SCI: 'Science (d)',
    LOE: 'World Language (e)',
    VPA: 'Visual / Perf Arts (f)',
    ELE: 'Electives',
    PED: 'Phys Ed',
    OTH: 'Other',
    NCR: 'Non-credit Courses'
  },
  UPDATE_TEXT: {
    ELA: {
      GRAD: 'Graduation reqmts',
      EN1: 'English 1',
      EN2: 'English 2',
      EN3: 'English 3',
      EN4: 'English 4',
      AL1: 'American Lit 1',
      AL2: 'American Lit 2',
      AC1: 'Additional Eng 1',
      AC2: 'Additional Eng 2',
      AL_OR_AC1: 'Am Lit 1 OR Addl Eng 1',
      AL_OR_AC2: 'Am Lit 2 OR Addl Eng 2'
    },
    ELE: {
      GRAD: 'Graduation reqmts',
      SEM1: 'Semester 1',
      SEM2: 'Semester 2'
    },
    HIS: {
      GRAD: 'Graduation reqmts',
      WH1: 'World History 1',
      WH2: 'World History 2',
      US1: 'US History 1',
      US2: 'US History 2',
      GOV: 'Government',
      ECON: 'Economics',
      GOV_ECON: 'Gov OR Econ'
    },
    LOE: {
      GRAD: 'Graduation reqmts',
      LEVEL4: 'World Lang Level 4',
      LEVEL2: 'World Lang Level 2',
      LOTE: 'LOTE test'
    },
    MTH: {
      GRAD: 'Graduation reqmts',
      IM1A: 'Integrated Math 1A',
      IM1B: 'Integrated Math 1B',
      IM2A: 'Integrated Math 2A',
      IM2B: 'Integrated Math 2B',
      IM3A: 'Integrated Math 3A',
      IM3B: 'Integrated Math 3B',
      COLLEGE: 'College Math',
      _4CREDITS: '4 credits in HS',
      _6CREDITS: '6 credits total'
    },
    NCR: {
      GRAD: 'Graduation reqmts'
    },
    OTH: {
      GRAD: 'Graduation reqmts'
    },
    PED: {
      GRAD: 'Graduation reqmts',
      SEM1: 'Semester 1',
      SEM2: 'Semester 2',
      SEM3: 'Semester 3',
      SEM4: 'Semester 4',
      SCHEDULED: 'PE scheduled',
      FITNESSGRAM: 'Fitnessgram'
    },
    SCI: {
      GRAD: 'Graduation reqmts',
      BIO: 'Biology',
      CHE: 'Chemistry',
      PHY: 'Physics',
      LIFE: 'Life science',
      PHYSICAL: 'Physical science',
      OTHER: 'Other science',
      _1REQMT: '1 requirement',
      _2REQMT: '2 requirements',
      _3REQMT: '3 requirements'
    },
    VPA: {
      GRAD: 'Graduation reqmts',
      SEM1: 'Semester 1',
      SEM2: 'Semester 2'
    }
  },
  PERMISSIONS_SETS: {
    OSPS_READ: PERMISSIONS.INDIVIDUAL.PROFILE | PERMISSIONS.INDIVIDUAL.FILTER | PERMISSIONS.INDIVIDUAL.AT_RISK | PERMISSIONS.INDIVIDUAL.SETTINGS | PERMISSIONS.INDIVIDUAL.GRADE_VALIDATION,
    OSPS_WRITE: PERMISSIONS.INDIVIDUAL.PROFILE | PERMISSIONS.INDIVIDUAL.FILTER | PERMISSIONS.INDIVIDUAL.AT_RISK | PERMISSIONS.INDIVIDUAL.SETTINGS | PERMISSIONS.INDIVIDUAL.DEF_LETTER_NOTES | PERMISSIONS.INDIVIDUAL.CONFIDENTIAL_NOTES | PERMISSIONS.INDIVIDUAL.GRADE_VALIDATION,
    OSPS_ALTERNATIVE: PERMISSIONS.INDIVIDUAL.PROFILE | PERMISSIONS.INDIVIDUAL.FILTER | PERMISSIONS.INDIVIDUAL.AT_RISK | PERMISSIONS.INDIVIDUAL.SETTINGS | PERMISSIONS.INDIVIDUAL.DEF_LETTER_NOTES | PERMISSIONS.INDIVIDUAL.SEARCH | PERMISSIONS.INDIVIDUAL.CONFIDENTIAL_NOTES | PERMISSIONS.INDIVIDUAL.GRADE_VALIDATION,
    OSPS_DISTRICT: PERMISSIONS.INDIVIDUAL.PROFILE | PERMISSIONS.INDIVIDUAL.FILTER | PERMISSIONS.INDIVIDUAL.AT_RISK | PERMISSIONS.INDIVIDUAL.SETTINGS | PERMISSIONS.INDIVIDUAL.DEF_LETTER_NOTES | PERMISSIONS.INDIVIDUAL.SEARCH | PERMISSIONS.INDIVIDUAL.CONFIDENTIAL_NOTES | PERMISSIONS.INDIVIDUAL.COURSES | PERMISSIONS.INDIVIDUAL.SCHOOL_INFO | PERMISSIONS.INDIVIDUAL.LOG | PERMISSIONS.INDIVIDUAL.GRADE_VALIDATION,
    OSPS_SUPERUSER: PERMISSIONS.INDIVIDUAL.ANY
  },
  PS_DATA: [
  // {
  //   filename: 'CAHSEE.csv',
  //   tablename: 'cahsees',
  //   fields: CONSTANTS.PS_FIELDS.PS_CAHSEE
  // },
  {
    filename: 'CourseList.csv',
    tablename: 'course_lists',
    fields: PS_FIELDS.PS_COURSE_LIST
  }, {
    filename: 'EthnicStudies.csv',
    tablename: 'ethnic_studies',
    fields: PS_FIELDS.PS_ETHNIC_STUDIES
  }, {
    filename: 'FitnessGram.csv',
    tablename: 'fitnessgrams',
    fields: PS_FIELDS.PS_FITNESSGRAM
  }, {
    filename: 'GPA.csv',
    tablename: 'gpas',
    fields: PS_FIELDS.PS_GPA
  }, {
    filename: 'Grades.csv',
    tablename: 'grades',
    fields: PS_FIELDS.PS_GRADE
  }, {
    filename: 'OnlineCourseRequests.csv',
    tablename: 'online_course_requests',
    fields: PS_FIELDS.PS_ONLINE_COURSE_REQUESTS
  }, {
    filename: 'Schedules.csv',
    tablename: 'schedules',
    fields: PS_FIELDS.PS_SCHEDULE
  }, {
    filename: 'Schools.csv',
    tablename: 'schools',
    fields: PS_FIELDS.PS_SCHOOL
  }, {
    filename: 'Students.csv',
    tablename: 'students',
    fields: PS_FIELDS.PS_STUDENT
  }, {
    filename: 'Users.csv',
    tablename: 'users',
    fields: PS_FIELDS.PS_USER
  }],
  GUARDIAN_LANGUAGES: {
    '00': 'en',
    '01': 'es',
    '05': 'tl',
    '11': 'ar',
    '60': 'so'
  },
  GUARDIAN_LANGUAGE_NAMES: {
    '00': "English",
    '01': "Spanish",
    '02': 'Vietnamese',
    '03': 'Cantonese',
    '04': 'Korean',
    '05': 'Tagalog',
    '06': 'Portuguese',
    '07': 'Mandarin',
    '08': 'Japanese',
    '09': 'Khmer',
    '10': 'Kao',
    '11': 'Arabic',
    '12': 'Armenian',
    '13': 'Burmese',
    '16': 'Farsi',
    '17': 'French',
    '18': 'German',
    '20': 'Chaorro',
    '21': 'Hebrew',
    '22': 'Hindi',
    '23': 'Hmong',
    '25': 'Ilocano',
    '27': 'Italian',
    '28': 'Punjabi',
    '29': 'Russian',
    '30': 'Samoan',
    '32': 'Thai',
    '33': 'Turkish',
    '34': 'Tongan',
    '35': 'Urdu',
    '36': 'Cebuano',
    '37': 'Sign language',
    '38': 'Ukrainian',
    '39': 'Chaozhou',
    '43': 'Gujarati',
    '45': 'Romanian',
    '46': 'Taiwanese',
    '48': 'Marshallese',
    '49': 'Mixteco',
    '51': 'Kurdish',
    '52': 'Serbo-Croatian',
    '54': 'Chaldean',
    '56': 'Albanian',
    '57': 'Tigrinya',
    '60': 'Somali',
    '65': 'Kannada',
    '66': 'Amharic',
    '70': 'Swedish',
    '99': 'Other language',
    'UU': 'Unknown'
  },
  SDUSD_AT_RISK: [{
    id: -1,
    email: '',
    teacher_number: '',
    list_name: 'SDUSD default 1',
    user_name: 'SDUSD',
    config: {
      ELA: [{
        criteria: 'EN1',
        title: 'English 1',
        help: 'Student has taken or is taking (and presumed to pass) English 1',
        grades: {
          9: true,
          10: true,
          11: true,
          12: true
        }
      }, {
        criteria: 'EN2',
        title: 'English 2',
        help: 'Student has taken or is taking (and presumed to pass) English 2',
        grades: {
          9: true,
          10: true,
          11: true,
          12: true
        }
      }, {
        criteria: 'EN3',
        title: 'English 3',
        help: 'Student has taken or is taking (and presumed to pass) English 3',
        grades: {
          9: false,
          10: true,
          11: true,
          12: true
        }
      }, {
        criteria: 'EN4',
        title: 'English 4',
        help: 'Student has taken or is taking (and presumed to pass) English 4',
        grades: {
          9: false,
          10: true,
          11: true,
          12: true
        }
      }, {
        criteria: 'AL_OR_AC1',
        title: 'Am Lit 1 or Addl Eng 1',
        help: 'Student has taken or is taking (and presumed to pass) first semester of a course that offers American Literature credit OR an additional English course',
        grades: {
          9: false,
          10: false,
          11: true,
          12: false
        }
      }, {
        criteria: 'AL_OR_AC2',
        title: 'Am Lit 2 or Addl Eng 2',
        help: 'Student has taken or is taking (and presumed to pass) second semester of a course that offers American Literature credit OR an additional English course',
        grades: {
          9: false,
          10: false,
          11: true,
          12: false
        }
      }, {
        criteria: 'AL1',
        title: 'Am Lit 1',
        help: 'Student has taken or is taking (and presumed to pass) first semester of a course that offers American Literature credit',
        grades: {
          9: false,
          10: false,
          11: false,
          12: true
        }
      }, {
        criteria: 'AL2',
        title: 'Am Lit 2',
        help: 'Student has taken or is taking (and presumed to pass) second semester of a course that offers American Literature credit',
        grades: {
          9: false,
          10: false,
          11: false,
          12: true
        }
      }, {
        criteria: 'AC1',
        title: 'Addl Eng 1',
        help: 'Student has taken or is taking (and presumed to pass) first semester of an additional English course',
        grades: {
          9: false,
          10: false,
          11: false,
          12: true
        }
      }, {
        criteria: 'AC2',
        title: 'Addl Eng 2',
        help: 'Student has taken or is taking (and presumed to pass) second semester of an additional English course',
        grades: {
          9: false,
          10: false,
          11: false,
          12: true
        }
      }],
      ELE: [{
        criteria: 'ELE1',
        title: 'Elective 1',
        help: 'Student has taken or is taking (and presumed to pass) a first semester elective course',
        grades: {
          9: false,
          10: false,
          11: true,
          12: true
        }
      }, {
        criteria: 'ELE2',
        title: 'Elective 2',
        help: 'Student has taken or is taking (and presumed to pass) the second semester elective course that is a companion to one of the first semester courses',
        grades: {
          9: false,
          10: false,
          11: true,
          12: true
        }
      }],
      HIS: [{
        criteria: 'WH1',
        title: 'World History 1',
        help: 'Student has taken or is taking (and presumed to pass) a first semester World History course',
        grades: {
          9: false,
          10: true,
          11: true,
          12: true
        }
      }, {
        criteria: 'WH2',
        title: 'World History 2',
        help: 'Student has taken or is taking (and presumed to pass) a second semester World History course',
        grades: {
          9: false,
          10: true,
          11: true,
          12: true
        }
      }, {
        criteria: 'US1',
        title: 'US History 1',
        help: 'Student has taken or is taking (and presumed to pass) a first semester US History course',
        grades: {
          9: false,
          10: false,
          11: true,
          12: true
        }
      }, {
        criteria: 'US2',
        title: 'US History 2',
        help: 'Student has taken or is taking (and presumed to pass) a second semester World History course',
        grades: {
          9: false,
          10: false,
          11: true,
          12: true
        }
      }, {
        criteria: 'GOV',
        title: 'Government',
        help: 'Student has taken or is taking (and presumed to pass) a one semester American Government course',
        grades: {
          9: false,
          10: false,
          11: false,
          12: true
        }
      }, {
        criteria: 'ECON',
        title: 'Economics',
        help: 'Student has taken or is taking (and presumed to pass) a one semester Economics course',
        grades: {
          9: false,
          10: false,
          11: false,
          12: true
        }
      }],
      LOE: [{
        criteria: 'YR1',
        title: '1st year or LOTE exam',
        help: 'Student has taken or is taking (and presumed to pass) the first year of any language other than English OR student has passed the LOTE exam',
        grades: {
          9: false,
          10: true,
          11: true,
          12: true
        }
      }, {
        criteria: 'YR2',
        title: '2nd year or LOTE exam',
        help: 'Student has taken or is taking (and presumed to pass) the second year of any language other than English OR student has passed the LOTE exam.  This requirement satisfies the Language Other Than English graduation requirement',
        grades: {
          9: false,
          10: false,
          11: true,
          12: true
        }
      }],
      MTH: [{
        criteria: 'IM1A',
        // title: 'Integ Math 1A or higher',
        // help: 'Student has taken or is taking (and presumed to pass) Integrated Math 1A or equivalent course or a higher level math course',
        title: 'Integ Math 1A',
        help: 'Student has taken or is taking (and presumed to pass) Integrated Math 1A or equivalent course',
        grades: {
          9: true,
          10: true,
          11: true,
          12: true
        }
      }, {
        criteria: 'IM1B',
        // title: 'Integ Math 1B or higher',
        // help: 'Student has taken or is taking (and presumed to pass) Integrated Math 1B or equivalent course or a higher level math course',
        title: 'Integ Math 1B',
        help: 'Student has taken or is taking (and presumed to pass) Integrated Math 1B or equivalent course',
        grades: {
          9: true,
          10: true,
          11: true,
          12: true
        }
      }, {
        criteria: 'IM2A',
        // title: 'Integ Math 2A or higher',
        // help: 'Student has taken or is taking (and presumed to pass) Integrated Math 2A or equivalent course or a higher level math course',
        title: 'Integ Math 2A',
        help: 'Student has taken or is taking (and presumed to pass) Integrated Math 2A or equivalent course',
        grades: {
          9: false,
          10: true,
          11: true,
          12: true
        }
      }, {
        criteria: 'IM2B',
        // title: 'Integ Math 2B or higher',
        // help: 'Student has taken or is taking (and presumed to pass) Integrated Math 2B or equivalent course or a higher level math course',
        title: 'Integ Math 2B',
        help: 'Student has taken or is taking (and presumed to pass) Integrated Math 2B or equivalent course',
        grades: {
          9: false,
          10: true,
          11: true,
          12: true
        }
      }, {
        criteria: 'IM3A',
        // title: 'Integ Math 3A or higher',
        // help: 'Student has taken or is taking (and presumed to pass) Integrated Math 3A or equivalent course or a higher level math course',
        title: 'Integ Math 3A',
        help: 'Student has taken or is taking (and presumed to pass) Integrated Math 3A or equivalent course',
        grades: {
          9: false,
          10: false,
          11: true,
          12: true
        }
      }, {
        // criteria: 'IM3B',
        // title: 'Integ Math 3B or higher',
        criteria: 'IM3B',
        title: 'Integ Math 3B',
        help: 'Student has taken or is taking (and presumed to pass) Integrated Math 3B or equivalent course',
        grades: {
          9: false,
          10: false,
          11: true,
          12: true
        }
      }, {
        criteria: '_4CREDITS',
        title: 'At least 4 HS credits',
        help: 'Student must receive at least 4 credits of mathematics credits in grades 9-12',
        grades: {
          9: false,
          10: false,
          11: true,
          12: true
        }
      }, {
        criteria: '_6CREDITS',
        title: '6 total credits',
        help: 'Student must receive at least 6 credits of mathematics',
        grades: {
          9: false,
          10: false,
          11: true,
          12: true
        }
      }],
      PED: [{
        criteria: 'SCHED',
        title: 'PE scheduled',
        help: 'Student has taken or is taking (and presumed to pass) PE courses',
        grades: {
          9: true,
          10: false,
          11: false,
          12: false
        }
      }, {
        criteria: '2_AND_FITNESSGRAM_OR_SCHEDULED',
        title: '2 credits and Fitnessgram has been passed OR PE class is scheduled',
        help: 'Student has taken or is taking (and presumed to pass) two credits of PE courses AND has passed the Fitnessgram ... OR ... student has taken and/or is scheduled for 4 PE credits. This option is useful for students in special programs like Engineering where as long as the Fitnessgram was passed in 9th grade the student can defer the other 2 semesters to 11th grade. This option insures that the student is not labeled deficient in PE',
        grades: {
          9: false,
          10: true,
          11: false,
          12: false
        }
      }, {
        criteria: '4_AND_FITNESSGRAM_OR_SCHEDULED',
        title: '4 credits passed and/or scheduled',
        help: 'Student has either passed or is scheduled for (and presumed to pass) at least four credits AND passed the Fitnessgram',
        grades: {
          9: false,
          10: false,
          11: true,
          12: true
        }
      }],
      SCI: [{
        criteria: '2_CREDITS',
        title: '2 credits in any area',
        help: 'Student has either passed or is scheduled for (and presumed to pass) two credits of the same science course',
        grades: {
          9: true,
          10: true,
          11: true,
          12: true
        }
      }, {
        criteria: '4_CREDITS',
        title: '4 credits in two areas',
        help: 'Student has either passed or is scheduled for (and presumed to pass) four credits of both semesters of science courses in two different areas (Life, Physical, one other from Life, Physical, or Other)',
        grades: {
          9: false,
          10: true,
          11: true,
          12: true
        }
      }, {
        criteria: 'GRAD',
        title: "Sci reqmt's satisfied",
        help: 'Student has either passed or is scheduled for (and presumed to pass) four credits of both semesters of science courses in three areas (Life, Physical, one other from Life, Physical, or Other)',
        grades: {
          9: false,
          10: false,
          11: true,
          12: true
        }
      }],
      VPA: [{
        criteria: 'SEM1',
        title: 'Semester 1',
        help: 'Student has either passed or is scheduled for (and presumed to pass) the first semester of a VAPA course',
        grades: {
          9: false,
          10: true,
          11: true,
          12: true
        }
      }, {
        criteria: 'SEM2',
        title: 'Semester 2',
        help: 'Student has either passed or is scheduled for (and presumed to pass) the second semester of a VAPA course whose first semester companion has already been passed, or is scheduled',
        grades: {
          9: false,
          10: true,
          11: true,
          12: true
        }
      }]
    }
  }, {
    id: -2,
    email: '',
    teacher_number: '',
    list_name: 'SDUSD default 2',
    user_name: 'SDUSD',
    config: {
      ELA: [{
        criteria: 'EN1',
        title: 'English 1',
        help: 'Student has taken or is taking (and presumed to pass) English 1',
        grades: {
          9: true,
          10: true,
          11: true,
          12: true
        }
      }, {
        criteria: 'EN2',
        title: 'English 2',
        help: 'Student has taken or is taking (and presumed to pass) English 2',
        grades: {
          9: true,
          10: true,
          11: true,
          12: true
        }
      }, {
        criteria: 'EN3',
        title: 'English 3',
        help: 'Student has taken or is taking (and presumed to pass) English 3',
        grades: {
          9: false,
          10: true,
          11: true,
          12: true
        }
      }, {
        criteria: 'EN4',
        title: 'English 4',
        help: 'Student has taken or is taking (and presumed to pass) English 4',
        grades: {
          9: false,
          10: true,
          11: true,
          12: true
        }
      }, {
        criteria: 'AL_OR_AC1',
        title: 'Am Lit 1 or Addl Eng 1',
        help: 'Student has taken or is taking (and presumed to pass) first semester of a course that offers American Literature credit OR an additional English course',
        grades: {
          9: false,
          10: false,
          11: false,
          12: true
        }
      }, {
        criteria: 'AL_OR_AC2',
        title: 'Am Lit 2 or Addl Eng 2',
        help: 'Student has taken or is taking (and presumed to pass) second semester of a course that offers American Literature credit OR an additional English course',
        grades: {
          9: false,
          10: false,
          11: false,
          12: true
        }
      }, {
        criteria: 'AL1',
        title: 'Am Lit 1',
        help: 'Student has taken or is taking (and presumed to pass) first semester of a course that offers American Literature credit',
        grades: {
          9: false,
          10: false,
          11: false,
          12: true
        }
      }, {
        criteria: 'AL2',
        title: 'Am Lit 2',
        help: 'Student has taken or is taking (and presumed to pass) second semester of a course that offers American Literature credit',
        grades: {
          9: false,
          10: false,
          11: false,
          12: true
        }
      }, {
        criteria: 'AC1',
        title: 'Addl Eng 1',
        help: 'Student has taken or is taking (and presumed to pass) first semester of an additional English course',
        grades: {
          9: false,
          10: false,
          11: false,
          12: true
        }
      }, {
        criteria: 'AC2',
        title: 'Addl Eng 2',
        help: 'Student has taken or is taking (and presumed to pass) second semester of an additional English course',
        grades: {
          9: false,
          10: false,
          11: false,
          12: true
        }
      }],
      ELE: [{
        criteria: 'ELE1',
        title: 'Elective 1',
        help: 'Student has taken or is taking (and presumed to pass) a first semester elective course',
        grades: {
          9: false,
          10: false,
          11: true,
          12: true
        }
      }, {
        criteria: 'ELE2',
        title: 'Elective 2',
        help: 'Student has taken or is taking (and presumed to pass) the second semester elective course that is a companion to one of the first semester courses',
        grades: {
          9: false,
          10: false,
          11: true,
          12: true
        }
      }],
      HIS: [{
        criteria: 'WH1',
        title: 'World History 1',
        help: 'Student has taken or is taking (and presumed to pass) a first semester World History course',
        grades: {
          9: false,
          10: true,
          11: true,
          12: true
        }
      }, {
        criteria: 'WH2',
        title: 'World History 2',
        help: 'Student has taken or is taking (and presumed to pass) a second semester World History course',
        grades: {
          9: false,
          10: true,
          11: true,
          12: true
        }
      }, {
        criteria: 'US1',
        title: 'US History 1',
        help: 'Student has taken or is taking (and presumed to pass) a first semester US History course',
        grades: {
          9: false,
          10: false,
          11: true,
          12: true
        }
      }, {
        criteria: 'US2',
        title: 'US History 2',
        help: 'Student has taken or is taking (and presumed to pass) a second semester World History course',
        grades: {
          9: false,
          10: false,
          11: true,
          12: true
        }
      }, {
        criteria: 'GOV',
        title: 'Government',
        help: 'Student has taken or is taking (and presumed to pass) a one semester American Government course',
        grades: {
          9: false,
          10: false,
          11: false,
          12: true
        }
      }, {
        criteria: 'ECON',
        title: 'Economics',
        help: 'Student has taken or is taking (and presumed to pass) a one semester Economics course',
        grades: {
          9: false,
          10: false,
          11: false,
          12: true
        }
      }],
      LOE: [{
        criteria: 'YR1',
        title: '1st year or LOTE exam',
        help: 'Student has taken or is taking (and presumed to pass) the first year of any language other than English OR student has passed the LOTE exam',
        grades: {
          9: false,
          10: true,
          11: true,
          12: true
        }
      }, {
        criteria: 'YR2',
        title: '2nd year or LOTE exam',
        help: 'Student has taken or is taking (and presumed to pass) the second year of any language other than English OR student has passed the LOTE exam.  This requirement satisfies the Language Other Than English graduation requirement',
        grades: {
          9: false,
          10: false,
          11: true,
          12: true
        }
      }],
      MTH: [{
        criteria: 'IM1A',
        title: 'Integ Math 1A or higher',
        help: 'Student has taken or is taking (and presumed to pass) Integrated Math 1A or equivalent course or a higher level math course',
        grades: {
          9: true,
          10: true,
          11: true,
          12: true
        }
      }, {
        criteria: 'IM1B',
        title: 'Integ Math 1B or higher',
        help: 'Student has taken or is taking (and presumed to pass) Integrated Math 1B or equivalent course or a higher level math course',
        grades: {
          9: true,
          10: true,
          11: true,
          12: true
        }
      }, {
        criteria: 'IM2A',
        title: 'Integ Math 2A or higher',
        help: 'Student has taken or is taking (and presumed to pass) Integrated Math 2A or equivalent course or a higher level math course',
        grades: {
          9: false,
          10: true,
          11: true,
          12: true
        }
      }, {
        criteria: 'IM2B',
        title: 'Integ Math 2B or higher',
        help: 'Student has taken or is taking (and presumed to pass) Integrated Math 2B or equivalent course or a higher level math course',
        grades: {
          9: false,
          10: true,
          11: true,
          12: true
        }
      }, {
        criteria: 'IM3A',
        title: 'Integ Math 3A or higher',
        help: 'Student has taken or is taking (and presumed to pass) Integrated Math 3A or equivalent course or a higher level math course',
        grades: {
          9: false,
          10: false,
          11: true,
          12: true
        }
      }, {
        criteria: 'IM3B',
        title: 'Integ Math 3B or higher',
        help: 'Student has taken or is taking (and presumed to pass) Integrated Math 3B or equivalent course or a higher level math course',
        grades: {
          9: false,
          10: false,
          11: true,
          12: true
        }
      }, {
        criteria: '_4CREDITS',
        title: 'At least 4 HS credits',
        help: 'Student must receive at least 4 credits of mathematics credits in grades 9-12',
        grades: {
          9: false,
          10: false,
          11: true,
          12: true
        }
      }, {
        criteria: '_6CREDITS',
        title: 'At least 6 total credits',
        help: 'Student must receive at least 6 credits of mathematics',
        grades: {
          9: false,
          10: false,
          11: true,
          12: true
        }
      }],
      PED: [{
        criteria: 'SCHED',
        title: 'PE scheduled',
        help: 'Student has taken or is taking (and presumed to pass) PE courses',
        grades: {
          9: true,
          10: false,
          11: false,
          12: false
        }
      }, {
        criteria: '2_AND_FITNESSGRAM_OR_SCHEDULED',
        title: '2 credits and Fitnessgram has been passed OR PE class is scheduled',
        help: 'Student has taken or is taking (and presumed to pass) two credits of PE courses AND has passed the Fitnessgram ... OR ... student has taken and/or is scheduled for 4 PE credits. This option is useful for students in special programs like Engineering where as long as the Fitnessgram was passed in 9th grade the student can defer the other 2 semesters to 11th grade. This option insures that the student is not labeled deficient in PE',
        grades: {
          9: false,
          10: true,
          11: false,
          12: false
        }
      }, {
        criteria: '4_AND_FITNESSGRAM_OR_SCHEDULED',
        title: '4 credits and Fitnessgram passed OR PE class is scheduled',
        help: 'Student has either passed or is scheduled for (and presumed to pass) at least four credits AND passed the Fitnessgram',
        grades: {
          9: false,
          10: false,
          11: true,
          12: true
        }
      }],
      SCI: [{
        criteria: '2_CREDITS',
        title: '2 credits of any type',
        help: 'Student has either passed or is scheduled for (and presumed to pass) two credits of the same science course',
        grades: {
          9: true,
          10: true,
          11: true,
          12: true
        }
      }, {
        criteria: '4_CREDITS',
        title: '4 credits in two areas',
        help: 'Student has either passed or is scheduled for (and presumed to pass) four credits of both semsters of science courses in two different areas (Life, Physical, one other from Life, Physical, or Other)',
        grades: {
          9: false,
          10: true,
          11: true,
          12: true
        }
      }, {
        criteria: 'GRAD',
        title: "Sci reqmt's satisfied",
        help: 'Student has either passed or is scheduled for (and presumed to pass) four credits of both semsters of science courses in three areas (Life, Physical, one other from Life, Physical, or Other)',
        grades: {
          9: false,
          10: false,
          11: true,
          12: true
        }
      }],
      VPA: [{
        criteria: 'SEM1',
        title: 'Semester 1',
        help: 'Student has either passed or is scheduled for (and presumed to pass) the first semester of a VAPA course',
        grades: {
          9: false,
          10: true,
          11: true,
          12: true
        }
      }, {
        criteria: 'SEM2',
        title: 'Semester 2',
        help: 'Student has either passed or is scheduled for (and presumed to pass) the second semester of a VAPA course whose first semester companion has already been passed, or is scheduled',
        grades: {
          9: false,
          10: true,
          11: true,
          12: true
        }
      }]
    }
  }],
  ETHNICITIES: {
    0: 'Not stated',
    100: 'American Indian',
    201: 'Chinese',
    202: 'Japanese',
    203: 'Korean',
    204: 'Vietnamese',
    205: 'Asian Indian',
    206: 'Laotian',
    207: 'Cambodian',
    208: 'Hmong',
    299: 'Other Asian',
    301: 'Native Hawaiian',
    302: 'Guamanian',
    303: 'Samoan',
    304: 'Tahitian',
    399: 'Other Pac Islander',
    400: 'Filipino',
    500: 'Hispanic',
    600: 'African American',
    700: 'White'
  },
  LIVING_SITUATION_CODES: {
    foster: {
      21: 'Group home (FGH) (FFA)',
      22: 'Family Home (FFH)',
      50: 'Formal Kinship Care (including NREFM)'
    },
    homeless: {
      40: 'Unsheltered',
      41: 'Sheltered',
      42: 'Hotel/Motel',
      43: 'Living with someone / Doubling up'
    },
    other: {
      10: 'International exchange',
      23: 'Hospital (not state hospital)',
      24: 'Residential facility',
      28: 'Other'
    }
  }
};
module.exports = CONSTANTS;
//# sourceMappingURL=sdusd-osps4-constants-2.esm.js.map
