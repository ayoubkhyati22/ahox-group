// Company and Contact Information Constants

export const COMPANY_INFO = {
    name: 'AHOX GmbH',
    legalName: 'AHOX GmbH',
    
    // Contact Information
    email: {
      main: 'info@ahox-group.com',
      construction: 'info@ahox-cm.de',
      support: 'support@ahox-group.com'
    },
    
    phone: {
      main: '+49 69 272 787 61',
      whatsapp: '+49 157 33 44 88 98',
      mainFormatted: '+49 69 2727 8761',
      whatsappFormatted: '+49 157 33 44 88 98'
    },
    
    // Physical Address
    address: {
      street: 'Ostendstraße 80',
      postalCode: '60314',
      city: 'Frankfurt a.M.',
      country: 'Germany',
      countryCode: 'DE',
      full: 'Ostendstraße 80, 60314 Frankfurt a.M., Germany'
    },
    
    // Website
    website: {
      main: 'www.ahox-group.com',
      mainUrl: 'https://www.ahox-group.com',
      constructionUrl: 'https://www.ahox-cm.de'
    },
    
    // Social Media (placeholders - update when available)
    social: {
      linkedin: '#',
      facebook: '#',
      twitter: '#',
      instagram: '#'
    },
    
    // WhatsApp Configuration
    whatsapp: {
      number: '4915733448898', // without + and spaces
      defaultMessageKey: 'whatsapp.message' // translation key
    },
    
    // Business Hours
    businessHours: {
      weekdays: '09:00 - 18:00',
      saturday: '10:00 - 14:00',
      sunday: 'Closed',
      timezone: 'CET'
    },
    
    // Company Details
    registration: {
      taxId: '', // Add when available
      registrationNumber: '', // Add when available
      vatId: '' // Add when available
    }
  } as const;
  
  // Location-specific Information
  export const LOCATIONS = {
    frankfurt: {
      city: 'Frankfurt',
      country: 'Germany',
      office: 'Main Office',
      isHeadquarters: true,
      contact: {
        phone: COMPANY_INFO.phone.main,
        email: COMPANY_INFO.email.main
      }
    },
    casablanca: {
      city: 'Casablanca',
      country: 'Morocco',
      office: 'Regional Office',
      isHeadquarters: false,
      contact: {
        phone: '', // Add when available
        email: COMPANY_INFO.email.main
      }
    },
    dubai: {
      city: 'Dubai',
      country: 'UAE',
      office: 'Regional Office',
      isHeadquarters: false,
      contact: {
        phone: '', // Add when available
        email: COMPANY_INFO.email.main
      }
    },
    pristina: {
      city: 'Pristina',
      country: 'Kosovo',
      office: 'Regional Office',
      isHeadquarters: false,
      contact: {
        phone: '', // Add when available
        email: COMPANY_INFO.email.main
      }
    }
  } as const;
  
  // Division Colors
  export const DIVISION_COLORS = {
    construction: '#14B3AA',
    realEstate: '#E8D700',
    security: '#D10A11'
  } as const;
  
  // Brand Colors
  export const BRAND_COLORS = {
    purple: '#2C1F3A',
    teal: '#14B3AA',
    gold: '#E8D700',
    red: '#D10A11',
    purpleLight: '#E8E3F0',
    white: '#FFFFFF',
    black: '#000000'
  } as const;
  
  // Helper Functions
  export const getWhatsAppLink = (messageKey?: string): string => {
    const message = messageKey || COMPANY_INFO.whatsapp.defaultMessageKey;
    return `https://wa.me/${COMPANY_INFO.whatsapp.number}?text=${encodeURIComponent(message)}`;
  };
  
  export const getEmailLink = (subject?: string, body?: string): string => {
    const params = new URLSearchParams();
    if (subject) params.append('subject', subject);
    if (body) params.append('body', body);
    const queryString = params.toString();
    return `mailto:${COMPANY_INFO.email.main}${queryString ? '?' + queryString : ''}`;
  };
  
  export const getPhoneLink = (phoneNumber?: string): string => {
    const number = phoneNumber || COMPANY_INFO.phone.main;
    return `tel:${number.replace(/\s/g, '')}`;
  };
  
  export const getGoogleMapsLink = (): string => {
    const address = encodeURIComponent(COMPANY_INFO.address.full);
    return `https://www.google.com/maps/search/?api=1&query=${address}`;
  };
  
  // Type exports for TypeScript
  export type CompanyInfo = typeof COMPANY_INFO;
  export type LocationKey = keyof typeof LOCATIONS;
  export type DivisionKey = keyof typeof DIVISION_COLORS;
  
  export default COMPANY_INFO;