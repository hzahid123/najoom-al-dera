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
    title: 'Ship Upholstery',
    btndiscription: 'Premium Marine Upholstery Services',
    description: 'We specialize in custom marine upholstery for ships, yachts, and boats, ensuring durability, elegance, and comfort even in harsh marine conditions.',
    imgSrc: '/assets/images/Service/ship_overview.jpg',
    imgoverview: '/assets/images/Service/ship_overview.jpg',
    icon: 'anchor',
    category: 'Marine Upholstery',
    featured: true,
    link: '/apps/services/detail/1',
    content: {
      title: 'Professional Ship & Yacht Upholstery',
      paragraphs: [
        'Our ship upholstery services are designed to withstand moisture, sun exposure, and heavy use while maintaining a luxurious look. From captain’s chairs to deck cushions and cabin interiors, we deliver flawless craftsmanship.',
        'We use marine-grade materials, waterproof stitching, and UV-resistant fabrics to ensure long-lasting and stylish upholstery for all types of vessels.'
      ],
      heading: 'Marine-Grade Craftsmanship for Every Vessel',
      data: [
        'Durable marine vinyl, anti-mold foam, UV protection coatings, and custom designs for seating, bedding, and wall panels.'
      ],
      headingpoint: '',
      datapoint: [],
      services: [
        {
          title: 'Cabin & Deck Upholstery',
          description: 'Custom foam and fabric work for interior lounges, beds, and deck cushions.',
          icon: 'sofa'
        },
        {
          title: 'Captain Seat Re-upholstery',
          description: 'High-density foam and luxury finish for captain and crew seating.',
          icon: 'user-check'
        },
        {
          title: 'Marine Cushions & Covers',
          description: 'Tailored waterproof covers and foam-based seating solutions.',
          icon: 'droplet'
        },
        {
          title: 'Wall & Ceiling Panels',
          description: 'Fabric-covered paneling solutions for premium marine interiors.',
          icon: 'layout'
        }
      ],
      cta: {
        text: 'Book Marine Upholstery Service',
        link: '/contact'
      },
      sdlcImages: {
        desktop1: '/assets/images/services/ship-desktop.jpg',
        mobile: '/assets/images/services/ship-mobile.jpg'
      }
    }
  },
  {
    id: 2,
    title: 'Car Upholstery',
    btndiscription: 'Restore or Customize Your Car Interior',
    description: 'We offer top-quality car upholstery services including seat repair, roof lining, dashboards, and complete interior restoration.',
    imgSrc: '/assets/images/services/car-upholstery.jpg',
    imgoverview: '/assets/images/services/car-overview.jpg',
    icon: 'car',
    category: 'Auto Upholstery',
    featured: true,
    link: '/apps/services/detail/2',
    content: {
      title: 'Expert Car Upholstery & Interior Restoration',
      paragraphs: [
        'Whether you want to restore a worn-out interior or completely revamp your car’s look, we provide custom car upholstery solutions tailored to your needs.',
        'From leather to fabric, our craftsmanship ensures every stitch enhances both comfort and aesthetics.'
      ],
      heading: 'Comfort Meets Craftsmanship in Every Ride',
      data: [
        'Reupholstery for car seats, roof linings, carpets, dashboards, and door panels using premium fabrics and leather.'
      ],
      headingpoint: '',
      datapoint: [],
      services: [
        {
          title: 'Seat Repair & Replacement',
          description: 'Fix torn or sagging seats with fresh padding and upholstery.',
          icon: 'settings'
        },
        {
          title: 'Roof Lining Restoration',
          description: 'Fix sagging car ceilings with heat-resistant, sag-proof materials.',
          icon: 'arrow-up-circle'
        },
        {
          title: 'Leather Seat Customization',
          description: 'Upgrade to premium stitched leather or sports styling.',
          icon: 'shield'
        },
        {
          title: 'Interior Detailing',
          description: 'Complete replacement for carpets, dashboards, and door panels.',
          icon: 'box'
        }
      ],
      cta: {
        text: 'Get Car Interior Work Done',
        link: '/contact'
      },
      sdlcImages: {
        desktop1: '/assets/images/services/car-desktop.jpg',
        mobile: '/assets/images/services/car-mobile.jpg'
      }
    }
  },
  {
    id: 3,
    title: 'Custom Furniture Upholstery',
    btndiscription: 'Restore Sofas, Chairs & More',
    description: 'We bring new life to old furniture with expert reupholstery, padding, and fabric replacement services.',
    imgSrc: '/assets/images/services/furniture.jpg',
    imgoverview: '/assets/images/services/furniture-overview.jpg',
    icon: 'home',
    category: 'Furniture Upholstery',
    featured: false,
    link: '/apps/services/detail/3',
    content: {
      title: 'Furniture Upholstery & Restoration',
      paragraphs: [
        'From antique pieces to modern furniture, we repair and reupholster sofas, chairs, and lounges with the finest craftsmanship.',
        'Choose from a variety of fabrics, foams, and padding options for both comfort and style.'
      ],
      heading: 'Bring New Life to Your Favorite Furniture',
      data: [
        'Custom upholstery for sofas, dining chairs, office furniture, and ottomans with high-quality foams and finishes.'
      ],
      headingpoint: '',
      datapoint: [],
      services: [
        {
          title: 'Sofa & Chair Reupholstery',
          description: 'Replace damaged fabric, foam, and springs with a fresh new look.',
          icon: 'couch'
        },
        {
          title: 'Antique Restoration',
          description: 'Preserve heritage furniture with precise fabric and padding replacement.',
          icon: 'clock'
        },
        {
          title: 'Custom Foam & Fabric Work',
          description: 'Tailored solutions for custom-sized furniture or décor items.',
          icon: 'ruler'
        }
      ],
      cta: {
        text: 'Restore Your Furniture',
        link: '/contact'
      },
      sdlcImages: {
        desktop1: '/assets/images/services/furniture-desktop.jpg',
        mobile: '/assets/images/services/furniture-mobile.jpg'
      }
    }
  },
  {
    id: 4,
    title: 'General Upholstery Services',
    btndiscription: 'Expert Upholstery for Any Surface',
    description: 'We provide upholstery solutions wherever needed — home, office, commercial, or outdoor spaces.',
    imgSrc: '/assets/images/services/general-upholstery.jpg',
    imgoverview: '/assets/images/services/general-overview.jpg',
    icon: 'layers',
    category: 'General',
    featured: false,
    link: '/apps/services/detail/4',
    content: {
      title: 'Reliable & Versatile Upholstery Services',
      paragraphs: [
        'Whether it’s a sofa in your home, a bench in your store, or cushions for your terrace, we provide high-quality, on-demand upholstery work wherever needed.',
        'We travel to client sites when necessary and ensure every job is handled with professionalism and detail.'
      ],
      heading: 'Flexible Upholstery Work for Every Setting',
      data: [
        'Indoor and outdoor fabric upholstery, cushion replacement, padding fixes, and site visits available on request.'
      ],
      headingpoint: '',
      datapoint: [],
      services: [
        {
          title: 'On-site Upholstery',
          description: 'We come to your location and complete the work as needed.',
          icon: 'map-pin'
        },
        {
          title: 'Outdoor Cushions',
          description: 'Weatherproof fabric and foam for garden furniture and patios.',
          icon: 'sun'
        },
        {
          title: 'Office & Commercial Upholstery',
          description: 'Reupholster waiting areas, chairs, or business lounges.',
          icon: 'briefcase'
        }
      ],
      cta: {
        text: 'Request Upholstery Service',
        link: '/contact'
      },
      sdlcImages: {
        desktop1: '/assets/images/services/general-desktop.jpg',
        mobile: '/assets/images/services/general-mobile.jpg'
      }
    }
  }
];
