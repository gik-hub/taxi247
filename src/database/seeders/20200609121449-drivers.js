export function up(queryInterface, Sequelize) {
  return queryInterface.bulkInsert(
    'drivers',
    [
      // Outside Kigali
      {
        email: 'egalvan0@dropbox.com',
        first_name: 'Ertha',
        last_name: 'Galvan',
        driving_licence: 'CHE-025',
        expiry_date: '2020-04-17',
        taxis_id: null,
        current_location: Sequelize.fn('ST_GeomFromText', 'POINT(2.31 29.52)'),
        availability_status_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'aebanks1@nature.com',
        first_name: 'Anett',
        last_name: 'Ebanks',
        driving_licence: 'WON-748',
        expiry_date: '2020-04-08',
        taxis_id: 9,
        current_location: Sequelize.fn('ST_GeomFromText', 'POINT(2.29 28.54)'),
        availability_status_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'pkennady2@sbwire.com',
        first_name: 'Perrine',
        last_name: 'Kennady',
        driving_licence: 'GNS-871',
        expiry_date: '2020-05-02',
        taxis_id: 8,
        current_location: Sequelize.fn('ST_GeomFromText', 'POINT(1.41 29.15)'),
        availability_status_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'ddunnet3@sphinn.com',
        first_name: 'Darleen',
        last_name: 'Dunnet',
        driving_licence: 'QMS-566',
        expiry_date: '2020-04-13',
        taxis_id: 7,
        current_location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(1.4998 29.6350)'
        ),
        availability_status_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Within Kigali
      {
        email: 'famys4@scientificamerican.com',
        first_name: 'Fania',
        last_name: 'Amys',
        driving_licence: 'VOT-489',
        expiry_date: '2020-04-08',
        taxis_id: 6,
        current_location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(1.9053 30.0810)'
        ),
        availability_status_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'dtippetts5@pagesperso-orange.fr',
        first_name: 'Dredi',
        last_name: 'Tippetts',
        driving_licence: 'KYY-175',
        expiry_date: '2020-04-04',
        taxis_id: 5,
        current_location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(1.9912 30.0463)'
        ),
        availability_status_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'ekem6@time.com',
        first_name: 'Edeline',
        last_name: 'Kem',
        driving_licence: 'IHM-827',
        expiry_date: '2020-05-06',
        taxis_id: 3,
        current_location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(2.0086 30.1358)'
        ),
        availability_status_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'fmathieson7@wired.com',
        first_name: 'Ferdinanda',
        last_name: 'Mathieson',
        driving_licence: 'PFC-899',
        expiry_date: '2020-04-14',
        taxis_id: 1,
        current_location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(1.9998 30.1474)'
        ),
        availability_status_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'tpound8@pcworld.com',
        first_name: 'Tory',
        last_name: 'Pound',
        driving_licence: 'ARS-615',
        expiry_date: '2020-04-08',
        taxis_id: 4,
        current_location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(1.9515 30.1098)'
        ),
        availability_status_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'vbrunnen9@about.com',
        first_name: 'Valencia',
        last_name: 'Brunnen',
        driving_licence: 'TKB-897',
        expiry_date: '2020-04-19',
        taxis_id: 2,
        current_location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(1.9114 30.0954)'
        ),
        availability_status_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
  );
}
export function down(queryInterface, Sequelize) {
  return queryInterface.bulkDelete('drivers', null, {});
}
