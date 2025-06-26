// src/app/pages/apps/services/serviceData.ts
export interface Service {
  id: number;
  title: string;
  description: string;
  imgSrc: string;
  imgoverview: string;
  icon: string;
  btndiscription: string; // Assuming this is a button display text
  category: string;
  featured: boolean;
  link: string;
  content?: {
    title: string;
    paragraphs: string[];
    data: string[];
    heading: string;
    datapoint: string[];
    headingpoint: string;

    services: {  // Changed from features to services
      title: string;
      description: string;
      icon: string;
    }[];
    cta?: {
      text: string;
      link: string;
    };
    sdlcImages?: {
      desktop1: string;
      desktop2?: string;
      mobile?: string;
    };
  };
}

export const services: Service[] = [
 {
  id: 1,
  title: 'Web Development',
  btndiscription: 'Build Scalable Web Applications',
  description: 'We create modern, high-performing, and secure web applications tailored to meet your business goals.',
  imgSrc: '/assets/images/services/websites.jpg',
    imgoverview: '/assets/images/services/weba.jpg',
  icon: 'layout',
  category: 'Development',
  featured: false,
  link: '/apps/services/detail/1',
  content: {
    title: 'Professional Web Development Services',
    paragraphs: [
      'Our web development services are focused on delivering robust, scalable, and visually appealing web applications that enhance user experience. From static websites to dynamic enterprise-level platforms, we deliver performance-driven web solutions.',
      'We utilize the latest technologies and frameworks to ensure your site remains ahead of the curve. Whether you need e-commerce platforms, CMS, or custom portals, we deliver with precision and innovation.'
    ],
    headingpoint: '',
    datapoint: [],
    heading: 'Powerful & Future-Ready Web Solutions',
    data: [
      'We provide tailored web development solutions from design to deployment using HTML5, CSS3, JavaScript, Angular, React, and more. We ensure mobile responsiveness, SEO-friendly structure, and high scalability.'
    ],
    services: [
      {
        title: 'Responsive Website Design',
        description: 'We create responsive and engaging websites that adapt to all devices for better user experience and retention.',
        icon: 'devices'
      },
      {
        title: 'Custom Web Applications',
        description: 'Our team delivers secure and dynamic web apps tailored to your exact business needs.',
        icon: 'settings'
      },
      {
        title: 'CMS Development',
        description: 'From WordPress to custom CMS, we build platforms that let you manage content with ease.',
        icon: 'edit'
      },
      {
        title: 'Frontend & Backend Integration',
        description: 'We specialize in creating seamless interactions between user-facing interfaces and backend logic.',
        icon: 'git-branch'
      }
    ],
    cta: {
      text: 'Start Your Web Project',
      link: '/contact'
    },
    sdlcImages: {
      desktop1: '/assets/images/services/ww-2.png',
      mobile: '/assets/images/services/mobile-w-2.PNG',
    }
  }
}
,




{
  id: 2,
  title: 'Mobile App Development',
  btndiscription: 'Launch Feature-Rich Mobile Apps',
  description: 'We develop native and cross-platform mobile apps that are scalable, engaging, and user-friendly.',
     imgSrc: '/assets/images/services/app.jpg',
    imgoverview: '/assets/images/services/mobile.jpg',
  icon: 'device-mobile-code',
  category: 'Development',
  featured: false,
  link: '/apps/services/detail/2',
  content: {
    title: 'Innovative Mobile App Development Services',
    paragraphs: [
      'We specialize in building high-performing mobile applications for iOS and Android that are fast, secure, and deliver seamless user experiences.',
      'Our developers follow agile methodologies, use powerful frameworks, and focus on user-centric design to ensure your app stands out in the competitive app market.'
    ],
    headingpoint: '',
    datapoint: [],
    heading: 'Native & Cross-Platform Mobile Apps',
    data: [
      'Our team builds fully functional mobile apps tailored to your business goals using Swift, Kotlin, Flutter, and React Native. We ensure reliability, scalability, and intuitive design in every mobile product.'
    ],
    services: [
      {
        title: 'Android App Development',
        description: 'We develop robust Android applications using the latest tools and follow material design guidelines.',
        icon: 'brand-android'
      },
      {
        title: 'iOS App Development',
        description: 'Our team crafts elegant and fast iOS apps using Swift and Objective-C for a smooth Apple experience.',
        icon: 'brand-apple'
      },
      {
        title: 'Cross-Platform Apps',
        description: 'Using frameworks like Flutter and React Native, we deliver apps that work seamlessly across platforms.',
        icon: 'layers-intersect'
      },
      {
        title: 'App Maintenance & Support',
        description: 'We provide ongoing updates, performance monitoring, and support to keep your app running at its best.',
        icon: 'refresh'
      }
    ],
    cta: {
      text: 'Get a Custom App',
      link: '/contact'
    },
    sdlcImages: {
      desktop1: '/assets/images/services/mm-1.png',
      desktop2: '/assets/images/services/mm-2.png',
      mobile: '/assets/images/services/mobile-m-1.png'
    }
  }
}
,


 {
  id: 3,
  title: 'UX/UI Design',
  btndiscription: 'Design User-Centric Interfaces',
  description: 'We craft intuitive and engaging UI/UX designs that enhance usability and drive user satisfaction.',
   imgSrc: '/assets/images/services/ui.jpg',
    imgoverview: '/assets/images/services/uix.jpg',
  icon: 'palette',
  category: 'Design',
  featured: false,
  link: '/apps/services/detail/3',
  content: {
    title: 'Creative UX/UI Design Services',
    paragraphs: [
      'We believe great design enhances user engagement. Our designers blend creativity with functionality to craft beautiful and easy-to-use interfaces.',
      'From wireframes to clickable prototypes, we bring your digital ideas to life with pixel-perfect precision and design thinking approaches.'
    ],
    headingpoint: '',
    datapoint: [],
    heading: 'Elevate User Experiences with Stunning Design',
    data: [
      'Our design team focuses on building intuitive interfaces, seamless interactions, and accessibility. We make sure the user’s journey is smooth, aesthetic, and goal-oriented.'
    ],
    services: [
      {
        title: 'Wireframing & Prototyping',
        description: 'We map out user flows and build prototypes to test usability before development.',
        icon: 'layout-dashboard'
      },
      {
        title: 'Visual Design',
        description: 'Our team crafts visually compelling designs that align with your brand and goals.',
        icon: 'brush'
      },
      {
        title: 'UX Research',
        description: 'We perform detailed user research to understand behavior and inform design decisions.',
        icon: 'search'
      },
      {
        title: 'Interaction Design',
        description: 'We design fluid and intuitive interactions that improve user satisfaction and app retention.',
        icon: 'cursor-click'
      }
    ],
    cta: {
      text: 'Improve Your UX',
      link: '/contact'
    },
    sdlcImages: {
      desktop1: '/assets/images/services/uiui-1.png',
      desktop2: '/assets/images/services/uiui-2.png',
      mobile: '/assets/images/services/mobile-ui-1.png'
    }
  }
}
,


























{
  id: 4,
  title: 'E-commerce Solutions',
  btndiscription: 'Build Powerful Online Stores',
  description: 'We deliver complete e-commerce platforms with robust features to help you grow your online business.',
 imgSrc: '/assets/images/services/ecvv.jpg',
    imgoverview: '/assets/images/services/ecom.jpg',
  icon: 'shopping-cart',
  category: 'E-commerce',
  featured: false,
  link: '/apps/services/detail/4',
  content: {
    title: 'All-in-One E-commerce Development Services',
    paragraphs: [
      'We specialize in building feature-rich e-commerce websites and applications that drive sales and improve user experience. Our solutions are scalable and tailored for both B2C and B2B models.',
      'We integrate powerful tools for inventory, payments, marketing, and shipping, enabling seamless operations and customer engagement.'
    ],
    headingpoint: '',
    datapoint: [],
    heading: 'Grow Your Business with Custom E-commerce Platforms',
    data: [
      'Our e-commerce platforms are optimized for speed, mobile responsiveness, SEO, and easy management, using platforms like Magento, Shopify, WooCommerce, or custom-built solutions.'
    ],
    services: [
      {
        title: 'Custom E-commerce Website',
        description: 'Tailored online stores with user-friendly interfaces and admin dashboards.',
        icon: 'shopping-bag'
      },
      {
        title: 'Payment Gateway Integration',
        description: 'We integrate secure and fast payment solutions like Stripe, PayPal, Razorpay, and more.',
        icon: 'credit-card'
      },
      {
        title: 'Inventory & Order Management',
        description: 'Automate inventory tracking, order processing, and delivery updates.',
        icon: 'package'
      },
      {
        title: 'Mobile Commerce',
        description: 'We build m-commerce apps that enhance the shopping experience on mobile devices.',
        icon: 'device-mobile'
      }
    ],
    cta: {
      text: 'Launch Your Online Store',
      link: '/contact'
    },
    sdlcImages: {
      desktop1: '/assets/images/services/ee-1.png',
      desktop2: '/assets/images/services/ee-2.png',
      mobile: '/assets/images/services/mobile-q-1.png'
    }
  }
}
,

  {
    id: 5,
    title: 'Custom Software Development',
    btndiscription: '    Build High-Performance Website',

    description: 'We build dynamic & secure Software Solutions designed to evolve your business and maximize efficiencys',
    imgSrc: '/assets/images/services/custom.jpg',
    imgoverview: '/assets/images/services/cus.jpg',
    icon: 'code',
    category: 'Development',
    featured: false,
    link: '/apps/services/detail/5',
    content: {
      title: 'A Trusted Custom Software Development Company',


      paragraphs: [
        'Our custom software development company offers innovative solutions to deliver exceptional user experiences that can help you lead the industry. We focus on building secure, high-quality, and scalable solutions that drive efficiency. Our dedicated team designs roadmaps to develop software solutions that tackle every challenge and deliver a unique product that evolves with technology trends.',
        'To help you grow, we provide full-stack development services and optimize every step from frontends to backends to ensure the system is responsive and runs efficiently. Our services are suitable for every company size, from small to large-scale enterprises across all industries.'
      ],
         headingpoint: '',
      datapoint: [

      ],


      heading: 'Deliver Full-cycle Software Development Services to Ensure Long-term Success',

      data: [
        'Our company leads the industry as we have a proven track record of delivering custom technology solutions tailored to industry and business needs. We offer end-to-end software development services to support your business infrastructure using full-stack technology.',

      ],



      services: [
        {
          title: 'Web App Development',
          description: 'Our experts focus on designing a secure web app that ensures your future growth in the industry. We streamline the development process to develop a seamless cross-device experience and use the latest technologies to optimize performance, such as Flutter, ASP.Net, Python, React Native, etc.',
          icon: 'web'
        },
        {
          title: 'Web Development',
          description: 'We aim to exceed our customers expectations with our custom web development services, responsive designs, and scalable architectures to increase user engagement. Using our full-stack development services, we build dynamic web products to ensure excellence in every project',
          icon: 'code'
        },
        {
          title: 'Mobile App Development',
          description: 'We bring efficiency to your project using the latest technology and tools resulting in exceptional user experience. Our team follows an effective workflow that eliminates complexity and delivers performance-optimized solutions that drive user retention.',
          icon: 'mobile-device'
        },
      


      ],
      cta: {
        text: 'Get Started Today',
        link: '/contact'
      },
      sdlcImages: {
        desktop1: '/assets/images/services/cc-1.png',
        desktop2: '/assets/images/services/cc-2.png',
        mobile: '/assets/images/services/mobile-c-1.png'
      }
    }
  },




{
  id: 6,
  title: 'Quality Assurance',
  btndiscription: 'Ensure Seamless Software Quality',

  description: 'We offer comprehensive Quality Assurance services to deliver reliable, secure, and high-performing software solutions.',
imgSrc: '/assets/images/services/quality.jpg',
    imgoverview: '/assets/images/services/qu.jpg',
  icon: 'shield-check',
  category: 'Development',
  featured: false,
  link: '/apps/services/detail/6',
  content: {
    title: 'Reliable Quality Assurance & Testing Services',

    paragraphs: [
      'Our dedicated QA team ensures that your software meets the highest standards of performance, usability, and security. We use both automated and manual testing techniques to eliminate bugs and deliver a flawless product experience.',
      'Whether its functional, performance, security, or usability testing, we help companies reduce risk and gain user trust by identifying vulnerabilities before deployment. We work closely with your development team to ensure continuous delivery of quality software.'
    ],

    headingpoint: '',

    datapoint: [],

    heading: 'End-to-End Quality Assurance for Unmatched Reliability',

    data: [
      'With our robust QA methodologies, we ensure your application performs as expected under all scenarios. From agile testing frameworks to regression and UAT, our goal is to help you reduce time-to-market and increase product reliability.'
    ],

    services: [
      {
        title: 'Manual Testing',
        description: 'Our QA engineers follow detailed test cases to validate functionality, design, and performance of your software, ensuring every edge case is handled before launch.',
        icon: 'clipboard-list'
      },
      {
        title: 'Automation Testing',
        description: 'Using tools like Selenium, Cypress, and TestComplete, we automate repetitive tests to improve accuracy and save valuable development time.',
        icon: 'zap'
      },
      {
        title: 'Performance Testing',
        description: 'We analyze how your app behaves under stress to ensure optimal performance, even during peak traffic loads, using tools like JMeter and LoadRunner.',
        icon: 'activity'
      },
      {
        title: 'Security Testing',
        description: 'Our team performs vulnerability assessments and penetration tests to secure your application against potential threats and unauthorized access.',
        icon: 'shield'
      }
    ],
    
    cta: {
      text: 'Request a QA Consultation',
      link: '/contact'
    },

    sdlcImages: {
      desktop1: '/assets/images/services/ee-1.png',
      desktop2: '/assets/images/services/ee-2.png',
      mobile: '/assets/images/services/mobile-q-1.png'
    }
  }
}
,
];