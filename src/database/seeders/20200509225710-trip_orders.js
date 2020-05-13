export function up(queryInterface, Sequelize) {
  return queryInterface.bulkInsert(
    'trip_orders',
    [
      {
        riders_id: 1,
        pickup_point: Sequelize.fn('ST_GeomFromText', 'POINT(30.1098 1.9515)'),
        pickup_point_name: 'Remera',
        destination_point: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(30.0810 1.9393)'
        ),
        destination_point_name: 'Kacyru',
        tentative_price: 69773.04,
        trip_order_status_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        riders_id: 6,
        pickup_point: Sequelize.fn('ST_GeomFromText', 'POINT(30.0810 1.9393)'),
        pickup_point_name: 'Kacyiru',
        destination_point: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(30.1474 1.9998)'
        ),
        destination_point_name: 'Kanombe',
        tentative_price: 52721.64,
        trip_order_status_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        riders_id: 5,
        pickup_point: Sequelize.fn('ST_GeomFromText', 'POINT(30.0463 1.9912)'),
        pickup_point_name: 'Nyamirambo',
        destination_point: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(30.1301 1.9362)'
        ),
        destination_point_name: 'Kimironko',
        tentative_price: 15972.33,
        trip_order_status_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        riders_id: 8,
        pickup_point: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(30.0975393 1.9320231)'
        ),
        pickup_point_name: 'Nyarutarama',
        destination_point: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(30.2397 1.9298)'
        ),
        destination_point_name: 'Rusororo',
        tentative_price: 32323.79,
        trip_order_status_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        riders_id: 9,
        pickup_point: Sequelize.fn('ST_GeomFromText', 'POINT(30.2397 1.9298)'),
        pickup_point_name: 'Rusororo',
        destination_point: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(30.0810 1.9393)'
        ),
        destination_point_name: 'Kacyru',
        tentative_price: 43939.84,
        trip_order_status_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        riders_id: 7,
        pickup_point: Sequelize.fn('ST_GeomFromText', 'POINT(30.1301 1.9362)'),
        pickup_point_name: 'Point A',
        destination_point: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(30.0463 1.9912)'
        ),
        destination_point_name: 'Point B',
        tentative_price: 71208.68,
        trip_order_status_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        riders_id: 2,
        pickup_point: Sequelize.fn('ST_GeomFromText', 'POINT(30.1358 2.0086)'),
        pickup_point_name: 'Another place',
        destination_point: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(29.6350 1.4998)'
        ),
        destination_point_name: 'Point b',
        tentative_price: 62775.75,
        trip_order_status_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        riders_id: 4,
        pickup_point: Sequelize.fn('ST_GeomFromText', 'POINT(30.2397 1.9298)'),
        pickup_point_name: 'Other place',
        destination_point: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(30.0954 1.9114)'
        ),
        destination_point_name: '',
        tentative_price: 49813.64,
        trip_order_status_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        riders_id: 1,
        pickup_point: Sequelize.fn('ST_GeomFromText', 'POINT(30.2397 1.9298)'),
        pickup_point_name: 'Rusororo',
        destination_point: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(1.9362 30.1301)'
        ),
        destination_point_name: 'Kimironko',
        tentative_price: 34486.61,
        trip_order_status_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
  );
}
export function down(queryInterface, Sequelize) {
  return queryInterface.bulkDelete('trip_orders', null, {});
}
