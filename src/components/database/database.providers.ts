import { DataSource } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'mongodb',
                host: 'localhost',
                port: 27012,
                database: 'test',
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ],
            });

            return dataSource.initialize();
        },
    },
];