import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from 'src/app/pages/apps/gallery/gallery.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.scss',
    standalone: true,
    imports: [CommonModule],
    providers: [PhotoService]
})
export class GalleryComponent implements OnInit {
    images: any[] = [];
    filteredImages: any[] = [];
    selectedCategory: string = 'all';
    categories: string[] = ['all', 'ship', 'car', 'furniture', 'general'];
   
    // Lightbox properties
    isLightboxOpen: boolean = false;
    currentImageIndex: number = 0;
    currentImage: any = null;

    constructor(
        private photoService: PhotoService,
        private route: ActivatedRoute // Inject ActivatedRoute
    ) {}

    ngOnInit() {
        // Load images first
        this.photoService.getImages().then(images => {
            this.images = images;
            
            // Check for category parameter from route
            this.route.queryParams.subscribe(params => {
                const categoryParam = params['category'];
                if (categoryParam && this.categories.includes(categoryParam)) {
                    this.selectedCategory = categoryParam;
                } else {
                    this.selectedCategory = 'all';
                }
                // Filter images based on the selected category
                this.filterImages(this.selectedCategory);
            });
        });
    }

    // Filter images by category
    filterImages(category: string) {
        this.selectedCategory = category;
        if (category === 'all') {
            this.filteredImages = this.images;
        } else {
            this.filteredImages = this.images.filter(img => img.category === category);
        }
    }

    // Open lightbox
    openLightbox(index: number) {
        this.currentImageIndex = index;
        this.currentImage = this.filteredImages[index];
        this.isLightboxOpen = true;
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    // Close lightbox
    closeLightbox() {
        this.isLightboxOpen = false;
        this.currentImage = null;
        document.body.style.overflow = 'auto';
    }

    // Navigate to previous image
    previousImage() {
        if (this.currentImageIndex > 0) {
            this.currentImageIndex--;
        } else {
            this.currentImageIndex = this.filteredImages.length - 1;
        }
        this.currentImage = this.filteredImages[this.currentImageIndex];
    }

    // Navigate to next image
    nextImage() {
        if (this.currentImageIndex < this.filteredImages.length - 1) {
            this.currentImageIndex++;
        } else {
            this.currentImageIndex = 0;
        }
        this.currentImage = this.filteredImages[this.currentImageIndex];
    }

    // Handle keyboard navigation
    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if (this.isLightboxOpen) {
            switch (event.key) {
                case 'Escape':
                    this.closeLightbox();
                    break;
                case 'ArrowLeft':
                    this.previousImage();
                    break;
                case 'ArrowRight':
                    this.nextImage();
                    break;
            }
        }
    }

    // Get category display name
    getCategoryDisplayName(category: string): string {
        const categoryMap: { [key: string]: string } = {
            'all': 'All Work',
            'ship': 'Ship Upholstery',
            'car': 'Car Upholstery',
            'furniture': 'Furniture Upholstery',
            'general': 'General Upholstery'
        };
        return categoryMap[category] || category;
    }
}