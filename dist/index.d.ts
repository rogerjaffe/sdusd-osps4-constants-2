declare const CONSTANTS: {
    SYSTEM: {
        DEBUG: boolean;
        API_URL_LOCALHOST: string;
        API_URL_PRODUCTION: string;
        COPYRIGHT: string;
        DB_PREFIX_PS: string;
        DB_PREFIX_OSPS: string;
        DB_NAME: string;
        EMAIL_LOG_TO: string;
        EMAIL_HOST: string;
        LAST_UPDATE_FILE: string;
        COURSE_UNDER_REVIEW_CONTACT: string;
        MAX_STUDENTS_TO_SHOW_IN_COURSE: number;
    };
    I_HIGH_LAB_COURSE_NUMBERS: string[];
    I_HIGH_SCHOOL_CODES: string[];
    CREDIT_CHECK: {
        CREDIT_THRESHOLDS: {
            9: number;
            10: number;
            11: number;
            12: number;
        };
    };
    CCTE: {
        NOT_COMPLETED: number;
        NOT_ATTEMPTED: number;
        ATTEMPTED: number;
        COMPLETED: number;
        SDUSD_SATISFIED: number;
        CALPADS_SATISFIED: number;
        PATHWAYS: {
            sector: string;
            name: string;
            levels: {
                introductory: string[][];
                intermediate: string[][];
                capstone: string[][];
            };
        }[];
    };
    OSPS_DATA: {
        OSPS_TABLE_LIST: string[];
        CSV_REQUIREMENT_FLAGS_FILENAME: string;
        CSV_REQUIREMENT_FLAGS_FIELDS_FILENAME: string;
        CSV_JSON_FILENAME: string;
        CSV_JSON_FIELDS_FILENAME: string;
        REQUIREMENT_FLAGS_TABLE_NAME: string;
        JSON_DATA_TABLE_NAME: string;
        OSPS_USERS_TABLE: string;
        IHIGH_ELIGIBLE_COURSES_CSV_FILE: string;
        IHIGH_TABLE_NAME: string;
        IHIGH_FIELDS_FILENAME: string;
        GRADE_REPLACEMENT_CSV_FILENAME: string;
        GRADE_REPLACEMENT_CSV_FIELDS_FILENAME: string;
        GRADE_REPLACEMENT_TABLE_NAME: string;
    };
    PS_FIELDS: {
        PS_CAHSEE: string[];
        PS_COURSE_LIST: string[];
        PS_ETHNIC_STUDIES: string[];
        PS_FITNESSGRAM: string[];
        PS_GPA: string[];
        PS_GRADE: string[];
        PS_SCHEDULE: string[];
        PS_SCHOOL: string[];
        PS_STUDENT: string[];
        PS_USER: string[];
        PS_ONLINE_COURSE_REQUESTS: string[];
    };
    UPDATE: {
        ELA: {
            GRAD: number;
            EN1: number;
            EN2: number;
            EN3: number;
            EN4: number;
            AL1: number;
            AL2: number;
            AC1: number;
            AC2: number;
            AL_OR_AC1: number;
            AL_OR_AC2: number;
        };
        ELE: {
            GRAD: number;
            SEM1: number;
            SEM2: number;
        };
        HIS: {
            GRAD: number;
            WH1: number;
            WH2: number;
            US1: number;
            US2: number;
            GOV: number;
            ECON: number;
            GOV_ECON: number;
        };
        LOE: {
            GRAD: number;
            LEVEL4: number;
            LEVEL2: number;
            LOTE: number;
        };
        MTH: {
            GRAD: number;
            IM1A: number;
            IM1B: number;
            IM2A: number;
            IM2B: number;
            IM3A: number;
            IM3B: number;
            COLLEGE: number;
            _4CREDITS: number;
            _6CREDITS: number;
        };
        NCR: {
            GRAD: number;
        };
        OTH: {
            GRAD: number;
        };
        PED: {
            GRAD: number;
            SEM1: number;
            SEM2: number;
            SEM3: number;
            SEM4: number;
            SCHEDULED: number;
            FITNESSGRAM: number;
        };
        SCI: {
            GRAD: number;
            BIO: number;
            CHE: number;
            PHY: number;
            LIFE: number;
            PHYSICAL: number;
            OTHER: number;
            _1REQMT: number;
            _2REQMT: number;
            _3REQMT: number;
        };
        VPA: {
            GRAD: number;
            SEM1: number;
            SEM2: number;
        };
    };
    IN_PROGRESS_OFFSET: number;
    UPDATE_LIST_FOR_SUMMARY: {
        ELA: {
            GRAD: number;
            EN1: number;
            EN2: number;
            EN3: number;
            EN4: number;
            AL1: number;
            AL2: number;
            AC1: number;
            AC2: number;
        };
        ELE: {
            GRAD: number;
            SEM1: number;
            SEM2: number;
        };
        HIS: {
            GRAD: number;
            WH1: number;
            WH2: number;
            US1: number;
            US2: number;
            GOV: number;
            ECON: number;
        };
        LOE: {
            GRAD: number;
            LEVEL2: number;
            LEVEL4: number;
            LOTE: number;
        };
        MTH: {
            GRAD: number;
            IM1A: number;
            IM1B: number;
            IM2A: number;
            IM2B: number;
            IM3A: number;
            IM3B: number;
            _4CREDITS: number;
            _6CREDITS: number;
        };
        PED: {
            GRAD: number;
            SEM1: number;
            SEM2: number;
            SEM3: number;
            SEM4: number;
            SCHEDULED: number;
            FITNESSGRAM: number;
        };
        SCI: {
            GRAD: number;
            BIO: number;
            CHE: number;
            PHY: number;
            LIFE: number;
            PHYSICAL: number;
            OTHER: number;
        };
        VPA: {
            GRAD: number;
            SEM1: number;
            SEM2: number;
        };
    };
    SUBJECT_TEXT: {
        HIS: string;
        ELA: string;
        MTH: string;
        SCI: string;
        LOE: string;
        VPA: string;
        ELE: string;
        PED: string;
        OTH: string;
        NCR: string;
    };
    UPDATE_TEXT: {
        ELA: {
            GRAD: string;
            EN1: string;
            EN2: string;
            EN3: string;
            EN4: string;
            AL1: string;
            AL2: string;
            AC1: string;
            AC2: string;
            AL_OR_AC1: string;
            AL_OR_AC2: string;
        };
        ELE: {
            GRAD: string;
            SEM1: string;
            SEM2: string;
        };
        HIS: {
            GRAD: string;
            WH1: string;
            WH2: string;
            US1: string;
            US2: string;
            GOV: string;
            ECON: string;
            GOV_ECON: string;
        };
        LOE: {
            GRAD: string;
            LEVEL4: string;
            LEVEL2: string;
            LOTE: string;
        };
        MTH: {
            GRAD: string;
            IM1A: string;
            IM1B: string;
            IM2A: string;
            IM2B: string;
            IM3A: string;
            IM3B: string;
            COLLEGE: string;
            _4CREDITS: string;
            _6CREDITS: string;
        };
        NCR: {
            GRAD: string;
        };
        OTH: {
            GRAD: string;
        };
        PED: {
            GRAD: string;
            SEM1: string;
            SEM2: string;
            SEM3: string;
            SEM4: string;
            SCHEDULED: string;
            FITNESSGRAM: string;
        };
        SCI: {
            GRAD: string;
            BIO: string;
            CHE: string;
            PHY: string;
            LIFE: string;
            PHYSICAL: string;
            OTHER: string;
            _1REQMT: string;
            _2REQMT: string;
            _3REQMT: string;
        };
        VPA: {
            GRAD: string;
            SEM1: string;
            SEM2: string;
        };
    };
    PERMISSIONS_SETS: {
        OSPS_READ: number;
        OSPS_WRITE: number;
        OSPS_ALTERNATIVE: number;
        OSPS_DISTRICT: number;
        OSPS_SUPERUSER: number;
    };
    PS_DATA: {
        filename: string;
        tablename: string;
        fields: string[];
    }[];
    GUARDIAN_LANGUAGES: {
        '00': string;
        '01': string;
        '05': string;
        11: string;
        60: string;
    };
    GUARDIAN_LANGUAGE_NAMES: {
        '00': string;
        '01': string;
        '02': string;
        '03': string;
        '04': string;
        '05': string;
        '06': string;
        '07': string;
        '08': string;
        '09': string;
        10: string;
        11: string;
        12: string;
        13: string;
        16: string;
        17: string;
        18: string;
        20: string;
        21: string;
        22: string;
        23: string;
        25: string;
        27: string;
        28: string;
        29: string;
        30: string;
        32: string;
        33: string;
        34: string;
        35: string;
        36: string;
        37: string;
        38: string;
        39: string;
        43: string;
        45: string;
        46: string;
        48: string;
        49: string;
        51: string;
        52: string;
        54: string;
        56: string;
        57: string;
        60: string;
        65: string;
        66: string;
        70: string;
        99: string;
        UU: string;
    };
    SDUSD_AT_RISK: {
        id: number;
        email: string;
        teacher_number: string;
        list_name: string;
        user_name: string;
        config: {
            ELA: {
                criteria: string;
                title: string;
                help: string;
                grades: {
                    9: boolean;
                    10: boolean;
                    11: boolean;
                    12: boolean;
                };
            }[];
            ELE: {
                criteria: string;
                title: string;
                help: string;
                grades: {
                    9: boolean;
                    10: boolean;
                    11: boolean;
                    12: boolean;
                };
            }[];
            HIS: {
                criteria: string;
                title: string;
                help: string;
                grades: {
                    9: boolean;
                    10: boolean;
                    11: boolean;
                    12: boolean;
                };
            }[];
            LOE: {
                criteria: string;
                title: string;
                help: string;
                grades: {
                    9: boolean;
                    10: boolean;
                    11: boolean;
                    12: boolean;
                };
            }[];
            MTH: {
                criteria: string;
                title: string;
                help: string;
                grades: {
                    9: boolean;
                    10: boolean;
                    11: boolean;
                    12: boolean;
                };
            }[];
            PED: {
                criteria: string;
                title: string;
                help: string;
                grades: {
                    9: boolean;
                    10: boolean;
                    11: boolean;
                    12: boolean;
                };
            }[];
            SCI: {
                criteria: string;
                title: string;
                help: string;
                grades: {
                    9: boolean;
                    10: boolean;
                    11: boolean;
                    12: boolean;
                };
            }[];
            VPA: {
                criteria: string;
                title: string;
                help: string;
                grades: {
                    9: boolean;
                    10: boolean;
                    11: boolean;
                    12: boolean;
                };
            }[];
        };
    }[];
    ETHNICITIES: {
        0: string;
        100: string;
        201: string;
        202: string;
        203: string;
        204: string;
        205: string;
        206: string;
        207: string;
        208: string;
        299: string;
        301: string;
        302: string;
        303: string;
        304: string;
        399: string;
        400: string;
        500: string;
        600: string;
        700: string;
    };
    LIVING_SITUATION_CODES: {
        foster: {
            21: string;
            22: string;
            50: string;
        };
        homeless: {
            40: string;
            41: string;
            42: string;
            43: string;
        };
        other: {
            10: string;
            23: string;
            24: string;
            28: string;
        };
    };
};
export default CONSTANTS;
