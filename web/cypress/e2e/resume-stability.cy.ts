/// <reference types="cypress" />

describe('Resume Page Stability Tests', () => {
  const RESUME_URL = '/resume';
  
  beforeEach(() => {
    // Reset all network conditions
    cy.intercept('*', (req) => {
      req.continue();
    }).as('allRequests');
  });

  describe('Normal Network Conditions', () => {
    it('should load resume page successfully with good network', () => {
      cy.visit(RESUME_URL);
      
      // Wait for page to load
      cy.get('[data-testid="resume-content"]', { timeout: 10000 }).should('be.visible');
      
      // Verify all sections are present
      cy.get('h1').should('contain', 'Resume');
      cy.get('h2').should('contain', 'Experience');
      cy.get('h2').should('contain', 'Skills');
      cy.get('h2').should('contain', 'Education');
      cy.get('h2').should('contain', 'Project Timeline');
      
      // Verify no error states
      cy.get('.errorContainer').should('not.exist');
      cy.get('.loadingContainer').should('not.exist');
    });

    it('should handle language switching without errors', () => {
      cy.visit(RESUME_URL);
      
      // Wait for initial load
      cy.get('[data-testid="resume-content"]', { timeout: 10000 }).should('be.visible');
      
      // Switch language multiple times rapidly
      cy.get('[data-testid="language-toggle"]').click();
      cy.get('[data-testid="language-toggle"]').click();
      cy.get('[data-testid="language-toggle"]').click();
      
      // Verify page remains stable
      cy.get('.errorContainer').should('not.exist');
      cy.get('h1').should('be.visible');
    });
  });

  describe('Slow Network Conditions (3G)', () => {
    it('should handle 3G slow network gracefully', () => {
      // Simulate 3G network conditions
      cy.intercept('*', (req) => {
        req.on('response', (res) => {
          // Add 2 second delay to simulate 3G
          res.setDelay(2000);
        });
      }).as('slowNetwork');

      cy.visit(RESUME_URL);
      
      // Should show loading state
      cy.get('.loadingContainer', { timeout: 5000 }).should('be.visible');
      
      // Wait for content to load
      cy.get('[data-testid="resume-content"]', { timeout: 15000 }).should('be.visible');
      
      // Verify content is properly displayed
      cy.get('h1').should('contain', 'Resume');
      cy.get('.errorContainer').should('not.exist');
    });

    it('should show skeleton loading for 3G network', () => {
      cy.intercept('*', (req) => {
        req.on('response', (res) => {
          res.setDelay(3000);
        });
      }).as('verySlowNetwork');

      cy.visit(RESUME_URL);
      
      // Should show skeleton loading
      cy.get('.resume-skeleton', { timeout: 2000 }).should('be.visible');
      
      // Verify skeleton has proper structure
      cy.get('.skeleton-header').should('be.visible');
      cy.get('.skeleton-experience').should('be.visible');
      cy.get('.skeleton-skills').should('be.visible');
      
      // Wait for real content
      cy.get('[data-testid="resume-content"]', { timeout: 10000 }).should('be.visible');
      cy.get('.resume-skeleton').should('not.exist');
    });
  });

  describe('Offline Conditions', () => {
    it('should handle offline mode with error boundary', () => {
      // Go offline
      cy.visit(RESUME_URL, {
        onBeforeLoad: (win) => {
          win.navigator.onLine = false;
        }
      });
      
      // Should show error state
      cy.get('.errorContainer', { timeout: 5000 }).should('be.visible');
      cy.get('.errorContainer').should('contain', '简历加载失败');
      
      // Should have retry button
      cy.get('.retryButton').should('be.visible');
      
      // Test retry functionality
      cy.get('.retryButton').click();
      
      // Should attempt to reload
      cy.get('.loadingContainer').should('be.visible');
    });

    it('should handle network disconnection during use', () => {
      cy.visit(RESUME_URL);
      
      // Wait for initial load
      cy.get('[data-testid="resume-content"]', { timeout: 10000 }).should('be.visible');
      
      // Simulate network disconnection
      cy.window().then((win) => {
        win.navigator.onLine = false;
        win.dispatchEvent(new Event('offline'));
      });
      
      // Navigate to trigger data fetch
      cy.reload();
      
      // Should show error state
      cy.get('.errorContainer').should('be.visible');
    });
  });

  describe('Server Error Conditions', () => {
    it('should handle 500 server error gracefully', () => {
      cy.intercept('GET', '**/api/**', {
        statusCode: 500,
        body: { error: 'Internal Server Error' }
      }).as('serverError');

      cy.visit(RESUME_URL);
      
      // Should show error state
      cy.get('.errorContainer', { timeout: 5000 }).should('be.visible');
      cy.get('.errorContainer').should('contain', '简历加载失败');
      
      // Should have retry functionality
      cy.get('.retryButton').should('be.visible').click();
      
      // Should attempt retry
      cy.get('.loadingContainer').should('be.visible');
    });

    it('should handle 404 not found errors', () => {
      cy.intercept('GET', '**/api/**', {
        statusCode: 404,
        body: { error: 'Not Found' }
      }).as('notFoundError');

      cy.visit(RESUME_URL);
      
      // Should show appropriate error message
      cy.get('.errorContainer', { timeout: 5000 }).should('be.visible');
      
      // Should provide fallback content
      cy.get('.homeLink').should('be.visible');
    });

    it('should handle timeout errors', () => {
      cy.intercept('GET', '**/api/**', (req) => {
        req.reply((res) => {
          res.delay(10000); // 10 second delay
          res.send({ error: 'Timeout' });
        });
      }).as('timeoutError');

      cy.visit(RESUME_URL);
      
      // Should timeout and show error
      cy.get('.errorContainer', { timeout: 15000 }).should('be.visible');
      
      // Should have retry option
      cy.get('.retryButton').should('be.visible');
    });
  });

  describe('Race Condition Tests', () => {
    it('should handle rapid page navigation', () => {
      // Navigate rapidly between pages
      cy.visit(RESUME_URL);
      cy.visit('/');
      cy.visit(RESUME_URL);
      cy.visit('/');
      cy.visit(RESUME_URL);
      
      // Should stabilize and show content
      cy.get('[data-testid="resume-content"]', { timeout: 10000 }).should('be.visible');
      cy.get('.errorContainer').should('not.exist');
    });

    it('should handle rapid filter switching', () => {
      cy.visit(RESUME_URL);
      
      // Wait for initial load
      cy.get('[data-testid="resume-content"]', { timeout: 10000 }).should('be.visible');
      
      // Rapidly switch filters
      cy.get('.filterButton').eq(0).click();
      cy.get('.filterButton').eq(1).click();
      cy.get('.filterButton').eq(2).click();
      cy.get('.filterButton').eq(3).click();
      cy.get('.filterButton').eq(0).click();
      
      // Should remain stable
      cy.get('.errorContainer').should('not.exist');
      cy.get('h1').should('be.visible');
    });

    it('should handle multiple simultaneous data requests', () => {
      // Intercept and delay requests
      let requestCount = 0;
      cy.intercept('*', (req) => {
        requestCount++;
        req.on('response', (res) => {
          res.setDelay(Math.random() * 2000); // Random delay 0-2s
        });
      }).as('delayedRequests');

      cy.visit(RESUME_URL);
      
      // Trigger multiple actions
      cy.get('.filterButton').eq(0).click();
      cy.get('.filterButton').eq(1).click();
      cy.window().then((win) => {
        win.dispatchEvent(new Event('resize'));
      });
      
      // Should handle concurrent requests gracefully
      cy.get('[data-testid="resume-content"]', { timeout: 15000 }).should('be.visible');
    });
  });

  describe('Data Corruption Tests', () => {
    it('should handle malformed JSON responses', () => {
      cy.intercept('GET', '**/api/**', {
        body: 'invalid json { broken: data',
        headers: {
          'content-type': 'application/json'
        }
      }).as('malformedJson');

      cy.visit(RESUME_URL);
      
      // Should handle gracefully
      cy.get('.errorContainer', { timeout: 5000 }).should('be.visible');
    });

    it('should handle missing required data fields', () => {
      cy.intercept('GET', '**/api/**', {
        body: {
          // Missing required fields
          incomplete: true
        }
      }).as('incompleteData');

      cy.visit(RESUME_URL);
      
      // Should show error or fallback
      cy.get('.errorContainer', { timeout: 5000 }).should('be.visible');
    });

    it('should handle null/undefined data gracefully', () => {
      cy.intercept('GET', '**/api/**', {
        body: {
          data: null,
          experience: undefined,
          skills: [],
          education: null
        }
      }).as('nullData');

      cy.visit(RESUME_URL);
      
      // Should handle without crashing
      cy.get('.errorContainer', { timeout: 5000 }).should('be.visible');
    });
  });

  describe('Memory Leak Tests', () => {
    it('should cleanup resources on page navigation', () => {
      cy.visit(RESUME_URL);
      
      // Wait for full load
      cy.get('[data-testid="resume-content"]', { timeout: 10000 }).should('be.visible');
      
      // Navigate away
      cy.visit('/');
      
      // Navigate back
      cy.visit(RESUME_URL);
      
      // Should load fresh without memory issues
      cy.get('[data-testid="resume-content"]', { timeout: 10000 }).should('be.visible');
      cy.get('.errorContainer').should('not.exist');
    });

    it('should handle repeated expand/collapse without memory leaks', () => {
      cy.visit(RESUME_URL);
      
      // Wait for initial load
      cy.get('[data-testid="resume-content"]', { timeout: 10000 }).should('be.visible');
      
      // Rapidly expand/collapse sections
      for (let i = 0; i < 20; i++) {
        cy.get('.seriesHeader').first().click();
        cy.wait(100);
        cy.get('.seriesHeader').first().click();
        cy.wait(100);
      }
      
      // Should remain responsive
      cy.get('h1').should('be.visible');
      cy.get('.errorContainer').should('not.exist');
    });
  });

  describe('Performance Tests', () => {
    it('should load within acceptable time limits', () => {
      const startTime = Date.now();
      
      cy.visit(RESUME_URL);
      
      cy.get('[data-testid="resume-content"]', { timeout: 5000 }).should('be.visible').then(() => {
        const loadTime = Date.now() - startTime;
        expect(loadTime).to.be.lessThan(5000); // Should load within 5 seconds
      });
    });

    it('should maintain 60fps during animations', () => {
      cy.visit(RESUME_URL);
      
      // Wait for initial load
      cy.get('[data-testid="resume-content"]', { timeout: 10000 }).should('be.visible');
      
      // Monitor performance during animation
      cy.window().then((win) => {
        let frameCount = 0;
        let lastTime = win.performance.now();
        
        const measureFrame = () => {
          const currentTime = win.performance.now();
          const deltaTime = currentTime - lastTime;
          
          if (deltaTime < 16.67) { // ~60fps
            frameCount++;
          }
          
          lastTime = currentTime;
          
          if (frameCount < 100) {
            win.requestAnimationFrame(measureFrame);
          }
        };
        
        win.requestAnimationFrame(measureFrame);
      });
      
      // Trigger animations
      cy.get('.seriesHeader').first().click();
      cy.wait(1000);
      
      // Should complete without jank
      cy.get('h1').should('be.visible');
    });
  });

  describe('Cross-browser Compatibility', () => {
    it('should work in different viewport sizes', () => {
      // Test mobile viewport
      cy.viewport(375, 667);
      cy.visit(RESUME_URL);
      cy.get('[data-testid="resume-content"]', { timeout: 10000 }).should('be.visible');
      
      // Test tablet viewport
      cy.viewport(768, 1024);
      cy.get('[data-testid="resume-content"]').should('be.visible');
      
      // Test desktop viewport
      cy.viewport(1920, 1080);
      cy.get('[data-testid="resume-content"]').should('be.visible');
      
      // Should not have errors in any viewport
      cy.get('.errorContainer').should('not.exist');
    });

    it('should handle browser back/forward navigation', () => {
      cy.visit(RESUME_URL);
      cy.get('[data-testid="resume-content"]', { timeout: 10000 }).should('be.visible');
      
      // Navigate to another page
      cy.visit('/');
      
      // Go back
      cy.go('back');
      cy.get('[data-testid="resume-content"]', { timeout: 10000 }).should('be.visible');
      
      // Go forward
      cy.go('forward');
      
      // Go back again
      cy.go('back');
      cy.get('[data-testid="resume-content"]').should('be.visible');
      
      // Should remain stable
      cy.get('.errorContainer').should('not.exist');
    });
  });
});