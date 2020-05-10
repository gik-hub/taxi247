export function up(queryInterface, Sequelize) {
  return queryInterface.bulkInsert(
    'taxis',
    [
      {
        licence_plate: 'ZIJ778R',
        model_description: 'Trooper',
        active: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        licence_plate: 'XMM609B',
        model_description: 'Savana 1500',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        licence_plate: 'PFR407X',
        model_description: 'Compass',
        active: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        licence_plate: 'PGT874T',
        model_description: 'Protege',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        licence_plate: 'DER625U',
        model_description: 'G-Series 2500',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        licence_plate: 'WJO586X',
        model_description: 'Suburban 1500',
        active: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        licence_plate: 'IOQ030N',
        model_description: 'GX',
        active: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        licence_plate: 'QWP778T',
        model_description: 'XK Series',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        licence_plate: 'ZSI240K',
        model_description: 'Continental GT',
        active: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        licence_plate: 'LTZ106F',
        model_description: 'Electra',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
  );
}
export function down(queryInterface, Sequelize) {
  return queryInterface.bulkDelete('taxis', null, {});
}
