import {ApplicationType} from '../type/ApplicationType.ts';

export const applicationOne: ApplicationType = {
    id: 1,
    dodid: '1386584431',
    branch: 'POAS',
    firstName: 'Jaime',
    lastName: 'Rodriguez',
    rank: 'SSG',
    mos: '37F'
}

export const applicationTwo: ApplicationType = {
    id: 2,
    dodid: '1484283319',
    branch: 'SFAS',
    firstName: 'Gunner',
    lastName: 'Rodriguez',
    rank: 'PFC',
    mos: '11B'
}

export const applicationList: ApplicationType[] = [
    applicationOne,
    applicationTwo
]

export const branches = ['SFAS', 'POAS', 'CAAS']

export const ranks = ['PVT', 'PFC', 'SPC', 'CPL', 'SGT', 'SSG']
