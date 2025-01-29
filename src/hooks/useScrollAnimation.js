import { useEffect } from 'react';

const useScrollAnimation = () => {
    useEffect(() => {
        const callback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const animationClasses = [
                        'fade-in-bottom',
                        'fade-in-left',
                        'fade-in-right',
                        'scale-in',
                        'rotate-in'
                    ];
                    
                    // Find which animation class this element has
                    const animClass = animationClasses.find(className => 
                        entry.target.classList.contains(className)
                    );
                    
                    if (animClass) {
                        entry.target.classList.add('fade-in');
                    }
                }
            });
        };

        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(callback, options);
        const animationClasses = [
            '.fade-in-bottom',
            '.fade-in-left',
            '.fade-in-right',
            '.scale-in',
            '.rotate-in'
        ];

        // Observe all elements with animation classes
        animationClasses.forEach(className => {
            document.querySelectorAll(className).forEach(target => {
                observer.observe(target);
            });
        });

        return () => observer.disconnect();
    }, []);
};

export default useScrollAnimation; 