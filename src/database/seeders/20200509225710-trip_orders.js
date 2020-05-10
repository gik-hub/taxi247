export function up(queryInterface, Sequelize) {
  return queryInterface.bulkInsert(
    'trip_orders',
    [
      {
        clients_id: 2,
        pickup_point: Sequelize.fn('ST_GeomFromText', 'POINT(2.0086 30.1358)'),
        destination_point: Sequelize.fn('ST_GeomFromText', 'POINT(1.4998 29.6350)'),
        tentative_price: 69773.04,
        trip_order_status_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        clients_id: 2,
        pickup_point: Sequelize.fn('ST_GeomFromText', 'POINT(2.0086 30.1358)'),
        destination_point: Sequelize.fn('ST_GeomFromText', 'POINT(1.4998 29.6350)'),
        tentative_price: 89479.11,
        trip_order_status_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        clients_id: 5,
        pickup_point: Sequelize.fn('ST_GeomFromText', 'POINT(2.0086 30.1358)'),
        destination_point: Sequelize.fn('ST_GeomFromText', 'POINT(1.4998 29.6350)'),
        tentative_price: 52721.64,
        trip_order_status_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        clients_id: 5,
        pickup_point: Sequelize.fn('ST_GeomFromText', 'POINT(1.9393 30.0810)'),
        destination_point: Sequelize.fn('ST_GeomFromText', 'POINT(1.4998 29.6350)'),
        tentative_price: 15972.33,
        trip_order_status_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        clients_id: 1,
        pickup_point: Sequelize.fn('ST_GeomFromText', 'POINT(2.0086 30.1358)'),
        destination_point: Sequelize.fn('ST_GeomFromText', 'POINT(1.9998 30.1474)'),
        tentative_price: 32323.79,
        trip_order_status_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        clients_id: 9,
        pickup_point: Sequelize.fn('ST_GeomFromText', 'POINT(1.9998 30.1474)'),
        destination_point: Sequelize.fn('ST_GeomFromText', 'POINT(1.4998 29.6350)'),
        tentative_price: 43939.84,
        trip_order_status_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        clients_id: 7,
        pickup_point: Sequelize.fn('ST_GeomFromText', 'POINT(1.9998 30.1474)'),
        destination_point: Sequelize.fn('ST_GeomFromText', 'POINT(1.9912 30.0463)'),
        tentative_price: 71208.68,
        trip_order_status_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        clients_id: 4,
        pickup_point: Sequelize.fn('ST_GeomFromText', 'POINT(1.9912 30.0463)'),
        destination_point: Sequelize.fn('ST_GeomFromText', 'POINT(1.4998 29.6350)'),
        tentative_price: 62775.75,
        trip_order_status_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        clients_id: 4,
        pickup_point: Sequelize.fn('ST_GeomFromText', 'POINT(1.9515 30.1098)'),
        destination_point: Sequelize.fn('ST_GeomFromText', 'POINT(1.4998 29.6350)'),
        tentative_price: 49813.64,
        trip_order_status_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        clients_id: 3,
        pickup_point: Sequelize.fn('ST_GeomFromText', 'POINT(1.9298 30.2397)'),
        destination_point: Sequelize.fn('ST_GeomFromText', 'POINT(1.4998 29.6350)'),
        tentative_price: 34486.61,
        trip_order_status_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        clients_id: 7,
        pickup_point: Sequelize.fn('ST_GeomFromText', 'POINT(1.9393 30.0810)'),
        destination_point: Sequelize.fn('ST_GeomFromText', 'POINT(1.9298 30.2397)'),
        tentative_price: 55219.66,
        trip_order_status_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        clients_id: 2,
        pickup_point: Sequelize.fn('ST_GeomFromText', 'POINT(2.0086 30.1358)'),
        destination_point: Sequelize.fn('ST_GeomFromText', 'POINT(1.4998 29.6350)'),
        tentative_price: 25654.97,
        trip_order_status_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        clients_id: 5,
        pickup_point: Sequelize.fn('ST_GeomFromText', 'POINT(1.9998 30.1474)'),
        destination_point: Sequelize.fn('ST_GeomFromText', 'POINT(1.4998 29.6350)'),
        tentative_price: 65094.5,
        trip_order_status_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        clients_id: 2,
        pickup_point: Sequelize.fn('ST_GeomFromText', 'POINT(1.9114 30.0954)'),
        destination_point: Sequelize.fn('ST_GeomFromText', 'POINT(1.9912 30.0463)'),
        tentative_price: 22566.15,
        trip_order_status_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        clients_id: 9,
        pickup_point: Sequelize.fn('ST_GeomFromText', 'POINT(1.9515 30.1098)'),
        destination_point: Sequelize.fn('ST_GeomFromText', 'POINT(1.9114 30.0954)'),
        tentative_price: 56249.78,
        trip_order_status_id: 2,
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
