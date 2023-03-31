const orderHistory = [
  {
    OrderNumber: '114-3941689-8772232',
    OrderedDate: '2020-08-04',
    TotalAmount: 34.00,
    ShipTo: 'JS Masher',
    DeliveredDate: '2020-08-08',
    DeliveredMessage: null,
    OrderItem: [
      {
        BaseAmount: 31.55,
        Title: 'JavaScript for impatient programmers',
        Creator: 'Dr. Axel Rauschmayer',
        ReturnWindowClosedDate: '2020-09-07'
      }
    ]
  },
  {
    OrderNumber: '113-9984268-1280257',
    OrderedDate: '2020-07-19',
    TotalAmount: 44.53,
    ShipTo: 'JS Masher',
    DeliveredDate: '2020-07-20',
    DeliveredMessage: 'Your package was delivered. It was handled directly to a resident.',
    OrderItem: [
      {
        BaseAmount: 41.33,
        Title: 'The Timeless Way of Building',
        Creator: 'Christopher Alexander',
        ReturnWindowClosedDate: '2020-08-19'
      }
    ]
  },
  {
    OrderNumber: '114-2875557-9059409',
    OrderedDate: '2020-07-04',
    TotalAmount: 17.22,
    ShipTo: 'JS Masher',
    DeliveredDate: '2020-07-07',
    DeliveredMessage: 'Your package was delivered. It was handled directly to a resident.',
    OrderItem: [
      {
        BaseAmount: 15.98,
        Title: 'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adpater for WII U, PC. Support Turbo and Vibration Features. no Driver and No Lag-Gamecube Adapter',
        Creator: '',
        ReturnWindowClosedDate: '2020-08-05'
      }
    ]
  },
  {
    OrderNumber: '113-2883177-2648248',
    OrderedDate: '2020-07-03',
    TotalAmount: 138.93,
    ShipTo: 'JS Masher',
    DeliveredDate: '2020-07-05',
    DeliveredMessage: null,
    OrderItem: [
      {
        BaseAmount: 94.95,
        Title: 'Gamecube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        Creator: '',
        ReturnWindowClosedDate: '2020-08-04'
      },
      {
        BaseAmount: 33.99,
        Title: 'The Art of Sql',
        Creator: 'Stephane Faroult',
        ReturnWindowClosedDate: '2020-08-04'
      }
    ]
  }
];

console.log('Value of order history', orderHistory);
