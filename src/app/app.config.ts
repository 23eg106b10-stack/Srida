// SRIDA Frontend Application Configuration
// This demonstrates the basic setup for connecting to the SRIDA backend API

export const SRIDA_CONFIG = {
  name: 'SRIDA Frontend',
  version: '1.0.0',
  api: {
    baseUrl: 'https://team-project-25x2.onrender.com',
    endpoints: {
      auth: {
        register: '/auth/register',
        login: '/auth/login',
        me: '/auth/me',
        updateProfile: '/auth/update-profile'
      },
      services: {
        list: '/services',
        create: '/services',
        getById: '/services/:id',
        update: '/services/:id',
        delete: '/services/:id',
        getNearby: '/services/nearby'
      },
      bookings: {
        buyer: '/bookings/buyer',
        seller: '/bookings/seller',
        create: '/bookings',
        updateStatus: '/bookings/:id/status',
        cancel: '/bookings/:id/cancel'
      },
      messages: {
        send: '/messages',
        inbox: '/messages/inbox',
        sent: '/messages/sent',
        conversation: '/messages/conversation/:userId'
      },
      wishlist: {
        get: '/wishlist',
        add: '/wishlist/:serviceId',
        remove: '/wishlist/:serviceId',
        clear: '/wishlist'
      }
    }
  },
  features: {
    locationBasedSearch: true,
    realTimeMessaging: false, // Future enhancement
    paymentIntegration: false, // Future enhancement
    aiRecommendations: false // Future enhancement
  },
  ui: {
    defaultTheme: 'modern',
    animations: {
      enabled: true,
      library: 'GSAP' // Planned for Angular implementation
    },
    responsive: {
      breakpoints: {
        mobile: 768,
        tablet: 1024,
        desktop: 1920
      }
    }
  }
};

