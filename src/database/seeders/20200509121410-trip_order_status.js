export function up(queryInterface, Sequelize) {
  return queryInterface.bulkInsert(
    'trip_order_status',
    [
      {
        status: 'received',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: 'offered',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: 'accepted',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: 'pickup',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: 'resolved',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: 'failed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
  );
}
export function down(queryInterface, Sequelize) {
  return queryInterface.bulkDelete('trip_order_status', null, {});
}
