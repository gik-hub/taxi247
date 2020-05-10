export function up(queryInterface, Sequelize) {
  return queryInterface.bulkInsert(
    'availability_status',
    [
      {
        status: 'free',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: 'busy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: 'offduty',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
  );
}
export function down(queryInterface, Sequelize) {
  return queryInterface.bulkDelete('availability_status', null, {});
}
