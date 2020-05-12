export function up(queryInterface, Sequelize) {
  return queryInterface.bulkInsert(
    'drivers',
    [
      // Within Kigali
      {
        email: 'egalvan0@dropbox.com',
        first_name: 'Ertha',
        last_name: 'Galvan',
        driving_licence: 'CHE-025',
        expiry_date: '2020-04-17',
        taxi_reg_no: 'RAE---Z',
        current_location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(30.0810 1.9393)'
        ),
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
        taxi_reg_no: 'RAE---Z',
        current_location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(30.1098 1.9515)'
        ),
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
        taxi_reg_no: 'RAE---Z',
        current_location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(30.0463 1.9912)'
        ),
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
        taxi_reg_no: 'RAE---Z',
        current_location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(30.0975393 1.9320231)'
        ),
        availability_status_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'famys4@scientificamerican.com',
        first_name: 'Fania',
        last_name: 'Amys',
        driving_licence: 'VOT-489',
        expiry_date: '2020-04-08',
        taxi_reg_no: 'RAE---Z',
        current_location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(30.1474 1.9998)'
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
        taxi_reg_no: 'RAE---Z',
        current_location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(30.1301 1.9362)'
        ),
        availability_status_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // off kigali
      {
        email: 'ekem6@time.com',
        first_name: 'Edeline',
        last_name: 'Kem',
        driving_licence: 'IHM-827',
        expiry_date: '2020-05-06',
        taxi_reg_no: 'RAE---Z',
        current_location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(29.2617 1.6959)'
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
        taxi_reg_no: 'RAE---Z',
        current_location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(29.7394 2.5967)'
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
        taxi_reg_no: 'RAE---Z',
        current_location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(30.0189 1.4356)'
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
        taxi_reg_no: 'RAE---Z',
        current_location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(30.5174 1.9463)'
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
