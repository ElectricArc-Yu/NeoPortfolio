/// <reference types="cypress" />

describe('Media Page Animation Performance Tests', () => {
  const MEDIA_URL = '/media';
  
  beforeEach(() => {
    cy.visit(MEDIA_URL);
    cy.get('[data-testid="media-content"]', { timeout: 10000 }).should('be.visible');
  });

  describe('Roller Shutter Animation Tests', () => {
    it('should expand series with smooth roller shutter animation', () => {
      // Find first series header
      cy.get('.seriesHeader').first().as('firstSeries');
      
      // Click to expand
      cy.get('@firstSeries').click();
      
      // Verify animation starts
      cy.get('.seriesContent').should('be.visible');
      
      // Measure animation duration
      const startTime = performance.now();
      
      // Wait for animation completion
      cy.get('.seriesContent').should(($el) => {
        const height = $el.height();
        expect(height).to.be.greaterThan(100); // Should expand significantly
      });
      
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      // Verify animation duration is within expected range (1-1.5 seconds)
      expect(duration).to.be.greaterThan(1000); // Minimum 1 second
      expect(duration).to.be.lessThan(2000); // Maximum 2 seconds with buffer
    });

    it('should synchronize content rendering with animation completion', () => {
      cy.get('.seriesHeader').first().click();
      
      // Content should not be immediately visible
      cy.get('.episodeCard').should('not.be.visible');
      
      // Wait for animation to complete
      cy.get('.seriesContent').should('have.css', 'height', 'auto');
      
      // Content should now be visible
      cy.get('.episodeCard').should('be.visible');
      cy.get('.episodeCard').should('have.length.greaterThan', 0);
    });

    it('should handle rapid expand/collapse without animation conflicts', () => {
      cy.get('.seriesHeader').first().as('seriesHeader');
      
      // Rapid clicks
      for (let i = 0; i < 5; i++) {
        cy.get('@seriesHeader').click();
        cy.wait(200);
        cy.get('@seriesHeader').click();
        cy.wait(200);
      }
      
      // Should stabilize without errors
      cy.get('.errorContainer').should('not.exist');
      cy.get('.seriesContent').should('be.visible');
    });
  });

  describe('Animation Performance Metrics', () => {
    it('should maintain 60fps during roller shutter animation', () => {
      // Enable performance monitoring
      cy.window().then((win) => {
        win.performance.mark('animation-start');
      });
      
      // Start animation
      cy.get('.seriesHeader').first().click();
      
      // Monitor frame rate during animation
      let frameCount = 0;
      let lastFrameTime = performance.now();
      
      const measureFrameRate = () => {
        const currentTime = performance.now();
        const deltaTime = currentTime - lastFrameTime;
        
        if (deltaTime < 16.67) { // ~60fps threshold
          frameCount++;
        }
        
        lastFrameTime = currentTime;
        
        if (frameCount < 120) { // Measure for 2 seconds
          requestAnimationFrame(measureFrameRate);
        }
      };
      
      cy.window().then((win) => {
        win.requestAnimationFrame(measureFrameRate);
      });
      
      // Wait for animation completion
      cy.wait(2000);
      
      // Verify high frame rate was maintained
      cy.window().then(() => {
        expect(frameCount).to.be.greaterThan(100); // At least 100 frames at 60fps
      });
    });

    it('should have smooth animation without jank', () => {
      cy.window().then((win) => {
        let frameDrops = 0;
        let lastTime = win.performance.now();
        
        const detectJank = () => {
          const currentTime = win.performance.now();
          const deltaTime = currentTime - lastTime;
          
          // Count frame drops (> 16.67ms for 60fps)
          if (deltaTime > 16.67) {
            frameDrops++;
          }
          
          lastTime = currentTime;
          
          if (frameDrops < 10) { // Monitor for 10 potential drops
            win.requestAnimationFrame(detectJank);
          }
        };
        
        win.requestAnimationFrame(detectJank);
      });
      
      // Trigger animation
      cy.get('.seriesHeader').first().click();
      
      // Wait for animation
      cy.wait(2000);
      
      // Verify minimal frame drops
      cy.window().then(() => {
        expect(frameDrops).to.be.lessThan(5); // Less than 5 frame drops
      });
    });
  });

  describe('Animation Timing Tests', () => {
    it('should complete roller shutter animation within 1.2 seconds', () => {
      cy.get('.seriesHeader').first().click();
      
      // Measure animation start
      const animationStart = performance.now();
      
      // Wait for animation indicators
      cy.get('.seriesContent')
        .should('have.css', 'height', 'auto')
        .then(() => {
          const animationEnd = performance.now();
          const duration = animationEnd - animationStart;
          
          // Verify timing
          expect(duration).to.be.greaterThan(1000); // At least 1 second
          expect(duration).to.be.lessThan(1500); // Maximum 1.5 seconds
        });
    });

    it('should stagger list item animations with correct delays', () => {
      cy.get('.seriesHeader').first().click();
      
      // Wait for content to appear
      cy.get('.episodeCard').should('be.visible');
      
      // Verify staggered animation timing
      cy.get('.episodeCard').each(($card, index) => {
        cy.wrap($card).should('have.css', 'animation-delay', `${index * 0.05}s`);
      });
    });
  });

  describe('Multiple Simultaneous Animations', () => {
    it('should handle multiple series expansions simultaneously', () => {
      // Expand multiple series
      cy.get('.seriesHeader').each(($header) => {
        cy.wrap($header).click();
      });
      
      // All should expand without conflicts
      cy.get('.seriesContent').should('have.length.greaterThan', 1);
      cy.get('.seriesContent').each(($content) => {
        cy.wrap($content).should('be.visible');
      });
      
      // No errors should occur
      cy.get('.errorContainer').should('not.exist');
    });

    it('should maintain performance with multiple animations', () => {
      let totalFrameDrops = 0;
      
      cy.window().then((win) => {
        let lastTime = win.performance.now();
        
        const monitorPerformance = () => {
          const currentTime = win.performance.now();
          const deltaTime = currentTime - lastTime;
          
          if (deltaTime > 33.33) { // More than 2 frames dropped
            totalFrameDrops++;
          }
          
          lastTime = currentTime;
          
          if (totalFrameDrops < 20) {
            win.requestAnimationFrame(monitorPerformance);
          }
        };
        
        win.requestAnimationFrame(monitorPerformance);
      });
      
      // Start multiple animations
      cy.get('.seriesHeader').each(($header) => {
        cy.wrap($header).click();
      });
      
      // Wait for animations
      cy.wait(3000);
      
      // Verify acceptable performance
      cy.window().then(() => {
        expect(totalFrameDrops).to.be.lessThan(10); // Less than 10 significant frame drops
      });
    });
  });

  describe('Animation State Management', () => {
    it('should properly manage animation completion callbacks', () => {
      cy.window().then((win) => {
        let animationCompleted = false;
        
        // Override animation completion handler
        cy.get('.seriesHeader').first().click().then(() => {
          // Set up completion detection
          cy.get('.seriesContent').should('have.css', 'height', 'auto').then(() => {
            animationCompleted = true;
          });
        });
        
        // Verify completion was triggered
        cy.wait(1500).then(() => {
          expect(animationCompleted).to.be.true;
        });
      });
    });

    it('should handle animation interruption gracefully', () => {
      cy.get('.seriesHeader').first().as('seriesHeader');
      
      // Start expansion
      cy.get('@seriesHeader').click();
      
      // Interrupt after 300ms
      cy.wait(300);
      cy.get('@seriesHeader').click(); // Collapse
      
      // Wait and expand again
      cy.wait(200);
      cy.get('@seriesHeader').click();
      
      // Should complete without errors
      cy.get('.seriesContent').should('be.visible');
      cy.get('.errorContainer').should('not.exist');
    });
  });

  describe('Cross-browser Animation Tests', () => {
    it('should work consistently across different browsers', () => {
      // Test in different viewport sizes (simulating different devices)
      [
        { width: 375, height: 667, name: 'mobile' },
        { width: 768, height: 1024, name: 'tablet' },
        { width: 1920, height: 1080, name: 'desktop' }
      ].forEach((viewport) => {
        cy.viewport(viewport.width, viewport.height);
        
        // Test animation
        cy.get('.seriesHeader').first().click();
        
        // Should work in all viewports
        cy.get('.seriesContent').should('be.visible');
        cy.get('.errorContainer').should('not.exist');
        
        // Reset
        cy.get('.seriesHeader').first().click();
        cy.wait(500);
      });
    });

    it('should handle reduced motion preferences', () => {
      // Simulate reduced motion preference
      cy.window().then((win) => {
        win.matchMedia = (query: string) => ({
          matches: query === '(prefers-reduced-motion: reduce)',
          media: query,
          onchange: null,
          addListener: () => {},
          removeListener: () => {},
          addEventListener: () => {},
          removeEventListener: () => {},
          dispatchEvent: () => false
        });
      });
      
      // Test animation with reduced motion
      cy.get('.seriesHeader').first().click();
      
      // Should still work but with reduced motion
      cy.get('.seriesContent').should('be.visible');
      cy.get('.errorContainer').should('not.exist');
    });
  });

  describe('Error Handling During Animation', () => {
    it('should handle animation errors gracefully', () => {
      // Simulate animation error by corrupting DOM
      cy.get('.seriesContent').then(($content) => {
        $content.css('transition', 'invalid-value');
      });
      
      // Try to animate
      cy.get('.seriesHeader').first().click();
      
      // Should not crash
      cy.get('.errorContainer').should('not.exist');
      cy.get('h1').should('be.visible');
    });

    it('should recover from animation failures', () => {
      // Cause animation failure
      cy.window().then((win) => {
        const originalAnimate = win.requestAnimationFrame;
        win.requestAnimationFrame = () => {
          throw new Error('Animation failed');
        };
        
        // Try animation
        cy.get('.seriesHeader').first().click();
        
        // Restore
        cy.wait(100).then(() => {
          win.requestAnimationFrame = originalAnimate;
        });
      });
      
      // Should recover
      cy.get('.errorContainer').should('not.exist');
      cy.reload(); // Reload to ensure clean state
      cy.get('[data-testid="media-content"]').should('be.visible');
    });
  });
});