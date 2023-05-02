import React, { useState } from 'react'
import Element from './Element';
import ElementModal from './ElementModal';
import CategorySelection from './CategorySelection';

export default function PeriodicTable() {
    // Periodic elements with their number, name, symbol, weight, category, melting point and boiling point
    const elements = [
    {
        number: 1,
        symbol: "H",
        name: "Hydrogen",
        weight: 1.008,
        category: "Nonmetal",
        meltingPoint: -259.14,
        boilingPoint: -252.87
    },
    {
        number: 2,
        symbol: "He",
        name: "Helium",
        weight: 4.003,
        category: "Noble gas",
        meltingPoint: -272.2,
        boilingPoint: -268.9
    },
    {
        number: 3,
        symbol: "Li",
        name: "Lithium",
        weight: 6.941,
        category: "Alkali metal",
        meltingPoint: 180.54,
        boilingPoint: 1342
    },
    {
        number: 4,
        symbol: "Be",
        name: "Beryllium",
        weight: 9.012,
        category: "Alkaline earth metal",
        meltingPoint: 1287,
        boilingPoint: 2469
    },
    {
        number: 5,
        symbol: "B",
        name: "Boron",
        weight: 10.81,
        category: "Metalloid",
        meltingPoint: 2076,
        boilingPoint: 3927
    },
    {
        number: 6,
        symbol: "C",
        name: "Carbon",
        weight: 12.011,
        category: "Nonmetal",
        meltingPoint: 3500,
        boilingPoint: 4827
    },
    {
        number: 7,
        symbol: "N",
        name: "Nitrogen",
        weight: 14.007,
        category: "Nonmetal",
        meltingPoint: -210,
        boilingPoint: -196
    },
    {
        number: 8,
        symbol: "O",
        name: "Oxygen",
        weight: 15.999,
        category: "Nonmetal",
        meltingPoint: -218.4,
        boilingPoint: -183
    },
    {
        number: 9,
        symbol: "F",
        name: "Fluorine",
        weight: 18.998,
        category: "Nonmetal",
        meltingPoint: -219.6,
        boilingPoint: -188.1
    },
    {
        number: 10,
        symbol: "Ne",
        name: "Neon",
        weight: 20.18,
        category: "Noble gas",
        meltingPoint: -248.6,
        boilingPoint: -246.1
    },
    {
        number: 11,
        symbol: "Na",
        name: "Sodium",
        weight: 22.99,
        category: "Alkali metal",
        meltingPoint: 97.794,
        boilingPoint: 883
    },
    {
        number: 12,
        symbol: "Mg",
        name: "Magnesium",
        weight: 24.305,
        category: "Alkaline earth metal",
        meltingPoint: 650,
        boilingPoint: 1090
    },
    {
        number: 13,
        symbol: "Al",
        name: "Aluminum",
        weight: 26.982,
        category: "Post-transition metal",
        meltingPoint: 660.32,
        boilingPoint: 2519
    },
    {
        number: 14,
        symbol: "Si",
        name: "Silicon",
        weight: 28.086,
        category: "Metalloid",
        meltingPoint: 1414,
        boilingPoint: 3265
    },
    {
        number: 15,
        symbol: "P",
        name: "Phosphorus",
        weight: 30.974,
        category: "Nonmetal",
        meltingPoint: 44.15,
        boilingPoint: 280.5
    },
    {
        number: 16,
        symbol: "S",
        name: "Sulfur",
        weight: 32.06,
        category: "Nonmetal",
        meltingPoint: 115.21,
        boilingPoint: 444.72
    },
    {
        number: 17,
        symbol: "Cl",
        name: "Chlorine",
        weight: 35.45,
        category: "Nonmetal",
        meltingPoint: -100.98,
        boilingPoint: -34.6
    },
    {
        number: 18,
        symbol: "Ar",
        name: "Argon",
        weight: 39.948,
        category: "Noble gas",
        meltingPoint: -189.34,
        boilingPoint: -185.86
    },
    {
        number: 19,
        symbol: "K",
        name: "Potassium",
        weight: 39.098,
        category: "Alkali metal",
        meltingPoint: 63.38,
        boilingPoint: 759
    },
    {
        number: 20,
        symbol: "Ca",
        name: "Calcium",
        weight: 40.078,
        category: "Alkaline earth metal",
        meltingPoint: 842,
        boilingPoint: 1484
    },
    {
        number: 21,
        symbol: "Sc",
        name: "Scandium",
        weight: 44.956,
        category: "Transition metal",
        meltingPoint: 1541,
        boilingPoint: 2836
    },
    {
        number: 22,
        symbol: "Ti",
        name: "Titanium",
        weight: 47.867,
        category: "Transition metal",
        meltingPoint: 1668,
        boilingPoint: 3287
    },
    {
        number: 23,
        symbol: "V",
        name: "Vanadium",
        weight: 50.942,
        category: "Transition metal",
        meltingPoint: 1910,
        boilingPoint: 3407
    },
    {
        number: 24,
        symbol: "Cr",
        name: "Chromium",
        weight: 52.0,
        category: "Transition metal",
        meltingPoint: 1907,
        boilingPoint: 2671
    },
    {
        number: 25,
        symbol: "Mn",
        name: "Manganese",
        weight: 54.938,
        category: "Transition metal",
        meltingPoint: 1246,
        boilingPoint: 2061
    },
    {
        number: 26,
        symbol: "Fe",
        name: "Iron",
        weight: 55.85,
        category: "Transition metal",
        meltingPoint: 1538,
        boilingPoint: 2861
    },
    {
        number: 27,
        symbol: "Co",
        name: "Cobalt",
        weight: 58.93,
        category: "Transition metal",
        meltingPoint: 1495,
        boilingPoint: 2927
    },
    {
        number: 28,
        symbol: "Ni",
        name: "Nickel",
        weight: 58.69,
        category: "Transition metal",
        meltingPoint: 1453,
        boilingPoint: 2732
    },
    {
        number: 29,
        symbol: "Cu",
        name: "Copper",
        weight: 63.55,
        category: "Transition metal",
        meltingPoint: 1083.4,
        boilingPoint: 2567
    },
    {
        number: 30,
        symbol: "Zn",
        name: "Zinc",
        weight: 65.38,
        category: "Transition metal",
        meltingPoint: 419.53,
        boilingPoint: 907
    },
    {
        number: 31,
        symbol: "Ga",
        name: "Gallium",
        weight: 69.723,
        category: "Post-transition metal",
        meltingPoint: 29.76,
        boilingPoint: 2204
    },
    {
        number: 32,
        symbol: "Ge",
        name: "Germanium",
        weight: 72.63,
        category: "Metalloid",
        meltingPoint: 938.25,
        boilingPoint: 2833
    },
    {
        number: 33,
        symbol: "As",
        name: "Arsenic",
        weight: 74.922,
        category: "Metalloid",
        meltingPoint: 817,
        boilingPoint: 613
    },
    {
        number: 34,
        symbol: "Se",
        name: "Selenium",
        weight: 78.96,
        category: "Nonmetal",
        meltingPoint: 217,
        boilingPoint: 685
    },
    {
        number: 35,
        symbol: "Br",
        name: "Bromine",
        weight: 79.904,
        category: "Nonmetal",
        meltingPoint: -7.2,
        boilingPoint: 58.8
    },
    {
        number: 36,
        symbol: "Kr",
        name: "Krypton",
        weight: 83.798,
        category: "Noble Gas",
        meltingPoint: -157.36,
        boilingPoint: -153.22
    },
    {
        number: 37,
        symbol: "Rb",
        name: "Rubidium",
        weight: 85.468,
        category: "Alkali Metal",
        meltingPoint: 39.31,
        boilingPoint: 688
    },
    {
        number: 38,
        symbol: "Sr",
        name: "Strontium",
        weight: 87.62,
        category: "Alkaline earth metal",
        meltingPoint: 769,
        boilingPoint: 1384
    },
    {
        number: 39,
        symbol: "Y",
        name: "Yttrium",
        weight: 88.91,
        category: "Transition metal",
        meltingPoint: 1522,
        boilingPoint: 3337
    },
    {
        number: 40,
        symbol: "Zr",
        name: "Zirconium",
        weight: 91.22,
        category: "Transition metal",
        meltingPoint: 1855,
        boilingPoint: 4409
    },
    {
        number: 41,
        symbol: "Nb",
        name: "Niobium",
        weight: 92.91,
        category: "Transition metal",
        meltingPoint: 2477,
        boilingPoint: 4744
    },
    {
        number: 42,
        symbol: "Mo",
        name: "Molybdenum",
        weight: 95.94,
        category: "Transition metal",
        meltingPoint: 2623,
        boilingPoint: 4639
    },
    {
        number: 43,
        symbol: "Tc",
        name: "Technetium",
        weight: 98,
        category: "Transition metal",
        meltingPoint: 2157,
        boilingPoint: 4265
    },
    {
        number: 44,
        symbol: "Ru",
        name: "Ruthenium",
        weight: 101.07,
        category: "Transition metal",
        meltingPoint: 2334,
        boilingPoint: 4150
    },
    {
        number: 45,
        symbol: "Rh",
        name: "Rhodium",
        weight: 102.91,
        category: "Transition metal",
        meltingPoint: 1964,
        boilingPoint: 3695
    },
    {
        number: 46,
        symbol: "Pd",
        name: "Palladium",
        weight: 106.42,
        category: "Transition metal",
        meltingPoint: 1554.9,
        boilingPoint: 2963
    },
    {
        number: 47,
        symbol: "Ag",
        name: "Silver",
        weight: 107.87,
        category: "Transition metal",
        meltingPoint: 961.78,
        boilingPoint: 2162
    },
    {
        number: 48,
        symbol: "Cd",
        name: "Cadmium",
        weight: 112.41,
        category: "Transition metal",
        meltingPoint: 594.22,
        boilingPoint: 1040
    },
    {
        number: 49,
        symbol: "In",
        name: "Indium",
        weight: 114.818,
        category: "Post-transition metal",
        meltingPoint: 156.6,
        boilingPoint: 2072.0
    },
    {
        number: 50,
        symbol: "Sn",
        name: "Tin",
        weight: 118.71,
        category: "Post-transition metal",
        meltingPoint: 231.93,
        boilingPoint: 2602.0
    },
    {
        number: 51,
        symbol: "Sb",
        name: "Antimony",
        weight: 121.76,
        category: "Metalloid",
        meltingPoint: 630.63,
        boilingPoint: 1587.0
    },
    {
        number: 52,
        symbol: "Te",
        name: "Tellurium",
        weight: 127.6,
        category: "Metalloid",
        meltingPoint: 449.51,
        boilingPoint: 988.0
    },
    {
        number: 53,
        symbol: "I",
        name: "Iodine",
        weight: 126.904,
        category: "Nonmetal",
        meltingPoint: 113.7,
        boilingPoint: 184.3
    },
    {
        number: 54,
        symbol: "Xe",
        name: "Xenon",
        weight: 131.293,
        category: "Noble Gas",
        meltingPoint: -111.8,
        boilingPoint: -108.1
    },
    {
        number: 55,
        symbol: "Cs",
        name: "Cesium",
        weight: 132.905,
        category: "Alkali Metal",
        meltingPoint: 28.44,
        boilingPoint: 671.0
    },
    {
        number: 56,
        symbol: "Ba",
        name: "Barium",
        weight: 137.327,
        category: "Alkaline Earth Metal",
        meltingPoint: 727.0,
        boilingPoint: 1845.0
    },
    {
        number: 57,
        symbol: "La",
        name: "Lanthanum",
        weight: 138.905,
        category: "Lanthanide",
        meltingPoint: 920.0,
        boilingPoint: 3464.0
    },
    // {
    //   number: 58,
    //   symbol: "Ce",
    //   name: "Cerium",
    //   weight: 140.116,
    //   category: "Lanthanide",
    //   meltingPoint: 795.0,
    //   boilingPoint: 3360.0,
    // },
    // {
    //   number: 59,
    //   symbol: "Pr",
    //   name: "Praseodymium",
    //   weight: 140.908,
    //   category: "Lanthanide",
    //   meltingPoint: 935.0,
    //   boilingPoint: 3520.0,
    // },
    // {
    //   number: 60,
    //   symbol: "Nd",
    //   name: "Neodymium",
    //   weight: 144.242,
    //   category: "Lanthanide",
    //   meltingPoint: 1021.0,
    //   boilingPoint: 3100.0,
    // },
    // {
    //   number: 61,
    //   symbol: "Pm",
    //   name: "Promethium",
    //   weight: 145.0,
    //   category: "Lanthanide",
    //   meltingPoint: 1100.0,
    //   boilingPoint: 3000.0,
    // },
    // {
    //   number: 62,
    //   symbol: "Sm",
    //   name: "Samarium",
    //   weight: 150.36,
    //   category: "Lanthanide",
    //   meltingPoint: 1345,
    //   boilingPoint: 2067,
    // },
    // {
    //   number: 63,
    //   symbol: "Eu",
    //   name: "Europium",
    //   weight: 151.96,
    //   category: "Lanthanide",
    //   meltingPoint: 1095,
    //   boilingPoint: 1802,
    // },
    // {
    //   number: 64,
    //   symbol: "Gd",
    //   name: "Gadolinium",
    //   weight: 157.25,
    //   category: "Lanthanide",
    //   meltingPoint: 1585,
    //   boilingPoint: 3546,
    // },
    // {
    //   number: 65,
    //   symbol: "Tb",
    //   name: "Terbium",
    //   weight: 158.93,
    //   category: "Lanthanide",
    //   meltingPoint: 1629,
    //   boilingPoint: 3503,
    // },
    // {
    //   number: 66,
    //   symbol: "Dy",
    //   name: "Dysprosium",
    //   weight: 162.5,
    //   category: "Lanthanide",
    //   meltingPoint: 1680,
    //   boilingPoint: 2840,
    // },
    // {
    //   number: 67,
    //   symbol: "Ho",
    //   name: "Holmium",
    //   weight: 164.93,
    //   category: "Lanthanide",
    //   meltingPoint: 1734,
    //   boilingPoint: 2993,
    // },
    // {
    //   number: 68,
    //   symbol: "Er",
    //   name: "Erbium",
    //   weight: 167.26,
    //   category: "Lanthanide",
    //   meltingPoint: 1802,
    //   boilingPoint: 3141,
    // },
    // {
    //   number: 69,
    //   symbol: "Tm",
    //   name: "Thulium",
    //   weight: 168.93,
    //   category: "Lanthanide",
    //   meltingPoint: 1818,
    //   boilingPoint: 2223,
    // },
    // {
    //   number: 70,
    //   symbol: "Yb",
    //   name: "Ytterbium",
    //   weight: 173.05,
    //   category: "Lanthanide",
    //   meltingPoint: 1092,
    //   boilingPoint: 1469,
    // },
    // {
    //   number: 71,
    //   symbol: "Lu",
    //   name: "Lutetium",
    //   weight: 174.97,
    //   category: "Lanthanide",
    //   meltingPoint: 1936,
    //   boilingPoint: 3675,
    // },
    {
        number: 72,
        symbol: "Hf",
        name: "Hafnium",
        weight: 178.49,
        category: "Transition metal",
        meltingPoint: 2506,
        boilingPoint: 4876
    },
    {
        number: 73,
        symbol: "Ta",
        name: "Tantalum",
        weight: 180.95,
        category: "Transition metal",
        meltingPoint: 3290,
        boilingPoint: 5731
    },
    {
        number: 74,
        symbol: "W",
        name: "Tungsten",
        weight: 183.84,
        category: "Transition metal",
        meltingPoint: 3695,
        boilingPoint: 5828
    },
    {
        number: 75,
        symbol: "Re",
        name: "Rhenium",
        weight: 186.207,
        category: "Transition metal",
        meltingPoint: 3186,
        boilingPoint: 5596
    },
    {
        number: 76,
        symbol: "Os",
        name: "Osmium",
        weight: 190.23,
        category: "Transition metal",
        meltingPoint: 3306,
        boilingPoint: 5285
    },
    {
        number: 77,
        symbol: "Ir",
        name: "Iridium",
        weight: 192.217,
        category: "Transition metal",
        meltingPoint: 2719,
        boilingPoint: 4403
    },
    {
        number: 78,
        symbol: "Pt",
        name: "Platinum",
        weight: 195.084,
        category: "Transition metal",
        meltingPoint: 2041.4,
        boilingPoint: 4098
    },
    {
        number: 79,
        symbol: "Au",
        name: "Gold",
        weight: 196.966,
        category: "Transition metal",
        meltingPoint: 1064.18,
        boilingPoint: 2856
    },
    {
        number: 80,
        symbol: "Hg",
        name: "Mercury",
        weight: 200.592,
        category: "Transition metal",
        meltingPoint: -38.83,
        boilingPoint: 356.73
    },
    {
        number: 81,
        symbol: "Tl",
        name: "Thallium",
        weight: 204.38,
        category: "Post-transition metal",
        meltingPoint: 304,
        boilingPoint: 1473
    },
    {
        number: 82,
        symbol: "Pb",
        name: "Lead",
        weight: 207.2,
        category: "Post-transition metal",
        meltingPoint: 327.46,
        boilingPoint: 1749
    },
    {
        number: 83,
        symbol: "Bi",
        name: "Bismuth",
        weight: 208.9804,
        category: "Post-transition metal",
        meltingPoint: 271.3,
        boilingPoint: 1564
    },
    {
        number: 84,
        symbol: "Po",
        name: "Polonium",
        weight: 208.9824,
        category: "Post-transition metal",
        meltingPoint: 254,
        boilingPoint: 962
    },
    {
        number: 85,
        symbol: "At",
        name: "Astatine",
        weight: 209.9871,
        category: "Post-transition metal",
        meltingPoint: 302,
        boilingPoint: 337
    },
    {
        number: 86,
        symbol: "Rn",
        name: "Radon",
        weight: 222.0176,
        category: "Noble gas",
        meltingPoint: -71,
        boilingPoint: -61.7
    },
    {
        number: 87,
        symbol: "Fr",
        name: "Francium",
        weight: 223,
        category: "Alkali metal",
        meltingPoint: 27,
        boilingPoint: 677
    },
    {
        number: 88,
        symbol: "Ra",
        name: "Radium",
        weight: 226,
        category: "Alkaline earth metal",
        meltingPoint: 700,
        boilingPoint: 1737
    },
    {
        number: 89,
        symbol: "Ac",
        name: "Actinium",
        weight: 227,
        category: "Actinide",
        meltingPoint: 1050,
        boilingPoint: 3200
    },
    // {
    //   number: 90,
    //   symbol: "Th",
    //   name: "Thorium",
    //   weight: 232.0377,
    //   category: "Actinide",
    //   meltingPoint: 1750,
    //   boilingPoint: 4820,
    // },
    // {
    //   number: 91,
    //   symbol: "Pa",
    //   name: "Protactinium",
    //   weight: 231.03588,
    //   category: "Actinide",
    //   meltingPoint: 1841,
    //   boilingPoint: 4300,
    // },
    // {
    //   number: 92,
    //   symbol: "U",
    //   name: "Uranium",
    //   weight: 238.02891,
    //   category: "Actinide",
    //   meltingPoint: 1405.3,
    //   boilingPoint: 4404,
    // },
    // {
    //   number: 93,
    //   symbol: "Np",
    //   name: "Neptunium",
    //   weight: 237,
    //   category: "Actinide",
    //   meltingPoint: 913,
    //   boilingPoint: 4273,
    // },
    // {
    //   number: 94,
    //   symbol: "Pu",
    //   name: "Plutonium",
    //   weight: 244,
    //   category: "Actinide",
    //   meltingPoint: 912.5,
    //   boilingPoint: 3501,
    // },
    // {
    //   number: 95,
    //   symbol: "Am",
    //   name: "Americium",
    //   weight: 243,
    //   category: "Actinide",
    //   meltingPoint: 1449,
    //   boilingPoint: 2880,
    // },
    // {
    //   number: 96,
    //   symbol: "Cm",
    //   name: "Curium",
    //   weight: 247,
    //   category: "Actinide",
    //   meltingPoint: 1618,
    //   boilingPoint: 3383,
    // },
    // {
    //   number: 97,
    //   symbol: "Bk",
    //   name: "Berkelium",
    //   weight: 247,
    //   category: "Actinide",
    //   meltingPoint: 1323,
    //   boilingPoint: 2900,
    // },
    // {
    //   number: 98,
    //   symbol: "Cf",
    //   name: "Californium",
    //   weight: 251,
    //   category: "Actinide",
    //   meltingPoint: 1173,
    //   boilingPoint: 1743,
    // },
    // {
    //   number: 99,
    //   symbol: "Es",
    //   name: "Einsteinium",
    //   weight: 252,
    //   category: "Actinide",
    //   meltingPoint: 1133,
    //   boilingPoint: 1269,
    // },
    // {
    //   number: 100,
    //   symbol: "Fm",
    //   name: "Fermium",
    //   weight: 257,
    //   category: "Actinide",
    //   meltingPoint: 1800,
    //   boilingPoint: 3000,
    // },
    // {
    //   number: 101,
    //   symbol: "Md",
    //   name: "Mendelevium",
    //   weight: 258,
    //   category: "Actinide",
    //   meltingPoint: 1100,
    //   boilingPoint: 1100,
    // },
    // {
    //   number: 102,
    //   symbol: "No",
    //   name: "Nobelium",
    //   weight: 259,
    //   category: "Actinide",
    //   meltingPoint: 1100,
    //   boilingPoint: 1100,
    // },
    // {
    //   number: 103,
    //   symbol: "Lr",
    //   name: "Lawrencium",
    //   weight: 262,
    //   category: "Actinide",
    //   meltingPoint: 1900,
    //   boilingPoint: 2000,
    // },
    {
        number: 104,
        symbol: "Rf",
        name: "Rutherfordium",
        weight: 267,
        category: "Transition metal",
        meltingPoint: 2400,
        boilingPoint: 5800
    },
    {
        number: 105,
        symbol: "Db",
        name: "Dubnium",
        weight: 270,
        category: "Transition metal",
        meltingPoint: null,
        boilingPoint: null
    },
    {
        number: 106,
        symbol: "Sg",
        name: "Seaborgium",
        weight: 271,
        category: "Transition metal",
        meltingPoint: null,
        boilingPoint: null
    },
    {
        number: 107,
        symbol: "Bh",
        name: "Bohrium",
        weight: 270,
        category: "Transition metal",
        meltingPoint: null,
        boilingPoint: null
    },
    {
        number: 108,
        symbol: "Hs",
        name: "Hassium",
        weight: 277,
        category: "Transition metal",
        meltingPoint: null,
        boilingPoint: null
    },
    {
        number: 109,
        symbol: "Mt",
        name: "Meitnerium",
        weight: 278,
        category: "Unknown",
        meltingPoint: null,
        boilingPoint: null
    },
    {
        number: 110,
        symbol: "Ds",
        name: "Darmstadtium",
        weight: 281,
        category: "Unknown",
        meltingPoint: null,
        boilingPoint: null
    },
    {
        number: 111,
        symbol: "Rg",
        name: "Roentgenium",
        weight: 282,
        category: "Unknown",
        meltingPoint: null,
        boilingPoint: null
    },
    {
        number: 112,
        symbol: "Cn",
        name: "Copernicium",
        weight: 285,
        category: "Unknown",
        meltingPoint: null,
        boilingPoint: null
    },
    {
        number: 113,
        symbol: "Nh",
        name: "Nihonium",
        weight: 284,
        category: "Unknown",
        meltingPoint: null,
        boilingPoint: null
    },
    {
        number: 114,
        symbol: "Fl",
        name: "Flerovium",
        weight: 289,
        category: "Unknown",
        meltingPoint: null,
        boilingPoint: null
    },
    {
        number: 115,
        symbol: "Mc",
        name: "Moscovium",
        weight: 288,
        category: "Unknown",
        meltingPoint: null,
        boilingPoint: null
    },
    {
        number: 116,
        symbol: "Lv",
        name: "Livermorium",
        weight: 293,
        category: "Unknown",
        meltingPoint: null,
        boilingPoint: null
    },
    {
        number: 117,
        symbol: "Ts",
        name: "Tennessine",
        weight: 294,
        category: "Unknown",
        meltingPoint: null,
        boilingPoint: null
    },
    {
        number: 118,
        symbol: "Og",
        name: "Oganesson",
        weight: 294,
        category: "Unknown",
        meltingPoint: null,
        boilingPoint: null
    }
    ];
    const [selectedElement, setSelectedElement] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleClick = (element) => {
        setSelectedElement(element)
    }
    const closeModalData = () => {
        setSelectedElement(null)
    }

    const categorySelection = (category) => {
        setSelectedCategory(category);
    }
    return (
        <>
            <h1>Periodic Table of Elements</h1>
            <div className='periodic-table'>
                {
                    elements && elements.map((element) => (
                        <Element name={element.name} symbol={element.symbol} number={element.number} weight={element.weight} category={element.category} onClick={() => handleClick(element)} selected={selectedCategory === element.category}/>
                    ))}
            </div>
            {
                selectedElement && <ElementModal selectedElement={selectedElement} closeModalData={closeModalData}/>
            }
            <div>
                <h3>Element Category Selection</h3>
                <CategorySelection categorySelection={categorySelection}/>
            </div>
        </>
    )
}
