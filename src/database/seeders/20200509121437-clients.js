export function up(queryInterface, Sequelize) {
  return queryInterface.bulkInsert(
    'clients',
    [
      {
        email: 'tkinnach0@foxnews.com',
        first_name: 'Tabbitha',
        last_name: 'Kinnach',
        phone_no: '895-871-0591',
        adress: '01 Prairieview Terrace',
        points: 75,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'ewickersham1@myspace.com',
        first_name: 'Evangelia',
        last_name: 'Wickersham',
        phone_no: '431-725-8260',
        adress: '0 Hagan Terrace',
        points: 68,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'ddudenie2@wunderground.com',
        first_name: 'Dionne',
        last_name: 'Dudenie',
        phone_no: '983-762-9576',
        adress: '90 Eagle Crest Plaza',
        points: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'jkimmince3@alibaba.com',
        first_name: 'Justinn',
        last_name: 'Kimmince',
        phone_no: '616-644-9334',
        adress: '36 Independence Place',
        points: 82,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'akordas4@psu.edu',
        first_name: 'Adara',
        last_name: 'Kordas',
        phone_no: '669-644-5220',
        adress: '6 Gateway Road',
        points: 27,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'rhawick5@meetup.com',
        first_name: 'Rubie',
        last_name: 'Hawick',
        phone_no: '444-839-4596',
        adress: '34 Forster Hill',
        points: 94,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'tlayman6@amazon.co.jp',
        first_name: 'Timmy',
        last_name: 'Layman',
        phone_no: '191-661-8178',
        adress: '83 Mifflin Lane',
        points: 36,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'cbleacher7@answers.com',
        first_name: 'Cindy',
        last_name: 'Bleacher',
        phone_no: '177-869-6844',
        adress: '0 Forest Way',
        points: 41,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'lbingell8@forbes.com',
        first_name: 'Liv',
        last_name: 'Bingell',
        phone_no: '603-550-1687',
        adress: '8 Jenna Plaza',
        points: 43,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'pdraco9@facebook.com',
        first_name: 'Phillida',
        last_name: 'Draco',
        phone_no: '929-940-5596',
        adress: '810 Walton Park',
        points: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
  );
}
export function down(queryInterface, Sequelize) {
  return queryInterface.bulkDelete('clients', null, {});
}
