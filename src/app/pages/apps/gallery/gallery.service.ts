import { Injectable } from '@angular/core';

@Injectable()
export class PhotoService {
    constructor() {}

    getImages(): Promise<any[]> {
        return Promise.resolve([
    { itemImageSrc: '/assets/images/shipsImage/1.jpg', thumbnailImageSrc: '/assets/images/shipsImage/1.jpg', alt: 'Luxury Yacht Lounge', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/2.jpg', thumbnailImageSrc: '/assets/images/shipsImage/2.jpg', alt: 'Commercial Ship Control Room', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/3.jpg', thumbnailImageSrc: '/assets/images/shipsImage/3.jpg', alt: 'Yacht Guest Cabin', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/4.jpg', thumbnailImageSrc: '/assets/images/shipsImage/4.jpg', alt: 'Custom Furniture Installation', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/5.jpg', thumbnailImageSrc: '/assets/images/shipsImage/5.jpg', alt: 'Yacht Deck Seating', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/6.jpg', thumbnailImageSrc: '/assets/images/shipsImage/6.jpg', alt: 'Crew Quarters Upgrade', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/7.jpg', thumbnailImageSrc: '/assets/images/shipsImage/7.jpg', alt: 'Interior Wall Upholstery', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/8.jpg', thumbnailImageSrc: '/assets/images/shipsImage/8.jpg', alt: 'Custom Navigation Desk', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/9.jpg', thumbnailImageSrc: '/assets/images/shipsImage/9.jpg', alt: 'Luxury Dining Booth', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/10.jpg', thumbnailImageSrc: '/assets/images/shipsImage/10.jpg', alt: 'Bridge Crew Chairs', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/11.jpg', thumbnailImageSrc: '/assets/images/shipsImage/11.jpg', alt: 'Panoramic Lounge Interior', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/12.jpg', thumbnailImageSrc: '/assets/images/shipsImage/12.jpg', alt: 'Custom Wet Bar Design', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/13.jpg', thumbnailImageSrc: '/assets/images/shipsImage/13.jpg', alt: 'Owner Suite Sofa', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/14.jpg', thumbnailImageSrc: '/assets/images/shipsImage/14.jpg', alt: 'Ferry Passenger Bench', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/15.jpg', thumbnailImageSrc: '/assets/images/shipsImage/15.jpg', alt: 'Guest Stateroom Details', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/16.jpg', thumbnailImageSrc: '/assets/images/shipsImage/16.jpg', alt: 'Helm Chair Assembly', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/17.jpg', thumbnailImageSrc: '/assets/images/shipsImage/17.jpg', alt: 'Sun Deck Chaise Lounge', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/18.jpg', thumbnailImageSrc: '/assets/images/shipsImage/18.jpg', alt: 'Marine Office Setup', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/19.jpg', thumbnailImageSrc: '/assets/images/shipsImage/19.jpg', alt: 'Bedding and Interior Trim', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/20.jpg', thumbnailImageSrc: '/assets/images/shipsImage/20.jpg', alt: 'Foldable Table Unit', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/21.jpg', thumbnailImageSrc: '/assets/images/shipsImage/21.jpg', alt: 'Jacuzzi Seating Area', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/22.jpg', thumbnailImageSrc: '/assets/images/shipsImage/22.jpg', alt: 'Captain’s Chair Arrangement', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/23.jpg', thumbnailImageSrc: '/assets/images/shipsImage/23.jpg', alt: 'Master Cabin Setup', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/24.jpg', thumbnailImageSrc: '/assets/images/shipsImage/24.jpg', alt: 'Bar Stool Customization', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/25.jpg', thumbnailImageSrc: '/assets/images/shipsImage/25.jpg', alt: 'Upper Deck Lounge', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/26.jpg', thumbnailImageSrc: '/assets/images/shipsImage/26.jpg', alt: 'Industrial Ship Benches', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/27.jpg', thumbnailImageSrc: '/assets/images/shipsImage/27.jpg', alt: 'Cabin Storage Panels', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/28.jpg', thumbnailImageSrc: '/assets/images/shipsImage/28.jpg', alt: 'Integrated Helm Station', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/29.jpg', thumbnailImageSrc: '/assets/images/shipsImage/29.jpg', alt: 'Luxury Cinema Room', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/30.jpg', thumbnailImageSrc: '/assets/images/shipsImage/30.jpg', alt: 'Ship Communication Bay', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/31.jpg', thumbnailImageSrc: '/assets/images/shipsImage/31.jpg', alt: 'Interior Sofa Layout', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/32.jpg', thumbnailImageSrc: '/assets/images/shipsImage/32.jpg', alt: 'Modular Panel Fabrication', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/33.jpg', thumbnailImageSrc: '/assets/images/shipsImage/33.jpg', alt: 'Sky Lounge Curves', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/34.jpg', thumbnailImageSrc: '/assets/images/shipsImage/34.jpg', alt: 'Bridge Workstation Area', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/35.jpg', thumbnailImageSrc: '/assets/images/shipsImage/35.jpg', alt: 'Curtain Paneling Design', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/36.jpg', thumbnailImageSrc: '/assets/images/shipsImage/36.jpg', alt: 'Rotating Helm Fixture', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/37.jpg', thumbnailImageSrc: '/assets/images/shipsImage/37.jpg', alt: 'VIP Suite Recliners', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/38.jpg', thumbnailImageSrc: '/assets/images/shipsImage/38.jpg', alt: 'Passenger Section Update', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/39.jpg', thumbnailImageSrc: '/assets/images/shipsImage/39.jpg', alt: 'Reading Nook Finish', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/40.jpg', thumbnailImageSrc: '/assets/images/shipsImage/40.jpg', alt: 'Storage and Tech Rack', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/41.jpg', thumbnailImageSrc: '/assets/images/shipsImage/41.jpg', alt: 'Owner Deck Sofas', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/42.jpg', thumbnailImageSrc: '/assets/images/shipsImage/42.jpg', alt: 'High-Capacity Loungers', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/43.jpg', thumbnailImageSrc: '/assets/images/shipsImage/43.jpg', alt: 'Interior Trim and Woodwork', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/44.jpg', thumbnailImageSrc: '/assets/images/shipsImage/44.jpg', alt: 'Desk and Equipment Setup', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/45.jpg', thumbnailImageSrc: '/assets/images/shipsImage/45.jpg', alt: 'Luxury Lounge Lighting', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/46.jpg', thumbnailImageSrc: '/assets/images/shipsImage/46.jpg', alt: 'Workstation Cluster', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/47.jpg', thumbnailImageSrc: '/assets/images/shipsImage/47.jpg', alt: 'Decorative Upholstery', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/48.jpg', thumbnailImageSrc: '/assets/images/shipsImage/48.jpg', alt: 'Handcrafted Furniture', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/49.jpg', thumbnailImageSrc: '/assets/images/shipsImage/49.jpg', alt: 'Private Cinema Sofas', category: 'ship' },
    { itemImageSrc: '/assets/images/shipsImage/50.jpg', thumbnailImageSrc: '/assets/images/shipsImage/50.jpg', alt: 'Commercial Interior Pods', category: 'ship' }


        ]);
    }
}