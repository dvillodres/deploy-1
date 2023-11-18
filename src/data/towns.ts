export const towns : Town[] = [
        {
            "name": "Alhaurín de la Torre",
            "slug": "alhaurin-de-la-torre",
            "description": "Ciudad con un entorno natural destacado y un castillo árabe.",
            "detailedDescription": "Alhaurín de la Torre destaca por su entorno natural destacado y su imponente castillo árabe. Es un lugar donde la historia se encuentra con la naturaleza.",
            "population": 42531
        },
        {
            "name": "Cártama",
            "slug": "cartama",
            "description": "Ciudad con un importante patrimonio arqueológico y arquitectónico.",
            "detailedDescription": "Cártama tiene un patrimonio arqueológico y arquitectónico significativo. Sus calles cuentan la historia de la región a lo largo de los siglos.",
            "population": 27712
        },
        {
            "name": "Alhaurín el Grande",
            "slug": "alhaurin-el-grande",
            "description": "Ciudad con una rica historia y tradición, rodeada de montañas.",
            "detailedDescription": "Alhaurín el Grande es una ciudad con una rica historia y tradición. Rodeada de montañas, ofrece una experiencia única que combina lo histórico con lo natural.",
            "population": 26436
        },
        {
            "name": "Coín",
            "slug": "coin",
            "description": "Pueblo con un centro histórico bien conservado y rodeado de paisajes naturales.",
            "detailedDescription": "Coín se destaca por su centro histórico bien conservado y está rodeado de impresionantes paisajes naturales. Es un lugar encantador para explorar.",
            "population": 24309
        },
        {
            "name": "Álora",
            "slug": "alora",
            "description": "Pueblo con un castillo árabe y vistas panorámicas al Valle del Guadalhorce.",
            "detailedDescription": "Álora es conocida por su impresionante castillo árabe que se alza sobre el pueblo. Desde sus murallas, se pueden disfrutar de vistas panorámicas del hermoso Valle del Guadalhorce.",
            "population": 13382
        },
        {
            "name": "Pizarra",
            "slug": "pizarra",
            "description": "Localidad con un entorno natural destacado y una estación de tren histórica.",
            "detailedDescription": "Pizarra, rodeada de paisajes naturales, destaca por su estación de tren histórica. Su entorno natural ofrece oportunidades para actividades al aire libre.",
            "population": 9661
        },
        {
            "name": "Almogía",
            "slug": "almogia",
            "description": "Pueblo en la Sierra de las Nieves con una rica tradición agrícola y cultural.",
            "detailedDescription": "Almogía, ubicada en la Sierra de las Nieves, se enorgullece de su rica tradición agrícola y cultural. Sus paisajes montañosos añaden un toque especial a su encanto.",
            "population": 3885
        },
        {
            "name": "Valle de Abdalajís",
            "slug": "valle-de-abdalajis",
            "description": "Valle pintoresco con una población tranquila y paisajes impresionantes.",
            "detailedDescription": "Valle de Abdalajís, con su población tranquila y paisajes impresionantes, es un lugar pintoresco que ofrece un escape sereno.",
            "population": 2473
        }
    ]

;

export interface Town {
    name: string;
    slug: string;
    description: string;
    detailedDescription: string;
    population: number;
}

